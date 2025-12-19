'use client';

import { useState } from 'react';
import { CheckCircle, FileText, Download, ClipboardCheck } from 'lucide-react';

export interface DDFIItem {
  id: string;
  documentName: string;
  documentType: string;
  phase: string;
  required: boolean;
  status: 'not-started' | 'in-progress' | 'completed' | 'approved';
  url?: string;
  description?: string;
}

interface DDFISidebarProps {
  items: DDFIItem[];
  onItemClick?: (item: DDFIItem) => void;
}

export default function DDFISidebar({ items, onItemClick }: DDFISidebarProps) {
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set(['planning']));
  const [filterPhase, setFilterPhase] = useState<string>('all');

  const phases = Array.from(new Set(items.map(item => item.phase)));
  const filteredItems = filterPhase === 'all' 
    ? items 
    : items.filter(item => item.phase === filterPhase);

  const togglePhase = (phase: string) => {
    setExpandedPhases(prev => {
      const newSet = new Set(prev);
      if (newSet.has(phase)) {
        newSet.delete(phase);
      } else {
        newSet.add(phase);
      }
      return newSet;
    });
  };

  const getStatusColor = (status: DDFIItem['status']) => {
    switch (status) {
      case 'completed':
      case 'approved':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'in-progress':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'not-started':
        return 'text-gray-600 bg-gray-50 border-gray-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: DDFIItem['status']) => {
    if (status === 'completed' || status === 'approved') {
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    }
    return <FileText className="w-4 h-4 text-gray-400" />;
  };

  const completedCount = items.filter(i => i.status === 'completed' || i.status === 'approved').length;
  const totalCount = items.length;

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center gap-2 mb-2">
          <ClipboardCheck className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-gray-900">Design & Development File Index</h3>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Progress:</span>
          <span className="font-semibold text-blue-600">
            {completedCount} / {totalCount} Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      {/* Filter */}
      <div className="p-3 border-b border-gray-200">
        <select
          value={filterPhase}
          onChange={(e) => setFilterPhase(e.target.value)}
          className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white"
        >
          <option value="all">All Phases</option>
          {phases.map(phase => (
            <option key={phase} value={phase}>
              {phase.charAt(0).toUpperCase() + phase.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Document List */}
      <div className="max-h-[600px] overflow-y-auto">
        {phases.map(phase => {
          const phaseItems = filteredItems.filter(item => item.phase === phase);
          if (phaseItems.length === 0 && filterPhase !== 'all') return null;
          if (filterPhase !== 'all' && filterPhase !== phase) return null;
          
          const isExpanded = expandedPhases.has(phase);
          const phaseCompleted = phaseItems.every(i => i.status === 'completed' || i.status === 'approved');
          const phaseCount = phaseItems.filter(i => i.status === 'completed' || i.status === 'approved').length;

          return (
            <div key={phase} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => togglePhase(phase)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${phaseCompleted ? 'bg-green-500' : 'bg-gray-300'}`} />
                  <span className="font-semibold text-gray-900 capitalize">
                    {phase.replace(/-/g, ' ')}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({phaseCount}/{phaseItems.length})
                  </span>
                </div>
                <span className="text-gray-400 text-sm">
                  {isExpanded ? '▼' : '▶'}
                </span>
              </button>
              
              {isExpanded && (
                <div className="px-4 pb-3 space-y-2">
                  {phaseItems.map(item => (
                    <div
                      key={item.id}
                      onClick={() => onItemClick?.(item)}
                      className={`
                        p-3 rounded-lg border cursor-pointer transition-all
                        ${getStatusColor(item.status)}
                        hover:shadow-sm
                      `}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {getStatusIcon(item.status)}
                            <span className="font-medium text-sm">{item.documentName}</span>
                            {item.required && (
                              <span className="text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded">
                                Required
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mb-1">{item.documentType}</p>
                          {item.description && (
                            <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                          )}
                        </div>
                        {item.url && (
                          <a
                            href={item.url}
                            download
                            onClick={(e) => e.stopPropagation()}
                            className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                            title="Download template"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <label className="flex items-center gap-2 text-xs cursor-pointer">
                          <input
                            type="checkbox"
                            checked={item.status === 'completed' || item.status === 'approved'}
                            onChange={(e) => {
                              e.stopPropagation();
                              // This would update the item status in parent component
                            }}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span>Mark as complete</span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <p className="text-xs text-gray-600 text-center">
          Track all design history file documents here. Check off items as you complete them.
        </p>
      </div>
    </div>
  );
}

