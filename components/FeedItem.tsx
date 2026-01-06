'use client';

import { Bookmark } from 'lucide-react';
import { useBookmarks } from '@/contexts/BookmarkContext';
import { trackBookmark } from '@/lib/tracking';

interface FeedItemProps {
    title: string;
    link: string;
    source: string;
    contentSnippet?: string;
    thumbnail?: string;
    category?: string;
    pubDate: string;
    sourceColor: string;
    defaultThumbnail: string;
}

export default function FeedItem({
    title,
    link,
    source,
    contentSnippet,
    thumbnail,
    category,
    pubDate,
    sourceColor,
    defaultThumbnail,
}: FeedItemProps) {
    const { isBookmarked, toggleBookmark } = useBookmarks();
    const bookmarked = isBookmarked(link);

    const handleBookmarkClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!bookmarked) {
            trackBookmark(title, link);
        }

        toggleBookmark({
            title,
            url: link,
            type: 'page',
        });
    };

    // Format relative date
    const formatRelativeDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) return 'Today';
        if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    return (
        <div className="flex gap-4 p-4 hover:bg-gray-50 transition-colors group border-b border-gray-100 last:border-0">
            {/* Thumbnail */}
            <div
                className="flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden bg-gray-200 bg-cover bg-center"
                style={{
                    backgroundImage: thumbnail
                        ? `url(${thumbnail}), url(${defaultThumbnail})`
                        : `url(${defaultThumbnail})`
                }}
            />

            {/* Content */}
            <div className="flex-1 min-w-0">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-2 mb-1">
                        {title}
                    </p>
                </a>
                {contentSnippet && contentSnippet.length > 20 && (
                    <p className="text-xs text-gray-500 line-clamp-1 mb-1.5">{contentSnippet}</p>
                )}
                <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-medium text-white px-1.5 py-0.5 rounded ${sourceColor}`}>
                        {source}
                    </span>
                    {category && (
                        <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                            {category}
                        </span>
                    )}
                    <span className="text-xs text-gray-400">
                        {formatRelativeDate(pubDate)}
                    </span>
                </div>
            </div>

            {/* Bookmark Button */}
            <button
                onClick={handleBookmarkClick}
                className={`flex-shrink-0 p-2 rounded-lg transition-colors self-start ${bookmarked
                        ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                        : 'text-gray-400 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                title={bookmarked ? 'Remove bookmark' : 'Bookmark this article'}
            >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
            </button>
        </div>
    );
}
