'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import AIToolCard from '@/components/AIToolCard';
import AIToolComparison from '@/components/AIToolComparison';
import {
  AI_TOOLS,
  CATEGORIES,
  PRICING_OPTIONS,
  getRecommendedTools,
  searchTools,
  type AITool,
  type PricingTier
} from '@/lib/aiToolsData';
import {
  Search,
  Filter,
  X
} from 'lucide-react';
import AnimatedIcon from '@/components/AnimatedIcon';
import Footer from '@/components/Footer';

export default function AIToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPricing, setSelectedPricing] = useState<PricingTier | 'All'>('All');
  const [sortBy, setSortBy] = useState<'reviews' | 'name' | 'price'>('name');
  const [compareTools, setCompareTools] = useState<Set<string>>(new Set());
  const [showComparison, setShowComparison] = useState(false);

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    let tools = AI_TOOLS;

    // Search filter
    if (searchQuery) {
      tools = searchTools(searchQuery);
    }

    // Category filter
    if (selectedCategory !== 'All Categories') {
      tools = tools.filter(tool => tool.category === selectedCategory);
    }

    // Pricing filter
    if (selectedPricing !== 'All') {
      tools = tools.filter(tool => tool.pricing === selectedPricing);
    }

    // Sort
    tools = [...tools].sort((a, b) => {
      switch (sortBy) {
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          const priceOrder: Record<PricingTier, number> = {
            'Free': 0,
            '$': 1,
            '$$': 2,
            '$$$': 3,
            '$$$$': 4
          };
          return priceOrder[a.pricing] - priceOrder[b.pricing];
        default:
          return 0;
      }
    });

    return tools;
  }, [searchQuery, selectedCategory, selectedPricing, sortBy]);

  const toggleCompare = (toolId: string) => {
    const newCompare = new Set(compareTools);
    if (newCompare.has(toolId)) {
      newCompare.delete(toolId);
    } else {
      if (newCompare.size < 3) {
        newCompare.add(toolId);
      }
    }
    setCompareTools(newCompare);
    if (newCompare.size > 0) {
      setShowComparison(true);
    } else {
      setShowComparison(false);
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedPricing('All');
  };

  const recommendedStartups = getRecommendedTools('startups');
  const recommendedLarge = getRecommendedTools('large-companies');
  const recommendedFree = getRecommendedTools('free');
  const recommendedPopular = getRecommendedTools('popular');

  const comparisonTools = Array.from(compareTools)
    .map(id => AI_TOOLS.find(t => t.id === id))
    .filter((t): t is AITool => t !== undefined);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header Section */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Knowledge Center
            </Link>
          </div>

          <div className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg flex-shrink-0">
                <AnimatedIcon variant="sparkles" size={32} className="text-purple-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Tools Directory</h1>
                <p className="text-xl text-gray-600">
                  Discover the best AI tools for medical device development. Compare solutions and find the right tools for your specific needs.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="https://lmstudio.ai/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0159A3] font-semibold rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
              >
                LM Studio
              </a>
              <a
                href="https://anythingllm.com/desktop/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0159A3] font-semibold rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
              >
                AnythingLLM
              </a>
              <a
                href="/llm-setup-guide.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0159A3] font-semibold rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
              >
                Guide
              </a>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search tools by name, category, or use case..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Pricing Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value as PricingTier | 'All')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Pricing</option>
                  {PRICING_OPTIONS.map(price => (
                    <option key={price} value={price}>
                      {price === 'Free' ? 'Free' : price === '$' ? 'Budget ($)' : price === '$$' ? 'Moderate ($$)' : price === '$$$' ? 'Premium ($$$)' : 'Enterprise ($$$$)'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="price">Sort by Price</option>
                </select>
              </div>

              {/* Clear Filters */}
              {(searchQuery || selectedCategory !== 'All Categories' || selectedPricing !== 'All') && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Comparison Bar */}
          {showComparison && comparisonTools.length > 0 && (
            <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AnimatedIcon variant="compare" size={20} className="text-blue-600" />
                  <span className="font-semibold text-blue-900">
                    Comparing {comparisonTools.length} tool{comparisonTools.length > 1 ? 's' : ''}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setCompareTools(new Set());
                    setShowComparison(false);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Comparison View */}
          {showComparison && comparisonTools.length > 0 && (
            <div className="mb-8">
              <AIToolComparison tools={comparisonTools} />
            </div>
          )}

          {/* Results Count */}
          {!showComparison && (
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredTools.length}</span> tool{filteredTools.length !== 1 ? 's' : ''}
              </p>
              {compareTools.size > 0 && (
                <div className="text-sm text-blue-600">
                  {compareTools.size} tool{compareTools.size > 1 ? 's' : ''} selected for comparison
                </div>
              )}
            </div>
          )}

          {/* All Tools List */}
          {!showComparison && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">All Tools</h2>
              {filteredTools.length > 0 ? (
                <div className="space-y-4">
                  {filteredTools.map(tool => (
                    <AIToolCard
                      key={tool.id}
                      tool={tool}
                      onCompareToggle={() => toggleCompare(tool.id)}
                      isComparing={compareTools.has(tool.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
                  <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No tools found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search query.</p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Recommendations Section */}
          {!showComparison && (
            <div className="mb-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Tools</h2>

              {/* Best for Startups */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <AnimatedIcon variant="growth" size={20} className="text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Best for Startups</h3>
                </div>
                <div className="space-y-4">
                  {recommendedStartups.map(tool => (
                    <AIToolCard
                      key={tool.id}
                      tool={tool}
                      onCompareToggle={() => toggleCompare(tool.id)}
                      isComparing={compareTools.has(tool.id)}
                    />
                  ))}
                </div>
              </section>

              {/* Best Free Options */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <AnimatedIcon variant="dollar" size={20} className="text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Best Free Options</h3>
                </div>
                <div className="space-y-4">
                  {recommendedFree.map(tool => (
                    <AIToolCard
                      key={tool.id}
                      tool={tool}
                      onCompareToggle={() => toggleCompare(tool.id)}
                      isComparing={compareTools.has(tool.id)}
                    />
                  ))}
                </div>
              </section>

              {/* Most Popular */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <AnimatedIcon variant="star" size={20} className="text-yellow-600" />
                  <h3 className="text-xl font-bold text-gray-900">Most Popular</h3>
                </div>
                <div className="space-y-4">
                  {recommendedPopular.map(tool => (
                    <AIToolCard
                      key={tool.id}
                      tool={tool}
                      onCompareToggle={() => toggleCompare(tool.id)}
                      isComparing={compareTools.has(tool.id)}
                    />
                  ))}
                </div>
              </section>

              {/* Best for Large Companies */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <AnimatedIcon variant="building" size={20} className="text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Best for Large Companies</h3>
                </div>
                <div className="space-y-4">
                  {recommendedLarge.map(tool => (
                    <AIToolCard
                      key={tool.id}
                      tool={tool}
                      onCompareToggle={() => toggleCompare(tool.id)}
                      isComparing={compareTools.has(tool.id)}
                    />
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

