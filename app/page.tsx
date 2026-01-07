'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import SmartSearch from '@/components/SmartSearch';
import { TimelineSkeleton } from '@/components/skeletons';
import { KNOWLEDGE_CATEGORIES, getTotalArticleCount } from '@/lib/knowledgeBase';
import { BookOpen, Bookmark, ChevronRight, ChevronLeft, ChevronDown, Trash2, Rss, ExternalLink, ArrowRight } from 'lucide-react';
import { useBookmarks } from '@/contexts/BookmarkContext';
import FutureGenIcon from '@/components/FutureGenIcon';

// Lazy load heavy components for LCP optimization
const MedicalDeviceTimeline = dynamic(
  () => import('@/components/MedicalDeviceTimeline'),
  { loading: () => <TimelineSkeleton />, ssr: true }
);

// Lazy load RSS widget - deferred after critical path
const DashboardFeedWidget = dynamic(
  () => import('@/components/DashboardFeedWidget'),
  {
    loading: () => (
      <div className="p-3 space-y-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-3 bg-gray-200 rounded w-full mb-1.5"></div>
            <div className="flex gap-2">
              <div className="h-2 bg-gray-200 rounded w-16"></div>
              <div className="h-2 bg-gray-200 rounded w-12"></div>
            </div>
          </div>
        ))}
      </div>
    ),
    ssr: false
  }
);

