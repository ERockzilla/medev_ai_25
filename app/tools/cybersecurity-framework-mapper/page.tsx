'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import { Shield, ArrowLeft, Layers, BookOpen, ExternalLink } from 'lucide-react';

const CybersecurityFrameworkMapper = dynamic(
    () => import('@/components/CybersecurityFrameworkMapper'),
    { loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />, ssr: true }
);

export default function CybersecurityFrameworkMapperPage() {
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

                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-2">
                            <Layers className="w-8 h-8 text-blue-600" />
                            <h1 className="text-4xl font-bold text-gray-900">Cybersecurity Framework Mapper</h1>
                        </div>
                        <p className="text-xl text-gray-600">
                            Interactive control overlap matrix: FDA Cybersecurity ↔ HIPAA ↔ SOC 2 ↔ IEC 81001-5-1
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Identify which security controls satisfy multiple compliance frameworks simultaneously. Eliminate redundant work by building a unified control set with multi-framework traceability.
                        </p>
                    </div>

                    {/* Key Concepts */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Unified Control Set</h3>
                            <p className="text-sm text-gray-600">
                                One implementation, multiple compliance credits. ~60–70% of controls overlap across FDA, HIPAA, and SOC 2 — implement once and document for all three.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                                <Layers className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Gap Analysis</h3>
                            <p className="text-sm text-gray-600">
                                Filter to &quot;Gaps Only&quot; to see controls required by one framework but not others. These are your framework-specific obligations that need dedicated attention.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                                <BookOpen className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Export for DHF</h3>
                            <p className="text-sm text-gray-600">
                                Export the mapping as CSV for inclusion in your Design History File, HIPAA audit evidence binder, or SOC 2 readiness documentation.
                            </p>
                        </div>
                    </div>

                    {/* Main Mapper Tool */}
                    <div className="mb-10">
                        <CybersecurityFrameworkMapper />
                    </div>

                    {/* Related Resources */}
                    <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-gray-600" />
                            Related Guides & Standards
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Link
                                href="/regulations/fda-cybersecurity-guidance"
                                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all"
                            >
                                <h3 className="font-bold text-gray-900">FDA Cybersecurity Guidance</h3>
                                <p className="text-sm text-gray-600 mt-1">Premarket submission requirements</p>
                            </Link>
                            <Link
                                href="/regulations/hipaa-security-rule"
                                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all"
                            >
                                <h3 className="font-bold text-gray-900">HIPAA Security Rule</h3>
                                <p className="text-sm text-gray-600 mt-1">ePHI safeguard requirements</p>
                            </Link>
                            <Link
                                href="/guides/soc2-for-medtech"
                                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all"
                            >
                                <h3 className="font-bold text-gray-900">SOC 2 for MedTech</h3>
                                <p className="text-sm text-gray-600 mt-1">Trust Services Criteria guide</p>
                            </Link>
                            <Link
                                href="/standards/iec-81001-5-1"
                                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all"
                            >
                                <h3 className="font-bold text-gray-900">IEC 81001-5-1</h3>
                                <p className="text-sm text-gray-600 mt-1">Health software security lifecycle</p>
                            </Link>
                            <Link
                                href="/guides/hipaa-for-device-manufacturers"
                                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all"
                            >
                                <h3 className="font-bold text-gray-900">HIPAA Compliance Guide</h3>
                                <p className="text-sm text-gray-600 mt-1">Device-to-cloud compliance</p>
                            </Link>
                            <Link
                                href="/guides/cloud-security-medical-devices"
                                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all"
                            >
                                <h3 className="font-bold text-gray-900">Cloud Security Guide</h3>
                                <p className="text-sm text-gray-600 mt-1">Reference architecture for backends</p>
                            </Link>
                        </div>
                    </div>

                    {/* Back Link */}
                    <div className="pt-6 border-t border-gray-200">
                        <Link
                            href="/tools"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to All Tools
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
