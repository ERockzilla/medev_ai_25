'use client';

import { AITool } from '@/lib/aiToolsData';
import { ExternalLink, CheckCircle2, XCircle, X } from 'lucide-react';

interface AIToolComparisonProps {
  tools: AITool[];
}

export default function AIToolComparison({ tools }: AIToolComparisonProps) {
  if (tools.length === 0) return null;

  const pricingLabels: Record<string, string> = {
    'Free': 'Free',
    '$': 'Budget',
    '$$': 'Moderate',
    '$$$': 'Premium',
    '$$$$': 'Enterprise'
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Tool Comparison</h2>
      
      <div className="min-w-full">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
              {tools.map(tool => (
                <th key={tool.id} className="text-left py-3 px-4 font-semibold text-gray-900 min-w-[250px]">
                  <div className="flex flex-col gap-2">
                    <div className="font-bold">{tool.name}</div>
                    <a
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      Visit Website <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Category */}
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium text-gray-700">Category</td>
              {tools.map(tool => (
                <td key={tool.id} className="py-3 px-4 text-gray-600">
                  {tool.category}
                </td>
              ))}
            </tr>

            {/* Pricing */}
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium text-gray-700">Pricing</td>
              {tools.map(tool => (
                <td key={tool.id} className="py-3 px-4 text-gray-600">
                  {pricingLabels[tool.pricing]}
                </td>
              ))}
            </tr>

            {/* Description */}
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium text-gray-700">Description</td>
              {tools.map(tool => (
                <td key={tool.id} className="py-3 px-4 text-gray-600 text-sm">
                  {tool.description}
                </td>
              ))}
            </tr>

            {/* Use Cases */}
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium text-gray-700">Use Cases</td>
              {tools.map(tool => (
                <td key={tool.id} className="py-3 px-4">
                  <ul className="space-y-1">
                    {tool.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {useCase}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Pros */}
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium text-gray-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                Pros
              </td>
              {tools.map(tool => (
                <td key={tool.id} className="py-3 px-4">
                  <ul className="space-y-1">
                    {tool.pros.map((pro, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Cons */}
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium text-gray-700 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600" />
                Cons
              </td>
              {tools.map(tool => (
                <td key={tool.id} className="py-3 px-4">
                  <ul className="space-y-1">
                    {tool.cons.map((con, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Best For */}
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium text-gray-700">Best For</td>
              {tools.map(tool => (
                <td key={tool.id} className="py-3 px-4">
                  <div className="flex flex-wrap gap-2">
                    {tool.bestFor.map((item, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Regulatory Considerations */}
            <tr>
              <td className="py-3 px-4 font-medium text-gray-700">Regulatory Considerations</td>
              {tools.map(tool => (
                <td key={tool.id} className="py-3 px-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                    <p className="text-xs text-yellow-800">{tool.regulatoryConsiderations}</p>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

