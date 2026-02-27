'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import AnimatedIcon from '@/components/AnimatedIcon';
import BookmarkButton from '@/components/BookmarkButton';
import { usePathname } from 'next/navigation';
import {
    Shield,
    FileText,
    BookOpen,
    Wrench,
    ChevronRight,
    AlertTriangle,
    Scale,
    Cloud,
    Lock,
    Layers,
    CheckCircle,
} from 'lucide-react';

// Content sections organized by role
const LEARNING_PATHS = [
    {
        role: 'Regulatory Affairs',
        icon: Scale,
        color: 'green',
        description: 'FDA submission requirements, statutory mandates, and premarket cybersecurity documentation',
        startWith: [
            { title: 'FDA Cybersecurity Guidance', url: '/regulations/fda-cybersecurity-guidance' },
            { title: 'Premarket Submission How-To', url: '/how-to/fda-cybersecurity-submission' },
            { title: 'HIPAA Security Rule', url: '/regulations/hipaa-security-rule' },
        ],
    },
    {
        role: 'Software / Embedded Engineer',
        icon: Shield,
        color: 'blue',
        description: 'Secure coding, threat modeling, SBOM generation, and security testing',
        startWith: [
            { title: 'Threat Modeling Guide', url: '/guides/threat-modeling-medical-devices' },
            { title: 'SBOM Creation Guide', url: '/guides/sbom-creation' },
            { title: 'ANSI/AAMI SW96 Risk Mgmt', url: '/standards/ansi-aami-sw96' },
        ],
    },
    {
        role: 'Cloud Architect / DevOps',
        icon: Cloud,
        color: 'purple',
        description: 'Backend security, encryption, HIPAA technical safeguards, and SOC 2 readiness',
        startWith: [
            { title: 'Cloud Security Guide', url: '/guides/cloud-security-medical-devices' },
            { title: 'HIPAA for Device Makers', url: '/guides/hipaa-for-device-manufacturers' },
            { title: 'SOC 2 for MedTech', url: '/guides/soc2-for-medtech' },
        ],
    },
    {
        role: 'QMS Manager',
        icon: FileText,
        color: 'orange',
        description: 'Integrating cybersecurity into quality systems, risk management, and design controls',
        startWith: [
            { title: 'Cybersecurity Risk Assessment', url: '/guides/cybersecurity-risk-assessment' },
            { title: 'Framework Mapper Tool', url: '/tools/cybersecurity-framework-mapper' },
            { title: 'HIPAA Compliance Guide', url: '/guides/hipaa-for-device-manufacturers' },
        ],
    },
];

