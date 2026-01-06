'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, Bookmark, ExternalLink } from 'lucide-react';
import { KNOWLEDGE_CATEGORIES } from '@/lib/knowledgeBase';
import { useBookmarks } from '@/contexts/BookmarkContext';
import { trackSearch } from '@/lib/tracking';

interface SearchResult {
  title: string;
  url: string;
  type: 'standard' | 'regulation' | 'guide' | 'how-to' | 'howto' | 'tool' | 'page' | 'checklist' | 'case-study';
  description: string;
  category?: string;
}

export default function SmartSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  // Build search index from all content
  const searchIndex: SearchResult[] = [
    // Tools
    { title: 'FMEA Calculator', url: '/tools/fmea-calculator', type: 'tool', description: 'Failure Mode and Effects Analysis calculator for risk assessment', category: 'Tools' },
    { title: 'Distribution Calculator', url: '/tools/distribution-calculator', type: 'tool', description: 'Statistical distribution calculator for quality analysis', category: 'Tools' },
    { title: 'Sample Size Calculator', url: '/tools/sample-size-calculator', type: 'tool', description: 'Calculate required sample sizes for validation studies', category: 'Tools' },

    // Standards and Regulations from knowledge base
    ...KNOWLEDGE_CATEGORIES.flatMap(category =>
      category.articles
        .filter(article => article.status === 'published')
        .map(article => ({
          title: article.title,
          url: article.url,
          type: article.type || 'page' as SearchResult['type'],
          description: category.description,
          category: category.title
        }))
    ),

    // Pages
    { title: 'Standards Database', url: '/standards', type: 'page', description: 'Browse all ISO, IEC, and medical device standards', category: 'Navigation' },
    { title: 'FDA Regulations', url: '/regulations', type: 'page', description: 'US FDA regulations for medical devices', category: 'Navigation' },
    { title: 'Regulatory Analysis', url: '/regulatory-analysis', type: 'page', description: 'Global regulatory complexity and cost analysis', category: 'Navigation' },
    { title: 'Global Map', url: '/global-map', type: 'page', description: 'Interactive globe showing regulatory requirements by country', category: 'Navigation' },
  ];

  // Simple keyword search with ranking
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const searchTerms = query.toLowerCase().split(' ').filter(t => t.length > 1);

    const scored = searchIndex.map(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();

      searchTerms.forEach(term => {
        // Title matches are worth more
        if (titleLower.includes(term)) {
          score += titleLower.startsWith(term) ? 10 : 5;
        }
        // Description matches
        if (descLower.includes(term)) {
          score += 2;
        }
        // Category matches
        if (item.category?.toLowerCase().includes(term)) {
          score += 1;
        }
      });

      return { ...item, score };
    });

    const filtered = scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    setResults(filtered);
    setShowResults(filtered.length > 0);
    setSelectedIndex(0);

    // Track search when results are found
    if (filtered.length > 0 && query.trim().length >= 3) {
      trackSearch(query.trim());
    }
  }, [query]);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showResults || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case 'Escape':
        setShowResults(false);
        break;
    }
  };

  const handleBookmarkClick = (e: React.MouseEvent, result: SearchResult) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark({
      title: result.title,
      url: result.url,
      type: result.type === 'howto' ? 'how-to' : result.type === 'checklist' ? 'guide' : result.type === 'case-study' ? 'guide' : result.type,
    });
  };

  const typeColors: Record<string, string> = {
    standard: 'bg-blue-100 text-blue-700',
    regulation: 'bg-green-100 text-green-700',
    guide: 'bg-purple-100 text-purple-700',
    'how-to': 'bg-indigo-100 text-indigo-700',
    howto: 'bg-indigo-100 text-indigo-700',
    tool: 'bg-orange-100 text-orange-700',
    page: 'bg-gray-100 text-gray-700',
    checklist: 'bg-teal-100 text-teal-700',
    'case-study': 'bg-pink-100 text-pink-700',
  };

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          id="smart-search"
          name="smart-search"
          type="text"
          placeholder="Search standards, tools, guides... (try typing 'ISO', 'FMEA', or 'FDA')"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && results.length > 0 && setShowResults(true)}
          className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
          autoComplete="off"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setShowResults(false);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-y-auto">
          <div className="px-4 py-2 border-b border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-600">
              {results.length} result{results.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {results.map((result, index) => (
            <Link
              key={result.url}
              href={result.url}
              onClick={() => {
                setShowResults(false);
                setQuery('');
              }}
              className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors ${index === selectedIndex ? 'bg-blue-50' : ''
                }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-gray-900 truncate">
                    {result.title}
                  </h4>
                  <span className={`px-2 py-0.5 text-xs rounded-full whitespace-nowrap ${typeColors[result.type]}`}>
                    {result.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{result.description}</p>
                {result.category && (
                  <p className="text-xs text-gray-400 mt-1">{result.category}</p>
                )}
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={(e) => handleBookmarkClick(e, result)}
                  className={`p-1.5 rounded-lg transition-colors ${isBookmarked(result.url)
                    ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                    : 'text-gray-400 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  title={isBookmarked(result.url) ? 'Remove bookmark' : 'Add bookmark'}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked(result.url) ? 'fill-current' : ''}`} />
                </button>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
            </Link>
          ))}

          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Use ↑↓ to navigate • Enter to select • Esc to close
            </p>
          </div>
        </div>
      )}

      {/* No Results */}
      {showResults && query && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-6">
          <div className="text-center">
            <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p className="text-sm text-gray-600 mb-2">No results found for "{query}"</p>
            <p className="text-xs text-gray-400">
              Try: "ISO 13485", "FMEA", "FDA regulations", "sample size"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

