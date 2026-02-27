'use client';

import ImplementationGuideTemplate from '@/components/ImplementationGuideTemplate';

export default function SOC2ForMedTechPage() {
    return (
        <ImplementationGuideTemplate
            title="SOC 2 Type II for Medical Device SaaS Platforms"
            subtitle="Why hospitals demand it, how to prepare, and how to leverage existing HIPAA and FDA controls to accelerate your audit timeline"
            basedOn={[
                {
                    number: 'AICPA TSC 2017',
                    title: 'Trust Services Criteria for Security, Availability, Processing Integrity, Confidentiality, and Privacy',
                    url: 'https://www.aicpa.org/resources/landing/system-and-organization-controls-soc-suite-of-services',
                },
                {
                    number: 'HIPAA Security Rule',
                    title: '45 CFR Part 164 Subpart C',
                    url: '/regulations/hipaa-security-rule',
                },
                {
                    number: 'FDA Cybersecurity Guidance',
                    title: 'Cybersecurity in Medical Devices',
                    url: '/regulations/fda-cybersecurity-guidance',
                },
            ]}
            overview={{
                purpose: 'SOC 2 Type II is a market-driven audit framework that has become a de facto procurement requirement for hospital systems purchasing cloud-connected medical device platforms. Unlike HIPAA (a legal mandate) or FDA cybersecurity (a regulatory requirement), SOC 2 is voluntary — but hospitals, IDNs (Integrated Delivery Networks), and GPOs (Group Purchasing Organizations) increasingly require it before contract execution. This guide covers: the five Trust Services Criteria, Type I vs. Type II distinctions, how to leverage existing HIPAA and FDA controls to accelerate readiness, audit preparation, and cost/timeline expectations.',
                audience: 'Cloud architects, QMS managers, compliance officers, product/business leaders, and engineering managers at medical device companies building SaaS or cloud-connected platforms.',
                prerequisites: [
                    'Cloud-hosted platform or SaaS product serving healthcare customers',
                    'Existing HIPAA compliance program (or in parallel — see /regulations/hipaa-security-rule)',
                    'Basic understanding of information security control frameworks',
                    'Executive sponsorship for the audit investment (typically $50K–$150K+ for initial Type II)',
                ],
                estimatedTime: 'Readiness preparation: 3–6 months; Type I audit: 1–2 months; Type II observation period: 6–12 months; Total from start to Type II report: 12–18 months',
            }}
            sections={[
                {
                    id: 'tsc-overview',
                    title: 'Phase 1: Understand Trust Services Criteria & Scope',
                    description: 'SOC 2 is built on five Trust Services Criteria (TSC). Most medical device companies scope their initial audit to Security (mandatory) plus Availability and Confidentiality. Understanding which criteria to include — and which to defer — is the first strategic decision.',
                    steps: [
                        {
                            step: 1,
                            title: 'Map the Five Trust Services Criteria to Your Platform',
                            description: 'Security (CC Series — Common Criteria): Mandatory for all SOC 2 reports. Covers logical and physical access, system operations, change management, and risk mitigation. This is the foundation and overlaps heavily with HIPAA technical safeguards and FDA cybersecurity requirements. Availability (A Series): System uptime, disaster recovery, and performance monitoring. Critical for patient-facing platforms where downtime impacts clinical workflows. Processing Integrity (PI Series): Data processing accuracy, completeness, and timeliness. Relevant for diagnostic algorithms, clinical decision support, and automated reporting systems. Confidentiality (C Series): Protection of information designated as confidential. Overlaps with HIPAA ePHI protection but broader — includes any confidential data, not just health information. Privacy (P Series): Collection, use, retention, and disposal of personal information. Most relevant for consumer-facing health apps; less common in B2B medical device platforms.',
                            deliverables: [
                                'TSC scoping decision with rationale for each included/excluded criteria',
                                'Mapping of HIPAA controls to SOC 2 TSC categories',
                            ],
                            tips: [
                                'Start with Security + Availability + Confidentiality — this covers ~90% of hospital procurement requirements',
                                'Processing Integrity is increasingly requested for AI/ML-based SaMD products — plan to add it',
                                'Privacy criteria use GAPP (Generally Accepted Privacy Principles) which is broader than HIPAA — only include if you process significant consumer personal data',
                            ],
                        },
                        {
                            step: 2,
                            title: 'Define System Description and Boundaries',
                            description: 'The SOC 2 report includes a "System Description" defining exactly what is covered by the audit. For medical device platforms, this includes: infrastructure components (AWS/Azure/GCP services used), application components (backend APIs, databases, web portal), data flows (device → cloud → storage → display), organizational controls (policies, procedures, training), and people (roles with system access). Clearly delineate what is in scope vs. out of scope — auditors will not assess what is not described.',
                            deliverables: [
                                'System Description document (Section III of the SOC 2 report)',
                                'System boundary diagram showing in-scope and out-of-scope components',
                            ],
                            tips: [
                                'The system description should align with your FDA system architecture documentation — reuse the same diagrams',
                                'Include subservice organizations (cloud providers, third-party processors) and specify whether you use the "Inclusive" or "Carve-Out" method for each',
                                'Auditors will validate that the system description accurately represents the production environment — do not describe controls you haven\'t implemented',
                            ],
                        },
                    ],
                },
                {
                    id: 'control-design',
                    title: 'Phase 2: Design Controls & Leverage Existing Compliance',
                    description: 'The most efficient path to SOC 2 is leveraging controls you already have from HIPAA and FDA compliance. This phase maps existing controls to SOC 2 criteria and identifies gaps.',
                    steps: [
                        {
                            step: 3,
                            title: 'Map Existing HIPAA and FDA Controls to SOC 2',
                            description: 'Create a control matrix mapping your HIPAA safeguards and FDA cybersecurity controls to the SOC 2 Common Criteria. Key overlaps: CC6.1 (Logical access) ↔ HIPAA § 164.312(a) ↔ FDA access controls; CC6.6/CC6.7 (Encryption) ↔ HIPAA § 164.312(e) ↔ FDA encryption requirements; CC7.2 (Monitoring) ↔ HIPAA § 164.312(b) ↔ FDA audit logging; CC3.1-CC3.4 (Risk assessment) ↔ HIPAA § 164.308(a)(1) ↔ FDA cybersecurity risk assessment; CC8.1 (Change management) ↔ HIPAA § 164.312(e) ↔ FDA configuration management.',
                            deliverables: [
                                'Three-way control mapping matrix (HIPAA ↔ FDA ↔ SOC 2)',
                                'Gap analysis identifying SOC 2-unique requirements',
                            ],
                            tips: [
                                'Approximately 60–70% of SOC 2 Security criteria controls overlap with HIPAA and FDA requirements — this is significant time savings',
                                'SOC 2-unique areas typically include: formal change management procedures (CC8.1), vendor risk management program (CC9.2), board oversight of security (CC1.2), and formal incident communication protocols (CC2.3)',
                                'Use one evidence repository — the same penetration test report can serve as FDA verification evidence, HIPAA evaluation evidence, and SOC 2 audit evidence',
                            ],
                        },
                        {
                            step: 4,
                            title: 'Implement Gap Controls',
                            description: 'For each gap identified, design and implement the control. Common gaps for medical device companies new to SOC 2: Formal change management process (documented change advisory board, approval workflows, post-deployment verification), Vendor risk management program (vendor security questionnaire, annual vendor assessment, risk-tiered vendor classification), Board/management oversight documentation (quarterly security reviews, risk committee meeting minutes), Formal incident response with communication plan (internal escalation, customer notification, root cause analysis), and Logical access reviews (quarterly access recertification for all privileged accounts).',
                            deliverables: [
                                'New control implementations for each identified gap',
                                'Control owner assignments',
                                'Evidence collection procedures for each new control',
                            ],
                            tips: [
                                'SOC 2 auditors evaluate both design effectiveness (does the control exist and is it properly designed?) and operating effectiveness (has it been consistently applied over the observation period?)',
                                'Start collecting evidence immediately after implementing controls — the Type II observation period requires 6–12 months of evidence',
                                'Automate evidence collection where possible: automated screenshots of access reviews, automated change management logs, automated monitoring dashboards',
                            ],
                        },
                    ],
                },
                {
                    id: 'audit-preparation',
                    title: 'Phase 3: Audit Preparation & Execution',
                    description: 'Select an auditor, prepare evidence, conduct readiness assessment, and execute the audit. The key decision: Type I first (point-in-time) or straight to Type II (observation period).',
                    steps: [
                        {
                            step: 5,
                            title: 'Select a SOC 2 Auditor',
                            description: 'SOC 2 audits can only be performed by CPA firms licensed to issue SOC reports. Selection criteria: healthcare/medical device industry experience (they should understand HIPAA overlap), reasonable cost (typical range: $30K–$80K for Type II depending on scope complexity), availability timeline matching your target, and willingness to use your preferred evidence platform. Request proposals from 2–3 firms, review their sample reports, and check references from other medical device companies.',
                            deliverables: [
                                'Auditor selection and engagement letter',
                                'Agreed scope, timeline, and fee schedule',
                            ],
                            tips: [
                                'Some firms specialize in "SOC 2 + HIPAA" combined assessments — this can save significant cost and time',
                                'Consider a Type I first if you need a report quickly for a procurement deadline — Type I takes 4–6 weeks vs. 6–12 months for Type II',
                                'Avoid firms that also sell you compliance tooling unless you want that bundle — there can be independence concerns',
                            ],
                        },
                        {
                            step: 6,
                            title: 'Conduct Readiness Assessment',
                            description: 'Before the formal audit, perform a readiness assessment: evaluate every control against the applicable TSC criteria, collect and review all evidence as if you were the auditor, identify and remediate gaps, and simulate auditor interviews with control owners. Many firms offer a pre-assessment engagement (often included in the audit fee) that provides specific gaps to address before the formal observation period.',
                            deliverables: [
                                'Readiness assessment report with gap findings',
                                'Remediation plan with milestones',
                                'Evidence inventory and completeness verification',
                            ],
                            tips: [
                                'Common readiness failures: missing or incomplete policies, controls documented but not consistently followed, evidence gaps (months of monitoring data missing), and access reviews not conducted on schedule',
                                'Assign a SOC 2 project lead to coordinate evidence collection from multiple teams — this is a cross-functional effort',
                                'Use a GRC platform (Vanta, Drata, Secureframe) to automate continuous evidence collection — manual evidence gathering is unsustainable for Type II',
                            ],
                        },
                        {
                            step: 7,
                            title: 'Execute the Audit',
                            description: 'During the audit, the CPA firm evaluates: design effectiveness (controls are suitably designed to meet criteria) and operating effectiveness over the observation period (6–12 months). The auditor will: review documentation and evidence, interview control owners, observe system configurations, test a sample of control executions, and issue the final SOC 2 report. Exceptions (controls that failed during the observation period) will be noted — the goal is zero or minimal exceptions with documented remediation.',
                            deliverables: [
                                'Final SOC 2 Type II report (for distribution to customers under NDA)',
                                'Management response to any exceptions noted',
                            ],
                            tips: [
                                'SOC 2 reports are not public documents — they are shared under NDA with customers and prospects',
                                'A "clean" report (no exceptions) is strongly preferred for healthcare customers — plan remediation time before the observation period starts',
                                'SOC 2 reports are valid for 12 months — plan for annual recertification',
                            ],
                        },
                    ],
                },
            ]}
            checklists={[
                {
                    title: 'SOC 2 Scoping Checklist',
                    items: [
                        'Trust Services Criteria selected (Security + Availability + Confidentiality recommended)',
                        'System description boundaries defined and documented',
                        'Subservice organizations identified with Inclusive/Carve-Out method specified',
                        'Three-way control mapping matrix created (HIPAA ↔ FDA ↔ SOC 2)',
                        'Gap analysis completed with remediation plan',
                    ],
                },
                {
                    title: 'Audit Readiness Checklist',
                    items: [
                        'All policies documented and approved (Information Security, Access Control, Change Management, Incident Response, Vendor Management, Data Classification)',
                        'Quarterly access reviews conducted and documented for full observation period',
                        'Change management process documented with evidence trail for all production changes',
                        'Incident response procedures tested and documented',
                        'Vendor risk assessment completed for all subservice organizations',
                        'Evidence collection platform configured with automated monitoring',
                        'Control owners identified and prepared for auditor interviews',
                    ],
                },
            ]}
            commonPitfalls={[
                {
                    pitfall: 'Starting SOC 2 from scratch without leveraging HIPAA/FDA controls',
                    solution: 'If you have existing HIPAA or FDA compliance programs, 60–70% of SOC 2 controls are already in place. Start with a mapping exercise before implementing anything new. The gap is typically in formal change management, vendor risk management, and governance documentation — not technical controls.',
                },
                {
                    pitfall: 'Choosing Type I when customers require Type II',
                    solution: 'Type I demonstrates control design at a point in time. Type II demonstrates sustained operating effectiveness over 6–12 months. Most hospital procurement requires Type II. Use Type I as an interim deliverable while building toward Type II, but communicate the Type II timeline to sales prospects.',
                },
                {
                    pitfall: 'Manual evidence collection across a 12-month observation period',
                    solution: 'SOC 2 Type II requires continuous evidence over the observation period — monthly access reviews, quarterly risk assessments, complete change management logs, continuous monitoring. Manual collection is unsustainable. Invest in a GRC platform (Vanta, Drata, Secureframe, or equivalent) that integrates with your cloud provider and automatically collects evidence.',
                },
                {
                    pitfall: 'Treating SOC 2 as a one-time project instead of a continuous program',
                    solution: 'SOC 2 reports expire after 12 months. Plan for annual recertification from the start. Build evidence collection and control monitoring into your operational processes, not as a separate compliance project. The effort decreases significantly after the first audit if your processes are automated.',
                },
            ]}
        />
    );
}
