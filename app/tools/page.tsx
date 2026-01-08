'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import { Calculator, BarChart3, TrendingUp, FileText, Download, Brain, Zap, Code, AlertTriangle, Shield, Scale, Wifi } from 'lucide-react';
import AnimatedIcon from '@/components/AnimatedIcon';
import Footer from '@/components/Footer';

const TOOLS = [
  {
    id: 'fmea',
    title: 'FMEA Calculator',
    icon: Calculator,
    color: 'blue',
    description: 'Failure Mode and Effects Analysis for ISO 14971 Risk Management',
    features: [
      'Interactive RPN calculator with severity/occurrence/detection guides',
      'Export FMEA records to CSV for regulatory submissions',
      'Pre-loaded examples for laser and home-use devices',
      'Automatic risk level classification',
    ],
    href: '/tools/fmea',
    status: 'available',
    difficulty: 'Beginner',
  },
  {
    id: 'distributions',
    title: 'Statistical Distributions',
    icon: BarChart3,
    color: 'purple',
    description: 'Visualize and analyze probability distributions for validation studies',
    features: [
      'Normal, exponential, Weibull, and gamma distributions',
      'Interactive parameter adjustment with real-time charts',
      'PDF and CDF visualizations',
      'Medical device application examples',
    ],
    href: '/tools/distributions',
    status: 'available',
    difficulty: 'Intermediate',
  },
  {
    id: 'sample-size',
    title: 'Sample Size Calculator',
    icon: TrendingUp,
    color: 'green',
    description: 'Calculate required sample sizes for validation and clinical studies',
    features: [
      'Proportion, mean, and validation study calculations',
      'Power analysis for clinical trials',
      'Confidence interval calculations',
      'FDA-compliant recommendations',
    ],
    href: '/tools/sample-size',
    status: 'available',
    difficulty: 'Intermediate',
  },
  {
    id: 'reliability',
    title: 'Reliability Analysis',
    icon: TrendingUp,
    color: 'orange',
    description: 'MTBF calculations and device lifetime predictions',
    features: [
      'Mean Time Between Failures (MTBF) calculator',
      'Reliability prediction charts',
      'Accelerated life testing analysis',
      'Confidence intervals for reliability estimates',
    ],
    href: '/tools/reliability',
    status: 'coming-soon',
    difficulty: 'Advanced',
  },
  {
    id: 'control-charts',
    title: 'Control Charts',
    icon: BarChart3,
    color: 'red',
    description: 'Statistical Process Control for manufacturing quality monitoring',
    features: [
      'X-bar, R, p, and c chart generators',
      'Automatic control limit calculation',
      'Out-of-control condition detection',
      'Trend and shift pattern recognition',
    ],
    href: '/tools/control-charts',
    status: 'coming-soon',
    difficulty: 'Intermediate',
  },
  {
    id: 'doe',
    title: 'Design of Experiments',
    icon: Brain,
    color: 'indigo',
    description: 'Plan and analyze factorial experiments and response surface studies',
    features: [
      'Factorial design generator',
      'Response surface methodology',
      'Interaction effect visualization',
      'Optimization recommendations',
    ],
    href: '/tools/doe',
    status: 'coming-soon',
    difficulty: 'Advanced',
  },
  {
    id: 'laser-safety',
    title: 'Laser Safety Calculator',
    icon: Zap,
    color: 'red',
    description: 'Calculate Maximum Permissible Exposure (MPE) and Nominal Ocular Hazard Distance (NOHD)',
    features: [
      'MPE calculations per IEC 60825-1 and ANSI Z136.1',
      'NOHD calculations for laser classification',
      'Beam divergence and power density analysis',
      'Safety interlock distance requirements',
    ],
    href: '/tools/laser-safety',
    status: 'available',
    difficulty: 'Intermediate',
  },
  {
    id: 'software-risk-class',
    title: 'Software Risk Classification',
    icon: Code,
    color: 'purple',
    description: 'Interactive diagram tool for IEC 62304 software safety classification',
    features: [
      'Decision tree for Class A, B, C classification',
      'IEC 62304 compliance guidance',
      'SaMD classification support',
      'Export classification rationale',
    ],
    href: '/tools/software-risk-class',
    status: 'available',
    difficulty: 'Beginner',
  },
  {
    id: 'design-change-notification',
    title: 'Design Change Notification Guide',
    icon: AlertTriangle,
    color: 'orange',
    description: 'Visual decision tool for when to notify test labs or regulatory bodies',
    features: [
      'Interactive flowchart for design change types',
      'NRTL notification requirements',
      'FDA 510(k) supplement determination',
      'EU MDR significant change assessment',
    ],
    href: '/tools/design-change-notification',
    status: 'available',
    difficulty: 'Beginner',
  },
  {
    id: 'device-classification',
    title: 'Device Classification Tool',
    icon: Scale,
    color: 'blue',
    description: 'Determine FDA device class and regulatory controls',
    features: [
      'FDA classification database search',
      'Product code identification',
      'Regulatory controls assessment',
      'Special controls guidance links',
    ],
    href: '/tools/device-classification',
    status: 'available',
    difficulty: 'Beginner',
  },
  {
    id: 'regulatory-pathway',
    title: 'Regulatory Pathway Decision Tool',
    icon: Shield,
    color: 'green',
    description: 'Determine appropriate FDA submission pathway (510k, PMA, De Novo)',
    features: [
      'Interactive decision tree',
      'Substantial equivalence assessment',
      'PMA vs 510(k) determination',
      'De Novo eligibility checker',
    ],
    href: '/tools/regulatory-pathway',
    status: 'available',
    difficulty: 'Intermediate',
  },
  {
    id: 'cyber-device-classification',
    title: 'Cyber Device Classification',
    icon: Wifi,
    color: 'red',
    description: 'Determine if your device is a "cyber device" per FDA 524B requirements',
    features: [
      'FD&C Act Section 524B cyber device determination',
      'Standard vs Enhanced tier classification',
      'SBOM requirements guidance',
      'Premarket cybersecurity documentation checklist',
    ],
    href: '/tools/cyber-device-classification',
    status: 'available',
    difficulty: 'Intermediate',
  },
];

