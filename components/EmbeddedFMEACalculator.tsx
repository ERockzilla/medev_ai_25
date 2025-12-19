'use client';

import { useState } from 'react';
import FMEACalculator from './FMEACalculator';
import { X, Maximize2 } from 'lucide-react';

interface EmbeddedFMEACalculatorProps {
  compact?: boolean;
  onCalculate?: (rpn: number) => void;
}

export default function EmbeddedFMEACalculator({ compact = false, onCalculate }: EmbeddedFMEACalculatorProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (compact) {
    return (
      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900">Quick RPN Calculator</h4>
          <a
            href="/tools/fmea"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Open Full Calculator →
          </a>
        </div>
        <FMEACalculator showExamples={false} />
      </div>
    );
  }

  return (
    <div className="relative">
      {!isExpanded ? (
        <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-blue-900">Interactive FMEA Calculator</h3>
            <button
              onClick={() => setIsExpanded(true)}
              className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
              title="Expand calculator"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
          <FMEACalculator showExamples={true} />
        </div>
      ) : (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">FMEA Calculator</h2>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <FMEACalculator showExamples={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

