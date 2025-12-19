'use client';

import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Calculator, TrendingUp, FileText } from 'lucide-react';

export default function SixSigmaGuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-8">
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

          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Six Sigma for Medical Devices: Complete Learning Path
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Learn how to apply Six Sigma statistical methods to medical device development, 
              validation, and quality control. Based on industry best practices and regulatory requirements.
            </p>
          </div>

          {/* Course Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Risk Management with FMEA</h3>
                    <p className="text-gray-700 mb-2">
                      Master Failure Mode and Effects Analysis (FMEA) for ISO 14971 compliance. 
                      Learn to identify failure modes, calculate Risk Priority Numbers, and develop 
                      effective mitigation strategies.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                      <li>Severity, Occurrence, and Detection rating scales</li>
                      <li>RPN calculation and interpretation</li>
                      <li>Integration with design controls</li>
                      <li>Regulatory submission requirements</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Statistical Distributions</h3>
                    <p className="text-gray-700 mb-2">
                      Understand when and how to use normal, exponential, Weibull, and gamma distributions 
                      in medical device validation and reliability analysis.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                      <li>Distribution selection for different data types</li>
                      <li>Parameter estimation and goodness-of-fit testing</li>
                      <li>Confidence interval calculation</li>
                      <li>Reliability prediction with Weibull analysis</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Sample Size Determination</h3>
                    <p className="text-gray-700 mb-2">
                      Calculate statistically justified sample sizes for validation studies that satisfy 
                      FDA and ISO requirements.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                      <li>Proportion tests for pass/fail validation</li>
                      <li>Mean tests for continuous measurements</li>
                      <li>Power analysis for clinical studies</li>
                      <li>Documenting sample size rationale</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Reliability Engineering</h3>
                    <p className="text-gray-700 mb-2">
                      Predict device lifetime, calculate MTBF, and conduct accelerated life testing 
                      for regulatory submissions.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                      <li>Failure rate calculation</li>
                      <li>Reliability block diagrams</li>
                      <li>Accelerated testing protocols</li>
                      <li>Confidence bounds for reliability estimates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Course Details</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-600 mb-1">Duration</p>
                    <p className="font-bold text-gray-900">Self-paced (4-6 hours)</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Level</p>
                    <p className="font-bold text-gray-900">Beginner to Intermediate</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Prerequisites</p>
                    <p className="font-bold text-gray-900">Basic statistics, medical device knowledge</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Tools Included</p>
                    <p className="font-bold text-gray-900">Interactive calculators, templates, examples</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Industries</p>
                    <p className="font-bold text-gray-900">Medical devices, pharmaceuticals, diagnostics</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-blue-300">
                  <h4 className="font-bold text-gray-900 mb-3">Free Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Interactive calculators
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Downloadable templates
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Real device examples
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Regulatory guidance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Guide Modules */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/guides/six-sigma/fmea-guide"
                className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      Module 1: FMEA for Medical Devices
                    </h3>
                    <p className="text-sm text-gray-600">Complete guide to ISO 14971 risk management</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Learn to conduct systematic failure mode analysis, calculate Risk Priority Numbers, and develop 
                  mitigation strategies that satisfy FDA and EU MDR requirements.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    30 min read
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    5 examples
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                    Beginner
                  </span>
                </div>
              </Link>

              <Link
                href="/guides/six-sigma/distributions-guide"
                className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      Module 2: Statistical Distributions
                    </h3>
                    <p className="text-sm text-gray-600">Normal, Weibull, exponential, and gamma</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Master distribution selection, parameter estimation, and applications to device validation, 
                  reliability prediction, and process control.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    45 min read
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    8 examples
                  </span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                    Intermediate
                  </span>
                </div>
              </Link>

              <Link
                href="/guides/six-sigma/sample-size-guide"
                className="bg-white border-2 border-green-200 rounded-lg p-6 hover:border-green-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                      Module 3: Sample Size Calculation
                    </h3>
                    <p className="text-sm text-gray-600">FDA-compliant validation study sizing</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Calculate statistically justified sample sizes for proportion tests, mean comparisons, and 
                  clinical trials with proper documentation for protocols.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    35 min read
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    6 examples
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                    Beginner
                  </span>
                </div>
              </Link>

              <Link
                href="/guides/six-sigma/reliability-guide"
                className="bg-white border-2 border-orange-200 rounded-lg p-6 hover:border-orange-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                      Module 4: Reliability Engineering
                    </h3>
                    <p className="text-sm text-gray-600">Device lifetime and MTBF prediction</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Learn to predict device lifetime using Weibull analysis, calculate MTBF, conduct accelerated 
                  testing, and prepare reliability submissions for FDA.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    50 min read
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    7 examples
                  </span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">
                    Advanced
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Reference Materials */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reference Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Regulatory Standards</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>ISO 14971:2019 - Medical device risk management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>ISO 13485:2016 - Quality management systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>FDA QMSR - Quality Management System Regulation (ISO 13485 aligned)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>EU MDR 2017/745 - Medical Device Regulation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3">Additional Resources</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>Timothy Fraser - "System Reliability and Six Sigma in R and Python"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>FDA Guidance Documents (statistical software, clinical trials)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>NIST Engineering Statistics Handbook</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>IEC 60601-1 - Reliability requirements for electrical devices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

