'use client';

import { useState } from 'react';
import { Download, Search, AlertTriangle, Info, CheckCircle, ExternalLink, Shield, Scale } from 'lucide-react';

// Common medical device product codes with classification data
const DEVICE_DATABASE = [
  // Cardiovascular
  { productCode: 'DXY', deviceName: 'External Defibrillator', class: 'III', panel: 'CV', reviewPanel: 'Cardiovascular', regulationNumber: '870.5300', specialControls: false, premarket: 'PMA' },
  { productCode: 'MRM', deviceName: 'Patient External ECG Electrode', class: 'II', panel: 'CV', reviewPanel: 'Cardiovascular', regulationNumber: '870.2800', specialControls: true, premarket: '510(k)' },
  { productCode: 'DSI', deviceName: 'Electrocardiograph', class: 'II', panel: 'CV', reviewPanel: 'Cardiovascular', regulationNumber: '870.2340', specialControls: true, premarket: '510(k)' },
  { productCode: 'DRT', deviceName: 'Blood Pressure Monitor', class: 'II', panel: 'CV', reviewPanel: 'Cardiovascular', regulationNumber: '870.1130', specialControls: true, premarket: '510(k)' },
  { productCode: 'NIK', deviceName: 'Pulse Oximeter', class: 'II', panel: 'CV', reviewPanel: 'Cardiovascular', regulationNumber: '870.2700', specialControls: true, premarket: '510(k)' },
  
  // General Hospital / Personal Use
  { productCode: 'FRN', deviceName: 'Electronic Thermometer', class: 'II', panel: 'GU', reviewPanel: 'General Hospital', regulationNumber: '880.2910', specialControls: true, premarket: '510(k)' },
  { productCode: 'FLL', deviceName: 'Infrared Thermometer', class: 'II', panel: 'GU', reviewPanel: 'General Hospital', regulationNumber: '880.2910', specialControls: true, premarket: '510(k)' },
  { productCode: 'LMD', deviceName: 'AC-Powered Medical Examination Light', class: 'I', panel: 'GU', reviewPanel: 'General Hospital', regulationNumber: '880.6265', specialControls: false, premarket: 'Exempt' },
  
  // Ophthalmic
  { productCode: 'HQY', deviceName: 'Excimer Laser System for Corneal Surgery', class: 'III', panel: 'OP', reviewPanel: 'Ophthalmic', regulationNumber: '886.4390', specialControls: false, premarket: 'PMA' },
  { productCode: 'NQO', deviceName: 'Retinal Camera', class: 'II', panel: 'OP', reviewPanel: 'Ophthalmic', regulationNumber: '886.1570', specialControls: true, premarket: '510(k)' },
  { productCode: 'MYO', deviceName: 'Contact Lens', class: 'II', panel: 'OP', reviewPanel: 'Ophthalmic', regulationNumber: '886.5916', specialControls: true, premarket: '510(k)' },
  
  // Dental
  { productCode: 'EHA', deviceName: 'Dental Laser for Hard Tissue', class: 'II', panel: 'DE', reviewPanel: 'Dental', regulationNumber: '872.4850', specialControls: true, premarket: '510(k)' },
  { productCode: 'EHB', deviceName: 'Dental Laser for Soft Tissue', class: 'II', panel: 'DE', reviewPanel: 'Dental', regulationNumber: '872.4850', specialControls: true, premarket: '510(k)' },
  
  // Physical Medicine
  { productCode: 'ILY', deviceName: 'Surgical Laser', class: 'II', panel: 'PM', reviewPanel: 'Physical Medicine', regulationNumber: '890.5500', specialControls: true, premarket: '510(k)' },
  { productCode: 'GEX', deviceName: 'TENS Device', class: 'II', panel: 'PM', reviewPanel: 'Physical Medicine', regulationNumber: '890.5850', specialControls: true, premarket: '510(k)' },
  { productCode: 'IKA', deviceName: 'Powered Muscle Stimulator', class: 'II', panel: 'PM', reviewPanel: 'Physical Medicine', regulationNumber: '890.5850', specialControls: true, premarket: '510(k)' },
  
  // Radiology
  { productCode: 'JAK', deviceName: 'X-ray System (General Diagnostic)', class: 'II', panel: 'RA', reviewPanel: 'Radiology', regulationNumber: '892.1680', specialControls: true, premarket: '510(k)' },
  { productCode: 'IYO', deviceName: 'CT Scanner', class: 'II', panel: 'RA', reviewPanel: 'Radiology', regulationNumber: '892.1750', specialControls: true, premarket: '510(k)' },
  { productCode: 'OEH', deviceName: 'Ultrasound System (Diagnostic)', class: 'II', panel: 'RA', reviewPanel: 'Radiology', regulationNumber: '892.1550', specialControls: true, premarket: '510(k)' },
  
  // Clinical Chemistry
  { productCode: 'CFR', deviceName: 'Glucose Test System', class: 'II', panel: 'CH', reviewPanel: 'Clinical Chemistry', regulationNumber: '862.1345', specialControls: true, premarket: '510(k)' },
  { productCode: 'NSI', deviceName: 'Blood Gas Analyzer', class: 'II', panel: 'CH', reviewPanel: 'Clinical Chemistry', regulationNumber: '862.1150', specialControls: true, premarket: '510(k)' },
  
  // Software / Digital Health
  { productCode: 'QAS', deviceName: 'Clinical Decision Support Software (Class II)', class: 'II', panel: 'RA', reviewPanel: 'Radiology', regulationNumber: '892.2050', specialControls: true, premarket: '510(k)' },
  { productCode: 'PVF', deviceName: 'Radiological CAD Software', class: 'II', panel: 'RA', reviewPanel: 'Radiology', regulationNumber: '892.2060', specialControls: true, premarket: '510(k)' },
  
  // Home Use
  { productCode: 'JXF', deviceName: 'Home Use Blood Glucose Monitor', class: 'II', panel: 'CH', reviewPanel: 'Clinical Chemistry', regulationNumber: '862.1345', specialControls: true, premarket: '510(k)' },
  { productCode: 'DQA', deviceName: 'Light Therapy Device (Dermatological)', class: 'II', panel: 'PM', reviewPanel: 'Physical Medicine', regulationNumber: '878.4810', specialControls: true, premarket: '510(k)' },
];

