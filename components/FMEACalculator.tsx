'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';

export interface FMEARecord {
  id: string;
  processStep: string;
  failureMode: string;
  failureEffect: string;
  failureCause: string;
  currentControls: string;
  severity: number;
  occurrence: number;
  detection: number;
  rpn: number;
  recommendedActions: string;
}

interface FMEACalculatorProps {
  onExport?: (records: FMEARecord[]) => void;
  showExamples?: boolean;
}

const SEVERITY_GUIDE = [
  { value: 1, label: 'None', description: 'No effect on device safety or performance' },
  { value: 2, label: 'Very Minor', description: 'Slight inconvenience to user, no safety impact' },
  { value: 3, label: 'Minor', description: 'Minor performance degradation, user notices' },
  { value: 4, label: 'Very Low', description: 'Slight performance impact, minimal user concern' },
  { value: 5, label: 'Low', description: 'Moderate performance impact, user dissatisfaction' },
  { value: 6, label: 'Moderate', description: 'Significant performance degradation, requires attention' },
  { value: 7, label: 'High', description: 'Serious performance loss, potential regulatory notification' },
  { value: 8, label: 'Very High', description: 'Device inoperable, serious user harm potential' },
  { value: 9, label: 'Hazardous', description: 'Serious injury to user, FDA reportable event' },
  { value: 10, label: 'Catastrophic', description: 'Death or catastrophic injury' },
];

const OCCURRENCE_GUIDE = [
  { value: 1, label: 'Almost Never', description: '< 1 in 1,500,000 operations' },
  { value: 2, label: 'Very Remote', description: '1 in 150,000 operations' },
  { value: 3, label: 'Remote', description: '1 in 15,000 operations' },
  { value: 4, label: 'Very Low', description: '1 in 2,000 operations' },
  { value: 5, label: 'Low', description: '1 in 400 operations' },
  { value: 6, label: 'Moderate', description: '1 in 80 operations' },
  { value: 7, label: 'High', description: '1 in 20 operations' },
  { value: 8, label: 'Very High', description: '1 in 8 operations' },
  { value: 9, label: 'Extremely High', description: '1 in 3 operations' },
  { value: 10, label: 'Inevitable', description: '> 1 in 2 operations' },
];

const DETECTION_GUIDE = [
  { value: 1, label: 'Almost Certain', description: 'Control will almost certainly detect failure' },
  { value: 2, label: 'Very High', description: 'Very high chance of detection' },
  { value: 3, label: 'High', description: 'High chance of detection' },
  { value: 4, label: 'Moderately High', description: 'Moderately high chance of detection' },
  { value: 5, label: 'Moderate', description: 'Moderate chance of detection' },
  { value: 6, label: 'Low', description: 'Low chance of detection' },
  { value: 7, label: 'Very Low', description: 'Very low chance of detection' },
  { value: 8, label: 'Remote', description: 'Remote chance of detection' },
  { value: 9, label: 'Very Remote', description: 'Very remote chance of detection' },
  { value: 10, label: 'Absolute Uncertainty', description: 'No known detection method' },
];

