'use client';

import Link from 'next/link';
import { useBookmarks } from '@/contexts/BookmarkContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const typeColors: Record<string, string> = {
    standard: 'bg-blue-100 text-blue-700 border-blue-200',
    regulation: 'bg-green-100 text-green-700 border-green-200',
    guide: 'bg-purple-100 text-purple-700 border-purple-200',
    'how-to': 'bg-indigo-100 text-indigo-700 border-indigo-200',
    tool: 'bg-orange-100 text-orange-700 border-orange-200',
    page: 'bg-gray-100 text-gray-700 border-gray-200',
};

const typeIcons: Record<string, string> = {
    standard: '📋',
    regulation: '⚖️',
    guide: '📖',
    'how-to': '🔧',
    tool: '🛠️',
    page: '📄',
};

export default function SiteBookmarksRow() {
    const { bookmarks } = useBookmarks();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Filter to only site bookmarks (internal URLs, not external RSS)
    const siteBookmarks = bookmarks.filter(b => b.url.startsWith('/'));

    // Check scroll position for arrow visibility
    const updateScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        updateScrollButtons();
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', updateScrollButtons);
            window.addEventListener('resize', updateScrollButtons);
        }
        return () => {
            if (ref) {
                ref.removeEventListener('scroll', updateScrollButtons);
            }
            window.removeEventListener('resize', updateScrollButtons);
        };
    }, [siteBookmarks]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    if (siteBookmarks.length === 0) {
        return null;
    }

    return (
        <div className="relative group">
            {/* Left scroll button */}
            {canScrollLeft && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-white/90 shadow-md rounded-full border border-gray-200 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
            )}

            {/* Scrollable container */}
            <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide py-2 px-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {siteBookmarks.map((bookmark) => (
                    <Link
                        key={bookmark.id}
                        href={bookmark.url}
                        className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all hover:shadow-sm hover:scale-105 ${typeColors[bookmark.type]}`}
                        title={bookmark.title}
                    >
                        <span>{typeIcons[bookmark.type]}</span>
                        <span className="max-w-[120px] truncate">{bookmark.title}</span>
                    </Link>
                ))}
            </div>

            {/* Right scroll button */}
            {canScrollRight && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-white/90 shadow-md rounded-full border border-gray-200 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
            )}

            {/* Gradient fade edges */}
            {canScrollLeft && (
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            )}
            {canScrollRight && (
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            )}
        </div>
    );
}
