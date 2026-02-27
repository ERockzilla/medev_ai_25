'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function HIPAABAAPage() {
    return (
        <RegulationPageTemplate
            regulation={{
                number: 'HIPAA BAA Requirements',
                title: 'Business Associate Agreements for Medical Device Companies',
                organization: 'Other',
                effectiveDate: '2003 (HITECH 2009, Omnibus Rule 2013)',
                category: 'data-security',
                regulationUrl: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.314',
                guidanceUrl: 'https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html',
            }}
            overview={{
                scope: 'A Business Associate Agreement (BAA) is a written contract required by HIPAA (45 CFR § 164.314(a)) between a covered entity and any business associate that creates, receives, maintains, or transmits electronic Protected Health Information (ePHI). For medical device manufacturers, BAAs govern the relationship with hospital customers (covered entities) and with downstream vendors (subcontractors). The BAA defines permitted uses of ePHI, required safeguards, breach notification obligations, and ePHI handling at termination. Without a BAA, both parties face HIPAA enforcement liability.',
                applicability: 'A medical device manufacturer needs BAAs in two directions: (1) Upstream — the hospital or health system (covered entity) must execute a BAA with the manufacturer before the device/service handles ePHI; (2) Downstream — the manufacturer must execute BAAs with every subcontractor accessing ePHI, including cloud providers (AWS, Azure, GCP), analytics platforms, logging services, customer support tools, and any third-party API that processes health data. The HITECH Act and 2013 Omnibus Rule made business associates directly liable under HIPAA, not just contractually liable through the BAA.',
                whyItMatters: 'OCR has settled multiple cases involving missing or deficient BAAs, with penalties ranging from $150,000 to $4.3 million. The most common failures: (1) no BAA in place at all, (2) BAA does not include subcontractor flow-down requirements, (3) BAA lacks breach notification timelines, (4) vendor accesses ePHI without a BAA because the data wasn\'t recognized as ePHI. For device manufacturers, the cloud provider ecosystem creates a particularly complex web of BAA obligations — every service that touches ePHI requires a BAA, including CDN providers, email services, and monitoring tools.',
                keyConcepts: [
                    'Business Associate definition (45 CFR § 160.103) — anyone who performs functions involving ePHI use/disclosure on behalf of a covered entity',
                    'Subcontractor flow-down — business associates must execute BAAs with their own subcontractors who access ePHI',
                    'Required BAA provisions: permitted uses, safeguards, breach reporting, ePHI return/destruction',
                    'Direct liability — business associates are directly liable for HIPAA violations since the 2013 Omnibus Rule',
                    'Cloud provider BAAs — AWS, Azure, and GCP offer BAAs but they cover only the infrastructure layer',
                    'Breach notification chain — subcontractor → business associate → covered entity → affected individuals/HHS',
                    'Termination provisions — what happens to ePHI when the business relationship ends',
                    'Annual BAA review — ensure all vendor relationships are covered and BAAs are current',
                ],
            }}
            keyRequirements={{
                title: 'Required BAA Provisions (45 CFR § 164.314)',
                sections: [
                    {
                        title: 'Permitted Uses and Disclosures',
                        description: 'The BAA must specify the permitted and required uses and disclosures of ePHI by the business associate. Uses must be limited to performing services under the contract, complying with the Security Rule, and any uses required by law. The BAA must prohibit the business associate from using or disclosing ePHI in ways that would violate the Privacy Rule if done by the covered entity (with limited exceptions for data aggregation, management, and de-identification).',
                    },
                    {
                        title: 'Safeguard Requirements',
                        description: 'The business associate must agree to use appropriate safeguards to prevent unauthorized use or disclosure of ePHI, including implementing the requirements of the Security Rule. This means the business associate must: conduct a risk analysis, implement administrative/physical/technical safeguards, and maintain security policies and procedures. The BAA should specify the minimum safeguard level expected.',
                    },
                    {
                        title: 'Breach Notification Obligations',
                        description: 'The business associate must report any security incident or breach of unsecured ePHI to the covered entity. Reporting timelines: breaches must be reported without unreasonable delay and no later than 60 days after discovery. The notification must include: identification of affected individuals, description of the breach, types of ePHI involved, and recommended steps for affected individuals. Subcontractors must report to the business associate first.',
                    },
                    {
                        title: 'Subcontractor Requirements',
                        description: 'If the business associate uses subcontractors who access ePHI, the BAA must require the business associate to ensure subcontractors agree to the same restrictions and conditions. This is the "flow-down" requirement — every entity in the ePHI chain must be bound by BAA obligations. Common gaps: analytics vendors, logging-as-a-service providers, and customer support chatbots that access ePHI without BAAs.',
                    },
                    {
                        title: 'Return or Destruction of ePHI',
                        description: 'At contract termination, the business associate must return or destroy all ePHI received from, or created on behalf of, the covered entity. If return or destruction is not feasible (e.g., ePHI in backups), the BAA must specify protections that extend beyond termination and limit further uses and disclosures to the purposes that make return or destruction infeasible.',
                    },
                    {
                        title: 'Termination Provisions',
                        description: 'The BAA must authorize the covered entity to terminate the contract if the business associate violates a material BAA term. It must also require the business associate to cure any breach or end the violation, or allow the covered entity to terminate if curing is not possible. These provisions are legally required — a BAA without termination clauses is deficient.',
                    },
                ],
            }}
            complianceGuide={{
                title: 'Building Your BAA Management Program',
                steps: [
                    {
                        step: 1,
                        title: 'Inventory All ePHI Data Flows',
                        description: 'Map every system, service, and vendor that creates, receives, stores, processes, or transmits ePHI. Include: cloud infrastructure (AWS, Azure, GCP), SaaS tools (email, support, analytics), CDN/edge services, backup providers, development tools with production data access, and any API that processes health data. The output is a complete ePHI data flow map.',
                    },
                    {
                        step: 2,
                        title: 'Classify Vendor BAA Requirements',
                        description: 'For each vendor in your data flow map, determine: (1) Does the vendor access ePHI? (2) Is the vendor a business associate or subcontractor? (3) Does a BAA already exist? (4) Does the existing BAA meet current requirements? Create a BAA requirements matrix categorizing vendors as: BAA Required, BAA In Place, BAA Missing, or BAA Needs Update.',
                    },
                    {
                        step: 3,
                        title: 'Execute or Update BAAs',
                        description: 'For each vendor requiring a BAA: use the HHS sample BAA provisions as a starting template, customize for your specific data handling requirements, and negotiate with the vendor. For cloud providers, accept their standard BAA (AWS BAA via AWS Artifact, Azure BAA via Online Services Terms, GCP BAA via console) but understand what it covers and doesn\'t cover under the shared responsibility model.',
                    },
                    {
                        step: 4,
                        title: 'Establish Ongoing Monitoring',
                        description: 'BAA management is continuous: review all BAAs annually, update when vendor services change, track BAA expiration dates, monitor vendor security posture, and verify subcontractor compliance. Create a BAA tracking register with: vendor name, BAA execution date, expiration/renewal date, ePHI scope, and last review date.',
                    },
                ],
                commonChallenges: [
                    {
                        challenge: 'Cloud provider BAAs don\'t cover application-layer security',
                        solution: 'AWS, Azure, and GCP BAAs cover the infrastructure layer (physical security, network, hypervisor). You remain responsible for everything above: application configuration, access controls, encryption key management, audit logging configuration, and data retention policies. Understand the shared responsibility model for your specific services.',
                    },
                    {
                        challenge: 'Third-party APIs and SaaS tools process ePHI without BAAs',
                        solution: 'Audit all third-party integrations: email services (SendGrid, Mailgun), support platforms (Zendesk, Intercom), analytics (Mixpanel, Amplitude), monitoring (Datadog, New Relic). If any of these access data linked to patient identifiers, they require BAAs. Many vendors offer HIPAA-eligible tiers with BAAs — but you must explicitly activate them.',
                    },
                    {
                        challenge: 'Development and test environments use production ePHI',
                        solution: 'Development environments with copies of production ePHI are subject to the Security Rule. Either: (1) de-identify data per Safe Harbor or Expert Determination before copying to dev/test, or (2) treat dev/test environments as production-equivalent for HIPAA purposes (with full safeguards and BAA coverage for dev tools).',
                    },
                ],
            }}
            relatedRegulations={[
                {
                    number: 'HIPAA Security Rule',
                    title: '45 CFR Part 164 Subpart C — Security Standards for ePHI',
                    relationship: 'The Security Rule defines the safeguards that BAAs must require business associates to implement',
                    url: '/regulations/hipaa-security-rule',
                },
                {
                    number: 'HIPAA Breach Notification Rule',
                    title: '45 CFR Part 164 Subpart D — Notification in the Case of Breach',
                    relationship: 'BAAs must include breach notification timelines and procedures from the Breach Notification Rule',
                    url: '/regulations/hipaa-security-rule',
                },
                {
                    number: 'FDA Cybersecurity Guidance',
                    title: 'Cybersecurity in Medical Devices',
                    relationship: 'FDA cybersecurity requirements and HIPAA BAA safeguard requirements overlap in technical controls',
                    url: '/regulations/fda-cybersecurity-guidance',
                },
            ]}
            relatedStandards={[
                {
                    number: 'SOC 2 Type II',
                    title: 'AICPA Trust Services Criteria',
                    relationship: 'SOC 2 reports from vendors provide assurance evidence for BAA safeguard compliance',
                    url: '/guides/soc2-for-medtech',
                },
                {
                    number: 'IEC 81001-5-1',
                    title: 'Health software security lifecycle',
                    relationship: 'Security lifecycle activities support HIPAA technical safeguard compliance',
                    url: '/standards/iec-81001-5-1',
                },
            ]}
        />
    );
}
