'use client';

import { AITool } from '@/lib/aiToolsData';
import { ExternalLink, CheckCircle2, XCircle, GitCompare, Tag } from 'lucide-react';
import { useState } from 'react';

interface AIToolCardProps {
  tool: AITool;
  onCompareToggle: () => void;
  isComparing: boolean;
}

export default function AIToolCard({ tool, onCompareToggle, isComparing }: AIToolCardProps) {
  const [expanded, setExpanded] = useState(false);

  const pricingLabels: Record<string, string> = {
    'Free': 'Free',
    '$': 'Budget',
    '$$': 'Moderate',
    '$$$': 'Premium',
    '$$$$': 'Enterprise'
  };

  const pricingColors: Record<string, string> = {
    'Free': 'bg-green-100 text-green-700',
    '$': 'bg-blue-100 text-blue-700',
    '$$': 'bg-yellow-100 text-yellow-700',
    '$$$': 'bg-orange-100 text-orange-700',
    '$$$$': 'bg-purple-100 text-purple-700'
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2 py-1 rounded text-xs font-semibold ${pricingColors[tool.pricing]}`}>
                {pricingLabels[tool.pricing]}
              </span>
              <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                {tool.category}
              </span>
            </div>
          </div>
          <button
            onClick={onCompareToggle}
            className={`ml-4 p-2 rounded-lg transition-colors flex-shrink-0 ${
              isComparing
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
            }`}
            title={isComparing ? 'Remove from comparison' : 'Add to comparison'}
          >
            <GitCompare className={`w-5 h-5 ${isComparing ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Description and Use Cases - Side by Side */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-700">{tool.description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {tool.useCases.slice(0, 3).map((useCase, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                <Tag className="w-3 h-3" />
                {useCase}
              </span>
            ))}
            {tool.useCases.length > 3 && (
              <span className="text-xs text-gray-500">+{tool.useCases.length - 3} more</span>
            )}
          </div>
        </div>
      </div>

      {/* Pros/Cons Preview */}
      {expanded && (
        <div className="mb-4 space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              Pros
            </h4>
            <ul className="space-y-1">
              {tool.pros.map((pro, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-600" />
              Cons
            </h4>
            <ul className="space-y-1">
              {tool.cons.map((con, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Best For</h4>
            <div className="flex flex-wrap gap-2">
              {tool.bestFor.map((item, idx) => (
                <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>
          {tool.regulatoryConsiderations && (
            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
              <h4 className="text-sm font-semibold text-yellow-900 mb-1">Regulatory Considerations</h4>
              <p className="text-xs text-yellow-800">{tool.regulatoryConsiderations}</p>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          {expanded ? 'Show Less' : 'Show More'}
        </button>
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Visit Website
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

