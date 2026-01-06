import { fetchRSS, fetchClinicalTrials, NewsItem } from '@/lib/rssFetcher';
import FeedFilter from './FeedFilter';

// Source color mapping for visual distinction
const sourceColors: Record<string, string> = {
    'Hacker News': 'bg-orange-500',
    'Reddit MedDev': 'bg-red-500',
    'arXiv AI': 'bg-purple-500',
    'FDA News': 'bg-blue-600',
    'ClinicalTrials.gov': 'bg-green-600',
    'PubMed': 'bg-teal-500',
    'MedTech Dive': 'bg-indigo-500',
};

// Placeholder thumbnail for items without one
const DEFAULT_THUMBNAIL = 'data:image/svg+xml,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 120 80">
  <rect fill="#e2e8f0" width="120" height="80"/>
  <path fill="#94a3b8" d="M45 25h30v20H45z"/>
  <circle fill="#94a3b8" cx="50" cy="45" r="8"/>
  <path fill="#94a3b8" d="M40 55l15-12 15 12 20-16v16H40z"/>
</svg>
`);

export default async function NewsSidebar() {
    // Define multiple sources for comprehensive coverage
    const sources = [
        // Tech/AI feeds
        { url: 'https://hnrss.org/frontpage', name: 'Hacker News' },
        { url: 'https://www.reddit.com/r/medicaldevices/.rss', name: 'Reddit MedDev' },
        // arXiv for research
        { url: 'https://export.arxiv.org/rss/cs.AI', name: 'arXiv AI' },
        // FDA News - regulatory updates (using FDA Medical Devices RSS)
        { url: 'https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/press-releases/rss.xml', name: 'FDA News', category: 'Regulatory' },
        // MedTech industry news
        { url: 'https://www.medtechdive.com/feeds/news/', name: 'MedTech Dive' },
    ];

    // Fetch all feeds in parallel
    const feedPromises = sources.map(s => fetchRSS(s.url, s.name, s.category));
    const clinicalTrialsPromise = fetchClinicalTrials();

    const results = await Promise.all([...feedPromises, clinicalTrialsPromise]);

    // Flatten and sort by date - get up to 100 items
    const allNews: NewsItem[] = results
        .flat()
        .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
        .slice(0, 100);

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-700">
                <h3 className="text-xl font-bold text-white">
                    Input Feed
                </h3>
                <p className="text-slate-300 text-sm mt-1">
                    {sources.length + 1} sources • {allNews.length} articles
                </p>
            </div>

            {/* Filter + Articles */}
            {allNews.length > 0 ? (
                <FeedFilter
                    items={allNews}
                    sourceColors={sourceColors}
                    defaultThumbnail={DEFAULT_THUMBNAIL}
                />
            ) : (
                <div className="text-center py-12 px-6">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <p className="text-gray-500 mb-2 font-medium">Unable to load external feeds</p>
                    <p className="text-sm text-gray-400">This may be due to network restrictions. Try refreshing or check back later.</p>
                </div>
            )}
        </div>
    );
}



