'use client';

/**
 * Loading state for /tools routes
 * Displays shimmer skeleton while tools page loads
 */
import { CardSkeleton, CalculatorSkeleton } from '@/components/skeletons';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';

export default function ToolsLoading() {
    return (
        <div className="min-h-screen bg-gray-50 relative">
            <MatrixBackground intensity="low" />
            <div className="relative z-10">
                <Header />

                <div className="max-w-7xl mx-auto px-6 py-8">
                    {/* Page Header Skeleton */}
                    <div className="mb-8 space-y-4">
                        <div className="h-10 w-64 bg-slate-200 rounded-lg animate-pulse" />
                        <div className="h-6 w-96 bg-slate-100 rounded animate-pulse" />
                    </div>

                    {/* Tools Grid Skeleton */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm animate-pulse"
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                {/* Icon placeholder */}
                                <div className="h-12 w-12 bg-slate-200 rounded-lg mb-4" />
                                {/* Title placeholder */}
                                <div className="h-6 w-3/4 bg-slate-200 rounded mb-2" />
                                {/* Description placeholder */}
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-slate-100 rounded" />
                                    <div className="h-4 w-2/3 bg-slate-100 rounded" />
                                </div>
                                {/* Features list placeholder */}
                                <div className="mt-4 space-y-2">
                                    {[...Array(3)].map((_, j) => (
                                        <div key={j} className="flex items-center gap-2">
                                            <div className="h-3 w-3 bg-slate-100 rounded-full" />
                                            <div className="h-3 flex-1 bg-slate-100 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