// Content sections
const CONTENT_SECTIONS = [
    {
        title: 'FDA Regulatory Authority',
        description: 'Statutory mandates and premarket submission guidance for cybersecurity',
        color: 'green',
        icon: Scale,
        items: [
            {
                title: 'FDA Cybersecurity Guidance',
                subtitle: 'Premarket Submission Requirements',
                url: '/regulations/fda-cybersecurity-guidance',
                tags: ['Regulation', 'SPDF', 'Threat Modeling', 'SBOM'],
            },
            {
                title: 'Section 524B (FD&C Act)',
                subtitle: 'Ensuring Cybersecurity of Devices',
                url: '/regulations/section-524b',
                tags: ['Law', 'Cyber Device', 'Mandatory'],
            },
        ],
    },
    {
        title: 'HIPAA & Data Privacy',
        description: 'HIPAA Security Rule compliance for device manufacturers handling ePHI',
        color: 'purple',
        icon: Lock,
        items: [
            {
                title: 'HIPAA Security Rule',
                subtitle: 'Administrative, Physical & Technical Safeguards',
                url: '/regulations/hipaa-security-rule',
                tags: ['Regulation', 'ePHI', 'Safeguards'],
            },
            {
                title: 'Business Associate Agreements',
                subtitle: 'BAA Requirements & Cloud Provider BAAs',
                url: '/regulations/hipaa-baa',
                tags: ['Regulation', 'BAA', 'Vendors'],
            },
            {
                title: 'HIPAA for Device Manufacturers',
                subtitle: 'End-to-End ePHI Protection Guide',
                url: '/guides/hipaa-for-device-manufacturers',
                tags: ['Guide', 'ePHI', 'FDA-HIPAA'],
            },
        ],
    },
    {
        title: 'Implementation Guides',
        description: 'Step-by-step guides for implementing cybersecurity frameworks and processes',
        color: 'blue',
        icon: BookOpen,
        items: [
            {
                title: 'SPDF Implementation Guide',
                subtitle: 'Secure Product Development Framework',
                url: '/guides/spdf-implementation',
                tags: ['Guide', 'Design Controls', 'IEC 81001-5-1'],
            },
            {
                title: 'SBOM Creation & Management',
                subtitle: 'Formats, Tooling, and Maintenance',
                url: '/guides/sbom-creation',
                tags: ['Guide', 'SPDX', 'CycloneDX', 'CI/CD'],
            },
            {
                title: 'Threat Modeling for Medical Devices',
                subtitle: 'STRIDE, PASTA, Attack Trees & DFDs',
                url: '/guides/threat-modeling-medical-devices',
                tags: ['Guide', 'STRIDE', 'DFD', 'Attack Trees'],
            },
            {
                title: 'Cybersecurity Risk Assessment',
                subtitle: 'Exploitability-Based Scoring & CVSS',
                url: '/guides/cybersecurity-risk-assessment',
                tags: ['Guide', 'CVSS', 'SW96', 'Risk'],
            },
            {
                title: 'FDA Cybersecurity Submission',
                subtitle: 'Step-by-Step Premarket Checklist',
                url: '/how-to/fda-cybersecurity-submission',
                tags: ['How-To', '510(k)', 'PMA', 'eSTAR'],
            },
            {
                title: 'SOC 2 Type II for MedTech',
                subtitle: 'Trust Services Criteria & Audit Prep',
                url: '/guides/soc2-for-medtech',
                tags: ['Guide', 'SOC 2', 'Audit', 'TSC'],
            },
            {
                title: 'Cloud Security for Medical Devices',
                subtitle: 'VPC, IAM, Encryption & DR Architecture',
                url: '/guides/cloud-security-medical-devices',
                tags: ['Guide', 'AWS', 'Azure', 'GCP'],
            },
        ],
    },
    {
        title: 'Standards',
        description: 'Cybersecurity-related standards recognized by FDA for medical device development',
        color: 'purple',
        icon: FileText,
        items: [
            {
                title: 'IEC 81001-5-1',
                subtitle: 'Security Activities in the Product Life Cycle',
                url: '/standards/iec-81001-5-1',
                tags: ['Standard', 'Security Lifecycle', 'FDA Recognized'],
            },
            {
                title: 'ANSI/AAMI SW96:2023',
                subtitle: 'Security Risk Management (Replaces TIR57)',
                url: '/standards/ansi-aami-sw96',
                tags: ['Standard', 'Risk Mgmt', 'FDA Recognized'],
            },
            {
                title: 'AAMI TIR57',
                subtitle: 'Legacy Security Risk Management Principles',
                url: '/standards/aami-tir57',
                tags: ['TIR', 'Risk Mgmt', 'Legacy'],
            },
            {
                title: 'UL 2900 Series',
                subtitle: 'Cybersecurity Testing Standard',
                url: '/standards/ul-2900',
                tags: ['Standard', 'Testing', 'FDA Recognized'],
            },
        ],
    },
    {
        title: 'Interactive Tools',
        description: 'Decision-support tools for cybersecurity classification and compliance',
        color: 'orange',
        icon: Wrench,
        items: [
            {
                title: 'Cyber Device Classification Tool',
                subtitle: 'Determine if your device is a "cyber device" under Section 524B',
                url: '/tools/cyber-device-classification',
                tags: ['Tool', 'Interactive', 'Classification'],
            },
            {
                title: 'Cybersecurity Framework Mapper',
                subtitle: 'FDA ↔ HIPAA ↔ SOC 2 ↔ IEC 81001-5-1 Control Matrix',
                url: '/tools/cybersecurity-framework-mapper',
                tags: ['Tool', 'Interactive', 'Mapping', 'Export'],
            },
        ],
    },
];

// Completion stats
const COMPLETION_STATS = [
    { phase: 'Phase 1', title: 'Foundation', items: 'FDA Guidance, Section 524B, IEC 81001-5-1, SPDF, SBOM, Classification Tool', status: 'complete' },
    { phase: 'Phase 2', title: 'Risk & Submission', items: 'Threat Modeling, Risk Assessment, FDA Submission How-To', status: 'complete' },
    { phase: 'Phase 3', title: 'HIPAA Compliance', items: 'Security Rule, BAAs, Device Manufacturer Guide', status: 'complete' },
    { phase: 'Phase 4', title: 'SOC 2', items: 'SOC 2 Type II for MedTech Guide', status: 'complete' },
    { phase: 'Phase 5', title: 'Cloud Security', items: 'Cloud Security Architecture Guide', status: 'complete' },
    { phase: 'Phase 6', title: 'Standards & Tools', items: 'SW96, TIR57, UL 2900, Framework Mapper', status: 'complete' },
];