const TEMPLATE_PACKS = [
  {
    title: 'Non-Technical Templates',
    description: 'Excel/PDF plug-and-play templates',
    icon: FileText,
    color: 'green',
    items: [
      'FMEA Worksheet with severity scales',
      'Sample Size Quick Reference Table',
      'Risk Assessment Checklist',
      'Statistical Tables (Chi-squared, t-distribution)',
      'Process Control Chart Templates',
    ],
    downloadUrl: '#',
  },
  {
    title: 'Intermediate Templates',
    description: 'Excel workbooks with built-in formulas',
    icon: Calculator,
    color: 'blue',
    items: [
      'FMEA Calculator with automatic RPN',
      'Sample Size Calculator spreadsheet',
      'Control Chart Generator',
      'Reliability Prediction Workbook',
    ],
    downloadUrl: '#',
  },
  {
    title: 'Technical Scripts',
    description: 'Python/R code for advanced analysis',
    icon: Download,
    color: 'purple',
    items: [
      'FMEA Analysis Script (Pareto charts)',
      'Distribution Fitting Toolkit',
      'Reliability Analysis Scripts',
      'DOE Analysis Templates',
    ],
    downloadUrl: '#',
  },
];

export default function ToolsPage() {
  const [filterDifficulty, setFilterDifficulty] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const filteredTools = TOOLS.filter(tool => {
    if (filterDifficulty && tool.difficulty !== filterDifficulty) return false;
    if (filterStatus && tool.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Hero Section */}
          {/* Hero Section */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Knowledge Center
            </Link>
          </div>

          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg flex-shrink-0">
                <AnimatedIcon variant="calculator" size={32} className="text-blue-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Medical Device Tools & Calculators</h1>
                <p className="text-xl text-gray-600">
                  Tools designed to support your development process.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  ⚠️ These tools are still under development and have not been validated.
                  Please be sure to double check the results!
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Available Tools</p>
              <p className="text-3xl font-bold text-blue-600">{TOOLS.filter(t => t.status === 'available').length}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Coming Soon</p>
              <p className="text-3xl font-bold text-purple-600">{TOOLS.filter(t => t.status === 'coming-soon').length}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Template Packs</p>
              <p className="text-3xl font-bold text-green-600">{TEMPLATE_PACKS.length}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Guides & Examples</p>
              <p className="text-3xl font-bold text-orange-600">12+</p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-sm font-medium text-gray-700">Filter by:</span>

              <div className="flex gap-2">
                <button
                  onClick={() => setFilterDifficulty(null)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filterDifficulty === null
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  All Levels
                </button>
                {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                  <button
                    key={level}
                    onClick={() => setFilterDifficulty(filterDifficulty === level ? null : level)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filterDifficulty === level
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {level}
                  </button>
                ))}
              </div>

              <div className="w-px h-6 bg-gray-300" />

              <div className="flex gap-2">
                <button
                  onClick={() => setFilterStatus(filterStatus === 'available' ? null : 'available')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filterStatus === 'available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  Available Now
                </button>
                <button
                  onClick={() => setFilterStatus(filterStatus === 'coming-soon' ? null : 'coming-soon')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filterStatus === 'coming-soon'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => {
                const Icon = tool.icon;
                const isAvailable = tool.status === 'available';

                return (
                  <Link
                    key={tool.id}
                    href={isAvailable ? tool.href : '#'}
                    className={`bg-white border-2 rounded-lg p-6 transition-all ${isAvailable
                        ? `border-${tool.color}-200 hover:border-${tool.color}-400 hover:shadow-lg`
                        : 'border-gray-200 opacity-75 cursor-not-allowed'
                      }`}
                    onClick={(e) => !isAvailable && e.preventDefault()}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${tool.color}-100`}>
                        <Icon className={`w-6 h-6 text-${tool.color}-600`} />
                      </div>
                      <div className="flex flex-col gap-1 items-end">
                        {isAvailable ? (
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            Available
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                            Coming Soon
                          </span>
                        )}
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          {tool.difficulty}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{tool.description}</p>

                    <ul className="space-y-2">
                      {tool.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className={`w-1.5 h-1.5 rounded-full bg-${tool.color}-500 mt-1 flex-shrink-0`}></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {isAvailable && (
                      <div className={`mt-4 pt-4 border-t border-gray-200 text-${tool.color}-600 font-medium text-sm flex items-center gap-2`}>
                        Launch Tool
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Template Packs */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Downloadable Template Packs</h2>
            <p className="text-gray-600 mb-6">Ready-to-use templates for all skill levels</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TEMPLATE_PACKS.map((pack, idx) => {
                const Icon = pack.icon;
                return (
                  <div key={idx} className={`bg-white border-2 border-${pack.color}-200 rounded-lg p-6`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${pack.color}-100 mb-4`}>
                      <Icon className={`w-6 h-6 text-${pack.color}-600`} />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pack.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{pack.description}</p>

                    <ul className="space-y-2 mb-4">
                      {pack.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <svg className={`w-4 h-4 text-${pack.color}-500 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full px-4 py-2 bg-${pack.color}-600 text-white rounded-lg hover:bg-${pack.color}-700 transition-colors font-medium text-sm flex items-center justify-center gap-2`}
                    >
                      <Download className="w-4 h-4" />
                      Download Pack
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Educational Resources */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Learn How to Use These Tools</h2>
            <p className="text-gray-700 mb-6">
              Comprehensive guides teaching you how to apply these tools to real medical device development scenarios.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/guides/fmea-guide" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">FMEA for Medical Devices</h3>
                <p className="text-sm text-gray-600">Complete guide to ISO 14971 risk management using FMEA methodology</p>
              </Link>

              <Link href="/guides/distributions-guide" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-purple-200">
                <h3 className="font-bold text-gray-900 mb-2">Statistical Distributions</h3>
                <p className="text-sm text-gray-600">Understanding when to use normal, Weibull, exponential, and gamma distributions</p>
              </Link>

              <Link href="/guides/sample-size-guide" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-green-200">
                <h3 className="font-bold text-gray-900 mb-2">Sample Size Calculation</h3>
                <p className="text-sm text-gray-600">FDA-compliant sample size determination for validation studies</p>
              </Link>

              <Link href="/guides/laser-safety-guide" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-red-200">
                <h3 className="font-bold text-gray-900 mb-2">Laser Safety Calculations</h3>
                <p className="text-sm text-gray-600">Understanding MPE, NOHD, and laser classification requirements</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

