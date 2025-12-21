'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { REGULATORY_DATA, type RegulatoryData } from '@/lib/regulatoryData';
import BubbleChart from '@/components/BubbleChart';
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

type RiskLevel = 'low' | 'medium' | 'high';

const RISK_MULTIPLIERS = {
  'low': 1.0,
  'medium': 1.5,
  'high': 2.5,
};

export default function RegulatoryAnalysisPage() {
  const [selectedCountry, setSelectedCountry] = useState<RegulatoryData | null>(null);
  const [riskLevel, setRiskLevel] = useState<RiskLevel>('medium');
  const [metric, setMetric] = useState<'complexity' | 'cost' | 'timeline'>('complexity');

  const adjustedData = REGULATORY_DATA.map(d => ({
    ...d,
    avgCost: Math.round(d.avgCost * RISK_MULTIPLIERS[riskLevel]),
    avgTimeline: Math.round(d.avgTimeline * RISK_MULTIPLIERS[riskLevel]),
    complexity: Math.min(10, Math.round(d.complexity * (RISK_MULTIPLIERS[riskLevel] * 0.8))),
  }));

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
          {/* Title Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Regulatory Complexity Analysis</h2>
            <p className="text-gray-600">Real-time visualization of regulatory complexity and cost by market</p>
          </div>

          {/* Controls */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Visualization Controls</h3>
                <p className="text-xs text-gray-600">Select risk level and metric for analysis</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">Risk Level:</label>
                  <select
                    value={riskLevel}
                    onChange={(e) => setRiskLevel(e.target.value as RiskLevel)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Low Risk</option>
                    <option value="medium">Medium Risk</option>
                    <option value="high">High Risk</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">Metric:</label>
                  <select
                    value={metric}
                    onChange={(e) => setMetric(e.target.value as any)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="complexity">Complexity Score</option>
                    <option value="cost">Registration Cost</option>
                    <option value="timeline">Timeline (months)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Color Scale */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4 text-xs">
                <span className="font-semibold text-gray-700">Color Scale:</span>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="text-gray-600">High Complexity (8-10)</span>
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
          </div>

          {/* 3D Interactive Globe */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Global Regulatory Map</h3>
              <p className="text-sm text-gray-600">Interactive 3D globe showing regulatory complexity by country. Click and drag to rotate, scroll to zoom, hover for details.</p>
            </div>

            <div className="bg-black rounded-lg overflow-hidden" style={{ height: '600px' }}>
              <RegulatoryGlobe
                selectedCountry={selectedCountry?.code}
                onCountrySelect={(data) => setSelectedCountry(data)}
                data={adjustedData}
                metric={metric}
              />
            </div>

            {/* Navigation Tips */}
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">🌍 Navigation Tips</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-blue-800">
                <div>
                  <span className="font-semibold">Rotate:</span> Click and drag
                </div>
                <div>
                  <span className="font-semibold">Zoom:</span> Scroll or pinch
                </div>
                <div>
                  <span className="font-semibold">Details:</span> Hover over markers
                </div>
                <div>
                  <span className="font-semibold">Select:</span> Click on markers
                </div>
              </div>
            </div>
          </div>

          {/* Bubble Chart */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Regulatory Performance Map</h3>
              <p className="text-sm text-gray-600">X-axis: Market Influence • Y-axis: {metric === 'complexity' ? 'Complexity Score' : metric === 'cost' ? 'Registration Cost ($K)' : 'Timeline (months)'} • Bubble Size: Registration Cost</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <BubbleChart
                data={adjustedData}
                selectedCountry={selectedCountry}
                onCountrySelect={setSelectedCountry}
                metric={metric}
              />
            </div>

            <p className="mt-4 text-xs text-gray-500 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Tip: Hover over bubbles for details • Click to select • Larger bubbles = higher registration costs
            </p>
          </div>

          {/* Regional Summary Cards */}
          <div className="grid grid-cols-4 gap-4">
            <SummaryCard title="Americas" value="-1.2%" subtitle="3 markets" negative />
            <SummaryCard title="Europe" value="+0.3%" subtitle="5 markets" />
            <SummaryCard title="Asia-Pacific" value="-0.2%" subtitle="3 markets" negative />
            <SummaryCard title="Other" value="-0.8%" subtitle="1 market" negative />
          </div>

          {/* Data Table */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">Regulatory Data Summary</h3>
              <p className="text-sm text-gray-600 mt-1">Click any row to view detailed information</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Country</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Agency</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Region</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Cost (USD)</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Timeline</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Complexity</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {adjustedData.sort((a, b) => b.complexity - a.complexity).map((d) => (
                    <tr
                      key={d.code}
                      className={`hover:bg-blue-50 cursor-pointer transition-all duration-150 ${selectedCountry?.code === d.code ? 'bg-blue-100 border-l-4' : ''}`}
                      style={selectedCountry?.code === d.code ? { borderLeftColor: d.color } : {}}
                      onClick={() => setSelectedCountry(d)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">{d.country}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-700">{d.agency}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                          {d.code}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm font-semibold text-gray-900 font-mono">
                          ${(d.avgCost / 1000).toFixed(0)}k
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm font-medium text-gray-900">{d.avgTimeline}mo</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
                          style={{ backgroundColor: `${d.color}15`, color: d.color, border: `1px solid ${d.color}40` }}
                        >
                          {d.complexity}/10
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

function SummaryCard({ title, value, subtitle, negative }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h4 className="text-sm font-semibold text-gray-900 mb-1">{title}</h4>
      <p className={`text-2xl font-bold ${negative ? 'text-red-600' : 'text-green-600'} mb-1`}>{value}</p>
      <p className="text-xs text-gray-600">{subtitle}</p>
    </div>
  );
}


