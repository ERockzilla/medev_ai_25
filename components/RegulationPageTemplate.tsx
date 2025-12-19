'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import BookmarkButton from '@/components/BookmarkButton';
import HotTake, { HotTakeProps } from '@/components/HotTake';
import { BookOpen, ExternalLink, ArrowLeft, CheckCircle, AlertCircle, Info, Scale } from 'lucide-react';

export interface RegulationPageProps {
  regulation: {
    number: string;
    title: string;
    organization: 'FDA' | 'EU' | 'Other';
    effectiveDate?: string;
    category: string;
    regulationUrl: string;
    guidanceUrl?: string;
  };
  overview: {
    scope: string;
    applicability: string;
    whyItMatters: string;
    keyConcepts: string[];
  };
  keyRequirements?: {
    title: string;
    sections: Array<{
      title: string;
      description: string;
    }>;
  };
  complianceGuide?: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
    commonChallenges?: Array<{
      challenge: string;
      solution: string;
    }>;
  };
  relatedRegulations?: Array<{
    number: string;
    title: string;
    relationship: string;
    url: string;
  }>;
  relatedStandards?: Array<{
    number: string;
    title: string;
    relationship: string;
    url: string;
  }>;
  visualDiagrams?: ReactNode;
  /** Eric's Hot Take - personal commentary with sarcasm and real insight */
  hotTake?: Omit<HotTakeProps, 'variant'>;
}

export default function RegulationPageTemplate({
  regulation,
  overview,
  keyRequirements,
  complianceGuide,
  relatedRegulations,
  relatedStandards,
  visualDiagrams,
  hotTake
}: RegulationPageProps) {
  const pathname = usePathname();

  const organizationColors = {
    FDA: 'bg-green-100 text-green-800 border-green-300',
    EU: 'bg-blue-100 text-blue-800 border-blue-300',
    Other: 'bg-gray-100 text-gray-800 border-gray-300',
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/regulations"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to FDA Regulations
            </Link>
          </div>

          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Scale className="w-6 h-6 text-green-600" />
                  <span className={`px-3 py-1 rounded-lg text-sm font-semibold border ${organizationColors[regulation.organization]}`}>
                    {regulation.organization}
                  </span>
                  {regulation.effectiveDate && (
                    <span className="text-sm text-gray-600">
                      Effective {regulation.effectiveDate}
                    </span>
                  )}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{regulation.number}</h1>
                <h2 className="text-2xl text-gray-700 mb-4">{regulation.title}</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Legal Requirement:</strong> This regulation is legally binding and must be complied with for US market access.
                    Non-compliance can result in regulatory action, including warning letters, import detentions, and product recalls.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <BookmarkButton
                  title={`${regulation.number} - ${regulation.title}`}
                  url={pathname}
                  type="regulation"
                />
                <a
                  href={regulation.regulationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Regulation
                </a>
                {regulation.guidanceUrl && (
                  <a
                    href={regulation.guidanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-green-100 text-green-700 border border-green-300 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-2 font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    FDA Guidance
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scope</h3>
                <p className="text-gray-700 leading-relaxed">{overview.scope}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Applicability</h3>
                <p className="text-gray-700 leading-relaxed">{overview.applicability}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Why It Matters</h3>
                <p className="text-gray-700 leading-relaxed">{overview.whyItMatters}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Concepts</h3>
                <ul className="space-y-2">
                  {overview.keyConcepts.map((concept, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Eric's Hot Take Section */}
          <HotTake
            take={hotTake?.take || ''}
            context={hotTake?.context}
            realWorldTips={hotTake?.realWorldTips}
            variant="regulation"
          />

          {/* Visual Diagrams */}
          {visualDiagrams && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Visual Guide</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                {visualDiagrams}
              </div>
            </div>
          )}

          {/* Key Requirements Section */}
          {keyRequirements && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">{keyRequirements.title}</h2>
              </div>

              <div className="space-y-6">
                {keyRequirements.sections.map((section, idx) => (
                  <div key={idx} className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{section.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Compliance Guide Section */}
          {complianceGuide && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">{complianceGuide.title}</h2>
              </div>

              <div className="space-y-6">
                {complianceGuide.steps.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}

                {complianceGuide.commonChallenges && complianceGuide.commonChallenges.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Challenges & Solutions</h3>
                    <div className="space-y-4">
                      {complianceGuide.commonChallenges.map((item, idx) => (
                        <div key={idx} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <p className="font-semibold text-yellow-900 mb-1">{item.challenge}</p>
                              <p className="text-yellow-800 text-sm">{item.solution}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Related Regulations */}
          {relatedRegulations && relatedRegulations.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Regulations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedRegulations.map((related) => (
                  <Link
                    key={related.number}
                    href={related.url}
                    className="p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-1">
                          {related.number}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{related.title}</p>
                        <p className="text-xs text-gray-500">{related.relationship}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Standards */}
          {relatedStandards && relatedStandards.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedStandards.map((related) => (
                  <Link
                    key={related.number}
                    href={related.url}
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                          {related.number}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{related.title}</p>
                        <p className="text-xs text-gray-500">{related.relationship}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Resources Section */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Official Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href={regulation.regulationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View {regulation.number} on eCFR.gov
                    </a>
                  </li>
                  {regulation.guidanceUrl && (
                    <li>
                      <a
                        href={regulation.guidanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        FDA Guidance Documents
                      </a>
                    </li>
                  )}
                  <li>
                    <a
                      href="https://www.fda.gov/medical-devices"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      FDA Medical Devices Website
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Implementation Tools</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/standards" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Related Standards Database
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools" className="text-green-600 hover:text-green-700 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Compliance Tools
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-xs text-yellow-800">
              <strong>Legal Notice:</strong> This page provides implementation guidance and educational content only.
              The actual regulation text is the legally binding document. Always refer to the official regulation
              published in the Code of Federal Regulations (CFR) and FDA guidance documents for compliance purposes.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