interface DeviceQuestion {
  id: string;
  question: string;
  description: string;
  options: { label: string; value: string; next: string }[];
}

const CLASSIFICATION_QUESTIONS: DeviceQuestion[] = [
  {
    id: 'start',
    question: 'What is the primary function of your device?',
    description: 'Select the category that best describes your device\'s main purpose.',
    options: [
      { label: 'Diagnostic / Monitoring', value: 'diagnostic', next: 'diagnostic-invasive' },
      { label: 'Therapeutic / Treatment', value: 'therapeutic', next: 'therapeutic-type' },
      { label: 'Software Only (SaMD)', value: 'software', next: 'software-function' },
      { label: 'Implantable', value: 'implant', next: 'implant-duration' },
      { label: 'In Vitro Diagnostic (IVD)', value: 'ivd', next: 'ivd-risk' },
    ],
  },
  {
    id: 'diagnostic-invasive',
    question: 'Is the diagnostic device invasive?',
    description: 'Does the device enter the body or contact internal tissue?',
    options: [
      { label: 'Non-invasive (external only)', value: 'non-invasive', next: 'diagnostic-result' },
      { label: 'Minimally invasive (e.g., blood draw, endoscope)', value: 'minimal', next: 'class-ii-likely' },
      { label: 'Invasive (surgically placed)', value: 'invasive', next: 'class-iii-likely' },
    ],
  },
  {
    id: 'diagnostic-result',
    question: 'What happens if the diagnostic result is wrong?',
    description: 'Consider the worst-case scenario of a false positive or false negative.',
    options: [
      { label: 'Minor inconvenience (reschedule test, no treatment impact)', value: 'minor', next: 'class-i-likely' },
      { label: 'Delayed treatment or unnecessary treatment', value: 'moderate', next: 'class-ii-likely' },
      { label: 'Life-threatening condition missed or wrong treatment', value: 'severe', next: 'class-iii-likely' },
    ],
  },
  {
    id: 'therapeutic-type',
    question: 'What type of therapeutic action does the device perform?',
    description: 'Select the category that best matches your device.',
    options: [
      { label: 'Energy delivery (laser, RF, ultrasound)', value: 'energy', next: 'energy-power' },
      { label: 'Drug delivery', value: 'drug', next: 'class-ii-likely' },
      { label: 'Mechanical treatment', value: 'mechanical', next: 'mechanical-risk' },
      { label: 'External support (splints, bandages)', value: 'external', next: 'class-i-likely' },
    ],
  },
  {
    id: 'energy-power',
    question: 'What is the energy/power level of the device?',
    description: 'Consider the therapeutic energy delivered to tissue.',
    options: [
      { label: 'Low power (< 1W, no tissue effect)', value: 'low', next: 'class-ii-likely' },
      { label: 'Medium power (tissue heating, no ablation)', value: 'medium', next: 'class-ii-likely' },
      { label: 'High power (ablation, cutting)', value: 'high', next: 'class-ii-likely' },
      { label: 'Life-sustaining (defibrillator, pacemaker)', value: 'life', next: 'class-iii-likely' },
    ],
  },
  {
    id: 'mechanical-risk',
    question: 'What is the risk if the mechanical device fails?',
    description: 'Consider the worst-case failure scenario.',
    options: [
      { label: 'Minor discomfort', value: 'minor', next: 'class-i-likely' },
      { label: 'Injury requiring medical attention', value: 'moderate', next: 'class-ii-likely' },
      { label: 'Serious injury or death', value: 'severe', next: 'class-iii-likely' },
    ],
  },
  {
    id: 'software-function',
    question: 'What does the software do?',
    description: 'Select the primary function of the software.',
    options: [
      { label: 'Displays/stores data (no clinical decision)', value: 'display', next: 'class-i-likely' },
      { label: 'Provides clinical recommendations', value: 'cds', next: 'cds-independence' },
      { label: 'Controls another medical device', value: 'control', next: 'class-ii-likely' },
      { label: 'AI/ML diagnosis or treatment recommendation', value: 'ai', next: 'ai-risk' },
    ],
  },
  {
    id: 'cds-independence',
    question: 'Can the healthcare provider independently review the basis for the recommendation?',
    description: 'Per FDA guidance, if the HCP can independently review, it may not be a device.',
    options: [
      { label: 'Yes - displays underlying data for HCP review', value: 'yes', next: 'cds-exempt' },
      { label: 'No - "black box" recommendation', value: 'no', next: 'class-ii-likely' },
    ],
  },
  {
    id: 'ai-risk',
    question: 'What is the clinical significance of the AI output?',
    description: 'Consider the impact of an incorrect AI prediction.',
    options: [
      { label: 'Triage / prioritization only', value: 'triage', next: 'class-ii-likely' },
      { label: 'Diagnostic finding (HCP reviews)', value: 'diagnostic', next: 'class-ii-likely' },
      { label: 'Direct treatment recommendation', value: 'treatment', next: 'class-iii-likely' },
    ],
  },
  {
    id: 'implant-duration',
    question: 'How long is the implant intended to remain in the body?',
    description: 'Select the intended duration of implantation.',
    options: [
      { label: 'Transient (< 60 minutes)', value: 'transient', next: 'class-ii-likely' },
      { label: 'Short-term (60 min - 30 days)', value: 'short', next: 'class-ii-likely' },
      { label: 'Long-term (> 30 days)', value: 'long', next: 'implant-function' },
    ],
  },
  {
    id: 'implant-function',
    question: 'Is the implant life-sustaining or life-supporting?',
    description: 'Does the implant replace or support a critical body function?',
    options: [
      { label: 'No - structural or cosmetic', value: 'no', next: 'class-ii-likely' },
      { label: 'Yes - supports critical function', value: 'yes', next: 'class-iii-likely' },
    ],
  },
  {
    id: 'ivd-risk',
    question: 'What is the risk associated with the IVD test?',
    description: 'Consider the clinical context of the test result.',
    options: [
      { label: 'General wellness / non-clinical', value: 'wellness', next: 'class-i-likely' },
      { label: 'Clinical but confirmatory test available', value: 'confirm', next: 'class-ii-likely' },
      { label: 'High-risk disease screening (HIV, cancer)', value: 'high', next: 'class-iii-likely' },
      { label: 'Blood typing / transfusion', value: 'blood', next: 'class-iii-likely' },
    ],
  },
  // Result nodes
  {
    id: 'class-i-likely',
    question: 'Preliminary Assessment: Class I',
    description: 'Based on your responses, your device is likely Class I. Most Class I devices are exempt from 510(k) premarket notification.',
    options: [],
  },
  {
    id: 'class-ii-likely',
    question: 'Preliminary Assessment: Class II',
    description: 'Based on your responses, your device is likely Class II. Most Class II devices require 510(k) premarket notification.',
    options: [],
  },
  {
    id: 'class-iii-likely',
    question: 'Preliminary Assessment: Class III',
    description: 'Based on your responses, your device is likely Class III. Class III devices typically require Premarket Approval (PMA) or may qualify for De Novo classification.',
    options: [],
  },
  {
    id: 'cds-exempt',
    question: 'Preliminary Assessment: May Not Be a Device',
    description: 'Based on your responses, your software may not be considered a medical device under FDA\'s Clinical Decision Support guidance. However, this depends on meeting all criteria in the guidance.',
    options: [],
  },
];

