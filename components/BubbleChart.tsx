'use client';

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { REGULATORY_DATA, type RegulatoryData } from '@/lib/regulatoryData';

interface BubbleChartProps {
  data: RegulatoryData[];
  selectedCountry: RegulatoryData | null;
  onCountrySelect: (country: RegulatoryData) => void;
  metric: 'complexity' | 'cost' | 'timeline';
}

export default function BubbleChart({ data, selectedCountry, onCountrySelect, metric }: BubbleChartProps) {
  const chartData = data.map((d, i) => ({
    x: 20 + (i * 7) + Math.random() * 5, // Market influence (scattered)
    y: metric === 'complexity' ? d.complexity : metric === 'cost' ? d.avgCost / 10000 : d.avgTimeline,
    size: d.avgCost / 5000, // Bubble size based on cost
    country: d.country,
    code: d.code,
    agency: d.agency,
    cost: d.avgCost,
    timeline: d.avgTimeline,
    complexity: d.complexity,
    color: d.color,
    fullData: d,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <p className="font-bold text-gray-900 mb-2">{data.country} ({data.code})</p>
          <div className="space-y-1 text-sm">
            <p className="text-gray-600"><span className="font-medium">Agency:</span> {data.agency}</p>
            <p className="text-gray-600"><span className="font-medium">Complexity:</span> {data.complexity}/10</p>
            <p className="text-gray-600"><span className="font-medium">Cost:</span> ${(data.cost / 1000).toFixed(0)}k</p>
            <p className="text-gray-600"><span className="font-medium">Timeline:</span> {data.timeline}mo</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          type="number"
          dataKey="x"
          name="Market Influence"
          domain={[0, 100]}
          tick={{ fill: '#6b7280', fontSize: 12 }}
          label={{ value: 'Market Influence', position: 'insideBottom', offset: -10, style: { textAnchor: 'middle', fill: '#374151', fontSize: 14, fontWeight: 500 } }}
        />
        <YAxis
          type="number"
          dataKey="y"
          name={metric === 'complexity' ? 'Complexity Score' : metric === 'cost' ? 'Cost ($K)' : 'Timeline (mo)'}
          tick={{ fill: '#6b7280', fontSize: 12 }}
          label={{ value: metric === 'complexity' ? 'Complexity Score' : metric === 'cost' ? 'Cost ($K)' : 'Timeline (mo)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#374151', fontSize: 14, fontWeight: 500 } }}
        />
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
              style={{ cursor: 'pointer' }}
            />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}

