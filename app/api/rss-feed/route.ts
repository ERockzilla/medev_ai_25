import { NextResponse } from 'next/server';
import { fetchRSS, fetchClinicalTrials, NewsItem } from '@/lib/rssFetcher';

// Cache for 30 minutes
export const revalidate = 1800;

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
        // Fetch all feeds in parallel
        const feedPromises = sources.map(s => fetchRSS(s.url, s.name, s.category));
        const clinicalTrialsPromise = fetchClinicalTrials();

        const results = await Promise.all([...feedPromises, clinicalTrialsPromise]);

        // Flatten, sort by date, and limit to 100 items
        const allNews: NewsItem[] = results
            .flat()
            .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
            .slice(0, 100);

        return NextResponse.json(allNews, {
            headers: {
                'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
            },
        });
    } catch (error) {
        console.error('RSS API error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch RSS feeds' },
            { status: 500 }
        );
    }
}
