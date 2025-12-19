'use client';

import { useState } from 'react';
import { Download, AlertTriangle, Info, CheckCircle, RotateCcw, FileText, Bell, Shield, Building2, Beaker, AlertCircle } from 'lucide-react';

type ChangeCategory = 
  | 'labeling'
  | 'software'
  | 'electrical'
  | 'mechanical'
  | 'materials'
  | 'manufacturing'
  | 'supplier'
  | 'sterilization'
  | 'packaging'
  | 'intended-use';

interface ChangeType {
  id: ChangeCategory;
  name: string;
  icon: string;
  examples: string[];
}

interface NotificationResult {
  category: string;
  changeDescription: string;
  fdaAction: 'none' | 'letter-to-file' | 'new-510k' | 'pma-supplement' | 'special-510k';
  fdaDescription: string;
  nrtlAction: 'none' | 'notification' | 'review' | 'retest';
  nrtlDescription: string;
  euAction: 'none' | 'notification' | 'significant-change' | 'new-certification';
  euDescription: string;
  riskConsiderations: string[];
  documentationRequired: string[];
}

const CHANGE_TYPES: ChangeType[] = [
  {
    id: 'labeling',
    name: 'Labeling Changes',
    icon: '🏷️',
    examples: ['IFU updates', 'Warning additions', 'Indication changes', 'Language translations'],
  },
  {
    id: 'software',
    name: 'Software Changes',
    icon: '💻',
    examples: ['Bug fixes', 'New features', 'Algorithm changes', 'UI modifications'],
  },
  {
    id: 'electrical',
    name: 'Electrical Changes',
    icon: '⚡',
    examples: ['Component substitution', 'PCB layout', 'Power supply', 'EMC changes'],
  },
  {
    id: 'mechanical',
    name: 'Mechanical Changes',
    icon: '⚙️',
    examples: ['Enclosure design', 'Dimensions', 'Materials', 'Fasteners'],
  },
  {
    id: 'materials',
    name: 'Material Changes',
    icon: '🧪',
    examples: ['Biocompatible materials', 'Plastics', 'Metals', 'Coatings'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing Changes',
    icon: '🏭',
    examples: ['Process changes', 'Equipment changes', 'Site changes', 'Outsourcing'],
  },
  {
    id: 'supplier',
    name: 'Supplier Changes',
    icon: '📦',
    examples: ['Component supplier', 'Contract manufacturer', 'Critical component'],
  },
  {
    id: 'sterilization',
    name: 'Sterilization Changes',
    icon: '🧫',
    examples: ['Method change', 'Parameters', 'Facility change', 'Validation'],
  },
  {
    id: 'packaging',
    name: 'Packaging Changes',
    icon: '📦',
    examples: ['Materials', 'Configuration', 'Shelf life', 'Sterile barrier'],
  },
  {
    id: 'intended-use',
    name: 'Intended Use Changes',
    icon: '🎯',
    examples: ['New indication', 'New population', 'New environment', 'Claims expansion'],
  },
];

export default function DesignChangeNotification() {
  const [step, setStep] = useState<'start' | 'category' | 'severity' | 'safety' | 'result'>('start');
  const [selectedCategory, setSelectedCategory] = useState<ChangeCategory | null>(null);
  const [changeDescription, setChangeDescription] = useState('');
  const [severity, setSeverity] = useState<'minor' | 'moderate' | 'major' | null>(null);
  const [affectsSafety, setAffectsSafety] = useState<boolean | null>(null);
  const [affectsPerformance, setAffectsPerformance] = useState<boolean | null>(null);

  const reset = () => {
    setStep('start');
    setSelectedCategory(null);
    setChangeDescription('');
    setSeverity(null);
    setAffectsSafety(null);
    setAffectsPerformance(null);
  };

  const getResult = (): NotificationResult | null => {
    if (!selectedCategory || !severity) return null;

    // Logic to determine notification requirements based on category, severity, and safety impact
    const isSignificant = severity === 'major' || (severity === 'moderate' && affectsSafety);
    const isCritical = severity === 'major' && affectsSafety;

    let fdaAction: NotificationResult['fdaAction'] = 'letter-to-file';
    let fdaDescription = '';
    let nrtlAction: NotificationResult['nrtlAction'] = 'notification';
    let nrtlDescription = '';
    let euAction: NotificationResult['euAction'] = 'notification';
    let euDescription = '';

    // FDA Determination
    if (selectedCategory === 'intended-use') {
      fdaAction = 'new-510k';
      fdaDescription = 'Changes to intended use typically require a new 510(k) submission as this affects substantial equivalence.';
    } else if (isCritical) {
      fdaAction = 'new-510k';
      fdaDescription = 'Significant changes affecting safety or effectiveness likely require a new 510(k) or PMA supplement.';
    } else if (isSignificant) {
      fdaAction = 'special-510k';
      fdaDescription = 'If modifying your own cleared device with design controls, consider Special 510(k). Otherwise evaluate for new 510(k).';
    } else if (severity === 'moderate') {
      fdaAction = 'letter-to-file';
      fdaDescription = 'Document the change evaluation in a Letter to File per 21 CFR 820.30(i). Monitor for cumulative effects.';
    } else {
      fdaAction = 'letter-to-file';
      fdaDescription = 'Minor changes typically require only internal documentation (Letter to File).';
    }

    // NRTL/CB Determination
    if (selectedCategory === 'electrical' && (affectsSafety || severity !== 'minor')) {
      nrtlAction = isSignificant ? 'retest' : 'review';
      nrtlDescription = isSignificant
        ? 'Electrical changes affecting safety circuits or insulation likely require retesting by NRTL/CB.'
        : 'Submit change notification to certification body for review of electrical safety impact.';
    } else if (['mechanical', 'materials'].includes(selectedCategory) && affectsSafety) {
      nrtlAction = 'review';
      nrtlDescription = 'Changes to enclosure or materials affecting protection may require CB review.';
    } else if (selectedCategory === 'software' && affectsSafety) {
      nrtlAction = 'review';
      nrtlDescription = 'Software changes affecting safety functions may require CB review under IEC 62304 and IEC 60601-1.';
    } else if (severity === 'minor') {
      nrtlAction = 'none';
      nrtlDescription = 'Minor changes with no safety impact typically don\'t require NRTL notification.';
    } else {
      nrtlAction = 'notification';
      nrtlDescription = 'Notify certification body of change for their records. They may request additional information.';
    }

    // EU MDR Determination
    if (selectedCategory === 'intended-use' || isCritical) {
      euAction = 'significant-change';
      euDescription = 'This is likely a "significant change" under EU MDR Article 120. Notified Body assessment required before implementation.';
    } else if (isSignificant) {
      euAction = 'significant-change';
      euDescription = 'Evaluate if this constitutes a "significant change" per MDCG 2020-3. Notify NB and await determination.';
    } else {
      euAction = 'notification';
      euDescription = 'Notify Notified Body per quality system procedures. They may determine if further assessment needed.';
    }

    // Build result
    const result: NotificationResult = {
      category: CHANGE_TYPES.find(c => c.id === selectedCategory)?.name || '',
      changeDescription,
      fdaAction,
      fdaDescription,
      nrtlAction,
      nrtlDescription,
      euAction,
      euDescription,
      riskConsiderations: [],
      documentationRequired: [],
    };

    // Risk considerations based on category
    if (selectedCategory === 'electrical') {
      result.riskConsiderations = [
        'Electric shock hazard to patient or operator',
        'Fire risk from component failure',
        'EMC emissions or immunity impact',
        'Creepage and clearance distances',
        'Insulation coordination',
      ];
    } else if (selectedCategory === 'software') {
      result.riskConsiderations = [
        'Safety function integrity',
        'Alarm system functionality',
        'Data integrity and cybersecurity',
        'User interface changes affecting use error',
        'Interoperability with other systems',
      ];
    } else if (selectedCategory === 'materials') {
      result.riskConsiderations = [
        'Biocompatibility changes',
        'Flammability and fire resistance',
        'Mechanical strength',
        'Chemical compatibility',
        'Long-term stability',
      ];
    } else if (selectedCategory === 'sterilization') {
      result.riskConsiderations = [
        'Sterility Assurance Level (SAL)',
        'Material compatibility with sterilization',
        'Residual sterilant levels',
        'Packaging integrity post-sterilization',
      ];
    }

    // Documentation required
    result.documentationRequired = [
      'Design Change Request/Order',
      'Risk Analysis Update (ISO 14971)',
      'Design Verification/Validation Records',
    ];

    if (severity !== 'minor') {
      result.documentationRequired.push('Design Review Meeting Minutes');
      result.documentationRequired.push('Traceability Matrix Update');
    }

    if (affectsSafety) {
      result.documentationRequired.push('Safety Analysis Update');
      result.documentationRequired.push('FMEA Update');
    }

    if (fdaAction === 'letter-to-file') {
      result.documentationRequired.push('Letter to File (21 CFR 820.30(i))');
    } else if (fdaAction === 'new-510k' || fdaAction === 'special-510k') {
      result.documentationRequired.push('Regulatory Strategy Document');
      result.documentationRequired.push('510(k) Comparison Analysis');
    }

    return result;
  };

  const result = step === 'result' ? getResult() : null;

  const exportAssessment = () => {
    if (!result) return;

    const report = `DESIGN CHANGE NOTIFICATION ASSESSMENT
=====================================
Generated: ${new Date().toISOString()}

CHANGE INFORMATION
------------------
Category: ${result.category}
Description: ${result.changeDescription || 'Not specified'}
Severity: ${severity}
Affects Safety: ${affectsSafety ? 'Yes' : 'No'}
Affects Performance: ${affectsPerformance ? 'Yes' : 'No'}

FDA REQUIREMENTS
----------------
Action Required: ${result.fdaAction.replace(/-/g, ' ').toUpperCase()}
${result.fdaDescription}

NRTL/CERTIFICATION BODY REQUIREMENTS
------------------------------------
Action Required: ${result.nrtlAction.toUpperCase()}
${result.nrtlDescription}

EU MDR REQUIREMENTS
-------------------
Action Required: ${result.euAction.replace(/-/g, ' ').toUpperCase()}
${result.euDescription}

RISK CONSIDERATIONS
-------------------
${result.riskConsiderations.map(r => `• ${r}`).join('\n')}

DOCUMENTATION REQUIRED
----------------------
${result.documentationRequired.map(d => `• ${d}`).join('\n')}

KEY REGULATORY REFERENCES
-------------------------
• 21 CFR 820.30(i) - Design Changes
• FDA Guidance: Deciding When to Submit a 510(k) for a Change to an Existing Device
• MDCG 2020-3 - Significant Changes Guidance
• NRTL/CB Specific Procedures (varies by certification)

IMPORTANT DISCLAIMERS
--------------------
This assessment is for guidance only. Actual requirements depend on:
- Specific device classification and regulations
- Your certification body's procedures
- Complete risk analysis results
- Regulatory authority determinations

Always consult with your regulatory affairs team and certification 
bodies before implementing significant design changes.
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `design-change-assessment-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Design Change Notification Guide</h2>
          <p className="text-gray-600 mt-1">Determine when to notify test labs and regulatory bodies about design changes</p>
        </div>
        {step === 'result' && (
          <button
            onClick={exportAssessment}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export Assessment
          </button>
        )}
      </div>

      {/* Visual Decision Tree */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Design Change Decision Tree</h3>

        <div className="flex justify-center overflow-x-auto">
          <svg viewBox="0 0 700 420" className="w-full" style={{ minWidth: '600px', maxWidth: '800px' }}>
            <defs>
              <marker id="arrowDC" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
              </marker>
            </defs>

            {/* Start */}
            <rect x="275" y="10" width="150" height="40" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
            <text x="350" y="35" textAnchor="middle" className="text-sm font-bold" fill="#0369a1">DESIGN CHANGE</text>

            {/* Arrow to Q1 */}
            <line x1="350" y1="50" x2="350" y2="75" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowDC)" />

            {/* Q1: Affects Safety? */}
            <polygon 
              points="350,80 450,120 350,160 250,120" 
              fill={step === 'safety' || step === 'start' ? '#fef3c7' : '#f3f4f6'} 
              stroke="#f59e0b" 
              strokeWidth="2"
            />
            <text x="350" y="115" textAnchor="middle" className="text-xs" fill="#374151">
              <tspan x="350" dy="0">Affects</tspan>
              <tspan x="350" dy="12">Safety?</tspan>
            </text>

            {/* YES Safety - to Q2 */}
            <line x1="450" y1="120" x2="550" y2="120" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowDC)" />
            <text x="500" y="110" textAnchor="middle" className="text-xs font-bold" fill="#dc2626">YES</text>

            {/* Q2: Affects Intended Use? */}
            <polygon 
              points="600,80 680,120 600,160 520,120" 
              fill="#f3f4f6" 
              stroke="#9ca3af" 
              strokeWidth="2"
            />
            <text x="600" y="110" textAnchor="middle" className="text-xs" fill="#374151">
              <tspan x="600" dy="0">Changes</tspan>
              <tspan x="600" dy="12">Intended Use?</tspan>
            </text>

            {/* YES Intended Use -> New 510k */}
            <line x1="600" y1="160" x2="600" y2="200" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowDC)" />
            <text x="615" y="180" className="text-xs font-bold" fill="#dc2626">YES</text>
            <rect x="540" y="205" width="120" height="50" rx="6" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
            <text x="600" y="225" textAnchor="middle" className="text-xs font-bold" fill="#b91c1c">NEW 510(k)</text>
            <text x="600" y="240" textAnchor="middle" className="text-xs" fill="#b91c1c">Required</text>

            {/* NO Intended Use -> Evaluate SE */}
            <line x1="680" y1="120" x2="680" y2="285" stroke="#6b7280" strokeWidth="2" />
            <line x1="680" y1="285" x2="600" y2="285" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowDC)" />
            <text x="685" y="200" className="text-xs font-bold" fill="#16a34a">NO</text>

            {/* Evaluate SE box */}
            <rect x="540" y="265" width="120" height="50" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
            <text x="600" y="285" textAnchor="middle" className="text-xs font-bold" fill="#a16207">EVALUATE SE</text>
            <text x="600" y="300" textAnchor="middle" className="text-xs" fill="#a16207">May need 510(k)</text>

            {/* NO Safety path */}
            <line x1="250" y1="120" x2="150" y2="120" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowDC)" />
            <text x="200" y="110" textAnchor="middle" className="text-xs font-bold" fill="#16a34a">NO</text>

            {/* Q3: Major Change? */}
            <polygon 
              points="100,80 180,120 100,160 20,120" 
              fill="#f3f4f6" 
              stroke="#9ca3af" 
              strokeWidth="2"
            />
            <text x="100" y="115" textAnchor="middle" className="text-xs" fill="#374151">
              <tspan x="100" dy="0">Major</tspan>
              <tspan x="100" dy="12">Change?</tspan>
            </text>

            {/* YES Major -> Special 510k consideration */}
            <line x1="100" y1="160" x2="100" y2="200" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowDC)" />
            <text x="115" y="180" className="text-xs font-bold" fill="#ca8a04">YES</text>
            <rect x="40" y="205" width="120" height="50" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
            <text x="100" y="225" textAnchor="middle" className="text-xs font-bold" fill="#1d4ed8">EVALUATE</text>
            <text x="100" y="240" textAnchor="middle" className="text-xs" fill="#1d4ed8">Special 510(k)?</text>

            {/* NO Major -> Letter to File */}
            <line x1="20" y1="120" x2="20" y2="285" stroke="#6b7280" strokeWidth="2" />
            <line x1="20" y1="285" x2="80" y2="285" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowDC)" />
            <text x="25" y="200" className="text-xs font-bold" fill="#16a34a">NO</text>
            <rect x="80" y="265" width="100" height="50" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="130" y="285" textAnchor="middle" className="text-xs font-bold" fill="#15803d">LETTER TO</text>
            <text x="130" y="300" textAnchor="middle" className="text-xs" fill="#15803d">FILE</text>

            {/* NRTL/CB Section */}
            <rect x="225" y="200" width="250" height="80" rx="8" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2" />
            <text x="350" y="225" textAnchor="middle" className="text-sm font-bold" fill="#6d28d9">CERTIFICATION BODY (NRTL/CB)</text>
            <text x="350" y="245" textAnchor="middle" className="text-xs" fill="#7c3aed">Notify for electrical/safety changes</text>
            <text x="350" y="260" textAnchor="middle" className="text-xs" fill="#7c3aed">May require review or retesting</text>

            {/* EU MDR Section */}
            <rect x="225" y="300" width="250" height="80" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
            <text x="350" y="325" textAnchor="middle" className="text-sm font-bold" fill="#047857">EU MDR / NOTIFIED BODY</text>
            <text x="350" y="345" textAnchor="middle" className="text-xs" fill="#059669">Assess for "significant change"</text>
            <text x="350" y="360" textAnchor="middle" className="text-xs" fill="#059669">per MDCG 2020-3 guidance</text>

            {/* Legend */}
            <rect x="50" y="380" width="15" height="15" fill="#dcfce7" stroke="#16a34a" />
            <text x="75" y="392" className="text-xs" fill="#374151">Document Only</text>

            <rect x="180" y="380" width="15" height="15" fill="#dbeafe" stroke="#2563eb" />
            <text x="205" y="392" className="text-xs" fill="#374151">Evaluate Pathway</text>

            <rect x="310" y="380" width="15" height="15" fill="#fef9c3" stroke="#ca8a04" />
            <text x="335" y="392" className="text-xs" fill="#374151">May Need Submission</text>

            <rect x="470" y="380" width="15" height="15" fill="#fecaca" stroke="#dc2626" />
            <text x="495" y="392" className="text-xs" fill="#374151">Submission Required</text>
          </svg>
        </div>
      </div>

      {/* Interactive Assessment */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Change Assessment Tool</h3>

        {step === 'start' && (
          <div>
            <p className="text-gray-600 mb-4">Select the type of design change you are evaluating:</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {CHANGE_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => {
                    setSelectedCategory(type.id);
                    setStep('category');
                  }}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-center"
                >
                  <span className="text-2xl">{type.icon}</span>
                  <p className="text-sm font-medium mt-2">{type.name}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'category' && selectedCategory && (
          <div>
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <p className="font-medium text-blue-900">
                {CHANGE_TYPES.find(t => t.id === selectedCategory)?.icon}{' '}
                {CHANGE_TYPES.find(t => t.id === selectedCategory)?.name}
              </p>
              <p className="text-sm text-blue-700 mt-1">
                Examples: {CHANGE_TYPES.find(t => t.id === selectedCategory)?.examples.join(', ')}
              </p>
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Briefly describe the change (optional):
            </label>
            <textarea
              value={changeDescription}
              onChange={(e) => setChangeDescription(e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
              placeholder="e.g., Replacing capacitor C12 with equivalent from different manufacturer..."
            />

            <p className="text-gray-600 mb-3">What is the severity of this change?</p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <button
                onClick={() => {
                  setSeverity('minor');
                  setStep('safety');
                }}
                className="p-4 border-2 border-green-200 bg-green-50 rounded-lg hover:border-green-400 transition-all"
              >
                <p className="font-bold text-green-700">Minor</p>
                <p className="text-xs text-green-600 mt-1">Cosmetic, no functional impact</p>
              </button>
              <button
                onClick={() => {
                  setSeverity('moderate');
                  setStep('safety');
                }}
                className="p-4 border-2 border-yellow-200 bg-yellow-50 rounded-lg hover:border-yellow-400 transition-all"
              >
                <p className="font-bold text-yellow-700">Moderate</p>
                <p className="text-xs text-yellow-600 mt-1">Functional but limited scope</p>
              </button>
              <button
                onClick={() => {
                  setSeverity('major');
                  setStep('safety');
                }}
                className="p-4 border-2 border-red-200 bg-red-50 rounded-lg hover:border-red-400 transition-all"
              >
                <p className="font-bold text-red-700">Major</p>
                <p className="text-xs text-red-600 mt-1">Significant functional change</p>
              </button>
            </div>

            <button onClick={reset} className="text-sm text-gray-600 hover:text-gray-900">
              ← Back to category selection
            </button>
          </div>
        )}

        {step === 'safety' && (
          <div>
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <p className="font-medium text-blue-900">
                {CHANGE_TYPES.find(t => t.id === selectedCategory)?.icon}{' '}
                {CHANGE_TYPES.find(t => t.id === selectedCategory)?.name} - {severity?.toUpperCase()}
              </p>
            </div>

            <p className="text-gray-600 mb-3">Does this change affect <strong>safety</strong>?</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setAffectsSafety(true)}
                className={`p-4 border-2 rounded-lg transition-all ${
                  affectsSafety === true ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-red-300'
                }`}
              >
                <p className="font-bold text-red-700">Yes - Affects Safety</p>
                <p className="text-xs text-gray-600 mt-1">Could impact patient, operator, or device safety</p>
              </button>
              <button
                onClick={() => setAffectsSafety(false)}
                className={`p-4 border-2 rounded-lg transition-all ${
                  affectsSafety === false ? 'border-green-400 bg-green-50' : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <p className="font-bold text-green-700">No - No Safety Impact</p>
                <p className="text-xs text-gray-600 mt-1">No impact on safety functions</p>
              </button>
            </div>

            <p className="text-gray-600 mb-3">Does this change affect <strong>performance/effectiveness</strong>?</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setAffectsPerformance(true)}
                className={`p-4 border-2 rounded-lg transition-all ${
                  affectsPerformance === true ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 hover:border-yellow-300'
                }`}
              >
                <p className="font-bold text-yellow-700">Yes - Affects Performance</p>
                <p className="text-xs text-gray-600 mt-1">Could impact device effectiveness</p>
              </button>
              <button
                onClick={() => setAffectsPerformance(false)}
                className={`p-4 border-2 rounded-lg transition-all ${
                  affectsPerformance === false ? 'border-green-400 bg-green-50' : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <p className="font-bold text-green-700">No - No Performance Impact</p>
                <p className="text-xs text-gray-600 mt-1">Performance specifications unchanged</p>
              </button>
            </div>

            {affectsSafety !== null && affectsPerformance !== null && (
              <button
                onClick={() => setStep('result')}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Get Notification Requirements
              </button>
            )}

            <button onClick={() => setStep('category')} className="mt-4 text-sm text-gray-600 hover:text-gray-900">
              ← Back to severity selection
            </button>
          </div>
        )}

        {step === 'result' && result && (
          <div className="space-y-6">
            {/* Summary Banner */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900">Change Summary</h4>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Category</p>
                  <p className="font-medium">{result.category}</p>
                </div>
                <div>
                  <p className="text-gray-500">Severity</p>
                  <p className={`font-medium ${
                    severity === 'major' ? 'text-red-600' : 
                    severity === 'moderate' ? 'text-yellow-600' : 'text-green-600'
                  }`}>{severity?.charAt(0).toUpperCase()}{severity?.slice(1)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Affects Safety</p>
                  <p className={`font-medium ${affectsSafety ? 'text-red-600' : 'text-green-600'}`}>
                    {affectsSafety ? 'Yes' : 'No'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Affects Performance</p>
                  <p className={`font-medium ${affectsPerformance ? 'text-yellow-600' : 'text-green-600'}`}>
                    {affectsPerformance ? 'Yes' : 'No'}
                  </p>
                </div>
              </div>
            </div>

            {/* FDA Requirements */}
            <div className={`p-5 rounded-lg border-2 ${
              result.fdaAction === 'new-510k' ? 'bg-red-50 border-red-300' :
              result.fdaAction === 'special-510k' ? 'bg-yellow-50 border-yellow-300' :
              'bg-green-50 border-green-300'
            }`}>
              <div className="flex items-start gap-3">
                <Shield className={`w-8 h-8 ${
                  result.fdaAction === 'new-510k' ? 'text-red-600' :
                  result.fdaAction === 'special-510k' ? 'text-yellow-600' :
                  'text-green-600'
                }`} />
                <div>
                  <h4 className="font-bold text-gray-900">FDA Requirement</h4>
                  <p className={`text-lg font-bold mt-1 ${
                    result.fdaAction === 'new-510k' ? 'text-red-700' :
                    result.fdaAction === 'special-510k' ? 'text-yellow-700' :
                    'text-green-700'
                  }`}>
                    {result.fdaAction === 'new-510k' && 'New 510(k) Likely Required'}
                    {result.fdaAction === 'special-510k' && 'Evaluate for Special 510(k)'}
                    {result.fdaAction === 'letter-to-file' && 'Letter to File'}
                    {result.fdaAction === 'pma-supplement' && 'PMA Supplement Required'}
                    {result.fdaAction === 'none' && 'No FDA Notification Required'}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">{result.fdaDescription}</p>
                </div>
              </div>
            </div>

            {/* NRTL/CB Requirements */}
            <div className={`p-5 rounded-lg border-2 ${
              result.nrtlAction === 'retest' ? 'bg-red-50 border-red-300' :
              result.nrtlAction === 'review' ? 'bg-yellow-50 border-yellow-300' :
              result.nrtlAction === 'notification' ? 'bg-blue-50 border-blue-300' :
              'bg-green-50 border-green-300'
            }`}>
              <div className="flex items-start gap-3">
                <Beaker className={`w-8 h-8 ${
                  result.nrtlAction === 'retest' ? 'text-red-600' :
                  result.nrtlAction === 'review' ? 'text-yellow-600' :
                  result.nrtlAction === 'notification' ? 'text-blue-600' :
                  'text-green-600'
                }`} />
                <div>
                  <h4 className="font-bold text-gray-900">Test Lab / Certification Body (NRTL/CB)</h4>
                  <p className={`text-lg font-bold mt-1 ${
                    result.nrtlAction === 'retest' ? 'text-red-700' :
                    result.nrtlAction === 'review' ? 'text-yellow-700' :
                    result.nrtlAction === 'notification' ? 'text-blue-700' :
                    'text-green-700'
                  }`}>
                    {result.nrtlAction === 'retest' && 'Retesting Likely Required'}
                    {result.nrtlAction === 'review' && 'CB Review Recommended'}
                    {result.nrtlAction === 'notification' && 'Notify Certification Body'}
                    {result.nrtlAction === 'none' && 'No CB Notification Required'}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">{result.nrtlDescription}</p>
                </div>
              </div>
            </div>

            {/* EU MDR Requirements */}
            <div className={`p-5 rounded-lg border-2 ${
              result.euAction === 'significant-change' || result.euAction === 'new-certification' ? 'bg-red-50 border-red-300' :
              result.euAction === 'notification' ? 'bg-blue-50 border-blue-300' :
              'bg-green-50 border-green-300'
            }`}>
              <div className="flex items-start gap-3">
                <Building2 className={`w-8 h-8 ${
                  result.euAction === 'significant-change' || result.euAction === 'new-certification' ? 'text-red-600' :
                  result.euAction === 'notification' ? 'text-blue-600' :
                  'text-green-600'
                }`} />
                <div>
                  <h4 className="font-bold text-gray-900">EU MDR / Notified Body</h4>
                  <p className={`text-lg font-bold mt-1 ${
                    result.euAction === 'significant-change' || result.euAction === 'new-certification' ? 'text-red-700' :
                    result.euAction === 'notification' ? 'text-blue-700' :
                    'text-green-700'
                  }`}>
                    {result.euAction === 'significant-change' && 'Significant Change Assessment'}
                    {result.euAction === 'new-certification' && 'New Certification Required'}
                    {result.euAction === 'notification' && 'Notify Notified Body'}
                    {result.euAction === 'none' && 'No NB Notification Required'}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">{result.euDescription}</p>
                </div>
              </div>
            </div>

            {/* Risk Considerations */}
            {result.riskConsiderations.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  Risk Considerations
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {result.riskConsiderations.map((risk, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                      <span className="text-gray-700">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Documentation Required */}
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Documentation Required
              </h4>
              <ul className="space-y-2">
                {result.documentationRequired.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={reset}
              className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Assess Another Change
            </button>
          </div>
        )}
      </div>

      {/* Reference Information */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-yellow-900 mb-4">Key Regulatory References</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-2">FDA - Design Changes</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• 21 CFR 820.30(i) - Design Changes</li>
              <li>• FDA Guidance: Deciding When to Submit a 510(k)</li>
              <li>• FDA Guidance: The 510(k) Program</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-2">EU MDR - Changes</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• MDCG 2020-3: Significant Changes Guidance</li>
              <li>• EU MDR Article 120 (Transitional)</li>
              <li>• Notified Body procedures</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-700">Important Disclaimer</p>
            <p className="text-xs text-gray-600 mt-1">
              This tool provides general guidance only. Actual notification requirements depend on your 
              specific device, classification, certifications, and the complete risk analysis. Always 
              consult with your regulatory affairs team, quality team, and certification bodies before 
              implementing design changes. Requirements vary by certification body and regulatory authority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

