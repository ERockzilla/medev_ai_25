'use client';

import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import DesignChangeNotification from '@/components/DesignChangeNotification';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { BookOpen, ArrowLeft, Bell, FileText, AlertTriangle, Building2 } from 'lucide-react';

export default function DesignChangeNotificationPage() {
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
              title="Design Change Notification Guide"
              url="/tools/design-change-notification"
              type="tool"
            />
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-orange-900 mb-2">
                  Design Change Notification Guide
                </h2>
                <p className="text-sm text-orange-800 mb-4">
                  Understanding when design changes require notification to regulatory bodies 
                  (FDA, EU Notified Bodies) and test labs (NRTL/CB) is critical for compliance. 
                  Early decisions during design can prevent costly re-submissions later.
                </p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Bell className="w-4 h-4 mx-auto text-blue-600 mb-1" />
                    <p className="font-bold text-blue-700">FDA</p>
                    <p className="text-blue-600">510(k), PMA Supp</p>
                  </div>
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Building2 className="w-4 h-4 mx-auto text-purple-600 mb-1" />
                    <p className="font-bold text-purple-700">Test Labs</p>
                    <p className="text-purple-600">UL, TÜV, CSA</p>
                  </div>
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="w-4 h-4 mx-auto text-green-600 mb-1" />
                    <p className="font-bold text-green-700">EU MDR</p>
                    <p className="text-green-600">Notified Body</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/regulations/cfr-820"
                  className="px-4 py-3 bg-white border-2 border-orange-300 text-orange-700 rounded-lg hover:bg-orange-50 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <BookOpen className="w-5 h-5" />
                  21 CFR 820.30(i)
                </Link>
                
                <Link
                  href="/how-to/design-development-iso13485"
                  className="px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <FileText className="w-5 h-5" />
                  Design Controls Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Tool */}
          <DesignChangeNotification />

          {/* Why This Matters Section */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Why Design Change Planning Matters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Common Costly Mistakes</h4>
                <ul className="text-sm text-red-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Implementing changes before regulatory assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Not tracking cumulative changes (death by 1000 cuts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Assuming test lab certification covers all changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Missing EU MDR significant change notification</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Potential Consequences</h4>
                <ul className="text-sm text-red-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">!</span>
                    <span>FDA Warning Letters and 483 observations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">!</span>
                    <span>Loss of CE marking and EU market access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">!</span>
                    <span>Product recalls and market withdrawals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">!</span>
                    <span>Extended timeline for new product introductions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4">Best Practices for Design Changes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Early Planning</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Assess notification requirements before design</li>
                  <li>• Consider long-term product roadmap</li>
                  <li>• Factor in regulatory timeline to project plans</li>
                  <li>• Build flexibility for component changes</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Documentation</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Maintain change history log</li>
                  <li>• Document risk analysis for each change</li>
                  <li>• Keep Letters to File organized</li>
                  <li>• Track cumulative changes</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Communication</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Proactive notification to test labs</li>
                  <li>• Regular NB communication (EU)</li>
                  <li>• Cross-functional change review</li>
                  <li>• Supplier change notification agreements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 21 CFR 820.30(i) Requirements */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">21 CFR 820.30(i) - Design Changes</h3>
            <div className="prose prose-sm max-w-none text-gray-700">
              <blockquote className="border-l-4 border-blue-500 pl-4 italic bg-blue-50 p-4 rounded-r-lg">
                &quot;Each manufacturer shall establish and maintain procedures for the identification, 
                documentation, validation or where appropriate verification, review, and approval 
                of design changes before their implementation.&quot;
              </blockquote>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900">Required Elements:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Identification of the change</li>
                    <li>• Documentation of the change</li>
                    <li>• Verification or validation of the change</li>
                    <li>• Review of the change impact</li>
                    <li>• Approval before implementation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Key Considerations:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Impact on design outputs</li>
                    <li>• Impact on finished device</li>
                    <li>• Regulatory submission impact</li>
                    <li>• Effect on validated processes</li>
                    <li>• DMR and DHF updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* NRTL/CB Notification Guide */}
          <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4">Test Lab (NRTL/CB) Notification Guide</h3>
            <p className="text-sm text-purple-800 mb-4">
              When your product has third-party safety certifications (UL, TÜV, CSA, etc.), many changes 
              require notification even if no FDA submission is needed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">Typically Require Notification</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Any electrical component changes</li>
                  <li>• Enclosure material or dimensions</li>
                  <li>• Power supply changes</li>
                  <li>• PCB layout modifications</li>
                  <li>• Insulation system changes</li>
                  <li>• Manufacturing location changes</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">May Not Require Notification</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Cosmetic changes (colors, labels)</li>
                  <li>• Equivalent component substitutions*</li>
                  <li>• Software changes (non-safety)*</li>
                  <li>• Packaging changes (non-sterile barrier)</li>
                </ul>
                <p className="text-xs text-purple-600 mt-2">
                  *Check your specific certification for requirements
                </p>
              </div>
            </div>
          </div>

          {/* EU MDR Significant Changes */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">EU MDR - Significant Changes (MDCG 2020-3)</h3>
            <p className="text-sm text-blue-800 mb-4">
              Under EU MDR, &quot;significant changes&quot; to certified devices require Notified Body assessment 
              before implementation. The MDCG 2020-3 guidance provides criteria for determining significance.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800">Significant Changes Include:</h4>
                <ul className="text-sm text-blue-700 grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
                  <li>• Changes to intended purpose</li>
                  <li>• New or modified indications</li>
                  <li>• Changes affecting safety/performance</li>
                  <li>• Design changes to critical components</li>
                  <li>• New manufacturing sites (for critical processes)</li>
                  <li>• Changes to sterilization method</li>
                  <li>• Software changes affecting safety</li>
                  <li>• Material changes (biocompatibility)</li>
                </ul>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-300">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> For legacy devices transitioning under MDR Article 120, 
                  you must notify your NB of all significant changes. Failure to do so can result in 
                  loss of market authorization.
                </p>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/tools/fmea"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">FMEA Calculator</h4>
                <p className="text-sm text-gray-600">Risk analysis for design changes</p>
              </Link>
              
              <Link
                href="/tools/regulatory-pathway"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Regulatory Pathway Tool</h4>
                <p className="text-sm text-gray-600">Determine submission requirements</p>
              </Link>
              
              <Link
                href="/how-to/design-development-iso13485"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Design Controls Guide</h4>
                <p className="text-sm text-gray-600">ISO 13485 7.3 implementation</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

