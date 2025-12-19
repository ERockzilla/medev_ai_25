'use client';

import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import SoftwareRiskClassification from '@/components/SoftwareRiskClassification';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { BookOpen, ArrowLeft, Code, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export default function SoftwareRiskClassPage() {
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
              title="Software Risk Classification"
              url="/tools/software-risk-class"
              type="tool"
            />
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-purple-900 mb-2">
                  IEC 62304 Software Safety Classification
                </h2>
                <p className="text-sm text-purple-800 mb-4">
                  IEC 62304 requires medical device software to be classified based on the potential 
                  for contributing to hazardous situations. The classification determines the rigor 
                  of software development processes, documentation, and testing required.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <p className="text-lg font-bold text-green-700">Class A</p>
                    <p className="text-xs text-green-600">No injury possible</p>
                  </div>
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <p className="text-lg font-bold text-yellow-700">Class B</p>
                    <p className="text-xs text-yellow-600">Non-serious injury</p>
                  </div>
                  <div className="p-2 bg-red-100 rounded-lg">
                    <p className="text-lg font-bold text-red-700">Class C</p>
                    <p className="text-xs text-red-600">Death/serious injury</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/standards/iec-62304"
                  className="px-4 py-3 bg-white border-2 border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <BookOpen className="w-5 h-5" />
                  IEC 62304 Standard
                </Link>
                
                <Link
                  href="/standards/iec-81001-5-1"
                  className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <Shield className="w-5 h-5" />
                  Cybersecurity Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <SoftwareRiskClassification />

          {/* Regulatory Context */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">Regulatory Context</h3>
            <div className="space-y-4 text-sm text-yellow-800">
              <div>
                <p className="font-bold">IEC 62304:2006/AMD1:2015 - Medical Device Software Life Cycle Processes</p>
                <p>Defines the framework for software development, including planning, requirements, design, 
                implementation, testing, and maintenance. The 2015 amendment (AMD1) refined the classification 
                process and clarified that risk controls can be used to reduce the software safety class.</p>
              </div>
              
              <div>
                <p className="font-bold">FDA Software Guidance</p>
                <p>FDA recognizes IEC 62304 and expects software safety classification in 510(k) submissions. 
                The level of documentation required in regulatory submissions generally aligns with the 
                IEC 62304 class. Class C software typically requires the most extensive documentation.</p>
              </div>
              
              <div>
                <p className="font-bold">EU MDR and Software</p>
                <p>Under EU MDR 2017/745, software is explicitly recognized as a medical device. 
                Classification rules (Annex VIII, Rule 11) consider intended purpose and risk. 
                IEC 62304 compliance is presumed to satisfy software-related requirements.</p>
              </div>

              <div className="mt-4 pt-4 border-t border-yellow-300">
                <p className="font-bold mb-2">Key Considerations:</p>
                <ul className="space-y-1 pl-5 list-disc">
                  <li>Classification is based on contribution to hazardous situations, not probability</li>
                  <li>Risk controls can reduce the software safety class (per AMD1:2015)</li>
                  <li>Legacy software requires gap analysis against current requirements</li>
                  <li>SOUP (Software of Unknown Provenance) must be evaluated for risk contribution</li>
                  <li>Software segregation can allow different classes for different components</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Classification Process */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Software Classification Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-3">1</div>
                <h4 className="font-bold text-blue-900 mb-2">Identify Hazards</h4>
                <p className="text-xs text-blue-800">
                  Perform hazard analysis per ISO 14971 to identify all hazardous situations 
                  the device could contribute to.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mb-3">2</div>
                <h4 className="font-bold text-purple-900 mb-2">Map Software to Hazards</h4>
                <p className="text-xs text-purple-800">
                  Determine which software items could contribute to each hazardous situation 
                  through malfunction or incorrect output.
                </p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold mb-3">3</div>
                <h4 className="font-bold text-orange-900 mb-2">Evaluate Severity</h4>
                <p className="text-xs text-orange-800">
                  For each hazardous situation, determine if it could result in death/serious 
                  injury (Class C) or non-serious injury (Class B).
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mb-3">4</div>
                <h4 className="font-bold text-green-900 mb-2">Consider Risk Controls</h4>
                <p className="text-xs text-green-800">
                  Hardware risk controls outside the software item may reduce the class if 
                  they reliably prevent the hazardous situation.
                </p>
              </div>
            </div>
          </div>

          {/* Class Requirements Comparison */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">IEC 62304 Requirements by Class</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Process</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-green-600 uppercase">Class A</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-yellow-600 uppercase">Class B</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-red-600 uppercase">Class C</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { process: 'Software Development Planning', a: '●', b: '●', c: '●' },
                    { process: 'Software Requirements Analysis', a: '○', b: '●', c: '●' },
                    { process: 'Software Architectural Design', a: '○', b: '●', c: '●' },
                    { process: 'Software Detailed Design', a: '○', b: '●', c: '●' },
                    { process: 'Software Unit Implementation', a: '○', b: '●', c: '●' },
                    { process: 'Software Unit Verification', a: '○', b: '●', c: '●' },
                    { process: 'Software Integration Testing', a: '○', b: '●', c: '●' },
                    { process: 'Software System Testing', a: '○', b: '●', c: '●' },
                    { process: 'Software Release', a: '○', b: '●', c: '●' },
                    { process: 'Software Configuration Management', a: '●', b: '●', c: '●' },
                    { process: 'Software Problem Resolution', a: '●', b: '●', c: '●' },
                    { process: 'Software Risk Management', a: '○', b: '●', c: '●' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{row.process}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={row.a === '●' ? 'text-green-600 text-lg' : 'text-gray-300'}>
                          {row.a}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={row.b === '●' ? 'text-yellow-600 text-lg' : 'text-gray-300'}>
                          {row.b}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={row.c === '●' ? 'text-red-600 text-lg' : 'text-gray-300'}>
                          {row.c}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-600">
              ● Required | ○ Not required (but may still be good practice)
            </div>
          </div>

          {/* Common Pitfalls */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-red-900 mb-4">Common Classification Mistakes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Underestimating Severity
                </h4>
                <p className="text-sm text-red-700">
                  Not considering worst-case scenarios or cascading failures. Remember: classification 
                  is based on what <em>could</em> happen, not what is <em>likely</em> to happen.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Ignoring Indirect Hazards
                </h4>
                <p className="text-sm text-red-700">
                  Software that provides diagnostic information can contribute to hazards through 
                  misdiagnosis, even if it doesn&apos;t directly control therapeutic actions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Claiming Class Reduction Without Evidence
                </h4>
                <p className="text-sm text-red-700">
                  Risk controls that reduce software class must be documented and validated. 
                  Hardware controls must be independent of the software being classified.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Not Considering SOUP
                </h4>
                <p className="text-sm text-red-700">
                  Third-party libraries, operating systems, and frameworks (SOUP) inherit the 
                  class of the software item that uses them for safety-related functions.
                </p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Best Practices
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-800 mb-2">Document Classification Rationale</h4>
                <ul className="text-sm text-green-700 space-y-1 pl-4 list-disc">
                  <li>Record the hazard analysis supporting the classification</li>
                  <li>Document any risk controls that reduce the class</li>
                  <li>Include traceability to ISO 14971 risk management</li>
                  <li>Review and update classification with design changes</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-green-800 mb-2">Consider Software Architecture</h4>
                <ul className="text-sm text-green-700 space-y-1 pl-4 list-disc">
                  <li>Segregate safety-critical from non-critical functions</li>
                  <li>Design for different classes in different software items</li>
                  <li>Implement defensive programming for Class B/C</li>
                  <li>Use proven software development tools</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-green-800 mb-2">Plan for Regulatory Submission</h4>
                <ul className="text-sm text-green-700 space-y-1 pl-4 list-disc">
                  <li>Include classification in Software Development Plan</li>
                  <li>Reference IEC 62304 conformity in design history file</li>
                  <li>Prepare Software Documentation Level summary</li>
                  <li>Be prepared to justify classification to auditors</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-green-800 mb-2">Maintain Throughout Lifecycle</h4>
                <ul className="text-sm text-green-700 space-y-1 pl-4 list-disc">
                  <li>Re-evaluate classification after significant changes</li>
                  <li>Monitor post-market feedback for classification impact</li>
                  <li>Update risk management file as needed</li>
                  <li>Document legacy software gaps and remediation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/standards/iec-62304"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">IEC 62304 Standard</h4>
                <p className="text-sm text-gray-600">Complete guide to medical device software lifecycle processes</p>
              </Link>
              
              <Link
                href="/tools/fmea"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">FMEA Calculator</h4>
                <p className="text-sm text-gray-600">Risk analysis tool for identifying software hazards</p>
              </Link>
              
              <Link
                href="/standards/iso-14971"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">ISO 14971</h4>
                <p className="text-sm text-gray-600">Risk management process that informs software classification</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