export default function CybersecurityHubPage() {
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
                            ← Back to Knowledge Center
                        </Link>
                    </div>

                    {/* Hero Section */}
                    <div className="mb-12">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-start gap-4 flex-1">
                                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg flex-shrink-0">
                                    <Shield className="w-8 h-8 text-red-600" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                        Medical Device Cybersecurity Hub
                                    </h1>
                                    <p className="text-xl text-gray-600 max-w-3xl">
                                        Regulations, standards, and implementation guides for building secure connected medical devices.
                                        From FDA premarket submissions to post-market vulnerability management.
                                    </p>
                                </div>
                            </div>
                            <BookmarkButton
                                title="Cybersecurity Hub"
                                url={pathname}
                                type="page"
                            />
                        </div>

                        {/* Key Alert */}
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm text-red-800">
                                        <strong>Section 524B is now law.</strong> Since March 2023, FDA can refuse to accept premarket submissions
                                        for &quot;cyber devices&quot; that lack an SBOM, post-market patch plan, and evidence of cybersecurity design.
                                        Cybersecurity is no longer optional — it&apos;s a gate for market access.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Learning Paths by Role */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <AnimatedIcon variant="sparkles" size={24} className="text-indigo-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Start Here — By Role</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {LEARNING_PATHS.map((path) => {
                                const IconComponent = path.icon;
                                const colorMap: Record<string, string> = {
                                    green: 'border-green-300 bg-green-50',
                                    blue: 'border-blue-300 bg-blue-50',
                                    purple: 'border-purple-300 bg-purple-50',
                                    orange: 'border-orange-300 bg-orange-50',
                                };
                                const iconColorMap: Record<string, string> = {
                                    green: 'text-green-600',
                                    blue: 'text-blue-600',
                                    purple: 'text-purple-600',
                                    orange: 'text-orange-600',
                                };
                                return (
                                    <div
                                        key={path.role}
                                        className={`border-2 rounded-lg p-6 ${colorMap[path.color]} hover:shadow-lg transition-all`}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <IconComponent className={`w-6 h-6 ${iconColorMap[path.color]}`} />
                                            <h3 className="text-lg font-bold text-gray-900">{path.role}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">{path.description}</p>
                                        <div className="space-y-2">
                                            {path.startWith.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={item.url}
                                                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors group"
                                                >
                                                    <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full text-xs font-bold text-gray-500 border border-gray-300">
                                                        {idx + 1}
                                                    </span>
                                                    {item.title}
                                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Content Sections */}
                    {CONTENT_SECTIONS.map((section) => {
                        const SectionIcon = section.icon;
                        const sectionColorMap: Record<string, string> = {
                            green: 'text-green-600',
                            blue: 'text-blue-600',
                            purple: 'text-purple-600',
                            orange: 'text-orange-600',
                        };
                        const borderColorMap: Record<string, string> = {
                            green: 'hover:border-green-400',
                            blue: 'hover:border-blue-400',
                            purple: 'hover:border-purple-400',
                            orange: 'hover:border-orange-400',
                        };
                        const tagColorMap: Record<string, string> = {
                            green: 'bg-green-50 text-green-700',
                            blue: 'bg-blue-50 text-blue-700',
                            purple: 'bg-purple-50 text-purple-700',
                            orange: 'bg-orange-50 text-orange-700',
                        };
                        return (
                            <div key={section.title} className="mb-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <SectionIcon className={`w-5 h-5 ${sectionColorMap[section.color]}`} />
                                    <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {section.items.map((item) => (
                                        <Link
                                            key={item.url}
                                            href={item.url}
                                            className={`bg-white border-2 border-gray-200 rounded-lg p-5 ${borderColorMap[section.color]} hover:shadow-lg transition-all group`}
                                        >
                                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-3">{item.subtitle}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {item.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColorMap[section.color]}`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* Content Roadmap - Completion Status */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <h2 className="text-xl font-bold text-gray-900">Content Roadmap — All Phases Complete</h2>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {COMPLETION_STATS.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">{item.phase}: {item.title}</p>
                                            <p className="text-xs text-gray-600 mt-1">{item.items}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-gray-900 rounded-lg p-8 text-white">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-red-400">524B</div>
                                <div className="text-sm text-gray-400 mt-1">Statutory Mandate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400">SPDF</div>
                                <div className="text-sm text-gray-400 mt-1">Required Framework</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-400">SBOM</div>
                                <div className="text-sm text-gray-400 mt-1">Mandatory for Cyber Devices</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-400">RTA</div>
                                <div className="text-sm text-gray-400 mt-1">Risk Without Compliance</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
