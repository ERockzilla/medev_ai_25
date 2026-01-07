'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { RefreshCw, ExternalLink, AlertCircle } from 'lucide-react';
import { useBookmarks } from '@/contexts/BookmarkContext';
import { trackBookmark } from '@/lib/tracking';

interface FeedItem {
    title: string;
    link: string;
    pubDate: string;
    source: string;
    contentSnippet?: string;
    category?: string;
}

// Source color mapping - Subtle glassmorphism style
const sourceColors: Record<string, string> = {
    'Hacker News': 'bg-orange-500/60',
    'Reddit MedDev': 'bg-red-500/60',
    'arXiv AI': 'bg-purple-500/60',
    'FDA News': 'bg-blue-600/60',
    'ClinicalTrials.gov': 'bg-green-600/60',
    'PubMed': 'bg-teal-500/60',
    'MedTech Dive': 'bg-indigo-500/60',
};

interface DashboardFeedWidgetProps {
    maxItems?: number;
}

export default function DashboardFeedWidget({ maxItems = 12 }: DashboardFeedWidgetProps) {
    const [items, setItems] = useState<FeedItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const { isBookmarked, toggleBookmark } = useBookmarks();

    const fetchFeed = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/rss-feed');
            if (!response.ok) throw new Error('Failed to fetch feed');
            const data = await response.json();
            setItems(data.slice(0, maxItems));
        } catch (err) {
            setError('Unable to load feed');
            console.error('RSS feed error:', err);
        } finally {
            setLoading(false);
        }
    }, [maxItems]);

    useEffect(() => {
        fetchFeed();
    }, [fetchFeed]);

    // Keyboard navigation
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (items.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => Math.max(prev - 1, 0));
                break;
            case 'Enter':
                if (selectedIndex >= 0 && items[selectedIndex]) {
                    window.open(items[selectedIndex].link, '_blank', 'noopener,noreferrer');
                }
                break;
            case 'Escape':
                setSelectedIndex(-1);
                break;
        }
    }, [items, selectedIndex]);

    // Scroll selected item into view
    useEffect(() => {
        if (selectedIndex >= 0 && containerRef.current) {
            const selectedElement = containerRef.current.querySelector(`[data-index="${selectedIndex}"]`);
            selectedElement?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }, [selectedIndex]);

    const handleBookmarkClick = (item: FeedItem, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isBookmarked(item.link)) {
            trackBookmark(item.title, item.link);
        }
        toggleBookmark({
            title: item.title,
            url: item.link,
            type: 'page',
        });
    };

    // Format relative date
    const formatRelativeDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

        if (diffHours < 1) return 'Just now';
        if (diffHours < 24) return `${diffHours}h ago`;
        const diffDays = Math.floor(diffHours / 24);
        if (diffDays < 7) return `${diffDays}d ago`;
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    // Loading skeleton
    if (loading) {
        return (
            <div className="space-y-2 p-3">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="h-3 bg-gray-200 rounded w-full mb-1.5"></div>
                        <div className="flex gap-2">
                            <div className="h-2 bg-gray-200 rounded w-16"></div>
                            <div className="h-2 bg-gray-200 rounded w-12"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="p-4 text-center">
                <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500 mb-2">{error}</p>
                <button
                    onClick={fetchFeed}
                    className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 mx-auto"
                >
                    <RefreshCw className="w-3 h-3" />
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="focus:outline-none h-full flex flex-col"
            role="listbox"
            aria-label="RSS Feed items"
        >
            {/* Feed Items - fills available space */}
            <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
                {items.map((item, index) => {
                    const bookmarked = isBookmarked(item.link);
                    const isSelected = index === selectedIndex;

                    return (
                        <div
                            key={`${item.link}-${index}`}
                            data-index={index}
                            role="option"
                            aria-selected={isSelected}
                            className={`p-2.5 hover:bg-gray-50 transition-colors cursor-pointer group ${isSelected ? 'bg-blue-50 ring-1 ring-blue-200' : ''
                                }`}
                            onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
                        >
                            <p className="text-xs font-medium text-gray-800 line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </p>
                            <div className="flex items-center gap-1.5 flex-wrap">
                                <span className={`text-[10px] font-medium text-white/90 px-1.5 py-0.5 rounded backdrop-blur-sm border border-white/10 ${sourceColors[item.source] || 'bg-gray-500/60'}`}>
                                    {item.source}
                                </span>
                                <span className="text-[10px] text-gray-400">
                                    {formatRelativeDate(item.pubDate)}
                                </span>
                                <button
                                    onClick={(e) => handleBookmarkClick(item, e)}
                                    className={`ml-auto p-1 rounded transition-colors ${bookmarked
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-400 hover:text-blue-600 opacity-0 group-hover:opacity-100'
                                        }`}
                                    title={bookmarked ? 'Remove bookmark' : 'Bookmark'}
                                >
                                    <svg className={`w-3 h-3 ${bookmarked ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer with link to full feed */}
            <div className="px-3 py-2 bg-gray-50 border-t border-gray-200 flex-shrink-0">
                <a
                    href="/news"
                    className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 justify-center"
                >
                    View all {items.length} articles
                    <ExternalLink className="w-3 h-3" />
                </a>
            </div>
        </div>
    );
}
