'use client';

import { useState } from 'react';
import { Download, AlertTriangle, Info, CheckCircle, Code, Shield, RotateCcw } from 'lucide-react';

interface ClassificationResult {
  class: 'A' | 'B' | 'C';
  name: string;
  color: string;
  description: string;
  processes: { name: string; required: boolean; notes?: string }[];
  deliverables: string[];
  testingRequirements: string[];
  additionalForC?: string[];
}

const CLASSIFICATION_RESULTS: Record<string, ClassificationResult> = {
  'A': {
    class: 'A',
    name: 'Class A - No Injury Possible',
    color: 'green',
    description: 'Software cannot contribute to a hazardous situation. Minimal documentation requirements.',
    processes: [
      { name: 'Software Development Planning (5.1)', required: true },
      { name: 'Software Requirements Analysis (5.2)', required: false },
      { name: 'Software Architectural Design (5.3)', required: false },
      { name: 'Software Detailed Design (5.4)', required: false },
      { name: 'Software Unit Implementation (5.5)', required: false },
      { name: 'Software Integration Testing (5.6)', required: false },
      { name: 'Software System Testing (5.7)', required: false },
      { name: 'Software Configuration Management (8)', required: true },
      { name: 'Software Problem Resolution (9)', required: true },
    ],
    deliverables: [
      'Software Development Plan',
      'Software Configuration Management Records',
      'Problem Reports and Resolution Records',
    ],
    testingRequirements: [
      'System testing to verify intended functionality',
      'No formal unit or integration testing required',
    ],
  },
  'B': {
    class: 'B',
    name: 'Class B - Non-Serious Injury Possible',
    color: 'yellow',
    description: 'Software could contribute to a hazardous situation resulting in non-serious injury.',
    processes: [
      { name: 'Software Development Planning (5.1)', required: true },
      { name: 'Software Requirements Analysis (5.2)', required: true },
      { name: 'Software Architectural Design (5.3)', required: true },
      { name: 'Software Detailed Design (5.4)', required: true },
      { name: 'Software Unit Implementation (5.5)', required: true },
      { name: 'Software Unit Verification (5.5.5)', required: true },
      { name: 'Software Integration Testing (5.6)', required: true },
      { name: 'Software System Testing (5.7)', required: true },
      { name: 'Software Release (5.8)', required: true },
      { name: 'Software Maintenance (6)', required: true },
      { name: 'Software Risk Management (7)', required: true },
      { name: 'Software Configuration Management (8)', required: true },
      { name: 'Software Problem Resolution (9)', required: true },
    ],
    deliverables: [
      'Software Development Plan',
      'Software Requirements Specification (SRS)',
      'Software Architecture Document',
      'Software Detailed Design Document',
      'Traceability Matrix (Requirements → Design → Tests)',
      'Unit Test Protocols and Results',
      'Integration Test Protocols and Results',
      'System Test Protocols and Results',
      'Software Risk Management File',
      'Software Configuration Management Records',
      'Software Release Documentation',
      'Problem Reports and Resolution Records',
    ],
    testingRequirements: [
      'Unit testing of software units',
      'Integration testing between modules',
      'System testing covering all requirements',
      'Regression testing for changes',
      'Traceability from requirements to test cases',
    ],
  },
  'C': {
    class: 'C',
    name: 'Class C - Death or Serious Injury Possible',
    color: 'red',
    description: 'Software could contribute to a hazardous situation resulting in death or serious injury.',
    processes: [
      { name: 'Software Development Planning (5.1)', required: true, notes: 'Enhanced rigor' },
      { name: 'Software Requirements Analysis (5.2)', required: true, notes: 'Enhanced rigor' },
      { name: 'Software Architectural Design (5.3)', required: true, notes: 'Must address safety' },
      { name: 'Software Detailed Design (5.4)', required: true, notes: 'Must address safety' },
      { name: 'Software Unit Implementation (5.5)', required: true },
      { name: 'Software Unit Verification (5.5.5)', required: true, notes: 'Code review OR static analysis' },
      { name: 'Software Integration Testing (5.6)', required: true },
      { name: 'Software System Testing (5.7)', required: true },
      { name: 'Software Release (5.8)', required: true },
      { name: 'Software Maintenance (6)', required: true },
      { name: 'Software Risk Management (7)', required: true, notes: 'Enhanced rigor' },
      { name: 'Software Configuration Management (8)', required: true },
      { name: 'Software Problem Resolution (9)', required: true },
    ],
    deliverables: [
      'Software Development Plan (with safety focus)',
      'Software Requirements Specification (SRS)',
      'Software Architecture Document (with safety architecture)',
      'Software Detailed Design Document',
      'Traceability Matrix (Requirements → Design → Code → Tests)',
      'Unit Test Protocols and Results (with coverage metrics)',
      'Integration Test Protocols and Results',
      'System Test Protocols and Results',
      'Software Risk Management File (with hazard analysis)',
      'Code Review Records OR Static Analysis Reports',
      'Software Configuration Management Records',
      'Software Release Documentation',
      'Problem Reports and Resolution Records',
      'SOUP Evaluation Documentation',
    ],
    testingRequirements: [
      'Comprehensive unit testing with coverage metrics',
      'Integration testing with documented coverage',
      'System testing covering all requirements',
      'Boundary and stress testing',
      'Regression testing for all changes',
      'Static analysis of source code',
      'Code review by qualified personnel',
      'Traceability from requirements through code to tests',
    ],
    additionalForC: [
      'Code review OR static analysis required (5.5.5)',
      'Architecture must document how safety is ensured',
      'Detailed design must address safety mechanisms',
      'Coverage metrics required for unit testing',
      'SOUP (third-party software) must be evaluated for risk contribution',
      'More rigorous problem resolution process',
    ],
  },
};