export default function FMEACalculator({ onExport, showExamples = true }: FMEACalculatorProps) {
  const [records, setRecords] = useState<FMEARecord[]>([]);
  const [currentRecord, setCurrentRecord] = useState<Partial<FMEARecord>>({
    processStep: '',
    failureMode: '',
    failureEffect: '',
    failureCause: '',
    currentControls: '',
    severity: 5,
    occurrence: 5,
    detection: 5,
    recommendedActions: '',
  });
  const [showGuide, setShowGuide] = useState<'severity' | 'occurrence' | 'detection' | null>(null);

  const calculateRPN = (s: number, o: number, d: number) => s * o * d;

  const rpn = calculateRPN(
    currentRecord.severity || 0,
    currentRecord.occurrence || 0,
    currentRecord.detection || 0
  );

  const getRPNLevel = (rpn: number): { level: string; color: string; recommendation: string } => {
    if (rpn >= 200) {
      return {
        level: 'Critical',
        color: 'red',
        recommendation: 'Immediate action required. High priority for risk mitigation.',
      };
    } else if (rpn >= 100) {
      return {
        level: 'High',
        color: 'orange',
        recommendation: 'Requires attention. Develop mitigation plan within 30 days.',
      };
    } else if (rpn >= 50) {
      return {
        level: 'Medium',
        color: 'yellow',
        recommendation: 'Monitor closely. Consider mitigation strategies.',
      };
    } else {
      return {
        level: 'Low',
        color: 'green',
        recommendation: 'Acceptable risk. Continue monitoring.',
      };
    }
  };

  const rpnInfo = getRPNLevel(rpn);

  const addRecord = () => {
    if (!currentRecord.processStep || !currentRecord.failureMode) {
      alert('Please fill in at least Process Step and Failure Mode');
      return;
    }

    const newRecord: FMEARecord = {
      id: Date.now().toString(),
      processStep: currentRecord.processStep || '',
      failureMode: currentRecord.failureMode || '',
      failureEffect: currentRecord.failureEffect || '',
      failureCause: currentRecord.failureCause || '',
      currentControls: currentRecord.currentControls || '',
      severity: currentRecord.severity || 5,
      occurrence: currentRecord.occurrence || 5,
      detection: currentRecord.detection || 5,
      rpn: calculateRPN(currentRecord.severity || 5, currentRecord.occurrence || 5, currentRecord.detection || 5),
      recommendedActions: currentRecord.recommendedActions || '',
    };

    setRecords([...records, newRecord]);
    
    // Reset form
    setCurrentRecord({
      processStep: '',
      failureMode: '',
      failureEffect: '',
      failureCause: '',
      currentControls: '',
      severity: 5,
      occurrence: 5,
      detection: 5,
      recommendedActions: '',
    });
  };

  const deleteRecord = (id: string) => {
    setRecords(records.filter(r => r.id !== id));
  };

  const exportToCSV = () => {
    const headers = ['Process Step', 'Failure Mode', 'Failure Effect', 'Failure Cause', 'Current Controls', 'Severity', 'Occurrence', 'Detection', 'RPN', 'Recommended Actions'];
    const rows = records.map(r => [
      r.processStep,
      r.failureMode,
      r.failureEffect,
      r.failureCause,
      r.currentControls,
      r.severity,
      r.occurrence,
      r.detection,
      r.rpn,
      r.recommendedActions,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fmea-analysis-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    if (onExport) {
      onExport(records);
    }
  };

  const loadExample = () => {
    const exampleRecords: FMEARecord[] = [
      {
        id: '1',
        processStep: 'Laser Safety Interlock',
        failureMode: 'Interlock fails to engage',
        failureEffect: 'Laser operates with enclosure open, potential eye injury',
        failureCause: 'Mechanical switch wear, electrical fault',
        currentControls: 'Monthly inspection, redundant safety switch',
        severity: 9,
        occurrence: 3,
        detection: 4,
        rpn: 108,
        recommendedActions: 'Add tertiary switch, implement daily automated test, increase inspection frequency',
      },
      {
        id: '2',
        processStep: 'Power Supply',
        failureMode: 'Voltage spike exceeds specification',
        failureEffect: 'Damage to LED array, device inoperable',
        failureCause: 'Power supply component failure, surge from mains',
        currentControls: 'Input filter, voltage regulator, fuse protection',
        severity: 6,
        occurrence: 4,
        detection: 3,
        rpn: 72,
        recommendedActions: 'Add surge protection, implement voltage monitoring with shutdown',
      },
      {
        id: '3',
        processStep: 'User Interface Display',
        failureMode: 'Screen fails to show treatment parameters',
        failureEffect: 'User cannot verify settings, potential incorrect treatment',
        failureCause: 'Display connector loose, software crash',
        currentControls: 'Connection strain relief, software watchdog',
        severity: 7,
        occurrence: 2,
        detection: 2,
        rpn: 28,
        recommendedActions: 'Add audio confirmation of settings, backup display LEDs',
      },
    ];
    setRecords(exampleRecords);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">FMEA Calculator</h2>
          <p className="text-gray-600 mt-1">Failure Mode and Effects Analysis for ISO 14971 Risk Management</p>
        </div>
        <div className="flex gap-2">
          {showExamples && (
            <button
              onClick={loadExample}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Load Example
            </button>
          )}
          {records.length > 0 && (
            <button
              onClick={exportToCSV}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          )}
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Add FMEA Record</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Process Step *</label>
            <input
              type="text"
              value={currentRecord.processStep}
              onChange={(e) => setCurrentRecord({ ...currentRecord, processStep: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Laser emission control"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Failure Mode *</label>
            <input
              type="text"
              value={currentRecord.failureMode}
              onChange={(e) => setCurrentRecord({ ...currentRecord, failureMode: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Laser fires unexpectedly"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Failure Effect</label>
            <input
              type="text"
              value={currentRecord.failureEffect}
              onChange={(e) => setCurrentRecord({ ...currentRecord, failureEffect: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Patient eye injury"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Failure Cause</label>
            <input
              type="text"
              value={currentRecord.failureCause}
              onChange={(e) => setCurrentRecord({ ...currentRecord, failureCause: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Software timing error"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Controls</label>
            <input
              type="text"
              value={currentRecord.currentControls}
              onChange={(e) => setCurrentRecord({ ...currentRecord, currentControls: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Safety interlock, operator training"
            />
          </div>
        </div>

        {/* Risk Scoring */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Severity (S)</label>
              <button
                onClick={() => setShowGuide(showGuide === 'severity' ? null : 'severity')}
                className="text-xs text-blue-600 hover:text-blue-700"
              >
                {showGuide === 'severity' ? 'Hide' : 'Show'} Guide
              </button>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={currentRecord.severity}
              onChange={(e) => setCurrentRecord({ ...currentRecord, severity: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>1</span>
              <span className="font-bold text-lg">{currentRecord.severity}</span>
              <span>10</span>
            </div>
            {showGuide === 'severity' && (
              <div className="mt-2 p-3 bg-blue-50 rounded-lg text-xs space-y-1 max-h-40 overflow-y-auto">
                {SEVERITY_GUIDE.map(g => (
                  <div key={g.value} className={currentRecord.severity === g.value ? 'font-bold text-blue-700' : ''}>
                    {g.value}: {g.label} - {g.description}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Occurrence (O)</label>
              <button
                onClick={() => setShowGuide(showGuide === 'occurrence' ? null : 'occurrence')}
                className="text-xs text-blue-600 hover:text-blue-700"
              >
                {showGuide === 'occurrence' ? 'Hide' : 'Show'} Guide
              </button>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={currentRecord.occurrence}
              onChange={(e) => setCurrentRecord({ ...currentRecord, occurrence: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>1</span>
              <span className="font-bold text-lg">{currentRecord.occurrence}</span>
              <span>10</span>
            </div>
            {showGuide === 'occurrence' && (
              <div className="mt-2 p-3 bg-blue-50 rounded-lg text-xs space-y-1 max-h-40 overflow-y-auto">
                {OCCURRENCE_GUIDE.map(g => (
                  <div key={g.value} className={currentRecord.occurrence === g.value ? 'font-bold text-blue-700' : ''}>
                    {g.value}: {g.label} - {g.description}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Detection (D)</label>
              <button
                onClick={() => setShowGuide(showGuide === 'detection' ? null : 'detection')}
                className="text-xs text-blue-600 hover:text-blue-700"
              >
                {showGuide === 'detection' ? 'Hide' : 'Show'} Guide
              </button>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={currentRecord.detection}
              onChange={(e) => setCurrentRecord({ ...currentRecord, detection: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>1</span>
              <span className="font-bold text-lg">{currentRecord.detection}</span>
              <span>10</span>
            </div>
            {showGuide === 'detection' && (
              <div className="mt-2 p-3 bg-blue-50 rounded-lg text-xs space-y-1 max-h-40 overflow-y-auto">
                {DETECTION_GUIDE.map(g => (
                  <div key={g.value} className={currentRecord.detection === g.value ? 'font-bold text-blue-700' : ''}>
                    {g.value}: {g.label} - {g.description}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RPN Display */}
        <div className={`mt-6 p-4 rounded-lg border-2 ${
          rpnInfo.color === 'red' ? 'bg-red-50 border-red-300' :
          rpnInfo.color === 'orange' ? 'bg-orange-50 border-orange-300' :
          rpnInfo.color === 'yellow' ? 'bg-yellow-50 border-yellow-300' :
          'bg-green-50 border-green-300'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">Risk Priority Number (RPN)</p>
              <p className="text-3xl font-bold mt-1">{rpn}</p>
              <p className={`text-sm font-medium mt-1 ${
                rpnInfo.color === 'red' ? 'text-red-700' :
                rpnInfo.color === 'orange' ? 'text-orange-700' :
                rpnInfo.color === 'yellow' ? 'text-yellow-700' :
                'text-green-700'
              }`}>
                {rpnInfo.level} Risk
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600">S × O × D</p>
              <p className="text-lg font-mono">{currentRecord.severity} × {currentRecord.occurrence} × {currentRecord.detection}</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-3">{rpnInfo.recommendation}</p>
        </div>

        {/* Recommended Actions */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Recommended Actions</label>
          <textarea
            value={currentRecord.recommendedActions}
            onChange={(e) => setCurrentRecord({ ...currentRecord, recommendedActions: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe risk mitigation strategies..."
          />
        </div>

        <div className="mt-4">
          <button
            onClick={addRecord}
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Add to FMEA Table
          </button>
        </div>
      </div>

      {/* Records Table */}
      {records.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-bold text-gray-900">FMEA Records ({records.length})</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Process Step</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Failure Mode</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">S</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">O</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">D</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">RPN</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Recommended Actions</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {records.sort((a, b) => b.rpn - a.rpn).map((record) => {
                  const info = getRPNLevel(record.rpn);
                  return (
                    <tr key={record.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{record.processStep}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{record.failureMode}</td>
                      <td className="px-4 py-3 text-center text-sm font-medium">{record.severity}</td>
                      <td className="px-4 py-3 text-center text-sm font-medium">{record.occurrence}</td>
                      <td className="px-4 py-3 text-center text-sm font-medium">{record.detection}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          info.color === 'red' ? 'bg-red-100 text-red-800' :
                          info.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                          info.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {record.rpn}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate">{record.recommendedActions}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => deleteRecord(record.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-medium"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

