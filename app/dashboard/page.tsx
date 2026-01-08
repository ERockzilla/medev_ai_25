'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import SmartSearch from '@/components/SmartSearch';
import { TimelineSkeleton } from '@/components/skeletons';
import { KNOWLEDGE_CATEGORIES, getTotalArticleCount } from '@/lib/knowledgeBase';
import { Bookmark, ChevronRight, ChevronLeft, Trash2, ArrowRight } from 'lucide-react';
import { useBookmarks } from '@/contexts/BookmarkContext';

import AnimatedIcon from '@/components/AnimatedIcon';

// Dynamic import with shimmer skeleton for faster initial load
const MedicalDeviceTimeline = dynamic(
  () => import('@/components/MedicalDeviceTimeline'),
  { loading: () => <TimelineSkeleton />, ssr: true }
);

export default function DashboardPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { bookmarks, removeBookmark } = useBookmarks();

  const toggleCategory = (id: string, event: React.MouseEvent) => {
    // Prevent scroll jump by remembering scroll position
    const scrollY = window.scrollY;
    setExpandedCategory(expandedCategory === id ? null : id);
    // Restore scroll position after render
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: 'instant' });
    });
  };

  const totalArticles = getTotalArticleCount();

  const typeColors = {
    standard: 'bg-blue-100 text-blue-700',
    regulation: 'bg-green-100 text-green-700',
    guide: 'bg-purple-100 text-purple-700',
    'how-to': 'bg-indigo-100 text-indigo-700',
    tool: 'bg-orange-100 text-orange-700',
    page: 'bg-gray-100 text-gray-700',
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 px-6 py-8`}>
              {/* Smart Search */}
              <div className="mb-8">
                <SmartSearch />
              </div>

              {/* Future Generations Feature Card - Desktop: Full glassmorphic design, Mobile: Hidden */}
              <Link
                href="/future-generations"
                className="hidden md:block mb-8 group"
              >
                <div
                  className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(1, 89, 163, 0.15) 0%, rgba(1, 128, 165, 0.12) 50%, rgba(0, 170, 134, 0.15) 100%)',
                    boxShadow: '0 4px 20px rgba(1, 89, 163, 0.1), inset 0 1px 0 rgba(255,255,255,0.3)',
                    border: '1px solid rgba(1, 89, 163, 0.25)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {/* Very subtle top highlight */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1/2"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                      borderRadius: '16px 16px 0 0',
                    }}
                  />

                  <div className="relative z-10 p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Icon container - subtle */}
                      <div
                        className="p-3 rounded-xl"
                        style={{
                          background: 'rgba(1, 89, 163, 0.1)',
                          border: '1px solid rgba(1, 89, 163, 0.2)',
                        }}
                      >
                        <AnimatedIcon variant="future-gen" size={32} className="text-[#0159A3]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Future Generations Roadmap</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Explore the AI-driven evolution of medical device engineering — from Gen 4 to the Post-Device Era
                        </p>
                      </div>
                    </div>
                    {/* Explore button - SOLID with gradient */}
                    <div
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #0159A3 0%, #0180A5 50%, #00AA86 100%)',
                        boxShadow: '0 4px 15px rgba(1, 89, 163, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                      }}
                    >
                      <span className="text-white font-semibold">Explore</span>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Subtle bottom border */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(1, 89, 163, 0.2) 50%, transparent 100%)',
                    }}
                  />
                </div>
              </Link>

              {/* Knowledge Base Categories */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl font-bold text-gray-900">Knowledge Center</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {totalArticles} Articles
                      </span>
                    </div>
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  {KNOWLEDGE_CATEGORIES.map((category) => {
                    const publishedCount = category.articles.filter(a => a.status === 'published').length;
                    const draftCount = category.articles.filter(a => a.status === 'draft').length;

                    return (
                      <div key={category.id} className="transition-all">
                        <button
                          onClick={(e) => toggleCategory(category.id, e)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-4 flex-1">
                            <div className="text-left flex-1">
                              <h4 className="font-bold text-gray-900">{category.title}</h4>
                              <p className="text-sm text-gray-600">{category.description}</p>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-600">
                              <div>
                                <span className="font-semibold text-gray-900">{publishedCount}</span> published
                                {draftCount > 0 && (
                                  <span className="text-gray-500 ml-2">+ {draftCount} draft</span>
                                )}
                              </div>
                              <svg
                                className={`w-5 h-5 transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </button>

                        {expandedCategory === category.id && (
                          <div className="px-6 pb-4 bg-gray-50">
                            {category.articles.length > 0 ? (
                              <div className="space-y-2 mt-2">
                                {category.articles.map((article) => (
                                  <Link
                                    key={article.id}
                                    href={article.url}
                                    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group"
                                  >
                                    <div className="flex-1">
                                      <h5 className="font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        {article.title}
                                      </h5>
                                      <div className="flex items-center gap-3 text-xs text-gray-600">
                                        <StatusBadge status={article.status} />
                                        {article.type && (
                                          <span className="px-2 py-0.5 bg-gray-100 rounded text-gray-600">
                                            {article.type.replace('-', ' ')}
                                          </span>
                                        )}
                                        {article.status === 'published' && article.views !== undefined && (
                                          <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            {article.views} views
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <div className="p-8 text-center text-gray-500">
                                <AnimatedIcon variant="database" size={48} className="mx-auto mb-3 text-gray-300" />
                                <p className="text-sm">No articles yet in this category.</p>
                                <p className="text-xs text-gray-400 mt-1">Content coming soon as we build out Phase 1.</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Medical Device Timeline */}
              <div className="mt-8">
                <MedicalDeviceTimeline />
              </div>
            </div>

            {/* Bookmarks Sidebar */}
            <div
              className={`sticky top-[73px] bg-white border-l border-gray-200 shadow-lg transition-all duration-300 flex-shrink-0 relative ${sidebarOpen ? 'w-72' : 'w-12'
                }`}
              style={{ height: 'calc(100vh - 73px)' }}
            >
              {sidebarOpen ? (
                <div className="h-full flex flex-col overflow-hidden">
                  {/* Sidebar Header */}
                  <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AnimatedIcon variant="book" size={20} className="text-blue-600" />
                        <h3 className="font-bold text-gray-900">Bookmarks</h3>
                      </div>
                      {/* Toggle Button - Inside Header */}
                      <button
                        onClick={() => setSidebarOpen(false)}
                        className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-all"
                        title="Hide bookmarks"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Bookmarks List */}
                  <div className="flex-1 overflow-y-auto p-4">
                    {bookmarks.length > 0 ? (
                      <div className="space-y-2">
                        {bookmarks.map((bookmark) => (
                          <div
                            key={bookmark.id}
                            className="group flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <Link href={bookmark.url} className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                                {bookmark.title}
                              </p>
                              <span className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${typeColors[bookmark.type]}`}>
                                {bookmark.type}
                              </span>
                            </Link>
                            <button
                              onClick={() => removeBookmark(bookmark.id)}
                              className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all"
                              title="Remove bookmark"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <AnimatedIcon variant="book" size={40} className="mx-auto mb-3 text-gray-300" />
                        <p className="text-sm">No bookmarks yet</p>
                      </div>
                    )}
                  </div>

                  {/* Sidebar Footer */}
                  <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                    <p className="text-xs text-gray-500 text-center">
                      {bookmarks.length} bookmark{bookmarks.length !== 1 ? 's' : ''} saved
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center pt-3">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all"
                    title="Show bookmarks"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors = {
    'published': 'bg-green-100 text-green-800',
    'draft': 'bg-yellow-100 text-yellow-800',
    'coming-soon': 'bg-gray-100 text-gray-600',
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[status as keyof typeof colors]}`}>
      {status === 'published' ? 'Published' : status === 'draft' ? 'Draft' : 'Coming Soon'}
    </span>
  );
}
