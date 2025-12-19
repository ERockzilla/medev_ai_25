'use client';

import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import SampleSizeCalculator from '@/components/SampleSizeCalculator';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { BookOpen, Download, ArrowLeft } from 'lucide-react';

export default function SampleSizePage() {
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
              title="Sample Size Calculator"
              url="/tools/sample-size"
              type="tool"
            />
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-green-900 mb-2">
                  Why Sample Size Matters
                </h2>
                <p className="text-sm text-green-800 mb-4">
                  Proper sample size determination is critical for medical device validation. Too few samples 
                  may fail to detect problems, while too many wastes resources. FDA and ISO standards require 
                  statistical justification for sample sizes in validation protocols.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-green-800">
                  <div>
                    <p className="font-bold mb-1">Under-powered Study:</p>
                    <ul className="text-xs space-y-1 pl-4 list-disc">
                      <li>May miss true effects</li>
                      <li>Regulatory questions</li>
                      <li>Need to repeat study</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Over-powered Study:</p>
                    <ul className="text-xs space-y-1 pl-4 list-disc">
                      <li>Wastes time and money</li>
                      <li>Delays product launch</li>
                      <li>Ethical concerns (human subjects)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/guides/six-sigma/sample-size-guide"
                  className="px-4 py-3 bg-white border-2 border-green-300 text-green-700 rounded-lg hover:bg-green-50 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <BookOpen className="w-5 h-5" />
                  Read Complete Guide
                </Link>
                
                <a
                  href="/templates/Sample_Size_Tables.pdf"
                  download
                  className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <Download className="w-5 h-5" />
                  Download Tables (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <SampleSizeCalculator />

          {/* When to Use Each Test Type */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Choosing the Right Test Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">Proportion Test</h4>
                <p className="text-sm text-blue-800 mb-3">
                  Use when measuring binary outcomes (pass/fail, yes/no)
                </p>
                <p className="text-xs font-bold text-blue-900 mb-2">Examples:</p>
                <ul className="text-xs text-blue-800 space-y-1 pl-4 list-disc">
                  <li>Electrical safety test pass rate</li>
                  <li>Software validation test cases</li>
                  <li>Visual inspection acceptance</li>
                  <li>Patient treatment success rate</li>
                  <li>Device startup success rate</li>
                </ul>
                <p className="text-xs text-blue-700 mt-3 italic">
                  Typical: 95% confidence, ±5% margin
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                <h4 className="font-bold text-purple-900 mb-3">Mean Test</h4>
                <p className="text-sm text-purple-800 mb-3">
                  Use when measuring continuous variables (measurements with units)
                </p>
                <p className="text-xs font-bold text-purple-900 mb-2">Examples:</p>
                <ul className="text-xs text-purple-800 space-y-1 pl-4 list-disc">
                  <li>Blood pressure monitor accuracy</li>
                  <li>Temperature sensor calibration</li>
                  <li>Drug dosing accuracy</li>
                  <li>Component dimension tolerances</li>
                  <li>Response time measurements</li>
                </ul>
                <p className="text-xs text-purple-700 mt-3 italic">
                  Typical: 95% confidence, ±2σ margin
                </p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                <h4 className="font-bold text-orange-900 mb-3">Validation Study</h4>
                <p className="text-sm text-orange-800 mb-3">
                  Use when comparing two groups or testing hypotheses
                </p>
                <p className="text-xs font-bold text-orange-900 mb-2">Examples:</p>
                <ul className="text-xs text-orange-800 space-y-1 pl-4 list-disc">
                  <li>Clinical efficacy vs. control</li>
                  <li>New design vs. predicate device</li>
                  <li>Treatment A vs. Treatment B</li>
                  <li>Usability task completion times</li>
                  <li>Before/after design changes</li>
                </ul>
                <p className="text-xs text-orange-700 mt-3 italic">
                  Typical: 80-90% power, 95% confidence
                </p>
              </div>
            </div>
          </div>

          {/* FDA Guidance Reference */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Regulatory Standards for Sample Sizes</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">FDA - Design Validation</h4>
                <p className="text-sm text-blue-800 mb-2">
                  <strong>FDA QMSR (ISO 13485 7.3.6)</strong> requires design validation with "actual or simulated use conditions" 
                  and demonstration that device meets user needs. Sample sizes must be "adequate" and statistically justified.
                </p>
                <p className="text-xs text-blue-700">
                  FDA guidance: "The number of samples tested should be sufficient to demonstrate that the device 
                  will consistently meet predetermined specifications under actual or simulated use conditions."
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-900 mb-2">ISO 13485 - Statistical Techniques</h4>
                <p className="text-sm text-purple-800 mb-2">
                  <strong>Clause 8.1.2</strong> requires documented rationale for sample sizes used in validation. 
                  Statistical methods must be appropriate for the data type and study objectives.
                </p>
                <p className="text-xs text-purple-700">
                  ISO guidance: "When sampling is used as a means of acceptance, sample size shall be based on 
                  recognized statistical principles and appropriate for the intended use of the product."
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-2">IEC 62366-1 - Usability Validation</h4>
                <p className="text-sm text-green-800 mb-2">
                  <strong>Clause 7</strong> recommends minimum 15 subjects per user group for usability validation, 
                  with higher numbers if use errors are observed or statistical analysis is required.
                </p>
                <p className="text-xs text-green-700">
                  IEC guidance: "The sample size shall be sufficient to identify use errors and patterns of use errors."
                </p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-900 mb-2">ANSI/AAMI ST79 - Sterilization</h4>
                <p className="text-sm text-orange-800 mb-2">
                  Sterilization validation requires specific sample sizes based on sterility assurance level (SAL). 
                  Minimum 30 samples per cycle for initial qualification.
                </p>
                <p className="text-xs text-orange-700">
                  Standard requirement: "Three consecutive successful production runs with n≥30 per run for 
                  process validation."
                </p>
              </div>
            </div>
          </div>

          {/* Common Pitfalls */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-red-900 mb-4">Common Pitfalls to Avoid</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-red-800 mb-2">❌ Using "30 samples" rule blindly</h4>
                <p className="text-sm text-red-700">
                  The "n=30" rule is a rough guideline, not a statistical requirement. 
                  Actual sample size depends on variability, confidence level, and margin of error.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-red-800 mb-2">❌ Ignoring statistical assumptions</h4>
                <p className="text-sm text-red-700">
                  Sample size formulas assume specific distributions (e.g., normal). 
                  If data is skewed, you may need larger samples or non-parametric methods.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-red-800 mb-2">❌ Not accounting for dropouts</h4>
                <p className="text-sm text-red-700">
                  In clinical studies, plan for 10-20% dropout rate. 
                  Calculate sample size, then increase by expected dropout percentage.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-red-800 mb-2">❌ Post-hoc sample size calculation</h4>
                <p className="text-sm text-red-700">
                  Sample size must be determined BEFORE conducting the study. 
                  Post-hoc calculations are statistically invalid and rejected by FDA.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-red-800 mb-2">❌ Confusing precision and power</h4>
                <p className="text-sm text-red-700">
                  Margin of error relates to precision of estimate. 
                  Statistical power relates to detecting true effects. These are different concepts.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-red-800 mb-2">❌ Not documenting assumptions</h4>
                <p className="text-sm text-red-700">
                  Document all assumptions (expected proportion, standard deviation, effect size) 
                  and their sources (pilot data, literature, engineering judgment).
                </p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4">✅ Best Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-800 mb-2">Document in Protocol</h4>
                <p className="text-sm text-green-700 mb-2">Include in validation protocol:</p>
                <ul className="text-xs text-green-700 space-y-1 pl-4 list-disc">
                  <li>Sample size calculation method</li>
                  <li>All input parameters and assumptions</li>
                  <li>Source of estimates (pilot data, literature)</li>
                  <li>Statistical software used (if applicable)</li>
                  <li>Rationale for confidence level choice</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-green-800 mb-2">Conduct Pilot Studies</h4>
                <p className="text-sm text-green-700 mb-2">Small preliminary studies help:</p>
                <ul className="text-xs text-green-700 space-y-1 pl-4 list-disc">
                  <li>Estimate variability (standard deviation)</li>
                  <li>Refine test procedures</li>
                  <li>Identify potential issues early</li>
                  <li>Justify sample size calculations</li>
                  <li>Reduce risk of underpowered main study</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-green-800 mb-2">Use Conservative Estimates</h4>
                <p className="text-sm text-green-700 mb-2">When uncertain:</p>
                <ul className="text-xs text-green-700 space-y-1 pl-4 list-disc">
                  <li>Assume higher variability than expected</li>
                  <li>Use 95% confidence (not 90%) for safety-critical</li>
                  <li>Target 90% power (not 80%) for pivotal studies</li>
                  <li>Round up, not down</li>
                  <li>Plan for contingencies</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-green-800 mb-2">Get Statistical Review</h4>
                <p className="text-sm text-green-700 mb-2">Have a statistician review:</p>
                <ul className="text-xs text-green-700 space-y-1 pl-4 list-disc">
                  <li>Complex study designs (multi-arm, crossover)</li>
                  <li>Clinical trial protocols</li>
                  <li>Non-standard statistical methods</li>
                  <li>Regulatory submissions (510(k), PMA)</li>
                  <li>When in doubt - always consult an expert!</li>
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
                <p className="text-sm text-gray-600">Understand distributions underlying sample size calculations</p>
              </Link>
              
              <Link
                href="/tools/fmea"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">FMEA Calculator</h4>
                <p className="text-sm text-gray-600">Size validation studies for risk mitigation activities</p>
              </Link>
              
              <Link
                href="/tools/control-charts"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all opacity-50 cursor-not-allowed"
                onClick={(e) => e.preventDefault()}
              >
                <h4 className="font-bold text-gray-900 mb-2">Control Charts</h4>
                <p className="text-sm text-gray-600">Sample size affects control chart sensitivity (Coming Soon)</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

