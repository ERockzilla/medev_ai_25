'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import CyberDeviceClassification from '@/components/CyberDeviceClassification';
import { Shield, ArrowLeft, ExternalLink, AlertTriangle, CheckCircle, FileText, Server, Globe, Lock } from 'lucide-react';

export default function CyberDeviceClassificationPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              href="/tools"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-red-600" />
              <h1 className="text-4xl font-bold text-gray-900">Cyber Device Classification</h1>
            </div>
            <p className="text-xl text-gray-600">
              Determine if your medical device is a &quot;cyber device&quot; per FDA regulations and understand cybersecurity requirements
            </p>
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-800">Important Regulatory Update - September 2023</p>
                  <p className="text-sm text-red-700 mt-1">
                    FDA&apos;s &quot;Cybersecurity in Medical Devices&quot; guidance establishes mandatory requirements 
                    for &quot;cyber devices&quot; under FD&C Act Section 524B. Premarket submissions must include 
                    comprehensive cybersecurity documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Calculator */}
          <div className="mb-10">
            <CyberDeviceClassification />
          </div>

          {/* Key Concepts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cyber Device Definition</h3>
              <p className="text-sm text-gray-600">
                A cyber device must meet ALL three criteria: (1) includes software, (2) can connect to internet, 
                and (3) has cyber-vulnerable characteristics. This is a statutory definition from the FD&C Act.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">SBOM Requirement</h3>
              <p className="text-sm text-gray-600">
                Software Bill of Materials must include all commercial, open-source, and off-the-shelf 
                components. Machine-readable format (SPDX/CycloneDX) required with vulnerability tracking.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Risk-Based Tiers</h3>
              <p className="text-sm text-gray-600">
                FDA uses two tiers: Standard (lower risk) and Enhanced (higher risk). Enhanced tier 
                requires penetration testing, detailed threat modeling, and more comprehensive documentation.
              </p>
            </div>
          </div>

          {/* Detailed Requirements Sections */}
          <div className="space-y-8">
            {/* Section 524B Overview */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                FD&C Act Section 524B Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Premarket Requirements (524B(b))</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Submit plan to monitor, identify, and address postmarket cybersecurity vulnerabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Design, develop, and maintain processes to ensure device security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Provide Software Bill of Materials (SBOM)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Submit evidence of compliance with cybersecurity requirements</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Postmarket Requirements</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Monitor and identify new vulnerabilities in a timely manner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Deploy security patches and updates to address vulnerabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Maintain coordinated vulnerability disclosure (CVD) process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Report cybersecurity issues per MDR requirements when applicable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premarket Documentation */}
            <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Premarket Submission Documentation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-blue-800 mb-3">Standard Tier Documentation</h3>
                  <ul className="space-y-2 text-sm text-blue-900">
                    <li>• Threat model summary</li>
                    <li>• Security risk assessment</li>
                    <li>• Security requirements specification</li>
                    <li>• Cybersecurity testing summary</li>
                    <li>• Update/patch mechanism description</li>
                    <li>• SBOM (machine-readable)</li>
                    <li>• Vulnerability disclosure plan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-blue-800 mb-3">Enhanced Tier Documentation</h3>
                  <ul className="space-y-2 text-sm text-blue-900">
                    <li>• All Standard tier documentation PLUS:</li>
                    <li>• Detailed threat model with attack trees</li>
                    <li>• Security architecture documentation</li>
                    <li>• Penetration testing results</li>
                    <li>• Security requirements traceability</li>
                    <li>• Cryptographic implementation details</li>
                    <li>• Third-party security assessment (if applicable)</li>
                    <li>• Interface security analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SBOM Details */}
            <div className="bg-purple-50 rounded-lg border border-purple-200 p-6">
              <h2 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                <Server className="w-5 h-5" />
                Software Bill of Materials (SBOM) Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-purple-800 mb-2">Format Requirements</h3>
                  <ul className="text-sm text-purple-900 space-y-1">
                    <li>• Machine-readable format</li>
                    <li>• SPDX or CycloneDX preferred</li>
                    <li>• Include component versions</li>
                    <li>• Dependency relationships</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-purple-800 mb-2">Component Coverage</h3>
                  <ul className="text-sm text-purple-900 space-y-1">
                    <li>• Commercial software</li>
                    <li>• Open-source components</li>
                    <li>• Off-the-shelf (OTS) software</li>
                    <li>• Third-party libraries</li>
                    <li>• Operating systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-purple-800 mb-2">Vulnerability Tracking</h3>
                  <ul className="text-sm text-purple-900 space-y-1">
                    <li>• Known vulnerabilities per component</li>
                    <li>• CVE references</li>
                    <li>• Risk assessment for each</li>
                    <li>• Mitigation status</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Controls */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Security Controls</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Authentication</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Multi-factor authentication</li>
                    <li>• Role-based access control</li>
                    <li>• Session management</li>
                    <li>• Password policies</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Cryptography</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Data encryption (at rest/in transit)</li>
                    <li>• Secure key management</li>
                    <li>• Code signing</li>
                    <li>• Secure boot</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Monitoring</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Audit logging</li>
                    <li>• Anomaly detection</li>
                    <li>• Integrity checking</li>
                    <li>• Event monitoring</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Updates</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Secure update mechanism</li>
                    <li>• Rollback capability</li>
                    <li>• Update verification</li>
                    <li>• Remote patching</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Standards */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-600" />
                Related Standards & Guidance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/standards/iec-81001-5-1"
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all"
                >
                  <h3 className="font-bold text-gray-900">IEC 81001-5-1</h3>
                  <p className="text-sm text-gray-600 mt-1">Health software cybersecurity lifecycle</p>
                </Link>
                <Link
                  href="/standards/iec-62304"
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all"
                >
                  <h3 className="font-bold text-gray-900">IEC 62304</h3>
                  <p className="text-sm text-gray-600 mt-1">Medical device software lifecycle processes</p>
                </Link>
                <Link
                  href="/standards/iso-14971"
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all"
                >
                  <h3 className="font-bold text-gray-900">ISO 14971</h3>
                  <p className="text-sm text-gray-600 mt-1">Risk management (including security risks)</p>
                </Link>
                <a
                  href="https://www.fda.gov/media/119933/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-bold text-gray-900">FDA Premarket Guidance</h3>
                    <p className="text-sm text-gray-600 mt-1">Cybersecurity quality system considerations</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </a>
                <a
                  href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/postmarket-management-cybersecurity-medical-devices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-bold text-gray-900">FDA Postmarket Guidance</h3>
                    <p className="text-sm text-gray-600 mt-1">Managing cybersecurity post-release</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </a>
                <a
                  href="https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity-medical-devices-frequently-asked-questions-faqs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-bold text-gray-900">FDA Cybersecurity FAQs</h3>
                    <p className="text-sm text-gray-600 mt-1">Common questions answered</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Common Scenarios */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Common Device Scenarios</h2>
              <div className="space-y-4">
                <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-red-600" />
                    <span className="font-bold text-red-800">CYBER DEVICE - Enhanced Tier</span>
                  </div>
                  <p className="text-sm text-red-700 mb-2">
                    Infusion pump with Wi-Fi connectivity, remote monitoring app, and cloud-based dosing database.
                  </p>
                  <p className="text-xs text-red-600">
                    Requires: Comprehensive threat model, penetration testing, detailed SBOM, security architecture review
                  </p>
                </div>

                <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-yellow-600" />
                    <span className="font-bold text-yellow-800">CYBER DEVICE - Standard Tier</span>
                  </div>
                  <p className="text-sm text-yellow-700 mb-2">
                    Diagnostic imaging workstation with network connectivity for PACS integration but no direct patient therapy.
                  </p>
                  <p className="text-xs text-yellow-600">
                    Requires: Threat model summary, security testing, SBOM, vulnerability disclosure plan
                  </p>
                </div>

                <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-green-800">NOT A CYBER DEVICE</span>
                  </div>
                  <p className="text-sm text-green-700 mb-2">
                    Manual surgical instrument with no electronics. Standalone thermometer with no connectivity.
                  </p>
                  <p className="text-xs text-green-600">
                    Standard cybersecurity requirements do not apply (but still consider general best practices if any software present)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link 
              href="/tools"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

