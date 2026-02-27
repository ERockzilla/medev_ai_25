'use client';

import ImplementationGuideTemplate from '@/components/ImplementationGuideTemplate';

export default function HIPAAForDeviceManufacturersPage() {
    return (
        <ImplementationGuideTemplate
            title="HIPAA Compliance Guide for Medical Device Manufacturers"
            subtitle="End-to-end ePHI protection from device to cloud — mapping HIPAA safeguard requirements against your connected device data architecture"
            basedOn={[
                {
                    number: 'HIPAA Security Rule',
                    title: '45 CFR Part 164 Subpart C — Security Standards for ePHI',
                    url: '/regulations/hipaa-security-rule',
                },
                {
                    number: 'NIST SP 800-66r2',
                    title: 'Implementing the HIPAA Security Rule: A Cybersecurity Resource Guide',
                    url: 'https://csrc.nist.gov/pubs/sp/800/66/r2/final',
                },
                {
                    number: 'HHS HIPAA-NIST Crosswalk',
                    title: 'HIPAA Security Rule Crosswalk to NIST Cybersecurity Framework',
                    url: 'https://www.hhs.gov/hipaa/for-professionals/security/nist-security-hipaa-crosswalk/index.html',
                },
            ]}
            overview={{
                purpose: 'This guide provides a comprehensive roadmap for achieving HIPAA Security Rule compliance as a medical device manufacturer. Unlike general HIPAA guides targeted at hospitals, this guide traces the ePHI lifecycle from the device (sensor, infusion pump, diagnostic system) through gateways, cloud backends, storage, and clinical display — mapping each HIPAA safeguard requirement to the specific component responsible for implementing it. The guide also addresses the dual compliance challenge: satisfying both HIPAA and FDA cybersecurity requirements with a unified control set.',
                audience: 'Software engineers, cloud architects, QMS managers, compliance officers, and regulatory affairs professionals at medical device companies that create, receive, maintain, or transmit ePHI.',
                prerequisites: [
                    'Understanding of your organization\'s business associate status (see /regulations/hipaa-security-rule)',
                    'System architecture documentation including all ePHI data flows',
                    'Familiarity with cloud provider shared responsibility model',
                    'Access to your cloud provider\'s HIPAA-eligible services documentation',
                ],
                estimatedTime: 'Initial compliance program: 3–6 months; ongoing maintenance and annual risk analysis updates',
            }}
            sections={[
                {
                    id: 'ephi-lifecycle',
                    title: 'Phase 1: Map the ePHI Lifecycle in Your Device Ecosystem',
                    description: 'Before implementing safeguards, you must understand exactly where ePHI exists, how it flows, and who has access. This data mapping exercise is both a HIPAA requirement (risk analysis input) and an FDA cybersecurity requirement (system architecture documentation).',
                    steps: [
                        {
                            step: 1,
                            title: 'Identify All ePHI Touchpoints',
                            description: 'Catalog every system, component, and service that creates, receives, stores, processes, or transmits ePHI. For connected medical devices, this typically includes: the device itself (sensor data linked to patient identifiers), on-device storage (flash, SD card), communication channels (BLE, Wi-Fi, cellular), gateway devices, cloud ingestion endpoints (API Gateway, IoT Hub), message queues and streaming services, databases and data lakes, analytics and reporting dashboards, backup and disaster recovery systems, logging and monitoring services, development/test environments with production data, and customer support platforms.',
                            deliverables: [
                                'ePHI inventory register (system, data type, data classification, owner)',
                                'ePHI data flow diagram (device → gateway → cloud → storage → display)',
                                'Data classification matrix (what data elements constitute ePHI in your system)',
                            ],
                            tips: [
                                'Aggregated data can become ePHI — device data combined with patient demographics at the cloud layer creates ePHI even if the device data alone is not individually identifiable',
                                'Include system-generated metadata: timestamps, device serial numbers linked to patient records, and log entries containing patient identifiers are all ePHI',
                                'Development environments with copies of production data are in scope — either de-identify before copying or apply full safeguards',
                            ],
                        },
                        {
                            step: 2,
                            title: 'Classify Data by Sensitivity and Regulatory Overlap',
                            description: 'Not all data requires the same level of protection. Classify your data into tiers: Tier 1 — ePHI subject to HIPAA (patient-identifiable health data), Tier 2 — Device telemetry that could become ePHI when linked to patient records, Tier 3 — De-identified data per HIPAA Safe Harbor (18 identifier types removed, no re-identification risk), Tier 4 — Operational data with no ePHI content. Map each data flow to its tier and identify where Tier 2 data transitions to Tier 1 (the "ePHI creation boundary").',
                            deliverables: [
                                'Data sensitivity classification scheme',
                                'Per-data-flow classification labels',
                                'ePHI creation boundary identification',
                            ],
                            tips: [
                                'The ePHI creation boundary is where your HIPAA obligations start — device-side data that is truly anonymous may not be ePHI, but once linked to a patient at the cloud layer, full safeguards apply',
                                'HIPAA applies to any ePHI format — structured database records, unstructured clinical notes, images with embedded metadata (DICOM), and even audio/video recordings',
                                'The 18 identifiers under Safe Harbor are specific: names, geographic subdivisions smaller than state, all date elements more specific than year, phone numbers, email addresses, SSN, medical record numbers, etc.',
                            ],
                        },
                    ],
                },
                {
                    id: 'administrative-safeguards',
                    title: 'Phase 2: Administrative Safeguards (§ 164.308)',
                    description: 'Administrative safeguards are the policies, procedures, and organizational controls that form the governance layer of your HIPAA program. These are the most frequently cited violations in OCR enforcement actions.',
                    steps: [
                        {
                            step: 3,
                            title: 'Conduct the Security Risk Analysis',
                            description: 'The risk analysis under § 164.308(a)(1)(ii)(A) is the foundational HIPAA compliance activity. Identify all ePHI systems (from Phase 1), identify reasonably anticipated threats to each system (unauthorized access, data breach, ransomware, insider threat, device theft, misconfiguration), assess current safeguards, determine the likelihood of threat occurrence, assess the potential impact, and assign a risk rating. Document everything — OCR\'s #1 finding in enforcement actions is "no risk analysis" or "risk analysis that doesn\'t cover all ePHI systems."',
                            deliverables: [
                                'Complete HIPAA Security Risk Analysis report',
                                'Risk register with likelihood, impact, and risk level per threat',
                                'Risk mitigation plan with responsible parties and timelines',
                            ],
                            tips: [
                                'Use the HHS SRA Tool or NIST SP 800-66r2 methodology as your framework — these are OCR-recognized approaches',
                                'The risk analysis must be updated annually and whenever significant changes occur (new systems, new data flows, security incidents)',
                                'Your HIPAA risk analysis and FDA cybersecurity risk assessment share significant overlap — structure them to reduce duplication. See /guides/cybersecurity-risk-assessment for the FDA side',
                            ],
                        },
                        {
                            step: 4,
                            title: 'Assign Security Responsibility and Workforce Security',
                            description: 'Designate a HIPAA Security Officer (§ 164.308(a)(2)) responsible for developing and implementing security policies. Establish workforce security procedures: authorization and supervision (§ 164.308(a)(3)), clearance procedures for ePHI access, and termination procedures ensuring access revocation upon separation. Ensure all workforce members — employees, contractors, temporary staff — who access ePHI are covered.',
                            deliverables: [
                                'HIPAA Security Officer appointment documentation',
                                'Workforce authorization procedure',
                                'Access provisioning and termination procedure',
                            ],
                            tips: [
                                'The HIPAA Security Officer can be the same person as your FDA cybersecurity lead — the skill sets overlap significantly',
                                '"Workforce" under HIPAA includes employees, volunteers, trainees, and contractors — anyone under your direct control',
                                'Termination procedures must revoke all ePHI access within 24 hours of separation — automated de-provisioning is strongly recommended',
                            ],
                        },
                        {
                            step: 5,
                            title: 'Implement Security Awareness Training',
                            description: 'Train all workforce members on HIPAA awareness (§ 164.308(a)(5)): security reminders, malicious software protection, log-in monitoring, and password management. Training must be role-specific: developers need secure coding training, operations staff need incident response training, and all staff need ePHI handling procedures. Document all training records and retain for six years.',
                            deliverables: [
                                'Security awareness training program',
                                'Role-based training curriculum',
                                'Training records with completion tracking',
                            ],
                            tips: [
                                'Conduct phishing simulations — social engineering is the #1 attack vector for healthcare data breaches',
                                'Include incident reporting in training: employees must know how to report a suspected breach and to whom',
                                'Annual refresher training is a best practice — OCR looks for evidence of ongoing training, not one-time events',
                            ],
                        },
                    ],
                },
                {
                    id: 'technical-safeguards',
                    title: 'Phase 3: Technical Safeguards (§ 164.312)',
                    description: 'Technical safeguards are the technology-based controls that protect ePHI. These have the most direct overlap with FDA cybersecurity requirements — implementing them well satisfies both compliance obligations.',
                    steps: [
                        {
                            step: 6,
                            title: 'Implement Access Controls (§ 164.312(a))',
                            description: 'Unique User Identification (Required): every user accessing ePHI must have a unique identifier — no shared accounts. Emergency Access Procedure (Required): define how authorized personnel access ePHI during emergencies. Automatic Logoff (Addressable): implement session timeouts for all systems accessing ePHI. Encryption and Decryption (Addressable): encrypt ePHI at rest using AES-256 or equivalent. Implement RBAC (Role-Based Access Control) mapped to clinical roles and job functions.',
                            deliverables: [
                                'Access control policy with RBAC matrix',
                                'Session management configuration documentation',
                                'Emergency access procedure',
                                'Encryption implementation documentation',
                            ],
                            tips: [
                                'RBAC roles should follow the Minimum Necessary principle — each role accesses only the ePHI elements required for that job function',
                                'Use your cloud provider\'s IAM service (AWS IAM, Azure AD, GCP IAM) as the foundation, but application-layer access controls are your responsibility',
                                'Emergency access must be logged and reviewed — it bypasses normal controls and is a high audit risk',
                            ],
                        },
                        {
                            step: 7,
                            title: 'Implement Audit Controls (§ 164.312(b))',
                            description: 'Record and examine all activity in systems containing ePHI. Log: user authentication events (successful and failed), ePHI access events (who accessed what, when), ePHI modification events (creates, updates, deletes), administrative actions (access provisioning, configuration changes), and system events (startups, shutdowns, errors). Retain logs for six years (HIPAA documentation requirement) and protect logs from tampering.',
                            deliverables: [
                                'Audit logging policy and configuration',
                                'Log retention and protection procedures',
                                'Log review schedule and procedures',
                            ],
                            tips: [
                                'Use centralized logging (CloudWatch, Azure Monitor, GCP Cloud Logging) with WORM (Write Once Read Many) storage for tamper protection',
                                'Implement automated log analysis/alerting for anomalous ePHI access patterns — manual review alone is insufficient at scale',
                                'Your FDA Section 524B audit logging requirements and HIPAA audit controls are nearly identical — implement once, document for both',
                            ],
                        },
                        {
                            step: 8,
                            title: 'Implement Integrity and Transmission Security (§ 164.312(c)(e))',
                            description: 'Integrity Controls (Addressable): implement mechanisms to authenticate ePHI and ensure it has not been altered or destroyed in an unauthorized manner. Use digital signatures, checksums, or HMAC for data integrity verification. Transmission Security (Addressable): implement technical security measures to guard against unauthorized access to ePHI transmitted over electronic communications networks. Minimum: TLS 1.2 (TLS 1.3 preferred) for all ePHI in transit, certificate pinning for device-to-cloud communication, and VPN or mutual TLS for internal service communication.',
                            deliverables: [
                                'Data integrity policy and implementation',
                                'Transmission encryption configuration documentation',
                                'Certificate management procedure',
                            ],
                            tips: [
                                'End-to-end encryption: encrypt ePHI at the device, maintain encryption through cloud ingestion, and decrypt only at the point of authorized use',
                                'Certificate pinning prevents MITM attacks on device-to-cloud channels — essential for connected medical devices',
                                'Document "encryption at rest + encryption in transit" coverage map showing which components and data flows are protected',
                            ],
                        },
                    ],
                },
                {
                    id: 'physical-baa',
                    title: 'Phase 4: Physical Safeguards & BAA Management',
                    description: 'Physical safeguards protect the physical systems and facilities containing ePHI. For cloud-first device companies, the cloud provider handles data center physical security, but your offices, development environments, and device fielding locations remain your responsibility.',
                    steps: [
                        {
                            step: 9,
                            title: 'Implement Physical Safeguards (§ 164.310)',
                            description: 'Facility Access Controls (Addressable): limit physical access to facilities and equipment containing ePHI. For device manufacturers, this means: securing server rooms and network closets, access-controlled development areas where ePHI test data is used, visitor management, and workstation positioning (screens not visible to unauthorized individuals). Device and Media Controls (Addressable): procedures for disposal of media containing ePHI (hard drive destruction, secure erase per NIST SP 800-88), procedures for media re-use, and hardware/equipment accountability tracking.',
                            deliverables: [
                                'Facility security plan',
                                'Media disposal and re-use procedures',
                                'Workstation use and security policy',
                            ],
                            tips: [
                                'For cloud-hosted systems, the CSP handles data center physical security (covered under their BAA) — your responsibility is your offices, labs, and employee devices',
                                'Laptops with ePHI access must have full-disk encryption, screen lock, and remote wipe capability',
                                'Returned/RMA medical devices may contain ePHI — establish sanitization procedures before refurbishment or disposal',
                            ],
                        },
                        {
                            step: 10,
                            title: 'Establish BAA Management Program',
                            description: 'Inventory all vendors accessing ePHI, execute BAAs with each, and establish ongoing monitoring. For cloud providers: activate the HIPAA-eligible service tier (not all services from a cloud provider are HIPAA-eligible), accept the provider BAA, and configure services within the HIPAA-eligible scope. For other vendors: use the HHS sample BAA provisions as a template, customize for your data flows, and negotiate. Track all BAAs in a central register with execution dates, renewal dates, and scope.',
                            deliverables: [
                                'Vendor ePHI inventory and BAA requirements matrix',
                                'Executed BAAs for all vendors accessing ePHI',
                                'BAA tracking register',
                                'Annual BAA review procedure',
                            ],
                            tips: [
                                'AWS: Only certain services are HIPAA-eligible — use the AWS HIPAA-eligible services list. Not all AWS services can be used with ePHI, even with a BAA',
                                'Azure: Similar restrictions apply — enable "HIPAA/HITRUST" compliance in the Azure Trust Center. GCP: Configure your project with the Cloud Healthcare API and GCP HIPAA-eligible services',
                                'See /regulations/hipaa-baa for detailed BAA provision requirements and cloud provider specifics',
                            ],
                        },
                    ],
                },
                {
                    id: 'fda-integration',
                    title: 'Phase 5: FDA-HIPAA Dual Compliance Strategy',
                    description: 'Medical device manufacturers face overlapping compliance requirements from FDA and HIPAA. This phase maps the overlap and establishes a unified control framework to avoid redundant effort.',
                    steps: [
                        {
                            step: 11,
                            title: 'Build the FDA-HIPAA Control Overlap Matrix',
                            description: 'Map controls that satisfy both FDA cybersecurity guidance and HIPAA Security Rule requirements. Key overlaps: encryption at rest and in transit (FDA SPDF requirement + HIPAA § 164.312(a)(2)(iv) and § 164.312(e)(1)), access control and authentication (FDA + HIPAA § 164.312(a)), audit logging (FDA + HIPAA § 164.312(b)), vulnerability management and patching (FDA Section 524B + HIPAA § 164.308(a)(1)), security incident procedures (FDA + HIPAA § 164.308(a)(6)), and risk analysis (FDA cybersecurity risk assessment + HIPAA § 164.308(a)(1)).',
                            deliverables: [
                                'FDA-HIPAA control overlap matrix',
                                'Unified control set with dual-compliance traceability',
                                'Gap analysis identifying requirements unique to each framework',
                            ],
                            tips: [
                                'Use the Cybersecurity Framework Mapper tool at /tools/cybersecurity-framework-mapper to visualize the overlap',
                                'A single control implementation can satisfy both frameworks — document this traceability to avoid duplicating audit evidence',
                                'FDA-unique requirements: SBOM, threat modeling, SPDF. HIPAA-unique requirements: BAAs, breach notification to individuals, workforce training documentation',
                            ],
                        },
                        {
                            step: 12,
                            title: 'Establish Unified Compliance Documentation',
                            description: 'Create a documentation structure that serves both FDA submissions and HIPAA audit readiness. The FDA cybersecurity risk assessment and HIPAA security risk analysis share approximately 70% overlap — structure them as companion documents with cross-references rather than redundant standalone files. Security test results (SAST, pen testing, fuzz testing) serve as both FDA verification evidence and HIPAA evaluation evidence (§ 164.308(a)(8)).',
                            deliverables: [
                                'Unified compliance documentation architecture',
                                'Cross-reference matrix: FDA submission document → HIPAA audit evidence',
                            ],
                            tips: [
                                'Store compliance evidence in a single controlled repository (eQMS) and link to both FDA DHF and HIPAA documentation',
                                'When creating new security controls, write the requirement to reference both FDA guidance and HIPAA CFR section — this demonstrates intentional dual compliance',
                                'Annual HIPAA risk analysis updates can be timed with your FDA post-market cybersecurity reviews for efficiency',
                            ],
                        },
                    ],
                },
            ]}
            checklists={[
                {
                    title: 'ePHI Mapping Checklist',
                    items: [
                        'All ePHI touchpoints inventoried (device, cloud, vendors)',
                        'ePHI data flow diagram complete (device → cloud → storage → display)',
                        'Data classification scheme established with ePHI creation boundary identified',
                        'Development and test environments assessed for ePHI presence',
                        'All vendor relationships evaluated for ePHI access',
                    ],
                },
                {
                    title: 'Administrative Safeguards Checklist',
                    items: [
                        'Security risk analysis completed and documented',
                        'HIPAA Security Officer designated',
                        'Workforce authorization and termination procedures implemented',
                        'Security awareness training conducted for all workforce members',
                        'Security incident response procedures established',
                        'Contingency plan (backup, disaster recovery, emergency mode) documented and tested',
                    ],
                },
                {
                    title: 'Technical Safeguards Checklist',
                    items: [
                        'Unique user identification enforced (no shared accounts)',
                        'RBAC implemented with Minimum Necessary principle',
                        'ePHI encrypted at rest (AES-256)',
                        'ePHI encrypted in transit (TLS 1.2+/1.3)',
                        'Audit logging implemented for all ePHI access and modification events',
                        'Log retention configured for six years with tamper protection',
                        'Data integrity verification mechanisms implemented',
                        'Automatic logoff configured for all ePHI-accessing systems',
                    ],
                },
                {
                    title: 'BAA and Dual Compliance Checklist',
                    items: [
                        'BAAs executed with all vendors accessing ePHI',
                        'Cloud provider BAA activated with HIPAA-eligible services identified',
                        'BAA tracking register established with renewal dates',
                        'FDA-HIPAA control overlap matrix completed',
                        'Unified compliance documentation structure established',
                    ],
                },
            ]}
            commonPitfalls={[
                {
                    pitfall: 'HIPAA compliance scoped only to the cloud backend, not the device',
                    solution: 'If the medical device creates, stores, or transmits ePHI (even temporarily), HIPAA safeguards apply to the device. On-device encryption, access controls, and secure erasure are HIPAA requirements in addition to FDA requirements. Scope your HIPAA program to include the device itself, not just the cloud.',
                },
                {
                    pitfall: 'Treating HIPAA risk analysis as a one-time project',
                    solution: 'The Security Rule requires ongoing risk management (§ 164.308(a)(1)(ii)(B)). The risk analysis must be updated annually, when new systems are deployed, when significant changes occur, and after security incidents. OCR has penalized organizations for risk analyses that were completed once and never updated.',
                },
                {
                    pitfall: 'Assuming de-identification makes HIPAA irrelevant',
                    solution: 'De-identification under HIPAA requires meeting either the Safe Harbor method (remove all 18 identifier types) or Expert Determination (statistical analysis by a qualified expert). Partial de-identification or pseudonymization does NOT satisfy HIPAA requirements — if re-identification is possible, the data is still ePHI.',
                },
                {
                    pitfall: 'Separate compliance silos for FDA and HIPAA',
                    solution: 'Building separate compliance programs for FDA cybersecurity and HIPAA wastes resources and creates inconsistencies. Map the overlap (~70% of controls), implement once with dual traceability, and document for both frameworks using a unified control set.',
                },
            ]}
        />
    );
}
