'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import { useBookmarks } from '@/contexts/BookmarkContext';
import { Bookmark, Trash2, ExternalLink, Search, RotateCcw, ChevronDown, Grid3X3, List } from 'lucide-react';

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
    standard: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    regulation: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    guide: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    'how-to': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
    tool: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
    page: { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' },
};

export default function BookmarksPage() {
    const { bookmarks, removeBookmark, resetToDefaults, getSiteBookmarks, getRSSBookmarks } = useBookmarks();
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState<string>('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const siteBookmarks = getSiteBookmarks();
    const rssBookmarks = getRSSBookmarks();

    // Filter bookmarks
    const filteredSiteBookmarks = siteBookmarks.filter(b => {
        const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = filterType === 'all' || b.type === filterType;
        return matchesSearch && matchesType;
    });

    const filteredRSSBookmarks = rssBookmarks.filter(b =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Get unique types for filter
    const uniqueTypes = [...new Set(siteBookmarks.map(b => b.type))];

    return (
        <div className="min-h-screen bg-gray-50 relative">
            <MatrixBackground intensity="low" />
            <div className="relative z-10">
                <Header />

                <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
                    {/* Page Header */}
                    <div className="mb-4 sm:mb-8">
                        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                            <Bookmark className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                            <h1 className="text-xl sm:text-3xl font-bold text-gray-900">Bookmarks</h1>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600">
                            Your saved resources, tools, and articles.
                        </p>
                    </div>

                    {/* Controls Row */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search bookmarks..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Type Filter */}
                        <div className="relative">
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 cursor-pointer"
                            >
                                <option value="all">All Types</option>
                                {uniqueTypes.map(type => (
                                    <option key={type} value={type}>
                                        {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>

                        {/* View Toggle */}
                        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                                title="Grid view"
                            >
                                <Grid3X3 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                                title="List view"
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={resetToDefaults}
                            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Reset to default bookmarks"
                        >
                            <RotateCcw className="w-4 h-4" />
                            <span className="hidden sm:inline">Reset</span>
                        </button>
                    </div>

                    {/* Site Bookmarks Section */}
                    <section className="mb-10">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            Site Resources ({filteredSiteBookmarks.length})
                        </h2>

                        {filteredSiteBookmarks.length > 0 ? (
                            viewMode === 'grid' ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
                                    {filteredSiteBookmarks.map((bookmark) => {
                                        const colors = typeColors[bookmark.type] || typeColors.page;
                                        return (
                                            <div
                                                key={bookmark.id}
                                                className={`group relative p-3 sm:p-4 rounded-lg border ${colors.border} ${colors.bg} hover:shadow-md transition-all`}
                                            >
                                                <Link href={bookmark.url} className="block">
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className={`font-medium ${colors.text} line-clamp-2 group-hover:underline`}>
                                                            {bookmark.title}
                                                        </h3>
                                                        <span className={`inline-block mt-2 px-2 py-0.5 text-xs rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                                                            {bookmark.type}
                                                        </span>
                                                    </div>
                                                </Link>
                                                <button
                                                    onClick={() => removeBookmark(bookmark.id)}
                                                    className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                                                    title="Remove bookmark"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
                                    {filteredSiteBookmarks.map((bookmark) => {
                                        const colors = typeColors[bookmark.type] || typeColors.page;
                                        return (
                                            <div
                                                key={bookmark.id}
                                                className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 transition-colors"
                                            >
                                                <span className={`flex-shrink-0 w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')}`}></span>
                                                <Link href={bookmark.url} className="flex-1 min-w-0">
                                                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 truncate">
                                                        {bookmark.title}
                                                    </h3>
                                                    <span className="text-xs text-gray-500">{bookmark.url}</span>
                                                </Link>
                                                <span className={`px-2 py-0.5 text-xs rounded-full ${colors.bg} ${colors.text}`}>
                                                    {bookmark.type}
                                                </span>
                                                <button
                                                    onClick={() => removeBookmark(bookmark.id)}
                                                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                                                    title="Remove bookmark"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            )
                        ) : (
                            <div className="text-center py-12 bg-white border border-gray-200 rounded-lg">
                                <Bookmark className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                                <p className="text-gray-500">No matching site bookmarks found</p>
                            </div>
                        )}
                    </section>

                    {/* RSS Bookmarks Section */}
                    {rssBookmarks.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                Saved Articles ({filteredRSSBookmarks.length})
                            </h2>

                            <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
                                {filteredRSSBookmarks.map((bookmark) => (
                                    <div
                                        key={bookmark.id}
                                        className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        <a
                                            href={bookmark.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 min-w-0"
                                        >
                                            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 truncate">
                                                {bookmark.title}
                                            </h3>
                                            <span className="text-xs text-gray-500">
                                                {new URL(bookmark.url).hostname}
                                            </span>
                                        </a>
                                        <button
                                            onClick={() => removeBookmark(bookmark.id)}
                                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                                            title="Remove bookmark"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Stats Footer */}
                    <div className="mt-8 text-center text-sm text-gray-500">
                        {bookmarks.length} total bookmarks • {siteBookmarks.length} site resources • {rssBookmarks.length} saved articles
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
