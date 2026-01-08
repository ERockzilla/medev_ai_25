'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import { Search, Filter, ExternalLink } from 'lucide-react';
import AnimatedIcon from '@/components/AnimatedIcon';

// Standards data - will be populated as we create content
const STANDARDS = [
  {
    id: 'iso-13485',
    number: 'ISO 13485',
    title: 'Medical devices — Quality management systems',
    organization: 'ISO',
    category: 'foundation',
    status: 'published',
    description: 'Quality management system requirements for medical device manufacturers',
    url: '/standards/iso-13485'
  },
  {
    id: 'iso-14971',
    number: 'ISO 14971',
    title: 'Medical devices — Application of risk management',
    organization: 'ISO',
    category: 'risk-management',
    status: 'published',
    description: 'Risk management process for medical devices throughout the lifecycle',
    url: '/standards/iso-14971'
  },
  {
    id: 'iec-62304',
    number: 'IEC 62304',
    title: 'Medical device software — Software life cycle processes',
    organization: 'IEC',
    category: 'software',
    status: 'published',
    description: 'Software development lifecycle requirements for medical device software',
    url: '/standards/iec-62304'
  },
  {
    id: 'iec-60601-1',
    number: 'IEC 60601-1',
    title: 'Medical electrical equipment — Part 1: General requirements',
    organization: 'IEC',
    category: 'medical-electrical',
    status: 'published',
    description: 'General safety and essential performance requirements for medical electrical equipment',
    url: '/standards/iec-60601-1'
  },
  {
    id: 'iec-60601-1-2',
    number: 'IEC 60601-1-2',
    title: 'Medical electrical equipment — Part 1-2: Electromagnetic disturbances',
    organization: 'IEC',
    category: 'medical-electrical',
    status: 'published',
    description: 'EMC requirements and testing for medical electrical equipment',
    url: '/standards/iec-60601-1-2'
  },
  {
    id: 'iec-62366',
    number: 'IEC 62366',
    title: 'Medical devices — Application of usability engineering',
    organization: 'IEC',
    category: 'usability',
    status: 'published',
    description: 'Usability engineering process for medical devices',
    url: '/standards/iec-62366'
  },
  {
    id: 'iec-60601-2-22',
    number: 'IEC 60601-2-22',
    title: 'Medical electrical equipment — Part 2-22: Laser equipment',
    organization: 'IEC',
    category: 'laser-safety',
    status: 'published',
    description: 'Particular requirements for surgical, cosmetic, therapeutic and diagnostic laser equipment',
    url: '/standards/iec-60601-2-22'
  },
  {
    id: 'iec-60825-1',
    number: 'IEC 60825-1',
    title: 'Safety of laser products — Part 1: Equipment classification',
    organization: 'IEC',
    category: 'laser-safety',
    status: 'published',
    description: 'Laser product classification and safety requirements',
    url: '/standards/iec-60825-1'
  },
  {
    id: 'iso-10993',
    number: 'ISO 10993',
    title: 'Biological evaluation of medical devices',
    organization: 'ISO',
    category: 'testing',
    status: 'published',
    description: 'Biological safety evaluation and biocompatibility testing requirements for medical devices',
    url: '/standards/iso-10993'
  },
  {
    id: 'iso-14155',
    number: 'ISO 14155',
    title: 'Clinical investigation of medical devices for human subjects',
    organization: 'ISO',
    category: 'clinical',
    status: 'published',
    description: 'Good clinical practice for clinical investigations of medical devices',
    url: '/standards/iso-14155'
  },
  {
    id: 'iec-81001-5-1',
    number: 'IEC 81001-5-1',
    title: 'Health software and health IT systems safety, effectiveness and security',
    organization: 'IEC',
    category: 'software',
    status: 'published',
    description: 'Cybersecurity requirements for health software and IT systems',
    url: '/standards/iec-81001-5-1'
  },
  {
    id: 'iso-15223',
    number: 'ISO 15223',
    title: 'Medical devices — Symbols to be used with medical device labels',
    organization: 'ISO',
    category: 'labeling',
    status: 'published',
    description: 'Standardized symbols for medical device labeling and information',
    url: '/standards/iso-15223'
  },
  {
    id: 'iso-20417',
    number: 'ISO 20417',
    title: 'Medical devices — Information to be supplied by the manufacturer',
    organization: 'ISO',
    category: 'labeling',
    status: 'published',
    description: 'Requirements for information supplied with medical devices including labeling',
    url: '/standards/iso-20417'
  },
  {
    id: 'iec-60601-2-57',
    number: 'IEC 60601-2-57',
    title: 'Medical electrical equipment — Part 2-57: Particular requirements for basic safety and essential performance of non-laser light source equipment',
    organization: 'IEC',
    category: 'medical-electrical',
    status: 'published',
    description: 'Safety requirements for LED and other non-laser light source medical equipment',
    url: '/standards/iec-60601-2-57'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Standards', color: 'gray' },
  { id: 'foundation', label: 'Foundation', color: 'blue' },
  { id: 'risk-management', label: 'Risk Management', color: 'red' },
  { id: 'software', label: 'Software', color: 'pink' },
  { id: 'medical-electrical', label: 'Medical Electrical', color: 'orange' },
  { id: 'laser-safety', label: 'Laser Safety', color: 'red' },
  { id: 'usability', label: 'Usability', color: 'cyan' },
  { id: 'testing', label: 'Testing', color: 'green' },
  { id: 'clinical', label: 'Clinical', color: 'purple' },
  { id: 'labeling', label: 'Labeling', color: 'indigo' },
];

export default function StandardsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredStandards = STANDARDS.filter(standard => {
    const matchesSearch =
      standard.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      standard.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      standard.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || standard.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Knowledge Center
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg flex-shrink-0">
                <AnimatedIcon variant="file" size={32} className="text-blue-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Standards Database</h1>
                <p className="text-xl text-gray-600">
                  Comprehensive database of medical device standards with implementation guidance
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search standards by number, title, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === category.id
                    ? `bg-${category.color}-600 text-white`
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Standards Grid */}
          {filteredStandards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStandards.map((standard) => (
                <Link
                  key={standard.id}
                  href={standard.url}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {standard.organization}
                        </span>
                        {standard.status === 'coming-soon' && (
                          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {standard.number}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {standard.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                    {standard.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500 capitalize">
                      {standard.category.replace('-', ' ')}
                    </span>
                    <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium">View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
              <AnimatedIcon variant="file" size={64} className="mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">No standards found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Info Banner */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <AnimatedIcon variant="file" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 mb-2">Phase 1: Standards Database - In Development</h4>
                <p className="text-sm text-blue-800 mb-3">
                  We're building comprehensive standard pages with implementation guidance, visual diagrams,
                  and medical laser system examples. Content will be published as it's completed.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="bg-white rounded p-2">
                    <div className="font-bold text-blue-900">14 Standards</div>
                    <div className="text-blue-700">Published</div>
                  </div>
                  <div className="bg-white rounded p-2">
                    <div className="font-bold text-blue-900">Medical Lasers</div>
                    <div className="text-blue-700">Examples</div>
                  </div>
                  <div className="bg-white rounded p-2">
                    <div className="font-bold text-blue-900">Visual Diagrams</div>
                    <div className="text-blue-700">Flowcharts</div>
                  </div>
                  <div className="bg-white rounded p-2">
                    <div className="font-bold text-blue-900">Implementation</div>
                    <div className="text-blue-700">Guides</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
