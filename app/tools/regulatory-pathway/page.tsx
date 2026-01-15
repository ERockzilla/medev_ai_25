'use client';

import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import RegulatoryPathwayTool from '@/components/RegulatoryPathwayTool';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { BookOpen, ArrowLeft, Scale, FileText, ExternalLink } from 'lucide-react';

export default function RegulatoryPathwayPage() {
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
              title="Regulatory Pathway Decision Tool"
              url="/tools/regulatory-pathway"
              type="tool"
            />
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-green-900 mb-2">
                  FDA Regulatory Pathway Decision Tool
                </h2>
                <p className="text-sm text-green-800 mb-4">
                  Choosing the right regulatory pathway is critical for your medical device&apos;s
                  time-to-market and development costs. This tool helps you determine whether
                  510(k), De Novo, or PMA is the appropriate pathway based on your device&apos;s
                  characteristics and risk profile.
                </p>
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <p className="font-bold text-green-700">510(k)</p>
                    <p className="text-green-600">3-6 mo</p>
                  </div>
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <p className="font-bold text-yellow-700">510(k)+</p>
                    <p className="text-yellow-600">4-12 mo</p>
                  </div>
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <p className="font-bold text-blue-700">De Novo</p>
                    <p className="text-blue-600">6-12 mo</p>
                  </div>
                  <div className="p-2 bg-red-100 rounded-lg">
                    <p className="font-bold text-red-700">PMA</p>
                    <p className="text-red-600">1-3 yr</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/tools/device-classification"
                  className="px-4 py-3 bg-white border-2 border-green-300 text-green-700 rounded-lg hover:bg-green-50 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <Scale className="w-5 h-5" />
                  Classification Tool
                </Link>

                <Link
                  href="/regulations/510k-submission"
                  className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <BookOpen className="w-5 h-5" />
                  510(k) Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <RegulatoryPathwayTool />

          {/* Pathway Comparison */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">Pathway Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Factor</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-green-600 uppercase">510(k)</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-blue-600 uppercase">De Novo</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-red-600 uppercase">PMA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Predicate Required</td>
                    <td className="px-4 py-3 text-center text-sm text-green-700">Yes</td>
                    <td className="px-4 py-3 text-center text-sm text-blue-700">No</td>
                    <td className="px-4 py-3 text-center text-sm text-red-700">No</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Typical Device Class</td>
                    <td className="px-4 py-3 text-center text-sm text-green-700">II (some III)</td>
                    <td className="px-4 py-3 text-center text-sm text-blue-700">I or II</td>
                    <td className="px-4 py-3 text-center text-sm text-red-700">III</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Clinical Data</td>
                    <td className="px-4 py-3 text-center text-sm text-green-700">Sometimes</td>
                    <td className="px-4 py-3 text-center text-sm text-blue-700">Sometimes</td>
                    <td className="px-4 py-3 text-center text-sm text-red-700">Usually</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">FDA User Fee (2024)</td>
                    <td className="px-4 py-3 text-center text-sm text-green-700">~$21,000</td>
                    <td className="px-4 py-3 text-center text-sm text-blue-700">~$124,000</td>
                    <td className="px-4 py-3 text-center text-sm text-red-700">~$425,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Review Timeline</td>
                    <td className="px-4 py-3 text-center text-sm text-green-700">~90 days</td>
                    <td className="px-4 py-3 text-center text-sm text-blue-700">~150 days</td>
                    <td className="px-4 py-3 text-center text-sm text-red-700">~180 days</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Standard of Review</td>
                    <td className="px-4 py-3 text-center text-sm text-green-700">Substantial Equivalence</td>
                    <td className="px-4 py-3 text-center text-sm text-blue-700">General/Special Controls</td>
                    <td className="px-4 py-3 text-center text-sm text-red-700">Safety & Effectiveness</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Concepts */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-900 mb-4">Key Regulatory Concepts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">Substantial Equivalence (SE)</h4>
                <p className="text-sm text-yellow-700">
                  For 510(k), you must show your device has the same intended use as the predicate
                  and either: (1) same technological characteristics, or (2) different characteristics
                  that don&apos;t raise new safety/effectiveness questions.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">Predicate Device</h4>
                <p className="text-sm text-yellow-700">
                  A legally marketed device that your device is compared to. Can be a pre-1976 device,
                  a 510(k)-cleared device, a De Novo device, or a reclassified device.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">Pre-Submission (Q-Sub)</h4>
                <p className="text-sm text-yellow-700">
                  A meeting or written feedback request with FDA to discuss regulatory pathway,
                  testing requirements, or clinical study design before submitting your application.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">IDE (Investigational Device Exemption)</h4>
                <p className="text-sm text-yellow-700">
                  Required for clinical studies of significant risk devices. Allows investigational
                  use while gathering data for regulatory submission.
                </p>
              </div>
            </div>
          </div>

          {/* 21 CFR 812 IDE Reference Section */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              21 CFR 812: Investigational Device Exemption (IDE)
            </h3>
            <p className="text-sm text-amber-800 mb-4">
              IDE regulations govern how clinical studies of investigational devices may be conducted in the US.
              The type of IDE required depends on the device&apos;s risk determination.
            </p>

            <div className="overflow-x-auto bg-white rounded-lg border border-amber-200">
              <table className="w-full text-sm">
                <thead className="bg-amber-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-amber-900">Study Type</th>
                    <th className="px-4 py-3 text-center font-semibold text-amber-900">FDA Approval</th>
                    <th className="px-4 py-3 text-center font-semibold text-amber-900">IRB Approval</th>
                    <th className="px-4 py-3 text-left font-semibold text-amber-900">Key Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100">
                  <tr className="hover:bg-amber-50">
                    <td className="px-4 py-3 font-medium text-red-700">Significant Risk (SR)</td>
                    <td className="px-4 py-3 text-center text-red-700">Required</td>
                    <td className="px-4 py-3 text-center text-amber-700">Required</td>
                    <td className="px-4 py-3 text-gray-700">Full IDE submission, 30-day FDA review, ongoing reporting, AE reporting within 10 days</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="px-4 py-3 font-medium text-yellow-700">Nonsignificant Risk (NSR)</td>
                    <td className="px-4 py-3 text-center text-green-700">Not Required</td>
                    <td className="px-4 py-3 text-center text-amber-700">Required</td>
                    <td className="px-4 py-3 text-gray-700">Abbreviated requirements per 812.2(b), sponsor makes NSR determination with IRB concurrence</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Exempt (812.2(c))</td>
                    <td className="px-4 py-3 text-center text-green-700">Not Required</td>
                    <td className="px-4 py-3 text-center text-amber-700">Required</td>
                    <td className="px-4 py-3 text-gray-700">Legally marketed devices, certain IVDs, consumer preference studies</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-white rounded-lg border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Significant Risk Device Criteria (21 CFR 812.3(m))</h4>
              <p className="text-sm text-amber-700 mb-2">A device is Significant Risk if it:</p>
              <ul className="text-sm text-amber-700 space-y-1 list-disc pl-5">
                <li>Is intended as an <strong>implant</strong></li>
                <li>Is used in <strong>supporting or sustaining human life</strong></li>
                <li>Is of <strong>substantial importance in diagnosing, curing, mitigating, or treating disease</strong></li>
                <li>Otherwise <strong>presents a potential for serious risk</strong> to the health, safety, or welfare of a subject</li>
              </ul>
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href="https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/investigational-device-exemption-ide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
              >
                <FileText className="w-4 h-4" />
                FDA IDE Guidance
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-812"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-amber-600 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors text-sm font-medium"
              >
                21 CFR Part 812 Full Text
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* When to Use Each Pathway */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">When to Use Each Pathway</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-2">510(k) - Substantial Equivalence</h4>
                <p className="text-sm text-green-800 mb-2">Use when:</p>
                <ul className="text-sm text-green-700 space-y-1 list-disc pl-5">
                  <li>You have identified a valid predicate device</li>
                  <li>Same intended use as predicate</li>
                  <li>Same or similar technology to predicate</li>
                  <li>Any differences don&apos;t raise new safety questions</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">De Novo - Novel Low/Moderate Risk</h4>
                <p className="text-sm text-blue-800 mb-2">Use when:</p>
                <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
                  <li>No valid predicate device exists</li>
                  <li>Device presents low-to-moderate risk</li>
                  <li>General and special controls can address risks</li>
                  <li>PMA level of evidence not warranted</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-900 mb-2">PMA - High Risk Devices</h4>
                <p className="text-sm text-red-800 mb-2">Use when:</p>
                <ul className="text-sm text-red-700 space-y-1 list-disc pl-5">
                  <li>Device is Class III with no predicate</li>
                  <li>Life-sustaining or life-supporting device</li>
                  <li>Device presents substantial risk of harm</li>
                  <li>Clinical evidence of safety and effectiveness needed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FDA Resources */}
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">FDA Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center gap-3"
              >
                <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Premarket Submission Selection</h4>
                  <p className="text-sm text-gray-600">FDA guidance on choosing submission type</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />
              </a>

              <a
                href="https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/how-study-and-market-your-device"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all flex items-center gap-3"
              >
                <FileText className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">How to Market Your Device</h4>
                  <p className="text-sm text-gray-600">Complete device marketing overview</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />
              </a>

              <a
                href="https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/pre-submissions-and-meetings-medical-device-submissions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all flex items-center gap-3"
              >
                <FileText className="w-8 h-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Pre-Submissions (Q-Sub)</h4>
                  <p className="text-sm text-gray-600">Get FDA feedback before submission</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />
              </a>

              <a
                href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-evidence-premarket-evaluation-medical-devices"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all flex items-center gap-3"
              >
                <FileText className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Clinical Evidence Guidance</h4>
                  <p className="text-sm text-gray-600">When and what clinical data is needed</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />
              </a>

              <a
                href="https://www.fda.gov/medical-devices/real-world-evidence-rwe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all flex items-center gap-3"
              >
                <FileText className="w-8 h-8 text-teal-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Real-World Evidence (RWE)</h4>
                  <p className="text-sm text-gray-600">Using RWD in regulatory decisions</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />
              </a>

              <a
                href="https://www.fda.gov/medical-devices/how-study-and-market-your-device/breakthrough-devices-program"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-rose-300 hover:shadow-md transition-all flex items-center gap-3"
              >
                <FileText className="w-8 h-8 text-rose-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Breakthrough Devices Program</h4>
                  <p className="text-sm text-gray-600">Expedited development and review</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/tools/device-classification"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Device Classification Tool</h4>
                <p className="text-sm text-gray-600">Determine FDA device class (I, II, III)</p>
              </Link>

              <Link
                href="/regulations/510k-submission"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">510(k) Submission Guide</h4>
                <p className="text-sm text-gray-600">Complete guide to 510(k) preparation</p>
              </Link>

              <Link
                href="/regulations/pma-submission"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">PMA Submission Guide</h4>
                <p className="text-sm text-gray-600">Premarket Approval requirements</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

