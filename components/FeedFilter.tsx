'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import FeedItem from './FeedItem';

interface NewsItemData {
    title: string;
    link: string;
    pubDate: string;
    source: string;
    contentSnippet?: string;
    thumbnail?: string;
    category?: string;
}

interface FeedFilterProps {
    items: NewsItemData[];
    sourceColors: Record<string, string>;
    defaultThumbnail: string;
}

// Common keywords to highlight and filter by
const KEYWORDS = [
    'FDA', 'AI', 'Medical Device', 'Clinical Trial', 'Regulatory',
    'ISO', 'Software', 'Cybersecurity', 'Robotics', 'Safety',
    'Approval', 'Recall', 'Innovation', 'Research', 'Healthcare'
];

export default function FeedFilter({ items, sourceColors, defaultThumbnail }: FeedFilterProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSource, setSelectedSource] = useState<string>('all');
    const [selectedKeyword, setSelectedKeyword] = useState<string>('all');

    // Get unique sources from items
    const sources = useMemo(() => {
        const uniqueSources = [...new Set(items.map(item => item.source))];
        return uniqueSources.sort();
    }, [items]);

    // Filter items based on search, source, and keyword
    const filteredItems = useMemo(() => {
        return items.filter(item => {
            // Search filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesSearch =
                    item.title.toLowerCase().includes(query) ||
                    (item.contentSnippet?.toLowerCase().includes(query)) ||
                    item.source.toLowerCase().includes(query);
                if (!matchesSearch) return false;
            }

            // Source filter
            if (selectedSource !== 'all' && item.source !== selectedSource) {
                return false;
            }

            // Keyword filter
            if (selectedKeyword !== 'all') {
                const keyword = selectedKeyword.toLowerCase();
                const matchesKeyword =
                    item.title.toLowerCase().includes(keyword) ||
                    (item.contentSnippet?.toLowerCase().includes(keyword));
                if (!matchesKeyword) return false;
            }

            return true;
        });
    }, [items, searchQuery, selectedSource, selectedKeyword]);

    // Find matching keywords in title for highlighting
    const getMatchingKeywords = (title: string) => {
        const lowerTitle = title.toLowerCase();
        return KEYWORDS.filter(kw => lowerTitle.includes(kw.toLowerCase()));
    };

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedSource('all');
        setSelectedKeyword('all');
    };

    const hasActiveFilters = searchQuery || selectedSource !== 'all' || selectedKeyword !== 'all';

    return (
        <div>
            {/* Filter Controls */}
            <div className="p-4 bg-gray-50 border-b border-gray-200 space-y-3">
                {/* Search Input */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Dropdowns Row */}
                <div className="flex gap-2">
                    {/* Source Filter */}
                    <select
                        value={selectedSource}
                        onChange={(e) => setSelectedSource(e.target.value)}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Sources</option>
                        {sources.map(source => (
                            <option key={source} value={source}>{source}</option>
                        ))}
                    </select>

                    {/* Keyword Filter */}
                    <select
                        value={selectedKeyword}
                        onChange={(e) => setSelectedKeyword(e.target.value)}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Topics</option>
                        {KEYWORDS.map(kw => (
                            <option key={kw} value={kw}>{kw}</option>
                        ))}
                    </select>
                </div>

                {/* Active Filters / Clear */}
                {hasActiveFilters && (
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                            Showing {filteredItems.length} of {items.length} articles
                        </span>
                        <button
                            onClick={clearFilters}
                            className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                            <X className="w-3 h-3" />
                            Clear filters
                        </button>
                    </div>
                )}
            </div>

            {/* Articles List */}
            <div className="max-h-[850px] overflow-y-auto">
                {filteredItems.length > 0 ? (
                    <div>
                        {filteredItems.map((item, i) => {
                            const matchingKeywords = getMatchingKeywords(item.title);
                            return (
                                <div key={`${item.link}-${i}`} className="relative">
                                    {/* Keyword Tags */}
                                    {matchingKeywords.length > 0 && (
                                        <div className="absolute top-2 right-12 flex gap-1 z-10">
                                            {matchingKeywords.slice(0, 2).map(kw => (
                                                <span
                                                    key={kw}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setSelectedKeyword(kw);
                                                    }}
                                                    className="text-[10px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200"
                                                >
                                                    {kw}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <FeedItem
                                        title={item.title}
                                        link={item.link}
                                        source={item.source}
                                        contentSnippet={item.contentSnippet}
                                        thumbnail={item.thumbnail}
                                        category={item.category}
                                        pubDate={item.pubDate}
                                        sourceColor={sourceColors[item.source] || 'bg-gray-500'}
                                        defaultThumbnail={defaultThumbnail}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12 px-6">
                        <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 mb-2 font-medium">No matching articles</p>
                        <p className="text-sm text-gray-400">Try adjusting your filters or search terms.</p>
                        <button
                            onClick={clearFilters}
                            className="mt-4 text-sm text-blue-600 hover:text-blue-800"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
