'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import { Search, Filter, BookOpen, ExternalLink, Scale, FileText, Globe, Lightbulb, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';

// Regulations data
const REGULATIONS = [
  {
    id: 'cfr-11',
    number: '21 CFR Part 11',
    title: 'Electronic Records; Electronic Signatures',
    organization: 'FDA',
    category: 'electronic-records',
    status: 'published',
    description: 'Requirements for electronic records and electronic signatures in FDA-regulated industries',
    url: '/regulations/cfr-11'
  },
  {
    id: 'cfr-820',
    number: '21 CFR Part 820',
    title: 'Quality System Regulation (QMSR)',
    organization: 'FDA',
    category: 'quality-system',
    status: 'published',
    description: 'Quality system requirements for medical devices (aligned with ISO 13485:2016)',
    url: '/regulations/cfr-820'
  },
  {
    id: 'cfr-830',
    number: '21 CFR Part 830',
    title: 'Unique Device Identification (UDI)',
    organization: 'FDA',
    category: 'identification',
    status: 'published',
    description: 'Requirements for device identification and labeling for post-market surveillance',
    url: '/regulations/cfr-830'
  },
  {
    id: 'cfr-812',
    number: '21 CFR Part 812',
    title: 'Investigational Device Exemptions (IDE)',
    organization: 'FDA',
    category: 'clinical',
    status: 'published',
    description: 'Requirements for clinical investigations of medical devices',
    url: '/regulations/cfr-812'
  },
  {
    id: 'cfr-807',
    number: '21 CFR Part 807',
    title: 'Establishment Registration and Device Listing',
    organization: 'FDA',
    category: 'registration',
    status: 'published',
    description: 'Requirements for device establishment registration and product listing',
    url: '/regulations/cfr-807'
  },
  {
    id: 'cfr-803',
    number: '21 CFR Part 803',
    title: 'Medical Device Reporting (MDR)',
    organization: 'FDA',
    category: 'post-market',
    status: 'published',
    description: 'Requirements for reporting device-related adverse events and malfunctions',
    url: '/regulations/cfr-803'
  },
  {
    id: '510k-submission',
    number: '510(k) Premarket Notification',
    title: 'Premarket Notification Submission',
    organization: 'FDA',
    category: 'premarket',
    status: 'published',
    description: 'Requirements for demonstrating substantial equivalence to predicate devices',
    url: '/regulations/510k-submission'
  },
  {
    id: 'pma-submission',
    number: 'PMA (Premarket Approval)',
    title: 'Premarket Approval Application',
    organization: 'FDA',
    category: 'premarket',
    status: 'published',
    description: 'Requirements for Class III device approval including clinical data',
    url: '/regulations/pma-submission'
  },
  {
    id: 'estar-template',
    number: 'eSTAR Template',
    title: 'electronic Submission Template And Resource',
    organization: 'FDA',
    category: 'premarket',
    status: 'published',
    description: 'Structured electronic submission template for 510(k) submissions',
    url: '/regulations/estar-template'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Regulations', color: 'gray' },
  { id: 'electronic-records', label: 'Electronic Records', color: 'blue' },
  { id: 'quality-system', label: 'Quality System', color: 'green' },
  { id: 'identification', label: 'Identification', color: 'purple' },
  { id: 'clinical', label: 'Clinical', color: 'orange' },
  { id: 'registration', label: 'Registration', color: 'indigo' },
  { id: 'post-market', label: 'Post-Market', color: 'red' },
  { id: 'premarket', label: 'Premarket', color: 'teal' },
];

export default function RegulationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredRegulations = REGULATIONS.filter(regulation => {
    const matchesSearch = 
      regulation.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      regulation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      regulation.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || regulation.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
            <div className="flex items-center gap-3 mb-2">
              <Scale className="w-8 h-8 text-green-600" />
              <h1 className="text-4xl font-bold text-gray-900">Regulations</h1>
            </div>
            <p className="text-xl text-gray-600">
              Regulations for medical devices - legally binding requirements for market access
            </p>
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                <strong>Note:</strong> FDA regulations are legally binding requirements, not voluntary standards. 
                These regulations are freely available from the FDA and must be complied with for US market access.
              </p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search regulations by number, title, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? `bg-${category.color}-600 text-white`
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Regulations Grid */}
          {filteredRegulations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRegulations.map((regulation) => (
                <Link
                  key={regulation.id}
                  href={regulation.url}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                          {regulation.organization}
                        </span>
                        {regulation.status === 'coming-soon' && (
                          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                        {regulation.number}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {regulation.title}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                    {regulation.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500 capitalize">
                      {regulation.category.replace('-', ' ')}
                    </span>
                    <div className="flex items-center gap-2 text-green-600 group-hover:text-green-700 transition-colors">
                      <span className="text-sm font-medium">View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">No regulations found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* FDA Guidance Documents Section */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">FDA Guidance Documents</h2>
            </div>
            <p className="text-gray-600 mb-6">
              FDA guidance documents provide recommendations and best practices for compliance with regulations. 
              While not legally binding, they represent FDA's current thinking and are valuable for implementation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">FDA Guidance</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Software as Medical Device (SaMD)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Complete implementation guide for software that meets the definition of a medical device, 
                  including classification, validation, and regulatory pathways.
                </p>
                <a 
                  href="https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  View FDA Guidance <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">FDA Guidance</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cybersecurity</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Premarket and postmarket guidance for managing cybersecurity risks in medical devices, 
                  including threat modeling and security controls.
                </p>
                <a 
                  href="https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  View FDA Guidance <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">FDA Guidance</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Home-Use Devices</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Human factors considerations and usability engineering requirements for medical devices 
                  intended for use in the home environment.
                </p>
                <a 
                  href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/design-considerations-devices-intended-home-use" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  View FDA Guidance <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">FDA Guidance</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Laser Notice 56</h3>
                <p className="text-sm text-gray-600 mb-4">
                  FDA guidance on conformance with IEC 60825-1 Ed. 3 and IEC 60601-2-22 Ed. 3.1 for laser products. 
                  Provides recommendations for manufacturers on demonstrating compliance with international laser safety standards.
                </p>
                <a 
                  href="https://www.hhs.gov/guidance/document/laser-products-conformance-iec-60825-1-ed-3-and-iec-60601-2-22-ed-31-laser-notice-no-56" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  View Laser Notice 56 <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">FDA Regulation</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quality System Regulation (21 CFR 820)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Quality system requirements for medical devices (QMSR), aligned with ISO 13485:2016. 
                  Includes design controls, process validation, and quality system requirements.
                </p>
                <Link 
                  href="/regulations/cfr-820"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  View Details <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* EU MDR/IVDR Section */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">EU MDR/IVDR Regulations</h2>
            </div>
            <p className="text-gray-600 mb-6">
              European Union Medical Device Regulation (MDR) and In Vitro Diagnostic Regulation (IVDR) 
              requirements. These regulations are freely available and legally binding for EU market access.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">EU MDR</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">MDR Annex I - General Safety</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Complete checklist of general safety and performance requirements for medical devices 
                  under EU MDR, including essential requirements. This is the core regulation document.
                </p>
                <a 
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  View EU MDR Regulation <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">MDCG Guidance</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Software Classification</h3>
                <p className="text-sm text-gray-600 mb-4">
                  MDCG 2019-11 guidance on qualification and classification of software as a medical device. 
                  Provides decision tree and examples for classifying software under EU MDR.
                </p>
                <a 
                  href="https://health.ec.europa.eu/system/files/2020-09/md_mdcg_2019_11_guidance_qualification_classification_software_en_0.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  View MDCG 2019-11 <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">MDCG Guidance</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Clinical Evaluation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  MDCG 2020-13 guidance on clinical evaluation documentation. Comprehensive guide for writing 
                  Clinical Evaluation Reports (CER) under EU MDR, including clinical data requirements.
                </p>
                <a 
                  href="https://health.ec.europa.eu/system/files/2022-02/mdcg_2020-13_en.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  View MDCG 2020-13 <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Device-Specific Guidance Section */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">Device-Specific Guidance</h2>
            </div>
            <p className="text-gray-600 mb-6">
              FDA guidance documents for specific device types, including special controls, classification, 
              and regulatory pathways. These documents provide detailed requirements and recommendations 
              for manufacturers of specific device categories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-orange-200 rounded-lg p-6 hover:border-orange-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">FDA Special Controls</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dental Equipment</h3>
                <p className="text-sm text-gray-600 mb-4">
                  FDA guidance for dental devices including classification, special controls, and testing requirements. 
                  Covers electrical safety, biocompatibility, sterilization, and performance standards for various 
                  dental equipment types.
                </p>
                <div className="text-sm text-gray-600 space-y-2 mb-4">
                  <p className="font-semibold text-gray-700">Key Requirements:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>IEC 60601-1 (Electrical safety and essential performance)</li>
                    <li>ISO 10993 (Biological evaluation of medical devices)</li>
                    <li>ISO 17664 (Information to be provided by the manufacturer for the processing of resterilizable medical devices)</li>
                    <li>ISO 14971 (Risk management for medical devices)</li>
                    <li>FDA 510(k) requirements for Class II devices</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <a 
                    href="https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/medical-device-databases" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    Search FDA Device Classification Database <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.fda.gov/medical-devices/guidance-documents-medical-devices-and-radiation-emitting-products" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    Browse FDA Guidance Documents <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-lg p-6 hover:border-orange-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">FDA Guidance</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Home Monitoring Devices</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Comprehensive guidance for connected home monitoring medical devices, including cybersecurity 
                  requirements, usability engineering, remote monitoring capabilities, and data privacy considerations. 
                  Addresses unique challenges of home-use environments.
                </p>
                <div className="text-sm text-gray-600 space-y-2 mb-4">
                  <p className="font-semibold text-gray-700">Key Requirements:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>IEC 81001-5-1 (Cybersecurity for health software and health IT systems)</li>
                    <li>IEC 62366 (Usability engineering for medical devices)</li>
                    <li>FDA Cybersecurity Premarket Guidance</li>
                    <li>HIPAA compliance for protected health information</li>
                    <li>Design considerations for home-use devices</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <a 
                    href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/design-considerations-devices-intended-home-use" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    View Home-Use Device Guidance <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    View Cybersecurity Guidance <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-lg p-6 hover:border-orange-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">FDA Special Controls</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Surgical Laser Systems</h3>
                <p className="text-sm text-gray-600 mb-4">
                  FDA guidance for surgical and therapeutic laser systems, including classification, special controls, 
                  performance standards, and safety requirements. Covers various laser types used in surgical procedures 
                  including ophthalmic, dermatological, and general surgery applications.
                </p>
                <div className="text-sm text-gray-600 space-y-2 mb-4">
                  <p className="font-semibold text-gray-700">Key Requirements:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>IEC 60601-2-22 (Particular requirements for basic safety and essential performance of surgical, cosmetic, therapeutic and diagnostic laser equipment)</li>
                    <li>IEC 60825-1 (Safety of laser products)</li>
                    <li>Laser Notice 56 (Conformance with IEC standards)</li>
                    <li>FDA Special Controls for specific laser types</li>
                    <li>510(k) requirements and performance testing</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <a 
                    href="https://www.fda.gov/radiation-emitting-products/surgical-and-therapeutic-products/medical-lasers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    View Medical Lasers Overview <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-content-and-organization-premarket-notification-medical-laser" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    View 510(k) Guidance for Medical Lasers <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.fda.gov/medical-devices/guidance-documents-medical-devices-and-radiation-emitting-products/assisted-reproduction-laser-systems-class-ii-special-controls-guidance-document-industry-and-fda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    View Assisted Reproduction Laser Guidance <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.fda.gov/medical-devices/guidance-documents-medical-devices-and-radiation-emitting-products/low-level-laser-system-aesthetic-use-class-ii-special-controls-guidance-industry-and-fda-staff" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    View Aesthetic Laser Guidance <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-lg p-6 hover:border-orange-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">FDA Guidance</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Wearable Medical Devices</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Regulatory considerations for wearable medical devices including continuous monitoring devices, 
                  fitness trackers with medical claims, and implantable wearables. Covers form factor constraints, 
                  battery safety, environmental durability, and user experience requirements.
                </p>
                <div className="text-sm text-gray-600 space-y-2 mb-4">
                  <p className="font-semibold text-gray-700">Key Requirements:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>IEC 60601-1 (Electrical safety for portable devices)</li>
                    <li>IEC 62366 (Usability engineering for wearable interfaces)</li>
                    <li>Environmental testing (temperature, humidity, shock, vibration)</li>
                    <li>Battery safety and performance standards</li>
                    <li>Software validation (IEC 62304) for connected wearables</li>
                    <li>Cybersecurity for data transmission</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <a 
                    href="https://www.fda.gov/medical-devices/digital-health-center-excellence" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    View Digital Health Center Guidance <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/medical-device-databases" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    Search Device Classification Database <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-lg p-6 hover:border-orange-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">FDA Guidance</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI/ML in Medical Devices</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Comprehensive regulatory framework for artificial intelligence and machine learning-enabled medical devices. 
                  Includes FDA's AI/ML Action Plan, validation requirements, continuous learning considerations, and 
                  premarket/postmarket guidance for adaptive algorithms.
                </p>
                <div className="text-sm text-gray-600 space-y-2 mb-4">
                  <p className="font-semibold text-gray-700">Key Requirements:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>FDA AI/ML Action Plan and Good Machine Learning Practice (GMLP)</li>
                    <li>IEC 62304 (Software lifecycle processes for medical device software)</li>
                    <li>Clinical validation and performance evaluation</li>
                    <li>Change control for continuous learning algorithms</li>
                    <li>Transparency and explainability requirements</li>
                    <li>Cybersecurity for AI/ML systems</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <a 
                    href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    View AI/ML Medical Device Guidance <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.fda.gov/medical-devices/software-medical-device-samd/good-machine-learning-practice-medical-device-development-guiding-principles" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 block"
                  >
                    View GMLP Principles <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 mb-2">FDA Regulations - Legal Requirements</h4>
                <p className="text-sm text-green-800 mb-3">
                  FDA regulations are legally binding requirements that must be complied with for US market access. 
                  Unlike standards, regulations are mandatory and enforceable by law. This section provides implementation 
                  guidance to help understand and comply with these regulations.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="bg-white rounded p-2">
                    <div className="font-bold text-green-900">6 Regulations</div>
                    <div className="text-green-700">Published</div>
                  </div>
                  <div className="bg-white rounded p-2">
                    <div className="font-bold text-green-900">US Market</div>
                    <div className="text-green-700">Required</div>
                  </div>
                  <div className="bg-white rounded p-2">
                    <div className="font-bold text-green-900">Public Domain</div>
                    <div className="text-green-700">Free Access</div>
                  </div>
                  <div className="bg-white rounded p-2">
                    <div className="font-bold text-green-900">Implementation</div>
                    <div className="text-green-700">Guides</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
               {/* Footer */}
                  <Footer />
                
      </div>
    </div>
  );
}

