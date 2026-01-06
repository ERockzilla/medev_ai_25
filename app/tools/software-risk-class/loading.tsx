'use client';

/**
 * Loading state for /tools/software-risk-class route
 * Displays classification skeleton while page loads
 */
import { ClassificationSkeleton } from '@/components/skeletons';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';

export default function SoftwareRiskLoading() {
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
                    <div className="mb-8 bg-purple-50 border border-purple-200 rounded-lg p-6 animate-pulse">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 space-y-4">
                                <div className="h-6 w-64 bg-purple-200 rounded" />
                                <div className="h-4 w-full bg-purple-100 rounded" />
                                <div className="h-4 w-3/4 bg-purple-100 rounded" />
                                {/* Class indicators */}
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-16 bg-green-100 rounded-lg" />
                                    <div className="h-16 bg-yellow-100 rounded-lg" />
                                    <div className="h-16 bg-red-100 rounded-lg" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="h-12 w-48 bg-purple-200 rounded-lg" />
                                <div className="h-12 w-48 bg-purple-300 rounded-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Classification Wizard Skeleton */}
                    <ClassificationSkeleton />
                </div>
            </div>
        </div>
    );
}
