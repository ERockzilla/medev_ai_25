'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronRight, Pause, Play, Loader2 } from 'lucide-react';

interface FeedItem {
    title: string;
    link: string;
    pubDate: string;
    source: string;
}

interface MobileRSSFeedProps {
    items?: FeedItem[];
    autoScrollSpeed?: number;
}

// Animated incoming data icon - shows streaming signal bars
function LiveSignalIcon() {
    return (
        <div className="flex items-center gap-[2px]" role="img" aria-label="Live feed indicator">
            <span className="w-[3px] h-2 bg-emerald-400 rounded-sm animate-pulse" style={{ animationDelay: '0ms' }} />
            <span className="w-[3px] h-3 bg-emerald-400 rounded-sm animate-pulse" style={{ animationDelay: '150ms' }} />
            <span className="w-[3px] h-4 bg-emerald-400 rounded-sm animate-pulse" style={{ animationDelay: '300ms' }} />
            <span className="w-[3px] h-3 bg-emerald-400 rounded-sm animate-pulse" style={{ animationDelay: '450ms' }} />
        </div>
    );
}

const sourceColors: Record<string, string> = {
    'Hacker News': 'bg-orange-500/80',
    'Reddit MedDev': 'bg-red-500/80',
    'arXiv AI': 'bg-purple-500/80',
    'FDA News': 'bg-blue-600/80',
    'ClinicalTrials.gov': 'bg-green-600/80',
    'PubMed': 'bg-teal-500/80',
    'MedTech Dive': 'bg-indigo-500/80',
};

export default function MobileRSSFeed({ items: propItems, autoScrollSpeed = 3000 }: MobileRSSFeedProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [items, setItems] = useState<FeedItem[]>(propItems || []);
    const [loading, setLoading] = useState(!propItems || propItems.length === 0);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    // Fetch data if not provided
    useEffect(() => {
        if (propItems && propItems.length > 0) {
            setItems(propItems);
            setLoading(false);
            return;
        }

        const fetchFeed = async () => {
            try {
                const response = await fetch('/api/rss-feed');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setItems(data.slice(0, 15));
            } catch (err) {
                console.error('MobileRSSFeed fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchFeed();
    }, [propItems]);

    // Auto-scroll
    useEffect(() => {
        if (isPaused || isDragging || !scrollRef.current || items.length === 0) return;

        const interval = setInterval(() => {
            if (!scrollRef.current) return;
            const { scrollLeft: sl, scrollWidth, clientWidth } = scrollRef.current;

            if (sl + clientWidth >= scrollWidth - 10) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
            }
        }, autoScrollSpeed);

        return () => clearInterval(interval);
    }, [isPaused, isDragging, autoScrollSpeed, items.length]);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        setIsPaused(true);
        setIsDragging(true);
        startX.current = e.touches[0].clientX;
        scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (!isDragging || !scrollRef.current) return;
        const x = e.touches[0].clientX;
        const delta = startX.current - x;
        scrollRef.current.scrollLeft = scrollLeft.current + delta;
    }, [isDragging]);

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const now = new Date();
        const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
        if (diffHours < 1) return 'Now';
        if (diffHours < 24) return `${diffHours}h`;
        return `${Math.floor(diffHours / 24)}d`;
    };

    if (loading) {
        return (
            <div className="w-full min-w-0 bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-slate-800 to-slate-700">
                    <div className="flex items-center gap-2">
                        <LiveSignalIcon />
                        <h3 className="text-sm font-bold text-white">RSS</h3>
                    </div>
                </div>
                <div className="flex items-center justify-center p-4">
                    <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
                </div>
            </div>
        );
    }

    if (items.length === 0) return null;

    return (
        <section aria-label="RSS News Feed" className="w-full min-w-0 bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-slate-800 to-slate-700">
                <div className="flex items-center gap-2">
                    <LiveSignalIcon />
                    <h3 className="text-sm font-bold text-white">RSS</h3>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsPaused(!isPaused)}
                        className="p-1 text-white/70 hover:text-white transition-colors"
                        aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                    >
                        {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                    </button>
                    <Link
                        href="/news"
                        className="flex items-center gap-1 text-xs text-white/80 hover:text-white"
                    >
                        View all <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="min-w-0 flex gap-3 p-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
                style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {items.map((item, idx) => (
                    <a
                        key={`${item.link}-${idx}`}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-[200px] snap-start p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group no-tap-highlight"
                    >
                        <p className="text-xs font-medium text-gray-800 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                        </p>
                        <div className="flex items-center justify-between">
                            <span className={`text-[10px] text-white px-1.5 py-0.5 rounded ${sourceColors[item.source] || 'bg-gray-500/80'}`}>
                                {item.source}
                            </span>
                            <span className="text-[10px] text-gray-400">{formatDate(item.pubDate)}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
