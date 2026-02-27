'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function FDACybersecurityGuidancePage() {
    return (
        <RegulationPageTemplate
            regulation={{
                number: 'FDA Cybersecurity Guidance',
                title: 'Cybersecurity in Medical Devices: Quality System Considerations and Content of Premarket Submissions',
                organization: 'FDA',
                effectiveDate: '2023 (Finalized)',
                category: 'cybersecurity',
                regulationUrl: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cybersecurity-medical-devices-quality-system-considerations-and-content-premarket-submissions',
                guidanceUrl: 'https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity',
            }}
            overview={{
                scope: 'This finalized FDA guidance document provides recommendations on cybersecurity information to include in premarket submissions for medical devices with cybersecurity considerations. It applies to devices that contain software (including firmware), programmable logic, and software as a medical device (SaMD). The guidance addresses the full device lifecycle, from design through post-market management, and establishes expectations for a Secure Product Development Framework (SPDF) that integrates cybersecurity into the Quality System.',
                applicability: 'This guidance applies to all medical device manufacturers submitting premarket applications (510(k), De Novo, PMA, HDE) for devices that contain software or are programmable. With the enactment of Section 524B of the FD&C Act via the 2023 Omnibus bill, many of these recommendations have become statutory requirements for "cyber devices." Manufacturers of Class II and Class III devices with network connectivity, data exchange capabilities, or software update mechanisms should consider this guidance essential reading.',
                whyItMatters: 'This guidance represents a paradigm shift in how FDA evaluates cybersecurity. It moves beyond a checkbox approach to requiring evidence of a mature security development process. The FDA now expects threat models, architectural data-flow diagrams, a Software Bill of Materials (SBOM), and documented evidence that cybersecurity was integrated into every phase of product development. Failure to address cybersecurity adequately in premarket submissions can result in Refuse to Accept (RTA) decisions, significantly delaying market clearance.',
                keyConcepts: [
                    'Secure Product Development Framework (SPDF) as the foundation for cybersecurity activities',
                    'Threat modeling with data-flow diagrams and trust boundary documentation',
                    'Cybersecurity risk assessment using exploitability-based scoring (not probabilistic models)',
                    'Software Bill of Materials (SBOM) in machine-readable format for all software components',
                    'Vulnerability management and coordinated disclosure procedures',
                    'Post-market cybersecurity management including patch/update plans',
                    'Authentication, authorization, and encryption requirements for device interfaces',
                    'Security testing requirements including fuzz testing, static analysis, and penetration testing',
                    'Labeling requirements for cybersecurity information to end users',
                ],
            }}
            keyRequirements={{
                title: 'Premarket Submission Requirements',
                sections: [
                    {
                        title: 'Secure Product Development Framework (SPDF)',
                        description: 'Manufacturers must demonstrate that cybersecurity was integrated into product development through an SPDF. This goes beyond traditional QMS by requiring security-specific activities at every design phase: security requirements definition, secure architecture design, secure coding, security testing, and vulnerability management. The SPDF should align with recognized frameworks such as NIST CSF or IEC 81001-5-1.',
                    },
                    {
                        title: 'Threat Modeling',
                        description: 'The FDA expects comprehensive threat models that include: system architecture diagrams, data-flow diagrams showing trust boundaries, use-case and misuse-case scenarios, and attack surface identification. Threat models must map identified threats to security controls. STRIDE, PASTA, or equivalent methodologies are acceptable. Threat models must be updated throughout the product lifecycle.',
                    },
                    {
                        title: 'Cybersecurity Risk Assessment',
                        description: 'FDA explicitly states that traditional probabilistic risk assessment (as used in ISO 14971) is insufficient for cybersecurity because threats from malicious actors are intentional, not random. Manufacturers must use exploitability-based assessments considering known vulnerability severity (CVSS), exploit availability, and potential impact on safety. Residual risk must be evaluated for both uncontrolled and controlled scenarios.',
                    },
                    {
                        title: 'Software Bill of Materials (SBOM)',
                        description: 'All premarket submissions for cyber devices must include a complete SBOM listing commercial, open-source, and off-the-shelf software components. SBOMs should be in machine-readable format (SPDX or CycloneDX) and include component name, version, manufacturer, and known vulnerabilities. SBOMs must be maintained and updated post-market.',
                    },
                    {
                        title: 'Security Architecture',
                        description: 'Submissions must include documentation of the device security architecture, including: end-to-end encryption strategies, authentication and authorization mechanisms, secure boot and firmware integrity verification, network segmentation and interface security, and secure update/patch mechanisms.',
                    },
                    {
                        title: 'Security Testing and Verification',
                        description: 'Evidence of comprehensive security testing must be provided, including: static code analysis (SAST), dynamic analysis (DAST), software composition analysis (SCA), fuzz testing of all interfaces, penetration testing results, and vulnerability scanning. Test results must demonstrate that identified security requirements are met.',
                    },
                    {
                        title: 'Post-Market Cybersecurity Management',
                        description: 'Manufacturers must document plans for: monitoring new vulnerabilities affecting device components, timely patch and update deployment, coordinated vulnerability disclosure, incident response procedures, and communication with healthcare delivery organizations (HDOs) about cybersecurity events.',
                    },
                    {
                        title: 'Labeling',
                        description: 'Device labeling must include cybersecurity-relevant information for end users and healthcare organizations, including: recommended cybersecurity controls, network environment requirements, known residual risks, instructions for security updates, and contact information for reporting vulnerabilities.',
                    },
                ],
            }}
            complianceGuide={{
                title: 'Submission Preparation Roadmap',
                steps: [
                    {
                        step: 1,
                        title: 'Determine Cyber Device Classification',
                        description: 'Use the Cyber Device Classification tool on medev.ai to determine whether your device meets the definition of a "cyber device" under Section 524B. This determines whether SBOM and patching plans are statutory requirements or just recommended best practices.',
                    },
                    {
                        step: 2,
                        title: 'Establish or Document Your SPDF',
                        description: 'Implement a Secure Product Development Framework integrated with your existing QMS design control process. Map your SPDF activities to IEC 81001-5-1 clauses and document how cybersecurity requirements flow through your design inputs, outputs, verification, and validation.',
                    },
                    {
                        step: 3,
                        title: 'Conduct Threat Modeling',
                        description: 'Create system architecture diagrams, data-flow diagrams with trust boundaries, and identify the complete attack surface. Apply STRIDE or equivalent methodology to enumerate threats. Map each threat to security controls and document residual risk.',
                    },
                    {
                        step: 4,
                        title: 'Perform Cybersecurity Risk Assessment',
                        description: 'Assess risks using exploitability-based methods. For each identified threat, evaluate severity using CVSS scoring, assess exploit availability, and determine potential patient safety impact. Document risk controls and evaluate residual risk.',
                    },
                    {
                        step: 5,
                        title: 'Generate and Validate SBOM',
                        description: 'Create a complete Software Bill of Materials covering all software components. Use automated tooling (Syft, FOSSA, Snyk) for accuracy. Validate against NTIA minimum elements. Cross-reference components against NVD/CVE databases for known vulnerabilities.',
                    },
                    {
                        step: 6,
                        title: 'Execute Security Testing',
                        description: 'Perform static analysis, dynamic analysis, fuzz testing, and penetration testing. Document all findings, remediation actions, and retest results. Ensure test coverage addresses all identified threats and security requirements.',
                    },
                    {
                        step: 7,
                        title: 'Document Post-Market Plan',
                        description: 'Create documented procedures for vulnerability monitoring, patch management, coordinated disclosure, and incident response. Define timelines for critical, high, medium, and low severity vulnerability remediation.',
                    },
                    {
                        step: 8,
                        title: 'Prepare Labeling',
                        description: 'Draft cybersecurity-specific labeling including recommended security controls for end users, network environment requirements, update procedures, and vulnerability reporting instructions.',
                    },
                    {
                        step: 9,
                        title: 'Compile Premarket Submission Package',
                        description: 'Assemble all cybersecurity documentation into the submission package. For 510(k) submissions, map to the eSTAR cybersecurity section. Cross-reference all documentation to ensure traceability between threats, controls, testing, and labeling.',
                    },
                ],
                commonChallenges: [
                    {
                        challenge: 'RTA (Refuse to Accept) for missing cybersecurity documentation',
                        solution: 'Use FDA\'s checklist from the guidance appendix to verify completeness before submission. The most common RTA triggers are: missing SBOM, absent threat model, and no post-market vulnerability management plan.',
                    },
                    {
                        challenge: 'Adapting ISO 14971 risk management for cybersecurity',
                        solution: 'Don\'t try to force cybersecurity into your existing ISO 14971 risk matrix. Create a separate cybersecurity risk assessment that uses exploitability-based scoring. Reference ANSI/AAMI SW96 or AAMI TIR57 for the process framework.',
                    },
                    {
                        challenge: 'Keeping SBOM current with rapid software changes',
                        solution: 'Integrate SBOM generation into your CI/CD pipeline so it auto-generates with every build. Use CycloneDX or SPDX tooling that hooks into your build system. Set up automated CVE monitoring against your SBOM.',
                    },
                ],
            }}
            relatedRegulations={[
                {
                    number: 'Section 524B (FD&C Act)',
                    title: 'Ensuring Cybersecurity of Devices',
                    relationship: 'Section 524B codifies many of this guidance\'s recommendations into law for cyber devices',
                    url: '/regulations/section-524b',
                },
                {
                    number: '21 CFR Part 820',
                    title: 'Quality System Regulation',
                    relationship: 'SPDF requirements integrate with QSR design controls',
                    url: '/regulations/cfr-820',
                },
                {
                    number: '21 CFR Part 11',
                    title: 'Electronic Records; Electronic Signatures',
                    relationship: 'Cybersecurity controls support electronic records integrity requirements',
                    url: '/regulations/cfr-11',
                },
            ]}
            relatedStandards={[
                {
                    number: 'IEC 81001-5-1',
                    title: 'Security — Activities in the product life cycle',
                    relationship: 'Maps directly to SPDF requirements; FDA-recognized standard',
                    url: '/standards/iec-81001-5-1',
                },
                {
                    number: 'ANSI/AAMI SW96',
                    title: 'Medical device security — Security risk management',
                    relationship: 'FDA-recognized standard for cybersecurity risk management process',
                    url: '/standards/ansi-aami-sw96',
                },
                {
                    number: 'AAMI TIR57',
                    title: 'Principles for medical device security — Risk management',
                    relationship: 'Provides risk management framework referenced by the guidance',
                    url: '/standards/aami-tir57',
                },
                {
                    number: 'IEC 62304',
                    title: 'Medical device software — Software life cycle processes',
                    relationship: 'SPDF extends software lifecycle with security-specific activities',
                    url: '/standards/iec-62304',
                },
            ]}
            hotTake={{
                take: `This is the single most important document for any manufacturer building a connected medical device. The 2023 finalized guidance—combined with Section 524B—means cybersecurity is no longer "nice to have." It's a gate for market access.

If you submit a 510(k) without a threat model, SBOM, and post-market patch plan, expect an RTA letter. FDA reviewers are trained on this guidance now, and they will check.`,
                context: 'The FDA finalized this guidance after years of iteration. The message is clear: bolt-on security is dead. You must design security in from day one.',
                realWorldTips: [
                    'Start your SPDF documentation early—retrofitting security documentation is painful and expensive.',
                    'Your threat model must include data-flow diagrams. Block diagrams alone are not sufficient.',
                    'Don\'t use probability-based risk scoring for cybersecurity. FDA will flag it.',
                    'SBOM is not optional for cyber devices. Automate generation in your build pipeline.',
                    'Plan for coordinated vulnerability disclosure BEFORE you ship the product.',
                ],
            }}
        />
    );
}
