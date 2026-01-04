import { fetchRSS, NewsItem } from '@/lib/rssFetcher';

export default async function NewsSidebar() {
    // Define multiple sources for redundancy
    const sources = [
        // Tech/AI feeds that are generally more accessible
        { url: 'https://hnrss.org/frontpage', name: 'Hacker News' },
        { url: 'https://www.reddit.com/r/medicaldevices/.rss', name: 'Reddit MedDev' },
        // arXiv as backup
        { url: 'https://export.arxiv.org/rss/cs.AI', name: 'arXiv AI' },
    ];

    // Fetch all feeds in parallel
    const feedPromises = sources.map(s => fetchRSS(s.url, s.name));
    const results = await Promise.all(feedPromises);

    // Flatten and sort by date
    const allNews: NewsItem[] = results
        .flat()
        .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
        .slice(0, 12); // Top 12 items

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Latest Industry News
            </h3>
            <div className="space-y-5">
                {allNews.length > 0 ? (
                    allNews.map((item, i) => (
                        <a
                            key={i}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                        >
                            <p className="text-base font-medium text-gray-800 group-hover:text-blue-600 line-clamp-2 mb-2">
                                {item.title}
                            </p>
                            {item.contentSnippet && item.contentSnippet.length > 10 && (
                                <p className="text-sm text-gray-500 line-clamp-2 mb-2">{item.contentSnippet}</p>
                            )}
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-white bg-blue-500 px-2 py-0.5 rounded">
                                    {item.source}
                                </span>
                                <span className="text-xs text-gray-400">
                                    {new Date(item.pubDate).toLocaleDateString()}
                                </span>
                            </div>
                        </a>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <p className="text-gray-500 mb-2">Unable to load external news feeds.</p>
                        <p className="text-sm text-gray-400">This may be due to network restrictions. Try refreshing or check back later.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
