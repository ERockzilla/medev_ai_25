'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function Section524BPage() {
    return (
        <RegulationPageTemplate
            regulation={{
                number: 'Section 524B (FD&C Act)',
                title: 'Ensuring Cybersecurity of Devices',
                organization: 'FDA',
                effectiveDate: 'March 29, 2023',
                category: 'cybersecurity',
                regulationUrl: 'https://www.congress.gov/bill/117th-congress/house-bill/2617',
                guidanceUrl: 'https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity',
            }}
            overview={{
                scope: 'Section 524B of the Federal Food, Drug, and Cosmetic (FD&C) Act was enacted as part of the Consolidated Appropriations Act (2023 Omnibus) and codifies cybersecurity requirements for medical devices. It grants FDA explicit statutory authority to require cybersecurity documentation as part of premarket submissions. The section applies to "cyber devices" — devices that include software, connect to the internet, or contain technology considered to be vulnerable to cybersecurity threats.',
                applicability: 'Section 524B applies to any person submitting a premarket application (510(k), De Novo, PMA, HDE, or PDP) for a "cyber device." A cyber device is defined as a device that: (1) includes software validated, installed, or authorized by the sponsor as a device or in a device, (2) has the ability to connect to the internet, and (3) contains any such technological characteristics validated, installed, or authorized by the sponsor that could be vulnerable to cybersecurity threats. This broad definition covers most modern medical devices with software.',
                whyItMatters: 'Section 524B is the legal teeth behind FDA\'s cybersecurity enforcement. Before this law, FDA cybersecurity guidance was non-binding — manufacturers could technically ignore it. Now, cybersecurity documentation is a statutory submission requirement. FDA can refuse to accept (RTA) submissions that lack the required cybersecurity information. This is the first time cybersecurity has been written into U.S. law for medical devices, and it signals that Congress considers device cybersecurity a matter of public health and national security.',
                keyConcepts: [
                    '"Cyber device" statutory definition and determination criteria',
                    'Mandatory Software Bill of Materials (SBOM) submission',
                    'Required plans to monitor, identify, and address post-market vulnerabilities',
                    'Required plans for coordinated vulnerability disclosure',
                    'Demonstration of "reasonable assurance" of cybersecurity',
                    'FDA Refuse-to-Accept (RTA) authority for non-compliant submissions',
                    'Statutory requirement for timely security patches and updates',
                    'Manufacturer obligation for ongoing cybersecurity monitoring',
                    'Transition period and enforcement timeline for existing devices',
                ],
            }}
            keyRequirements={{
                title: 'Statutory Requirements',
                sections: [
                    {
                        title: 'Cyber Device Determination',
                        description: 'The first step is determining whether a device meets the statutory definition of a "cyber device." The three-prong test requires that the device: (1) includes software, (2) has internet connectivity capability, and (3) contains technology that could be vulnerable to cybersecurity threats. Most modern connected medical devices will meet this definition.',
                    },
                    {
                        title: 'Software Bill of Materials (SBOM)',
                        description: 'Section 524B requires every premarket submission for a cyber device to include a Software Bill of Materials. The SBOM must list all software components, including commercial, open-source, and off-the-shelf components. This is a statutory mandate — not a recommendation. The SBOM must be machine-readable and meet NTIA minimum element requirements.',
                    },
                    {
                        title: 'Post-Market Vulnerability Management Plan',
                        description: 'Manufacturers must submit a plan to monitor, identify, and address cybersecurity vulnerabilities and exploits in a "reasonably justified regular cycle." This plan must include: processes for monitoring new vulnerabilities, timelines for patch deployment, out-of-cycle update procedures for critical vulnerabilities, and procedures for notifying users of security updates.',
                    },
                    {
                        title: 'Coordinated Vulnerability Disclosure',
                        description: 'Manufacturers must submit a plan for coordinated vulnerability disclosure, including: a process for receiving vulnerability reports from security researchers, timeline commitments for acknowledgment and remediation, public disclosure procedures, and coordination with CISA, FDA, and ISAOs.',
                    },
                    {
                        title: 'Reasonable Assurance of Cybersecurity',
                        description: 'Manufacturers must demonstrate that the device provides a "reasonable assurance" of cybersecurity. This is evaluated based on the device\'s design, testing, and documentation — including the SPDF process, threat model, risk assessment, security testing, and post-market plans described in the FDA cybersecurity guidance.',
                    },
                    {
                        title: 'Patch and Update Capability',
                        description: 'Cyber devices must be designed to allow post-market security updates and patches. The manufacturer must demonstrate technical capability to deliver updates and document the process for deploying them. Devices that cannot receive security updates face heightened regulatory scrutiny.',
                    },
                ],
            }}
            complianceGuide={{
                title: 'Compliance Roadmap',
                steps: [
                    {
                        step: 1,
                        title: 'Assess Cyber Device Status',
                        description: 'Determine if your device meets the statutory definition of a "cyber device" using the three-prong test. Use the Cyber Device Classification tool on medev.ai for a guided assessment. Document your determination rationale.',
                    },
                    {
                        step: 2,
                        title: 'Integrate SBOM Generation into Build Process',
                        description: 'Implement automated SBOM generation in your software build pipeline. Choose a format (SPDX or CycloneDX) and tooling (Syft, FOSSA, Snyk, or similar). Ensure the SBOM captures all dependencies, including transitive dependencies.',
                    },
                    {
                        step: 3,
                        title: 'Establish Vulnerability Monitoring',
                        description: 'Set up continuous vulnerability monitoring by linking your SBOM to vulnerability databases (NVD, CVE). Implement automated alerting for newly discovered vulnerabilities in your device components. Define response timelines by severity level.',
                    },
                    {
                        step: 4,
                        title: 'Create Coordinated Disclosure Procedure',
                        description: 'Publish a vulnerability disclosure policy (VDP) including: security contact information (security@yourcompany.com), expected response timelines, safe harbor language for good-faith researchers, and coordination procedures with FDA and CISA.',
                    },
                    {
                        step: 5,
                        title: 'Design Patch/Update Architecture',
                        description: 'Ensure your device architecture supports secure over-the-air or manual security updates. Implement secure boot, code signing, and rollback capabilities. Document your update deployment process and validation procedures.',
                    },
                    {
                        step: 6,
                        title: 'Document Reasonable Assurance Evidence',
                        description: 'Compile evidence of cybersecurity assurance including: SPDF documentation, threat model, security test results, SBOM with known vulnerability analysis, post-market plan, and coordinated disclosure plan. Organize per the eSTAR cybersecurity section.',
                    },
                ],
                commonChallenges: [
                    {
                        challenge: 'Determining if a device is a "cyber device"',
                        solution: 'If your device has software AND can connect to any network (Wi-Fi, Bluetooth, cellular, Ethernet), it is very likely a cyber device. The definition is intentionally broad. When in doubt, treat your device as a cyber device.',
                    },
                    {
                        challenge: 'Legacy devices that cannot receive updates',
                        solution: 'For devices already on the market, create a plan to either: (a) add update capability via a design change, or (b) document compensating controls for the healthcare environment. New submissions for devices without update capability face significant risk of RTA.',
                    },
                    {
                        challenge: 'Open-source component tracking for SBOM',
                        solution: 'Use Software Composition Analysis (SCA) tools to automatically identify all open-source components, including transitive dependencies. Manual tracking is insufficient for compliance — automation is essential for accuracy and ongoing maintenance.',
                    },
                ],
            }}
            relatedRegulations={[
                {
                    number: 'FDA Cybersecurity Guidance',
                    title: 'Cybersecurity in Medical Devices: Quality System Considerations and Content of Premarket Submissions',
                    relationship: 'The finalized guidance provides the detailed implementation expectations for Section 524B requirements',
                    url: '/regulations/fda-cybersecurity-guidance',
                },
                {
                    number: '21 CFR Part 820',
                    title: 'Quality System Regulation',
                    relationship: 'Section 524B requirements integrate with QSR design controls and post-market processes',
                    url: '/regulations/cfr-820',
                },
            ]}
            relatedStandards={[
                {
                    number: 'IEC 81001-5-1',
                    title: 'Security — Activities in the product life cycle',
                    relationship: 'Provides the framework for SPDF implementation required by 524B',
                    url: '/standards/iec-81001-5-1',
                },
                {
                    number: 'ANSI/AAMI SW96',
                    title: 'Medical device security — Security risk management',
                    relationship: 'FDA-recognized standard for cybersecurity risk management process',
                    url: '/standards/ansi-aami-sw96',
                },
                {
                    number: 'IEC 62304',
                    title: 'Medical device software — Software life cycle processes',
                    relationship: 'Software lifecycle integrates with cybersecurity requirements from 524B',
                    url: '/standards/iec-62304',
                },
            ]}
            hotTake={{
                take: `Section 524B is a landmark. For the first time ever, cybersecurity for medical devices is written into U.S. law — not guidance, not recommendations, LAW.

This means FDA doesn't have to politely suggest you include an SBOM. They can legally refuse your submission if you don't. If your regulatory team hasn't read this statute, they're already behind.`,
                context: 'Congress enacted 524B as part of the 2023 Omnibus bill after years of voluntary cybersecurity guidance proved insufficient. The healthcare sector remains one of the most targeted industries for cyberattacks.',
                realWorldTips: [
                    'The "cyber device" definition is deliberately broad. If in doubt, assume your device qualifies.',
                    'Start SBOM generation NOW, even if your next submission is months away. It takes time to get right.',
                    'Your coordinated disclosure plan needs to exist before someone finds a vulnerability — not after.',
                    'Patch capability must be designed into the device architecture. It cannot be added later.',
                    '"Reasonable assurance" is the legal standard — document everything to meet this bar.',
                ],
            }}
        />
    );
}