export default function SoftwareRiskClassification() {
  const [step, setStep] = useState<'diagram' | 'q1' | 'q2' | 'result'>('diagram');
  const [answers, setAnswers] = useState<{ q1?: boolean; q2?: boolean }>({});
  const [showSaMD, setShowSaMD] = useState(false);

  const getResult = (): ClassificationResult | null => {
    if (step !== 'result') return null;
    if (answers.q1 === false) return CLASSIFICATION_RESULTS['A'];
    if (answers.q2 === false) return CLASSIFICATION_RESULTS['B'];
    return CLASSIFICATION_RESULTS['C'];
  };

  const result = getResult();

  const handleQ1Answer = (answer: boolean) => {
    setAnswers({ ...answers, q1: answer });
    if (!answer) {
      setStep('result');
    } else {
      setStep('q2');
    }
  };

  const handleQ2Answer = (answer: boolean) => {
    setAnswers({ ...answers, q2: answer });
    setStep('result');
  };

  const reset = () => {
    setStep('diagram');
    setAnswers({});
  };

  const exportClassification = () => {
    if (!result) return;
    
    const report = `IEC 62304 SOFTWARE SAFETY CLASSIFICATION REPORT
===============================================
Generated: ${new Date().toISOString()}

CLASSIFICATION RESULT
--------------------
Software Safety Class: ${result.class}
${result.name}

${result.description}

DECISION PATH
-------------
Question 1: Can the software contribute to a hazardous situation?
Answer: ${answers.q1 ? 'YES' : 'NO'}
${answers.q1 ? `
Question 2: Could the hazardous situation result in DEATH or SERIOUS INJURY?
Answer: ${answers.q2 ? 'YES' : 'NO'}` : ''}

REQUIRED PROCESSES (IEC 62304)
------------------------------
${result.processes.filter(p => p.required).map(p => `✓ ${p.name}${p.notes ? ` (${p.notes})` : ''}`).join('\n')}

REQUIRED DELIVERABLES
---------------------
${result.deliverables.map(d => `• ${d}`).join('\n')}

TESTING REQUIREMENTS
--------------------
${result.testingRequirements.map(t => `• ${t}`).join('\n')}
${result.additionalForC ? `
ADDITIONAL CLASS C REQUIREMENTS
-------------------------------
${result.additionalForC.map(a => `• ${a}`).join('\n')}` : ''}

KEY DIFFERENCES FROM OTHER CLASSES
----------------------------------
${result.class === 'A' ? `
Class A has minimal requirements:
• Only 3 required processes (planning, config mgmt, problem resolution)
• No formal testing documentation required
• No traceability matrix required` : ''}
${result.class === 'B' ? `
Class B vs Class A:
• Full software lifecycle processes required
• Formal testing with documentation
• Traceability matrix required
• Risk management process required

Class B vs Class C:
• No code review/static analysis requirement
• No coverage metrics required
• Architecture doesn't need to address safety specifically
• Less rigorous SOUP evaluation` : ''}
${result.class === 'C' ? `
Class C has the most stringent requirements:
• Code review OR static analysis REQUIRED
• Architecture must document safety mechanisms
• Unit test coverage metrics required
• Enhanced SOUP evaluation
• More rigorous throughout all processes` : ''}

REFERENCES
----------
- IEC 62304:2006/AMD1:2015 Medical device software - Software life cycle processes
- ISO 14971 Application of risk management to medical devices

DISCLAIMER
----------
This classification is preliminary guidance only. Final classification 
should be documented in the software development plan and approved by 
qualified personnel with consideration of device-specific factors.
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `iec62304-class-${result.class}-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">IEC 62304 Software Safety Classification</h2>
          <p className="text-gray-600 mt-1">Interactive decision tree for software safety classification</p>
        </div>
        {step === 'result' && (
          <button
            onClick={exportClassification}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export Report
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-4">
          <button
            onClick={() => setShowSaMD(false)}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              !showSaMD
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            IEC 62304 Classification
          </button>
          <button
            onClick={() => setShowSaMD(true)}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              showSaMD
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            SaMD Categories (IMDRF)
          </button>
        </nav>
      </div>

      {!showSaMD ? (
        <>
          {/* Visual Decision Tree Diagram */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">IEC 62304 Classification Decision Tree</h3>
            
            {/* SVG Decision Tree */}
            <div className="flex justify-center overflow-x-auto">
              <svg viewBox="0 0 600 400" className="w-full max-w-2xl" style={{ minWidth: '500px' }}>
                {/* Background */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                  </marker>
                </defs>

                {/* Start box */}
                <rect x="200" y="10" width="200" height="50" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                <text x="300" y="40" textAnchor="middle" className="text-sm font-bold" fill="#0369a1">SOFTWARE ITEM</text>

                {/* Arrow from start to Q1 */}
                <line x1="300" y1="60" x2="300" y2="85" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Question 1 */}
                <polygon 
                  points="300,90 420,145 300,200 180,145" 
                  fill={step === 'q1' ? '#fef3c7' : '#f3f4f6'} 
                  stroke={step === 'q1' ? '#f59e0b' : '#9ca3af'} 
                  strokeWidth="2"
                />
                <text x="300" y="135" textAnchor="middle" className="text-xs" fill="#374151">
                  <tspan x="300" dy="0">Can software contribute</tspan>
                  <tspan x="300" dy="14">to HAZARDOUS SITUATION?</tspan>
                </text>

                {/* Q1 NO arrow - goes left to Class A */}
                <line x1="180" y1="145" x2="80" y2="145" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="130" y="135" textAnchor="middle" className="text-xs font-bold" fill="#16a34a">NO</text>

                {/* Class A box */}
                <rect 
                  x="10" y="115" width="70" height="60" rx="8" 
                  fill={result?.class === 'A' ? '#bbf7d0' : '#dcfce7'} 
                  stroke="#16a34a" strokeWidth="2" 
                />
                <text x="45" y="140" textAnchor="middle" className="text-lg font-bold" fill="#15803d">A</text>
                <text x="45" y="158" textAnchor="middle" className="text-xs" fill="#166534">No injury</text>

                {/* Q1 YES arrow - goes down to Q2 */}
                <line x1="300" y1="200" x2="300" y2="235" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="315" y="220" className="text-xs font-bold" fill="#dc2626">YES</text>

                {/* Question 2 */}
                <polygon 
                  points="300,240 420,295 300,350 180,295" 
                  fill={step === 'q2' ? '#fef3c7' : '#f3f4f6'} 
                  stroke={step === 'q2' ? '#f59e0b' : '#9ca3af'} 
                  strokeWidth="2"
                />
                <text x="300" y="280" textAnchor="middle" className="text-xs" fill="#374151">
                  <tspan x="300" dy="0">Could hazard result in</tspan>
                  <tspan x="300" dy="14">DEATH or SERIOUS INJURY?</tspan>
                </text>

                {/* Q2 NO arrow - goes left to Class B */}
                <line x1="180" y1="295" x2="80" y2="295" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="130" y="285" textAnchor="middle" className="text-xs font-bold" fill="#ca8a04">NO</text>

                {/* Class B box */}
                <rect 
                  x="10" y="265" width="70" height="60" rx="8" 
                  fill={result?.class === 'B' ? '#fef08a' : '#fef9c3'} 
                  stroke="#ca8a04" strokeWidth="2" 
                />
                <text x="45" y="290" textAnchor="middle" className="text-lg font-bold" fill="#a16207">B</text>
                <text x="45" y="308" textAnchor="middle" className="text-xs" fill="#854d0e">Non-serious</text>

                {/* Q2 YES arrow - goes right to Class C */}
                <line x1="420" y1="295" x2="520" y2="295" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="470" y="285" textAnchor="middle" className="text-xs font-bold" fill="#dc2626">YES</text>

                {/* Class C box */}
                <rect 
                  x="520" y="265" width="70" height="60" rx="8" 
                  fill={result?.class === 'C' ? '#fecaca' : '#fee2e2'} 
                  stroke="#dc2626" strokeWidth="2" 
                />
                <text x="555" y="290" textAnchor="middle" className="text-lg font-bold" fill="#b91c1c">C</text>
                <text x="555" y="308" textAnchor="middle" className="text-xs" fill="#991b1b">Death/Serious</text>

                {/* Current step indicator */}
                {step === 'q1' && (
                  <circle cx="300" cy="145" r="5" fill="#f59e0b">
                    <animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" />
                  </circle>
                )}
                {step === 'q2' && (
                  <circle cx="300" cy="295" r="5" fill="#f59e0b">
                    <animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" />
                  </circle>
                )}
              </svg>
            </div>

            {/* Interactive Questions */}
            {step === 'diagram' && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setStep('q1')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Start Classification
                </button>
              </div>
            )}

            {step === 'q1' && (
              <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h4 className="font-bold text-yellow-900 mb-2">Question 1:</h4>
                <p className="text-yellow-800 mb-4">
                  Can the software system contribute to a <strong>hazardous situation</strong>?
                </p>
                <p className="text-sm text-yellow-700 mb-4">
                  Consider: Could the software, through malfunction or misuse, cause harm to patient, 
                  operator, or others? This includes direct hazards (incorrect dosing) and indirect 
                  hazards (incorrect diagnosis leading to wrong treatment).
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleQ1Answer(true)}
                    className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
                  >
                    YES - Could contribute to hazard
                  </button>
                  <button
                    onClick={() => handleQ1Answer(false)}
                    className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                  >
                    NO - Cannot contribute to hazard
                  </button>
                </div>
              </div>
            )}

            {step === 'q2' && (
              <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h4 className="font-bold text-yellow-900 mb-2">Question 2:</h4>
                <p className="text-yellow-800 mb-4">
                  Could the hazardous situation result in <strong>DEATH or SERIOUS INJURY</strong>?
                </p>
                <p className="text-sm text-yellow-700 mb-4">
                  Serious injury means: life-threatening, permanent impairment, or requiring medical 
                  intervention to prevent permanent impairment.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleQ2Answer(true)}
                    className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
                  >
                    YES - Death or serious injury possible
                  </button>
                  <button
                    onClick={() => handleQ2Answer(false)}
                    className="flex-1 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-medium"
                  >
                    NO - Only non-serious injury possible
                  </button>
                </div>
              </div>
            )}

            {step === 'result' && result && (
              <div className="mt-6">
                <button
                  onClick={reset}
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Classify Another Software Item
                </button>
              </div>
            )}
          </div>

          {/* Result Display */}
          {step === 'result' && result && (
            <div className="space-y-6">
              {/* Classification Result */}
              <div className={`p-6 rounded-lg border-2 ${
                result.color === 'red' ? 'bg-red-50 border-red-300' :
                result.color === 'yellow' ? 'bg-yellow-50 border-yellow-300' :
                'bg-green-50 border-green-300'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-4xl font-bold ${
                        result.color === 'red' ? 'text-red-700' :
                        result.color === 'yellow' ? 'text-yellow-700' :
                        'text-green-700'
                      }`}>
                        Class {result.class}
                      </span>
                      <Shield className={`w-10 h-10 ${
                        result.color === 'red' ? 'text-red-600' :
                        result.color === 'yellow' ? 'text-yellow-600' :
                        'text-green-600'
                      }`} />
                    </div>
                    <p className="text-lg font-medium text-gray-900">{result.name}</p>
                    <p className="text-gray-600 mt-2">{result.description}</p>
                  </div>
                </div>
              </div>

              {/* Required Processes */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Required IEC 62304 Processes</h3>
                <div className="space-y-2">
                  {result.processes.map((proc, idx) => (
                    <div key={idx} className={`flex items-center gap-3 p-2 rounded ${
                      proc.required 
                        ? result.color === 'red' ? 'bg-red-50' : result.color === 'yellow' ? 'bg-yellow-50' : 'bg-green-50'
                        : 'bg-gray-50'
                    }`}>
                      {proc.required ? (
                        <CheckCircle className={`w-5 h-5 ${
                          result.color === 'red' ? 'text-red-600' :
                          result.color === 'yellow' ? 'text-yellow-600' :
                          'text-green-600'
                        }`} />
                      ) : (
                        <span className="w-5 h-5 rounded-full border-2 border-gray-300" />
                      )}
                      <span className={`text-sm ${proc.required ? 'text-gray-900' : 'text-gray-400'}`}>
                        {proc.name}
                      </span>
                      {proc.notes && (
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                          {proc.notes}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Deliverables */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Required Deliverables</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {result.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        result.color === 'red' ? 'text-red-600' :
                        result.color === 'yellow' ? 'text-yellow-600' :
                        'text-green-600'
                      }`} />
                      <span className="text-sm text-gray-700">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testing Requirements */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Testing Requirements</h3>
                <ul className="space-y-2">
                  {result.testingRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`w-2 h-2 rounded-full mt-2 ${
                        result.color === 'red' ? 'bg-red-500' :
                        result.color === 'yellow' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`} />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Class C Additional Requirements */}
              {result.additionalForC && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Additional Class C Requirements
                  </h3>
                  <p className="text-sm text-red-800 mb-4">
                    Class C requires additional rigor beyond Class B in these areas:
                  </p>
                  <ul className="space-y-2">
                    {result.additionalForC.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">!</span>
                        <span className="text-sm text-red-800">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Class Comparison Table */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">Class Comparison: Key Differences</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Requirement</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-green-600 uppercase">Class A</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-yellow-600 uppercase">Class B</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-red-600 uppercase">Class C</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  <tr>
                    <td className="px-4 py-3 font-medium">Software Requirements Spec</td>
                    <td className="px-4 py-3 text-center text-gray-400">Optional</td>
                    <td className="px-4 py-3 text-center text-yellow-600">Required</td>
                    <td className="px-4 py-3 text-center text-red-600">Required</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Architecture Document</td>
                    <td className="px-4 py-3 text-center text-gray-400">Optional</td>
                    <td className="px-4 py-3 text-center text-yellow-600">Required</td>
                    <td className="px-4 py-3 text-center text-red-600">Required + Safety</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Unit Testing</td>
                    <td className="px-4 py-3 text-center text-gray-400">Optional</td>
                    <td className="px-4 py-3 text-center text-yellow-600">Required</td>
                    <td className="px-4 py-3 text-center text-red-600">Required + Metrics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Code Review / Static Analysis</td>
                    <td className="px-4 py-3 text-center text-gray-400">Not Required</td>
                    <td className="px-4 py-3 text-center text-gray-400">Not Required</td>
                    <td className="px-4 py-3 text-center text-red-600 font-bold">REQUIRED</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Traceability Matrix</td>
                    <td className="px-4 py-3 text-center text-gray-400">Not Required</td>
                    <td className="px-4 py-3 text-center text-yellow-600">Req → Test</td>
                    <td className="px-4 py-3 text-center text-red-600">Req → Code → Test</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">SOUP Evaluation</td>
                    <td className="px-4 py-3 text-center text-gray-400">Minimal</td>
                    <td className="px-4 py-3 text-center text-yellow-600">Standard</td>
                    <td className="px-4 py-3 text-center text-red-600">Enhanced</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Risk Management</td>
                    <td className="px-4 py-3 text-center text-gray-400">Limited</td>
                    <td className="px-4 py-3 text-center text-yellow-600">Full Process</td>
                    <td className="px-4 py-3 text-center text-red-600">Enhanced Rigor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        /* SaMD Tab */
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Software as a Medical Device (SaMD)</h3>
            <p className="text-sm text-blue-800">
              The IMDRF categorization framework considers the significance of the information 
              provided by the SaMD to the healthcare decision, and the state of the healthcare situation.
            </p>
          </div>

          {/* SaMD Visual Matrix */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">IMDRF SaMD Risk Categorization Matrix</h3>
            <div className="flex justify-center overflow-x-auto">
              <svg viewBox="0 0 500 350" className="w-full max-w-xl" style={{ minWidth: '400px' }}>
                {/* Axis labels */}
                <text x="250" y="25" textAnchor="middle" className="text-sm font-bold" fill="#374151">State of Healthcare Situation</text>
                <text x="30" y="200" textAnchor="middle" transform="rotate(-90, 30, 200)" className="text-sm font-bold" fill="#374151">Significance of Information</text>

                {/* Column headers */}
                <rect x="150" y="40" width="100" height="30" fill="#dcfce7" stroke="#16a34a" />
                <text x="200" y="60" textAnchor="middle" className="text-xs" fill="#166534">Non-Serious</text>
                
                <rect x="250" y="40" width="100" height="30" fill="#fef9c3" stroke="#ca8a04" />
                <text x="300" y="60" textAnchor="middle" className="text-xs" fill="#854d0e">Serious</text>
                
                <rect x="350" y="40" width="100" height="30" fill="#fee2e2" stroke="#dc2626" />
                <text x="400" y="60" textAnchor="middle" className="text-xs" fill="#991b1b">Critical</text>

                {/* Row headers */}
                <rect x="50" y="70" width="100" height="50" fill="#f3f4f6" stroke="#9ca3af" />
                <text x="100" y="95" textAnchor="middle" className="text-xs" fill="#374151">Inform Only</text>
                
                <rect x="50" y="120" width="100" height="50" fill="#f3f4f6" stroke="#9ca3af" />
                <text x="100" y="140" textAnchor="middle" className="text-xs" fill="#374151">Drive Clinical</text>
                <text x="100" y="155" textAnchor="middle" className="text-xs" fill="#374151">Management</text>
                
                <rect x="50" y="170" width="100" height="50" fill="#f3f4f6" stroke="#9ca3af" />
                <text x="100" y="190" textAnchor="middle" className="text-xs" fill="#374151">Treat or</text>
                <text x="100" y="205" textAnchor="middle" className="text-xs" fill="#374151">Diagnose</text>

                {/* Matrix cells */}
                {/* Row 1: Inform */}
                <rect x="150" y="70" width="100" height="50" fill="#dcfce7" stroke="#16a34a" />
                <text x="200" y="100" textAnchor="middle" className="text-lg font-bold" fill="#15803d">I</text>
                
                <rect x="250" y="70" width="100" height="50" fill="#dcfce7" stroke="#16a34a" />
                <text x="300" y="100" textAnchor="middle" className="text-lg font-bold" fill="#15803d">I</text>
                
                <rect x="350" y="70" width="100" height="50" fill="#fef9c3" stroke="#ca8a04" />
                <text x="400" y="100" textAnchor="middle" className="text-lg font-bold" fill="#a16207">II</text>

                {/* Row 2: Drive */}
                <rect x="150" y="120" width="100" height="50" fill="#dcfce7" stroke="#16a34a" />
                <text x="200" y="150" textAnchor="middle" className="text-lg font-bold" fill="#15803d">I</text>
                
                <rect x="250" y="120" width="100" height="50" fill="#fef9c3" stroke="#ca8a04" />
                <text x="300" y="150" textAnchor="middle" className="text-lg font-bold" fill="#a16207">II</text>
                
                <rect x="350" y="120" width="100" height="50" fill="#fed7aa" stroke="#ea580c" />
                <text x="400" y="150" textAnchor="middle" className="text-lg font-bold" fill="#c2410c">III</text>

                {/* Row 3: Treat/Diagnose */}
                <rect x="150" y="170" width="100" height="50" fill="#fef9c3" stroke="#ca8a04" />
                <text x="200" y="200" textAnchor="middle" className="text-lg font-bold" fill="#a16207">II</text>
                
                <rect x="250" y="170" width="100" height="50" fill="#fed7aa" stroke="#ea580c" />
                <text x="300" y="200" textAnchor="middle" className="text-lg font-bold" fill="#c2410c">III</text>
                
                <rect x="350" y="170" width="100" height="50" fill="#fecaca" stroke="#dc2626" />
                <text x="400" y="200" textAnchor="middle" className="text-lg font-bold" fill="#b91c1c">IV</text>

                {/* Legend */}
                <rect x="100" y="250" width="30" height="20" fill="#dcfce7" stroke="#16a34a" />
                <text x="140" y="265" className="text-xs" fill="#374151">I - Lowest Risk</text>

                <rect x="200" y="250" width="30" height="20" fill="#fef9c3" stroke="#ca8a04" />
                <text x="240" y="265" className="text-xs" fill="#374151">II - Low Risk</text>

                <rect x="300" y="250" width="30" height="20" fill="#fed7aa" stroke="#ea580c" />
                <text x="340" y="265" className="text-xs" fill="#374151">III - Moderate</text>

                <rect x="400" y="250" width="30" height="20" fill="#fecaca" stroke="#dc2626" />
                <text x="440" y="265" className="text-xs" fill="#374151">IV - Highest</text>
              </svg>
            </div>
          </div>

          {/* IEC 62304 to SaMD Mapping */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4">IEC 62304 Class vs IMDRF SaMD Category</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">A</span>
                </div>
                <span className="text-xl text-gray-400">≈</span>
                <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">I</span>
                </div>
                <span className="text-sm text-gray-600 flex-1">No safety impact / Lowest risk</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                <div className="w-16 h-16 rounded-lg bg-yellow-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-700">B</span>
                </div>
                <span className="text-xl text-gray-400">≈</span>
                <div className="flex gap-2">
                  <div className="w-16 h-16 rounded-lg bg-yellow-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-700">II</span>
                  </div>
                  <div className="w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-700">III</span>
                  </div>
                </div>
                <span className="text-sm text-gray-600 flex-1">Non-serious injury / Moderate risk</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                <div className="w-16 h-16 rounded-lg bg-red-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-red-700">C</span>
                </div>
                <span className="text-xl text-gray-400">≈</span>
                <div className="w-16 h-16 rounded-lg bg-red-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-red-700">IV</span>
                </div>
                <span className="text-sm text-gray-600 flex-1">Death/serious injury / Highest risk</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-700">Important Notes</p>
            <p className="text-xs text-gray-600 mt-1">
              Classification per IEC 62304:2006/AMD1:2015. Risk controls outside the software 
              may reduce the class. Final classification should be documented in the Software 
              Development Plan and approved by qualified personnel with consideration of the 
              complete risk management process per ISO 14971.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
