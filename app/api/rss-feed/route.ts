import { NextResponse } from 'next/server';
import { fetchRSS, fetchClinicalTrials, NewsItem } from '@/lib/rssFetcher';

// Force this route to always execute dynamically (never cached at build time)
// This is critical for hosts like AWS Amplify that don't support ISR
export const dynamic = 'force-dynamic';

// In-memory server-side cache to avoid hammering upstream feeds on every request
let cachedData: NewsItem[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// RSS sources configuration
const sources = [
    { url: 'https://hnrss.org/frontpage', name: 'Hacker News' },
    { url: 'https://www.reddit.com/r/medicaldevices/.rss', name: 'Reddit MedDev' },
    { url: 'https://export.arxiv.org/rss/cs.AI', name: 'arXiv AI' },
    { url: 'https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/press-releases/rss.xml', name: 'FDA News', category: 'Regulatory' },
    { url: 'https://www.medtechdive.com/feeds/news/', name: 'MedTech Dive' },
];

export async function GET() {
    try {
        const now = Date.now();

        // Return cached data if still fresh
        if (cachedData && (now - cacheTimestamp) < CACHE_TTL_MS) {
            return NextResponse.json(cachedData, {
                headers: {
                    'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
                    'X-Cache': 'HIT',
                    'X-Cache-Age': String(Math.floor((now - cacheTimestamp) / 1000)),
                },
            });
        }

        // Fetch all feeds in parallel
        const feedPromises = sources.map(s => fetchRSS(s.url, s.name, s.category));
        const clinicalTrialsPromise = fetchClinicalTrials();

        const results = await Promise.all([...feedPromises, clinicalTrialsPromise]);

        // Flatten, sort by date, and limit to 100 items
        const allNews: NewsItem[] = results
            .flat()
            .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
            .slice(0, 100);

        // Update in-memory cache
        cachedData = allNews;
        cacheTimestamp = now;

        return NextResponse.json(allNews, {
            headers: {
                'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
                'X-Cache': 'MISS',
            },
        });
    } catch (error) {
        console.error('RSS API error:', error);

        // If we have stale cached data, return it rather than an error
        if (cachedData) {
            return NextResponse.json(cachedData, {
                headers: {
                    'Cache-Control': 'public, max-age=60',
                    'X-Cache': 'STALE',
                },
            });
        }

        return NextResponse.json(
            { error: 'Failed to fetch RSS feeds' },
            { status: 500 }
        );
    }
}

