'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, AlertTriangle, Info, CheckCircle, RotateCcw, FileText, Scale, ArrowRight, ExternalLink, Beaker } from 'lucide-react';

type PathwayType =
  // 510(k) Variants
  | '510k-traditional'
  | '510k-special'
  | '510k-abbreviated'
  | '510k-safety-performance'
  // Novel Device Pathways
  | 'de-novo'
  | 'pma'
  | 'pma-supplement'
  // Special Pathways
  | 'hde'
  | 'exempt'
  | 'eua'
  | 'breakthrough'
  | 'custom-device'
  | 'pdp'
  // Investigational (21 CFR 812)
  | 'ide-sr'
  | 'ide-nsr'
  | 'ide-exempt';

type PathwayCategory = 'premarket' | 'special' | 'investigational';

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
  // Clinical evidence fields
  category: PathwayCategory;
  clinicalDataRequired: 'never' | 'sometimes' | 'usually' | 'always';
  regulation?: string;
  fdaLink?: string;
}

const PATHWAY_DATA: Record<PathwayType, PathwayResult> = {
  '510k-traditional': {
    pathway: 'Traditional 510(k)',
    fullName: 'Traditional Premarket Notification',
    color: 'green',
    category: 'premarket',
    clinicalDataRequired: 'sometimes',
    regulation: '21 CFR 807 Subpart E',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k',
    description: 'Standard 510(k) submission demonstrating substantial equivalence to a predicate device.',
    timeline: '90-180 days (FDA goal: 90 days)',
    userFee: '~$22,500 (FY2025)',
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
      'Clinical data (if needed - ~10-15% of submissions)',
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
    category: 'premarket',
    clinicalDataRequired: 'never',
    regulation: '21 CFR 807 Subpart E',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-notification-510k/special-510k-program',
    description: 'Expedited review for modifications to your own legally marketed device with design controls.',
    timeline: '30 days (FDA goal)',
    userFee: '~$22,500 (FY2025)',
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
    category: 'premarket',
    clinicalDataRequired: 'never',
    regulation: '21 CFR 807 Subpart E',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-notification-510k/abbreviated-510k-program',
    description: 'Relies on FDA guidance, special controls, or recognized standards for substantial equivalence.',
    timeline: '60-90 days',
    userFee: '~$22,500 (FY2025)',
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
  '510k-safety-performance': {
    pathway: 'Safety & Performance Based 510(k)',
    fullName: 'Safety and Performance Based Pathway',
    color: 'emerald',
    category: 'premarket',
    clinicalDataRequired: 'never',
    regulation: '21 CFR 807 Subpart E',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-notification-510k/safety-and-performance-based-pathway',
    description: 'Uses FDA-identified performance criteria to demonstrate substantial equivalence without direct predicate comparison.',
    timeline: '60-90 days',
    userFee: '~$22,500 (FY2025)',
    whenToUse: [
      'FDA has published performance criteria for device type',
      'Device meets all identified performance criteria',
      'Want to avoid direct predicate testing comparison',
    ],
    requirements: [
      'Performance testing to FDA criteria',
      'Declaration of meeting all criteria',
      'Device description',
      'Labeling',
    ],
    advantages: [
      'No need for head-to-head predicate testing',
      'Clear performance benchmarks',
      'Potentially faster review',
    ],
    limitations: [
      'Only available for specific device types',
      'Must meet ALL FDA criteria',
      'Limited device coverage currently',
    ],
  },
  'de-novo': {
    pathway: 'De Novo',
    fullName: 'De Novo Classification Request',
    color: 'purple',
    category: 'premarket',
    clinicalDataRequired: 'sometimes',
    regulation: '21 CFR 860',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/de-novo-classification-request',
    description: 'Classification pathway for novel devices with no predicate that are low-to-moderate risk.',
    timeline: '150 days (FDA goal)',
    userFee: '~$140,000 (FY2025)',
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
    category: 'premarket',
    clinicalDataRequired: 'always',
    regulation: '21 CFR 814',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-approval-pma',
    description: 'Most stringent pathway for Class III devices requiring clinical evidence of safety and effectiveness.',
    timeline: '180 days FDA review + clinical trial time (often 1-5 years total)',
    userFee: '~$445,000 (FY2025)',
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
    category: 'premarket',
    clinicalDataRequired: 'sometimes',
    regulation: '21 CFR 814',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-approval-pma/pma-supplements-and-amendments',
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
    category: 'special',
    clinicalDataRequired: 'never',
    regulation: '21 CFR 814 Subpart H',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/humanitarian-device-exemption',
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
    category: 'premarket',
    clinicalDataRequired: 'never',
    regulation: '21 CFR 862-892',
    fdaLink: 'https://www.fda.gov/medical-devices/classify-your-medical-device/class-i-and-class-ii-medical-device-exemptions-510k-and-gmp-requirements',
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
  'eua': {
    pathway: 'EUA',
    fullName: 'Emergency Use Authorization',
    color: 'rose',
    category: 'special',
    clinicalDataRequired: 'sometimes',
    regulation: '21 USC 360bbb-3',
    fdaLink: 'https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/emergency-use-authorization',
    description: 'Allows use of unapproved medical products during declared public health emergencies.',
    timeline: 'Variable (days to weeks during emergency)',
    userFee: 'None',
    whenToUse: [
      'Public health emergency declared by HHS Secretary',
      'No adequate approved alternatives available',
      'Known/potential benefits outweigh risks',
      'Temporary authorization needed',
    ],
    requirements: [
      'Emergency declaration in effect',
      'Safety and effectiveness evidence (may be limited)',
      'Risk-benefit analysis',
      'Conditions of authorization',
      'Fact sheets for HCPs and patients',
    ],
    advantages: [
      'Rapid pathway during emergencies',
      'No user fees',
      'Enables critical device access',
    ],
    limitations: [
      'Only during declared emergencies',
      'Temporary authorization',
      'Must transition to standard pathway post-emergency',
    ],
  },
  'breakthrough': {
    pathway: 'Breakthrough Designation',
    fullName: 'Breakthrough Devices Program',
    color: 'amber',
    category: 'special',
    clinicalDataRequired: 'usually',
    regulation: '21 USC 360e-3',
    fdaLink: 'https://www.fda.gov/medical-devices/how-study-and-market-your-device/breakthrough-devices-program',
    description: 'Expedited development and review for devices providing more effective treatment of life-threatening conditions.',
    timeline: 'Uses underlying pathway (510(k), De Novo, PMA) with priority review',
    userFee: 'Same as underlying pathway',
    whenToUse: [
      'Device for life-threatening/irreversibly debilitating condition',
      'Provides breakthrough technology OR',
      'No approved alternatives exist OR',
      'Significant advantages over existing options',
    ],
    requirements: [
      'Breakthrough designation request',
      'Evidence of breakthrough criteria',
      'Underlying submission (510(k), De Novo, or PMA)',
      'Enhanced sponsor-FDA communication',
    ],
    advantages: [
      'Priority review',
      'Interactive communication with FDA',
      'Senior management involvement',
      'Flexible clinical trial design',
    ],
    limitations: [
      'Not a separate approval pathway',
      'Must still meet approval standard',
      'Designation does not guarantee approval',
    ],
  },
  'custom-device': {
    pathway: 'Custom Device',
    fullName: 'Custom Device Exemption',
    color: 'slate',
    category: 'special',
    clinicalDataRequired: 'never',
    regulation: '21 CFR 812.3(b)',
    fdaLink: 'https://www.fda.gov/medical-devices/classify-your-medical-device/custom-device-exemption',
    description: 'Exemption for devices made to order for individual patients (≤5 units per year).',
    timeline: 'No FDA review required',
    userFee: 'None',
    whenToUse: [
      'Device created for individual patient needs',
      'Based on physician/dentist order',
      'No more than 5 units per year of that type',
      'Not generally available in finished form',
    ],
    requirements: [
      'Physician/dentist order for specific patient',
      'Device meets individual patient needs',
      'Labeling with custom device statement',
      'Annual report to FDA',
      'Design specifications maintained',
    ],
    advantages: [
      'No premarket submission',
      'No user fees',
      'Enables patient-specific solutions',
    ],
    limitations: [
      'Maximum 5 units per year',
      'Cannot be generally marketed',
      'Must be for individual patient',
    ],
  },
  'pdp': {
    pathway: 'PDP',
    fullName: 'Product Development Protocol',
    color: 'indigo',
    category: 'premarket',
    clinicalDataRequired: 'always',
    regulation: '21 CFR 814 Subpart C',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-approval-pma/product-development-protocol-pdp',
    description: 'Alternative PMA pathway with early FDA agreement on development activities for well-understood device types.',
    timeline: 'Similar to PMA (1-5 years)',
    userFee: '~$445,000 (FY2025)',
    whenToUse: [
      'Class III device',
      'Well-understood device type',
      'Want early FDA agreement on requirements',
      'Willing to commit to specific development plan',
    ],
    requirements: [
      'Protocol agreement with FDA',
      'Specified design and development activities',
      'Progress reports',
      'Declaration of completion',
      'Data as specified in protocol',
    ],
    advantages: [
      'Early agreement on requirements',
      'Reduced uncertainty',
      'Declaration of completion vs. approval decision',
    ],
    limitations: [
      'Must adhere strictly to protocol',
      'Limited flexibility once agreed',
      'Rarely used pathway',
    ],
  },
  'ide-sr': {
    pathway: 'IDE (Significant Risk)',
    fullName: 'Investigational Device Exemption - Significant Risk',
    color: 'red',
    category: 'investigational',
    clinicalDataRequired: 'always',
    regulation: '21 CFR 812',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/investigational-device-exemption-ide',
    description: 'Allows clinical investigation of significant risk devices. Requires FDA and IRB approval.',
    timeline: '30 days FDA review + study duration',
    userFee: 'None',
    whenToUse: [
      'Clinical study of unapproved device needed',
      'Device is an implant, OR',
      'Device is life-sustaining/supporting, OR',
      'Device of substantial importance in diagnosis/treatment, OR',
      'Device presents potential for serious risk',
    ],
    requirements: [
      'IDE application to FDA',
      'IRB approval',
      'Informed consent',
      'Sponsor responsibilities (21 CFR 812.40)',
      'Investigator responsibilities (21 CFR 812.100)',
      'Monitoring and reporting',
      'Adverse event reporting within 10 days',
    ],
    advantages: [
      'Enables clinical studies for high-risk devices',
      'Clear regulatory framework',
      'Data supports PMA submission',
    ],
    limitations: [
      'Requires FDA approval before starting',
      'Ongoing reporting requirements',
      'Subject to FDA inspection',
    ],
  },
  'ide-nsr': {
    pathway: 'IDE (Nonsignificant Risk)',
    fullName: 'Investigational Device Exemption - Nonsignificant Risk',
    color: 'yellow',
    category: 'investigational',
    clinicalDataRequired: 'always',
    regulation: '21 CFR 812.2(b)',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/investigational-device-exemption-ide',
    description: 'Clinical investigation of nonsignificant risk devices. IRB approval only - no FDA submission required.',
    timeline: 'IRB approval + study duration',
    userFee: 'None',
    whenToUse: [
      'Device does not meet significant risk criteria',
      'Not an implant',
      'Not life-sustaining/supporting',
      'Does not present potential for serious risk',
      'Sponsor determines NSR with IRB concurrence',
    ],
    requirements: [
      'Sponsor NSR determination',
      'IRB approval and concurrence with NSR',
      'Informed consent',
      'Abbreviated IDE requirements (812.2(b))',
      'Labeling requirements',
      'Records and reports',
    ],
    advantages: [
      'No FDA IDE application required',
      'Faster study initiation',
      'Lower regulatory burden',
    ],
    limitations: [
      'IRB may disagree with NSR determination',
      'If IRB deems SR, must submit IDE to FDA',
      'Still subject to informed consent requirements',
    ],
  },
  'ide-exempt': {
    pathway: 'IDE Exempt',
    fullName: 'Investigational Device Exemption - Exempt Study',
    color: 'gray',
    category: 'investigational',
    clinicalDataRequired: 'sometimes',
    regulation: '21 CFR 812.2(c)',
    fdaLink: 'https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/investigational-device-exemption-ide',
    description: 'Studies exempt from IDE requirements, including legally marketed devices and certain diagnostic studies.',
    timeline: 'IRB approval + study duration',
    userFee: 'None',
    whenToUse: [
      'Legally marketed device used per approved labeling',
      'Diagnostic device meeting 812.2(c)(3) criteria',
      'Consumer preference testing (no safety/efficacy claims)',
      'Device under veterinary use',
    ],
    requirements: [
      'IRB approval still required',
      'Informed consent still required',
      'IVD exemption: noninvasive, no significant risk sampling',
      'Must not introduce energy into subject',
    ],
    advantages: [
      'No IDE submission required',
      'Minimal regulatory requirements',
      'Enables data collection on marketed devices',
    ],
    limitations: [
      'Limited to specific exemption criteria',
      'IRB and informed consent still apply',
      'Cannot make therapeutic claims in exempt studies',
    ],
  },
};

// Mobile Card Flow Component for vertical scrollable decision flow
interface MobileCardFlowProps {
  step: string;
  setStep: (step: 'diagram' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'q7' | 'clinical-warning' | 'result') => void;
  handleAnswer: (question: string, answer: string, nextStep: 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'q7' | 'clinical-warning' | 'result', pathway?: PathwayType) => void;
  handleAnswerWithWarning: (question: string, answer: string, nextStep: 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'q7' | 'clinical-warning' | 'result', pathway?: PathwayType, triggerWarning?: boolean) => void;
  answers: Record<string, string>;
}

function MobileCardFlow({ step, setStep, handleAnswer, handleAnswerWithWarning, answers }: MobileCardFlowProps) {
  const steps = [
    { id: 'q1', title: 'Predicate Device', question: 'Does a legally marketed predicate device exist?' },
    { id: 'q2', title: 'Device Class', question: 'What is the risk classification of your novel device?' },
    { id: 'q3', title: 'Rare Disease', question: 'Is the device for a rare condition (≤8,000 patients/year)?' },
    { id: 'q4', title: 'Own Device Modification', question: 'Are you modifying your own previously cleared device?' },
    { id: 'q5', title: 'FDA Guidance', question: 'Is there FDA guidance or recognized standard?' },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === step);

  return (
    <div className="space-y-4">
      {/* Progress indicator */}
      {step !== 'diagram' && step !== 'result' && step !== 'clinical-warning' && (
        <div className="flex items-center gap-2 mb-4">
          {steps.map((s, idx) => (
            <div
              key={s.id}
              className={`flex-1 h-2 rounded-full ${idx < currentStepIndex ? 'bg-green-500' :
                idx === currentStepIndex ? 'bg-blue-500' :
                  'bg-gray-200'
                }`}
            />
          ))}
        </div>
      )}

      {step === 'diagram' && (
        <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h4 className="text-lg font-bold text-blue-900 mb-2">FDA Regulatory Pathway Assessment</h4>
          <p className="text-blue-700 mb-4">Answer a few questions to determine the appropriate FDA submission pathway.</p>
          <button
            onClick={() => setStep('q1')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium w-full"
          >
            Start Assessment
          </button>
        </div>
      )}

      {step === 'q1' && (
        <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
          <div className="text-xs text-yellow-600 font-semibold mb-1">STEP 1 OF 5</div>
          <h4 className="font-bold text-yellow-900 mb-2">Predicate Device</h4>
          <p className="text-yellow-800 mb-4">Does a legally marketed predicate device exist for your device?</p>
          <div className="space-y-2">
            <button
              onClick={() => handleAnswer('Predicate exists?', 'Yes', 'q4')}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
            >
              YES - Predicate exists
            </button>
            <button
              onClick={() => handleAnswerWithWarning('Predicate exists?', 'No - Novel device', 'clinical-warning', undefined, true)}
              className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
            >
              NO - Novel device
            </button>
          </div>
        </div>
      )}

      {step === 'q2' && (
        <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
          <div className="text-xs text-yellow-600 font-semibold mb-1">STEP 2 OF 5</div>
          <h4 className="font-bold text-yellow-900 mb-2">Device Class</h4>
          <p className="text-yellow-800 mb-4">What is the risk classification of your novel device?</p>
          <div className="space-y-2">
            <button
              onClick={() => handleAnswer('Device Class?', 'Class III', 'result', 'pma')}
              className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
            >
              Class III - High Risk (PMA)
            </button>
            <button
              onClick={() => handleAnswer('Device Class?', 'Class II', 'q3')}
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
            >
              Class II - Moderate Risk
            </button>
            <button
              onClick={() => handleAnswer('Device Class?', 'Class I', 'result', 'exempt')}
              className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium"
            >
              Class I - Low Risk (Check Exempt)
            </button>
          </div>
        </div>
      )}

      {step === 'q3' && (
        <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
          <div className="text-xs text-yellow-600 font-semibold mb-1">STEP 3 OF 5</div>
          <h4 className="font-bold text-yellow-900 mb-2">Rare Disease</h4>
          <p className="text-yellow-800 mb-4">Is the device intended to treat a rare disease or condition (≤8,000 patients/year)?</p>
          <div className="space-y-2">
            <button
              onClick={() => handleAnswer('Rare condition?', 'Yes', 'result', 'hde')}
              className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium"
            >
              YES - Rare condition (HDE)
            </button>
            <button
              onClick={() => handleAnswer('Rare condition?', 'No', 'result', 'de-novo')}
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
            >
              NO - Not rare (De Novo)
            </button>
          </div>
        </div>
      )}

      {step === 'q4' && (
        <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
          <div className="text-xs text-yellow-600 font-semibold mb-1">STEP 2 OF 5</div>
          <h4 className="font-bold text-yellow-900 mb-2">Own Device Modification</h4>
          <p className="text-yellow-800 mb-4">Are you modifying your own previously cleared device?</p>
          <div className="space-y-2">
            <button
              onClick={() => handleAnswer('Own device?', 'Yes', 'result', '510k-special')}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              YES - Own device (Special 510(k))
            </button>
            <button
              onClick={() => handleAnswer('Own device?', 'No', 'q5')}
              className="w-full py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-medium"
            >
              NO - Different manufacturer
            </button>
          </div>
        </div>
      )}

      {step === 'q5' && (
        <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
          <div className="text-xs text-yellow-600 font-semibold mb-1">STEP 3 OF 5</div>
          <h4 className="font-bold text-yellow-900 mb-2">FDA Guidance</h4>
          <p className="text-yellow-800 mb-4">Is there an FDA-recognized guidance or standard for this device type?</p>
          <div className="space-y-2">
            <button
              onClick={() => handleAnswer('Guidance exists?', 'Yes', 'result', '510k-abbreviated')}
              className="w-full py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-medium"
            >
              YES - Abbreviated 510(k)
            </button>
            <button
              onClick={() => handleAnswer('Guidance exists?', 'No', 'result', '510k-traditional')}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
            >
              NO - Traditional 510(k)
            </button>
          </div>
        </div>
      )}

      {/* Show answered questions summary */}
      {Object.keys(answers).length > 0 && step !== 'diagram' && step !== 'result' && (
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 font-semibold mb-2">Your Answers:</p>
          {Object.entries(answers).map(([q, a]) => (
            <div key={q} className="text-sm text-gray-700">
              <span className="font-medium">{q}</span> {a}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function RegulatoryPathwayTool() {
  const [step, setStep] = useState<'diagram' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'q7' | 'clinical-warning' | 'result'>('diagram');
  const [selectedPathway, setSelectedPathway] = useState<PathwayType | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showClinicalWarning, setShowClinicalWarning] = useState(false);

  // Mobile detection and view mode
  const [isMobile, setIsMobile] = useState(false);
  const [mobileViewMode, setMobileViewMode] = useState<'zoom' | 'cards'>('zoom');

  // Detect mobile and load saved preference
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Load saved preference
    const savedMode = localStorage.getItem('pathwayViewMode');
    if (savedMode === 'zoom' || savedMode === 'cards') {
      setMobileViewMode(savedMode);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Save view mode preference
  const handleViewModeChange = (mode: 'zoom' | 'cards') => {
    setMobileViewMode(mode);
    localStorage.setItem('pathwayViewMode', mode);
  };

  const result = selectedPathway ? PATHWAY_DATA[selectedPathway] : null;

  // Check if user indicated no predicate exists - trigger clinical warning
  const handleAnswerWithWarning = (question: string, answer: string, nextStep: 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'q7' | 'clinical-warning' | 'result', pathway?: PathwayType, triggerWarning?: boolean) => {
    setAnswers({ ...answers, [question]: answer });
    if (pathway) {
      setSelectedPathway(pathway);
    }
    if (triggerWarning) {
      setShowClinicalWarning(true);
    }
    setStep(nextStep);
  };

  const handleAnswer = (question: string, answer: string, nextStep: 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'q7' | 'clinical-warning' | 'result', pathway?: PathwayType) => {
    handleAnswerWithWarning(question, answer, nextStep, pathway, false);
  };

  const reset = () => {
    setStep('diagram');
    setSelectedPathway(null);
    setAnswers({});
    setShowClinicalWarning(false);
  };

  // Helper function to get color classes for pathway cards
  const getPathwayColorClasses = (color: string): string => {
    switch (color) {
      case 'green': return 'bg-green-50 border-green-200';
      case 'blue': return 'bg-blue-50 border-blue-200';
      case 'cyan': return 'bg-cyan-50 border-cyan-200';
      case 'purple': return 'bg-purple-50 border-purple-200';
      case 'red': return 'bg-red-50 border-red-200';
      case 'orange': return 'bg-orange-50 border-orange-200';
      case 'teal': return 'bg-teal-50 border-teal-200';
      case 'emerald': return 'bg-emerald-50 border-emerald-200';
      case 'rose': return 'bg-rose-50 border-rose-200';
      case 'amber': return 'bg-amber-50 border-amber-200';
      case 'slate': return 'bg-slate-50 border-slate-200';
      case 'indigo': return 'bg-indigo-50 border-indigo-200';
      case 'yellow': return 'bg-yellow-50 border-yellow-200';
      default: return 'bg-gray-50 border-gray-200';
    }
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
      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">FDA Premarket Submission Decision Tree</h3>

        {/* High-Level Overview (shown before assessment starts) */}
        {step === 'diagram' && (
          <div className="space-y-6">
            {/* Overview Diagram */}
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <p className="text-center text-blue-800 mb-4 font-medium">High-Level FDA Regulatory Pathway Overview</p>

              {/* Simple Overview Flow */}
              <div className="flex flex-col items-center gap-3">
                {/* Start */}
                <div className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold text-center">
                  🏥 New Medical Device
                </div>
                <div className="w-0.5 h-6 bg-gray-400" />

                {/* First Split */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="px-4 py-2 bg-amber-100 border-2 border-amber-400 rounded-lg text-amber-900 font-medium text-sm text-center">
                      📋 Clinical Study<br /><span className="text-xs">(IDE Required)</span>
                    </div>
                    <div className="w-0.5 h-4 bg-gray-300" />
                    <div className="flex gap-2 mt-1">
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">SR</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">NSR</span>
                    </div>
                  </div>

                  <div className="text-2xl text-gray-400">or</div>

                  <div className="flex flex-col items-center">
                    <div className="px-4 py-2 bg-green-100 border-2 border-green-400 rounded-lg text-green-900 font-medium text-sm text-center">
                      🛒 Marketing<br /><span className="text-xs">(Clearance/Approval)</span>
                    </div>
                  </div>
                </div>

                <div className="w-0.5 h-4 bg-gray-400" />

                {/* Device Class Split */}
                <div className="text-center text-gray-600 text-sm font-medium mb-2">Device Classification</div>
                <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
                  <div className="p-3 bg-green-50 border border-green-300 rounded-lg text-center">
                    <p className="font-bold text-green-800">Class I</p>
                    <p className="text-xs text-green-600 mt-1">Low Risk</p>
                    <p className="text-xs text-green-700 mt-1 font-medium">Usually Exempt</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-300 rounded-lg text-center">
                    <p className="font-bold text-blue-800">Class II</p>
                    <p className="text-xs text-blue-600 mt-1">Moderate Risk</p>
                    <p className="text-xs text-blue-700 mt-1 font-medium">510(k) / De Novo</p>
                  </div>
                  <div className="p-3 bg-red-50 border border-red-300 rounded-lg text-center">
                    <p className="font-bold text-red-800">Class III</p>
                    <p className="text-xs text-red-600 mt-1">High Risk</p>
                    <p className="text-xs text-red-700 mt-1 font-medium">PMA Required</p>
                  </div>
                </div>

                <div className="w-0.5 h-4 bg-gray-400" />

                {/* Pathway Results */}
                <div className="text-center text-gray-600 text-sm font-medium mb-2">Possible Pathways</div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">510(k)</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">De Novo</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">PMA</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium">HDE</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Exempt</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-200 border border-green-500 rounded" />
                <span className="text-xs text-gray-700">510(k) Pathways</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-200 border border-purple-500 rounded" />
                <span className="text-xs text-gray-700">De Novo / Novel</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-200 border border-red-500 rounded" />
                <span className="text-xs text-gray-700">PMA (Class III)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-amber-200 border border-amber-500 rounded" />
                <span className="text-xs text-gray-700">IDE (Clinical)</span>
              </div>
            </div>

            {/* Class I Explanation */}
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2">Understanding Class I Devices</h4>
              <p className="text-sm text-green-800 mb-3">
                Class I devices are low-risk and subject to General Controls only. Most are <strong>exempt from 510(k)</strong> premarket notification.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="p-2 bg-white rounded border border-green-200">
                  <p className="font-medium text-green-800">510(k) Exemption</p>
                  <p className="text-xs text-green-700 mt-1">~75% of Class I devices exempt from premarket notification (check 21 CFR 862-892)</p>
                </div>
                <div className="p-2 bg-white rounded border border-green-200">
                  <p className="font-medium text-green-800">QSR Exemption</p>
                  <p className="text-xs text-green-700 mt-1">Many Class I also exempt from full QSR (21 CFR 820), but must follow general controls</p>
                </div>
              </div>
            </div>

            {/* Start Button */}
            <div className="text-center">
              <button
                onClick={() => setStep('q1')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
              >
                Start Pathway Assessment
              </button>
              <p className="text-sm text-gray-500 mt-2">Answer questions to find your specific pathway</p>
            </div>
          </div>
        )}

        {/* Progressive Assessment Flow (shown during assessment) */}
        {step !== 'diagram' && step !== 'result' && (
          <div className="mb-6">
            {/* Path History */}
            <div className="flex flex-col items-center mb-4">
              {/* Starting node */}
              <div className="px-4 py-2 bg-blue-100 border border-blue-300 rounded-lg text-blue-800 text-sm font-medium">
                🏥 New Medical Device
              </div>

              {/* Answered questions shown as path */}
              {Object.entries(answers).map(([question, answer]) => (
                <div key={question} className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-green-400" />
                  <div className="px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-center max-w-xs">
                    <p className="text-xs text-gray-500">{question}</p>
                    <p className="text-sm font-bold text-green-700">{answer}</p>
                  </div>
                </div>
              ))}

              {/* Current question indicator */}
              <div className="w-0.5 h-6 bg-amber-400" />
              <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse" />
            </div>
          </div>
        )}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
          </marker>
        </defs>

        {/* ===== LEGEND ===== */}
        <rect x="10" y="10" width="180" height="100" rx="4" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="20" y="28" className="text-[10px] font-bold" fill="#374151">LEGEND</text>
        <rect x="20" y="38" width="12" height="12" fill="#dcfce7" stroke="#16a34a" />
        <text x="38" y="48" className="text-[9px]" fill="#374151">510(k) Pathways</text>
        <rect x="20" y="54" width="12" height="12" fill="#f3e8ff" stroke="#9333ea" />
        <text x="38" y="64" className="text-[9px]" fill="#374151">De Novo / Novel</text>
        <rect x="20" y="70" width="12" height="12" fill="#fecaca" stroke="#dc2626" />
        <text x="38" y="80" className="text-[9px]" fill="#374151">PMA (Class III)</text>
        <rect x="20" y="86" width="12" height="12" fill="#fef3c7" stroke="#f59e0b" />
        <text x="38" y="96" className="text-[9px]" fill="#374151">IDE (Clinical Study)</text>

        {/* ===== START NODE ===== */}
        <rect x="450" y="10" width="200" height="45" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
        <text x="550" y="28" textAnchor="middle" className="text-sm font-bold" fill="#0369a1">NEW MEDICAL DEVICE</text>
        <text x="550" y="43" textAnchor="middle" className="text-[10px]" fill="#0369a1">What is your objective?</text>

        {/* Arrow down from start */}
        <line x1="550" y1="55" x2="550" y2="80" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* ===== Q1: PURPOSE - CLINICAL STUDY OR MARKETING ===== */}
        <polygon
          points="550,85 680,130 550,175 420,130"
          fill={step === 'q1' ? '#fef3c7' : '#f3f4f6'}
          stroke={step === 'q1' ? '#f59e0b' : '#9ca3af'}
          strokeWidth="2"
        />
        <text x="550" y="125" textAnchor="middle" className="text-xs" fill="#374151">
          <tspan x="550" dy="0">Clinical Study</tspan>
          <tspan x="550" dy="12">or Marketing?</tspan>
        </text>

        {/* ===== LEFT BRANCH: CLINICAL STUDY (IDE) ===== */}
        <line x1="420" y1="130" x2="200" y2="130" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="310" y="120" textAnchor="middle" className="text-xs font-bold" fill="#f59e0b">CLINICAL STUDY</text>

        {/* IDE Branch Box */}
        <rect x="50" y="110" width="150" height="40" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <text x="125" y="127" textAnchor="middle" className="text-xs font-bold" fill="#b45309">IDE REQUIRED</text>
        <text x="125" y="140" textAnchor="middle" className="text-[10px]" fill="#b45309">21 CFR 812</text>

        {/* Arrow down to SR/NSR determination */}
        <line x1="125" y1="150" x2="125" y2="180" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* SR/NSR Decision Diamond */}
        <polygon
          points="125,185 200,220 125,255 50,220"
          fill={step === 'q6' ? '#fef3c7' : '#f3f4f6'}
          stroke={step === 'q6' ? '#f59e0b' : '#9ca3af'}
          strokeWidth="2"
        />
        <text x="125" y="215" textAnchor="middle" className="text-[10px]" fill="#374151">
          <tspan x="125" dy="0">Significant</tspan>
          <tspan x="125" dy="11">Risk?</tspan>
        </text>

        {/* IDE-SR (Significant Risk) */}
        <line x1="50" y1="220" x2="50" y2="290" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="60" y="255" className="text-[10px] font-bold" fill="#dc2626">YES</text>
        <rect x="10" y="295" width="100" height="50" rx="6" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
        <text x="60" y="315" textAnchor="middle" className="text-xs font-bold" fill="#b91c1c">IDE-SR</text>
        <text x="60" y="328" textAnchor="middle" className="text-[9px]" fill="#b91c1c">FDA + IRB approval</text>
        <text x="60" y="339" textAnchor="middle" className="text-[9px]" fill="#b91c1c">30-day review</text>

        {/* IDE-NSR (Non-Significant Risk) */}
        <line x1="200" y1="220" x2="200" y2="290" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="210" y="255" className="text-[10px] font-bold" fill="#16a34a">NO</text>
        <rect x="145" y="295" width="110" height="50" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
        <text x="200" y="315" textAnchor="middle" className="text-xs font-bold" fill="#a16207">IDE-NSR</text>
        <text x="200" y="328" textAnchor="middle" className="text-[9px]" fill="#a16207">IRB only</text>
        <text x="200" y="339" textAnchor="middle" className="text-[9px]" fill="#a16207">No FDA submission</text>

        {/* IDE-Exempt note */}
        <rect x="60" y="360" width="190" height="30" rx="4" fill="#f3f4f6" stroke="#9ca3af" strokeDasharray="4" />
        <text x="155" y="380" textAnchor="middle" className="text-[9px]" fill="#6b7280">Also check: IDE Exempt (812.2(c))</text>

        {/* ===== RIGHT BRANCH: MARKETING (Main Flow) ===== */}
        <line x1="550" y1="175" x2="550" y2="210" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="565" y="195" className="text-xs font-bold" fill="#2563eb">MARKETING</text>

        {/* ===== Q2: PREDICATE EXISTS? ===== */}
        <polygon
          points="550,215 680,260 550,305 420,260"
          fill={step === 'q1' || step === 'clinical-warning' ? '#fef3c7' : '#f3f4f6'}
          stroke={step === 'q1' || step === 'clinical-warning' ? '#f59e0b' : '#9ca3af'}
          strokeWidth="2"
        />
        <text x="550" y="255" textAnchor="middle" className="text-xs" fill="#374151">
          <tspan x="550" dy="0">Predicate</tspan>
          <tspan x="550" dy="12">device exists?</tspan>
        </text>

        {/* ===== LEFT: NO PREDICATE (Novel Device) ===== */}
        <line x1="420" y1="260" x2="280" y2="260" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="350" y="250" textAnchor="middle" className="text-xs font-bold" fill="#dc2626">NO - NOVEL</text>

        {/* Novel Device - Risk Assessment */}
        <polygon
          points="280,260 345,295 280,330 215,295"
          fill={step === 'q2' ? '#fef3c7' : '#f3f4f6'}
          stroke={step === 'q2' ? '#f59e0b' : '#9ca3af'}
          strokeWidth="2"
        />
        <text x="280" y="292" textAnchor="middle" className="text-[10px]" fill="#374151">
          <tspan x="280" dy="0">Device</tspan>
          <tspan x="280" dy="11">Class?</tspan>
        </text>

        {/* Class III - High Risk -> PMA */}
        <line x1="215" y1="295" x2="160" y2="295" stroke="#6b7280" strokeWidth="2" />
        <line x1="160" y1="295" x2="160" y2="400" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="185" y="285" className="text-[10px] font-bold" fill="#dc2626">III</text>
        <rect x="105" y="405" width="110" height="50" rx="6" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
        <text x="160" y="425" textAnchor="middle" className="text-sm font-bold" fill="#b91c1c">PMA</text>
        <text x="160" y="440" textAnchor="middle" className="text-[9px]" fill="#b91c1c">Clinical trials required</text>
        <text x="160" y="450" textAnchor="middle" className="text-[9px]" fill="#b91c1c">~$445K fee</text>

        {/* Class II - Moderate Risk */}
        <line x1="280" y1="330" x2="280" y2="365" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="295" y="350" className="text-[10px] font-bold" fill="#9333ea">II</text>

        {/* Class II - Rare disease check */}
        <polygon
          points="280,370 340,400 280,430 220,400"
          fill={step === 'q3' ? '#fef3c7' : '#f3f4f6'}
          stroke={step === 'q3' ? '#f59e0b' : '#9ca3af'}
          strokeWidth="2"
        />
        <text x="280" y="397" textAnchor="middle" className="text-[10px]" fill="#374151">
          <tspan x="280" dy="0">Rare ≤8k</tspan>
          <tspan x="280" dy="11">pts/yr?</tspan>
        </text>

        {/* HDE for rare */}
        <line x1="220" y1="400" x2="180" y2="400" stroke="#6b7280" strokeWidth="2" />
        <line x1="180" y1="400" x2="180" y2="480" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="195" y="390" className="text-[10px] font-bold" fill="#0d9488">YES</text>
        <rect x="130" y="485" width="100" height="45" rx="6" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
        <text x="180" y="505" textAnchor="middle" className="text-xs font-bold" fill="#0f766e">HDE</text>
        <text x="180" y="518" textAnchor="middle" className="text-[9px]" fill="#0f766e">No user fees</text>

        {/* De Novo */}
        <line x1="280" y1="430" x2="280" y2="485" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="295" y="460" className="text-[10px] font-bold" fill="#9333ea">NO</text>
        <rect x="230" y="485" width="100" height="55" rx="6" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
        <text x="280" y="505" textAnchor="middle" className="text-xs font-bold" fill="#7e22ce">De Novo</text>
        <text x="280" y="518" textAnchor="middle" className="text-[9px]" fill="#7e22ce">Creates new regulation</text>
        <text x="280" y="531" textAnchor="middle" className="text-[9px]" fill="#7e22ce">~$140K fee</text>

        {/* Class I - Low Risk -> Exempt check */}
        <line x1="345" y1="295" x2="380" y2="295" stroke="#6b7280" strokeWidth="2" />
        <line x1="380" y1="295" x2="380" y2="405" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="365" y="285" className="text-[10px] font-bold" fill="#16a34a">I</text>
        <rect x="340" y="410" width="80" height="40" rx="6" fill="#f3f4f6" stroke="#6b7280" strokeWidth="2" />
        <text x="380" y="428" textAnchor="middle" className="text-xs font-bold" fill="#374151">Exempt?</text>
        <text x="380" y="442" textAnchor="middle" className="text-[9px]" fill="#6b7280">Check 21 CFR</text>

        {/* ===== RIGHT: YES PREDICATE (510(k) Path) ===== */}
        <line x1="550" y1="305" x2="550" y2="360" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="565" y="335" className="text-xs font-bold" fill="#16a34a">YES</text>

        {/* 510(k) Type Selection */}
        <rect x="475" y="365" width="150" height="35" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="550" y="387" textAnchor="middle" className="text-xs font-bold" fill="#15803d">510(k) PATHWAY</text>

        {/* Arrow down to 510(k) type question */}
        <line x1="550" y1="400" x2="550" y2="430" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Q4: Own device modification? */}
        <polygon
          points="550,435 650,470 550,505 450,470"
          fill={step === 'q4' ? '#fef3c7' : '#f3f4f6'}
          stroke={step === 'q4' ? '#f59e0b' : '#9ca3af'}
          strokeWidth="2"
        />
        <text x="550" y="467" textAnchor="middle" className="text-[10px]" fill="#374151">
          <tspan x="550" dy="0">Modifying</tspan>
          <tspan x="550" dy="11">own device?</tspan>
        </text>

        {/* Special 510(k) */}
        <line x1="650" y1="470" x2="750" y2="470" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="700" y="460" className="text-[10px] font-bold" fill="#2563eb">YES</text>
        <rect x="755" y="445" width="100" height="50" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="805" y="465" textAnchor="middle" className="text-xs font-bold" fill="#1d4ed8">Special</text>
        <text x="805" y="478" textAnchor="middle" className="text-xs font-bold" fill="#1d4ed8">510(k)</text>
        <text x="805" y="490" textAnchor="middle" className="text-[9px]" fill="#1d4ed8">30 days</text>

        {/* Continue to standard/abbreviated */}
        <line x1="550" y1="505" x2="550" y2="540" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="565" y="525" className="text-[10px] font-bold" fill="#ca8a04">NO</text>

        {/* Q5: Guidance/Standard available? */}
        <polygon
          points="550,545 650,580 550,615 450,580"
          fill={step === 'q5' ? '#fef3c7' : '#f3f4f6'}
          stroke={step === 'q5' ? '#f59e0b' : '#9ca3af'}
          strokeWidth="2"
        />
        <text x="550" y="577" textAnchor="middle" className="text-[10px]" fill="#374151">
          <tspan x="550" dy="0">FDA Guidance/</tspan>
          <tspan x="550" dy="11">Standard?</tspan>
        </text>

        {/* Abbreviated 510(k) */}
        <line x1="650" y1="580" x2="750" y2="580" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="700" y="570" className="text-[10px] font-bold" fill="#0891b2">YES</text>
        <rect x="755" y="555" width="100" height="50" rx="6" fill="#cffafe" stroke="#0891b2" strokeWidth="2" />
        <text x="805" y="575" textAnchor="middle" className="text-xs font-bold" fill="#0e7490">Abbreviated</text>
        <text x="805" y="588" textAnchor="middle" className="text-xs font-bold" fill="#0e7490">510(k)</text>
        <text x="805" y="600" textAnchor="middle" className="text-[9px]" fill="#0e7490">60-90 days</text>

        {/* Traditional 510(k) */}
        <line x1="550" y1="615" x2="550" y2="655" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="565" y="638" className="text-[10px] font-bold" fill="#16a34a">NO</text>
        <rect x="475" y="655" width="150" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="550" y="673" textAnchor="middle" className="text-xs font-bold" fill="#15803d">Traditional 510(k)</text>
        <text x="550" y="688" textAnchor="middle" className="text-[9px]" fill="#15803d">90-180 days • ~$22.5K</text>

        {/* Clinical Warning Note */}
        {showClinicalWarning && (
          <g>
            <rect x="250" y="545" width="180" height="50" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="340" y="565" textAnchor="middle" className="text-[10px] font-bold" fill="#b45309">⚠ Q-Sub Recommended</text>
            <text x="340" y="580" textAnchor="middle" className="text-[9px]" fill="#b45309">Get FDA feedback on</text>
            <text x="340" y="590" textAnchor="middle" className="text-[9px]" fill="#b45309">clinical evidence needs</text>
          </g>
        )}

        {/* Current step indicators */}
        {step === 'q1' && <circle cx="550" cy="130" r="6" fill="#f59e0b"><animate attributeName="r" values="6;9;6" dur="1s" repeatCount="indefinite" /></circle>}
        {step === 'clinical-warning' && <circle cx="550" cy="260" r="6" fill="#f59e0b"><animate attributeName="r" values="6;9;6" dur="1s" repeatCount="indefinite" /></circle>}
        {step === 'q2' && <circle cx="280" cy="295" r="6" fill="#f59e0b"><animate attributeName="r" values="6;9;6" dur="1s" repeatCount="indefinite" /></circle>}
        {step === 'q3' && <circle cx="280" cy="400" r="6" fill="#f59e0b"><animate attributeName="r" values="6;9;6" dur="1s" repeatCount="indefinite" /></circle>}
        {step === 'q4' && <circle cx="550" cy="470" r="6" fill="#f59e0b"><animate attributeName="r" values="6;9;6" dur="1s" repeatCount="indefinite" /></circle>}
        {step === 'q5' && <circle cx="550" cy="580" r="6" fill="#f59e0b"><animate attributeName="r" values="6;9;6" dur="1s" repeatCount="indefinite" /></circle>}
        {step === 'q6' && <circle cx="125" cy="220" r="6" fill="#f59e0b"><animate attributeName="r" values="6;9;6" dur="1s" repeatCount="indefinite" /></circle>}
      </svg>
    </div>
      </div >
        )
}

{/* Interactive Questions */ }
{
  step === 'diagram' && (
    <div className="mt-6 text-center">
      <button
        onClick={() => setStep('q1')}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Start Pathway Assessment
      </button>
    </div>
  )
}

{
  step === 'q1' && (
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
          onClick={() => handleAnswerWithWarning('Predicate exists?', 'No - Novel device', 'clinical-warning', undefined, true)}
          className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
        >
          NO - Novel device
        </button>
      </div>
    </div>
  )
}

{/* Clinical Evidence Precursor Warning - Shows when no predicate exists */ }
{
  step === 'clinical-warning' && (
    <div className="mt-6 space-y-4">
      <div className="p-6 bg-amber-50 border-2 border-amber-400 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-bold text-amber-900 text-lg">
              Clinical Evidence Assessment Required
            </h4>
            <p className="text-amber-800 mt-2">
              Without a predicate device, FDA will require clinical evidence demonstrating safety and effectiveness.
              The level of evidence depends on your device&apos;s risk profile and intended use.
            </p>

            {/* Basic Assessment Overview */}
            <div className="mt-4 p-4 bg-white rounded-lg border border-amber-200">
              <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                <Beaker className="w-4 h-4" />
                Evidence Considerations
              </h5>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  Device risk classification (I, II, III)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  Intended patient population and use environment
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  Duration of use/exposure
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  Available bench and animal study data
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  Similar device performance history
                </li>
              </ul>
            </div>

            {/* Q-Sub Recommendation */}
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h5 className="font-semibold text-blue-900 flex items-center gap-2">
                <Info className="w-4 h-4" />
                Recommended: Pre-Submission (Q-Sub) Meeting
              </h5>
              <p className="text-sm text-blue-800 mt-1">
                For novel devices, FDA strongly recommends submitting a Pre-Submission (Q-Sub) to obtain feedback on:
              </p>
              <ul className="mt-2 text-sm text-blue-800 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Required clinical evidence type and scope
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Appropriate regulatory pathway
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Study design and endpoints
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Acceptance criteria
                </li>
              </ul>
              <a
                href="https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/pre-submissions-and-meetings-medical-device-submissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline text-sm mt-3 inline-flex items-center gap-1"
              >
                Learn more about Q-Sub process
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Contact CTA */}
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                Contact Us for Guidance
              </Link>
              <a
                href="https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-amber-600 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors font-medium inline-flex items-center gap-1"
              >
                FDA Device Advice
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="text-center">
        <button
          onClick={() => setStep('q2')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          I Understand - Continue Assessment
        </button>
      </div>
    </div>
  )
}

{
  step === 'q2' && (
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
  )
}

{
  step === 'q3' && (
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
  )
}

{
  step === 'q4' && (
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
  )
}

{
  step === 'q5' && (
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
  )
}

{
  step !== 'diagram' && step !== 'result' && (
    <button
      onClick={reset}
      className="mt-4 text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
    >
      <RotateCcw className="w-4 h-4" />
      Start Over
    </button>
  )
}
    </div >

  {/* Special Pathways - Now as HTML for better responsiveness */ }
  < div className = "bg-white border border-gray-200 rounded-lg p-4 md:p-6" >
    <h3 className="text-lg font-bold text-gray-900 mb-4">Special Pathways</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
      <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="font-bold text-amber-900 text-sm">Breakthrough</p>
        <p className="text-xs text-amber-700 mt-1">Priority review for life-threatening conditions</p>
      </div>
      <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg">
        <p className="font-bold text-rose-900 text-sm">EUA</p>
        <p className="text-xs text-rose-700 mt-1">Emergency Use Authorization only</p>
      </div>
      <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
        <p className="font-bold text-slate-900 text-sm">Custom Device</p>
        <p className="text-xs text-slate-700 mt-1">≤5 units/year, specific patient</p>
      </div>
      <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
        <p className="font-bold text-indigo-900 text-sm">PDP</p>
        <p className="text-xs text-indigo-700 mt-1">Product Development Protocol</p>
      </div>
      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg col-span-2 md:col-span-1">
        <p className="font-bold text-emerald-900 text-sm">Safety & Perf. 510(k)</p>
        <p className="text-xs text-emerald-700 mt-1">FDA-published criteria pathway</p>
      </div>
    </div>
  </div >

  {/* Result Display */ }
{
  step === 'result' && result && (
    <div className="space-y-6">
      {/* Result Banner */}
      <div className={`p-6 rounded-lg border-2 ${result.color === 'green' ? 'bg-green-50 border-green-300' :
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
          <Scale className={`w-12 h-12 ${result.color === 'green' ? 'text-green-600' :
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
  )
}

{/* All Pathways Reference - Categorized */ }
<div className="bg-white border border-gray-200 rounded-lg p-6">
  <h3 className="text-lg font-bold text-gray-900 mb-4">All FDA Regulatory Pathways</h3>

  {/* Premarket Pathways */}
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Premarket Submission Pathways</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {Object.entries(PATHWAY_DATA)
        .filter(([, pathway]) => pathway.category === 'premarket')
        .map(([key, pathway]) => (
          <div
            key={key}
            className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${selectedPathway === key ? 'ring-2 ring-blue-400' : ''
              } ${getPathwayColorClasses(pathway.color)}`}
            onClick={() => {
              setSelectedPathway(key as PathwayType);
              setStep('result');
            }}
          >
            <p className="font-bold text-sm text-gray-900">{pathway.pathway}</p>
            <p className="text-xs text-gray-600 mt-1">{pathway.timeline}</p>
            <span className={`inline-block mt-2 text-[10px] px-1.5 py-0.5 rounded ${pathway.clinicalDataRequired === 'always' ? 'bg-red-100 text-red-700' :
              pathway.clinicalDataRequired === 'usually' ? 'bg-orange-100 text-orange-700' :
                pathway.clinicalDataRequired === 'sometimes' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
              }`}>
              Clinical: {pathway.clinicalDataRequired}
            </span>
          </div>
        ))}
    </div>
  </div>

  {/* Special Pathways */}
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Special Pathways</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {Object.entries(PATHWAY_DATA)
        .filter(([, pathway]) => pathway.category === 'special')
        .map(([key, pathway]) => (
          <div
            key={key}
            className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${selectedPathway === key ? 'ring-2 ring-blue-400' : ''
              } ${getPathwayColorClasses(pathway.color)}`}
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

  {/* Investigational Pathways (21 CFR 812) */}
  <div>
    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Investigational Pathways (21 CFR 812)</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {Object.entries(PATHWAY_DATA)
        .filter(([, pathway]) => pathway.category === 'investigational')
        .map(([key, pathway]) => (
          <div
            key={key}
            className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${selectedPathway === key ? 'ring-2 ring-blue-400' : ''
              } ${getPathwayColorClasses(pathway.color)}`}
            onClick={() => {
              setSelectedPathway(key as PathwayType);
              setStep('result');
            }}
          >
            <p className="font-bold text-sm text-gray-900">{pathway.pathway}</p>
            <p className="text-xs text-gray-600 mt-1">{pathway.timeline}</p>
            {pathway.regulation && (
              <p className="text-[10px] text-gray-500 mt-1">{pathway.regulation}</p>
            )}
          </div>
        ))}
    </div>
  </div>
</div>

{/* Disclaimer */ }
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
    </div >
  );
}