export default function DashboardPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [bookmarksExpanded, setBookmarksExpanded] = useState(false);
  const { bookmarks, removeBookmark, getRSSBookmarks } = useBookmarks();
  const rssBookmarks = getRSSBookmarks();

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
            <div className={`flex-1 transition-all duration-300 px-3 sm:px-6 py-4 sm:py-8`}>
              {/* Smart Search */}
              <div className="mb-4 sm:mb-8">
                <SmartSearch />
              </div>

              {/* Mobile RSS Preview - Only visible on mobile/tablet */}
              <div className="lg:hidden mb-4 sm:mb-6">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="px-3 py-2 bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Rss className="w-4 h-4 text-orange-400" />
                      <span className="text-sm font-semibold text-white">Latest News</span>
                    </div>
                    <Link
                      href="/news"
                      className="text-xs text-white/80 hover:text-white flex items-center gap-1"
                    >
                      View all
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <Suspense fallback={
                    <div className="p-3 space-y-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                          <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                          <div className="h-2 bg-gray-200 rounded w-20"></div>
                        </div>
                      ))}
                    </div>
                  }>
                    <DashboardFeedWidget maxItems={5} />
                  </Suspense>
                </div>
              </div>

              {/* Quick Access - Mobile only */}
              <div className="lg:hidden mb-4 sm:mb-6">
                <Link
                  href="/bookmarks"
                  className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-900">My Bookmarks</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              </div>

              {/* Future Generations Feature Card */}
              <Link
                href="/future-generations"
                className="block mb-4 sm:mb-6 group"
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
                  <div
                    className="absolute top-0 left-0 right-0 h-1/2"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                      borderRadius: '16px 16px 0 0',
                    }}
                  />
                  <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className="p-2 sm:p-3 rounded-xl"
                        style={{
                          background: 'rgba(1, 89, 163, 0.1)',
                          border: '1px solid rgba(1, 89, 163, 0.2)',
                        }}
                      >
                        <FutureGenIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#0159A3]" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-800">Future Generations Roadmap</h3>
                        <p className="text-gray-600 text-xs sm:text-sm mt-1 hidden sm:block">
                          Explore the AI-driven evolution of medical device engineering — from Gen 4 to the Post-Device Era
                        </p>
                      </div>
                    </div>
                    <div
                      className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #0159A3 0%, #0180A5 50%, #00AA86 100%)',
                        boxShadow: '0 4px 15px rgba(1, 89, 163, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                      }}
                    >
                      <span className="text-white font-semibold">Explore</span>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(1, 89, 163, 0.2) 50%, transparent 100%)',
                    }}
                  />
                </div>
              </Link>

              {/* Knowledge Base Categories */}
              <div className="animated-border-wrapper">
                <div className="animated-border-content">
                  <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Knowledge Center</h3>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
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
                            className="w-full px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                              <div className="text-left flex-1 min-w-0">
                                <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate sm:whitespace-normal">{category.title}</h4>
                                <p className="text-xs sm:text-sm text-gray-600 line-clamp-1 sm:line-clamp-none">{category.description}</p>
                              </div>
                              <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600 flex-shrink-0">
                                <div className="hidden sm:block">
                                  <span className="font-semibold text-gray-900">{publishedCount}</span> published
                                  {draftCount > 0 && (
                                    <span className="text-gray-500 ml-2">+ {draftCount} draft</span>
                                  )}
                                </div>
                                <div className="sm:hidden">
                                  <span className="font-semibold text-gray-900">{publishedCount}</span>
                                </div>
                                <svg
                                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`}
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
                            <div className="px-3 sm:px-6 pb-3 sm:pb-4 bg-gray-50">
                              {category.articles.length > 0 ? (
                                <div className="space-y-2 mt-2">
                                  {category.articles.map((article) => (
                                    <Link
                                      key={article.id}
                                      href={article.url}
                                      className="flex items-center justify-between p-2.5 sm:p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group"
                                    >
                                      <div className="flex-1 min-w-0">
                                        <h5 className="font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors text-sm sm:text-base truncate sm:whitespace-normal">
                                          {article.title}
                                        </h5>
                                        <div className="flex items-center gap-2 sm:gap-3 text-xs text-gray-600 flex-wrap">
                                          <StatusBadge status={article.status} />
                                          {article.type && (
                                            <span className="px-1.5 sm:px-2 py-0.5 bg-gray-100 rounded text-gray-600 text-[10px] sm:text-xs">
                                              {article.type.replace('-', ' ')}
                                            </span>
                                          )}
                                          {article.status === 'published' && article.views !== undefined && (
                                            <span className="hidden sm:flex items-center gap-1">
                                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                              {article.views} views
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <div className="p-8 text-center text-gray-500">
                                  <BookOpen className="w-12 h-12 mx-auto mb-3 text-gray-300" />
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
              </div>

              {/* Medical Device Timeline */}
              <div className="mt-8">
                <MedicalDeviceTimeline />
              </div>
            </div>

            {/* RSS Sidebar - Hidden on mobile for performance */}
            <div
              className={`sticky top-[73px] bg-white/80 backdrop-blur-md border-l border-gray-200/50 shadow-lg transition-all duration-300 flex-shrink-0 relative hidden lg:block ${sidebarOpen ? 'w-80' : 'w-12'
                }`}
              style={{ height: 'calc(100vh - 73px)' }}
            >
              {sidebarOpen ? (
                <div className="h-full flex flex-col overflow-hidden">
                  {/* RSS Feed Header */}
                  <div className="px-3 py-2 border-b border-gray-200 bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <Rss className="w-4 h-4 text-orange-400" />
                      <span className="text-sm font-semibold text-white">RSS Feed</span>
                    </div>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      title="Hide sidebar"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Saved Articles Dropdown - Subtle Blue */}
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setBookmarksExpanded(!bookmarksExpanded)}
                      className="w-full px-3 py-1.5 flex items-center justify-between bg-blue-50/80 hover:bg-blue-100/80 border-b border-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Bookmark className="w-3.5 h-3.5 text-blue-500" />
                        <span className="text-xs font-medium text-blue-700">
                          Saved ({rssBookmarks.length})
                        </span>
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 text-blue-400 transition-transform ${bookmarksExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {bookmarksExpanded && (
                      <div className="max-h-40 overflow-y-auto bg-blue-50/50 border-b border-blue-100">
                        {rssBookmarks.length > 0 ? (
                          <div className="divide-y divide-blue-100/50">
                            {rssBookmarks.map((bookmark) => (
                              <div
                                key={bookmark.id}
                                className="group flex items-center gap-2 px-3 py-1.5 hover:bg-blue-100/50 transition-colors"
                              >
                                <a
                                  href={bookmark.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 min-w-0"
                                >
                                  <p className="text-xs text-blue-800 truncate group-hover:text-blue-600 transition-colors">
                                    {bookmark.title}
                                  </p>
                                </a>
                                <button
                                  onClick={() => removeBookmark(bookmark.id)}
                                  className="p-0.5 text-blue-300 hover:text-red-500 rounded opacity-0 group-hover:opacity-100 transition-all flex-shrink-0"
                                  title="Remove"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="px-3 py-2 text-center">
                            <p className="text-xs text-blue-400">No saved articles</p>
                          </div>
                        )}
                        <Link
                          href="/bookmarks"
                          className="block px-3 py-1.5 text-center text-xs text-blue-500 hover:text-blue-700 hover:bg-blue-100/50 border-t border-blue-100/50"
                        >
                          View All →
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* RSS Feed Content */}
                  <div className="flex-1 overflow-y-auto">
                    <Suspense fallback={
                      <div className="p-3 space-y-2">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="animate-pulse">
                            <div className="h-3 bg-gray-200 rounded w-full mb-1.5"></div>
                            <div className="flex gap-2">
                              <div className="h-2 bg-gray-200 rounded w-16"></div>
                              <div className="h-2 bg-gray-200 rounded w-12"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    }>
                      <DashboardFeedWidget maxItems={20} />
                    </Suspense>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center pt-3">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all"
                    title="Show sidebar"
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
