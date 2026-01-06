'use client';

import React, { memo } from 'react';

/**
 * Shimmer Skeleton Components
 * Layout-matching skeletons with shimmer animation effect
 * Used for lazy-loaded heavy components
 * Wrapped in React.memo for performance optimization
 */

// Base shimmer effect component
function ShimmerOverlay() {
    return (
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    );
}

// Timeline skeleton - matches MedicalDeviceTimeline structure
export const TimelineSkeleton = memo(function TimelineSkeleton() {
    return (
        <div className="space-y-6 p-4">
            {/* Title */}
            <div className="relative overflow-hidden h-8 w-64 bg-slate-800 rounded-lg border border-slate-700">
                <ShimmerOverlay />
            </div>

            {/* Timeline items */}
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className="relative overflow-hidden h-24 bg-slate-800/50 rounded-lg border border-slate-700/50"
                    style={{ animationDelay: `${i * 100}ms` }}
                >
                    <div className="p-4 flex items-start gap-4">
                        {/* Year badge */}
                        <div className="h-6 w-16 bg-slate-700 rounded" />
                        {/* Content */}
                        <div className="flex-1 space-y-2">
                            <div className="h-5 w-3/4 bg-slate-700 rounded" />
                            <div className="h-4 w-1/2 bg-slate-700/50 rounded" />
                        </div>
                    </div>
                    <ShimmerOverlay />
                </div>
            ))}
        </div>
    );
});

// Roadmap skeleton - matches FutureGenerationsRoadmap structure
export const RoadmapSkeleton = memo(function RoadmapSkeleton() {
    return (
        <div className="space-y-8 p-6">
            {/* Hero section */}
            <div className="relative overflow-hidden h-32 bg-gradient-to-r from-slate-800 via-indigo-900/20 to-slate-800 rounded-xl border border-indigo-500/20">
                <ShimmerOverlay />
            </div>

            {/* Generation cards */}
            <div className="grid gap-6">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="relative overflow-hidden h-40 bg-slate-800/60 rounded-xl border border-slate-700/50"
                    >
                        <div className="p-6 flex gap-6">
                            {/* Icon */}
                            <div className="h-16 w-16 bg-slate-700 rounded-lg" />
                            {/* Content */}
                            <div className="flex-1 space-y-3">
                                <div className="h-6 w-48 bg-slate-700 rounded" />
                                <div className="h-4 w-full bg-slate-700/50 rounded" />
                                <div className="h-4 w-3/4 bg-slate-700/50 rounded" />
                            </div>
                        </div>
                        <ShimmerOverlay />
                    </div>
                ))}
            </div>
        </div>
    );
});

// Calculator skeleton - matches tool calculators
export const CalculatorSkeleton = memo(function CalculatorSkeleton() {
    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="relative overflow-hidden h-10 w-72 bg-slate-800 rounded-lg border border-slate-700">
                <ShimmerOverlay />
            </div>

            {/* Input section */}
            <div className="relative overflow-hidden bg-slate-800/60 rounded-xl border border-slate-700/50 p-6">
                <div className="grid grid-cols-2 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="space-y-2">
                            <div className="h-4 w-24 bg-slate-700 rounded" />
                            <div className="h-10 bg-slate-700/50 rounded-lg" />
                        </div>
                    ))}
                </div>
                <ShimmerOverlay />
            </div>

            {/* Results section */}
            <div className="relative overflow-hidden bg-slate-800/40 rounded-xl border border-slate-700/30 p-6 h-48">
                <div className="space-y-4">
                    <div className="h-6 w-32 bg-slate-700 rounded" />
                    <div className="grid grid-cols-3 gap-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-20 bg-slate-700/50 rounded-lg" />
                        ))}
                    </div>
                </div>
                <ShimmerOverlay />
            </div>
        </div>
    );
});

// Classification tool skeleton - matches classification wizards
export const ClassificationSkeleton = memo(function ClassificationSkeleton() {
    return (
        <div className="space-y-6 p-6">
            {/* Title */}
            <div className="relative overflow-hidden h-10 w-80 bg-slate-800 rounded-lg border border-slate-700">
                <ShimmerOverlay />
            </div>

            {/* Progress stepper */}
            <div className="flex items-center gap-2 py-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        <div className="h-8 w-8 bg-slate-700 rounded-full" />
                        {i < 4 && <div className="h-1 w-12 bg-slate-700/50" />}
                    </div>
                ))}
            </div>

            {/* Form section */}
            <div className="relative overflow-hidden bg-slate-800/60 rounded-xl border border-slate-700/50 p-6 h-64">
                <div className="space-y-4">
                    <div className="h-6 w-48 bg-slate-700 rounded" />
                    <div className="space-y-3">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="h-5 w-5 bg-slate-700 rounded" />
                                <div className="h-5 flex-1 bg-slate-700/50 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
                <ShimmerOverlay />
            </div>
        </div>
    );
});

// Generic card skeleton
export const CardSkeleton = memo(function CardSkeleton({ count = 3 }: { count?: number }) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
            {[...Array(count)].map((_, i) => (
                <div
                    key={i}
                    className="relative overflow-hidden h-48 bg-slate-800/60 rounded-xl border border-slate-700/50"
                >
                    <div className="p-4 space-y-3">
                        <div className="h-6 w-3/4 bg-slate-700 rounded" />
                        <div className="h-4 w-full bg-slate-700/50 rounded" />
                        <div className="h-4 w-2/3 bg-slate-700/50 rounded" />
                    </div>
                    <ShimmerOverlay />
                </div>
            ))}
        </div>
    );
});
