'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import BookmarkButton from '@/components/BookmarkButton';
import { BookOpen, ArrowLeft, CheckCircle, AlertTriangle, Target, Link as LinkIcon } from 'lucide-react';

export interface ImplementationGuideProps {
  title: string;
  subtitle?: string;
  basedOn: Array<{
    number: string;
    title: string;
    url: string;
  }>;
  overview: {
    purpose: string;
    audience: string;
    prerequisites?: string[];
    estimatedTime?: string;
  };
  visualDiagram?: ReactNode;
  sections: Array<{
    id: string;
    title: string;
    description: string;
    steps?: Array<{
      step: number;
      title: string;
      description: string;
      deliverables?: string[];
      tips?: string[];
    }>;
    subsections?: Array<{
      title: string;
      content: string;
    }>;
  }>;
  integrationPoints?: Array<{
    title: string;
    description: string;
    relatedStandards: Array<{
      number: string;
      title: string;
      url: string;
      relationship: string;
    }>;
  }>;
  checklists?: Array<{
    title: string;
    items: string[];
  }>;
  commonPitfalls?: Array<{
    pitfall: string;
    solution: string;
  }>;
  medicalLaserExample?: {
    title: string;
    description: string;
    scenarios: Array<{
      scenario: string;
      approach: string[];
    }>;
  };
}

export default function ImplementationGuideTemplate({
  title,
  subtitle,
  basedOn,
  overview,
  visualDiagram,
  sections,
  integrationPoints,
  checklists,
  commonPitfalls,
  medicalLaserExample,
}: ImplementationGuideProps) {
  const pathname = usePathname();
  
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Center
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
                {subtitle && <p className="text-xl text-gray-700 mb-4">{subtitle}</p>}
                <div className="flex flex-wrap gap-2 mt-4">
                  {basedOn.map((standard) => (
                    <Link
                      key={standard.number}
                      href={standard.url}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors flex items-center gap-2"
                    >
                      <LinkIcon className="w-4 h-4" />
                      {standard.number}
                    </Link>
                  ))}
                </div>
              </div>
              <BookmarkButton
                title={title}
                url={pathname}
                type="guide"
              />
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Purpose</h3>
                <p className="text-gray-700 leading-relaxed">{overview.purpose}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Target Audience</h3>
                <p className="text-gray-700 leading-relaxed">{overview.audience}</p>
              </div>
            </div>

            {overview.prerequisites && overview.prerequisites.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Prerequisites</h3>
                <ul className="space-y-2">
                  {overview.prerequisites.map((prereq, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {overview.estimatedTime && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Estimated Implementation Time:</strong> {overview.estimatedTime}
                </p>
              </div>
            )}
          </div>

          {/* Visual Diagram */}
          {visualDiagram && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Process Flow</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 overflow-x-auto">
                {visualDiagram}
              </div>
            </div>
          )}

          {/* Main Sections */}
          <div className="space-y-8 mb-8">
            {sections.map((section, sectionIdx) => (
              <div key={section.id} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {sectionIdx + 1}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">{section.description}</p>

                {section.steps && section.steps.length > 0 && (
                  <div className="space-y-6">
                    {section.steps.map((step) => (
                      <div key={step.step} className="border-l-4 border-blue-500 pl-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                              {step.step}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">{step.description}</p>
                            
                            {step.deliverables && step.deliverables.length > 0 && (
                              <div className="mb-3">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Deliverables:</p>
                                <ul className="space-y-1">
                                  {step.deliverables.map((deliverable, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                      <span>{deliverable}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {step.tips && step.tips.length > 0 && (
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-sm font-semibold text-blue-900 mb-2">💡 Tips:</p>
                                <ul className="space-y-1">
                                  {step.tips.map((tip, idx) => (
                                    <li key={idx} className="text-sm text-blue-800 flex items-start gap-2">
                                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                      <span>{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.subsections && section.subsections.length > 0 && (
                  <div className="mt-6 space-y-4">
                    {section.subsections.map((subsection, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{subsection.title}</h4>
                        <p className="text-gray-700 text-sm">{subsection.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Integration Points */}
          {integrationPoints && integrationPoints.length > 0 && (
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <LinkIcon className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Integration with Other Standards</h2>
              </div>
              
              <div className="space-y-6">
                {integrationPoints.map((point, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-6 border border-purple-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{point.title}</h3>
                    <p className="text-gray-700 mb-4">{point.description}</p>
                    <div className="space-y-2">
                      {point.relatedStandards.map((standard) => (
                        <Link
                          key={standard.number}
                          href={standard.url}
                          className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                              {standard.number}
                            </p>
                            <p className="text-sm text-gray-600">{standard.title}</p>
                            <p className="text-xs text-gray-500 mt-1">{standard.relationship}</p>
                          </div>
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Medical Laser Example */}
          {medicalLaserExample && (
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">{medicalLaserExample.title}</h2>
              </div>
              
              <p className="text-gray-800 leading-relaxed mb-6">{medicalLaserExample.description}</p>
              
              <div className="space-y-4">
                {medicalLaserExample.scenarios.map((scenario, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-6 border border-red-200">
                    <h3 className="font-semibold text-gray-900 mb-3">{scenario.scenario}</h3>
                    <ul className="space-y-2">
                      {scenario.approach.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Checklists */}
          {checklists && checklists.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Checklists</h2>
              <div className="space-y-6">
                {checklists.map((checklist, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{checklist.title}</h3>
                    <div className="space-y-2">
                      {checklist.items.map((item, itemIdx) => (
                        <label key={itemIdx} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                          <span className="text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common Pitfalls */}
          {commonPitfalls && commonPitfalls.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Common Pitfalls & Solutions</h2>
              </div>
              
              <div className="space-y-4">
                {commonPitfalls.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-yellow-200">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-yellow-900 mb-1">{item.pitfall}</p>
                        <p className="text-yellow-800 text-sm">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Resources */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Related Standards</h3>
                <ul className="space-y-2">
                  {basedOn.map((standard) => (
                    <li key={standard.number}>
                      <Link href={standard.url} className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                        <LinkIcon className="w-4 h-4" />
                        {standard.number} - {standard.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Tools & Templates</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/tools/fmea" className="text-blue-600 hover:text-blue-700">
                      FMEA Calculator Tool
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/sample-size" className="text-blue-600 hover:text-blue-700">
                      Sample Size Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/standards" className="text-blue-600 hover:text-blue-700">
                      Standards Database
                    </Link>
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

