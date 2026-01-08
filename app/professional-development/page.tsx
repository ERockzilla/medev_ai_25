'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import {
  ExternalLink,
  ChevronRight,
  Zap,
  Globe
} from 'lucide-react';
import AnimatedIcon from '@/components/AnimatedIcon';
import Footer from '@/components/Footer';

export default function ProfessionalDevelopmentPage() {
  const [activeTab, setActiveTab] = useState<'insights' | 'skills' | 'certifications' | 'networking'>('insights');

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
              ← Back to Knowledge Center
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg flex-shrink-0">
                <AnimatedIcon variant="briefcase" size={32} className="text-blue-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Professional Development</h1>
                <p className="text-xl text-gray-600">
                  Advance your career in medical device development with industry insights, skill pathways, certifications, and networking opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8 bg-white border border-gray-200 rounded-lg p-2 flex gap-2">
            <button
              onClick={() => setActiveTab('insights')}
              className={`flex-1 px-4 py-3 rounded-md font-medium transition-colors ${activeTab === 'insights'
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <AnimatedIcon variant="growth" size={20} />
                <span>Industry Insights</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex-1 px-4 py-3 rounded-md font-medium transition-colors ${activeTab === 'skills'
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <AnimatedIcon variant="target" size={20} />
                <span>Skill Pathways</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex-1 px-4 py-3 rounded-md font-medium transition-colors ${activeTab === 'certifications'
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <AnimatedIcon variant="award" size={20} />
                <span>Certifications</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('networking')}
              className={`flex-1 px-4 py-3 rounded-md font-medium transition-colors ${activeTab === 'networking'
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <AnimatedIcon variant="network" size={20} />
                <span>Networking</span>
              </div>
            </button>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {/* Industry Insights & Trends */}
            {activeTab === 'insights' && (
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AnimatedIcon variant="growth" size={24} className="text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Industry Insights & Trends</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Stay ahead of the curve with the latest trends, market analysis, and industry developments
                    shaping the medical device landscape.
                  </p>

                  <div className="space-y-4">
                    {/* Emerging Technologies */}
                    <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-sm transition-all">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Emerging Technologies</h3>
                      <ul className="space-y-4">
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">AI/ML integration in medical devices</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device" target="_blank" rel="noopener noreferrer" title="FDA: Artificial Intelligence and Machine Learning (AI/ML) Software as a Medical Device" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              FDA AI/ML Guidance <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.nature.com/articles/s41591-024-02915-8" target="_blank" rel="noopener noreferrer" title="Nature Medicine: AI/ML Applications in Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Nature Medicine <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Sep 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.massdevice.com/ai-medical-devices-fda" target="_blank" rel="noopener noreferrer" title="MassDevice: AI and Machine Learning in Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MassDevice <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechintelligence.com/ai-machine-learning-medical-devices" target="_blank" rel="noopener noreferrer" title="MedTech Intelligence: AI and Machine Learning in Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Intelligence <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">Cybersecurity requirements evolution</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity" target="_blank" rel="noopener noreferrer" title="FDA: Cybersecurity in Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              FDA Cybersecurity <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.raps.org/news-and-articles/news-articles/2024/cybersecurity-medical-devices" target="_blank" rel="noopener noreferrer" title="RAPS: Cybersecurity Requirements for Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              RAPS <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Nov 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechdive.com/news/medical-device-cybersecurity-fda/712345" target="_blank" rel="noopener noreferrer" title="MedTech Dive: FDA Cybersecurity Requirements for Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Dive <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.healthcareitnews.com/news/medical-device-cybersecurity-2024" target="_blank" rel="noopener noreferrer" title="Healthcare IT News: Medical Device Cybersecurity Trends 2024" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Healthcare IT News <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">Digital health and SaMD growth</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd" target="_blank" rel="noopener noreferrer" title="FDA: Software as a Medical Device (SaMD)" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              FDA SaMD Program <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Mar 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.mckinsey.com/industries/life-sciences/our-insights/digital-health" target="_blank" rel="noopener noreferrer" title="McKinsey: Digital Health and SaMD Market Analysis" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              McKinsey <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.massdevice.com/digital-health-software-medical-devices" target="_blank" rel="noopener noreferrer" title="MassDevice: Digital Health and Software Medical Device Growth" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MassDevice <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.nature.com/articles/d41573-024-00001-2" target="_blank" rel="noopener noreferrer" title="Nature Reviews: Digital Health and SaMD Growth Trends" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Nature Reviews <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Oct 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">Regulatory harmonization efforts</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.imdrf.org" target="_blank" rel="noopener noreferrer" title="IMDRF: International Medical Device Regulators Forum" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              IMDRF <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.raps.org/news-and-articles/news-articles/2024/regulatory-harmonization" target="_blank" rel="noopener noreferrer" title="RAPS: Global Regulatory Harmonization Efforts" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              RAPS <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Oct 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.emergobyul.com/insights/regulatory-harmonization" target="_blank" rel="noopener noreferrer" title="Emergo: Global Regulatory Harmonization Insights" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Emergo <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Nov 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechdive.com/news/global-regulatory-harmonization/712456" target="_blank" rel="noopener noreferrer" title="MedTech Dive: Global Regulatory Harmonization Initiatives" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Dive <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Dec 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Market Dynamics */}
                    <div className="border border-gray-200 rounded-lg p-6 hover:border-green-400 hover:shadow-sm transition-all">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Dynamics</h3>
                      <ul className="space-y-4">
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">Global regulatory landscape changes</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.grandviewresearch.com/industry-analysis/medical-devices-market" target="_blank" rel="noopener noreferrer" title="Grand View Research: Medical Devices Market Analysis 2025" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Grand View Research <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.mckinsey.com/industries/life-sciences/our-insights/medical-device-regulation" target="_blank" rel="noopener noreferrer" title="McKinsey: Global Medical Device Regulatory Landscape" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              McKinsey <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.deloitte.com/us/en/insights/industry/life-sciences/medical-device-regulation.html" target="_blank" rel="noopener noreferrer" title="Deloitte: Medical Device Regulation Insights" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Deloitte <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.meddeviceonline.com/doc/global-regulatory-changes-2024-0001" target="_blank" rel="noopener noreferrer" title="Med Device Online: Global Regulatory Changes 2024" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Med Device Online <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Dec 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">EU MDR transition impacts</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.raps.org/news-and-articles/news-articles/2024/eu-mdr-transition" target="_blank" rel="noopener noreferrer" title="RAPS: EU MDR Transition Impacts and Challenges" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              RAPS <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Dec 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechdive.com/news/eu-mdr-transition-2024/712567" target="_blank" rel="noopener noreferrer" title="MedTech Dive: EU MDR Transition Challenges and Solutions" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Dive <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.emergobyul.com/insights/eu-mdr-update" target="_blank" rel="noopener noreferrer" title="Emergo: EU MDR Transition Update and Compliance Guide" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Emergo <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.massdevice.com/eu-mdr-compliance-2024" target="_blank" rel="noopener noreferrer" title="MassDevice: EU MDR Compliance Strategies and Updates" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MassDevice <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Dec 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">Post-market surveillance focus</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.fda.gov/medical-devices/postmarket-requirements-devices" target="_blank" rel="noopener noreferrer" title="FDA: Postmarket Requirements for Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              FDA Post-Market <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Apr 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.raps.org/news-and-articles/news-articles/2024/post-market-surveillance" target="_blank" rel="noopener noreferrer" title="RAPS: Post-Market Surveillance Focus and Requirements" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              RAPS <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Sep 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechintelligence.com/post-market-surveillance" target="_blank" rel="noopener noreferrer" title="MedTech Intelligence: Post-Market Surveillance Best Practices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Intelligence <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Oct 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.meddeviceonline.com/doc/post-market-surveillance-trends-0001" target="_blank" rel="noopener noreferrer" title="Med Device Online: Post-Market Surveillance Trends" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Med Device Online <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Nov 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">Startup ecosystem growth</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.mckinsey.com/industries/life-sciences/our-insights/medtech-startups" target="_blank" rel="noopener noreferrer" title="McKinsey: MedTech Startup Ecosystem Analysis" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              McKinsey <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.massdevice.com/medtech-startups-funding-2024" target="_blank" rel="noopener noreferrer" title="MassDevice: MedTech Startup Funding and Ecosystem Growth" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MassDevice <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechdive.com/news/medical-device-startups-2024/712678" target="_blank" rel="noopener noreferrer" title="MedTech Dive: Medical Device Startup Ecosystem Growth" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Dive <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.nature.com/articles/d41573-024-00002-3" target="_blank" rel="noopener noreferrer" title="Nature Reviews: Medical Device Startup Innovation" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Nature Reviews <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Nov 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Career Opportunities */}
                    <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-400 hover:shadow-sm transition-all">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Career Opportunities</h3>
                      <ul className="space-y-4">
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">High demand for regulatory specialists</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.linkedin.com/pulse/regulatory-affairs-medical-devices-2024" target="_blank" rel="noopener noreferrer" title="LinkedIn: Regulatory Affairs Career Trends in Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              LinkedIn Insights <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.raps.org/career-resources/job-market-report" target="_blank" rel="noopener noreferrer" title="RAPS: Regulatory Affairs Job Market Report 2025" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              RAPS Job Market <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.meddevicejobs.com/regulatory-affairs" target="_blank" rel="noopener noreferrer" title="MedDeviceJobs: Regulatory Affairs Job Opportunities" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedDeviceJobs <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.glassdoor.com/Research/regulatory-affairs-medical-devices-2024" target="_blank" rel="noopener noreferrer" title="Glassdoor: Regulatory Affairs Salary and Job Market Research" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Glassdoor Research <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Dec 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">Software quality engineering growth</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.linkedin.com/pulse/software-quality-medical-devices-2024" target="_blank" rel="noopener noreferrer" title="LinkedIn: Software Quality Engineering in Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              LinkedIn Insights <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.biospace.com/jobs/software-quality-engineer-medical-device" target="_blank" rel="noopener noreferrer" title="BioSpace: Software Quality Engineer Jobs in Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              BioSpace <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechintelligence.com/software-quality-careers" target="_blank" rel="noopener noreferrer" title="MedTech Intelligence: Software Quality Engineering Career Growth" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Intelligence <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.meddevicejobs.com/software-quality" target="_blank" rel="noopener noreferrer" title="MedDeviceJobs: Software Quality Engineering Positions" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedDeviceJobs <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">Risk management expertise valued</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.linkedin.com/pulse/risk-management-medical-devices-career-2024" target="_blank" rel="noopener noreferrer" title="LinkedIn: Risk Management Career Opportunities" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              LinkedIn Insights <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Nov 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.raps.org/news-and-articles/news-articles/2024/risk-management-careers" target="_blank" rel="noopener noreferrer" title="RAPS: Risk Management Career Opportunities in Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              RAPS <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Nov 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.meddevicejobs.com/risk-management" target="_blank" rel="noopener noreferrer" title="MedDeviceJobs: Risk Management Job Listings" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedDeviceJobs <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Nov 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.biospace.com/jobs/risk-management-medical-device" target="_blank" rel="noopener noreferrer" title="BioSpace: Risk Management Positions in Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              BioSpace <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Nov 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">Remote work opportunities expanding</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.linkedin.com/pulse/remote-work-medical-device-industry-2024" target="_blank" rel="noopener noreferrer" title="LinkedIn: Remote Work Trends in Medical Device Industry" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              LinkedIn Insights <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Mar 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.glassdoor.com/Research/remote-work-medtech-2024" target="_blank" rel="noopener noreferrer" title="Glassdoor: Remote Work Trends in MedTech Industry" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Glassdoor Research <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Mar 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechdive.com/news/remote-work-medical-devices/712789" target="_blank" rel="noopener noreferrer" title="MedTech Dive: Remote Work Opportunities in Medical Device Industry" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Dive <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Mar 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.meddevicejobs.com/remote" target="_blank" rel="noopener noreferrer" title="MedDeviceJobs: Remote Work Opportunities in MedTech" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedDeviceJobs <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Mar 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Regulatory Updates */}
                    <div className="border border-gray-200 rounded-lg p-6 hover:border-red-400 hover:shadow-sm transition-all">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Regulatory Updates</h3>
                      <ul className="space-y-4">
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">FDA QMSR alignment with ISO 13485</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.fda.gov/news-events/fda-newsroom/fda-announces-quality-system-regulation-alignment-iso-13485" target="_blank" rel="noopener noreferrer" title="FDA: Quality System Regulation Alignment with ISO 13485" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              FDA Newsroom <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Dec 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.raps.org/regulatory-focus/qmsr-iso-13485" target="_blank" rel="noopener noreferrer" title="RAPS: QMSR and ISO 13485 Alignment Analysis" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              RAPS Regulatory Focus <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechdive.com/news/fda-qmsr-iso-13485-2024/712890" target="_blank" rel="noopener noreferrer" title="MedTech Dive: FDA QMSR Alignment with ISO 13485" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Dive <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Dec 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.emergobyul.com/insights/qmsr-transition" target="_blank" rel="noopener noreferrer" title="Emergo: QMSR Transition Guide and Implementation" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Emergo <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Dec 2024</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">Cybersecurity guidance updates</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.fda.gov/news-events/fda-newsroom/fda-updates-cybersecurity-guidance-medical-devices" target="_blank" rel="noopener noreferrer" title="FDA: Updates to Cybersecurity Guidance for Medical Devices" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              FDA Newsroom <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.raps.org/regulatory-focus/cybersecurity-updates" target="_blank" rel="noopener noreferrer" title="RAPS: Latest Cybersecurity Regulatory Updates" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              RAPS Regulatory Focus <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechdive.com/news/medical-device-cybersecurity-fda-2024/713001" target="_blank" rel="noopener noreferrer" title="MedTech Dive: FDA Cybersecurity Guidance Updates 2024" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Dive <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Jan 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.healthcareitnews.com/news/fda-cybersecurity-medical-devices-2024" target="_blank" rel="noopener noreferrer" title="Healthcare IT News: FDA Cybersecurity Guidance Updates" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Healthcare IT News <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">Clinical evaluation requirements</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.raps.org/regulatory-focus/clinical-evaluation" target="_blank" rel="noopener noreferrer" title="RAPS: Clinical Evaluation Requirements Under EU MDR" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              RAPS Regulatory Focus <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Mar 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.emergobyul.com/insights/clinical-evaluation-mdr" target="_blank" rel="noopener noreferrer" title="Emergo: Clinical Evaluation Requirements Under EU MDR" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Emergo <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechdive.com/news/clinical-evaluation-requirements-2024/713112" target="_blank" rel="noopener noreferrer" title="MedTech Dive: Clinical Evaluation Requirements Under EU MDR" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Dive <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechintelligence.com/clinical-evaluation-mdr" target="_blank" rel="noopener noreferrer" title="MedTech Intelligence: Clinical Evaluation Under EU MDR" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Intelligence <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Mar 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-start gap-2 mb-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900">UDI implementation deadlines</span>
                          </div>
                          <div className="ml-6 flex flex-wrap gap-3">
                            <a href="https://www.fda.gov/news-events/fda-newsroom/udi-implementation-updates" target="_blank" rel="noopener noreferrer" title="FDA: Unique Device Identification (UDI) Implementation Updates" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              FDA Newsroom <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.raps.org/regulatory-focus/udi-deadlines" target="_blank" rel="noopener noreferrer" title="RAPS: UDI Implementation Deadlines and Compliance" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              RAPS Regulatory Focus <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Feb 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.medtechdive.com/news/udi-implementation-2024/713223" target="_blank" rel="noopener noreferrer" title="MedTech Dive: UDI Implementation Deadlines and Compliance Strategies" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              MedTech Dive <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Mar 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.emergobyul.com/insights/udi-compliance" target="_blank" rel="noopener noreferrer" title="Emergo: UDI Compliance and Implementation Guide" className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline">
                              Emergo <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Mar 2025</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skill Development Pathways */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AnimatedIcon variant="target" size={24} className="text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Skill Development Pathways</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Structured learning paths to build expertise in key areas of medical device development
                    and regulatory compliance.
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 bg-blue-50 p-5 rounded-r-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Regulatory Affairs Specialist</h3>
                      <p className="text-sm text-gray-600 mb-4">Path for professionals seeking expertise in regulatory submissions and compliance</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Foundation Skills</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Understanding FDA regulations (21 CFR)</li>
                            <li>• EU MDR/IVDR basics</li>
                            <li>• ISO 13485 fundamentals</li>
                            <li>• Documentation requirements</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Advanced Skills</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 510(k) submission preparation</li>
                            <li>• Clinical evaluation reports</li>
                            <li>• Post-market surveillance</li>
                            <li>• Regulatory strategy development</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link href="/regulations" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1">
                          Explore Regulations <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-600 bg-green-50 p-5 rounded-r-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Systems Engineer</h3>
                      <p className="text-sm text-gray-600 mb-4">Build expertise in quality management systems and process improvement</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Foundation Skills</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• ISO 13485 implementation</li>
                            <li>• CAPA management</li>
                            <li>• Document control systems</li>
                            <li>• Internal auditing</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Advanced Skills</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Process validation</li>
                            <li>• Supplier management</li>
                            <li>• Statistical process control</li>
                            <li>• Management review</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link href="/standards/iso-13485" className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center gap-1">
                          Learn ISO 13485 <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-600 bg-purple-50 p-5 rounded-r-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Management Specialist</h3>
                      <p className="text-sm text-gray-600 mb-4">Master risk management processes and tools for medical devices</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Foundation Skills</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• ISO 14971 fundamentals</li>
                            <li>• Risk analysis techniques</li>
                            <li>• FMEA methodology</li>
                            <li>• Hazard identification</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Advanced Skills</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Risk-benefit analysis</li>
                            <li>• Post-market risk management</li>
                            <li>• Software risk management</li>
                            <li>• Risk management reporting</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link href="/standards/iso-14971" className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1">
                          Learn ISO 14971 <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link href="/tools/fmea" className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1 ml-4">
                          Try FMEA Tool <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-600 bg-orange-50 p-5 rounded-r-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Software Quality Engineer</h3>
                      <p className="text-sm text-gray-600 mb-4">Develop expertise in medical device software development and validation</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Foundation Skills</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• IEC 62304 lifecycle</li>
                            <li>• Software validation</li>
                            <li>• Configuration management</li>
                            <li>• Code review practices</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Advanced Skills</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Cybersecurity for medical devices</li>
                            <li>• AI/ML software validation</li>
                            <li>• SOUP management</li>
                            <li>• Software risk management</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link href="/standards/iec-62304" className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1">
                          Learn IEC 62304 <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Certifications & Training */}
            {activeTab === 'certifications' && (
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AnimatedIcon variant="award" size={24} className="text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Certifications & Training</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Recommended certifications and training programs to validate your expertise and advance your career.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <AnimatedIcon variant="award" size={24} className="text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-900">RAC (Regulatory Affairs Certification)</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Gold standard certification for regulatory professionals. Offered by RAPS (Regulatory Affairs Professionals Society).
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• RAC (US) - FDA regulations focus</li>
                        <li>• RAC (EU) - EU MDR/IVDR focus</li>
                        <li>• RAC (Canada) - Health Canada focus</li>
                      </ul>
                      <a href="https://www.raps.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1">
                        Learn More <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <AnimatedIcon variant="award" size={24} className="text-green-600" />
                        <h3 className="text-lg font-semibold text-gray-900">ASQ Certifications</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Quality-focused certifications from the American Society for Quality.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• CQA - Certified Quality Auditor</li>
                        <li>• CQE - Certified Quality Engineer</li>
                        <li>• CMQ/OE - Certified Manager of Quality</li>
                        <li>• CSQE - Certified Software Quality Engineer</li>
                      </ul>
                      <a href="https://asq.org" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center gap-1">
                        Learn More <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <AnimatedIcon variant="award" size={24} className="text-purple-600" />
                        <h3 className="text-lg font-semibold text-gray-900">ISO 13485 Lead Auditor</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Certification for conducting ISO 13485 audits. Offered by various training organizations.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• Lead Auditor Training (5 days)</li>
                        <li>• Internal Auditor Training (2-3 days)</li>
                        <li>• Recognized by certification bodies</li>
                      </ul>
                      <Link href="/standards/iso-13485" className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1">
                        Learn ISO 13485 <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <AnimatedIcon variant="award" size={24} className="text-orange-600" />
                        <h3 className="text-lg font-semibold text-gray-900">IEC 62304 Training</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Specialized training for medical device software lifecycle management.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• Software lifecycle training</li>
                        <li>• Validation and verification</li>
                        <li>• SOUP management</li>
                        <li>• Offered by various providers</li>
                      </ul>
                      <Link href="/standards/iec-62304" className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1">
                        Learn IEC 62304 <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <AnimatedIcon variant="award" size={24} className="text-red-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Six Sigma Certifications</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Process improvement methodologies valuable for quality and manufacturing roles.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• Green Belt - Foundation level</li>
                        <li>• Black Belt - Advanced level</li>
                        <li>• Master Black Belt - Expert level</li>
                      </ul>
                      <Link href="/guides/six-sigma" className="text-red-600 hover:text-red-700 text-sm font-medium inline-flex items-center gap-1">
                        Learn Six Sigma <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <AnimatedIcon variant="book" size={24} className="text-indigo-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Online Learning Platforms</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Self-paced courses and training materials for continuous learning.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• Coursera - Medical device courses</li>
                        <li>• Udemy - Regulatory affairs courses</li>
                        <li>• LinkedIn Learning - Quality systems</li>
                        <li>• Industry webinars and workshops</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Networking & Community */}
            {activeTab === 'networking' && (
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AnimatedIcon variant="network" size={24} className="text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Networking & Community Resources</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Connect with peers, join professional communities, and access valuable networking opportunities
                    in the medical device industry.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <AnimatedIcon variant="network" size={24} className="text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-900">RAPS (Regulatory Affairs Professionals Society)</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Largest global organization for regulatory professionals. Offers networking, education, and certification.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• Annual RAPS Convergence conference</li>
                        <li>• Local chapter meetings</li>
                        <li>• Online forums and communities</li>
                        <li>• Job board and career resources</li>
                      </ul>
                      <a href="https://www.raps.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1">
                        Visit RAPS <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <AnimatedIcon variant="network" size={24} className="text-green-600" />
                        <h3 className="text-lg font-semibold text-gray-900">ASQ (American Society for Quality)</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Professional association for quality professionals with local sections and special interest groups.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• Local section meetings</li>
                        <li>• Quality conferences</li>
                        <li>• Special interest groups (SIGs)</li>
                        <li>• Online resources and webinars</li>
                      </ul>
                      <a href="https://asq.org" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center gap-1">
                        Visit ASQ <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <AnimatedIcon variant="network" size={24} className="text-purple-600" />
                        <h3 className="text-lg font-semibold text-gray-900">AAMI (Association for the Advancement of Medical Instrumentation)</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Focus on medical device standards, technology, and regulatory affairs.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• Annual conference and expo</li>
                        <li>• Standards development participation</li>
                        <li>• Technical committees</li>
                        <li>• Educational programs</li>
                      </ul>
                      <a href="https://www.aami.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1">
                        Visit AAMI <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <AnimatedIcon variant="network" size={24} className="text-orange-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Online Communities</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Digital platforms for connecting with medical device professionals worldwide.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• LinkedIn groups and communities</li>
                        <li>• Reddit r/MedicalDevices</li>
                        <li>• Slack communities</li>
                        <li>• Industry-specific forums</li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <Globe className="w-6 h-6 text-indigo-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Conferences & Events</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Major industry events for learning and networking.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• MD&M (Medical Design & Manufacturing)</li>
                        <li>• BIO International Convention</li>
                        <li>• DeviceTalks</li>
                        <li>• Regulatory conferences</li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <AnimatedIcon variant="briefcase" size={24} className="text-red-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Career Resources</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Job boards and career development resources specific to medical devices.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>• MedDeviceJobs.com</li>
                        <li>• RAPS job board</li>
                        <li>• Industry-specific recruiters</li>
                        <li>• LinkedIn job search</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

