'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  variant?: 'default' | 'info' | 'warning' | 'success';
}

export default function ExpandableSection({
  title,
  children,
  defaultExpanded = false,
  variant = 'default',
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const variantStyles = {
    default: 'border-gray-200 bg-white',
    info: 'border-blue-200 bg-blue-50',
    warning: 'border-yellow-200 bg-yellow-50',
    success: 'border-green-200 bg-green-50',
  };

  return (
    <div className={`border rounded-lg ${variantStyles[variant]}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-opacity-80 transition-colors"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 pt-2 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}

