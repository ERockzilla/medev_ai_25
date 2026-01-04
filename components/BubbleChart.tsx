'use client';

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ZAxis, Legend } from 'recharts';
import { type RegulatoryData } from '@/lib/regulatoryData';

interface BubbleChartProps {
  data: RegulatoryData[];
  selectedCountry: RegulatoryData | null;
  onCountrySelect: (country: RegulatoryData) => void;
  metric: 'complexity' | 'cost' | 'timeline';
}

export default function BubbleChart({ data, selectedCountry, onCountrySelect, metric }: BubbleChartProps) {
  // Calculate market score from GDP and population for bubble sizing
  // Using a log scale to prevent huge bubbles for China/India
  const calculateMarketScore = (gdp: number, pop: number) => {
    // Weighted: 70% GDP, 30% population (log-scaled)
    const gdpScore = Math.log10(gdp + 1) * 70;
    const popScore = Math.log10(pop + 1) * 30;
    return gdpScore + popScore;
  };

  // Find min/max for normalization
  const marketScores = data.map(d => calculateMarketScore(d.gdpBillions, d.populationMillions));
  const minScore = Math.min(...marketScores);
  const maxScore = Math.max(...marketScores);

  const chartData = data.map((d) => {
    const rawMarketScore = calculateMarketScore(d.gdpBillions, d.populationMillions);
    // Normalize to 10-100 range for bubble size
    const normalizedSize = 10 + ((rawMarketScore - minScore) / (maxScore - minScore)) * 90;

    return {
      x: d.avgTimeline, // X-axis: Timeline in months
      y: d.avgCost / 1000, // Y-axis: Cost in $K
      z: normalizedSize, // Bubble size: GDP + Population score
      country: d.country,
      code: d.code,
      agency: d.agency,
      cost: d.avgCost,
      timeline: d.avgTimeline,
      complexity: d.complexity,
      color: d.color,
      gdp: d.gdpBillions,
      population: d.populationMillions,
      region: d.region,
      fullData: d,
    };
  });

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-[220px]">
          <p className="font-bold text-gray-900 mb-1" style={{ color: data.color }}>{data.country}</p>
          <p className="text-gray-500 text-xs mb-3">{data.code} • {data.agency}</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Complexity:</span>
              <span className="font-semibold text-gray-900">{data.complexity}/10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Avg Cost:</span>
              <span className="font-semibold text-gray-900">${(data.cost / 1000).toFixed(0)}k</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Timeline:</span>
              <span className="font-semibold text-gray-900">{data.timeline} months</span>
            </div>
            <div className="border-t border-gray-100 pt-2 mt-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">GDP:</span>
                <span className="text-gray-600">${data.gdp.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Population:</span>
                <span className="text-gray-600">{data.population}M</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={420}>
        <ScatterChart margin={{ top: 20, right: 30, bottom: 50, left: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            type="number"
            dataKey="x"
            name="Timeline (months)"
            domain={[0, 'auto']}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            tickFormatter={(value) => `${value}mo`}
            label={{
              value: 'Registration Timeline (months)',
              position: 'insideBottom',
              offset: -10,
              style: { textAnchor: 'middle', fill: '#374151', fontSize: 14, fontWeight: 600 }
            }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Registration Cost"
            domain={[0, 'auto']}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            tickFormatter={(value) => `$${value}k`}
            label={{
              value: 'Registration Cost ($K)',
              angle: -90,
              position: 'insideLeft',
              offset: 10,
              style: { textAnchor: 'middle', fill: '#374151', fontSize: 14, fontWeight: 600 }
            }}
          />
          <ZAxis type="number" dataKey="z" range={[100, 800]} name="Market Size" />
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
          <Scatter
            name="Regulatory Markets"
            data={chartData}
            fill="#8884d8"
            onClick={(data: any) => onCountrySelect(data.fullData)}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                opacity={selectedCountry?.code === entry.code ? 1 : 0.7}
                stroke={selectedCountry?.code === entry.code ? '#1f2937' : 'transparent'}
                strokeWidth={selectedCountry?.code === entry.code ? 2 : 0}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-2 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-gray-400"></span>
            <span>Small</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-5 h-5 rounded-full bg-gray-400"></span>
            <span>Large</span>
          </div>
          <span className="text-gray-400 ml-1">= Market Size (GDP + Population)</span>
        </div>
        <div className="h-4 w-px bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span>Low</span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span>Med</span>
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span>High Complexity</span>
        </div>
      </div>
    </div>
  );
}
