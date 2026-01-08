'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { REGULATORY_DATA, type RegulatoryData } from '@/lib/regulatoryData';
import BubbleChart from '@/components/BubbleChart';
import AnimatedIcon from '@/components/AnimatedIcon';
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
  const [tableRiskLevel, setTableRiskLevel] = useState<RiskLevel>('medium');
  const [metric, setMetric] = useState<'complexity' | 'cost' | 'timeline'>('complexity');
  const [sortColumn, setSortColumn] = useState<'country' | 'agency' | 'region' | 'cost' | 'timeline' | 'complexity'>('complexity');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRowExpanded = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedRows(prev => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code);
      else next.add(code);
      return next;
    });
  };

  // Data for globe and bubble chart
  const adjustedData = REGULATORY_DATA.map(d => ({
    ...d,
    avgCost: Math.round(d.avgCost * RISK_MULTIPLIERS[riskLevel]),
    avgTimeline: Math.round(d.avgTimeline * RISK_MULTIPLIERS[riskLevel]),
    complexity: Math.min(10, Math.round(d.complexity * (RISK_MULTIPLIERS[riskLevel] * 0.8))),
  }));

  // Separate data for table - uses tableRiskLevel
  const tableAdjustedData = REGULATORY_DATA.map(d => ({
    ...d,
    avgCost: Math.round(d.avgCost * RISK_MULTIPLIERS[tableRiskLevel]),
    avgTimeline: Math.round(d.avgTimeline * RISK_MULTIPLIERS[tableRiskLevel]),
    complexity: Math.min(10, Math.round(d.complexity * (RISK_MULTIPLIERS[tableRiskLevel] * 0.8))),
  }));

  const handleSort = (column: typeof sortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('desc');
    }
  };

  const sortedData = [...tableAdjustedData].sort((a, b) => {
    let comparison = 0;
    switch (sortColumn) {
      case 'country':
        comparison = a.country.localeCompare(b.country);
        break;
      case 'agency':
        comparison = a.agency.localeCompare(b.agency);
        break;
      case 'region':
        comparison = a.region.localeCompare(b.region);
        break;
      case 'cost':
        comparison = a.avgCost - b.avgCost;
        break;
      case 'timeline':
        comparison = a.avgTimeline - b.avgTimeline;
        break;
      case 'complexity':
        comparison = a.complexity - b.complexity;
        break;
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Knowledge Center
            </Link>
          </div>

          {/* Title Section */}
          <div className="mb-8">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg flex-shrink-0">
                <AnimatedIcon variant="globe" size={32} className="text-blue-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Regulatory Complexity Analysis</h1>
                <p className="text-xl text-gray-600">Real-time visualization of regulatory complexity and cost by market</p>
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

          {/* Visualization Controls - Moved here */}
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

          {/* Bubble Chart */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Cost vs Timeline Analysis</h3>
              <p className="text-sm text-gray-600">X-axis: Timeline (months) • Y-axis: Registration Cost ($K) • Bubble Size: Market Size (GDP + Population)</p>
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
              Tip: Hover over bubbles for details • Click to select • Larger bubbles = larger market opportunity
            </p>
          </div>

          {/* Regional Summary Cards */}
          {(() => {
            const regions = ['Americas', 'Europe', 'Asia-Pacific', 'Other'] as const;
            const regionData = regions.map(region => {
              const countries = adjustedData.filter(d => d.region === region);
              const count = countries.length;
              const avgCost = count > 0 ? countries.reduce((sum, c) => sum + c.avgCost, 0) / count : 0;
              const avgComplexity = count > 0 ? countries.reduce((sum, c) => sum + c.complexity, 0) / count : 0;
              return { region, count, avgCost, avgComplexity };
            });
            return (
              <div className="grid grid-cols-4 gap-4">
                {regionData.map(r => (
                  <SummaryCard
                    key={r.region}
                    title={r.region}
                    avgCost={r.avgCost}
                    avgComplexity={r.avgComplexity}
                    subtitle={`${r.count} market${r.count !== 1 ? 's' : ''}`}
                  />
                ))}
              </div>
            );
          })()}

          {/* Data Table */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Regulatory Data Summary</h3>
                  <p className="text-sm text-gray-600 mt-1">Click column headers to sort • Click chevron to expand details</p>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">Device Risk:</label>
                  <select
                    value={tableRiskLevel}
                    onChange={(e) => setTableRiskLevel(e.target.value as RiskLevel)}
                    className="px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="low">Low Risk</option>
                    <option value="medium">Medium Risk</option>
                    <option value="high">High Risk</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white border-b-2 border-gray-200">
                  <tr>
                    <th
                      className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-50 select-none"
                      onClick={() => handleSort('country')}
                    >
                      <div className="flex items-center gap-1">
                        Country
                        {sortColumn === 'country' && (
                          <span className="text-blue-600">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                    <th
                      className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-50 select-none"
                      onClick={() => handleSort('agency')}
                    >
                      <div className="flex items-center gap-1">
                        Agency
                        {sortColumn === 'agency' && (
                          <span className="text-blue-600">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                    <th
                      className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-50 select-none"
                      onClick={() => handleSort('region')}
                    >
                      <div className="flex items-center gap-1">
                        Region
                        {sortColumn === 'region' && (
                          <span className="text-blue-600">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                    <th
                      className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-50 select-none"
                      onClick={() => handleSort('cost')}
                    >
                      <div className="flex items-center justify-end gap-1">
                        Cost (USD)
                        {sortColumn === 'cost' && (
                          <span className="text-blue-600">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                    <th
                      className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-50 select-none"
                      onClick={() => handleSort('timeline')}
                    >
                      <div className="flex items-center justify-end gap-1">
                        Timeline
                        {sortColumn === 'timeline' && (
                          <span className="text-blue-600">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                    <th
                      className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-50 select-none"
                      onClick={() => handleSort('complexity')}
                    >
                      <div className="flex items-center justify-end gap-1">
                        Complexity
                        {sortColumn === 'complexity' && (
                          <span className="text-blue-600">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {sortedData.map((d) => (
                    <>
                      <tr
                        key={d.code}
                        className={`hover:bg-blue-50 cursor-pointer transition-all duration-150 ${selectedCountry?.code === d.code ? 'bg-blue-100 border-l-4' : ''} ${expandedRows.has(d.code) ? 'bg-gray-50' : ''}`}
                        style={selectedCountry?.code === d.code ? { borderLeftColor: d.color } : {}}
                        onClick={() => setSelectedCountry(d)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => toggleRowExpanded(d.code, e)}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                              aria-label={expandedRows.has(d.code) ? 'Collapse' : 'Expand'}
                            >
                              <svg
                                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${expandedRows.has(d.code) ? 'rotate-90' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                            <div className="text-sm font-semibold text-gray-900">{d.country}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700">{d.agency}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                            {d.region}
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
                      {/* Expandable Detail Row */}
                      {expandedRows.has(d.code) && (
                        <tr key={`${d.code}-details`} className="bg-gray-50">
                          <td colSpan={6} className="px-6 py-6">
                            <CountryDetails data={d} riskMultiplier={RISK_MULTIPLIERS[tableRiskLevel]} />
                          </td>
                        </tr>
                      )}
                    </>
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

function SummaryCard({ title, avgCost, avgComplexity, subtitle }: { title: string; avgCost: number; avgComplexity: number; subtitle: string }) {
  const isHighComplexity = avgComplexity >= 7;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h4 className="text-sm font-semibold text-gray-900 mb-2">{title}</h4>
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Avg Cost:</span>
          <span className="text-sm font-bold text-gray-900">${(avgCost / 1000).toFixed(0)}k</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Avg Complexity:</span>
          <span className={`text-sm font-bold ${isHighComplexity ? 'text-red-600' : 'text-green-600'}`}>
            {avgComplexity.toFixed(1)}/10
          </span>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2">{subtitle}</p>
    </div>
  );
}

function CountryDetails({ data, riskMultiplier }: { data: RegulatoryData; riskMultiplier: number }) {
  const { details } = data;

  // Helper to format cost range
  const formatRange = (range: { min: number; max: number }) => {
    const minAdj = Math.round(range.min * riskMultiplier);
    const maxAdj = Math.round(range.max * riskMultiplier);
    if (minAdj === 0) return `$0 - $${maxAdj.toLocaleString()}`;
    return `$${minAdj.toLocaleString()} - $${maxAdj.toLocaleString()}`;
  };

  // Calculate total ranges
  const cb = details.costBreakdown;
  const totalMin = Math.round((cb.registrationFee.min + cb.authorizedRepFee.min + cb.labTestingFee.min + cb.clinicalCost.min + cb.otherFees.min) * riskMultiplier);
  const totalMax = Math.round((cb.registrationFee.max + cb.authorizedRepFee.max + cb.labTestingFee.max + cb.clinicalCost.max + cb.otherFees.max) * riskMultiplier);

  return (
    <div className="space-y-6">
      {/* Header with Agency Link */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-bold text-gray-900">{data.country} - {data.agency}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
              {details.costBasis}
            </span>
            <span className="text-sm text-gray-500">Medical Device Registration Guide</span>
          </div>
        </div>
        <a
          href={details.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Official Website
        </a>
      </div>

      {/* Cost Disclaimer Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-amber-800">Cost Estimates Vary Significantly by Device Class</p>
            <p className="text-xs text-amber-700 mt-1">{details.costDisclaimer}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cost Breakdown */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h5 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Cost Ranges (Low → High Risk)
          </h5>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-600">Registration/Application Fee</span>
              <span className="font-mono font-medium text-right">{formatRange(cb.registrationFee)}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-600">Authorized Rep (Annual)</span>
              <span className="font-mono font-medium text-right">{formatRange(cb.authorizedRepFee)}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-600">Lab Testing & Certification</span>
              <span className="font-mono font-medium text-right">{formatRange(cb.labTestingFee)}</span>
            </div>
            <div className="flex justify-between items-center py-1 bg-yellow-50 -mx-2 px-2 rounded">
              <span className="text-gray-700 font-medium">Clinical Evidence*</span>
              <span className="font-mono font-medium text-right">{formatRange(cb.clinicalCost)}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-600">Other Fees (Consulting, etc.)</span>
              <span className="font-mono font-medium text-right">{formatRange(cb.otherFees)}</span>
            </div>
            <div className="flex justify-between items-center font-bold pt-3 border-t border-gray-200 mt-2">
              <span className="text-gray-900">Total Range</span>
              <span className="font-mono text-blue-600">${totalMin.toLocaleString()} - ${totalMax.toLocaleString()}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">*Clinical costs can exceed these ranges for pivotal trials</p>
        </div>

        {/* Requirements */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h5 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Key Requirements
          </h5>
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${details.requirements.authorizedRep ? 'bg-red-500' : 'bg-green-500'}`}></span>
                <span className="text-sm font-medium text-gray-900">
                  Authorized Representative: {details.requirements.authorizedRep ? 'Required' : 'Not Required'}
                </span>
              </div>
              <p className="text-xs text-gray-500 ml-4">{details.requirements.authorizedRepNotes}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900">Quality System:</span>
              <p className="text-xs text-gray-600 mt-1">{details.requirements.qualitySystem}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900">Clinical Data:</span>
              <p className="text-xs text-gray-600 mt-1">{details.requirements.clinicalData}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Steps */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h5 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          Registration Process Steps
        </h5>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {details.registrationSteps.map((step, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">
                {index + 1}
              </span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lab Testing Requirements */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h5 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Lab Testing Requirements
          </h5>
          <ul className="space-y-1">
            {details.requirements.labTesting.map((test, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {test}
              </li>
            ))}
          </ul>
        </div>

        {/* Classification Pathways */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h5 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Classification Pathways
          </h5>
          <div className="space-y-3">
            <div>
              <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded mb-1">Class I (Low Risk)</span>
              <p className="text-xs text-gray-600">{details.pathways.classI}</p>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-bold rounded mb-1">Class II (Medium Risk)</span>
              <p className="text-xs text-gray-600">{details.pathways.classII}</p>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded mb-1">Class III (High Risk)</span>
              <p className="text-xs text-gray-600">{details.pathways.classIII}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h5 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Important Notes
        </h5>
        <p className="text-sm text-blue-800">{details.notes}</p>
      </div>
    </div>
  );
}
