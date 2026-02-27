'use client';

import { useState, useEffect, useCallback } from 'react';
import FeedFilter from './FeedFilter';
import { RefreshCw, Loader2 } from 'lucide-react';

interface NewsItem {
    title: string;
    link: string;
    pubDate: string;
    source: string;
    contentSnippet?: string;
    thumbnail?: string;
    category?: string;
}

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

// Auto-refresh interval: 15 minutes
const REFRESH_INTERVAL_MS = 15 * 60 * 1000;

export default function NewsSidebar() {
    const [allNews, setAllNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchFeed = useCallback(async (isManualRefresh = false) => {
        if (isManualRefresh) {
            setIsRefreshing(true);
        } else if (allNews.length === 0) {
            setLoading(true);
        }
        setError(null);

        try {
            const response = await fetch('/api/rss-feed');
            if (!response.ok) throw new Error(`Feed fetch failed: ${response.status}`);
            const data: NewsItem[] = await response.json();
            setAllNews(data);
            setLastUpdated(new Date());
        } catch (err) {
            console.error('NewsSidebar fetch error:', err);
            // Only show error if we have no data at all
            if (allNews.length === 0) {
                setError('Unable to load external feeds. Try refreshing or check back later.');
            }
        } finally {
            setLoading(false);
            setIsRefreshing(false);
        }
    }, [allNews.length]);

    // Initial fetch + auto-refresh
    useEffect(() => {
        fetchFeed();

        const interval = setInterval(() => {
            fetchFeed();
        }, REFRESH_INTERVAL_MS);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formatLastUpdated = () => {
        if (!lastUpdated) return '';
        const now = new Date();
        const diffMs = now.getTime() - lastUpdated.getTime();
        const diffMin = Math.floor(diffMs / 60000);
        if (diffMin < 1) return 'Just now';
        if (diffMin < 60) return `${diffMin}m ago`;
        return `${Math.floor(diffMin / 60)}h ago`;
    };

    if (loading) {
        return (
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-700">
                    <h3 className="text-xl font-bold text-white">Input Feed</h3>
                    <p className="text-slate-300 text-sm mt-1">Loading sources...</p>
                </div>
                <div className="flex items-center justify-center p-12">
                    <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
                </div>
            </div>
        );
    }

    if (error && allNews.length === 0) {
        return (
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-700">
                    <h3 className="text-xl font-bold text-white">Input Feed</h3>
                </div>
                <div className="text-center py-12 px-6">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <p className="text-gray-500 mb-2 font-medium">{error}</p>
                    <button
                        onClick={() => fetchFeed(true)}
                        className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Try again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-700">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-white">
                            Input Feed
                        </h3>
                        <p className="text-slate-300 text-sm mt-1">
                            6 sources • {allNews.length} articles
                            {lastUpdated && (
                                <span className="text-slate-400"> • Updated {formatLastUpdated()}</span>
                            )}
                        </p>
                    </div>
                    <button
                        onClick={() => fetchFeed(true)}
                        disabled={isRefreshing}
                        className="p-2 text-slate-300 hover:text-white transition-colors disabled:opacity-50"
                        title="Refresh feed"
                    >
                        <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                    </button>
                </div>
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
                    <p className="text-gray-500">No articles loaded yet.</p>
                </div>
            )}
        </div>
    );
}
