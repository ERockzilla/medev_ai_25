'use client';

import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import DeviceClassificationTool from '@/components/DeviceClassificationTool';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { BookOpen, ArrowLeft, Scale, FileText, ExternalLink } from 'lucide-react';

export default function DeviceClassificationPage() {
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
              title="Device Classification Tool"
              url="/tools/device-classification"
              type="tool"
            />
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-blue-900 mb-2">
                  FDA Medical Device Classification
                </h2>
                <p className="text-sm text-blue-800 mb-4">
                  FDA classifies medical devices into three categories based on the risk level 
                  and regulatory controls needed to provide reasonable assurance of safety and 
                  effectiveness. Classification determines the type of premarket submission required.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <p className="font-bold text-green-700">Class I</p>
                    <p className="text-xs text-green-600">Low Risk</p>
                    <p className="text-xs text-green-600">~47% devices</p>
                  </div>
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <p className="font-bold text-yellow-700">Class II</p>
                    <p className="text-xs text-yellow-600">Moderate Risk</p>
                    <p className="text-xs text-yellow-600">~43% devices</p>
                  </div>
                  <div className="p-2 bg-red-100 rounded-lg">
                    <p className="font-bold text-red-700">Class III</p>
                    <p className="text-xs text-red-600">High Risk</p>
                    <p className="text-xs text-red-600">~10% devices</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPCD/classification.cfm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-white border-2 border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <ExternalLink className="w-5 h-5" />
                  FDA Database
                </a>
                
                <Link
                  href="/tools/regulatory-pathway"
                  className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <Scale className="w-5 h-5" />
                  Regulatory Pathway Tool
                </Link>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <DeviceClassificationTool />

          {/* Regulatory Controls */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">Types of Regulatory Controls</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-yellow-200">
                <h4 className="font-bold text-green-800 mb-2">General Controls (All Classes)</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Establishment registration</li>
                  <li>• Device listing</li>
                  <li>• Quality System Regulation (most)</li>
                  <li>• Medical device reporting</li>
                  <li>• Labeling requirements</li>
                  <li>• Premarket notification (unless exempt)</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">Special Controls (Class II)</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Performance standards</li>
                  <li>• Post-market surveillance</li>
                  <li>• Patient registries</li>
                  <li>• Special labeling</li>
                  <li>• Guidance documents</li>
                  <li>• Premarket data requirements</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border border-yellow-200">
                <h4 className="font-bold text-red-800 mb-2">Premarket Approval (Class III)</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Scientific evidence of safety</li>
                  <li>• Scientific evidence of effectiveness</li>
                  <li>• Usually requires clinical trials</li>
                  <li>• FDA panel review may be required</li>
                  <li>• Post-approval studies</li>
                  <li>• Periodic reports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Premarket Submission Types */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Premarket Submission Pathways</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-green-900">510(k) Premarket Notification</h4>
                    <p className="text-sm text-green-800 mt-1">
                      Demonstrate that your device is substantially equivalent to a legally marketed 
                      predicate device. Most common pathway for Class II devices.
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">
                    ~3-6 months
                  </span>
                </div>
                <div className="mt-3 flex gap-4">
                  <Link href="/regulations/510k-submission" className="text-sm text-green-700 hover:text-green-900 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-blue-900">De Novo Classification</h4>
                    <p className="text-sm text-blue-800 mt-1">
                      For novel devices with no predicate that are low-to-moderate risk. Creates a 
                      new classification regulation that can serve as a predicate for future devices.
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
                    ~6-12 months
                  </span>
                </div>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-red-900">PMA (Premarket Approval)</h4>
                    <p className="text-sm text-red-800 mt-1">
                      Most stringent pathway for Class III devices. Requires clinical evidence 
                      demonstrating reasonable assurance of safety and effectiveness.
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium">
                    ~1-3 years
                  </span>
                </div>
                <div className="mt-3 flex gap-4">
                  <Link href="/regulations/pma-submission" className="text-sm text-red-700 hover:text-red-900 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-purple-900">Exempt from 510(k)</h4>
                    <p className="text-sm text-purple-800 mt-1">
                      Many Class I and some Class II devices are exempt from premarket notification. 
                      Still subject to general controls and establishment registration.
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">
                    No review
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FDA Resources */}
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">FDA Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPCD/classification.cfm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-900">Product Classification Database</h4>
                    <p className="text-sm text-gray-600">Search official FDA device classifications</p>
                  </div>
                </div>
              </a>

              <a
                href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRL/rl.cfm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-green-600" />
                  <div>
                    <h4 className="font-bold text-gray-900">Registration & Listing Database</h4>
                    <p className="text-sm text-gray-600">Search registered establishments and listed devices</p>
                  </div>
                </div>
              </a>

              <a
                href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-yellow-600" />
                  <div>
                    <h4 className="font-bold text-gray-900">510(k) Database</h4>
                    <p className="text-sm text-gray-600">Search cleared 510(k) submissions</p>
                  </div>
                </div>
              </a>

              <a
                href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-red-600" />
                  <div>
                    <h4 className="font-bold text-gray-900">PMA Database</h4>
                    <p className="text-sm text-gray-600">Search approved PMA applications</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/tools/regulatory-pathway"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Regulatory Pathway Tool</h4>
                <p className="text-sm text-gray-600">Determine 510(k), De Novo, or PMA pathway</p>
              </Link>
              
              <Link
                href="/regulations/510k-submission"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">510(k) Submission Guide</h4>
                <p className="text-sm text-gray-600">Complete guide to 510(k) requirements</p>
              </Link>
              
              <Link
                href="/tools/software-risk-class"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Software Classification</h4>
                <p className="text-sm text-gray-600">IEC 62304 software safety classification</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

