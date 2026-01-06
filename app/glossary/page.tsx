'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import StructuredData, { generateGlossarySchema, generateFAQPageSchema } from '@/components/StructuredData';
import { Search, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';

// Comprehensive glossary data - structured for AI indexing
const glossaryTerms = [
    // Core Regulatory Terms
    {
        term: 'SaMD',
        fullName: 'Software as a Medical Device',
        definition: 'Software as a Medical Device (SaMD) is software intended to be used for one or more medical purposes that perform these purposes without being part of a hardware medical device. SaMD can be used for diagnosis, treatment, prevention, or monitoring of disease.',
        category: 'Software',
        relatedStandards: ['IEC 62304', 'ISO 14971', 'IEC 81001-5-1'],
    },
    {
        term: 'SiMD',
        fullName: 'Software in a Medical Device',
        definition: 'Software in a Medical Device (SiMD) is software that is an integral part of a medical device, embedded within the device hardware. Unlike SaMD, SiMD cannot function independently of the device it controls.',
        category: 'Software',
        relatedStandards: ['IEC 62304', 'IEC 60601-1'],
    },
    {
        term: 'QMS',
        fullName: 'Quality Management System',
        definition: 'A Quality Management System (QMS) is a formalized system that documents processes, procedures, and responsibilities for achieving quality policies and objectives. For medical devices, QMS requirements are defined by ISO 13485 and FDA 21 CFR Part 820.',
        category: 'Quality',
        relatedStandards: ['ISO 13485', '21 CFR Part 820'],
    },
    {
        term: 'QMSR',
        fullName: 'Quality Management System Regulation',
        definition: 'The Quality Management System Regulation (QMSR) is FDA\'s updated regulation (effective 2026) that replaces the Quality System Regulation (QSR). QMSR directly incorporates ISO 13485:2016 by reference, harmonizing US requirements with international standards.',
        category: 'Regulatory',
        relatedStandards: ['21 CFR Part 820', 'ISO 13485'],
    },
    {
        term: '510(k)',
        fullName: 'Premarket Notification',
        definition: 'A 510(k) is a premarket submission made to FDA to demonstrate that a device is substantially equivalent to a legally marketed predicate device. Most Class II medical devices require 510(k) clearance before marketing.',
        category: 'Regulatory',
        relatedStandards: ['21 CFR Part 807'],
    },
    {
        term: 'PMA',
        fullName: 'Premarket Approval',
        definition: 'Premarket Approval (PMA) is the FDA process of scientific and regulatory review to evaluate the safety and effectiveness of Class III medical devices. PMA is the most stringent type of device marketing application.',
        category: 'Regulatory',
        relatedStandards: ['21 CFR Part 814'],
    },
    {
        term: 'IDE',
        fullName: 'Investigational Device Exemption',
        definition: 'An Investigational Device Exemption (IDE) allows an investigational device to be used in a clinical study to collect safety and effectiveness data. IDE approval is required for significant risk device studies before FDA clearance or approval.',
        category: 'Clinical',
        relatedStandards: ['21 CFR Part 812', 'ISO 14155'],
    },
    {
        term: 'DHF',
        fullName: 'Design History File',
        definition: 'The Design History File (DHF) contains or references the records necessary to demonstrate that the design was developed in accordance with the approved design plan and requirements. Required by FDA 21 CFR 820.30.',
        category: 'Design Controls',
        relatedStandards: ['21 CFR Part 820', 'ISO 13485'],
    },
    {
        term: 'DMR',
        fullName: 'Device Master Record',
        definition: 'The Device Master Record (DMR) contains all the information necessary to manufacture a medical device, including device specifications, production processes, quality procedures, and labeling.',
        category: 'Manufacturing',
        relatedStandards: ['21 CFR Part 820', 'ISO 13485'],
    },
    {
        term: 'DHR',
        fullName: 'Device History Record',
        definition: 'The Device History Record (DHR) contains the production history of a finished device, demonstrating that the device was manufactured in accordance with the DMR. Each production unit or batch has its own DHR.',
        category: 'Manufacturing',
        relatedStandards: ['21 CFR Part 820', 'ISO 13485'],
    },
    {
        term: 'CAPA',
        fullName: 'Corrective and Preventive Action',
        definition: 'Corrective and Preventive Action (CAPA) is a systematic process for identifying, investigating, and addressing problems and potential problems in quality management. CAPA is a key requirement of both FDA QSR and ISO 13485.',
        category: 'Quality',
        relatedStandards: ['21 CFR Part 820', 'ISO 13485'],
    },
    {
        term: 'FMEA',
        fullName: 'Failure Mode and Effects Analysis',
        definition: 'Failure Mode and Effects Analysis (FMEA) is a systematic, proactive method for evaluating a process or design to identify where and how it might fail and to assess the relative impact of different failures. Used extensively in ISO 14971 risk management.',
        category: 'Risk Management',
        relatedStandards: ['ISO 14971', 'IEC 60812'],
    },
    {
        term: 'MDR',
        fullName: 'Medical Device Reporting',
        definition: 'Medical Device Reporting (MDR) is the FDA\'s post-market surveillance requirement for manufacturers to report device-related deaths, serious injuries, and malfunctions. Defined in 21 CFR Part 803.',
        category: 'Post-Market',
        relatedStandards: ['21 CFR Part 803'],
    },
    {
        term: 'UDI',
        fullName: 'Unique Device Identification',
        definition: 'Unique Device Identification (UDI) is a system for identifying medical devices through their distribution and use. Each UDI consists of a Device Identifier (DI) and Production Identifier (PI).',
        category: 'Identification',
        relatedStandards: ['21 CFR Part 830'],
    },
    {
        term: 'EU MDR',
        fullName: 'European Union Medical Device Regulation',
        definition: 'The EU Medical Device Regulation (MDR 2017/745) is the European regulatory framework for medical devices. It replaced the Medical Device Directive (MDD) and imposes stricter requirements for clinical evidence, post-market surveillance, and device identification.',
        category: 'Regulatory',
        relatedStandards: ['ISO 13485', 'ISO 14971'],
    },
    {
        term: 'IFU',
        fullName: 'Instructions for Use',
        definition: 'Instructions for Use (IFU) are the instructions provided with a medical device to inform the user about the device\'s intended purpose, proper use, warnings, and precautions. Required by ISO 20417 and regulatory authorities.',
        category: 'Labeling',
        relatedStandards: ['ISO 20417', 'ISO 15223'],
    },
    {
        term: 'Essential Performance',
        fullName: 'Essential Performance',
        definition: 'Essential Performance is the performance of a clinical function, other than that related to basic safety, where loss or degradation beyond limits specified by the manufacturer results in an unacceptable risk. Defined in IEC 60601-1.',
        category: 'Safety',
        relatedStandards: ['IEC 60601-1', 'IEC 60601-1-2'],
    },
    {
        term: 'Predicate Device',
        fullName: 'Predicate Device',
        definition: 'A predicate device is a legally marketed device to which a new device is compared in a 510(k) submission. Substantial equivalence to a predicate device is the basis for 510(k) clearance.',
        category: 'Regulatory',
        relatedStandards: ['21 CFR Part 807'],
    },
    {
        term: 'Substantial Equivalence',
        fullName: 'Substantial Equivalence',
        definition: 'Substantial equivalence means that a new device has the same intended use as a predicate device and has either the same technological characteristics or different characteristics that do not raise new questions of safety and effectiveness.',
        category: 'Regulatory',
        relatedStandards: ['21 CFR Part 807'],
    },
    {
        term: 'V&V',
        fullName: 'Verification and Validation',
        definition: 'Verification confirms that design outputs meet design inputs (built right). Validation confirms that the device meets user needs and intended uses (built the right thing). Required by design controls and IEC 62304.',
        category: 'Design Controls',
        relatedStandards: ['21 CFR Part 820', 'IEC 62304', 'ISO 13485'],
    },
];

// Categories for filtering
const categories = ['All', ...new Set(glossaryTerms.map(t => t.category))];

export default function GlossaryPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());

    const filteredTerms = useMemo(() => {
        return glossaryTerms.filter(term => {
            const matchesSearch =
                term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                term.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                term.definition.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    const toggleTerm = (term: string) => {
        const newExpanded = new Set(expandedTerms);
        if (newExpanded.has(term)) {
            newExpanded.delete(term);
        } else {
            newExpanded.add(term);
        }
        setExpandedTerms(newExpanded);
    };

    // Prepare FAQ data for schema
    const faqData = glossaryTerms.slice(0, 10).map(t => ({
        question: `What is ${t.term}?`,
        answer: t.definition
    }));

    return (
        <>
            <StructuredData data={generateGlossarySchema(glossaryTerms.map(t => ({
                term: t.term,
                definition: t.definition,
            })))} />
            <StructuredData data={generateFAQPageSchema(faqData)} />

            <div className="min-h-screen bg-gray-50 relative">
                <MatrixBackground intensity="low" />
                <div className="relative z-10">
                    <Header />

                    <main className="max-w-7xl mx-auto px-6 py-8">
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
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">Regulatory Terms & Definitions</h1>
                            <p className="text-xl text-gray-600">
                                Clear, concise definitions of key terms in medical device development,
                                FDA regulations, and ISO standards.
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="mb-8">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search terms... (e.g., SaMD, 510k, CAPA)"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2 justify-center mb-8">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <p className="text-gray-600 text-center mb-8">
                            Showing {filteredTerms.length} of {glossaryTerms.length} terms
                        </p>

                        {/* Glossary Grid */}
                        <div className="grid gap-4 max-w-4xl mx-auto">
                            {filteredTerms.map((item) => (
                                <article
                                    key={item.term}
                                    id={item.term.toLowerCase().replace(/[\s()]/g, '-')}
                                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all"
                                >
                                    <button
                                        onClick={() => toggleTerm(item.term)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50"
                                    >
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-900">
                                                {item.term}
                                                {item.fullName !== item.term && (
                                                    <span className="text-gray-500 font-normal ml-2">
                                                        — {item.fullName}
                                                    </span>
                                                )}
                                            </h2>
                                            <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                                                {item.category}
                                            </span>
                                        </div>
                                        {expandedTerms.has(item.term) ? (
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        ) : (
                                            <ChevronRight className="w-5 h-5 text-gray-400" />
                                        )}
                                    </button>

                                    {expandedTerms.has(item.term) && (
                                        <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                                            {/* Definition - formatted for AI scraping with "What is X?" pattern */}
                                            <div className="mt-4">
                                                <h3 className="text-sm font-medium text-blue-600 mb-2">
                                                    What is {item.term}?
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {item.definition}
                                                </p>
                                            </div>

                                            {/* Related Standards */}
                                            {item.relatedStandards && item.relatedStandards.length > 0 && (
                                                <div className="mt-4">
                                                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                                                        Related Standards & Regulations
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.relatedStandards.map((std) => (
                                                            <span
                                                                key={std}
                                                                className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                                                            >
                                                                {std}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 max-w-2xl mx-auto text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Can&apos;t find a term?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Explore our comprehensive guides on standards and regulations for in-depth coverage.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="/standards"
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                                >
                                    Browse Standards
                                </a>
                                <a
                                    href="/regulations"
                                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors"
                                >
                                    Browse Regulations
                                </a>
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            </div>
        </>
    );
}
