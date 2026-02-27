'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function AAMITIR57Page() {
    return (
        <StandardPageTemplate
            standard={{
                number: 'AAMI TIR57:2016/(R)2019',
                title: 'Principles for medical device security — Risk management',
                organization: 'IEC',
                publicationDate: '2016',
                currentVersion: '2019 (Reaffirmed)',
                category: 'software',
                purchaseUrl: 'https://www.aami.org/store/products/aami-tir57-2016-r-2019',
            }}
            overview={{
                scope: 'AAMI TIR57 is a Technical Information Report (TIR) that establishes principles for applying risk management to medical device cybersecurity. Published in 2016, it was the first AAMI document to address cybersecurity risk management specifically for medical devices. TIR57 adapts the ISO 14971 risk management framework for cybersecurity threats, replacing probabilistic occurrence estimates with exploitability-based assessment. While TIR57 has been functionally superseded by ANSI/AAMI SW96:2023 (which is an FDA-recognized consensus standard), TIR57 remains widely referenced in existing QMS documentation, FDA submissions, and industry literature.',
                whyItMatters: 'TIR57 was the foundational document that established the principle: cybersecurity risks cannot be managed using traditional probability-based methods because attackers are intentional, not random. This insight — now enshrined in FDA guidance and SW96 — originated in TIR57. For medical device companies: (1) If your existing QMS references TIR57, you need to understand what it covers and plan migration to SW96. (2) FDA reviewers still recognize TIR57 but prefer SW96 as the current standard. (3) Legacy submissions referencing TIR57 are acceptable but new submissions should reference SW96. (4) Understanding TIR57 provides context for why SW96 was developed and what problems it solved.',
                keyConcepts: [
                    'Technical Information Report (TIR) — not a full consensus standard; represents expert committee guidance',
                    'First AAMI document addressing cybersecurity-specific risk management for medical devices',
                    'Adapts ISO 14971 risk management framework for intentional threats',
                    'Replaces occurrence probability with exploitability assessment',
                    'Asset-based approach: identify assets, identify threats to assets, assess vulnerabilities',
                    'Cybersecurity risk vs. safety risk: parallel processes with shared severity scales',
                    'Precursor to ANSI/AAMI SW96:2023 — TIR57 principles were formalized into the consensus standard',
                    'FDA recognized but being supplanted by SW96 in new submissions',
                    'Still valuable as a process guide for small organizations starting cybersecurity risk management',
                ],
            }}
            keyRequirements={{
                title: 'Key Sections Overview',
                sections: [
                    {
                        title: 'Cybersecurity Risk Management Process (Section 4)',
                        description: 'Establishes that cybersecurity risk management should follow the ISO 14971 process structure (plan → identify → analyze → evaluate → control → monitor) but with cybersecurity-specific adaptations. The risk management plan should be a standalone document or an addendum to the ISO 14971 risk management plan. Defines the team composition, scope, and methodology for cybersecurity risk activities.',
                    },
                    {
                        title: 'Asset Identification (Section 5)',
                        description: 'Identifies what needs protecting: patient data (ePHI/PII), device functionality (therapy delivery, diagnostic accuracy), communication channels, firmware/software integrity, cryptographic keys, audit logs, and configuration data. Assets are classified by sensitivity and criticality. This asset inventory drives the subsequent threat analysis — every asset is a potential target.',
                    },
                    {
                        title: 'Threat Analysis (Section 6)',
                        description: 'Identifies threats to each asset. TIR57 recommends threat modeling techniques (STRIDE, attack trees) to systematically enumerate threats. Threats are categorized by threat source (external attacker, insider, malware, supply chain), attack vector (network, physical, social engineering), and potential impact. TIR57 explicitly notes that threats from intentional actors should not use probabilistic occurrence estimates.',
                    },
                    {
                        title: 'Vulnerability Assessment (Section 7)',
                        description: 'Evaluates the vulnerabilities that could be exploited by identified threats. Sources include: SBOM analysis against known vulnerability databases (NVD/CVE), design-level weaknesses (CWE analysis), penetration testing results, and security architecture review findings. Vulnerability severity is scored using exploitability metrics (CVSS was recommended; SW96 formalizes this requirement).',
                    },
                    {
                        title: 'Risk Evaluation and Control (Sections 8-9)',
                        description: 'Combines exploitability and impact to determine risk levels using a cybersecurity-specific risk matrix (not the ISO 14971 probability-severity matrix). Risks classified as unacceptable require security controls. Controls follow the ISO 14971 hierarchy: inherently safe design → protective measures → information. Residual risk must be evaluated and accepted through a formal process.',
                    },
                    {
                        title: 'Post-Market Monitoring (Section 10)',
                        description: 'Establishes that cybersecurity risk management extends through the product lifecycle. Post-market activities include: monitoring for new vulnerabilities in deployed components, tracking CISA/ICS-CERT advisories, processing field security reports, and triggering risk reassessment when new threat information emerges. TIR57 was prescient in emphasizing lifecycle monitoring before FDA Section 524B made it a legal requirement.',
                    },
                ],
            }}
            implementationGuide={{
                title: 'Using TIR57 and Planning Migration to SW96',
                steps: [
                    {
                        step: 1,
                        title: 'Assess Current TIR57 Usage',
                        description: 'Determine if your QMS, SOPs, or existing submissions reference TIR57. If so, document where it is referenced and plan the migration to SW96. If you have not yet implemented a cybersecurity risk management process, skip directly to SW96.',
                    },
                    {
                        step: 2,
                        title: 'Map TIR57 to SW96 for Gap Analysis',
                        description: 'SW96 Clauses 5–10 correspond to TIR57 Sections 4–10 but with significantly more detail and formalized requirements. Key additions in SW96: explicit CVSS/CWSS scoring requirements, formal security context establishment, enhanced post-market monitoring procedures, and alignment with FDA-recognized consensus standard status. Map your existing TIR57 artifacts to SW96 requirements to identify gaps.',
                    },
                    {
                        step: 3,
                        title: 'Update References and Documentation',
                        description: 'Update QMS procedures, SOPs, and templates to reference SW96:2023 instead of TIR57. Update premarket submission templates to cite SW96. For legacy products with existing submissions referencing TIR57, no action is required unless a new submission is filed.',
                    },
                    {
                        step: 4,
                        title: 'Leverage TIR57 Knowledge for SW96',
                        description: 'If your team is experienced with TIR57, the migration to SW96 is straightforward — the core principles are the same. The key changes: more formal process requirements, explicit scoring methodology requirements, enhanced documentation expectations, and FDA recognition status. Your existing cybersecurity risk files can be updated to SW96 format.',
                    },
                ],
                commonChallenges: [
                    {
                        challenge: 'TIR status vs. consensus standard status confusion',
                        solution: 'A TIR (Technical Information Report) is expert guidance, not a full consensus standard. It cannot be referenced for regulatory presumption of conformity the way a recognized consensus standard can. SW96 is a full ANSI/AAMI consensus standard with FDA recognition — always prefer SW96 for new submissions.',
                    },
                    {
                        challenge: 'Existing submissions reference TIR57 — should I update?',
                        solution: 'For existing cleared/approved devices with submissions referencing TIR57, no update is required unless you file a new submission (supplement, amendment). For new submissions for the same device, reference SW96. FDA will not reject a submission referencing TIR57, but SW96 carries stronger regulatory weight.',
                    },
                ],
            }}
            relatedStandards={[
                {
                    number: 'ANSI/AAMI SW96:2023',
                    title: 'Medical device security — Security risk management for device manufacturers',
                    relationship: 'SW96 supersedes TIR57 as the FDA-recognized consensus standard for cybersecurity risk management. TIR57 principles were formalized and expanded in SW96',
                    url: '/standards/ansi-aami-sw96',
                },
                {
                    number: 'ISO 14971:2019',
                    title: 'Medical devices — Application of risk management',
                    relationship: 'TIR57 adapts ISO 14971 methodology for cybersecurity — sharing the process framework but replacing probabilistic occurrence with exploitability assessment',
                    url: '/standards/iso-14971',
                },
                {
                    number: 'IEC 81001-5-1:2021',
                    title: 'Health software security — Activities in the product life cycle',
                    relationship: 'IEC 81001-5-1 covers the full security lifecycle; TIR57/SW96 provides the risk management process component',
                    url: '/standards/iec-81001-5-1',
                },
                {
                    number: 'UL 2900-2-1',
                    title: 'Software cybersecurity for network-connectable products — Healthcare',
                    relationship: 'UL 2900 provides testing criteria; TIR57/SW96 provides the risk management framework that determines testing priorities',
                    url: '/standards/ul-2900',
                },
            ]}
        />
    );
}
