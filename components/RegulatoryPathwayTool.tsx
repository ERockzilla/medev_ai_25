'use client';

import { useState } from 'react';
import { Download, AlertTriangle, Info, CheckCircle, RotateCcw, FileText, Scale, ArrowRight } from 'lucide-react';

type PathwayType = 
  | '510k-traditional' 
  | '510k-special' 
  | '510k-abbreviated' 
  | 'de-novo' 
  | 'pma' 
  | 'pma-supplement'
  | 'hde'
  | 'exempt';

interface PathwayResult {
  pathway: string;
  fullName: string;
  color: string;
  description: string;
  timeline: string;
  userFee: string;
  whenToUse: string[];
  requirements: string[];
  advantages: string[];
  limitations: string[];
}

const PATHWAY_DATA: Record<PathwayType, PathwayResult> = {
  '510k-traditional': {
    pathway: 'Traditional 510(k)',
    fullName: 'Traditional Premarket Notification',
    color: 'green',
    description: 'Standard 510(k) submission demonstrating substantial equivalence to a predicate device.',
    timeline: '90-180 days (FDA goal: 90 days)',
    userFee: '~$21,760 (FY2024)',
    whenToUse: [
      'Device has a valid predicate',
      'Same intended use as predicate',
      'Technological differences require new performance data',
      'Cannot use Special or Abbreviated 510(k)',
    ],
    requirements: [
      'Device description and specifications',
      'Predicate comparison and SE discussion',
      'Performance testing data',
      'Biocompatibility (if applicable)',
      'Software documentation (if applicable)',
      'Labeling including IFU',
      'Clinical data (if needed)',
    ],
    advantages: [
      'Well-established pathway',
      'Clear precedent from predicate',
      'No clinical data required in many cases',
    ],
    limitations: [
      'Requires suitable predicate device',
      'May face RTA/AI letters',
      'Longer than Special 510(k)',
    ],
  },
  '510k-special': {
    pathway: 'Special 510(k)',
    fullName: 'Special Premarket Notification',
    color: 'blue',
    description: 'Expedited review for modifications to your own legally marketed device with design controls.',
    timeline: '30 days (FDA goal)',
    userFee: '~$21,760 (FY2024)',
    whenToUse: [
      'Modification to your own cleared device',
      'Change doesn\'t affect intended use',
      'Design controls in place (21 CFR 820.30)',
      'Risk analysis shows no new safety questions',
    ],
    requirements: [
      'Declaration of design control compliance',
      'Summary of design control documentation',
      'Risk analysis summary',
      'Description of modification',
      'Comparison to original device',
      'Verification/validation summary',
    ],
    advantages: [
      'Fastest 510(k) pathway (30 days)',
      'Streamlined review',
      'Relies on your quality system',
    ],
    limitations: [
      'Only for your own device modifications',
      'Must have design controls in place',
      'Cannot change intended use',
    ],
  },
  '510k-abbreviated': {
    pathway: 'Abbreviated 510(k)',
    fullName: 'Abbreviated Premarket Notification',
    color: 'cyan',
    description: 'Relies on FDA guidance, special controls, or recognized standards for substantial equivalence.',
    timeline: '60-90 days',
    userFee: '~$21,760 (FY2024)',
    whenToUse: [
      'FDA guidance document applies to your device',
      'Special controls have been established',
      'Recognized consensus standards apply',
      'Can demonstrate conformance to standards',
    ],
    requirements: [
      'Declaration of conformance to guidance/standard',
      'Summary report referencing guidance',
      'Conformance test data or certification',
      'Comparison to predicate',
      'Declaration of conformance',
    ],
    advantages: [
      'Streamlined if guidance/standards apply',
      'Clear acceptance criteria',
      'May reduce testing burden',
    ],
    limitations: [
      'Must have applicable guidance or standard',
      'Still need predicate device',
      'Limited applicability',
    ],
  },
  'de-novo': {
    pathway: 'De Novo',
    fullName: 'De Novo Classification Request',
    color: 'purple',
    description: 'Classification pathway for novel devices with no predicate that are low-to-moderate risk.',
    timeline: '150 days (FDA goal)',
    userFee: '~$134,930 (FY2024)',
    whenToUse: [
      'Novel device with no predicate',
      'Low-to-moderate risk profile',
      'General/special controls sufficient',
      'PMA-level data not warranted',
    ],
    requirements: [
      'Device description and intended use',
      'Proposed classification (Class I or II)',
      'Proposed special controls',
      'Performance data',
      'Risk analysis',
      'Clinical data (may be required)',
    ],
    advantages: [
      'Creates new classification regulation',
      'Your device becomes the predicate',
      'Faster than PMA',
    ],
    limitations: [
      'Higher user fee than 510(k)',
      'Must justify controls are sufficient',
      'May need clinical data',
    ],
  },
  'pma': {
    pathway: 'PMA',
    fullName: 'Premarket Approval Application',
    color: 'red',
    description: 'Most stringent pathway for Class III devices requiring clinical evidence of safety and effectiveness.',
    timeline: '180 days FDA review + clinical trial time (often 1-5 years total)',
    userFee: '~$425,000 (FY2024)',
    whenToUse: [
      'Class III device',
      'Life-sustaining or life-supporting',
      'Substantial risk to patient',
      'No predicate or De Novo not appropriate',
    ],
    requirements: [
      'Non-clinical laboratory studies',
      'Clinical investigations (pivotal trials)',
      'Manufacturing information',
      'Complete device description',
      'Labeling with full prescribing information',
      'Environmental assessment',
    ],
    advantages: [
      'Enables marketing of high-risk devices',
      'Strong clinical evidence supports claims',
      'High barrier to competitors',
    ],
    limitations: [
      'Longest timeline',
      'Highest cost',
      'Requires clinical trials',
    ],
  },
  'pma-supplement': {
    pathway: 'PMA Supplement',
    fullName: 'PMA Supplement (180-day, Real-Time, Special)',
    color: 'orange',
    description: 'For modifications to PMA-approved devices. Different types based on change significance.',
    timeline: '30-180 days depending on type',
    userFee: 'Varies by type ($10,000-$100,000+)',
    whenToUse: [
      'Modification to PMA-approved device',
      'Type depends on change significance',
      'Real-time: Minor manufacturing changes',
      'Special: Limited design/labeling changes',
      '180-day: Significant changes needing review',
    ],
    requirements: [
      'Description of change',
      'Comparison to approved device',
      'Risk analysis',
      'Supporting data for change',
      'Updated labeling if applicable',
    ],
    advantages: [
      'Allows device improvements',
      'Different tracks for different changes',
      'Some types very fast (real-time)',
    ],
    limitations: [
      'Must maintain PMA compliance',
      'Significant changes need more data',
      'Panel-track for major changes',
    ],
  },
  'hde': {
    pathway: 'HDE',
    fullName: 'Humanitarian Device Exemption',
    color: 'teal',
    description: 'For devices treating conditions affecting fewer than 8,000 patients/year in the US.',
    timeline: '75 days (FDA goal)',
    userFee: 'Exempt from user fees',
    whenToUse: [
      'Rare disease/condition',
      'Fewer than 8,000 patients/year in US',
      'No comparable device available',
      'Benefit outweighs risk',
    ],
    requirements: [
      'HUD designation request first',
      'Probable benefit demonstration',
      'Safety data (clinical not required)',
      'IRB approval for use',
      'Annual distribution reports',
    ],
    advantages: [
      'No user fees',
      'No clinical trials required',
      'Faster pathway for rare diseases',
    ],
    limitations: [
      'Limited patient population',
      'Profit restrictions may apply',
      'IRB approval required for use',
    ],
  },
  'exempt': {
    pathway: 'Exempt',
    fullName: '510(k) Exempt / Class I Exempt',
    color: 'gray',
    description: 'Devices exempt from premarket notification. Still subject to general controls.',
    timeline: 'No FDA review required',
    userFee: 'None',
    whenToUse: [
      'Device is listed as exempt in 21 CFR',
      'Class I device (most are exempt)',
      'Some Class II with specific exemption',
      'No modifications that change intended use',
    ],
    requirements: [
      'Establishment registration',
      'Device listing',
      'General controls compliance',
      'QSR compliance (if not fully exempt)',
      'MDR compliance',
    ],
    advantages: [
      'No premarket submission',
      'Fastest time to market',
      'No user fees',
    ],
    limitations: [
      'Must verify exempt status',
      'Still subject to general controls',
      'Modifications may trigger 510(k)',
    ],
  },
};

