'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function AAMISW96Page() {
    return (
        <StandardPageTemplate
            standard={{
                number: 'ANSI/AAMI SW96:2023',
                title: 'Medical device security — Security risk management for device manufacturers',
                organization: 'IEC',
                publicationDate: '2023',
                currentVersion: '2023',
                category: 'software',
                purchaseUrl: 'https://www.aami.org/store/products/sw96-2023',
            }}
            overview={{
                scope: 'ANSI/AAMI SW96:2023 is an FDA-recognized consensus standard that provides a security risk management process specifically for medical device manufacturers. It replaces the earlier AAMI TIR57 technical information report with a full consensus standard. SW96 defines how to integrate cybersecurity risk management into the device lifecycle — from security context establishment through threat identification, vulnerability assessment, risk evaluation, security control implementation, and residual risk acceptance. It is designed to work alongside (not replace) ISO 14971 for safety risk, creating a parallel but distinct cybersecurity risk process.',
                whyItMatters: 'SW96 is the most important cybersecurity risk management standard for FDA submissions. Its FDA recognition means that compliance with SW96 creates a regulatory presumption of conformity for the cybersecurity risk management aspects of your premarket submission. Using SW96 signals to FDA reviewers that your cybersecurity risk process follows an accepted, structured methodology — significantly reducing the likelihood of RTA (Refuse to Accept) or review questions. SW96 also provides the formal bridge between ISO 14971 safety risk and cybersecurity-specific exploitability-based risk assessment that FDA expects.',
                keyConcepts: [
                    'FDA-recognized consensus standard for cybersecurity risk management',
                    'Complements ISO 14971 — handles intentional threats where probabilistic assessment fails',
                    'Exploitability-based risk assessment using CVSS/CWSS scoring',
                    'Security context establishment (assets, threat sources, trust boundaries)',
                    'Threat identification aligned with STRIDE and CAPEC/ATT&CK frameworks',
                    'Vulnerability assessment covering SBOM components, design weaknesses, and configuration issues',
                    'Security risk evaluation with cybersecurity-specific risk matrix',
                    'Security control selection and residual risk acceptance',
                    'Post-market security risk monitoring and lifecycle updates',
                    'Evolved from AAMI TIR57 — full consensus standard vs. technical information report',
                ],
            }}
            keyRequirements={{
                title: 'Key Requirements Overview',
                sections: [
                    {
                        title: 'Security Context Establishment (Clause 5)',
                        description: 'Define the security context: identify assets to be protected (ePHI, device functionality, firmware integrity, communication channels), characterize threat sources (external actors, insider threats, supply chain compromise, automated malware), define the system boundary and trust zones, and establish the intended use environment (clinical network, home use, field deployment). The security context drives the scope of all subsequent risk activities.',
                    },
                    {
                        title: 'Threat Identification (Clause 6)',
                        description: 'Systematically identify threats using structured methodologies (STRIDE per element, CAPEC, MITRE ATT&CK for ICS). Threats must be identified for every asset across every trust boundary. Document each threat with: threat ID, affected asset, threat source, attack vector, and potential impact. Cross-reference with real-world vulnerability intelligence (CISA ICS-CERT advisories, NVD) to ground theoretical analysis in actual adversary behavior.',
                    },
                    {
                        title: 'Vulnerability Assessment (Clause 7)',
                        description: 'Assess each identified threat for exploitability: what vulnerabilities exist that could enable the threat? Sources include: SBOM component analysis against NVD/CVE databases, design-level weaknesses (CWE analysis), configuration vulnerabilities, and process weaknesses (weak authentication, missing encryption). Score each vulnerability using CVSS v3.1/v4.0 (for known CVEs) or CWSS (for design weaknesses without specific CVEs).',
                    },
                    {
                        title: 'Security Risk Evaluation (Clause 8)',
                        description: 'Evaluate risk by combining exploitability assessment with impact analysis. Impact categories: patient safety (aligned with ISO 14971 severity scale), data confidentiality (breach scope), device availability (therapy interruption), and functional integrity (incorrect operation). Use a cybersecurity-specific risk matrix (NOT the ISO 14971 probability-severity matrix) to determine risk levels. Classify risks as Unacceptable, Acceptable with Mitigations, or Acceptable as-is.',
                    },
                    {
                        title: 'Security Control Selection and Residual Risk (Clause 9)',
                        description: 'For each unacceptable risk, select security controls following the control hierarchy: inherently safe design (eliminate attack surface), protective measures (encryption, authentication, segmentation), and protective information (labeling, user guidance). After controls are applied, re-evaluate risk to determine the residual level. Document risk-benefit analysis for any residual risk classified as High or Critical. Residual risk acceptance requires management review and approval.',
                    },
                    {
                        title: 'Post-Market Security Risk Monitoring (Clause 10)',
                        description: 'Establish ongoing processes to monitor and update the security risk assessment post-market. Monitor for: new vulnerabilities in SBOM components (automated CVE monitoring), new threat intelligence relevant to the device type, field security incidents and near-misses, and changes in the threat landscape. Update the risk assessment when new information changes the risk profile. This aligns with FDA Section 524B post-market requirements.',
                    },
                ],
            }}
            implementationGuide={{
                title: 'Integration with Your Risk Management Process',
                steps: [
                    {
                        step: 1,
                        title: 'Relate SW96 to Your ISO 14971 Process',
                        description: 'SW96 runs parallel to ISO 14971 — not as a replacement. Create a bridge document showing: safety risks (ISO 14971) use probability × severity, cybersecurity risks (SW96) use exploitability × impact. Where a cybersecurity event causes a safety hazard (e.g., unauthorized therapy dosage change), it appears in both files. Document this relationship explicitly.',
                    },
                    {
                        step: 2,
                        title: 'Establish a Cybersecurity Risk Management Plan',
                        description: 'Create a standalone cybersecurity risk management plan (per SW96 Clause 4) that: defines the scope (product, system boundary, lifecycle stage), identifies the team and their responsibilities, specifies the methodology (STRIDE, CVSS, risk matrix criteria), defines risk acceptability criteria, and references the ISO 14971 risk management plan for the bridge to safety risk.',
                    },
                    {
                        step: 3,
                        title: 'Execute the SW96 Process and Document Results',
                        description: 'Execute Clauses 5–10 in sequence, producing: security context document, threat register, vulnerability assessment report, cybersecurity risk register (uncontrolled and controlled), security control specification, residual risk acceptance records, and post-market monitoring plan. These artifacts directly feed your FDA premarket submission cybersecurity documentation.',
                    },
                    {
                        step: 4,
                        title: 'Reference SW96 in your FDA Submission',
                        description: 'In your premarket submission, state: "The cybersecurity risk assessment was conducted in accordance with ANSI/AAMI SW96:2023, an FDA-recognized consensus standard for medical device security risk management." This creates a regulatory presumption of conformity and demonstrates the use of an accepted methodology.',
                    },
                ],
                commonChallenges: [
                    {
                        challenge: 'Confusion between ISO 14971 and SW96 scope',
                        solution: 'ISO 14971 covers safety risk (hazards, harms, probability). SW96 covers cybersecurity risk (threats, exploitability, impact). They share the impact/severity axis for patient safety but differ on the likelihood axis. Create the bridge document first.',
                    },
                    {
                        challenge: 'Using SW96 without prior threat modeling',
                        solution: 'SW96 Clause 6 (Threat Identification) requires structured threat enumeration. You need a completed threat model (DFDs, STRIDE analysis) as input to the SW96 process. Complete the threat model first — see /guides/threat-modeling-medical-devices.',
                    },
                    {
                        challenge: 'Treating SW96 as a one-time premarket activity',
                        solution: 'Clause 10 explicitly requires post-market monitoring. The cybersecurity risk file is a living document, updated when new CVEs are discovered, new threats emerge, or the device architecture changes. Build automated SBOM monitoring from the start.',
                    },
                ],
            }}
            relatedStandards={[
                {
                    number: 'ISO 14971:2019',
                    title: 'Medical devices — Application of risk management',
                    relationship: 'SW96 complements ISO 14971 — handles cybersecurity risk where probabilistic assessment is inappropriate for intentional threats',
                    url: '/standards/iso-14971',
                },
                {
                    number: 'AAMI TIR57:2016',
                    title: 'Principles for medical device security — Risk management',
                    relationship: 'SW96 replaces TIR57 as the definitive cybersecurity risk management standard — TIR57 was a technical information report, SW96 is a full consensus standard',
                    url: '/standards/aami-tir57',
                },
                {
                    number: 'IEC 81001-5-1:2021',
                    title: 'Health software security — Activities in the product life cycle',
                    relationship: 'IEC 81001-5-1 covers the full security lifecycle; SW96 provides the risk management process that feeds into IEC 81001-5-1 security activities',
                    url: '/standards/iec-81001-5-1',
                },
                {
                    number: 'IEC 62304:2006/A1:2015',
                    title: 'Medical device software — Software life cycle processes',
                    relationship: 'SW96 cybersecurity risk classification can inform IEC 62304 software safety classification and the depth of lifecycle documentation required',
                    url: '/standards/iec-62304',
                },
            ]}
        />
    );
}
