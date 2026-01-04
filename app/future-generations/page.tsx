'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import FutureGenerationsRoadmap from '@/components/FutureGenerationsRoadmap';
import { GitBranch, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FutureGenerationsPage() {
    return (
        <div className="min-h-screen bg-gray-50 relative">
            <MatrixBackground intensity="low" />
            <div className="relative z-10">
                <Header />

                {/* Breadcrumb */}
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">Back to Dashboard</span>
                    </Link>
                </div>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-6 pb-12">
                    <FutureGenerationsRoadmap />
                </main>

                <Footer />
            </div>
        </div>
    );
}