export default function RegulatoryPathwayTool() {
  const [step, setStep] = useState<'diagram' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'result'>('diagram');
  const [selectedPathway, setSelectedPathway] = useState<PathwayType | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const result = selectedPathway ? PATHWAY_DATA[selectedPathway] : null;

  const handleAnswer = (question: string, answer: string, nextStep: 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'result', pathway?: PathwayType) => {
    setAnswers({ ...answers, [question]: answer });
    if (pathway) {
      setSelectedPathway(pathway);
    }
    setStep(nextStep);
  };

  const reset = () => {
    setStep('diagram');
    setSelectedPathway(null);
    setAnswers({});
  };

  const exportAssessment = () => {
    if (!result) return;
    
    const report = `FDA REGULATORY PATHWAY ASSESSMENT
==================================
Generated: ${new Date().toISOString()}

RECOMMENDED PATHWAY
-------------------
${result.pathway}
${result.fullName}

${result.description}

Timeline: ${result.timeline}
User Fee: ${result.userFee}

WHEN TO USE THIS PATHWAY
------------------------
${result.whenToUse.map(w => `• ${w}`).join('\n')}

REQUIREMENTS
------------
${result.requirements.map(r => `• ${r}`).join('\n')}

ADVANTAGES
----------
${result.advantages.map(a => `• ${a}`).join('\n')}

LIMITATIONS
-----------
${result.limitations.map(l => `• ${l}`).join('\n')}

DECISION PATH
-------------
${Object.entries(answers).map(([q, a]) => `${q}: ${a}`).join('\n')}

IMPORTANT DISCLAIMERS
--------------------
This is preliminary guidance only. Final pathway determination 
requires consideration of device-specific factors. FDA has final 
authority. Consider Pre-Submission (Q-Sub) meeting with FDA.
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `regulatory-pathway-${result.pathway.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">FDA Regulatory Pathway Decision Tool</h2>
          <p className="text-gray-600 mt-1">Determine the appropriate FDA submission pathway for your device</p>
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
        <h3 className="text-lg font-bold text-gray-900 mb-4">FDA Premarket Submission Decision Tree</h3>
        
        <div className="flex justify-center overflow-x-auto">
          <svg viewBox="0 0 800 500" className="w-full" style={{ minWidth: '700px', maxWidth: '900px' }}>
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
              </marker>
            </defs>

            {/* Start */}
            <rect x="325" y="10" width="150" height="40" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
            <text x="400" y="35" textAnchor="middle" className="text-sm font-bold" fill="#0369a1">NEW DEVICE</text>

            {/* Q1: Predicate exists? */}
            <line x1="400" y1="50" x2="400" y2="75" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <polygon 
              points="400,80 500,120 400,160 300,120" 
              fill={step === 'q1' ? '#fef3c7' : '#f3f4f6'} 
              stroke={step === 'q1' ? '#f59e0b' : '#9ca3af'} 
              strokeWidth="2"
            />
            <text x="400" y="115" textAnchor="middle" className="text-xs" fill="#374151">
              <tspan x="400" dy="0">Predicate</tspan>
              <tspan x="400" dy="12">exists?</tspan>
            </text>

            {/* NO - Novel device path */}
            <line x1="300" y1="120" x2="150" y2="120" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="225" y="110" textAnchor="middle" className="text-xs font-bold" fill="#dc2626">NO</text>

            {/* Q2: Risk level for novel */}
            <polygon 
              points="150,130 230,165 150,200 70,165" 
              fill={step === 'q2' ? '#fef3c7' : '#f3f4f6'} 
              stroke={step === 'q2' ? '#f59e0b' : '#9ca3af'} 
              strokeWidth="2"
            />
            <text x="150" y="160" textAnchor="middle" className="text-xs" fill="#374151">
              <tspan x="150" dy="0">High</tspan>
              <tspan x="150" dy="12">risk?</tspan>
            </text>

            {/* High risk -> PMA */}
            <line x1="230" y1="165" x2="280" y2="165" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="255" y="155" textAnchor="middle" className="text-xs font-bold" fill="#dc2626">YES</text>
            <rect x="280" y="145" width="60" height="40" rx="6" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
            <text x="310" y="170" textAnchor="middle" className="text-sm font-bold" fill="#b91c1c">PMA</text>

            {/* Low/mod risk -> De Novo or rare */}
            <line x1="150" y1="200" x2="150" y2="230" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="165" y="215" className="text-xs font-bold" fill="#16a34a">NO</text>

            {/* Q3: Rare disease? */}
            <polygon 
              points="150,235 230,270 150,305 70,270" 
              fill={step === 'q3' ? '#fef3c7' : '#f3f4f6'} 
              stroke={step === 'q3' ? '#f59e0b' : '#9ca3af'} 
              strokeWidth="2"
            />
            <text x="150" y="265" textAnchor="middle" className="text-xs" fill="#374151">
              <tspan x="150" dy="0">Rare</tspan>
              <tspan x="150" dy="12">&lt;8k/yr?</tspan>
            </text>

            {/* Rare -> HDE */}
            <line x1="70" y1="270" x2="20" y2="270" stroke="#6b7280" strokeWidth="2" />
            <line x1="20" y1="270" x2="20" y2="350" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="45" y="260" textAnchor="middle" className="text-xs font-bold" fill="#0d9488">YES</text>
            <rect x="0" y="355" width="50" height="35" rx="6" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
            <text x="25" y="377" textAnchor="middle" className="text-sm font-bold" fill="#0f766e">HDE</text>

            {/* Not rare -> De Novo */}
            <line x1="150" y1="305" x2="150" y2="355" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="165" y="330" className="text-xs font-bold" fill="#9333ea">NO</text>
            <rect x="110" y="355" width="80" height="35" rx="6" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
            <text x="150" y="377" textAnchor="middle" className="text-sm font-bold" fill="#7e22ce">De Novo</text>

            {/* YES - Has predicate path */}
            <line x1="400" y1="160" x2="400" y2="195" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="415" y="180" className="text-xs font-bold" fill="#16a34a">YES</text>

            {/* Q4: Is it your own device? */}
            <polygon 
              points="400,200 500,240 400,280 300,240" 
              fill={step === 'q4' ? '#fef3c7' : '#f3f4f6'} 
              stroke={step === 'q4' ? '#f59e0b' : '#9ca3af'} 
              strokeWidth="2"
            />
            <text x="400" y="235" textAnchor="middle" className="text-xs" fill="#374151">
              <tspan x="400" dy="0">Modifying</tspan>
              <tspan x="400" dy="12">your device?</tspan>
            </text>

            {/* Your device -> Special 510k */}
            <line x1="500" y1="240" x2="600" y2="240" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="550" y="230" textAnchor="middle" className="text-xs font-bold" fill="#2563eb">YES</text>
            <rect x="600" y="220" width="90" height="40" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
            <text x="645" y="240" textAnchor="middle" className="text-xs font-bold" fill="#1d4ed8">Special</text>
            <text x="645" y="252" textAnchor="middle" className="text-xs font-bold" fill="#1d4ed8">510(k)</text>

            {/* Not your device -> Q5 */}
            <line x1="400" y1="280" x2="400" y2="315" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="415" y="300" className="text-xs font-bold" fill="#ca8a04">NO</text>

            {/* Q5: Guidance/Standard available? */}
            <polygon 
              points="400,320 500,360 400,400 300,360" 
              fill={step === 'q5' ? '#fef3c7' : '#f3f4f6'} 
              stroke={step === 'q5' ? '#f59e0b' : '#9ca3af'} 
              strokeWidth="2"
            />
            <text x="400" y="355" textAnchor="middle" className="text-xs" fill="#374151">
              <tspan x="400" dy="0">Guidance/</tspan>
              <tspan x="400" dy="12">Standard?</tspan>
            </text>

            {/* Has guidance -> Abbreviated */}
            <line x1="500" y1="360" x2="600" y2="360" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="550" y="350" textAnchor="middle" className="text-xs font-bold" fill="#0891b2">YES</text>
            <rect x="600" y="340" width="90" height="40" rx="6" fill="#cffafe" stroke="#0891b2" strokeWidth="2" />
            <text x="645" y="360" textAnchor="middle" className="text-xs font-bold" fill="#0e7490">Abbreviated</text>
            <text x="645" y="372" textAnchor="middle" className="text-xs font-bold" fill="#0e7490">510(k)</text>

            {/* No guidance -> Traditional */}
            <line x1="400" y1="400" x2="400" y2="445" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="415" y="425" className="text-xs font-bold" fill="#16a34a">NO</text>
            <rect x="340" y="450" width="120" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="400" y="470" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Traditional</text>
            <text x="400" y="482" textAnchor="middle" className="text-xs font-bold" fill="#15803d">510(k)</text>

            {/* Exempt note */}
            <rect x="600" y="450" width="150" height="35" rx="6" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4" />
            <text x="675" y="472" textAnchor="middle" className="text-xs" fill="#6b7280">Also check if Exempt</text>

            {/* Current step indicator */}
            {step === 'q1' && <circle cx="400" cy="120" r="5" fill="#f59e0b"><animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" /></circle>}
            {step === 'q2' && <circle cx="150" cy="165" r="5" fill="#f59e0b"><animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" /></circle>}
            {step === 'q3' && <circle cx="150" cy="270" r="5" fill="#f59e0b"><animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" /></circle>}
            {step === 'q4' && <circle cx="400" cy="240" r="5" fill="#f59e0b"><animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" /></circle>}
            {step === 'q5' && <circle cx="400" cy="360" r="5" fill="#f59e0b"><animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" /></circle>}
          </svg>
        </div>

        {/* Interactive Questions */}
        {step === 'diagram' && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setStep('q1')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Start Pathway Assessment
            </button>
          </div>
        )}

        {step === 'q1' && (
          <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
            <h4 className="font-bold text-yellow-900 mb-2">Question 1: Predicate Device</h4>
            <p className="text-yellow-800 mb-4">
              Does a legally marketed <strong>predicate device</strong> exist for your device?
            </p>
            <p className="text-sm text-yellow-700 mb-4">
              A predicate is a device marketed before 1976, or cleared via 510(k), De Novo, or reclassification 
              that has the same intended use and similar technology.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer('Predicate exists?', 'Yes', 'q4')}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
              >
                YES - Predicate exists
              </button>
              <button
                onClick={() => handleAnswer('Predicate exists?', 'No - Novel device', 'q2')}
                className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
              >
                NO - Novel device
              </button>
            </div>
          </div>
        )}

        {step === 'q2' && (
          <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
            <h4 className="font-bold text-yellow-900 mb-2">Question 2: Risk Level</h4>
            <p className="text-yellow-800 mb-4">
              Is your novel device <strong>high risk</strong> (life-sustaining, life-supporting, or presents substantial risk)?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer('High risk?', 'Yes', 'result', 'pma')}
                className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
              >
                YES - High risk → PMA
              </button>
              <button
                onClick={() => handleAnswer('High risk?', 'No - Low/moderate risk', 'q3')}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
              >
                NO - Low/moderate risk
              </button>
            </div>
          </div>
        )}

        {step === 'q3' && (
          <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
            <h4 className="font-bold text-yellow-900 mb-2">Question 3: Rare Disease</h4>
            <p className="text-yellow-800 mb-4">
              Does your device treat a <strong>rare condition</strong> affecting fewer than 8,000 patients/year in the US?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer('Rare disease?', 'Yes - <8,000/year', 'result', 'hde')}
                className="flex-1 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium"
              >
                YES - Rare disease → HDE
              </button>
              <button
                onClick={() => handleAnswer('Rare disease?', 'No', 'result', 'de-novo')}
                className="flex-1 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
              >
                NO → De Novo
              </button>
            </div>
          </div>
        )}

        {step === 'q4' && (
          <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
            <h4 className="font-bold text-yellow-900 mb-2">Question 4: Your Own Device?</h4>
            <p className="text-yellow-800 mb-4">
              Are you <strong>modifying your own</strong> previously cleared device (and have design controls)?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer('Own device modification?', 'Yes - with design controls', 'result', '510k-special')}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                YES → Special 510(k)
              </button>
              <button
                onClick={() => handleAnswer('Own device modification?', 'No', 'q5')}
                className="flex-1 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-medium"
              >
                NO - Different predicate
              </button>
            </div>
          </div>
        )}

        {step === 'q5' && (
          <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
            <h4 className="font-bold text-yellow-900 mb-2">Question 5: Guidance or Standard?</h4>
            <p className="text-yellow-800 mb-4">
              Is there an FDA <strong>guidance document</strong> or <strong>recognized standard</strong> for your device type?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer('Guidance/standard available?', 'Yes', 'result', '510k-abbreviated')}
                className="flex-1 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-medium"
              >
                YES → Abbreviated 510(k)
              </button>
              <button
                onClick={() => handleAnswer('Guidance/standard available?', 'No', 'result', '510k-traditional')}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
              >
                NO → Traditional 510(k)
              </button>
            </div>
          </div>
        )}

        {step !== 'diagram' && step !== 'result' && (
          <button
            onClick={reset}
            className="mt-4 text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Start Over
          </button>
        )}
      </div>

      {/* Result Display */}
      {step === 'result' && result && (
        <div className="space-y-6">
          {/* Result Banner */}
          <div className={`p-6 rounded-lg border-2 ${
            result.color === 'green' ? 'bg-green-50 border-green-300' :
            result.color === 'blue' ? 'bg-blue-50 border-blue-300' :
            result.color === 'cyan' ? 'bg-cyan-50 border-cyan-300' :
            result.color === 'purple' ? 'bg-purple-50 border-purple-300' :
            result.color === 'red' ? 'bg-red-50 border-red-300' :
            result.color === 'orange' ? 'bg-orange-50 border-orange-300' :
            result.color === 'teal' ? 'bg-teal-50 border-teal-300' :
            'bg-gray-50 border-gray-300'
          }`}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{result.pathway}</h3>
                <p className="text-gray-600">{result.fullName}</p>
                <p className="text-gray-700 mt-2">{result.description}</p>
              </div>
              <Scale className={`w-12 h-12 ${
                result.color === 'green' ? 'text-green-600' :
                result.color === 'blue' ? 'text-blue-600' :
                result.color === 'purple' ? 'text-purple-600' :
                result.color === 'red' ? 'text-red-600' :
                'text-gray-600'
              }`} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded-lg">
                <p className="text-sm font-medium text-gray-600">Timeline</p>
                <p className="text-lg font-bold text-gray-900">{result.timeline}</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-sm font-medium text-gray-600">User Fee</p>
                <p className="text-lg font-bold text-gray-900">{result.userFee}</p>
              </div>
            </div>
          </div>

          {/* When to Use */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">When to Use This Pathway</h4>
            <ul className="space-y-2">
              {result.whenToUse.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Submission Requirements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {result.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages & Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-green-900 mb-3">Advantages</h4>
              <ul className="space-y-2">
                {result.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-green-800">
                    <span className="text-green-600">✓</span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-yellow-900 mb-3">Limitations</h4>
              <ul className="space-y-2">
                {result.limitations.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-yellow-800">
                    <span className="text-yellow-600">!</span>
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={reset}
            className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Assess Another Device
          </button>
        </div>
      )}

      {/* All Pathways Reference */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">All FDA Premarket Pathways</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(PATHWAY_DATA).map(([key, pathway]) => (
            <div
              key={key}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                selectedPathway === key ? 'ring-2 ring-blue-400' : ''
              } ${
                pathway.color === 'green' ? 'bg-green-50 border-green-200' :
                pathway.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                pathway.color === 'cyan' ? 'bg-cyan-50 border-cyan-200' :
                pathway.color === 'purple' ? 'bg-purple-50 border-purple-200' :
                pathway.color === 'red' ? 'bg-red-50 border-red-200' :
                pathway.color === 'orange' ? 'bg-orange-50 border-orange-200' :
                pathway.color === 'teal' ? 'bg-teal-50 border-teal-200' :
                'bg-gray-50 border-gray-200'
              }`}
              onClick={() => {
                setSelectedPathway(key as PathwayType);
                setStep('result');
              }}
            >
              <p className="font-bold text-sm text-gray-900">{pathway.pathway}</p>
              <p className="text-xs text-gray-600 mt-1">{pathway.timeline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-700">Important Disclaimer</p>
            <p className="text-xs text-gray-600 mt-1">
              This tool provides preliminary guidance only. FDA has final authority on pathway requirements. 
              Pre-Submission (Q-Sub) meetings with FDA are recommended for novel or complex devices. 
              User fees are approximate and subject to change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
