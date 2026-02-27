'use client';

import ImplementationGuideTemplate from '@/components/ImplementationGuideTemplate';

export default function SBOMCreationGuidePage() {
    return (
        <ImplementationGuideTemplate
            title="Software Bill of Materials (SBOM) Creation & Management Guide"
            subtitle="How to generate, validate, and maintain a compliant SBOM for FDA premarket submissions and post-market cybersecurity management"
            basedOn={[
                {
                    number: 'Section 524B (FD&C Act)',
                    title: 'Ensuring Cybersecurity of Devices',
                    url: '/regulations/section-524b',
                },
                {
                    number: 'FDA Cybersecurity Guidance',
                    title: 'Cybersecurity in Medical Devices: Quality System Considerations and Content of Premarket Submissions',
                    url: '/regulations/fda-cybersecurity-guidance',
                },
                {
                    number: 'IEC 81001-5-1',
                    title: 'Security — Activities in the product life cycle',
                    url: '/standards/iec-81001-5-1',
                },
            ]}
            overview={{
                purpose: 'This guide provides a complete workflow for creating, validating, and maintaining a Software Bill of Materials (SBOM) for medical devices. An SBOM is a formal, machine-readable inventory of all software components that make up a device — including first-party code, open-source libraries, commercial off-the-shelf (COTS) software, and firmware. With the enactment of Section 524B of the FD&C Act, SBOM submission is a statutory requirement for cyber devices. This guide covers format selection (SPDX vs. CycloneDX), automated generation tooling, NTIA minimum element compliance, vulnerability monitoring, and post-market SBOM maintenance.',
                audience: 'Software engineers, DevOps/build engineers, cybersecurity engineers, and regulatory affairs professionals who need to generate and maintain an FDA-compliant SBOM.',
                prerequisites: [
                    'Access to your device software source code and build system',
                    'Understanding of your software architecture and component dependencies',
                    'Familiarity with package managers used in your project (npm, pip, Maven, Conan, etc.)',
                    'Basic understanding of cybersecurity vulnerability databases (NVD, CVE)',
                ],
                estimatedTime: '2-4 weeks for initial SBOM generation and validation; ongoing maintenance',
            }}
            visualDiagram={
                <div className="w-full overflow-x-auto">
                    <svg viewBox="0 0 1400 650" className="w-full h-auto">
                        {/* Title */}
                        <text x="700" y="30" textAnchor="middle" className="text-lg font-bold fill-gray-900">
                            SBOM Lifecycle for Medical Devices
                        </text>

                        {/* Source Code / Build System */}
                        <rect x="50" y="60" width="280" height="120" rx="8" className="fill-blue-100 stroke-blue-500 stroke-2" />
                        <text x="190" y="90" textAnchor="middle" className="text-sm font-bold fill-gray-900">Source Code & Build System</text>
                        <text x="190" y="115" textAnchor="middle" className="text-xs fill-gray-700">• First-party source code</text>
                        <text x="190" y="130" textAnchor="middle" className="text-xs fill-gray-700">• Package manifests (package.json, etc.)</text>
                        <text x="190" y="145" textAnchor="middle" className="text-xs fill-gray-700">• Build configuration</text>
                        <text x="190" y="160" textAnchor="middle" className="text-xs fill-gray-700">• Container images / firmware</text>

                        {/* SBOM Generation */}
                        <rect x="400" y="60" width="280" height="120" rx="8" className="fill-green-100 stroke-green-500 stroke-2" />
                        <text x="540" y="90" textAnchor="middle" className="text-sm font-bold fill-gray-900">Automated SBOM Generation</text>
                        <text x="540" y="115" textAnchor="middle" className="text-xs fill-gray-700">• Syft, FOSSA, Snyk, Trivy</text>
                        <text x="540" y="130" textAnchor="middle" className="text-xs fill-gray-700">• CI/CD pipeline integration</text>
                        <text x="540" y="145" textAnchor="middle" className="text-xs fill-gray-700">• Format: SPDX or CycloneDX</text>
                        <text x="540" y="160" textAnchor="middle" className="text-xs fill-gray-700">• NTIA minimum elements</text>

                        {/* Validation */}
                        <rect x="750" y="60" width="280" height="120" rx="8" className="fill-yellow-100 stroke-yellow-500 stroke-2" />
                        <text x="890" y="90" textAnchor="middle" className="text-sm font-bold fill-gray-900">SBOM Validation</text>
                        <text x="890" y="115" textAnchor="middle" className="text-xs fill-gray-700">• NTIA minimum elements check</text>
                        <text x="890" y="130" textAnchor="middle" className="text-xs fill-gray-700">• Format compliance (JSON/XML)</text>
                        <text x="890" y="145" textAnchor="middle" className="text-xs fill-gray-700">• Component completeness audit</text>
                        <text x="890" y="160" textAnchor="middle" className="text-xs fill-gray-700">• Version accuracy verification</text>

                        {/* Submission */}
                        <rect x="1100" y="60" width="250" height="120" rx="8" className="fill-purple-100 stroke-purple-500 stroke-2" />
                        <text x="1225" y="90" textAnchor="middle" className="text-sm font-bold fill-gray-900">FDA Submission</text>
                        <text x="1225" y="115" textAnchor="middle" className="text-xs fill-gray-700">• Machine-readable format</text>
                        <text x="1225" y="130" textAnchor="middle" className="text-xs fill-gray-700">• Included in 510(k)/PMA</text>
                        <text x="1225" y="145" textAnchor="middle" className="text-xs fill-gray-700">• Cross-referenced in eSTAR</text>
                        <text x="1225" y="160" textAnchor="middle" className="text-xs fill-gray-700">• Known vulnerability list</text>

                        {/* Arrows */}
                        <path d="M 330 120 L 400 120" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-sbom)" />
                        <path d="M 680 120 L 750 120" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowhead-sbom)" />
                        <path d="M 1030 120 L 1100 120" stroke="#eab308" strokeWidth="2" markerEnd="url(#arrowhead-sbom)" />

                        {/* Post-Market Row */}
                        <rect x="200" y="250" width="1000" height="140" rx="8" className="fill-red-50 stroke-red-400 stroke-2" />
                        <text x="700" y="280" textAnchor="middle" className="text-sm font-bold fill-red-800">Post-Market SBOM Management</text>

                        <rect x="230" y="300" width="220" height="70" rx="6" className="fill-white stroke-red-300 stroke-1" />
                        <text x="340" y="325" textAnchor="middle" className="text-xs font-bold fill-gray-900">CVE Monitoring</text>
                        <text x="340" y="345" textAnchor="middle" className="text-xs fill-gray-700">NVD → SBOM matching</text>
                        <text x="340" y="360" textAnchor="middle" className="text-xs fill-gray-700">Automated alerts</text>

                        <rect x="490" y="300" width="220" height="70" rx="6" className="fill-white stroke-red-300 stroke-1" />
                        <text x="600" y="325" textAnchor="middle" className="text-xs font-bold fill-gray-900">Risk Assessment</text>
                        <text x="600" y="345" textAnchor="middle" className="text-xs fill-gray-700">CVSS scoring</text>
                        <text x="600" y="360" textAnchor="middle" className="text-xs fill-gray-700">Impact evaluation</text>

                        <rect x="750" y="300" width="220" height="70" rx="6" className="fill-white stroke-red-300 stroke-1" />
                        <text x="860" y="325" textAnchor="middle" className="text-xs font-bold fill-gray-900">Patch & Update</text>
                        <text x="860" y="345" textAnchor="middle" className="text-xs fill-gray-700">Component update</text>
                        <text x="860" y="360" textAnchor="middle" className="text-xs fill-gray-700">SBOM regeneration</text>

                        {/* Feedback loop arrow */}
                        <path d="M 970 340 Q 1100 340 1100 200 Q 1100 120 540 180 Q 400 200 400 250" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" fill="none" markerEnd="url(#arrowhead-sbom-red)" />
                        <text x="1050" y="230" textAnchor="middle" className="text-xs font-bold fill-red-700">Continuous cycle</text>

                        {/* NTIA Elements Box */}
                        <rect x="50" y="440" width="650" height="170" rx="8" className="fill-indigo-50 stroke-indigo-400 stroke-2" />
                        <text x="375" y="470" textAnchor="middle" className="text-sm font-bold fill-gray-900">NTIA Minimum Elements for SBOM</text>
                        <text x="200" y="500" textAnchor="middle" className="text-xs fill-gray-700">✓ Supplier Name</text>
                        <text x="200" y="520" textAnchor="middle" className="text-xs fill-gray-700">✓ Component Name</text>
                        <text x="200" y="540" textAnchor="middle" className="text-xs fill-gray-700">✓ Version String</text>
                        <text x="200" y="560" textAnchor="middle" className="text-xs fill-gray-700">✓ Other Unique Identifiers</text>
                        <text x="500" y="500" textAnchor="middle" className="text-xs fill-gray-700">✓ Dependency Relationship</text>
                        <text x="500" y="520" textAnchor="middle" className="text-xs fill-gray-700">✓ Author of SBOM Data</text>
                        <text x="500" y="540" textAnchor="middle" className="text-xs fill-gray-700">✓ Timestamp</text>
                        <text x="500" y="560" textAnchor="middle" className="text-xs fill-gray-700">✓ Known Unknowns documented</text>
                        <text x="375" y="595" textAnchor="middle" className="text-xs font-bold fill-indigo-700">Per NTIA "The Minimum Elements for a Software Bill of Materials" (July 2021)</text>

                        {/* Format Comparison */}
                        <rect x="750" y="440" width="600" height="170" rx="8" className="fill-teal-50 stroke-teal-400 stroke-2" />
                        <text x="1050" y="470" textAnchor="middle" className="text-sm font-bold fill-gray-900">Format Comparison</text>
                        <text x="900" y="500" textAnchor="middle" className="text-xs font-bold fill-gray-700">SPDX (ISO/IEC 5962)</text>
                        <text x="900" y="520" textAnchor="middle" className="text-xs fill-gray-700">• ISO standard, broad adoption</text>
                        <text x="900" y="540" textAnchor="middle" className="text-xs fill-gray-700">• Strong license compliance</text>
                        <text x="900" y="560" textAnchor="middle" className="text-xs fill-gray-700">• JSON, RDF, Tag-Value, YAML</text>
                        <text x="1200" y="500" textAnchor="middle" className="text-xs font-bold fill-gray-700">CycloneDX (OWASP)</text>
                        <text x="1200" y="520" textAnchor="middle" className="text-xs fill-gray-700">• Security-focused design</text>
                        <text x="1200" y="540" textAnchor="middle" className="text-xs fill-gray-700">• VEX support built-in</text>
                        <text x="1200" y="560" textAnchor="middle" className="text-xs fill-gray-700">• JSON, XML, Protobuf</text>
                        <text x="1050" y="595" textAnchor="middle" className="text-xs font-bold fill-teal-700">Both formats accepted by FDA — choose based on your tooling ecosystem</text>

                        {/* Arrow markers */}
                        <defs>
                            <marker id="arrowhead-sbom" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                            </marker>
                            <marker id="arrowhead-sbom-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                            </marker>
                        </defs>
                    </svg>
                </div>
            }
            sections={[
                {
                    id: 'planning',
                    title: 'Phase 1: SBOM Strategy and Tooling',
                    description: 'Select SBOM format, tooling, and establish your SBOM generation workflow before integrating into the build pipeline.',
                    steps: [
                        {
                            step: 1,
                            title: 'Choose SBOM Format',
                            description: 'Select between SPDX (ISO/IEC 5962) and CycloneDX (OWASP). Both are accepted by FDA. SPDX is an ISO standard with strong license compliance features. CycloneDX is security-focused with built-in Vulnerability Exploitability eXchange (VEX) support. For medical device cybersecurity, CycloneDX is often preferred due to its native vulnerability correlation capabilities.',
                            deliverables: [
                                'SBOM format selection rationale document',
                                'Format specification version (e.g., CycloneDX 1.5)',
                            ],
                            tips: [
                                'CycloneDX is better for security use cases — it has native VEX and vulnerability tracking',
                                'SPDX is better if you also need comprehensive license compliance tracking',
                                'Choose JSON output over XML for easier processing and smaller file sizes',
                                'Document your format choice rationale for your SPDF documentation',
                            ],
                        },
                        {
                            step: 2,
                            title: 'Select SBOM Generation Tooling',
                            description: 'Choose automated SBOM generation tools appropriate for your technology stack. Key tools: Syft (Anchore) — excellent multi-language support, CycloneDX CLI — official CycloneDX tool, FOSSA — commercial with license analysis, Snyk — commercial with vulnerability database, Trivy (Aqua Security) — container and filesystem scanning. Most projects need multiple tools to cover all component types.',
                            deliverables: [
                                'Tool selection document',
                                'Tool installation and configuration guide',
                                'Proof-of-concept SBOM generation run',
                            ],
                            tips: [
                                'Syft + Grype (both from Anchore) is a powerful free combination for generation + vulnerability matching',
                                'Test tools against your actual codebase — coverage varies by language/ecosystem',
                                'Many tools miss C/C++ dependencies — you may need manual supplementation for embedded firmware',
                                'Consider commercial tools if you need support and guaranteed coverage',
                            ],
                        },
                        {
                            step: 3,
                            title: 'Inventory All Software Components',
                            description: 'Before automated generation, manually identify all software component categories in your device: first-party code, open-source libraries, commercial COTS components, RTOS/OS, firmware, and development tools that produce runtime artifacts. This inventory validates completeness of automated SBOM output.',
                            deliverables: [
                                'Component category inventory',
                                'Known component list for validation',
                                'Component provenance documentation',
                            ],
                            tips: [
                                'Include RTOS, bootloaders, and BSP components — these are often missed by automated tools',
                                'Track "known unknowns" — components you know exist but cannot fully enumerate (e.g., COTS binary blobs)',
                                'Document any components that require manual SBOM entries',
                                'Include development tools that contribute runtime code (code generators, compilers)',
                            ],
                        },
                    ],
                },
                {
                    id: 'generation',
                    title: 'Phase 2: SBOM Generation and CI/CD Integration',
                    description: 'Integrate automated SBOM generation into your software build pipeline so every build produces a current, accurate SBOM.',
                    steps: [
                        {
                            step: 4,
                            title: 'Integrate SBOM Generation into Build Pipeline',
                            description: 'Add SBOM generation as a step in your CI/CD pipeline (GitHub Actions, GitLab CI, Jenkins, Azure DevOps). The SBOM should be generated automatically on every tagged release build. Store SBOMs as versioned build artifacts alongside the software release.',
                            deliverables: [
                                'CI/CD pipeline configuration with SBOM step',
                                'SBOM versioning and storage procedure',
                                'Build pipeline documentation',
                            ],
                            tips: [
                                'Generate SBOM AFTER dependency resolution but BEFORE packaging',
                                'Version the SBOM with the same version as the software release',
                                'Store SBOMs in your artifact repository (e.g., Artifactory, S3, Azure Blob)',
                                'Include SBOM generation in your release checklist',
                            ],
                        },
                        {
                            step: 5,
                            title: 'Capture Transitive Dependencies',
                            description: 'Ensure your SBOM includes not just direct dependencies but all transitive (indirect) dependencies. In modern software, over 80% of code comes from dependencies, and many vulnerabilities occur in transitive dependencies. Verify that your tooling resolves the complete dependency tree.',
                            deliverables: [
                                'Validated dependency tree',
                                'SBOM with transitive dependencies',
                                'Dependency depth analysis',
                            ],
                            tips: [
                                'Use lock files (package-lock.json, Pipfile.lock, Cargo.lock) for accurate resolution',
                                'Cross-check automated output against package manager dependency tree commands',
                                'Log4Shell (CVE-2021-44228) was a transitive dependency in many projects — this is why depth matters',
                                'Document maximum dependency depth for your project',
                            ],
                        },
                        {
                            step: 6,
                            title: 'Add Manual Components',
                            description: 'Supplement the automated SBOM with manually tracked components that tools cannot detect: hardware abstraction layers, proprietary firmware blobs, COTS libraries distributed as binaries, and custom-built tools that produce runtime artifacts. Document these as manual entries with their provenance.',
                            deliverables: [
                                'Manual SBOM supplemental entries',
                                'Provenance documentation for manual components',
                                'Process for maintaining manual entries',
                            ],
                            tips: [
                                'Create a separate "manual components" file that merges with the automated SBOM',
                                'For binary-only components, record supplier, version, SHA256 hash, and license',
                                'Set calendar reminders to check for updates to manually tracked components',
                                'Document why each manual entry cannot be automated',
                            ],
                        },
                    ],
                },
                {
                    id: 'validation',
                    title: 'Phase 3: SBOM Validation and Compliance',
                    description: 'Validate that the generated SBOM meets NTIA minimum elements, format specifications, and FDA submission requirements.',
                    steps: [
                        {
                            step: 7,
                            title: 'Validate NTIA Minimum Elements',
                            description: 'Check that every component entry in the SBOM includes all NTIA minimum elements: Supplier Name, Component Name, Version String, Other Unique Identifiers (CPE, PURL), Dependency Relationship, Author of SBOM Data, and Timestamp. Document any "known unknowns" where information is unavailable.',
                            deliverables: [
                                'NTIA compliance validation report',
                                'Known unknowns documentation',
                                'Gap remediation plan',
                            ],
                            tips: [
                                'Use automated validation tools: sbom-tool, ntia-checker, or CycloneDX CLI validate',
                                'Every component MUST have supplier, name, and version — no exceptions',
                                'Document "known unknowns" explicitly — this shows thoroughness, not weakness',
                                'Use Package URL (PURL) as the unique identifier when possible',
                            ],
                        },
                        {
                            step: 8,
                            title: 'Cross-Reference Against Vulnerability Databases',
                            description: 'Run the SBOM against NVD, OSV, and other vulnerability databases to identify known CVEs in your components. Tools: Grype, OSV-Scanner, Snyk. Generate a vulnerability report listing all known CVEs, their severity (CVSS), and your assessment/remediation plan.',
                            deliverables: [
                                'Vulnerability scan report',
                                'CVE-to-component mapping',
                                'Risk assessment for known vulnerabilities',
                                'Remediation plan for actionable CVEs',
                            ],
                            tips: [
                                'Not all CVEs are exploitable in your context — document your assessment for each',
                                'Critical/High CVEs should be remediated before submission',
                                'Use VEX (Vulnerability Exploitability eXchange) to document "not affected" justifications',
                                'Include this vulnerability analysis in your premarket submission package',
                            ],
                        },
                        {
                            step: 9,
                            title: 'Prepare SBOM for FDA Submission',
                            description: 'Package the SBOM for inclusion in the premarket submission. The SBOM must be machine-readable (JSON or XML, not a PDF table). Include the SBOM file, a summary document explaining the SBOM contents, the vulnerability analysis, and cross-references to the eSTAR cybersecurity section.',
                            deliverables: [
                                'Machine-readable SBOM file (JSON/XML)',
                                'SBOM summary document for reviewers',
                                'Vulnerability analysis report',
                                'eSTAR cross-reference (if 510(k))',
                            ],
                            tips: [
                                'Include BOTH a machine-readable file AND a human-readable summary',
                                'The summary should include total component count, languages, licenses, and known vulnerability status',
                                'FDA reviewers will check for common components with known CVEs — address them proactively',
                                'Include the SBOM generation date and the software build version it represents',
                            ],
                        },
                    ],
                },
                {
                    id: 'maintenance',
                    title: 'Phase 4: Post-Market SBOM Maintenance',
                    description: 'Establish ongoing processes to keep the SBOM current, monitor for new vulnerabilities, and respond to security events.',
                    steps: [
                        {
                            step: 10,
                            title: 'Set Up Continuous Vulnerability Monitoring',
                            description: 'Configure automated monitoring that continuously matches your SBOM components against vulnerability databases. Set up alerts by severity: Critical (immediate notification), High (daily digest), Medium/Low (weekly report). Define response procedures and timelines for each severity level.',
                            deliverables: [
                                'Monitoring tool configuration',
                                'Alert routing and escalation procedures',
                                'Response SLAs by severity level',
                            ],
                            tips: [
                                'Grype + your SBOM gives you free, continuous vulnerability monitoring',
                                'Subscribe to vendor security advisories for COTS components',
                                'Set up a security inbox (security@company.com) for monitoring alert notifications',
                                'Review monitoring coverage quarterly — new vulnerability sources emerge regularly',
                            ],
                        },
                        {
                            step: 11,
                            title: 'Manage Component Updates',
                            description: 'Establish a process for evaluating and incorporating component updates. When a CVE is identified, assess impact on your device, determine if the component can be updated, test the update, and regenerate the SBOM. Track all component changes in your change control system.',
                            deliverables: [
                                'Component update procedure',
                                'Change control records for component updates',
                                'Updated SBOM after each component change',
                                'Regression test results',
                            ],
                            tips: [
                                'Every component update triggers a new SBOM generation',
                                'Run full regression testing after dependency updates',
                                'Security patches may qualify as minor changes under FDA software guidance — consult regulatory',
                                'Keep a change log linking CVEs to component updates to SBOM versions',
                            ],
                        },
                        {
                            step: 12,
                            title: 'Maintain SBOM Version History',
                            description: 'Archive all SBOM versions alongside their corresponding software releases. This version history is critical for post-market analysis: when a new CVE is published, you need to quickly determine which deployed software versions contain the affected component and at what version.',
                            deliverables: [
                                'SBOM version archive',
                                'Software version-to-SBOM mapping',
                                'Rapid CVE impact assessment procedure',
                            ],
                            tips: [
                                'Store SBOMs in your artifact repository with the same retention policy as software releases',
                                'Tag SBOMs with the software version, build number, and date',
                                'When a new CVE drops, you should be able to query "which deployed versions are affected?" within minutes',
                                'This archive is valuable evidence of ongoing cybersecurity management for FDA',
                            ],
                        },
                    ],
                },
            ]}
            checklists={[
                {
                    title: 'SBOM Generation Checklist',
                    items: [
                        'SBOM format selected (SPDX or CycloneDX)',
                        'Generation tools installed and configured',
                        'CI/CD pipeline integration complete',
                        'SBOM generated automatically on release builds',
                        'Transitive dependencies captured',
                        'Manual components supplemented',
                        'SBOM versioned with software release',
                    ],
                },
                {
                    title: 'NTIA Compliance Checklist',
                    items: [
                        'Every component has Supplier Name',
                        'Every component has Component Name',
                        'Every component has Version String',
                        'Unique Identifiers included (CPE/PURL)',
                        'Dependency Relationships documented',
                        'SBOM Author identified',
                        'Timestamp included',
                        'Known Unknowns documented',
                    ],
                },
                {
                    title: 'Submission Readiness Checklist',
                    items: [
                        'SBOM in machine-readable format (JSON/XML)',
                        'Human-readable summary document prepared',
                        'Vulnerability scan completed against NVD',
                        'All Critical/High CVEs assessed and addressed',
                        'VEX statements prepared for "not affected" CVEs',
                        'SBOM cross-referenced in eSTAR (if 510(k))',
                        'SBOM generation process documented for SPDF evidence',
                    ],
                },
                {
                    title: 'Post-Market Maintenance Checklist',
                    items: [
                        'Continuous vulnerability monitoring configured',
                        'Alert routing and escalation procedures defined',
                        'Response SLAs established by severity',
                        'Component update procedure documented',
                        'SBOM version history archived',
                        'Rapid CVE impact assessment tested',
                        'Quarterly monitoring review scheduled',
                    ],
                },
            ]}
            commonPitfalls={[
                {
                    pitfall: 'PDF-Only SBOM Submission',
                    solution: 'Submitting the SBOM only as a PDF table fails the machine-readable requirement. FDA expects JSON or XML format files. Generate SBOM in CycloneDX JSON or SPDX JSON format, include the machine-readable file as a submission attachment, and create a separate human-readable summary for reviewers.',
                },
                {
                    pitfall: 'Missing Transitive Dependencies',
                    solution: 'Only tracking direct (first-level) dependencies misses the transitive dependency tree where many critical vulnerabilities (like Log4Shell) appear. Use lock files for accurate resolution, verify SBOM component count against package manager output, and run multiple tools to cross-check coverage.',
                },
                {
                    pitfall: 'One-Time SBOM Generation',
                    solution: 'Generating the SBOM only at submission time and never updating it violates Section 524B requirements. Integrate SBOM generation into your CI/CD pipeline, regenerate with every release build, and set up continuous vulnerability monitoring against the current SBOM.',
                },
            ]}
        />
    );
}
