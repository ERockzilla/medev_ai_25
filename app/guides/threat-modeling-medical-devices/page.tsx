'use client';

import ImplementationGuideTemplate from '@/components/ImplementationGuideTemplate';

export default function ThreatModelingGuidePage() {
    return (
        <ImplementationGuideTemplate
            title="Threat Modeling for Medical Devices"
            subtitle="FDA-expected threat modeling methods and deliverables — from system decomposition through STRIDE enumeration to threat-to-control traceability"
            basedOn={[
                {
                    number: 'FDA Cybersecurity Guidance',
                    title: 'Cybersecurity in Medical Devices: Quality System Considerations and Content of Premarket Submissions',
                    url: '/regulations/fda-cybersecurity-guidance',
                },
                {
                    number: 'AAMI TIR57',
                    title: 'Principles for medical device security — Risk management',
                    url: '/standards/aami-tir57',
                },
                {
                    number: 'IEC 81001-5-1',
                    title: 'Health software and health IT systems safety, effectiveness and security — Part 5-1: Security',
                    url: '/standards/iec-81001-5-1',
                },
            ]}
            overview={{
                purpose: 'This guide walks you through building the threat model package that FDA reviewers expect in cybersecurity premarket submissions. It covers methodology selection, architecture documentation, data-flow diagram construction, systematic threat enumeration using STRIDE, exploitability scoring, and the critical threat-to-control traceability matrix. Every phase maps to the finalized 2023 FDA cybersecurity guidance and produces specific artifacts required for 510(k), De Novo, and PMA submissions.',
                audience: 'Embedded engineers, security architects, systems engineers, and regulatory affairs professionals responsible for producing cybersecurity threat analysis documentation.',
                prerequisites: [
                    'System architecture defined (hardware and software components identified)',
                    'Familiarity with the FDA Cybersecurity Guidance (see /regulations/fda-cybersecurity-guidance)',
                    'SBOM generated or component list available (for CVE cross-referencing)',
                    'Basic understanding of STRIDE or equivalent threat classification',
                    'Access to CVSS calculator (first.org/cvss) for exploitability scoring',
                ],
                estimatedTime: '4–8 weeks for a typical Class II device; 8–12 weeks for Class III or complex multi-component systems',
            }}
            sections={[
                {
                    id: 'system-decomposition',
                    title: 'Phase 1: System Decomposition & Architecture Documentation',
                    description: 'Before you can model threats, you must document what you are defending. FDA expects a clear depiction of the system architecture including all external interfaces, trust boundaries, and data flows. This is the single most important artifact in your threat model package — reviewers use it to verify your threat coverage.',
                    steps: [
                        {
                            step: 1,
                            title: 'Create the System Architecture Diagram',
                            description: 'Document all hardware nodes, software processes, external services, and communication channels. Include off-device components (cloud backends, mobile apps, clinical information systems). The diagram must show every interface where data enters or leaves the device boundary. Use a layered architecture view: physical layer, communication layer, application layer, and data layer.',
                            deliverables: [
                                'System architecture diagram with all external interfaces labeled',
                                'Interface specification table (protocol, encryption, authentication per interface)',
                                'Component inventory matching SBOM scope',
                            ],
                            tips: [
                                'Include firmware update mechanisms and out-of-band management interfaces — these are high-value attack surfaces',
                                'Show both logical and physical boundaries (e.g., BLE radio on device vs. cloud API endpoint)',
                                'The architecture diagram must include off-device components — mobile companion apps, cloud backends, gateway devices',
                            ],
                        },
                        {
                            step: 2,
                            title: 'Define Trust Boundaries',
                            description: 'Trust boundaries delineate zones where the trust level of an actor or component changes. In medical devices, critical trust boundaries occur at: the device enclosure (physical), the BLE/Wi-Fi radio interface, the device-to-gateway connection, the gateway-to-cloud API, and the CSP (cloud service provider) boundary. FDA reviewers specifically look for these to evaluate your threat coverage completeness.',
                            deliverables: [
                                'Trust boundary diagram with criticality markings (Critical, High, Medium)',
                                'Trust boundary crossing inventory linked to data classification',
                            ],
                            tips: [
                                'Every trust boundary crossing is a potential attack surface — enumerate all of them',
                                'Include implicit trust boundaries: authenticated vs. unauthenticated user, service accounts vs. human accounts',
                                'Mark the criticality of each boundary based on what data crosses it (ePHI, device commands, firmware updates)',
                            ],
                        },
                        {
                            step: 3,
                            title: 'Map Data Flows (DFDs)',
                            description: 'Create data-flow diagrams at Level 0 (context) and Level 1 (process decomposition) showing how patient data, device commands, telemetry, and firmware updates flow through the system. Label each flow with the protocol (BLE 5.x, TLS 1.3, MQTT over TLS, HTTPS REST), data classification (PHI, PII, device telemetry, commands), and encryption status. The DFDs are the primary artifact FDA reviewers use to evaluate your attack surface coverage.',
                            deliverables: [
                                'Level 0 data-flow diagram (context diagram)',
                                'Level 1 data-flow diagram (process decomposition)',
                                'Data classification table (per flow)',
                            ],
                            tips: [
                                'Use standard DFD notation: circles for processes, rectangles for external entities, open rectangles for data stores, arrows for data flows',
                                'Annotate each flow with protocol version — "TLS" is insufficient; "TLS 1.3 with mutual authentication" is what reviewers expect',
                                'If adding a Level 2 diagram, only decompose processes that contain complex security-critical logic',
                            ],
                        },
                        {
                            step: 4,
                            title: 'Document State Diagrams for Critical Functions',
                            description: 'For safety-critical or security-critical functions (authentication state machine, firmware update state machine, therapy delivery state), produce state diagrams showing all valid transitions. FDA explicitly calls for state diagrams in the cybersecurity guidance to understand how the device behaves under both normal and attack conditions.',
                            deliverables: [
                                'State diagrams for authentication, firmware update, and therapy delivery',
                                'Transition-to-security-control mapping',
                            ],
                            tips: [
                                'Focus on states where a security failure could cause patient harm: therapy active, calibrating, firmware updating',
                                'Show error/exception states and transitions from attack scenarios (e.g., session hijack, replay attack)',
                                'Link each state transition to the security controls that govern it (authentication check, integrity verification)',
                            ],
                        },
                    ],
                },
                {
                    id: 'threat-enumeration',
                    title: 'Phase 2: Threat Enumeration',
                    description: 'Systematically identify threats against every element in your architecture diagrams. FDA does not mandate a specific methodology but expects a structured, repeatable process. The key principle: if it crosses a trust boundary, it needs a threat analysis.',
                    steps: [
                        {
                            step: 5,
                            title: 'Select and Document Your Methodology',
                            description: 'STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) is the most widely used and maps cleanly to DFD-based analysis. PASTA (Process for Attack Simulation and Threat Analysis) is a seven-stage, risk-centric methodology better suited for complex systems. Most medical device companies use STRIDE-per-element for tractability. Document your choice and rationale — FDA reviewers want to see a deliberate methodology selection.',
                            deliverables: [
                                'Methodology selection document with rationale',
                                'STRIDE-per-element applicability matrix (which STRIDE categories apply to which DFD element types)',
                            ],
                            tips: [
                                'STRIDE-per-element: Processes → all six STRIDE categories; Data stores → T, I, D; Data flows → T, I, D; External entities → S, R',
                                'For complex attack sequences, supplement STRIDE with attack trees',
                                'PASTA is better when you have significant business-logic threats — most embedded medical devices do well with STRIDE',
                            ],
                        },
                        {
                            step: 6,
                            title: 'Enumerate Threats Per DFD Element',
                            description: 'Walk through every process, data store, data flow, and external entity in your DFDs. For each element, apply your methodology categories. Document each threat with a unique ID (e.g., T-001), the affected element, the STRIDE category, a description of the attack scenario, and the preconditions required for the attack to succeed. Consider both local and remote attack vectors — FDA guidance distinguishes between network-based attacks and physical proximity attacks.',
                            deliverables: [
                                'Threat enumeration table (Threat ID, Affected Element, STRIDE Category, Attack Scenario, Preconditions)',
                                'Threat coverage matrix ensuring every trust boundary crossing is analyzed',
                            ],
                            tips: [
                                'Include supply-chain threats: compromised third-party libraries, malicious firmware in components — this directly relates to your SBOM',
                                'Consider insider threats from clinical users with elevated access (e.g., biomed technician with physical access)',
                                'Do NOT filter threats by perceived likelihood — enumerate all, filter by exploitability scoring later',
                            ],
                        },
                        {
                            step: 7,
                            title: 'Build Attack Trees for Critical Scenarios',
                            description: 'For high-impact attack goals (e.g., "Modify therapy parameters remotely," "Exfiltrate patient data at scale," "Brick the device via malicious firmware update"), build attack trees showing the multiple paths an adversary could take. Root the tree at the attacker goal (impact), not the entry point. Each leaf node is an atomic attack step; internal nodes are AND/OR decompositions.',
                            deliverables: [
                                'Attack trees for top 3–5 highest-impact scenarios',
                                'Leaf-node annotation (cost, skill, access required)',
                            ],
                            tips: [
                                'Prioritize attack trees for scenarios with patient safety impact — these get the most scrutiny',
                                'Include cost/skill/access annotations on leaf nodes to support exploitability assessment',
                                'PMA submissions typically expect more extensive attack tree analysis than 510(k)',
                            ],
                        },
                        {
                            step: 8,
                            title: 'Cross-Reference with Known Vulnerability Sources',
                            description: 'Supplement your theoretical threat analysis with real-world intelligence. Check CISA ICS-CERT advisories for similar medical devices, search the NVD for CVEs in your SBOM components, and review MITRE ATT&CK for ICS. This grounds your threat model in actual adversary behavior and creates a direct link between your SBOM, threat model, and risk assessment.',
                            deliverables: [
                                'CVE cross-reference report from SBOM analysis',
                                'CISA advisory review summary for similar device types',
                                'Not-applicable threat justifications (threats considered but excluded with rationale)',
                            ],
                            tips: [
                                'Match each CVE found in your SBOM to the relevant DFD element and threat ID',
                                'Reference ICS-CERT advisories for similar device types — FDA reviewers are aware of these',
                                'Document threats you explicitly considered and found not applicable — this demonstrates thoroughness',
                            ],
                        },
                    ],
                },
                {
                    id: 'exploitability-scoring',
                    title: 'Phase 3: Exploitability Assessment & Scoring',
                    description: 'FDA explicitly rejects probabilistic risk assessment for cybersecurity threats. Unlike safety risk (ISO 14971), where you estimate occurrence probability, cybersecurity threats are intentional — a sufficiently motivated attacker will exploit a vulnerability. This phase assigns exploitability scores using CVSS or CWSS.',
                    steps: [
                        {
                            step: 9,
                            title: 'Score Threats Using CVSS v3.1/v4.0',
                            description: 'For each threat/vulnerability pair, calculate a CVSS score considering: Attack Vector (Network, Adjacent, Local, Physical), Attack Complexity (Low, High), Privileges Required (None, Low, High), User Interaction (None, Required), Scope (Unchanged, Changed), and CIA Impact. Use the CVSS calculator at first.org/cvss for consistency. For threats not tied to a specific CVE (theoretical threats from STRIDE), use CWSS instead.',
                            deliverables: [
                                'CVSS/CWSS scoring table for all enumerated threats',
                                'Scoring rationale for each assessment',
                            ],
                            tips: [
                                'Use Base score for premarket submission — Temporal modifiers can be applied post-market',
                                'For class-of-weakness threats (no specific CVE), CWSS is more appropriate than CVSS',
                                'Document rationale for each score — never submit raw numbers without justification',
                            ],
                        },
                        {
                            step: 10,
                            title: 'Categorize Uncontrolled Risk',
                            description: 'Before applying mitigations, classify each threat\'s uncontrolled risk as Critical (CVSS ≥ 9.0 with patient safety impact), High, Medium, or Low based on exploitability combined with potential impact. Your submission must show both uncontrolled and controlled risk levels — the delta demonstrates the effectiveness of your security design.',
                            deliverables: [
                                'Uncontrolled risk categorization matrix',
                                'Risk rationale linking exploitability scores to clinical impact',
                                'Summary statistics: count of Critical/High/Medium/Low uncontrolled risks',
                            ],
                            tips: [
                                'Create a risk matrix specific to cybersecurity — do NOT reuse your ISO 14971 probability-severity matrix',
                                'Use language that connects technical exploitability to clinical harm in each rationale',
                                'Do not downplay risks — reviewers distrust submissions where all risks appear Low',
                            ],
                        },
                    ],
                },
                {
                    id: 'control-mapping',
                    title: 'Phase 4: Security Control Mapping & Traceability',
                    description: 'Map each threat to one or more security controls, then build the traceability matrix that links Threats → Controls → Verification activities. This traceability is what FDA uses to determine that your security design is intentional, testable, and complete.',
                    steps: [
                        {
                            step: 11,
                            title: 'Define Security Controls per Threat',
                            description: 'For each threat, specify controls categorized as Preventive (authentication, encryption, input validation), Detective (logging, anomaly detection, integrity monitoring), or Corrective (patching, failsafe modes, incident response). Align to IEC 81001-5-1 Clause 5 security requirements. Reference specific implementation standards: FIPS 140-3 for crypto modules, NIST SP 800-63 for authentication, OWASP ASVS for application-level controls.',
                            deliverables: [
                                'Security control specification document (Control ID, Type, Implementation Standard, Threats Addressed)',
                            ],
                            tips: [
                                'Many controls mitigate multiple threats — track multi-coverage for efficiency',
                                'Include compensating controls where primary controls have limitations, with residual risk documented',
                                'Follow the ISO 14971 control hierarchy: eliminate → reduce → detect → inform',
                            ],
                        },
                        {
                            step: 12,
                            title: 'Build the Threat-to-Control Traceability Matrix',
                            description: 'Create a bidirectional traceability matrix: Threat ID → Threat Description → Affected Element → CVSS Score → Control ID → Control Description → Verification Method → Test Case ID. This is the backbone artifact of your cybersecurity submission. FDA has issued RTA letters for submissions missing this traceability.',
                            deliverables: [
                                'Bidirectional traceability matrix',
                                'Coverage analysis (every threat ≥1 control, every control ≥1 threat)',
                            ],
                            tips: [
                                'Orphan controls (controls with no mapped threat) suggest your threat model is incomplete',
                                'Each control becomes a design input — link it back to a formal design requirement in your DHF',
                                'The matrix should include a Coverage column: Full, Partial, or Accepted Risk',
                            ],
                        },
                        {
                            step: 13,
                            title: 'Calculate Controlled (Residual) Risk',
                            description: 'Re-score each threat after controls are applied. Show the delta explicitly: "Uncontrolled CVSS 8.6 → Controlled CVSS 4.3 after mutual TLS + certificate pinning + anomaly detection." For any threat with residual risk remaining High or Critical, document the explicit risk acceptance rationale including why additional controls are not feasible and the benefit-risk justification.',
                            deliverables: [
                                'Controlled risk register with before/after CVSS scores',
                                'Residual risk acceptance documentation for High/Critical residuals',
                                'Design verification/validation plan for all security controls',
                            ],
                            tips: [
                                'Impact does not change with controls — if exploited despite controls, patient harm severity is the same',
                                'Critical residual risk acceptance requires executive sign-off, not just engineering decision',
                                'FDA expects iterative refinement — if residual risk is unacceptable, the design should change, not just the documentation',
                            ],
                        },
                    ],
                },
                {
                    id: 'documentation',
                    title: 'Phase 5: Documentation Package & Submission Integration',
                    description: 'Assemble all artifacts into the threat model documentation package that integrates with your premarket cybersecurity submission. The package must be self-contained while linking to the broader design history file, SBOM, and cybersecurity risk assessment.',
                    steps: [
                        {
                            step: 14,
                            title: 'Assemble the Threat Model Document',
                            description: 'Structure the final document: 1) Executive summary with key findings (1–2 pages), 2) Methodology section, 3) Architecture documentation (diagrams, DFDs, state diagrams), 4) Complete threat enumeration with scores, 5) Control mapping with traceability matrix, 6) Residual risk summary, 7) Appendices (attack trees, CVE cross-references). Use the structure from Section V.B of the FDA cybersecurity guidance as your template — it tells you exactly what reviewers expect.',
                            deliverables: [
                                'Complete threat model document (self-contained)',
                                'Cross-reference index linking threat model → risk assessment → design controls',
                                'Review record with team sign-off',
                            ],
                            tips: [
                                'Include revision history — FDA expects this to be a living document updated through the product lifecycle',
                                'Keep the executive summary concise: system overview, key threat categories, control strategy, residual risk posture',
                                'Reference the cybersecurity risk assessment for detailed risk analysis — avoid duplicating content between documents',
                            ],
                        },
                        {
                            step: 15,
                            title: 'Integrate with eSTAR and Submission',
                            description: 'Map your threat model artifacts to the specific eSTAR fields for cybersecurity. The eSTAR template has dedicated sections for: system architecture diagrams, threat modeling methodology and results, security controls and verification, SBOM reference, and post-market monitoring plan. Keep eSTAR entries concise but link to the full threat model document for detail.',
                            deliverables: [
                                'eSTAR cybersecurity section draft (relevant fields populated)',
                            ],
                            tips: [
                                'Start filling in eSTAR cybersecurity fields early — use eSTAR as a progress tracker',
                                'See /how-to/fda-cybersecurity-submission for complete eSTAR mapping guidance',
                                'Ensure threat IDs, CVSS scores, and control IDs are consistent across all submission documents',
                            ],
                        },
                    ],
                },
            ]}
            checklists={[
                {
                    title: 'Architecture Documentation Checklist',
                    items: [
                        'System architecture diagram includes all external interfaces and off-device components',
                        'Trust boundaries defined and documented with criticality markings',
                        'Level 0 and Level 1 DFDs completed with protocol and data classification annotations',
                        'State diagrams produced for security-critical functions',
                        'Interface specification table complete (protocol, encryption, auth per interface)',
                    ],
                },
                {
                    title: 'Threat Enumeration Checklist',
                    items: [
                        'Methodology selected and documented with rationale',
                        'Threats enumerated for every element crossing a trust boundary',
                        'Attack trees built for top 3–5 highest-impact scenarios',
                        'SBOM cross-referenced against NVD/CISA for known CVEs',
                        'Threat coverage matrix verified (no un-analyzed trust boundary crossings)',
                    ],
                },
                {
                    title: 'Scoring & Traceability Checklist',
                    items: [
                        'CVSS/CWSS scores calculated for all identified threats',
                        'Uncontrolled and controlled risk levels categorized with rationale',
                        'Bidirectional threat-to-control traceability matrix completed',
                        'Residual risk acceptance documented for remaining High/Critical risks',
                        'eSTAR cybersecurity fields populated with threat model data',
                    ],
                },
            ]}
            commonPitfalls={[
                {
                    pitfall: 'Performing Threat Modeling After Design Freeze',
                    solution: 'Threat modeling must be integrated into the design input phase, not performed retroactively. If threats are identified after architecture decisions are locked, the resulting controls are compensating (weaker) rather than inherently safe. Start threat modeling during system architecture definition and iterate through design reviews.',
                },
                {
                    pitfall: 'Using ISO 14971 Probability Scales for Cybersecurity',
                    solution: 'FDA explicitly states that probabilistic risk methods are inappropriate for intentional threats. Replace occurrence/probability ratings with exploitability-based scoring (CVSS or CWSS). Create a cybersecurity-specific risk matrix separate from your ISO 14971 safety risk matrix.',
                },
                {
                    pitfall: 'Threat Model Covers Only the Device, Not the Ecosystem',
                    solution: 'FDA expects threat analysis of the entire system including mobile companion apps, cloud backends, CIS interfaces, and update/patch delivery infrastructure. A threat model that stops at the device enclosure boundary will receive reviewer questions or RTA.',
                },
                {
                    pitfall: 'Generic Threat Lists Without System-Specific Analysis',
                    solution: 'Copying a generic list of STRIDE threats without mapping each one to specific architecture elements in your DFDs is a common RTA trigger. Every threat must reference a specific DFD element, data flow, or trust boundary in your system.',
                },
            ]}
        />
    );
}
