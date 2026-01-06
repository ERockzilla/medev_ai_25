'use client';

/**
 * Loading state for /tools/laser-safety route
 * Displays calculator skeleton while laser safety calculator loads
 */
import { CalculatorSkeleton } from '@/components/skeletons';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';

export default function LaserSafetyLoading() {
    return (
        <div className="min-h-screen bg-gray-50 relative">
            <MatrixBackground intensity="low" />
            <div className="relative z-10">
                <Header />

                <div className="max-w-7xl mx-auto px-6 py-8">
                    {/* Breadcrumb skeleton */}
                    <div className="mb-6 flex items-center justify-between">
                        <div className="h-5 w-32 bg-slate-200 rounded animate-pulse" />
                        <div className="h-8 w-8 bg-slate-200 rounded animate-pulse" />
                    </div>

                    {/* Info Banner skeleton */}
                    <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-6 animate-pulse">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 space-y-3">
                                <div className="h-6 w-48 bg-red-200 rounded" />
                                <div className="h-4 w-full bg-red-100 rounded" />
                                <div className="h-4 w-3/4 bg-red-100 rounded" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="h-12 w-48 bg-red-200 rounded-lg" />
                                <div className="h-12 w-48 bg-red-300 rounded-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Calculator Skeleton with specialized sections */}
                    <CalculatorSkeleton />

                    {/* Safety classification skeleton */}
                    <div className="mt-6 grid grid-cols-4 gap-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="bg-white rounded-lg border border-gray-200 p-4 animate-pulse">
                                <div className="h-6 w-16 bg-slate-200 rounded mb-2" />
                                <div className="h-4 w-full bg-slate-100 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
