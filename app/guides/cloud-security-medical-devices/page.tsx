'use client';

import ImplementationGuideTemplate from '@/components/ImplementationGuideTemplate';

export default function CloudSecurityMedicalDevicesPage() {
    return (
        <ImplementationGuideTemplate
            title="Cloud Security for Connected Medical Device Backends"
            subtitle="Reference architecture, shared responsibility, and security controls for building cloud backends that satisfy FDA, HIPAA, and SOC 2 requirements simultaneously"
            basedOn={[
                {
                    number: 'FDA Cybersecurity Guidance',
                    title: 'Cybersecurity in Medical Devices: Quality System Considerations',
                    url: '/regulations/fda-cybersecurity-guidance',
                },
                {
                    number: 'HIPAA Security Rule',
                    title: '45 CFR Part 164 Subpart C — Technical Safeguards',
                    url: '/regulations/hipaa-security-rule',
                },
                {
                    number: 'NIST SP 800-210',
                    title: 'General Access Control Guidance for Cloud Systems',
                    url: 'https://csrc.nist.gov/pubs/sp/800/210/final',
                },
            ]}
            overview={{
                purpose: 'Connected medical devices increasingly rely on cloud backends for data storage, analytics, firmware updates, and remote monitoring. This guide provides a security reference architecture for medical device cloud backends across AWS, Azure, and GCP — covering VPC design, network segmentation, IAM, encryption, logging, container security, and disaster recovery. Every control is mapped to the specific FDA, HIPAA, or SOC 2 requirement it satisfies, enabling a unified compliance approach.',
                audience: 'Cloud architects, backend engineers, DevOps/SRE engineers, and infrastructure teams at medical device companies building cloud-connected platforms.',
                prerequisites: [
                    'Cloud provider account with production workloads (AWS, Azure, or GCP)',
                    'Understanding of your device\'s cloud integration architecture',
                    'BAA executed with your cloud provider (see /regulations/hipaa-baa)',
                    'Familiarity with IaC tools (Terraform, CloudFormation, ARM Templates)',
                ],
                estimatedTime: 'Initial architecture hardening: 4–8 weeks; ongoing security operations and monitoring',
            }}
            sections={[
                {
                    id: 'shared-responsibility',
                    title: 'Phase 1: Understand the Shared Responsibility Model',
                    description: 'The single most important concept in cloud security: your cloud provider secures the infrastructure, you secure everything you build on it. Every cloud security failure in healthcare traces back to a misunderstanding of where provider responsibility ends and yours begins.',
                    steps: [
                        {
                            step: 1,
                            title: 'Map Provider vs. Customer Responsibilities',
                            description: 'AWS, Azure, and GCP all publish shared responsibility models. For IaaS (EC2, VMs): the provider handles physical security, hypervisor, and network infrastructure; you handle OS patching, application security, data encryption, access controls, and network configuration. For PaaS (RDS, App Service, Cloud Run): the provider additionally handles OS patching and platform maintenance; you handle application code, data, access, and configuration. For SaaS (S3, Blob Storage, Cloud Storage): the provider handles almost everything except data classification, access policies, and encryption key management. Document which services you use and the corresponding responsibility split.',
                            deliverables: [
                                'Shared responsibility mapping per cloud service used',
                                'Customer responsibility checklist for each service',
                            ],
                            tips: [
                                'The shared responsibility model shifts as you move from IaaS → PaaS → SaaS — prefer managed services (PaaS/SaaS) to reduce your security surface area',
                                'FDA and HIPAA hold the device manufacturer responsible for the entire stack — "it\'s the cloud provider\'s fault" is not a valid defense in an enforcement action',
                                'Document the shared responsibility mapping as part of your HIPAA risk analysis and FDA threat model — auditors and reviewers expect this',
                            ],
                        },
                        {
                            step: 2,
                            title: 'Select HIPAA-Eligible Services',
                            description: 'Not all cloud services from a provider are HIPAA-eligible — even with a signed BAA. Each provider maintains a list of services that may be used with ePHI: AWS HIPAA Eligible Services (updated monthly), Azure HIPAA/HITRUST eligible services, and GCP Healthcare-specific services. Any service not on the list should not process, store, or transmit ePHI. Common mistakes: using a non-eligible logging service for ePHI audit trails, routing ePHI through a non-eligible message queue, or caching ePHI in a non-eligible CDN.',
                            deliverables: [
                                'Approved services list (HIPAA-eligible services used in your architecture)',
                                'Architecture diagram annotated with eligible/non-eligible services',
                            ],
                            tips: [
                                'AWS: Check the AWS HIPAA Eligible Services list in the AWS Artifact portal. Services are added regularly.',
                                'Azure: Check the Microsoft compliance offerings documentation. Azure Government may have additional certifications.',
                                'GCP: Healthcare-specific API (Cloud Healthcare API) is the primary HIPAA-eligible health data service; check the GCP compliance page for the full list',
                            ],
                        },
                    ],
                },
                {
                    id: 'network-architecture',
                    title: 'Phase 2: Network Security Architecture',
                    description: 'Network segmentation and perimeter defense form the first layer of cloud security. A properly segmented network limits blast radius, enforces least-privilege communication, and creates the defense-in-depth that FDA and HIPAA both require.',
                    steps: [
                        {
                            step: 3,
                            title: 'Design VPC/VNet Architecture with Segmentation',
                            description: 'Create a multi-tier VPC architecture: Public subnet (internet-facing): API Gateway, Load Balancer, WAF — never place databases or application servers here. Private subnet (application tier): compute instances, containers, serverless functions — no direct internet access, uses NAT gateway for outbound. Data subnet (isolated): databases, data stores — no internet access, accessible only from the private subnet. Management subnet: bastion hosts, CI/CD agents, monitoring — isolated with strict access controls. Implement network ACLs and security groups following deny-by-default, allow-by-exception.',
                            deliverables: [
                                'VPC architecture diagram with subnet design',
                                'Security group and NACL rule specifications',
                                'Network segmentation rationale document',
                            ],
                            tips: [
                                'Use separate VPCs for production, staging, and development — never share a VPC across environments',
                                'VPC Flow Logs (AWS), NSG Flow Logs (Azure), or VPC Flow Logs (GCP) should be enabled on all subnets for security monitoring and forensics',
                                'Consider AWS PrivateLink, Azure Private Link, or GCP Private Service Connect for service-to-service communication without internet traversal',
                            ],
                        },
                        {
                            step: 4,
                            title: 'Implement API Gateway and WAF Protection',
                            description: 'All device-to-cloud and client-to-cloud communication should pass through an API Gateway with a Web Application Firewall (WAF). Configure: rate limiting (prevent DDoS and brute-force attacks), request validation (schema enforcement, payload size limits), authentication at the gateway level (API keys, OAuth 2.0, mutual TLS), WAF rules for OWASP Top 10 (SQL injection, XSS, SSRF), and geo-blocking (if your device only operates in certain regions). API Gateway also provides centralized audit logging for all API calls.',
                            deliverables: [
                                'API Gateway configuration specification',
                                'WAF rule set documentation',
                                'Rate limiting and throttling policies',
                            ],
                            tips: [
                                'Mutual TLS (mTLS) between device and API Gateway is the gold standard for device authentication — every device gets a unique client certificate',
                                'WAF managed rule sets (AWS Managed Rules, Azure Managed Rules) provide baseline protection — customize with application-specific rules',
                                'Log all API Gateway requests to your centralized logging platform — this satisfies both HIPAA audit controls and FDA audit logging requirements',
                            ],
                        },
                    ],
                },
                {
                    id: 'iam-encryption',
                    title: 'Phase 3: Identity, Access Management, and Encryption',
                    description: 'IAM and encryption are the controls most heavily scrutinized by both HIPAA auditors and FDA reviewers. This phase establishes the access control and data protection framework.',
                    steps: [
                        {
                            step: 5,
                            title: 'Implement Least-Privilege IAM',
                            description: 'Design IAM following the principle of least privilege: no human users have standing access to production — use just-in-time (JIT) access or break-glass procedures. Service accounts have only the permissions required for their specific function. Use IAM roles (not long-lived credentials) for all service-to-service authentication. Implement MFA for all human access to cloud consoles and CLI. Conduct quarterly access reviews and revoke unused permissions. Separate IAM policies for ePHI-containing resources.',
                            deliverables: [
                                'IAM policy documentation',
                                'Service account inventory with permission scope',
                                'Access review procedure and schedule',
                            ],
                            tips: [
                                'AWS: Use AWS Organizations with SCPs (Service Control Policies) to enforce guardrails across all accounts',
                                'Azure: Use Azure PIM (Privileged Identity Management) for JIT access to sensitive roles',
                                'GCP: Use IAM Conditions and VPC Service Controls to restrict access based on context',
                            ],
                        },
                        {
                            step: 6,
                            title: 'Implement End-to-End Encryption',
                            description: 'Encryption at rest: all data stores containing ePHI encrypted using AES-256 with keys managed by the cloud KMS (AWS KMS, Azure Key Vault, GCP Cloud KMS). Use customer-managed keys (CMKs) rather than provider-managed keys for audit control. Encryption in transit: TLS 1.3 for all external communication, TLS 1.2 minimum for internal service-to-service. Certificate pinning for device-to-cloud channels. Consider application-level encryption for ultra-sensitive fields (patient identifiers, diagnostic results) in addition to storage-level encryption.',
                            deliverables: [
                                'Encryption configuration matrix (per service, per data type)',
                                'Key management procedure (rotation, access, backup)',
                                'Certificate management procedure (issuance, rotation, revocation)',
                            ],
                            tips: [
                                'Customer-managed KMS keys give you audit trail control — you can see every key access event in CloudTrail/Azure Monitor/Cloud Audit Logs',
                                'Automatic key rotation: AWS KMS supports annual automatic rotation; configure it and document it for HIPAA and SOC 2',
                                'For the deepest protection, implement envelope encryption: encrypt data with a data encryption key (DEK), encrypt the DEK with the KMS key (KEK)',
                            ],
                        },
                    ],
                },
                {
                    id: 'monitoring-dr',
                    title: 'Phase 4: Monitoring, Incident Response, and Disaster Recovery',
                    description: 'Continuous monitoring and robust incident response are requirements across all three frameworks (FDA, HIPAA, SOC 2). This phase establishes the operational security capabilities.',
                    steps: [
                        {
                            step: 7,
                            title: 'Implement Centralized Security Monitoring',
                            description: 'Deploy a centralized security monitoring platform: aggregate logs from all cloud services, applications, and devices. Enable cloud-native security services: AWS GuardDuty/Security Hub, Azure Sentinel/Defender for Cloud, or GCP Security Command Center. Configure alerts for: unauthorized access attempts, privilege escalation, ePHI access anomalies, configuration changes to security controls, and unusual data exfiltration patterns. Retain security logs for a minimum of six years (HIPAA requirement) with WORM protection.',
                            deliverables: [
                                'Security monitoring architecture document',
                                'Alert rules and escalation procedures',
                                'Log retention policy with WORM configuration',
                            ],
                            tips: [
                                'SIEM (Security Information and Event Management) is expected for SOC 2 — use your cloud-native SIEM or a third-party platform (Splunk, Elastic, Datadog Security)',
                                'Create dashboards for real-time security posture visibility — auditors and reviewers appreciate visual evidence of active monitoring',
                                'Correlate device telemetry with cloud security events — if a device behaves anomalously AND API authentication patterns change, this signals a compromised device',
                            ],
                        },
                        {
                            step: 8,
                            title: 'Design Disaster Recovery for Patient-Critical Systems',
                            description: 'Define Recovery Time Objective (RTO) and Recovery Point Objective (RPO) for each system tier. Patient-critical systems (therapy management, vital monitoring): RTO ≤ 1 hour, RPO ≤ 15 minutes. Clinical support systems (analytics, reporting): RTO ≤ 4 hours, RPO ≤ 1 hour. Administrative systems: RTO ≤ 24 hours, RPO ≤ 24 hours. Implement: multi-AZ deployment for high availability, cross-region standby for disaster recovery, automated failover with health checks, regular DR testing (at least annually), and documented DR procedures.',
                            deliverables: [
                                'Business continuity and disaster recovery plan',
                                'RTO/RPO definitions per system tier',
                                'DR test results and lessons learned',
                            ],
                            tips: [
                                'HIPAA § 164.308(a)(7) requires a contingency plan including data backup, disaster recovery, and emergency mode operations — DR is not optional',
                                'SOC 2 Availability criteria require documented DR plans with regular testing — annual tests are minimum; quarterly for critical systems',
                                'Multi-region redundancy and testing can be expensive — balance cost against RTO/RPO requirements. For many device manufacturers, multi-AZ within a single region is sufficient',
                            ],
                        },
                    ],
                },
            ]}
            checklists={[
                {
                    title: 'Cloud Architecture Checklist',
                    items: [
                        'Shared responsibility model documented for all cloud services used',
                        'Only HIPAA-eligible services used for ePHI workloads',
                        'Multi-tier VPC architecture with public, private, data, and management subnets',
                        'Security groups and NACLs follow deny-by-default, allow-by-exception',
                        'API Gateway with WAF protecting all external-facing endpoints',
                        'VPC Flow Logs enabled on all subnets',
                    ],
                },
                {
                    title: 'IAM & Encryption Checklist',
                    items: [
                        'Least-privilege IAM with no standing production access',
                        'MFA enforced for all human cloud access',
                        'Service accounts use roles, not long-lived credentials',
                        'Quarterly access reviews conducted and documented',
                        'AES-256 encryption at rest with customer-managed KMS keys',
                        'TLS 1.3 (or 1.2 minimum) for all data in transit',
                        'Key rotation configured and documented',
                    ],
                },
                {
                    title: 'Monitoring & DR Checklist',
                    items: [
                        'Centralized logging with SIEM integration',
                        'Security alerts configured for anomalous access and configuration changes',
                        'Log retention configured for six years with WORM protection',
                        'RTO/RPO defined per system tier',
                        'Multi-AZ deployment with automated failover for critical systems',
                        'DR plan documented and tested annually (minimum)',
                        'Incident response procedures established with escalation matrix',
                    ],
                },
            ]}
            commonPitfalls={[
                {
                    pitfall: 'Using non-HIPAA-eligible cloud services for ePHI workloads',
                    solution: 'Not all services from AWS/Azure/GCP are covered under the BAA. Check the provider\'s HIPAA-eligible services list before deploying any new service that will touch ePHI. Using a non-eligible service (even accidentally) creates a HIPAA violation regardless of how well it is configured.',
                },
                {
                    pitfall: 'Security groups with 0.0.0.0/0 ingress rules on production resources',
                    solution: 'Never allow unrestricted inbound access to production resources. All access should flow through the API Gateway and WAF for external traffic, or through VPN/bastion for internal access. Audit security group rules regularly — "temporary" permissive rules tend to become permanent.',
                },
                {
                    pitfall: 'No network segmentation between environments',
                    solution: 'Production, staging, and development should be in separate VPCs (or accounts/projects) with no direct network connectivity. A compromised development environment should not provide a path to production ePHI. Use separate cloud accounts (AWS Organizations) or projects (GCP) for hard isolation.',
                },
                {
                    pitfall: 'Disabled or unmonitored security logging',
                    solution: 'CloudTrail/Activity Log/Cloud Audit Logs must be enabled on all accounts with no gaps. Configure centralized log aggregation with automated alerting. A six-month gap in security logs is a critical finding in both HIPAA audits and SOC 2 reports.',
                },
            ]}
        />
    );
}
