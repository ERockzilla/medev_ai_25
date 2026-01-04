import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import NewsSidebar from '@/components/NewsSidebar';
import Link from 'next/link';

// Revalidate every hour
export const revalidate = 3600;

export default function DailyBriefingPage() {
    return (
        <div className="min-h-screen bg-gray-50 relative">
            <MatrixBackground intensity="low" />
            <div className="relative z-10">
                <Header />

                <div className="max-w-7xl mx-auto px-6 py-12">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Daily Intelligence Briefing</h1>
                        <p className="text-gray-600 mt-2">Automated aggregation of the latest research, regulatory updates, and industry news.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content Area - News Feed (Swapped) */}
                        <div className="lg:col-span-2 space-y-8">
                            <NewsSidebar />
                        </div>

                        {/* Sidebar - Internal Updates & Subscribe (Swapped) */}
                        <div className="space-y-6">
                            <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    medev.ai Updates
                                </h2>
                                <p className="text-sm text-gray-600 mb-4">Check back for the latest guides and resources from medev.ai directly in your feed.</p>
                                <div className="p-3 bg-blue-50 text-blue-800 rounded-md text-sm">
                                    <strong>Tip:</strong> Subscribe to our content via RSS at{' '}
                                    <Link href="/feed.xml" className="underline hover:text-blue-600 font-mono">/feed.xml</Link>
                                </div>
                            </section>

                            {/* Subscribe Widget */}
                            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                <h3 className="text-md font-bold text-gray-900 mb-2">Subscribe</h3>
                                <p className="text-sm text-gray-600 mb-3">Get these updates delivered to your inbox.</p>
                                <button className="w-full bg-blue-600 text-white text-sm font-medium py-2 rounded-md hover:bg-blue-700 transition-colors">
                                    Join Newsletter
                                </button>
                            </div>

                            {/* RSS Feed Links */}
                            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                <h3 className="text-md font-bold text-gray-900 mb-2">RSS Feeds</h3>
                                <ul className="text-sm space-y-2">
                                    <li>
                                        <Link href="/feed.xml" className="flex items-center gap-2 text-blue-600 hover:underline">
                                            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" />
                                            </svg>
                                            Main Feed
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/feed/guides" className="flex items-center gap-2 text-blue-600 hover:underline">
                                            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" />
                                            </svg>
                                            Guides Only
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
