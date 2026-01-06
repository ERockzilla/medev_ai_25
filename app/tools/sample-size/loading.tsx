'use client';

/**
 * Loading state for /tools/sample-size route
 * Displays calculator skeleton while sample size calculator loads
 */
import { CalculatorSkeleton } from '@/components/skeletons';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';

export default function SampleSizeLoading() {
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
                    <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6 animate-pulse">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 space-y-3">
                                <div className="h-6 w-48 bg-green-200 rounded" />
                                <div className="h-4 w-full bg-green-100 rounded" />
                                <div className="h-4 w-3/4 bg-green-100 rounded" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="h-12 w-48 bg-green-200 rounded-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Calculator Skeleton */}
                    <CalculatorSkeleton />
                </div>
            </div>
        </div>
    );
}
