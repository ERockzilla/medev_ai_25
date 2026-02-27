'use client';

import ImplementationGuideTemplate from '@/components/ImplementationGuideTemplate';

export default function CybersecurityRiskAssessmentPage() {
    return (
        <ImplementationGuideTemplate
            title="Cybersecurity Risk Assessment for Medical Devices"
            subtitle="Building an exploitability-based risk assessment that satisfies FDA expectations — distinct from, but complementary to, your ISO 14971 safety risk file"
            basedOn={[
                {
                    number: 'FDA Cybersecurity Guidance',
                    title: 'Cybersecurity in Medical Devices: Quality System Considerations and Content of Premarket Submissions',
                    url: '/regulations/fda-cybersecurity-guidance',
                },
                {
                    number: 'AAMI SW96:2023',
                    title: 'Medical device security — Security risk management for device manufacturers',
                    url: '/standards/ansi-aami-sw96',
                },
                {
                    number: 'ISO 14971:2019',
                    title: 'Medical devices — Application of risk management to medical devices',
                    url: '/standards/iso-14971',
                },
            ]}
            overview={{
                purpose: 'Traditional risk management (ISO 14971) uses probabilistic estimates of hazardous situations — but attackers are intentional, not random. This guide walks you through building a cybersecurity-specific risk assessment that uses exploitability-based scoring (CVSS/CWSS), meets FDA expectations for premarket submissions, and stands alongside (but separate from) your safety risk file. It covers the full workflow from framework establishment through uncontrolled risk evaluation, security control design, controlled risk re-scoring, residual risk acceptance, and post-market monitoring integration.',
                audience: 'Risk managers, QMS managers, regulatory affairs specialists, cybersecurity engineers, and clinical safety officers responsible for cybersecurity risk documentation.',
                prerequisites: [
                    'Completed threat model (see /guides/threat-modeling-medical-devices) with CVSS/CWSS scores',
                    'Existing ISO 14971 risk management process and hazard analysis',
                    'SBOM with vulnerability analysis completed',
                    'Understanding of CVSS v3.1/v4.0 scoring framework',
                    'Familiarity with AAMI SW96:2023 or AAMI TIR57 process structure',
                ],
                estimatedTime: '4–8 weeks for initial assessment; ongoing lifecycle updates triggered by new CVEs and post-market intelligence',
            }}
            sections={[
                {
                    id: 'framework',
                    title: 'Phase 1: Establish the Cybersecurity Risk Management Framework',
                    description: 'Before assessing individual risks, establish the criteria, scoring system, risk acceptability thresholds, and the formal relationship between your cybersecurity risk assessment and your ISO 14971 safety risk file. This phase produces the cybersecurity risk management plan.',
                    steps: [
                        {
                            step: 1,
                            title: 'Define Scope and Relationship to ISO 14971',
                            description: 'FDA explicitly requires that cybersecurity risk assessment be separate from, but complementary to, your ISO 14971 safety risk management process. Your cybersecurity risk file addresses threats from intentional actors — probability-based occurrence ratings are inapplicable. Define what assets are covered (device, companion apps, cloud backend, SBOM components), what threat sources are considered (network, proximity, physical, supply chain, insider), and where the cybersecurity risk interfaces with your safety risk file. Create a bridge document mapping cybersecurity events that cause patient safety hazards — these appear in both files.',
                            deliverables: [
                                'Cybersecurity risk management plan (scope, methodology, team composition)',
                                'Bridge document: cybersecurity risk → ISO 14971 hazardous situations',
                                'Cybersecurity risk assessment added to design and development plan per ISO 13485 Clause 7.3.2',
                            ],
                            tips: [
                                'Reference AAMI SW96:2023 as the process standard — it is FDA-recognized and provides the formal framework for cybersecurity risk management',
                                'The bridge document is the artifact auditors look for — it shows integration without conflation of two distinct risk processes',
                                'The cybersecurity risk assessment is a design input — ensure your design control procedures reference it',
                            ],
                        },
                        {
                            step: 2,
                            title: 'Define Exploitability-Based Scoring Criteria',
                            description: 'Replace the traditional occurrence/probability scale with exploitability assessment based on CVSS v3.1/v4.0 or CWSS. Define scoring ranges mapped to categorical labels: Critical (9.0–10.0), High (7.0–8.9), Medium (4.0–6.9), Low (0.1–3.9). CVSS scores specific, known vulnerabilities (CVEs from SBOM analysis); CWSS scores classes of weaknesses (CWEs from threat modeling). Document whether you use CVSS Base, Temporal, or Environmental scores — FDA expects at least Base scores at the premarket stage.',
                            deliverables: [
                                'Exploitability scoring criteria document',
                                'CVSS/CWSS configuration and boundary rationale',
                                'Scoring adjustment policy (e.g., for air-gapped deployment environments)',
                            ],
                            tips: [
                                'Document any scoring adjustments: if the device operates in an air-gapped VLAN, this may modify the Attack Vector component but must be justified',
                                'Establish scoring before conducting assessments to avoid hindsight bias in threshold selection',
                                'Use the same CVSS version throughout — mixing v3.1 and v4.0 creates comparison difficulties',
                            ],
                        },
                        {
                            step: 3,
                            title: 'Define Impact Categories for Medical Devices',
                            description: 'Impact categories must go beyond standard IT categories (CIA). Define impact along four axes: 1) Patient Safety Impact (severity per ISO 14971, from negligible to catastrophic), 2) Data Impact (PHI/PII breach scope, HIPAA implications, 500+ record threshold triggers wall-of-shame reporting), 3) Clinical Operations Impact (therapy interruption, clinical workflow disruption), 4) Device Functionality Impact (degraded performance, loss of function, failure to fail-safe). Use Patient Safety Impact severity scale aligned with your ISO 14971 file to create the bridge between assessments.',
                            deliverables: [
                                'Impact category definitions with severity scales',
                                'Patient safety impact alignment with ISO 14971 severity table',
                                'Data impact scale with HIPAA breach thresholds',
                            ],
                            tips: [
                                'For Class III / life-sustaining devices, availability impairments preventing therapy delivery are Critical patient safety impacts regardless of exploitability',
                                'The highest individual impact category determines the overall impact level for the threat',
                                'Consider tiered matrices: one for patient safety impact, one for data impact — a single combined matrix often forces false trade-offs',
                            ],
                        },
                        {
                            step: 4,
                            title: 'Establish Risk Acceptability Criteria',
                            description: 'Create a cybersecurity risk matrix combining Exploitability (rows) and Impact (columns) producing risk levels (Critical, High, Medium, Low). Then define the policy: Critical — unacceptable, design must change; High — unacceptable unless no feasible alternative, requires executive acceptance with benefit-risk analysis; Medium — acceptable with documented mitigations; Low — acceptable, documentation required but no action mandated. Have the criteria reviewed and approved by leadership before conducting assessments.',
                            deliverables: [
                                'Cybersecurity risk acceptability matrix (separate from ISO 14971 matrix)',
                                'Risk acceptability policy approved by management',
                                'Decision criteria for risk acceptance at each level',
                            ],
                            tips: [
                                'Do NOT reuse your ISO 14971 risk matrix — the axes are fundamentally different',
                                'Retroactive adjustments to acceptability thresholds look evasive to reviewers — establish before assessing',
                                'Consider having both the risk matrix and the policy reviewed by your Notified Body or regulatory consultant before application',
                            ],
                        },
                    ],
                },
                {
                    id: 'uncontrolled-risk',
                    title: 'Phase 2: Conduct Uncontrolled Risk Evaluation',
                    description: 'Import all threats from your threat model, combine their exploitability scores with impact assessments, and determine the uncontrolled (inherent) risk level for each. This answers: "Before we apply any security controls, how severe is this threat?" The uncontrolled risk landscape drives security design priorities.',
                    steps: [
                        {
                            step: 5,
                            title: 'Import Threats from the Threat Model',
                            description: 'For each threat in your threat model, import: Threat ID, Description, Affected DFD Element, STRIDE Category, CVSS/CWSS Score, and Attack Preconditions. If your STRIDE-per-element analysis generated hundreds of threats, this is expected and demonstrates thoroughness. Include supply-chain threats from SBOM vulnerability analysis — each vulnerable component with a CVE should appear as a threat entry. Maintain threat ID consistency between documents so reviewers can navigate between them.',
                            deliverables: [
                                'Threat import register with consistent IDs',
                                'Supply-chain threat entries from SBOM CVE analysis',
                            ],
                            tips: [
                                'If a threat was scored using CWSS in the threat model but you have since identified a specific CVE, replace with a CVSS score for precision',
                                'Do not de-duplicate at import — threats targeting the same component but with different attack vectors are distinct risks',
                                'Flag any threats that have been added since the initial threat model was signed off — these require re-review',
                            ],
                        },
                        {
                            step: 6,
                            title: 'Assess Impact per Threat',
                            description: 'For each threat, evaluate impact across your four defined categories using the worst-case credible scenario — not the average case. For cybersecurity, you assume a motivated, skilled adversary because the consequences of underestimating capability have patient safety implications. Document the clinical scenario: "If Threat T-045 is exploited, the infusion pump could deliver a 10x dosage, resulting in potential patient death (Catastrophic)." Involve clinical domain experts — engineers tend to underestimate patient safety consequences of software anomalies.',
                            deliverables: [
                                'Impact assessment for all threats across four categories',
                                'Clinical scenario descriptions for all Critical and High-rated threats',
                            ],
                            tips: [
                                'A Low exploitability threat with Critical patient safety impact is still a serious risk — do not let attack difficulty mask catastrophic consequences',
                                'The highest individual impact category determines the overall impact level',
                                'Clinical domain experts should review and approve patient safety impact assessments',
                            ],
                        },
                        {
                            step: 7,
                            title: 'Determine Uncontrolled Risk Levels',
                            description: 'Plot each threat on the cybersecurity risk matrix using its Exploitability score (row) and highest Impact level (column). Produce the uncontrolled risk register: each threat classified as Critical, High, Medium, or Low. Summarize the landscape: "Of 147 identified threats, 3 Critical, 18 High, 52 Medium, 74 Low." Critical and High uncontrolled risks must have security controls designed in Phase 3 — there is no "accept" option for uncontrolled Critical risks.',
                            deliverables: [
                                'Complete uncontrolled risk register (threat ID, exploitability, impact, risk level)',
                                'Uncontrolled risk landscape summary (count by category)',
                                'Risk heatmap visualization for executive reporting',
                            ],
                            tips: [
                                'Group related threats targeting the same attack surface for control design efficiency',
                                'The uncontrolled risk summary is an executive-level artifact — make it clear and visual',
                                'This register directly drives your security architecture investment — Critical risks get budget priority',
                            ],
                        },
                    ],
                },
                {
                    id: 'controlled-risk',
                    title: 'Phase 3: Security Control Design & Controlled Risk Evaluation',
                    description: 'For every threat rated Medium or above, design security controls that reduce risk to acceptable levels. Then re-evaluate with controls in place. The delta between uncontrolled and controlled risk demonstrates the effectiveness of your security design — FDA reviewers examine whether controls actually move the needle.',
                    steps: [
                        {
                            step: 8,
                            title: 'Design Security Controls by Priority',
                            description: 'Start with Critical uncontrolled risks and work down to Medium. Apply the control hierarchy mirroring ISO 14971: 1) Eliminate the attack surface by design (remove interface, hardware isolation); 2) Reduce exploitability through architectural controls (encryption, authentication, segmentation); 3) Detect and respond (monitoring, anomaly detection, fail-safe); 4) Inform and train (labeling, operator guidance — last resort per FDA guidance). Specify the implementation standard for each: "AES-256-GCM encryption per FIPS 140-3" is a control; "encryption" is not.',
                            deliverables: [
                                'Security control specification matrix (Control ID, Type, Implementation Standard, Threats Addressed)',
                            ],
                            tips: [
                                'A single control often mitigates multiple threats — track this in your traceability matrix',
                                'Include compensating controls where primary controls have limitations, document the gap',
                                'The control hierarchy is the same as ISO 14971 (inherently safe → protective → information) — FDA expects the same discipline',
                            ],
                        },
                        {
                            step: 9,
                            title: 'Re-Score Controlled Risk',
                            description: 'After controls are specified, re-evaluate each threat\'s exploitability. Controls should reduce the Attack Vector, increase Attack Complexity, or require elevated Privileges. Re-calculate CVSS/CWSS and show the delta explicitly: "T-023 Uncontrolled CVSS 8.6 (High) → Controlled CVSS 3.9 (Low) after mutual TLS, certificate pinning, and API rate limiting." Note: Impact does not change — if exploited despite controls, patient harm severity is the same.',
                            deliverables: [
                                'Controlled risk register with before/after scores',
                                'Uncontrolled → Controlled risk delta analysis',
                                'Updated risk heatmap showing controlled landscape',
                            ],
                            tips: [
                                'If a control reduces risk by only one category (High → Medium), consider additional controls for greater reduction',
                                'The before/after comparison is the evidence of security design effectiveness',
                                'Presentation tip: side-by-side risk heatmaps (uncontrolled vs. controlled) are highly effective for executive and reviewer communication',
                            ],
                        },
                        {
                            step: 10,
                            title: 'Document Residual Risk Acceptance',
                            description: 'For any threat with residual risk classified as High or Critical after controls, prepare formal residual risk acceptance including: why additional risk reduction is not feasible (technical/clinical constraints), the benefit-risk analysis (device clinical benefit vs. residual cybersecurity risk), and compensating measures (post-market monitoring, coordinated vulnerability disclosure, patch commitment). Critical residual risk acceptance must be signed by executive management — this is an organizational commitment.',
                            deliverables: [
                                'Residual risk acceptance documentation for High/Critical residuals',
                                'Benefit-risk analysis statement',
                                'Executive sign-off records for Critical residual risks',
                            ],
                            tips: [
                                'Include post-market monitoring as a compensating measure — FDA views lifecycle monitoring as risk reduction',
                                'Reference the totality of residual risks: "The combined residual cybersecurity risks, balanced against the clinical benefit of [X], present an acceptable profile"',
                                'Engineering-level acceptance of Critical residual risks is insufficient — this requires management review and approval',
                            ],
                        },
                    ],
                },
                {
                    id: 'documentation-lifecycle',
                    title: 'Phase 4: Documentation & Lifecycle Integration',
                    description: 'Assemble the complete cybersecurity risk assessment, integrate with the design history file, and establish post-market monitoring. A cybersecurity risk assessment is never "done" — new vulnerabilities, attack techniques, and real-world incidents continuously evolve the risk landscape.',
                    steps: [
                        {
                            step: 11,
                            title: 'Compile the Risk Assessment Report',
                            description: 'Structure: 1) Scope and methodology (cross-referencing the risk management plan), 2) Risk framework (scoring criteria, impact categories, acceptability matrix), 3) Uncontrolled risk register with full rationale, 4) Security control specifications, 5) Controlled risk register with before/after comparison, 6) Residual risk acceptance documentation, 7) Overall risk-benefit analysis, 8) Post-market monitoring plan. Include an executive summary: total threats, risk distribution (uncontrolled and controlled), accepted residuals, overall posture.',
                            deliverables: [
                                'Complete cybersecurity risk assessment report',
                                'Executive summary with risk distribution tables',
                                'Overall cybersecurity risk-benefit analysis statement',
                            ],
                            tips: [
                                'Follow the structure implied by Section V.A of the FDA cybersecurity guidance',
                                'The report must be self-contained — a reviewer should understand your posture without reading other documents',
                                'Reference the threat model for detailed attack scenarios rather than duplicating content',
                            ],
                        },
                        {
                            step: 12,
                            title: 'Establish Post-Market Risk Monitoring',
                            description: 'Define the process for continuously updating the risk assessment post-market. This includes: automated SBOM vulnerability monitoring (CVE matching against component list), CISA ICS-CERT advisory monitoring, coordinated vulnerability disclosure intake, and periodic reassessment triggers. Section 524B requires this for all cyber devices. Define response timelines: new CVE with CVSS ≥ 9.0 → reassess within 24 hours; CVSS 7.0–8.9 → reassess within 72 hours.',
                            deliverables: [
                                'Post-market cybersecurity risk monitoring plan',
                                'CVE response timeline definitions',
                                'CAPA process linkage for security incidents affecting patient safety',
                            ],
                            tips: [
                                'Automate SBOM CVE monitoring — manual periodic checks cannot keep pace with disclosure velocity',
                                'Link post-market monitoring to your CAPA process (21 CFR 820.90 / ISO 13485 Clause 8.5.2)',
                                'Define MDR criteria: when does a cybersecurity incident trigger a Medical Device Report under 21 CFR Part 803?',
                            ],
                        },
                        {
                            step: 13,
                            title: 'Integrate with Design History File and SPDF',
                            description: 'The risk assessment outputs (security requirements, controls, verification criteria) feed back into design controls. Link to: Design inputs (security requirements from risks), Design outputs (control implementations), Verification (security testing per control specification), Validation (penetration testing, fuzz testing confirming risk reduction), and Design transfer (deployment hardening requirements). The risk assessment version becomes a controlled document in the DHF.',
                            deliverables: [
                                'Design history file cross-reference matrix (Risk → Requirement → Verification)',
                                'Risk assessment review record with team sign-off',
                                'DHF controlled document registration',
                            ],
                            tips: [
                                'Each security control should trace to a design requirement — this is the SPDF integration point',
                                'Security verification/validation results serve as evidence that controls are effective — reference the specific risk mitigated',
                                'Include the risk assessment version number in your premarket submission as a controlled document reference',
                            ],
                        },
                    ],
                },
            ]}
            checklists={[
                {
                    title: 'Risk Framework Checklist',
                    items: [
                        'Cybersecurity risk management plan established (scope, methodology, ISO 14971 relationship)',
                        'Exploitability scoring criteria defined using CVSS/CWSS with documented rationale',
                        'Impact categories defined across four axes: Patient Safety, Data, Clinical Operations, Functionality',
                        'Cybersecurity risk acceptability matrix established and approved before assessments begin',
                        'Bridge document linking cybersecurity events to ISO 14971 hazardous situations',
                    ],
                },
                {
                    title: 'Risk Evaluation Checklist',
                    items: [
                        'All threats imported from threat model with consistent IDs',
                        'Impact assessed for all threats including worst-case credible clinical scenarios',
                        'Uncontrolled risk register completed with distribution summary',
                        'Security controls designed following hierarchy: eliminate → reduce → detect → inform',
                        'Controlled risk re-scored showing before/after CVSS delta for each threat',
                    ],
                },
                {
                    title: 'Documentation & Lifecycle Checklist',
                    items: [
                        'Residual risk acceptance documented for all High/Critical residuals with executive sign-off',
                        'Overall benefit-risk analysis completed',
                        'Post-market cybersecurity monitoring plan defined with automated CVE monitoring',
                        'Risk assessment integrated with design history file and SPDF process',
                        'Final report reviewed and approved by cross-functional team',
                    ],
                },
            ]}
            commonPitfalls={[
                {
                    pitfall: 'Reusing the ISO 14971 Risk Matrix for Cybersecurity',
                    solution: 'The ISO 14971 matrix uses probability × severity. FDA explicitly rejects probability-based assessment for intentional threats. Create a separate cybersecurity risk matrix using exploitability (CVSS/CWSS) × impact. The two files share severity definitions for patient harm but diverge on the likelihood axis.',
                },
                {
                    pitfall: 'Assessing Risk at the Feature Level Instead of the Threat Level',
                    solution: 'Risk assessment should be performed per identified threat, not per device feature. A single component can have many threats with different exploitability and impact profiles. Assessing "BLE interface risk = Medium" instead of each specific BLE threat masks the true risk landscape.',
                },
                {
                    pitfall: 'No Post-Market Monitoring Plan',
                    solution: 'Section 524B legally requires post-market cybersecurity monitoring for cyber devices. A risk assessment without a post-market plan is incomplete. Define automated SBOM vulnerability monitoring, CVE response timelines, coordinated disclosure, and periodic reassessment triggers.',
                },
                {
                    pitfall: 'Treating All Residual Risks as Acceptable Without Executive Review',
                    solution: 'High and Critical residual risks require formal acceptance with benefit-risk justification at the executive or medical director level. Engineering-level assumption of these risks is insufficient for FDA submissions and creates audit liability.',
                },
            ]}
        />
    );
}
