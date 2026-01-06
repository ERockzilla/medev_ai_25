'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import FMEACalculator from '@/components/FMEACalculator';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { BookOpen, Download, ArrowLeft } from 'lucide-react';
import { trackToolOpened } from '@/lib/tracking';

export default function FMEAPage() {
  // Track tool usage
  useEffect(() => {
    trackToolOpened('fmea');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
            <BookmarkButton
              title="FMEA Calculator"
              url="/tools/fmea"
              type="tool"
            />
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-blue-900 mb-2">
                  What is FMEA?
                </h2>
                <p className="text-sm text-blue-800 mb-4">
                  Failure Mode and Effects Analysis (FMEA) is a systematic method for identifying and preventing
                  product and process failures. For medical devices, FMEA is required by ISO 14971 for risk management
                  and is critical for FDA and EU MDR compliance.
                </p>
                <p className="text-sm text-blue-800">
                  <strong>RPN (Risk Priority Number)</strong> = Severity × Occurrence × Detection
                </p>
                <p className="text-xs text-blue-700 mt-2">
                  Higher RPN values indicate higher priority risks requiring mitigation.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/guides/six-sigma/fmea-guide"
                  className="px-4 py-3 bg-white border-2 border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <BookOpen className="w-5 h-5" />
                  Read Complete Guide
                </Link>

                <a
                  href="/templates/FMEA_Template.xlsx"
                  download
                  className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 justify-center"
                  data-umami-event="template_downloaded"
                  data-umami-event-template="FMEA_Template.xlsx"
                >
                  <Download className="w-5 h-5" />
                  Download Excel Template
                </a>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <FMEACalculator showExamples={true} />

          {/* Regulatory Guidance */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">Regulatory Guidance</h3>
            <div className="space-y-3 text-sm text-yellow-800">
              <div>
                <p className="font-bold">ISO 14971:2019 - Medical Device Risk Management</p>
                <p>Requires systematic risk analysis including hazard identification, risk estimation,
                  risk evaluation, and risk control. FMEA is an accepted method for meeting these requirements.</p>
              </div>

              <div>
                <p className="font-bold">FDA QMSR - Design and Development (ISO 13485 7.3)</p>
                <p>FDA's Quality Management System Regulation aligns with ISO 13485:2016, requiring risk analysis
                  as part of design validation per ISO 13485 7.3.6. FMEA documentation supports FDA 510(k) and PMA submissions.</p>
              </div>

              <div>
                <p className="font-bold">EU MDR Annex I - General Safety Requirements</p>
                <p>Requires manufacturers to eliminate or reduce risks through inherent safety by design.
                  FMEA provides evidence of systematic risk assessment.</p>
              </div>

              <div className="mt-4 pt-4 border-t border-yellow-300">
                <p className="font-bold mb-2">Best Practices:</p>
                <ul className="space-y-1 pl-5 list-disc">
                  <li>Conduct FMEA early in design phase</li>
                  <li>Include cross-functional team (engineering, quality, regulatory, clinical)</li>
                  <li>Document all high-risk items (RPN over 100) with mitigation plans</li>
                  <li>Link FMEA to design controls and V&V activities</li>
                  <li>Update FMEA after design changes or post-market feedback</li>
                  <li>Maintain version control and approval signatures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Example Scenarios */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Common Medical Device Failure Modes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-900 mb-2">Safety-Critical Failures</h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></span>
                    <span>Laser safety interlock failure (Severity: 9-10)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></span>
                    <span>Electrical shock hazard from insulation failure (Severity: 8-9)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></span>
                    <span>Software error causing incorrect drug dosing (Severity: 9-10)</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-900 mb-2">Performance Failures</h4>
                <ul className="space-y-2 text-sm text-orange-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></span>
                    <span>Sensor calibration drift (Severity: 5-7)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></span>
                    <span>Battery fails to hold charge (Severity: 4-6)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></span>
                    <span>Display screen unreadable in bright light (Severity: 3-5)</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">User Interface Failures</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                    <span>Confusing button labels leading to misuse (Severity: 6-8)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                    <span>Alarm not audible in noisy environment (Severity: 7-9)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                    <span>Units displayed ambiguously (mg vs μg) (Severity: 8-10)</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-2">Manufacturing Failures</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></span>
                    <span>Contamination during assembly (Severity: 6-9)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></span>
                    <span>Component installed backwards (Severity: 5-8)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></span>
                    <span>Inadequate sterilization (Severity: 7-9)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/tools/distributions"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Statistical Distributions</h4>
                <p className="text-sm text-gray-600">Model failure rates using Weibull and exponential distributions</p>
              </Link>

              <Link
                href="/tools/sample-size"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Sample Size Calculator</h4>
                <p className="text-sm text-gray-600">Determine sample sizes for risk mitigation validation studies</p>
              </Link>

              <Link
                href="/tools/reliability"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all opacity-50 cursor-not-allowed"
                onClick={(e) => e.preventDefault()}
              >
                <h4 className="font-bold text-gray-900 mb-2">Reliability Analysis</h4>
                <p className="text-sm text-gray-600">Calculate MTBF and device lifetime (Coming Soon)</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

