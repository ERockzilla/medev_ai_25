'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function HIPAASecurityRulePage() {
    return (
        <RegulationPageTemplate
            regulation={{
                number: 'HIPAA Security Rule',
                title: '45 CFR Part 164 Subpart C — Security Standards for the Protection of ePHI',
                organization: 'Other',
                effectiveDate: '2003 (Omnibus Rule update 2013)',
                category: 'data-security',
                regulationUrl: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C',
                guidanceUrl: 'https://www.hhs.gov/hipaa/for-professionals/security/guidance/index.html',
            }}
            overview={{
                scope: 'The HIPAA Security Rule establishes national standards for protecting electronic Protected Health Information (ePHI). It applies to covered entities (healthcare providers, health plans, healthcare clearinghouses) and their business associates — which includes medical device manufacturers who create, receive, maintain, or transmit ePHI. For connected medical device companies, this means any backend system, cloud service, or data pipeline that touches patient health data must comply with the Security Rule\'s administrative, physical, and technical safeguard requirements.',
                applicability: 'A medical device manufacturer becomes a "business associate" when its device or cloud backend creates, receives, maintains, or transmits ePHI on behalf of a covered entity (hospital, clinic, health plan). Common scenarios: (1) SaMD products that process diagnostic data, (2) connected devices that transmit patient vitals to a cloud dashboard, (3) remote monitoring platforms that store patient records, (4) any device or service that generates data linked to patient identifiers. Once classified as a business associate, the manufacturer must comply with the Security Rule and execute a Business Associate Agreement (BAA) with each covered entity customer.',
                whyItMatters: 'HIPAA violations carry severe penalties: $100 to $50,000 per violation (per record), with annual maximums up to $1.5 million per violation category. The HHS Office for Civil Rights (OCR) publishes settlements on its "Wall of Shame" portal for breaches affecting 500+ individuals. For medical device manufacturers, HIPAA non-compliance creates dual jeopardy — FDA cybersecurity requirements overlap significantly with HIPAA technical safeguards, and a breach can trigger enforcement from both OCR and FDA simultaneously. Beyond penalties, hospitals increasingly require HIPAA compliance evidence during device procurement.',
                keyConcepts: [
                    'ePHI: Electronic Protected Health Information — any individually identifiable health information in electronic form',
                    'Covered entities vs. business associates — different obligations, same enforcement',
                    'Three safeguard categories: Administrative, Physical, Technical',
                    'Required vs. addressable specifications — "addressable" does NOT mean optional',
                    'HIPAA Security Risk Assessment — the foundational compliance activity under § 164.308(a)(1)',
                    'Breach notification requirements — 60-day reporting window to affected individuals and HHS',
                    'Minimum necessary standard — limit ePHI access to what is needed for the intended purpose',
                    'Business Associate Agreements (BAAs) — contractual HIPAA flow-down to vendors and subcontractors',
                    'HITECH Act enforcement — increased penalties and breach notification requirements',
                ],
            }}
            keyRequirements={{
                title: 'Security Rule Safeguard Categories',
                sections: [
                    {
                        title: 'Administrative Safeguards (§ 164.308)',
                        description: 'The largest and most complex category. Requires: security management process (risk analysis and risk management), assigned security responsibility, workforce security (authorization/supervision), information access management, security awareness and training, security incident procedures, contingency planning (data backup, disaster recovery, emergency mode operations), evaluation of security measures, and business associate contracts. The risk analysis under § 164.308(a)(1)(ii)(A) is the most frequently cited violation in OCR enforcement actions.',
                    },
                    {
                        title: 'Physical Safeguards (§ 164.310)',
                        description: 'Controls for physical access to systems containing ePHI. Requires: facility access controls (contingency operations, facility security plan, access control and validation, maintenance records), workstation use policies, workstation security, and device/media controls (disposal, media re-use, accountability, data backup and storage). For device manufacturers, this extends to server rooms, development environments with test data, and devices in the field that store ePHI.',
                    },
                    {
                        title: 'Technical Safeguards (§ 164.312)',
                        description: 'Technology-based security controls. Requires: access control (unique user identification, emergency access procedure, automatic logoff, encryption and decryption), audit controls (hardware, software, and procedural mechanisms to record and examine activity), integrity controls (for ePHI in transit and at rest), person or entity authentication, and transmission security (integrity controls and encryption for data in transit). These overlap heavily with FDA cybersecurity requirements and can be addressed simultaneously.',
                    },
                    {
                        title: 'Organizational Requirements (§ 164.314)',
                        description: 'Business Associate Agreements and group health plan requirements. Every business associate relationship must be governed by a written contract (BAA) that establishes the permitted uses and disclosures of ePHI, requires safeguards, establishes breach reporting obligations, and ensures return or destruction of ePHI at contract termination.',
                    },
                    {
                        title: 'Policies, Procedures, and Documentation (§ 164.316)',
                        description: 'Requires implementation of policies and procedures to comply with the Security Rule, maintaining written documentation of those policies, and retaining documentation for six years. Policies must be periodically reviewed and updated in response to environmental or operational changes.',
                    },
                ],
            }}
            complianceGuide={{
                title: 'Getting Started: HIPAA Compliance for Device Manufacturers',
                steps: [
                    {
                        step: 1,
                        title: 'Determine Your HIPAA Obligations',
                        description: 'Evaluate whether your organization is a covered entity or business associate. Most device manufacturers are business associates when their products handle ePHI. If your device collects, transmits, or stores any data linked to patient identifiers, you likely have HIPAA obligations. Consult the "business associate" definition at 45 CFR § 160.103.',
                    },
                    {
                        step: 2,
                        title: 'Conduct a Security Risk Analysis',
                        description: 'Perform the mandatory risk analysis per § 164.308(a)(1)(ii)(A). Identify all systems that create, receive, maintain, or transmit ePHI. Map data flows from device through cloud backend to storage. Assess threats and vulnerabilities for each system, and document the likelihood and impact of potential risks. This is the single most common finding in OCR audits.',
                    },
                    {
                        step: 3,
                        title: 'Implement Technical Safeguards',
                        description: 'Address the technical safeguard specifications: unique user IDs, encryption at rest and in transit, audit logging, automatic logoff, integrity verification. See our detailed How-To guide for implementation specifics across AWS, Azure, and GCP.',
                    },
                    {
                        step: 4,
                        title: 'Establish Business Associate Agreements',
                        description: 'Execute BAAs with all subcontractors and vendors who access ePHI on your behalf — cloud providers, analytics services, logging platforms, support contractors. Ensure BAAs include breach notification timelines, subcontractor flow-down requirements, and ePHI return/destruction at termination.',
                    },
                    {
                        step: 5,
                        title: 'Document Policies and Train Workforce',
                        description: 'Create written policies for all Security Rule requirements. Conduct workforce training on HIPAA awareness, ePHI handling procedures, and security incident reporting. Document all training and retain records for six years.',
                    },
                    {
                        step: 6,
                        title: 'Establish Breach Notification Process',
                        description: 'Implement procedures for breach detection, investigation, and notification per the Breach Notification Rule (45 CFR §§ 164.400-414). Breaches affecting 500+ individuals must be reported to HHS within 60 days and to prominent media outlets. Smaller breaches must be logged and reported annually.',
                    },
                ],
                commonChallenges: [
                    {
                        challenge: '"Addressable" specifications treated as optional',
                        solution: '"Addressable" under HIPAA does NOT mean optional. It means you must either implement the specification or document why it is not reasonable and appropriate AND implement an equivalent alternative measure. OCR frequently cites organizations that ignored addressable specifications without documented justification.',
                    },
                    {
                        challenge: 'Incomplete risk analysis limited to clinical systems',
                        solution: 'The risk analysis must cover ALL systems touching ePHI — including development/test environments with production data copies, CI/CD pipelines that process health data, analytics dashboards, logging platforms, and backup systems. A risk analysis scoped only to the production application is incomplete.',
                    },
                    {
                        challenge: 'Assuming cloud provider BAA covers all compliance',
                        solution: 'AWS, Azure, and GCP BAAs cover the cloud provider\'s responsibilities under the shared responsibility model. Your organization remains responsible for configuring services correctly (encryption, access controls, logging), managing the application layer, and ensuring proper data handling. A BAA with AWS does not make your application HIPAA-compliant.',
                    },
                ],
            }}
            relatedRegulations={[
                {
                    number: 'HITECH Act',
                    title: 'Health Information Technology for Economic and Clinical Health Act',
                    relationship: 'Strengthened HIPAA enforcement, extended requirements to business associates, increased penalties, and added breach notification requirements',
                    url: '/regulations/hipaa-security-rule',
                },
                {
                    number: 'HIPAA Privacy Rule',
                    title: '45 CFR Part 164 Subpart E — Privacy of Individually Identifiable Health Information',
                    relationship: 'Governs uses and disclosures of PHI; Security Rule protects the electronic subset (ePHI)',
                    url: '/regulations/hipaa-security-rule',
                },
                {
                    number: 'FDA Cybersecurity Guidance',
                    title: 'Cybersecurity in Medical Devices: Quality System Considerations',
                    relationship: 'Significant overlap in technical safeguards — encryption, access controls, audit logging, and vulnerability management satisfy both FDA and HIPAA requirements',
                    url: '/regulations/fda-cybersecurity-guidance',
                },
                {
                    number: '21 CFR Part 11',
                    title: 'Electronic Records; Electronic Signatures',
                    relationship: 'FDA electronic records requirements overlap with HIPAA audit controls and access management',
                    url: '/regulations/cfr-11',
                },
            ]}
            relatedStandards={[
                {
                    number: 'IEC 81001-5-1',
                    title: 'Health software security lifecycle',
                    relationship: 'Security lifecycle activities align with HIPAA technical safeguard implementation',
                    url: '/standards/iec-81001-5-1',
                },
                {
                    number: 'NIST CSF',
                    title: 'NIST Cybersecurity Framework',
                    relationship: 'HHS crosswalk maps HIPAA Security Rule to NIST CSF — widely used as implementation framework',
                    url: 'https://www.hhs.gov/hipaa/for-professionals/security/nist-security-hipaa-crosswalk/index.html',
                },
                {
                    number: 'SOC 2 Type II',
                    title: 'AICPA Trust Services Criteria',
                    relationship: 'SOC 2 audit evidence can support HIPAA compliance documentation; significant control overlap',
                    url: '/guides/soc2-for-medtech',
                },
            ]}
        />
    );
}
