'use client';

import { useState } from 'react';
import { Download, AlertTriangle, Info, CheckCircle, Shield, Wifi, Code, Server, Lock, RotateCcw, FileText, ExternalLink } from 'lucide-react';

interface CyberDeviceResult {
  isCyberDevice: boolean;
  criteria: {
    hasSoftware: boolean;
    hasConnectivity: boolean;
    hasVulnerabilities: boolean;
  };
  riskTier: 'standard' | 'enhanced' | null;
  requirements: string[];
  sbomRequirements: string[];
  presubmissionDocs: string[];
  postmarketRequirements: string[];
}

export default function CyberDeviceClassification() {
  const [step, setStep] = useState<'diagram' | 'q1' | 'q2' | 'q3' | 'risk-tier' | 'result'>('diagram');
  const [hasSoftware, setHasSoftware] = useState<boolean | null>(null);
  const [hasConnectivity, setHasConnectivity] = useState<boolean | null>(null);
  const [hasVulnerabilities, setHasVulnerabilities] = useState<boolean | null>(null);
  const [riskTier, setRiskTier] = useState<'standard' | 'enhanced' | null>(null);

  const getResult = (): CyberDeviceResult | null => {
    if (step !== 'result') return null;

    const isCyberDevice = hasSoftware === true && hasConnectivity === true && hasVulnerabilities === true;

    const requirements: string[] = [];
    const sbomRequirements: string[] = [];
    const presubmissionDocs: string[] = [];
    const postmarketRequirements: string[] = [];

    if (isCyberDevice) {
      // All cyber devices must have these
      requirements.push('Cybersecurity management plan');
      requirements.push('Security risk assessment per ISO 14971');
      requirements.push('Threat modeling documentation');
      requirements.push('Software Bill of Materials (SBOM)');
      requirements.push('Vulnerability disclosure plan');
      requirements.push('Coordinated vulnerability disclosure (CVD) procedures');

      sbomRequirements.push('Machine-readable format (SPDX, CycloneDX)');
      sbomRequirements.push('All commercial, open-source, and off-the-shelf software');
      sbomRequirements.push('Version information for all components');
      sbomRequirements.push('Known vulnerabilities for each component');
      sbomRequirements.push('Update mechanism documentation');

      postmarketRequirements.push('Monitor for new vulnerabilities');
      postmarketRequirements.push('Provide patches and updates in reasonable timeframe');
      postmarketRequirements.push('Maintain coordinated vulnerability disclosure');
      postmarketRequirements.push('Report cybersecurity issues per 21 CFR 806');

      if (riskTier === 'enhanced') {
        // Enhanced tier requirements
        presubmissionDocs.push('Threat model with attack trees');
        presubmissionDocs.push('Security architecture documentation');
        presubmissionDocs.push('Penetration testing results');
        presubmissionDocs.push('Cybersecurity testing documentation');
        presubmissionDocs.push('Security requirements traceability matrix');
        presubmissionDocs.push('Cryptographic implementation details');
        presubmissionDocs.push('Authentication and authorization mechanisms');
        presubmissionDocs.push('Third-party security assessment (if applicable)');

        requirements.push('Enhanced threat modeling with attack surface analysis');
        requirements.push('Penetration testing by qualified personnel');
        requirements.push('Security architecture review');
        requirements.push('Cryptographic controls documentation');
      } else {
        // Standard tier requirements
        presubmissionDocs.push('Threat model summary');
        presubmissionDocs.push('Security risk assessment');
        presubmissionDocs.push('Cybersecurity testing summary');
        presubmissionDocs.push('Security control documentation');
        presubmissionDocs.push('Update/patch mechanism description');
      }
    } else {
      // Not a cyber device - still may have some requirements
      if (hasSoftware) {
        requirements.push('IEC 62304 software lifecycle compliance');
        requirements.push('Software documentation per FDA guidance');
      }
      if (hasConnectivity) {
        requirements.push('Consider cybersecurity best practices');
        requirements.push('Document any security controls');
      }
    }

    return {
      isCyberDevice,
      criteria: {
        hasSoftware: hasSoftware || false,
        hasConnectivity: hasConnectivity || false,
        hasVulnerabilities: hasVulnerabilities || false,
      },
      riskTier,
      requirements,
      sbomRequirements,
      presubmissionDocs,
      postmarketRequirements,
    };
  };

  const result = getResult();

  const reset = () => {
    setStep('diagram');
    setHasSoftware(null);
    setHasConnectivity(null);
    setHasVulnerabilities(null);
    setRiskTier(null);
  };

  const handleQ1 = (answer: boolean) => {
    setHasSoftware(answer);
    if (!answer) {
      // No software = not a cyber device
      setHasConnectivity(false);
      setHasVulnerabilities(false);
      setStep('result');
    } else {
      setStep('q2');
    }
  };

  const handleQ2 = (answer: boolean) => {
    setHasConnectivity(answer);
    if (!answer) {
      // No connectivity = not a cyber device
      setHasVulnerabilities(false);
      setStep('result');
    } else {
      setStep('q3');
    }
  };

  const handleQ3 = (answer: boolean) => {
    setHasVulnerabilities(answer);
    if (!answer) {
      // No vulnerabilities = not a cyber device
      setStep('result');
    } else {
      // Is a cyber device - need to determine risk tier
      setStep('risk-tier');
    }
  };

  const handleRiskTier = (tier: 'standard' | 'enhanced') => {
    setRiskTier(tier);
    setStep('result');
  };

  const exportAssessment = () => {
    if (!result) return;

    const report = `FDA CYBER DEVICE CLASSIFICATION ASSESSMENT
==========================================
Generated: ${new Date().toISOString()}

CYBER DEVICE DETERMINATION
--------------------------
Is this a "Cyber Device" per FD&C Act Section 524B(c)?
Answer: ${result.isCyberDevice ? 'YES' : 'NO'}

CRITERIA EVALUATION
-------------------
1. Includes software validated, installed, or authorized by sponsor: ${result.criteria.hasSoftware ? 'YES' : 'NO'}
2. Has ability to connect to the internet: ${result.criteria.hasConnectivity ? 'YES' : 'NO'}
3. Contains technological characteristics vulnerable to cybersecurity threats: ${result.criteria.hasVulnerabilities ? 'YES' : 'NO'}

${result.isCyberDevice ? `CYBERSECURITY RISK TIER
-----------------------
Risk Tier: ${result.riskTier?.toUpperCase()}
${result.riskTier === 'enhanced' ? 'Device could directly cause patient harm or is connected to other devices/networks that could impact safety.' : 'Device has limited connectivity or lower risk profile.'}

PREMARKET SUBMISSION REQUIREMENTS
---------------------------------
${result.presubmissionDocs.map(d => `• ${d}`).join('\n')}

SBOM REQUIREMENTS
-----------------
${result.sbomRequirements.map(s => `• ${s}`).join('\n')}

POST-MARKET REQUIREMENTS
------------------------
${result.postmarketRequirements.map(p => `• ${p}`).join('\n')}
` : ''}
GENERAL REQUIREMENTS
--------------------
${result.requirements.map(r => `• ${r}`).join('\n')}

REGULATORY REFERENCES
---------------------
• FD&C Act Section 524B - Ensuring Cybersecurity of Medical Devices
• FDA Guidance: Cybersecurity in Medical Devices: Quality System Considerations 
  and Content of Premarket Submissions (September 2023)
• FDA Guidance: Postmarket Management of Cybersecurity in Medical Devices
• IEC 81001-5-1: Health software cybersecurity
• ISO 14971: Risk management for medical devices

IMPORTANT DISCLAIMERS
--------------------
This assessment is for guidance only. Final determination of cybersecurity 
requirements should be made in consultation with FDA and qualified 
cybersecurity professionals. Requirements may vary based on specific 
device characteristics and evolving FDA guidance.
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cyber-device-assessment-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Cyber Device Classification Tool</h2>
          <p className="text-gray-600 mt-1">Determine if your device is a &quot;cyber device&quot; per FDA requirements</p>
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
        <h3 className="text-lg font-bold text-gray-900 mb-4">FDA Cyber Device Classification Decision Tree</h3>
        <p className="text-sm text-gray-600 mb-4">
          Per FD&C Act Section 524B(c), a &quot;cyber device&quot; must meet <strong>ALL THREE</strong> criteria:
        </p>

        <div className="flex justify-center overflow-x-auto">
          <svg viewBox="0 0 700 450" className="w-full" style={{ minWidth: '600px', maxWidth: '800px' }}>
            <defs>
              <marker id="arrowCyber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
              </marker>
            </defs>

            {/* Start */}
            <rect x="275" y="10" width="150" height="40" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
            <text x="350" y="35" textAnchor="middle" className="text-sm font-bold" fill="#0369a1">MEDICAL DEVICE</text>

            {/* Arrow to Q1 */}
            <line x1="350" y1="50" x2="350" y2="75" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowCyber)" />

            {/* Q1: Has Software? */}
            <polygon 
              points="350,80 470,130 350,180 230,130" 
              fill={step === 'q1' ? '#fef3c7' : '#f3f4f6'} 
              stroke={step === 'q1' ? '#f59e0b' : '#9ca3af'} 
              strokeWidth="2"
            />
            <text x="350" y="120" textAnchor="middle" className="text-xs" fill="#374151">
              <tspan x="350" dy="0">Includes software</tspan>
              <tspan x="350" dy="14">by sponsor?</tspan>
            </text>

            {/* Q1 NO */}
            <line x1="230" y1="130" x2="80" y2="130" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowCyber)" />
            <text x="155" y="120" textAnchor="middle" className="text-xs font-bold" fill="#dc2626">NO</text>

            {/* Not Cyber Device (Q1 NO) */}
            <rect x="10" y="110" width="70" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="45" y="128" textAnchor="middle" className="text-xs font-bold" fill="#15803d">NOT A</text>
            <text x="45" y="142" textAnchor="middle" className="text-xs font-bold" fill="#15803d">CYBER DEVICE</text>

            {/* Q1 YES */}
            <line x1="350" y1="180" x2="350" y2="210" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowCyber)" />
            <text x="365" y="195" className="text-xs font-bold" fill="#16a34a">YES</text>

            {/* Q2: Internet Connection? */}
            <polygon 
              points="350,215 470,265 350,315 230,265" 
              fill={step === 'q2' ? '#fef3c7' : '#f3f4f6'} 
              stroke={step === 'q2' ? '#f59e0b' : '#9ca3af'} 
              strokeWidth="2"
            />
            <text x="350" y="255" textAnchor="middle" className="text-xs" fill="#374151">
              <tspan x="350" dy="0">Can connect to</tspan>
              <tspan x="350" dy="14">internet?</tspan>
            </text>

            {/* Q2 NO */}
            <line x1="230" y1="265" x2="80" y2="265" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowCyber)" />
            <text x="155" y="255" textAnchor="middle" className="text-xs font-bold" fill="#dc2626">NO</text>

            {/* Not Cyber Device (Q2 NO) */}
            <rect x="10" y="245" width="70" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="45" y="263" textAnchor="middle" className="text-xs font-bold" fill="#15803d">NOT A</text>
            <text x="45" y="277" textAnchor="middle" className="text-xs font-bold" fill="#15803d">CYBER DEVICE</text>

            {/* Q2 YES */}
            <line x1="350" y1="315" x2="350" y2="345" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowCyber)" />
            <text x="365" y="330" className="text-xs font-bold" fill="#16a34a">YES</text>

            {/* Q3: Cybersecurity Vulnerabilities? */}
            <polygon 
              points="350,350 470,400 350,450 230,400" 
              fill={step === 'q3' ? '#fef3c7' : '#f3f4f6'} 
              stroke={step === 'q3' ? '#f59e0b' : '#9ca3af'} 
              strokeWidth="2"
            />
            <text x="350" y="390" textAnchor="middle" className="text-xs" fill="#374151">
              <tspan x="350" dy="0">Cyber vulnerable</tspan>
              <tspan x="350" dy="14">characteristics?</tspan>
            </text>

            {/* Q3 NO */}
            <line x1="230" y1="400" x2="80" y2="400" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowCyber)" />
            <text x="155" y="390" textAnchor="middle" className="text-xs font-bold" fill="#dc2626">NO</text>

            {/* Not Cyber Device (Q3 NO) */}
            <rect x="10" y="380" width="70" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="45" y="398" textAnchor="middle" className="text-xs font-bold" fill="#15803d">NOT A</text>
            <text x="45" y="412" textAnchor="middle" className="text-xs font-bold" fill="#15803d">CYBER DEVICE</text>

            {/* Q3 YES - IS Cyber Device */}
            <line x1="470" y1="400" x2="550" y2="400" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowCyber)" />
            <text x="510" y="390" textAnchor="middle" className="text-xs font-bold" fill="#16a34a">YES</text>

            {/* IS Cyber Device */}
            <rect x="550" y="380" width="120" height="40" rx="6" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
            <text x="610" y="398" textAnchor="middle" className="text-xs font-bold" fill="#b91c1c">CYBER DEVICE</text>
            <text x="610" y="412" textAnchor="middle" className="text-xs" fill="#b91c1c">524B applies</text>

            {/* Risk Tier Box */}
            <rect x="520" y="260" width="160" height="80" rx="8" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2" />
            <text x="600" y="285" textAnchor="middle" className="text-sm font-bold" fill="#6d28d9">DETERMINE RISK TIER</text>
            <text x="600" y="305" textAnchor="middle" className="text-xs" fill="#7c3aed">Standard vs Enhanced</text>
            <text x="600" y="325" textAnchor="middle" className="text-xs" fill="#7c3aed">based on patient risk</text>

            {/* Arrow from Cyber Device to Risk Tier */}
            <line x1="610" y1="380" x2="610" y2="345" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrowCyber)" />

            {/* Legend */}
            <rect x="520" y="30" width="160" height="100" rx="6" fill="#f9fafb" stroke="#d1d5db" />
            <text x="600" y="50" textAnchor="middle" className="text-xs font-bold" fill="#374151">LEGEND</text>
            <rect x="530" y="60" width="12" height="12" fill="#fef3c7" stroke="#f59e0b" />
            <text x="550" y="70" className="text-xs" fill="#374151">Current Question</text>
            <rect x="530" y="80" width="12" height="12" fill="#dcfce7" stroke="#16a34a" />
            <text x="550" y="90" className="text-xs" fill="#374151">Not Cyber Device</text>
            <rect x="530" y="100" width="12" height="12" fill="#fecaca" stroke="#dc2626" />
            <text x="550" y="110" className="text-xs" fill="#374151">Is Cyber Device</text>
          </svg>
        </div>
      </div>

      {/* Interactive Questions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Classification Assessment</h3>

        {step === 'diagram' && (
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Answer three questions to determine if your device is a &quot;cyber device&quot; under FDA regulations.
            </p>
            <button
              onClick={() => setStep('q1')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Start Assessment
            </button>
          </div>
        )}

        {step === 'q1' && (
          <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <Code className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-900">Criterion 1: Software</h4>
                <p className="text-blue-800 mt-1">
                  Does the device include software <strong>validated, installed, or authorized</strong> by the sponsor as a device or in a device?
                </p>
                <p className="text-sm text-blue-700 mt-2">
                  This includes firmware, embedded software, mobile apps, and any software that is part of the device or controls device functions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleQ1(true)}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                YES - Device includes software
              </button>
              <button
                onClick={() => handleQ1(false)}
                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
              >
                NO - No software
              </button>
            </div>
          </div>
        )}

        {step === 'q2' && (
          <div className="p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <Wifi className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-purple-900">Criterion 2: Internet Connectivity</h4>
                <p className="text-purple-800 mt-1">
                  Does the device have the <strong>ability to connect to the internet</strong>?
                </p>
                <p className="text-sm text-purple-700 mt-2">
                  This includes Wi-Fi, Ethernet, cellular (4G/5G), Bluetooth that can bridge to internet, 
                  or any connection through hospital networks that access the internet.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleQ2(true)}
                className="flex-1 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
              >
                YES - Can connect to internet
              </button>
              <button
                onClick={() => handleQ2(false)}
                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
              >
                NO - Cannot connect to internet
              </button>
            </div>
          </div>
        )}

        {step === 'q3' && (
          <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-900">Criterion 3: Cybersecurity Vulnerabilities</h4>
                <p className="text-red-800 mt-1">
                  Does the device contain any <strong>technological characteristics that could be vulnerable to cybersecurity threats</strong>?
                </p>
                <p className="text-sm text-red-700 mt-2">
                  If your device has software and connects to the internet, it almost certainly has 
                  characteristics vulnerable to cyber threats. This includes any device that can receive 
                  data, execute code, or store information.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleQ3(true)}
                className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
              >
                YES - Has vulnerable characteristics
              </button>
              <button
                onClick={() => handleQ3(false)}
                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
              >
                NO - No vulnerable characteristics
              </button>
            </div>
          </div>
        )}

        {step === 'risk-tier' && (
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-2">Your device IS a Cyber Device</h4>
              <p className="text-yellow-800">
                Now determine the cybersecurity risk tier to understand documentation requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => handleRiskTier('enhanced')}
                className="p-6 border-2 border-red-300 bg-red-50 rounded-lg hover:border-red-500 transition-all text-left"
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <span className="text-xl font-bold text-red-700">Enhanced Tier</span>
                </div>
                <p className="text-sm text-red-800 mb-3">
                  Device could directly result in patient harm if compromised, OR connects to other devices/networks.
                </p>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>• Devices that control therapy delivery</li>
                  <li>• Devices connected to hospital networks</li>
                  <li>• Devices storing PHI</li>
                  <li>• Implantable devices with wireless</li>
                  <li>• Life-supporting/sustaining devices</li>
                </ul>
              </button>

              <button
                onClick={() => handleRiskTier('standard')}
                className="p-6 border-2 border-yellow-300 bg-yellow-50 rounded-lg hover:border-yellow-500 transition-all text-left"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-6 h-6 text-yellow-600" />
                  <span className="text-xl font-bold text-yellow-700">Standard Tier</span>
                </div>
                <p className="text-sm text-yellow-800 mb-3">
                  Limited connectivity scope with lower patient risk if compromised.
                </p>
                <ul className="text-xs text-yellow-700 space-y-1">
                  <li>• Standalone diagnostic devices</li>
                  <li>• Devices with limited network exposure</li>
                  <li>• Devices where compromise = inconvenience</li>
                  <li>• No direct therapy control</li>
                  <li>• Limited data sensitivity</li>
                </ul>
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

      {/* Results */}
      {step === 'result' && result && (
        <div className="space-y-6">
          {/* Main Result */}
          <div className={`p-6 rounded-lg border-2 ${
            result.isCyberDevice 
              ? 'bg-red-50 border-red-300' 
              : 'bg-green-50 border-green-300'
          }`}>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {result.isCyberDevice ? (
                    <Shield className="w-10 h-10 text-red-600" />
                  ) : (
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  )}
                  <span className={`text-3xl font-bold ${
                    result.isCyberDevice ? 'text-red-700' : 'text-green-700'
                  }`}>
                    {result.isCyberDevice ? 'CYBER DEVICE' : 'NOT A CYBER DEVICE'}
                  </span>
                </div>
                <p className={`text-lg ${result.isCyberDevice ? 'text-red-800' : 'text-green-800'}`}>
                  {result.isCyberDevice 
                    ? 'FD&C Act Section 524B cybersecurity requirements apply.'
                    : 'FD&C Act Section 524B does not apply, but cybersecurity best practices are still recommended.'
                  }
                </p>
              </div>
            </div>

            {/* Criteria Summary */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className={`p-3 rounded-lg ${result.criteria.hasSoftware ? 'bg-blue-100' : 'bg-gray-100'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <Code className={`w-4 h-4 ${result.criteria.hasSoftware ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span className="text-sm font-medium">Software</span>
                </div>
                <p className={`text-xs ${result.criteria.hasSoftware ? 'text-blue-700' : 'text-gray-500'}`}>
                  {result.criteria.hasSoftware ? 'YES' : 'NO'}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${result.criteria.hasConnectivity ? 'bg-purple-100' : 'bg-gray-100'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <Wifi className={`w-4 h-4 ${result.criteria.hasConnectivity ? 'text-purple-600' : 'text-gray-400'}`} />
                  <span className="text-sm font-medium">Internet</span>
                </div>
                <p className={`text-xs ${result.criteria.hasConnectivity ? 'text-purple-700' : 'text-gray-500'}`}>
                  {result.criteria.hasConnectivity ? 'YES' : 'NO'}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${result.criteria.hasVulnerabilities ? 'bg-red-100' : 'bg-gray-100'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <Shield className={`w-4 h-4 ${result.criteria.hasVulnerabilities ? 'text-red-600' : 'text-gray-400'}`} />
                  <span className="text-sm font-medium">Vulnerabilities</span>
                </div>
                <p className={`text-xs ${result.criteria.hasVulnerabilities ? 'text-red-700' : 'text-gray-500'}`}>
                  {result.criteria.hasVulnerabilities ? 'YES' : 'NO'}
                </p>
              </div>
            </div>
          </div>

          {result.isCyberDevice && (
            <>
              {/* Risk Tier */}
              <div className={`p-5 rounded-lg border-2 ${
                result.riskTier === 'enhanced' ? 'bg-red-50 border-red-300' : 'bg-yellow-50 border-yellow-300'
              }`}>
                <h4 className="font-bold text-gray-900 mb-2">Cybersecurity Risk Tier</h4>
                <p className={`text-xl font-bold ${
                  result.riskTier === 'enhanced' ? 'text-red-700' : 'text-yellow-700'
                }`}>
                  {result.riskTier === 'enhanced' ? 'ENHANCED TIER' : 'STANDARD TIER'}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  {result.riskTier === 'enhanced' 
                    ? 'Requires comprehensive cybersecurity documentation including penetration testing.'
                    : 'Requires standard cybersecurity documentation.'
                  }
                </p>
              </div>

              {/* Premarket Documentation */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Premarket Submission Requirements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {result.presubmissionDocs.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SBOM Requirements */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Software Bill of Materials (SBOM) Requirements
                </h4>
                <ul className="space-y-2">
                  {result.sbomRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-purple-800">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Post-market Requirements */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Post-Market Cybersecurity Requirements
                </h4>
                <ul className="space-y-2">
                  {result.postmarketRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-orange-800">
                      <span className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* General Requirements */}
          {result.requirements.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">
                {result.isCyberDevice ? 'Additional Requirements' : 'Recommendations'}
              </h4>
              <ul className="space-y-2">
                {result.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={reset}
            className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Assess Another Device
          </button>
        </div>
      )}

      {/* Reference Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-4">FDA Cybersecurity Guidance Reference</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-blue-800">FD&C Act Section 524B - Cyber Device Definition</h4>
            <p className="text-sm text-blue-700 mt-1">
              A &quot;cyber device&quot; is a device that: (1) includes software validated, installed, or authorized 
              by the sponsor as a device or in a device; (2) has the ability to connect to the internet; and 
              (3) contains any such technological characteristics validated, installed, or authorized by the 
              sponsor that could be vulnerable to cybersecurity threats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://www.fda.gov/media/119933/download"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition-all flex items-center gap-3"
            >
              <FileText className="w-8 h-8 text-blue-600" />
              <div>
                <p className="font-bold text-gray-900 text-sm">Premarket Cybersecurity Guidance</p>
                <p className="text-xs text-gray-600">Quality System Considerations (Sept 2023)</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
            </a>
            <a
              href="https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition-all flex items-center gap-3"
            >
              <Shield className="w-8 h-8 text-blue-600" />
              <div>
                <p className="font-bold text-gray-900 text-sm">FDA Cybersecurity Center</p>
                <p className="text-xs text-gray-600">All cybersecurity resources</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
            </a>
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
              This tool provides guidance based on FDA&apos;s 2023 cybersecurity guidance. Actual requirements 
              may vary based on device characteristics, evolving FDA guidance, and specific submission types. 
              Consult with cybersecurity professionals and regulatory experts for definitive guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

