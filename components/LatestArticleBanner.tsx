'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FEED_ITEMS } from '@/lib/feedConfig';

// Mini version of the AnimatedLogo - just the inner starfish/hexagon core
function MiniLogo() {
    return (
        <svg viewBox="0 0 40 40" className="w-full h-full">
            <defs>
                <radialGradient id="miniStarGlow" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="30%" stopColor="#60a5fa" />
                    <stop offset="60%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                </radialGradient>
                <filter id="miniGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background circle */}
            <circle cx="20" cy="20" r="18" fill="white" opacity="0.9" />

            {/* Inner rotating spokes */}
            <g className="animate-spin-slow" style={{ transformOrigin: '20px 20px' }}>
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <g key={i} transform={`rotate(${angle} 20 20)`}>
                        <line x1="20" y1="20" x2="20" y2="8" stroke="url(#miniStarGlow)" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="20" cy="8" r="2.5" fill="#10b981" filter="url(#miniGlow)" />
                        <circle cx="20" cy="8" r="1" fill="white" />
                    </g>
                ))}
            </g>

            {/* Center starfish */}
            <g transform="translate(20 20)">
                <circle cx="0" cy="0" r="6" fill="url(#miniStarGlow)" opacity="0.8" filter="url(#miniGlow)" />
                {[0, 72, 144, 216, 288].map((angle, i) => (
                    <g key={i} transform={`rotate(${angle})`}>
                        <path d="M 0,0 L 0.5,-3 L 1,-4 L 0.5,-4.5 L 0,-5 L -0.5,-4.5 L -1,-4 L -0.5,-3 Z" fill="white" opacity="0.95" />
                    </g>
                ))}
                <path d="M 0,-1.5 L 1.3,-0.75 L 1.3,0.75 L 0,1.5 L -1.3,0.75 L -1.3,-0.75 Z" fill="url(#miniStarGlow)" stroke="white" strokeWidth="0.4" />
                <circle cx="0" cy="0" r="1" fill="white" filter="url(#miniGlow)" />
            </g>

            <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
        </svg>
    );
}

// Category colors
const categoryColors: Record<string, string> = {
    'Innovation': 'from-purple-500/20 to-blue-500/20',
    'AI Tools': 'from-blue-500/20 to-teal-500/20',
    'Standards': 'from-blue-500/20 to-indigo-500/20',
    'Regulations': 'from-red-500/20 to-orange-500/20',
    'Tools': 'from-green-500/20 to-teal-500/20',
    'Guides': 'from-indigo-500/20 to-purple-500/20',
    'How-To': 'from-teal-500/20 to-green-500/20',
    'Analysis': 'from-orange-500/20 to-red-500/20',
    'Career': 'from-pink-500/20 to-purple-500/20',
};

export default function LatestArticleBanner() {
    // Get the latest PUBLISHED item from internal feed (medev.ai content only)
    const latestArticle = useMemo(() => {
        const now = new Date();

        // Filter: Only published OR scheduled items where date <= today
        const publishableItems = FEED_ITEMS.filter(item =>
            item.status === 'published' ||
            (item.status === 'scheduled' && new Date(item.date) <= now)
        );

        // Sort by date (newest first)
        const sorted = [...publishableItems].sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        return sorted[0] || null;
    }, []);

    if (!latestArticle) return null;

    const gradient = categoryColors[latestArticle.category] || 'from-blue-500/15 to-teal-500/15';

    // Convert full URL to relative path for Next.js Link
    const relativePath = latestArticle.url.replace('https://www.medev.ai', '');

    return (
        <Link
            href={relativePath}
            className="block mb-4 sm:mb-6 group"
        >
            <div
                className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01] bg-white/60 backdrop-blur-sm"
                style={{
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                }}
            >
                {/* Top highlight */}
                <div
                    className="absolute top-0 left-0 right-0 h-1/2"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                        borderRadius: '16px 16px 0 0',
                    }}
                />

                <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        {/* Mini Animated Logo */}
                        <div
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex-shrink-0 overflow-hidden"
                            style={{
                                background: 'rgba(1, 89, 163, 0.1)',
                                border: '1px solid rgba(1, 89, 163, 0.2)',
                            }}
                        >
                            <MiniLogo />
                        </div>

                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] sm:text-xs font-medium text-blue-600 uppercase tracking-wide">
                                    Latest from MEDev.AI
                                </span>
                                <span className="px-1.5 py-0.5 text-[10px] bg-blue-100 text-blue-700 rounded">
                                    {latestArticle.category}
                                </span>
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-gray-800 truncate sm:whitespace-normal">
                                {latestArticle.title}
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-1 sm:line-clamp-2 hidden sm:block">
                                {latestArticle.description}
                            </p>
                        </div>
                    </div>

                    {/* Subtle arrow */}
                    <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors flex-shrink-0 ml-4">
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                    </div>
                </div>

                {/* Bottom border */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(1, 89, 163, 0.2) 50%, transparent 100%)',
                    }}
                />
            </div>
        </Link>
    );
}
