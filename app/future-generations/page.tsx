'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import { RoadmapSkeleton } from '@/components/skeletons';
import { GitBranch, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AnimatedIcon from '@/components/AnimatedIcon';

// Dynamic import with shimmer skeleton for faster initial load
const FutureGenerationsRoadmap = dynamic(
    () => import('@/components/FutureGenerationsRoadmap'),
    { loading: () => <RoadmapSkeleton />, ssr: true }
);

export default function FutureGenerationsPage() {
    return (
        <div className="min-h-screen bg-gray-50 relative">
            <MatrixBackground intensity="low" />
            <div className="relative z-10">
                <Header />

                {/* Breadcrumb */}
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                        ← Back to Knowledge Center
                    </Link>
                </div>

                {/* Header removed to avoid duplication with component hero section */}

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-6 pb-12">
                    <FutureGenerationsRoadmap />
                </main>

                <Footer />
            </div>
        </div>
    );
}