export default function DeviceClassificationTool() {
  const [activeTab, setActiveTab] = useState<'search' | 'wizard'>('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof DEVICE_DATABASE>([]);
  const [selectedDevice, setSelectedDevice] = useState<typeof DEVICE_DATABASE[0] | null>(null);
  
  // Wizard state
  const [currentQuestion, setCurrentQuestion] = useState('start');
  const [answerPath, setAnswerPath] = useState<{ question: string; answer: string }[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const results = DEVICE_DATABASE.filter(device =>
      device.deviceName.toLowerCase().includes(lowerQuery) ||
      device.productCode.toLowerCase().includes(lowerQuery) ||
      device.reviewPanel.toLowerCase().includes(lowerQuery)
    ).slice(0, 10);
    
    setSearchResults(results);
  };

  const currentQ = CLASSIFICATION_QUESTIONS.find(q => q.id === currentQuestion);
  const isResult = currentQuestion.includes('likely') || currentQuestion === 'cds-exempt';

  const handleWizardAnswer = (option: { label: string; value: string; next: string }) => {
    setAnswerPath([...answerPath, { question: currentQ?.question || '', answer: option.label }]);
    setCurrentQuestion(option.next);
  };

  const resetWizard = () => {
    setCurrentQuestion('start');
    setAnswerPath([]);
  };

  const getClassColor = (deviceClass: string) => {
    switch (deviceClass) {
      case 'I': return 'green';
      case 'II': return 'yellow';
      case 'III': return 'red';
      default: return 'gray';
    }
  };

  const exportAssessment = () => {
    const resultQ = CLASSIFICATION_QUESTIONS.find(q => q.id === currentQuestion);
    const report = `FDA DEVICE CLASSIFICATION PRELIMINARY ASSESSMENT
==============================================
Generated: ${new Date().toISOString()}

ASSESSMENT RESULT
-----------------
${resultQ?.question || 'Unknown'}
${resultQ?.description || ''}

DECISION PATH
-------------
${answerPath.map((a, i) => `${i + 1}. ${a.question}
   Answer: ${a.answer}`).join('\n\n')}

NEXT STEPS
----------
1. Search FDA's Device Classification Database for your specific device type
2. Identify predicate devices (for 510(k)) or similar devices
3. Consult FDA guidance documents for your device type
4. Consider pre-submission (Q-Sub) meeting with FDA if classification is unclear

IMPORTANT DISCLAIMERS
--------------------
- This is a preliminary assessment only
- Final classification depends on device-specific factors
- FDA has final authority on device classification
- Consult regulatory professionals for definitive guidance
- Search FDA databases at: https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPCD/classification.cfm

This tool does not constitute regulatory advice.
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `device-classification-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">FDA Device Classification Tool</h2>
          <p className="text-gray-600 mt-1">Determine FDA device class and regulatory pathway</p>
        </div>
        {isResult && (
          <button
            onClick={exportAssessment}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export Assessment
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-4">
          <button
            onClick={() => setActiveTab('search')}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'search'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <Search className="w-4 h-4 inline mr-2" />
            Search Database
          </button>
          <button
            onClick={() => setActiveTab('wizard')}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'wizard'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <Scale className="w-4 h-4 inline mr-2" />
            Classification Wizard
          </button>
        </nav>
      </div>

      {activeTab === 'search' ? (
        <div className="space-y-6">
          {/* Search Box */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search by device name, product code, or review panel..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-4 space-y-2">
                {searchResults.map((device) => (
                  <button
                    key={device.productCode}
                    onClick={() => setSelectedDevice(device)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      selectedDevice?.productCode === device.productCode
                        ? 'border-blue-400 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{device.deviceName}</p>
                        <p className="text-sm text-gray-500">
                          Product Code: {device.productCode} | {device.reviewPanel} Panel
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        device.class === 'I' ? 'bg-green-100 text-green-700' :
                        device.class === 'II' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        Class {device.class}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {searchQuery.length >= 2 && searchResults.length === 0 && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-gray-600">No devices found. Try a different search term.</p>
                <a
                  href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPCD/classification.cfm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1 mt-2"
                >
                  Search FDA Database <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

          {/* Selected Device Details */}
          {selectedDevice && (
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className={`px-6 py-4 ${
                selectedDevice.class === 'I' ? 'bg-green-50 border-b border-green-200' :
                selectedDevice.class === 'II' ? 'bg-yellow-50 border-b border-yellow-200' :
                'bg-red-50 border-b border-red-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedDevice.deviceName}</h3>
                    <p className="text-gray-600">Product Code: {selectedDevice.productCode}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-4 py-2 rounded-full text-lg font-bold ${
                      selectedDevice.class === 'I' ? 'bg-green-100 text-green-700' :
                      selectedDevice.class === 'II' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      Class {selectedDevice.class}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Review Panel</p>
                    <p className="text-gray-900">{selectedDevice.reviewPanel}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Regulation Number</p>
                    <p className="text-gray-900">21 CFR {selectedDevice.regulationNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Premarket Submission</p>
                    <p className={`font-medium ${
                      selectedDevice.premarket === 'Exempt' ? 'text-green-600' :
                      selectedDevice.premarket === '510(k)' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {selectedDevice.premarket}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Special Controls</p>
                    <p className="text-gray-900">{selectedDevice.specialControls ? 'Yes' : 'No'}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Regulatory Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Establishment Registration (21 CFR 807)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Device Listing (21 CFR 807)</span>
                    </li>
                    {selectedDevice.premarket !== 'Exempt' && (
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600" />
                        <span>Premarket Submission ({selectedDevice.premarket})</span>
                      </li>
                    )}
                    {selectedDevice.class !== 'I' && (
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>Quality System Regulation (21 CFR 820/ISO 13485)</span>
                      </li>
                    )}
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>Medical Device Reporting (21 CFR 803)</span>
                    </li>
                  </ul>
                </div>

                <a
                  href={`https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPCD/classification.cfm?ID=${selectedDevice.productCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                >
                  View on FDA Database <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* Classification Overview */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">FDA Device Classification Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-green-600" />
                  <span className="text-xl font-bold text-green-700">Class I</span>
                </div>
                <p className="text-sm text-green-800 mb-3">Low risk devices subject to general controls only.</p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Most are 510(k) exempt</li>
                  <li>• General controls apply</li>
                  <li>• ~47% of device types</li>
                  <li>• Examples: bandages, tongue depressors</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-yellow-600" />
                  <span className="text-xl font-bold text-yellow-700">Class II</span>
                </div>
                <p className="text-sm text-yellow-800 mb-3">Moderate risk devices requiring special controls.</p>
                <ul className="text-xs text-yellow-700 space-y-1">
                  <li>• Usually requires 510(k)</li>
                  <li>• Special controls apply</li>
                  <li>• ~43% of device types</li>
                  <li>• Examples: powered wheelchairs, pregnancy tests</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border-2 border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-red-600" />
                  <span className="text-xl font-bold text-red-700">Class III</span>
                </div>
                <p className="text-sm text-red-800 mb-3">High risk devices requiring premarket approval.</p>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>• Requires PMA or De Novo</li>
                  <li>• Clinical data usually required</li>
                  <li>• ~10% of device types</li>
                  <li>• Examples: pacemakers, breast implants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Classification Wizard */
        <div className="space-y-6">
          {!isResult ? (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              {/* Progress */}
              {answerPath.length > 0 && (
                <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                  <span>Progress:</span>
                  {answerPath.map((a, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                      {a.answer}
                    </span>
                  ))}
                </div>
              )}

              {/* Current Question */}
              {currentQ && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{currentQ.question}</h3>
                  <p className="text-gray-600 mb-6">{currentQ.description}</p>

                  <div className="space-y-3">
                    {currentQ.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleWizardAnswer(option)}
                        className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all"
                      >
                        <p className="font-medium text-gray-900">{option.label}</p>
                      </button>
                    ))}
                  </div>

                  {answerPath.length > 0 && (
                    <button
                      onClick={resetWizard}
                      className="mt-6 text-gray-600 hover:text-gray-900 text-sm font-medium"
                    >
                      ← Start Over
                    </button>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* Result */
            <div className="space-y-6">
              <div className={`p-6 rounded-lg border-2 ${
                currentQuestion.includes('class-i') || currentQuestion === 'cds-exempt' ? 'bg-green-50 border-green-300' :
                currentQuestion.includes('class-ii') ? 'bg-yellow-50 border-yellow-300' :
                'bg-red-50 border-red-300'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentQ?.question}</h3>
                    <p className="text-gray-700">{currentQ?.description}</p>
                  </div>
                  <Scale className={`w-12 h-12 ${
                    currentQuestion.includes('class-i') || currentQuestion === 'cds-exempt' ? 'text-green-600' :
                    currentQuestion.includes('class-ii') ? 'text-yellow-600' :
                    'text-red-600'
                  }`} />
                </div>
              </div>

              {/* Decision Path */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">Your Decision Path</h4>
                <div className="space-y-3">
                  {answerPath.map((a, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-sm text-gray-900">{a.question}</p>
                        <p className="text-sm text-blue-600 font-medium">{a.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-3">Recommended Next Steps</h4>
                <ol className="space-y-2 text-sm text-blue-800 list-decimal pl-5">
                  <li>Search FDA&apos;s Product Classification Database for your specific device type</li>
                  <li>Identify potential predicate devices (for 510(k)) or similar classified devices</li>
                  <li>Review applicable FDA guidance documents for your device category</li>
                  <li>Consider requesting a Pre-Submission (Q-Sub) meeting with FDA</li>
                  <li>Consult with regulatory affairs professionals for final determination</li>
                </ol>
              </div>

              <button
                onClick={resetWizard}
                className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Classify Another Device
              </button>
            </div>
          )}
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-700">Important Disclaimer</p>
            <p className="text-xs text-gray-600 mt-1">
              This tool provides preliminary guidance only. Final device classification is determined by FDA 
              based on the specific characteristics and intended use of your device. Device classification 
              can be complex and may require consultation with regulatory professionals. Always verify 
              classification using FDA&apos;s official databases and guidance documents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

