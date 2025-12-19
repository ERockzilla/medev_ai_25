'use client';

import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import DistributionCalculator from '@/components/DistributionCalculator';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { BookOpen, Download, ArrowLeft } from 'lucide-react';

export default function DistributionsPage() {
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
              title="Distribution Calculator"
              url="/tools/distributions"
              type="tool"
            />
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-purple-900 mb-2">
                  Statistical Distributions in Medical Devices
                </h2>
                <p className="text-sm text-purple-800 mb-4">
                  Understanding probability distributions is essential for validation planning, reliability prediction, 
                  and statistical process control. Different distributions model different types of failure modes and 
                  biological processes.
                </p>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li><strong>Normal:</strong> Physiological measurements, manufacturing tolerances</li>
                  <li><strong>Exponential:</strong> Random failures, constant failure rate</li>
                  <li><strong>Weibull:</strong> Device lifetime, wear-out failures</li>
                  <li><strong>Gamma:</strong> Multi-stage processes, biological reactions</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/guides/six-sigma/distributions-guide"
                  className="px-4 py-3 bg-white border-2 border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <BookOpen className="w-5 h-5" />
                  Read Complete Guide
                </Link>
                
                <a
                  href="/templates/Statistical_Tables.pdf"
                  download
                  className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <Download className="w-5 h-5" />
                  Download Tables (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <DistributionCalculator />

          {/* Distribution Selection Guide */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Which Distribution Should I Use?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">1</span>
                  Normal Distribution
                </h4>
                <p className="text-sm text-gray-700 mb-2"><strong>Use when:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc mb-3">
                  <li>Data is symmetric around the mean</li>
                  <li>Natural variation in measurements</li>
                  <li>Many small independent factors contribute</li>
                </ul>
                <p className="text-sm text-gray-700 mb-1"><strong>Medical Device Examples:</strong></p>
                <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
                  <li>Blood pressure measurements in a population</li>
                  <li>Manufacturing tolerance of component dimensions</li>
                  <li>Measurement error in calibrated devices</li>
                  <li>Sample size calculations for validation studies</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">2</span>
                  Exponential Distribution
                </h4>
                <p className="text-sm text-gray-700 mb-2"><strong>Use when:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc mb-3">
                  <li>Time between random events</li>
                  <li>Memoryless process (constant failure rate)</li>
                  <li>Modeling early-life reliability</li>
                </ul>
                <p className="text-sm text-gray-700 mb-1"><strong>Medical Device Examples:</strong></p>
                <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
                  <li>Time to first component failure</li>
                  <li>Electronic component reliability</li>
                  <li>Random sensor drift events</li>
                  <li>Calculating MTBF for non-repairable devices</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">3</span>
                  Weibull Distribution
                </h4>
                <p className="text-sm text-gray-700 mb-2"><strong>Use when:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc mb-3">
                  <li>Modeling device lifetime</li>
                  <li>Failure rate changes over time</li>
                  <li>Shape parameter k describes failure pattern</li>
                </ul>
                <p className="text-sm text-gray-700 mb-1"><strong>Medical Device Examples:</strong></p>
                <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
                  <li>Implantable device lifetime (wear-out, k '&gt;' 1)</li>
                  <li>Battery degradation over time</li>
                  <li>Mechanical component fatigue failures</li>
                  <li>FDA-required reliability predictions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">4</span>
                  Gamma Distribution
                </h4>
                <p className="text-sm text-gray-700 mb-2"><strong>Use when:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc mb-3">
                  <li>Sum of multiple exponential events</li>
                  <li>Waiting time for multiple events</li>
                  <li>Modeling multi-stage processes</li>
                </ul>
                <p className="text-sm text-gray-700 mb-1"><strong>Medical Device Examples:</strong></p>
                <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
                  <li>Time to biochemical reaction completion</li>
                  <li>Multi-component system failures</li>
                  <li>Service life of complex systems</li>
                  <li>Healthcare process queue modeling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistical Tests Reference */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Common Statistical Tests for Medical Devices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Normality Tests</h4>
                <p className="text-sm text-gray-700 mb-2">Verify data follows normal distribution:</p>
                <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
                  <li>Shapiro-Wilk test (n &lt; 50)</li>
                  <li>Kolmogorov-Smirnov test (n &ge; 50)</li>
                  <li>Q-Q plot visual inspection</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Distribution Fitting</h4>
                <p className="text-sm text-gray-700 mb-2">Determine best-fit distribution:</p>
                <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
                  <li>Maximum Likelihood Estimation (MLE)</li>
                  <li>Anderson-Darling goodness-of-fit</li>
                  <li>Chi-squared test for categorical data</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Confidence Intervals</h4>
                <p className="text-sm text-gray-700 mb-2">Estimate parameter uncertainty:</p>
                <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
                  <li>95% CI for mean: x̄ ± 1.96(σ/√n)</li>
                  <li>Bootstrap methods for non-normal data</li>
                  <li>Likelihood ratio intervals for Weibull</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Hypothesis Testing</h4>
                <p className="text-sm text-gray-700 mb-2">Compare groups or validate specifications:</p>
                <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
                  <li>t-test for comparing means</li>
                  <li>F-test for comparing variances</li>
                  <li>Log-rank test for survival data</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Regulatory Context */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">Regulatory Requirements</h3>
            <div className="space-y-3 text-sm text-yellow-800">
              <div>
                <p className="font-bold">FDA Guidance - Statistical Software</p>
                <p>FDA requires validation of statistical software used for regulatory submissions. 
                Document assumptions about data distributions in validation protocols.</p>
              </div>
              
              <div>
                <p className="font-bold">ISO 14971 - Risk Analysis</p>
                <p>Probability estimates (occurrence ratings) should be based on statistical analysis 
                where possible, not just engineering judgment. Distribution fitting provides objective evidence.</p>
              </div>
              
              <div>
                <p className="font-bold">IEC 60601-1 - Reliability</p>
                <p>Electrical medical device standard requires reliability analysis. Weibull analysis 
                is commonly used to demonstrate compliance with reliability requirements.</p>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/tools/sample-size"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Sample Size Calculator</h4>
                <p className="text-sm text-gray-600">Determine required sample sizes based on distribution assumptions</p>
              </Link>
              
              <Link
                href="/tools/fmea"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">FMEA Calculator</h4>
                <p className="text-sm text-gray-600">Use distribution analysis to estimate occurrence ratings</p>
              </Link>
              
              <Link
                href="/tools/reliability"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all opacity-50 cursor-not-allowed"
                onClick={(e) => e.preventDefault()}
              >
                <h4 className="font-bold text-gray-900 mb-2">Reliability Analysis</h4>
                <p className="text-sm text-gray-600">Apply Weibull analysis for lifetime predictions (Coming Soon)</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

