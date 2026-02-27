'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import Stepper, { StepperStep } from '@/components/Stepper';
import ExpandableSection from '@/components/ExpandableSection';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CheckCircle, AlertTriangle, FileText, Shield, ClipboardList } from 'lucide-react';

export default function FDACybersecuritySubmissionPage() {
    const steps: StepperStep[] = [
        {
            id: 'device-classification',
            title: 'Step 1: Determine Your Cybersecurity Submission Scope',
            description: 'Classify your device and determine which cybersecurity documentation is required',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">1. Is Your Device a &quot;Cyber Device&quot; Under Section 524B?</h4>
                        <p className="text-gray-700 mb-3">
                            Section 524B of the FD&C Act (enacted March 2023) defines a &quot;cyber device&quot; as a device that: (1) includes software validated, installed, or authorized by the sponsor, (2) has the ability to connect to the internet, and (3) contains software components that could be vulnerable to cybersecurity threats. If your device meets all three criteria, cybersecurity documentation is <strong>legally mandatory</strong> — FDA can issue a Refuse to Accept (RTA) if it is missing.
                        </p>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                            <div className="flex items-start gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-red-800">
                                    <strong>RTA Risk:</strong> Since October 2023, FDA actively applies the RTA criteria for cyber devices. Submissions lacking SBOM, SPDF evidence, or vulnerability patch plans are being rejected before substantive review begins. Do not treat cybersecurity as an afterthought.
                                </p>
                            </div>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-sm text-blue-900">
                                <strong>Use Our Tool:</strong> Run the <Link href="/tools/cyber-device-classification" className="text-blue-600 underline hover:text-blue-700">Cyber Device Classification Tool</Link> to determine if your device meets the Section 524B definition.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">2. Submission Type Determines Cybersecurity Depth</h4>
                        <p className="text-gray-700 mb-3">
                            The level of cybersecurity documentation expected varies by submission type, though all cyber devices require the core artifacts:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-3 py-2 text-left">Submission Type</th>
                                        <th className="border border-gray-300 px-3 py-2 text-left">Cybersecurity Expectation</th>
                                        <th className="border border-gray-300 px-3 py-2 text-left">Key Differences</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-3 py-2 font-medium">510(k) — Class II</td>
                                        <td className="border border-gray-300 px-3 py-2">Full cybersecurity package</td>
                                        <td className="border border-gray-300 px-3 py-2">Predicate comparison includes cybersecurity posture differences; focus on substantial equivalence of security controls</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-3 py-2 font-medium">De Novo — Class II</td>
                                        <td className="border border-gray-300 px-3 py-2">Full cybersecurity package</td>
                                        <td className="border border-gray-300 px-3 py-2">No predicate, so cybersecurity review is based entirely on the submitted risk assessment and controls</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-3 py-2 font-medium">PMA — Class III</td>
                                        <td className="border border-gray-300 px-3 py-2">Enhanced cybersecurity package</td>
                                        <td className="border border-gray-300 px-3 py-2">Deeper scrutiny: attack trees required, pen testing results expected, extended post-market monitoring commitments</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <ExpandableSection title="💡 Special Case: Software as a Medical Device (SaMD)" variant="info">
                        <p className="text-sm text-gray-700">
                            SaMD products (mobile apps, cloud-based diagnostic algorithms) are almost always cyber devices under 524B because they inherently connect to the internet and contain vulnerable software. The cybersecurity submission package for SaMD often emphasizes cloud backend security, API authentication, data encryption, and HIPAA technical safeguards in addition to the core FDA artifacts.
                        </p>
                    </ExpandableSection>
                </div>
            ),
        },
        {
            id: 'spdf-evidence',
            title: 'Step 2: Compile SPDF Evidence',
            description: 'Document your Secure Product Development Framework implementation',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What FDA Reviewers Want to See</h4>
                        <p className="text-gray-700 mb-3">
                            The SPDF is the first artifact reviewers check — it demonstrates that security was <strong>designed in</strong>, not bolted on. You need to show that your development process systematically addresses cybersecurity from design inputs through post-market maintenance. FDA does not prescribe a specific SPDF framework, but expects alignment with IEC 81001-5-1 or equivalent recognized standards.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Required SPDF Documentation</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-gray-900">Security Risk Management Process</strong>
                                    <p className="text-sm text-gray-600">Written procedure showing how cybersecurity risks are identified, assessed, and controlled throughout the product lifecycle. Reference AAMI SW96:2023 or TIR57 as the process standard.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-gray-900">Security Requirements in Design Inputs</strong>
                                    <p className="text-sm text-gray-600">Evidence that cybersecurity requirements were included as formal design inputs — not added after design verification. Include the traceability from threats to security requirements.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-gray-900">Security Testing in Verification/Validation</strong>
                                    <p className="text-sm text-gray-600">Test plans and results for: static analysis (SAST), software composition analysis (SCA), fuzz testing, penetration testing, and vulnerability scanning. Each test must map to a specific security requirement or threat.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-gray-900">Configuration Management for Security</strong>
                                    <p className="text-sm text-gray-600">Evidence that software changes are controlled and that security patches can be deployed without re-validation of the entire system. Include your patching and update deployment process.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-900">
                            <strong>Deep Dive:</strong> See the <Link href="/guides/spdf-implementation" className="text-blue-600 underline hover:text-blue-700">SPDF Implementation Guide</Link> for step-by-step instructions on building your SPDF process and generating the evidence FDA expects.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: 'threat-model',
            title: 'Step 3: Prepare Threat Model & Risk Assessment',
            description: 'Build the two core cybersecurity analysis artifacts',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Two Distinct Documents, Tightly Linked</h4>
                        <p className="text-gray-700 mb-3">
                            FDA expects two separate but interlinked cybersecurity analysis documents:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">Threat Model</h5>
                                <p className="text-sm text-purple-800 mb-2">Answers: <em>&quot;What can go wrong and how?&quot;</em></p>
                                <ul className="text-sm text-purple-700 space-y-1">
                                    <li>• System architecture diagrams</li>
                                    <li>• Data-flow diagrams with trust boundaries</li>
                                    <li>• Threat enumeration (STRIDE/PASTA)</li>
                                    <li>• Attack trees for critical scenarios</li>
                                    <li>• CVE cross-references from SBOM</li>
                                </ul>
                                <p className="text-xs text-purple-600 mt-2">
                                    → <Link href="/guides/threat-modeling-medical-devices" className="underline hover:text-purple-800">Full guide</Link>
                                </p>
                            </div>
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <h5 className="font-semibold text-red-900 mb-2">Risk Assessment</h5>
                                <p className="text-sm text-red-800 mb-2">Answers: <em>&quot;How severe is it and what do we do?&quot;</em></p>
                                <ul className="text-sm text-red-700 space-y-1">
                                    <li>• Exploitability scoring (CVSS/CWSS)</li>
                                    <li>• Impact assessment per threat</li>
                                    <li>• Uncontrolled → Controlled risk evaluation</li>
                                    <li>• Security control specifications</li>
                                    <li>• Residual risk acceptance</li>
                                </ul>
                                <p className="text-xs text-red-600 mt-2">
                                    → <Link href="/guides/cybersecurity-risk-assessment" className="underline hover:text-red-800">Full guide</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">eSTAR Mapping for Cybersecurity Analysis</h4>
                        <p className="text-gray-700 mb-3">
                            The eSTAR template has specific fields that map to your threat model and risk assessment:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-3 py-2 text-left">eSTAR Field</th>
                                        <th className="border border-gray-300 px-3 py-2 text-left">Maps To</th>
                                        <th className="border border-gray-300 px-3 py-2 text-left">Source Document</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-3 py-2">System / Architecture Diagrams</td>
                                        <td className="border border-gray-300 px-3 py-2">Architecture diagram, DFDs, trust boundaries</td>
                                        <td className="border border-gray-300 px-3 py-2">Threat Model</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-3 py-2">Threat Modeling / Risk Assessment</td>
                                        <td className="border border-gray-300 px-3 py-2">Threat-to-control traceability matrix, risk register</td>
                                        <td className="border border-gray-300 px-3 py-2">Both</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-3 py-2">Security Controls</td>
                                        <td className="border border-gray-300 px-3 py-2">Control specification matrix</td>
                                        <td className="border border-gray-300 px-3 py-2">Risk Assessment</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-3 py-2">Security Testing</td>
                                        <td className="border border-gray-300 px-3 py-2">SAST, SCA, fuzz, pen test results</td>
                                        <td className="border border-gray-300 px-3 py-2">SPDF Evidence</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <ExpandableSection title="⚠️ Common RTA Failure: Threat Model Without Traceability" variant="warning">
                        <p className="text-sm text-gray-700">
                            A threat model that lists threats without mapping each one to a specific security control and verification method is a top cause of RTA letters. FDA reviewers need to see the complete chain: <strong>Threat → Control → Verification → Residual Risk Acceptance</strong>. If any link is missing, the submission is considered incomplete.
                        </p>
                    </ExpandableSection>
                </div>
            ),
        },
        {
            id: 'sbom',
            title: 'Step 4: Prepare SBOM and Vulnerability Analysis',
            description: 'Generate the machine-readable SBOM and map known vulnerabilities',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">SBOM Requirements for Submission</h4>
                        <p className="text-gray-700 mb-3">
                            Section 524B makes SBOM submission legally mandatory for cyber devices. The SBOM must be machine-readable (SPDX or CycloneDX format) and meet the NTIA Minimum Elements:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700"><strong>Supplier Name</strong> — Who produced each component</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700"><strong>Component Name</strong> — Designator or title of the component</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700"><strong>Version String</strong> — Specific version of the component</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700"><strong>Unique Identifier</strong> — CPE, PURL, or SWID tag</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700"><strong>Dependency Relationships</strong> — How components relate to each other</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700"><strong>Author of SBOM Data</strong> — Who generated the SBOM</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700"><strong>Timestamp</strong> — When the SBOM was generated</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Vulnerability Analysis Against the SBOM</h4>
                        <p className="text-gray-700 mb-3">
                            Simply listing components is not sufficient — you must demonstrate that you analyzed the SBOM for known vulnerabilities. For each CVE found:
                        </p>
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                            <ul className="text-sm text-orange-800 space-y-2">
                                <li>1. <strong>CVE ID and CVSS Score</strong> — From NVD or other authoritative source</li>
                                <li>2. <strong>Applicability Assessment</strong> — Is the vulnerable code path reachable in your product? (Not all CVEs in a component are exploitable in your context)</li>
                                <li>3. <strong>Mitigation Status</strong> — Patched, mitigated by compensating control, or accepted risk with justification</li>
                                <li>4. <strong>Patch Timeline</strong> — If not yet patched, when will the patch be available?</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-900">
                            <strong>Deep Dive:</strong> See the <Link href="/guides/sbom-creation" className="text-blue-600 underline hover:text-blue-700">SBOM Creation & Management Guide</Link> for tooling selection, CI/CD integration, and format details.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: 'post-market',
            title: 'Step 5: Document Post-Market Cybersecurity Plans',
            description: 'Define your vulnerability monitoring, patching, and disclosure plan',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Section 524B Requires Three Post-Market Commitments</h4>
                        <p className="text-gray-700 mb-3">
                            Your premarket submission must include plans for all three — these are <strong>statutory requirements</strong>, not optional recommendations:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                            <h5 className="font-semibold text-green-900 mb-2">1. Vulnerability Monitoring & Patching Plan</h5>
                            <ul className="text-sm text-green-800 space-y-2">
                                <li>• <strong>SBOM monitoring</strong>: Automated CVE matching against your component list (define tools and frequency)</li>
                                <li>• <strong>Patch development SLA</strong>: Critical CVE (CVSS ≥ 9.0) → patch within 30 days; High CVE (CVSS 7.0–8.9) → patch within 90 days</li>
                                <li>• <strong>Patch deployment mechanism</strong>: How updates are delivered (OTA, manual, clinician-assisted) and how you verify installation</li>
                                <li>• <strong>Out-of-support plan</strong>: What happens when third-party components reach EOL and patches are no longer available</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                            <h5 className="font-semibold text-blue-900 mb-2">2. Coordinated Vulnerability Disclosure (CVD) Policy</h5>
                            <ul className="text-sm text-blue-800 space-y-2">
                                <li>• <strong>Contact mechanism</strong>: Public security contact (security@company.com) or vulnerability reporting portal</li>
                                <li>• <strong>Response SLA</strong>: Acknowledge receipt within 48 hours, triage within 5 business days</li>
                                <li>• <strong>Disclosure timeline</strong>: Standard 90-day coordinated disclosure window before public advisory</li>
                                <li>• <strong>Safe harbor</strong>: Commit to not pursuing legal action against good-faith security researchers</li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                            <h5 className="font-semibold text-purple-900 mb-2">3. Cybersecurity Maintenance Plan</h5>
                            <ul className="text-sm text-purple-800 space-y-2">
                                <li>• <strong>Periodic reassessment</strong>: Annual cybersecurity risk reassessment of the SBOM and threat model</li>
                                <li>• <strong>Incident response</strong>: Process for handling security incidents post-market (link to CAPA process)</li>
                                <li>• <strong>Regulatory reporting</strong>: Criteria for when a cybersecurity incident triggers an MDR (Medical Device Report) under 21 CFR Part 803</li>
                                <li>• <strong>End-of-life plan</strong>: How you will handle cybersecurity when the device reaches end of commercial distribution</li>
                            </ul>
                        </div>
                    </div>

                    <ExpandableSection title="💡 Pro Tip: CISA Integration" variant="info">
                        <p className="text-sm text-gray-700">
                            Establish a relationship with CISA ICS-CERT before you need it. Subscribe to ICS-CERT advisories for your device category, and consider pre-registering for coordinated disclosure support. CISA can assist with vulnerability coordination if a critical issue is discovered in your device post-market.
                        </p>
                    </ExpandableSection>
                </div>
            ),
        },
        {
            id: 'labeling',
            title: 'Step 6: Cybersecurity Labeling & Customer Communication',
            description: 'Provide cybersecurity information to device users and administrators',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">FDA-Expected Cybersecurity Labeling</h4>
                        <p className="text-gray-700 mb-3">
                            The finalized FDA cybersecurity guidance specifies that device labeling must include cybersecurity-relevant information for customers. This is typically delivered through the Instructions for Use (IFU), a separate Cybersecurity Guide, or a Manufacturer Disclosure Statement for Medical Device Security (MDS²):
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-gray-900">Device hardening recommendations</strong>
                                    <p className="text-sm text-gray-600">Network segmentation, firewall rules, disabled unnecessary ports/services, and default credential changes that the healthcare facility must implement</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-gray-900">Software update/patch information</strong>
                                    <p className="text-sm text-gray-600">How updates are delivered, how customers verify authenticity, and the expected patch cadence</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-gray-900">Backup and restore procedures</strong>
                                    <p className="text-sm text-gray-600">How customers can back up device configuration and clinical data, and restore to a known-good state after a security incident</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-gray-900">End-of-support notification</strong>
                                    <p className="text-sm text-gray-600">The date after which cybersecurity updates will no longer be provided, and recommendations for device decommissioning</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h5 className="font-semibold text-yellow-900 mb-2">MDS² (Manufacturer Disclosure Statement)</h5>
                        <p className="text-sm text-yellow-800">
                            The MDS² form (maintained by MITA/NEMA/ACCE) is the industry-standard format for communicating device cybersecurity capabilities to healthcare delivery organizations. Complete the MDS² for your device and include it as part of your labeling package. Many hospital procurement departments require it before device acquisition.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: 'assembly',
            title: 'Step 7: Assemble & Submit the Cybersecurity Package',
            description: 'Final assembly, cross-verification, and submission-ready checklist',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Complete Cybersecurity Submission Package</h4>
                        <p className="text-gray-700 mb-3">
                            Assemble the following documents into a single, navigable package within your eSTAR submission:
                        </p>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <ul className="text-sm text-gray-700 space-y-2">
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span><strong>SPDF Documentation</strong> — Process description, procedures, evidence of integration with design controls</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span><strong>Threat Model</strong> — Architecture diagrams, DFDs, threat enumeration, attack trees</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span><strong>Cybersecurity Risk Assessment</strong> — Risk framework, uncontrolled/controlled risk registers, residual risk acceptance</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span><strong>SBOM (machine-readable)</strong> — SPDX or CycloneDX format with NTIA minimum elements</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span><strong>Vulnerability Analysis</strong> — CVE cross-reference with applicability and mitigation status</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span><strong>Security Testing Reports</strong> — SAST, SCA, fuzz testing, penetration testing results</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span><strong>Post-Market Cybersecurity Plan</strong> — Monitoring, patching, CVD, maintenance commitments</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span><strong>Cybersecurity Labeling</strong> — IFU security section, MDS², hardening guide</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span><strong>Traceability Matrix</strong> — Threats → Controls → Requirements → Verification → Risk Acceptance</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Pre-Submission Cross-Verification</h4>
                        <p className="text-gray-700 mb-3">
                            Before submitting, verify these critical consistency checks:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-2">✓ Bidirectional Traceability</h5>
                                <ul className="text-sm text-green-800 space-y-1">
                                    <li>• Every threat → ≥1 control</li>
                                    <li>• Every control → ≥1 threat</li>
                                    <li>• Every control → ≥1 verification activity</li>
                                    <li>• No orphan threats or controls</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-2">✓ Cross-Document Consistency</h5>
                                <ul className="text-sm text-green-800 space-y-1">
                                    <li>• SBOM component count matches SCA scan scope</li>
                                    <li>• Threat IDs consistent across all documents</li>
                                    <li>• Architecture diagrams identical in all references</li>
                                    <li>• CVSS scores agree between threat model and risk assessment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h5 className="font-semibold text-red-900 mb-1">Top RTA Triggers to Avoid</h5>
                                <ul className="text-sm text-red-800 space-y-1">
                                    <li>1. Missing or incomplete SBOM (insufficient NTIA elements)</li>
                                    <li>2. No SPDF evidence — security appears bolted on, not designed in</li>
                                    <li>3. Probabilistic risk scoring for cybersecurity instead of exploitability-based</li>
                                    <li>4. Threat model without traceability to controls and verification</li>
                                    <li>5. No post-market cybersecurity monitoring or patching commitment</li>
                                    <li>6. Missing or incomplete coordinated vulnerability disclosure policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 relative">
            <MatrixBackground intensity="low" />
            <div className="relative z-10">
                <Header />

                <div className="max-w-7xl mx-auto px-6 py-8">
                    {/* Breadcrumb */}
                    <div className="mb-6 flex items-center justify-between">
                        <Link
                            href="/domains/cybersecurity"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Cybersecurity Hub
                        </Link>
                        <BookmarkButton
                            title="How to Prepare FDA Cybersecurity Submission"
                            url="/how-to/fda-cybersecurity-submission"
                            type="how-to"
                        />
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-lg flex-shrink-0">
                                <Shield className="w-7 h-7 text-red-600" />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                    How to Prepare the Cybersecurity Section of Your FDA Premarket Submission
                                </h1>
                                <p className="text-xl text-gray-700 mb-4">
                                    Step-by-step checklist for compiling the complete cybersecurity package for 510(k), De Novo, and PMA submissions — covering every artifact CDRH reviewers expect under Section 524B and the finalized 2023 cybersecurity guidance.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <Link
                                        href="/regulations/fda-cybersecurity-guidance"
                                        className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200"
                                    >
                                        FDA Cybersecurity Guidance
                                    </Link>
                                    <Link
                                        href="/regulations/section-524b"
                                        className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200"
                                    >
                                        Section 524B
                                    </Link>
                                    <Link
                                        href="/guides/spdf-implementation"
                                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200"
                                    >
                                        SPDF Guide
                                    </Link>
                                    <Link
                                        href="/guides/sbom-creation"
                                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200"
                                    >
                                        SBOM Guide
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <ClipboardList className="w-6 h-6 text-red-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Submission Overview</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">What This Guide Covers</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    This guide walks you through assembling the complete cybersecurity documentation package for an FDA premarket submission. It maps every required artifact to its source document, provides eSTAR field-level guidance, and highlights the most common RTA triggers reported by CDRH reviewers.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prerequisites</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">SPDF process established and documented</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Threat model completed with traceability matrix</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">SBOM generated from your build pipeline</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Cybersecurity risk assessment completed</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Security testing (SAST, SCA, fuzz, pen test) executed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Stepper */}
                    <div className="mb-8">
                        <Stepper steps={steps} showProgress={true} allowNavigation={true} />
                    </div>

                    {/* Related Resources */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">Regulations</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/regulations/fda-cybersecurity-guidance" className="text-blue-600 hover:text-blue-700">
                                            FDA Cybersecurity Guidance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/regulations/section-524b" className="text-blue-600 hover:text-blue-700">
                                            Section 524B — Cyber Device Law
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/regulations/estar-template" className="text-blue-600 hover:text-blue-700">
                                            eSTAR Template Guide
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">Implementation Guides</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/guides/spdf-implementation" className="text-blue-600 hover:text-blue-700">
                                            SPDF Implementation Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/guides/threat-modeling-medical-devices" className="text-blue-600 hover:text-blue-700">
                                            Threat Modeling Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/guides/cybersecurity-risk-assessment" className="text-blue-600 hover:text-blue-700">
                                            Cybersecurity Risk Assessment Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/guides/sbom-creation" className="text-blue-600 hover:text-blue-700">
                                            SBOM Creation & Management
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">Standards & Tools</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/standards/iec-81001-5-1" className="text-blue-600 hover:text-blue-700">
                                            IEC 81001-5-1 — Security Lifecycle
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/tools/cyber-device-classification" className="text-blue-600 hover:text-blue-700">
                                            Cyber Device Classification Tool
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
