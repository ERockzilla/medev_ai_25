'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { REGULATORY_DATA, type RegulatoryData } from '@/lib/regulatoryData';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import Footer from '@/components/Footer';

const RegulatoryGlobe = dynamic(() => import('@/components/RegulatoryGlobePolygon'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">Loading Globe...</p>
      </div>
    </div>
  ),
});

export default function GlobalMapPage() {
  const [selectedCountry, setSelectedCountry] = useState<RegulatoryData | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
          {/* Title Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">3D Global Regulatory Map</h2>
            <p className="text-gray-600">Interactive visualization of regulatory requirements worldwide</p>
          </div>

          {/* Globe Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Globe View Settings</h3>
                <p className="text-sm text-gray-600">Rotate, zoom, and hover for details</p>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-700">Color By:</label>
                <select className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Complexity Score</option>
                  <option>Registration Cost</option>
                  <option>Timeline</option>
                </select>
              </div>
            </div>

            {/* Color Scale Legend */}
            <div className="mb-4 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-4 text-xs">
                <span className="font-semibold text-gray-700">Color Scale:</span>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="text-gray-600">High (8-10)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-600">Medium (5-7)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600">Low (1-4)</span>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-lg overflow-hidden" style={{ height: '600px' }}>
              <RegulatoryGlobe
                selectedCountry={selectedCountry?.code}
                onCountrySelect={(data) => setSelectedCountry(data)}
              />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              <InfoCard
                title="Highest Complexity"
                value={REGULATORY_DATA.sort((a, b) => b.complexity - a.complexity)[0].country}
                code={REGULATORY_DATA.sort((a, b) => b.complexity - a.complexity)[0].code}
                color={REGULATORY_DATA.sort((a, b) => b.complexity - a.complexity)[0].color}
              />
              <InfoCard
                title="Lowest Cost"
                value={REGULATORY_DATA.sort((a, b) => a.avgCost - b.avgCost)[0].country}
                code={REGULATORY_DATA.sort((a, b) => a.avgCost - b.avgCost)[0].code}
                color={REGULATORY_DATA.sort((a, b) => a.avgCost - b.avgCost)[0].color}
              />
              <InfoCard
                title="Fastest Timeline"
                value={REGULATORY_DATA.sort((a, b) => a.avgTimeline - b.avgTimeline)[0].country}
                code={REGULATORY_DATA.sort((a, b) => a.avgTimeline - b.avgTimeline)[0].code}
                color={REGULATORY_DATA.sort((a, b) => a.avgTimeline - b.avgTimeline)[0].color}
              />
              <InfoCard
                title="Most Popular"
                value="United States"
                code="US"
                color="#ef4444"
              />
            </div>

            {/* Navigation Tips */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">🌍 About the 3D Globe</p>
              <p className="text-sm text-blue-800 mb-3">
                This globe dynamically colors countries based on their regulatory complexity.
                Colors update in real-time as you interact with the data.
              </p>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-2">Navigation Tips:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Click and drag to rotate the globe in any direction</li>
                  <li>Scroll or pinch to zoom in and out</li>
                  <li>Hover over colored markers to see detailed regulatory data</li>
                  <li>Click on markers to select and view comprehensive information</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selected Country Detail */}
          {selectedCountry && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-6">
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center text-3xl font-bold text-white"
                  style={{ backgroundColor: selectedCountry.color }}
                >
                  {selectedCountry.code}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCountry.country}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Regulatory Agency</p>
                      <p className="text-lg font-semibold text-gray-900">{selectedCountry.agency}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Complexity Score</p>
                      <p className="text-lg font-semibold" style={{ color: selectedCountry.color }}>{selectedCountry.complexity}/10</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Average Registration Cost</p>
                      <p className="text-lg font-semibold text-gray-900">${(selectedCountry.avgCost / 1000).toFixed(0)}k USD</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Average Timeline</p>
                      <p className="text-lg font-semibold text-gray-900">{selectedCountry.avgTimeline} months</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                      View Requirements
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium">
                      Compare Markets
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
              {/* Footer */}
              <Footer />
    </div>
  );
}

function InfoCard({ title, value, code, color }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <p className="text-xs text-gray-600 mb-2">{title}</p>
      <p className="text-sm font-bold text-gray-900 mb-1">{value}</p>
      <span
        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold"
        style={{ backgroundColor: `${color}20`, color }}
      >
        {code}
      </span>
    </div>
    );
}


