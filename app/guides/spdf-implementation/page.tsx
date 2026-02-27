'use client';

import ImplementationGuideTemplate from '@/components/ImplementationGuideTemplate';

export default function SPDFImplementationGuidePage() {
    return (
        <ImplementationGuideTemplate
            title="Secure Product Development Framework (SPDF) Implementation Guide"
            subtitle="Integrating cybersecurity into your medical device design controls — from security requirements through validation and post-market monitoring"
            basedOn={[
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
                {
                    number: 'IEC 62304',
                    title: 'Medical device software — Software life cycle processes',
                    url: '/standards/iec-62304',
                },
            ]}
            overview={{
                purpose: 'This guide provides a phased implementation roadmap for establishing a Secure Product Development Framework (SPDF) as required by the FDA Cybersecurity Guidance. The SPDF is not a standalone process — it is a set of security-specific activities that integrate into your existing design control process (21 CFR 820 / ISO 13485). The goal is to ensure that cybersecurity is designed into the product from day one, not bolted on after development. This guide maps each SPDF activity to an equivalent IEC 81001-5-1 clause and design control phase, providing concrete deliverables and templates for each step.',
                audience: 'Software engineers, systems engineers, QMS managers, cybersecurity engineers, and regulatory affairs professionals who need to implement a compliant SPDF process.',
                prerequisites: [
                    'Existing design control process (21 CFR 820 or ISO 13485)',
                    'Familiarity with IEC 62304 software lifecycle process',
                    'Basic understanding of cybersecurity concepts (threat modeling, vulnerability management)',
                    'Access to IEC 81001-5-1 standard (for detailed clause-level mapping)',
                ],
                estimatedTime: '3-6 months for initial framework establishment; ongoing integration with each product development cycle',
            }}
            visualDiagram={
                <div className="w-full overflow-x-auto">
                    <svg viewBox="0 0 1400 700" className="w-full h-auto">
                        {/* Title */}
                        <text x="700" y="30" textAnchor="middle" className="text-lg font-bold fill-gray-900">
                            SPDF Integration with Design Controls
                        </text>

                        {/* Design Control Flow - Top Row */}
                        <rect x="50" y="60" width="220" height="100" rx="8" className="fill-blue-100 stroke-blue-500 stroke-2" />
                        <text x="160" y="95" textAnchor="middle" className="text-sm font-bold fill-gray-900">Design Inputs</text>
                        <text x="160" y="115" textAnchor="middle" className="text-xs fill-gray-700">User Needs</text>
                        <text x="160" y="130" textAnchor="middle" className="text-xs fill-gray-700">Design Requirements</text>
                        <text x="160" y="145" textAnchor="middle" className="text-xs fill-gray-700">Regulatory Requirements</text>

                        <rect x="320" y="60" width="220" height="100" rx="8" className="fill-blue-100 stroke-blue-500 stroke-2" />
                        <text x="430" y="95" textAnchor="middle" className="text-sm font-bold fill-gray-900">Design Process</text>
                        <text x="430" y="115" textAnchor="middle" className="text-xs fill-gray-700">Architecture</text>
                        <text x="430" y="130" textAnchor="middle" className="text-xs fill-gray-700">Implementation</text>
                        <text x="430" y="145" textAnchor="middle" className="text-xs fill-gray-700">Integration</text>

                        <rect x="590" y="60" width="220" height="100" rx="8" className="fill-blue-100 stroke-blue-500 stroke-2" />
                        <text x="700" y="95" textAnchor="middle" className="text-sm font-bold fill-gray-900">Design Outputs</text>
                        <text x="700" y="115" textAnchor="middle" className="text-xs fill-gray-700">Design Specifications</text>
                        <text x="700" y="130" textAnchor="middle" className="text-xs fill-gray-700">Test Results</text>
                        <text x="700" y="145" textAnchor="middle" className="text-xs fill-gray-700">DMR / DHF</text>

                        <rect x="860" y="60" width="220" height="100" rx="8" className="fill-blue-100 stroke-blue-500 stroke-2" />
                        <text x="970" y="95" textAnchor="middle" className="text-sm font-bold fill-gray-900">Design V&V</text>
                        <text x="970" y="115" textAnchor="middle" className="text-xs fill-gray-700">Verification</text>
                        <text x="970" y="130" textAnchor="middle" className="text-xs fill-gray-700">Validation</text>
                        <text x="970" y="145" textAnchor="middle" className="text-xs fill-gray-700">Design Transfer</text>

                        <rect x="1130" y="60" width="220" height="100" rx="8" className="fill-blue-100 stroke-blue-500 stroke-2" />
                        <text x="1240" y="95" textAnchor="middle" className="text-sm font-bold fill-gray-900">Post-Market</text>
                        <text x="1240" y="115" textAnchor="middle" className="text-xs fill-gray-700">Surveillance</text>
                        <text x="1240" y="130" textAnchor="middle" className="text-xs fill-gray-700">Maintenance</text>
                        <text x="1240" y="145" textAnchor="middle" className="text-xs fill-gray-700">CAPA</text>

                        {/* Arrows between design control phases */}
                        <path d="M 270 110 L 320 110" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-spdf)" />
                        <path d="M 540 110 L 590 110" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-spdf)" />
                        <path d="M 810 110 L 860 110" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-spdf)" />
                        <path d="M 1080 110 L 1130 110" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-spdf)" />

                        {/* SPDF Activities - Bottom Row */}
                        <rect x="50" y="220" width="220" height="140" rx="8" className="fill-red-100 stroke-red-500 stroke-2" />
                        <text x="160" y="255" textAnchor="middle" className="text-sm font-bold fill-red-800">Security Requirements</text>
                        <text x="160" y="275" textAnchor="middle" className="text-xs fill-gray-700">• Threat modeling</text>
                        <text x="160" y="290" textAnchor="middle" className="text-xs fill-gray-700">• Security risk assessment</text>
                        <text x="160" y="305" textAnchor="middle" className="text-xs fill-gray-700">• Security requirements</text>
                        <text x="160" y="320" textAnchor="middle" className="text-xs fill-gray-700">• Attack surface analysis</text>
                        <text x="160" y="340" textAnchor="middle" className="text-xs fill-gray-700">IEC 81001-5-1 §5, §6</text>

                        <rect x="320" y="220" width="220" height="140" rx="8" className="fill-red-100 stroke-red-500 stroke-2" />
                        <text x="430" y="255" textAnchor="middle" className="text-sm font-bold fill-red-800">Secure Design</text>
                        <text x="430" y="275" textAnchor="middle" className="text-xs fill-gray-700">• Security architecture</text>
                        <text x="430" y="290" textAnchor="middle" className="text-xs fill-gray-700">• Secure coding standards</text>
                        <text x="430" y="305" textAnchor="middle" className="text-xs fill-gray-700">• SBOM management</text>
                        <text x="430" y="320" textAnchor="middle" className="text-xs fill-gray-700">• Code review procedures</text>
                        <text x="430" y="340" textAnchor="middle" className="text-xs fill-gray-700">IEC 81001-5-1 §7</text>

                        <rect x="590" y="220" width="220" height="140" rx="8" className="fill-red-100 stroke-red-500 stroke-2" />
                        <text x="700" y="255" textAnchor="middle" className="text-sm font-bold fill-red-800">Security Implementation</text>
                        <text x="700" y="275" textAnchor="middle" className="text-xs fill-gray-700">• Static / dynamic analysis</text>
                        <text x="700" y="290" textAnchor="middle" className="text-xs fill-gray-700">• Fuzz testing</text>
                        <text x="700" y="305" textAnchor="middle" className="text-xs fill-gray-700">• Composition analysis</text>
                        <text x="700" y="320" textAnchor="middle" className="text-xs fill-gray-700">• Security documentation</text>
                        <text x="700" y="340" textAnchor="middle" className="text-xs fill-gray-700">IEC 81001-5-1 §8</text>

                        <rect x="860" y="220" width="220" height="140" rx="8" className="fill-red-100 stroke-red-500 stroke-2" />
                        <text x="970" y="255" textAnchor="middle" className="text-sm font-bold fill-red-800">Security V&V</text>
                        <text x="970" y="275" textAnchor="middle" className="text-xs fill-gray-700">• Penetration testing</text>
                        <text x="970" y="290" textAnchor="middle" className="text-xs fill-gray-700">• Vulnerability scanning</text>
                        <text x="970" y="305" textAnchor="middle" className="text-xs fill-gray-700">• Security validation</text>
                        <text x="970" y="320" textAnchor="middle" className="text-xs fill-gray-700">• Residual risk review</text>
                        <text x="970" y="340" textAnchor="middle" className="text-xs fill-gray-700">IEC 81001-5-1 §8, §9</text>

                        <rect x="1130" y="220" width="220" height="140" rx="8" className="fill-red-100 stroke-red-500 stroke-2" />
                        <text x="1240" y="255" textAnchor="middle" className="text-sm font-bold fill-red-800">Security Maintenance</text>
                        <text x="1240" y="275" textAnchor="middle" className="text-xs fill-gray-700">• Vulnerability monitoring</text>
                        <text x="1240" y="290" textAnchor="middle" className="text-xs fill-gray-700">• Patch management</text>
                        <text x="1240" y="305" textAnchor="middle" className="text-xs fill-gray-700">• Coordinated disclosure</text>
                        <text x="1240" y="320" textAnchor="middle" className="text-xs fill-gray-700">• Incident response</text>
                        <text x="1240" y="340" textAnchor="middle" className="text-xs fill-gray-700">IEC 81001-5-1 §10</text>

                        {/* Vertical integration arrows */}
                        <path d="M 160 160 L 160 220" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead-red)" />
                        <path d="M 430 160 L 430 220" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead-red)" />
                        <path d="M 700 160 L 700 220" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead-red)" />
                        <path d="M 970 160 L 970 220" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead-red)" />
                        <path d="M 1240 160 L 1240 220" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead-red)" />

                        {/* Integration label */}
                        <rect x="500" y="175" width="400" height="30" rx="4" className="fill-yellow-100 stroke-yellow-500 stroke-1" />
                        <text x="700" y="195" textAnchor="middle" className="text-xs font-bold fill-yellow-800">
                            ↕ SPDF Activities Integrate Into Each Design Control Phase ↕
                        </text>

                        {/* Traceability Box */}
                        <rect x="50" y="420" width="1300" height="120" rx="8" className="fill-green-50 stroke-green-500 stroke-2" />
                        <text x="700" y="450" textAnchor="middle" className="text-sm font-bold fill-gray-900">Security Requirements Traceability Matrix</text>
                        <text x="200" y="475" textAnchor="middle" className="text-xs fill-gray-700">Threat ID</text>
                        <text x="380" y="475" textAnchor="middle" className="text-xs fill-gray-700">Security Requirement</text>
                        <text x="560" y="475" textAnchor="middle" className="text-xs fill-gray-700">Design Control</text>
                        <text x="740" y="475" textAnchor="middle" className="text-xs fill-gray-700">SBOM Component</text>
                        <text x="920" y="475" textAnchor="middle" className="text-xs fill-gray-700">Test Evidence</text>
                        <text x="1100" y="475" textAnchor="middle" className="text-xs fill-gray-700">Post-Market Action</text>

                        <line x1="50" y1="490" x2="1350" y2="490" stroke="#e5e7eb" strokeWidth="1" />
                        <text x="200" y="510" textAnchor="middle" className="text-xs fill-gray-600">T-001</text>
                        <text x="380" y="510" textAnchor="middle" className="text-xs fill-gray-600">SR-001: TLS 1.3</text>
                        <text x="560" y="510" textAnchor="middle" className="text-xs fill-gray-600">DI-CYBER-001</text>
                        <text x="740" y="510" textAnchor="middle" className="text-xs fill-gray-600">OpenSSL 3.x</text>
                        <text x="920" y="510" textAnchor="middle" className="text-xs fill-gray-600">PT-001</text>
                        <text x="1100" y="510" textAnchor="middle" className="text-xs fill-gray-600">Monitor NVD</text>

                        <line x1="50" y1="520" x2="1350" y2="520" stroke="#e5e7eb" strokeWidth="1" />
                        <text x="200" y="530" textAnchor="middle" className="text-xs fill-gray-600">T-002</text>
                        <text x="380" y="530" textAnchor="middle" className="text-xs fill-gray-600">SR-002: Auth</text>
                        <text x="560" y="530" textAnchor="middle" className="text-xs fill-gray-600">DI-CYBER-002</text>
                        <text x="740" y="530" textAnchor="middle" className="text-xs fill-gray-600">OAuth 2.0 lib</text>
                        <text x="920" y="530" textAnchor="middle" className="text-xs fill-gray-600">PT-002</text>
                        <text x="1100" y="530" textAnchor="middle" className="text-xs fill-gray-600">Patch cadence</text>

                        {/* Arrows from SPDF to traceability */}
                        <path d="M 160 360 L 160 420" stroke="#22c55e" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead-green)" />
                        <path d="M 700 360 L 700 420" stroke="#22c55e" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead-green)" />
                        <path d="M 1240 360 L 1240 420" stroke="#22c55e" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead-green)" />

                        {/* Legend */}
                        <rect x="50" y="580" width="1300" height="70" rx="8" className="fill-gray-50 stroke-gray-300 stroke-1" />
                        <text x="700" y="600" textAnchor="middle" className="text-xs font-bold fill-gray-700">Legend</text>
                        <rect x="100" y="615" width="20" height="14" rx="3" className="fill-blue-100 stroke-blue-500 stroke-1" />
                        <text x="130" y="627" className="text-xs fill-gray-700">Design Controls (21 CFR 820)</text>
                        <rect x="370" y="615" width="20" height="14" rx="3" className="fill-red-100 stroke-red-500 stroke-1" />
                        <text x="400" y="627" className="text-xs fill-gray-700">SPDF Activities (FDA Guidance / IEC 81001-5-1)</text>
                        <rect x="720" y="615" width="20" height="14" rx="3" className="fill-green-50 stroke-green-500 stroke-1" />
                        <text x="750" y="627" className="text-xs fill-gray-700">Traceability (Security Requirements Matrix)</text>
                        <rect x="1050" y="615" width="20" height="14" rx="3" className="fill-yellow-100 stroke-yellow-500 stroke-1" />
                        <text x="1080" y="627" className="text-xs fill-gray-700">Integration Points</text>

                        {/* Arrow markers */}
                        <defs>
                            <marker id="arrowhead-spdf" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                            </marker>
                            <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                            </marker>
                            <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#22c55e" />
                            </marker>
                        </defs>
                    </svg>
                </div>
            }
            sections={[
                {
                    id: 'foundation',
                    title: 'Phase 1: Establish SPDF Foundation',
                    description: 'Define the organizational security development policy, roles, and integration points with your existing QMS and design control process.',
                    steps: [
                        {
                            step: 1,
                            title: 'Define Security Development Policy',
                            description: 'Create an organizational policy document that establishes the commitment to secure product development. Define scope (which products and processes are covered), security objectives, and management commitment. This policy becomes the top-level document in your SPDF documentation hierarchy.',
                            deliverables: [
                                'Security Development Policy document',
                                'Management commitment statement',
                                'SPDF scope definition',
                            ],
                            tips: [
                                'Align with your existing Quality Policy language',
                                'Define scope broadly — all software-containing devices',
                                'Get executive sign-off to ensure organizational buy-in',
                                'Reference IEC 81001-5-1 and FDA guidance explicitly',
                            ],
                        },
                        {
                            step: 2,
                            title: 'Map SPDF to Design Controls',
                            description: 'Create a mapping document that shows how each SPDF activity integrates into your existing design control process (design inputs → outputs → verification → validation → transfer). For each design control phase, identify the parallel security activity and its deliverables. This mapping is the key artifact that demonstrates integration.',
                            deliverables: [
                                'SPDF-to-Design Control mapping matrix',
                                'Updated design control SOP with security gates',
                                'Security review checklists for each design phase',
                            ],
                            tips: [
                                'Security requirements → Design Inputs',
                                'Security architecture → Design Process',
                                'Security test results → Design Outputs',
                                'Penetration testing → Design Verification',
                                'Security validation → Design Validation',
                            ],
                        },
                        {
                            step: 3,
                            title: 'Assign Security Roles and Training',
                            description: 'Define security-specific roles within the product development team. At minimum, designate a Security Lead for each project who is responsible for security activities. Establish training requirements for all team members covering secure coding, threat modeling, and vulnerability management.',
                            deliverables: [
                                'Security roles and responsibilities matrix',
                                'Security training curriculum',
                                'Training records',
                            ],
                            tips: [
                                'The Security Lead does not need to be a dedicated hire — cross-train existing engineers',
                                'Include security awareness training for all team members, not just developers',
                                'Document training as evidence of SPDF implementation for submissions',
                            ],
                        },
                    ],
                },
                {
                    id: 'requirements',
                    title: 'Phase 2: Security Requirements and Threat Modeling',
                    description: 'Define security requirements through systematic threat modeling and risk assessment. This phase runs in parallel with design input activities.',
                    steps: [
                        {
                            step: 4,
                            title: 'Conduct Threat Modeling',
                            description: 'Create data-flow diagrams showing all system components, data flows, trust boundaries, and external interfaces. Apply STRIDE methodology to each element: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege. Document each identified threat with severity and potential impact.',
                            deliverables: [
                                'System architecture diagrams',
                                'Data-flow diagrams with trust boundaries',
                                'STRIDE threat enumeration table',
                                'Attack surface documentation',
                            ],
                            tips: [
                                'Include ALL interfaces: network, USB, Bluetooth, serial, debug ports',
                                'Trust boundaries are where data crosses between different privilege levels',
                                'FDA expects data-flow diagrams specifically — block diagrams are not sufficient',
                                'Update threat model whenever the architecture changes',
                            ],
                        },
                        {
                            step: 5,
                            title: 'Perform Cybersecurity Risk Assessment',
                            description: 'For each identified threat, assess risk using exploitability-based methods (not probability-based). Evaluate using CVSS for known vulnerability scoring and CWSS for weakness scoring. Determine uncontrolled risk, identify candidate security controls, and evaluate residual risk after controls are applied.',
                            deliverables: [
                                'Cybersecurity risk assessment document',
                                'Risk-to-control mapping',
                                'Residual risk analysis',
                            ],
                            tips: [
                                'Do NOT use your ISO 14971 probability scale for cybersecurity',
                                'Assume attackers are skilled, motivated, and persistent',
                                'Use CVSS Base Score for known vulnerability severity',
                                'Document why you chose each security control',
                            ],
                        },
                        {
                            step: 6,
                            title: 'Define Security Requirements',
                            description: 'Translate threat model findings and risk assessment results into specific, testable security requirements. Each requirement should trace back to one or more threats. Requirements should cover: authentication, authorization, encryption (transit and rest), integrity verification, audit logging, secure boot, and update mechanisms.',
                            deliverables: [
                                'Security requirements specification',
                                'Requirements traceability matrix (threat → requirement)',
                                'Security design inputs for DHF',
                            ],
                            tips: [
                                'Write requirements that are testable — "shall encrypt using AES-256" not "shall be secure"',
                                'Include both functional and non-functional security requirements',
                                'Add security requirements to your formal Design Input document',
                                'Each requirement must trace to at least one threat from the threat model',
                            ],
                        },
                    ],
                },
                {
                    id: 'design',
                    title: 'Phase 3: Secure Design and Implementation',
                    description: 'Implement security controls through secure architecture design, coding standards, and component management.',
                    steps: [
                        {
                            step: 7,
                            title: 'Design Security Architecture',
                            description: 'Create the security architecture that implements the security requirements. Document: encryption algorithms and key management, authentication and authorization mechanisms, network security controls, secure boot chain, data protection at rest and in transit, and secure update mechanisms. This architecture becomes part of the Design Process documentation.',
                            deliverables: [
                                'Security architecture document',
                                'Cryptography specification',
                                'Network security design',
                                'Secure update mechanism design',
                            ],
                            tips: [
                                'Use defense-in-depth — no single control should be the only barrier',
                                'Specify exact algorithms and key lengths (e.g., AES-256-GCM, RSA-2048)',
                                'Design for secure defaults — security should be enabled out of the box',
                                'Plan for key rotation and certificate management',
                            ],
                        },
                        {
                            step: 8,
                            title: 'Establish Secure Coding Standards',
                            description: 'Define and document secure coding standards for all development. Standards should address: input validation, output encoding, memory safety, error handling, logging (without sensitive data), and avoidance of known-insecure patterns. Reference CERT Secure Coding Standards for your language (C, C++, Java, Python).',
                            deliverables: [
                                'Secure coding standards document',
                                'Static analysis tool configuration',
                                'Code review checklist for security',
                            ],
                            tips: [
                                'Tie standards to automated tooling — configure SAST tools to enforce them',
                                'Include examples of both correct and incorrect patterns',
                                'Review OWASP Top 10 and CWE Top 25 for common vulnerability patterns',
                                'Require security-focused code review for all changes',
                            ],
                        },
                        {
                            step: 9,
                            title: 'Manage Software Bill of Materials',
                            description: 'Implement SBOM generation as part of the build process. Track all first-party, third-party, open-source, and commercial software components. Set up continuous vulnerability monitoring by linking the SBOM to NVD/CVE databases. Define a process for evaluating and remediating newly discovered vulnerabilities.',
                            deliverables: [
                                'Automated SBOM generation pipeline',
                                'SBOM in SPDX or CycloneDX format',
                                'Vulnerability monitoring dashboard',
                                'Third-party component evaluation procedure',
                            ],
                            tips: [
                                'Automate SBOM generation — manual tracking will fail at scale',
                                'Include transitive dependencies (dependencies of dependencies)',
                                'Choose CycloneDX for security use cases, SPDX for license compliance',
                                'Set up automated alerts for CVEs affecting your components',
                            ],
                        },
                    ],
                },
                {
                    id: 'testing',
                    title: 'Phase 4: Security Testing and Verification',
                    description: 'Verify that security controls are correctly implemented through comprehensive security testing. This phase maps to Design Verification.',
                    steps: [
                        {
                            step: 10,
                            title: 'Perform Static and Dynamic Analysis',
                            description: 'Run static application security testing (SAST) on all source code. Run dynamic application security testing (DAST) on running interfaces. Run software composition analysis (SCA) to identify vulnerable dependencies. Document all findings, prioritize by severity, and track remediation.',
                            deliverables: [
                                'SAST scan results and remediation log',
                                'DAST scan results and remediation log',
                                'SCA vulnerability report',
                                'Security findings tracking document',
                            ],
                            tips: [
                                'Integrate SAST into CI/CD pipeline for continuous scanning',
                                'Prioritize findings by exploitability, not just count',
                                'Document rationale for any accepted false positives',
                                'Re-scan after remediation to confirm fixes',
                            ],
                        },
                        {
                            step: 11,
                            title: 'Conduct Fuzz Testing',
                            description: 'Perform fuzz testing on all device interfaces: network protocols, file parsers, API endpoints, USB interfaces, and Bluetooth connections. Fuzz testing sends malformed or unexpected data to find crashes, memory corruption, and unexpected behavior. Document all findings and remediation.',
                            deliverables: [
                                'Fuzz testing plan and scope',
                                'Fuzz testing results',
                                'Crash analysis and remediation log',
                            ],
                            tips: [
                                'Fuzz ALL input interfaces, not just network',
                                'Run fuzz testing for a meaningful duration (days, not hours)',
                                'Use both mutation-based and generation-based fuzzers',
                                'FDA specifically calls out fuzz testing — this is not optional',
                            ],
                        },
                        {
                            step: 12,
                            title: 'Execute Penetration Testing',
                            description: 'Conduct penetration testing of the device and any connected backend systems. Test should cover: network penetration, application-layer attacks, authentication bypass attempts, privilege escalation, data exfiltration, and denial-of-service resilience. Can be performed by internal security team or third-party firm.',
                            deliverables: [
                                'Penetration testing report',
                                'Finding remediation log',
                                'Retest results confirming fixes',
                            ],
                            tips: [
                                'Third-party penetration testing adds credibility to submissions',
                                'Scope should include the device, mobile apps, cloud backend, and APIs',
                                'Fix all Critical and High findings before submission',
                                'Keep the report — FDA may request it during review',
                            ],
                        },
                    ],
                },
                {
                    id: 'validation',
                    title: 'Phase 5: Security Validation and Release',
                    description: 'Validate that the overall security posture meets requirements and prepare cybersecurity documentation for premarket submission.',
                    steps: [
                        {
                            step: 13,
                            title: 'Conduct Security Validation',
                            description: 'Validate that the integrated system meets all security requirements under realistic conditions. Security validation differs from verification — it confirms the system is secure in its intended use environment, not just that individual controls work. Include end-to-end security scenarios and abuse case testing.',
                            deliverables: [
                                'Security validation protocol and report',
                                'Residual risk summary',
                                'Security validation summary for submission',
                            ],
                            tips: [
                                'Test in an environment that mimics the intended deployment',
                                'Include realistic network conditions and user scenarios',
                                'Validate that security does not degrade over time or with load',
                                'Summarize residual risks with mitigation recommendations',
                            ],
                        },
                        {
                            step: 14,
                            title: 'Compile Submission Cybersecurity Package',
                            description: 'Organize all cybersecurity documentation into the format expected by FDA reviewers. For 510(k) submissions, map to the eSTAR cybersecurity section. Include: SPDF process documentation, threat model, risk assessment, SBOM, security test results, post-market plan, labeling, and traceability matrix.',
                            deliverables: [
                                'Cybersecurity submission package',
                                'eSTAR cybersecurity section (if 510(k))',
                                'Traceability matrix (threats → controls → tests)',
                                'Executive summary of cybersecurity posture',
                            ],
                            tips: [
                                'Cross-reference the FDA guidance appendix checklist item by item',
                                'Include an executive summary that a non-technical reviewer can understand',
                                'Ensure SBOM is in machine-readable format (not just a PDF table)',
                                'Have a regulatory reviewer check the package before submission',
                            ],
                        },
                    ],
                },
                {
                    id: 'postmarket',
                    title: 'Phase 6: Post-Market Security Management',
                    description: 'Establish ongoing cybersecurity monitoring, patching, and incident response procedures.',
                    steps: [
                        {
                            step: 15,
                            title: 'Establish Vulnerability Monitoring',
                            description: 'Set up continuous monitoring for newly discovered vulnerabilities affecting device components. Subscribe to NVD feeds, vendor security advisories, and CISA alerts. Configure automated SBOM-to-CVE matching. Define escalation procedures and response SLAs by severity level.',
                            deliverables: [
                                'Vulnerability monitoring procedure',
                                'Monitoring tool configuration',
                                'Escalation and response SLA matrix',
                            ],
                            tips: [
                                'Automate CVE monitoring against your SBOM — manual review does not scale',
                                'Define clear SLAs: Critical = 48 hours, High = 2 weeks, etc.',
                                'Include OT/embedded-specific vulnerability sources, not just IT databases',
                                'Review monitoring effectiveness quarterly',
                            ],
                        },
                        {
                            step: 16,
                            title: 'Implement Patch Management Process',
                            description: 'Create a documented process for developing, testing, validating, and deploying security patches. Include: risk assessment of each patch, regression testing requirements, deployment mechanisms, rollback procedures, and customer notification. Address both routine and emergency (out-of-cycle) patches.',
                            deliverables: [
                                'Patch management SOP',
                                'Patch validation protocol',
                                'Customer notification templates',
                                'Emergency patch procedure',
                            ],
                            tips: [
                                'Security patches may not require a new 510(k) under FDA\'s guidance on software changes',
                                'Test patches against your full V&V suite before deployment',
                                'Communicate clearly with healthcare organizations about patch criticality',
                                'Maintain a patch deployment log for audit purposes',
                            ],
                        },
                        {
                            step: 17,
                            title: 'Publish Coordinated Vulnerability Disclosure Policy',
                            description: 'Create and publish a vulnerability disclosure policy that enables security researchers to report vulnerabilities. Include: secure reporting channel (e.g., security@company.com), acknowledgment timeline (within 5 business days), safe harbor statement, coordination with FDA and CISA, and public disclosure timeline.',
                            deliverables: [
                                'Vulnerability Disclosure Policy (public)',
                                'Internal vulnerability response procedure',
                                'CISA/FDA coordination procedure',
                            ],
                            tips: [
                                'Publish the policy on your website where researchers can find it',
                                'Consider joining an ISAO for threat intelligence sharing',
                                'Train your customer support team to recognize vulnerability reports',
                                'Work with CISA ICS-CERT for coordinated disclosure of critical findings',
                            ],
                        },
                    ],
                },
            ]}
            checklists={[
                {
                    title: 'SPDF Foundation Checklist',
                    items: [
                        'Security Development Policy approved by management',
                        'SPDF-to-Design Control mapping documented',
                        'Security roles assigned for each product team',
                        'Security training curriculum established',
                        'All team members completed initial training',
                    ],
                },
                {
                    title: 'Threat Modeling Checklist',
                    items: [
                        'System architecture diagrams created',
                        'Data-flow diagrams with trust boundaries completed',
                        'STRIDE analysis performed on all components',
                        'Attack surface documented',
                        'Threat-to-control mapping complete',
                        'Threat model reviewed and approved',
                    ],
                },
                {
                    title: 'Security Testing Checklist',
                    items: [
                        'SAST scan completed with findings remediated',
                        'DAST scan completed with findings remediated',
                        'SCA scan completed — no critical vulnerabilities',
                        'Fuzz testing completed on all interfaces',
                        'Penetration testing completed',
                        'All Critical/High findings remediated and retested',
                    ],
                },
                {
                    title: 'Submission Readiness Checklist',
                    items: [
                        'SPDF process documentation compiled',
                        'Threat model included with data-flow diagrams',
                        'Cybersecurity risk assessment complete',
                        'SBOM in machine-readable format (SPDX/CycloneDX)',
                        'Security test results summarized',
                        'Post-market vulnerability management plan documented',
                        'Coordinated disclosure plan documented',
                        'Cybersecurity labeling prepared',
                        'Traceability matrix complete (threats → controls → tests)',
                        'eSTAR cybersecurity section mapped (if 510(k))',
                    ],
                },
            ]}
            commonPitfalls={[
                {
                    pitfall: 'Treating SPDF as a Separate Process',
                    solution: 'The SPDF must integrate into your existing design control process — not run in parallel. Conduct threat modeling during the design input phase, include security requirements in formal design inputs, and make security review a design phase gate requirement.',
                },
                {
                    pitfall: 'Using Probabilistic Risk for Cybersecurity',
                    solution: 'FDA explicitly rejects probability-based risk assessment for cybersecurity. Attackers are intentional, not random. Use exploitability-based scoring (CVSS, CWSS), create a separate cybersecurity risk document, and reference AAMI SW96 or TIR57 for the process framework.',
                },
                {
                    pitfall: 'Manual SBOM Tracking',
                    solution: 'Spreadsheet-based SBOM tracking is unsustainable and error-prone. Integrate SBOM generation into your CI/CD pipeline using automated tools (Syft, FOSSA, Snyk) and set up automated CVE monitoring against the SBOM.',
                },
            ]}
        />
    );
}
