'use client';

import { useState, useMemo } from 'react';
import { Download, Filter, Search, CheckCircle, XCircle, MinusCircle, ChevronDown, ChevronUp } from 'lucide-react';

// Framework mapping data - comprehensive control overlap matrix
const CONTROL_DOMAINS = [
    {
        id: 'access-control',
        name: 'Access Control & Authentication',
        controls: [
            {
                id: 'ac-1',
                name: 'Unique User Identification',
                description: 'Every user has a unique identifier; no shared accounts',
                fda: { ref: 'SPDF — Access Control', covered: true, detail: 'Required for device and backend access traceability' },
                hipaa: { ref: '§ 164.312(a)(2)(i)', covered: true, detail: 'Required specification — unique user identification' },
                soc2: { ref: 'CC6.1', covered: true, detail: 'Logical access controls — user identification' },
                iec81001: { ref: 'Clause 5.3.2', covered: true, detail: 'Access control requirements for health software' },
            },
            {
                id: 'ac-2',
                name: 'Role-Based Access Control (RBAC)',
                description: 'Access permissions based on job role with least privilege',
                fda: { ref: 'SPDF — Least Privilege', covered: true, detail: 'Minimum necessary access for device functions' },
                hipaa: { ref: '§ 164.312(a)(1)', covered: true, detail: 'Access control standard — minimum necessary' },
                soc2: { ref: 'CC6.1, CC6.3', covered: true, detail: 'Role-based access and least privilege' },
                iec81001: { ref: 'Clause 5.3.2', covered: true, detail: 'Authorization and access control' },
            },
            {
                id: 'ac-3',
                name: 'Multi-Factor Authentication (MFA)',
                description: 'Two or more authentication factors required',
                fda: { ref: 'SPDF — Authentication', covered: true, detail: 'Strong authentication for device management' },
                hipaa: { ref: '§ 164.312(d)', covered: true, detail: 'Person or entity authentication' },
                soc2: { ref: 'CC6.1', covered: true, detail: 'Multi-factor authentication requirements' },
                iec81001: { ref: 'Clause 5.3.2', covered: true, detail: 'Authentication mechanisms' },
            },
            {
                id: 'ac-4',
                name: 'Automatic Session Timeout',
                description: 'Sessions terminated after inactivity period',
                fda: { ref: 'SPDF — Session Mgmt', covered: true, detail: 'Session management for connected devices' },
                hipaa: { ref: '§ 164.312(a)(2)(iii)', covered: true, detail: 'Addressable — automatic logoff' },
                soc2: { ref: 'CC6.1', covered: true, detail: 'Session management controls' },
                iec81001: { ref: 'Clause 5.3.2', covered: false, detail: 'Not explicitly required' },
            },
            {
                id: 'ac-5',
                name: 'Emergency Access Procedure',
                description: 'Documented procedure for emergency system access',
                fda: { ref: 'N/A', covered: false, detail: 'Not explicitly addressed by FDA guidance' },
                hipaa: { ref: '§ 164.312(a)(2)(ii)', covered: true, detail: 'Required — emergency access procedure' },
                soc2: { ref: 'CC6.1', covered: true, detail: 'Emergency access provisions' },
                iec81001: { ref: 'N/A', covered: false, detail: 'Not explicitly addressed' },
            },
            {
                id: 'ac-6',
                name: 'Access Review and Recertification',
                description: 'Periodic review of access rights (quarterly recommended)',
                fda: { ref: 'N/A', covered: false, detail: 'Not explicitly required in premarket guidance' },
                hipaa: { ref: '§ 164.308(a)(4)', covered: true, detail: 'Information access management — review' },
                soc2: { ref: 'CC6.2', covered: true, detail: 'Quarterly access recertification' },
                iec81001: { ref: 'Clause 5.3.3', covered: true, detail: 'Access control review' },
            },
        ],
    },
    {
        id: 'data-protection',
        name: 'Data Protection & Encryption',
        controls: [
            {
                id: 'dp-1',
                name: 'Encryption at Rest (AES-256)',
                description: 'All sensitive data encrypted in storage',
                fda: { ref: 'SPDF — Data Protection', covered: true, detail: 'Encryption for data confidentiality' },
                hipaa: { ref: '§ 164.312(a)(2)(iv)', covered: true, detail: 'Addressable — encryption and decryption' },
                soc2: { ref: 'CC6.7', covered: true, detail: 'Data encryption at rest' },
                iec81001: { ref: 'Clause 5.3.4', covered: true, detail: 'Cryptographic protection' },
            },
            {
                id: 'dp-2',
                name: 'Encryption in Transit (TLS 1.2+/1.3)',
                description: 'All data encrypted during transmission',
                fda: { ref: 'SPDF — Communication Security', covered: true, detail: 'Secure communication channels' },
                hipaa: { ref: '§ 164.312(e)(1)', covered: true, detail: 'Addressable — transmission security' },
                soc2: { ref: 'CC6.6, CC6.7', covered: true, detail: 'Data encryption in transit' },
                iec81001: { ref: 'Clause 5.3.4', covered: true, detail: 'Secure communication' },
            },
            {
                id: 'dp-3',
                name: 'Key Management (KMS/HSM)',
                description: 'Cryptographic key lifecycle management',
                fda: { ref: 'SPDF — Crypto Mgmt', covered: true, detail: 'Key management for device cryptography' },
                hipaa: { ref: '§ 164.312(a)(2)(iv)', covered: true, detail: 'Part of encryption implementation' },
                soc2: { ref: 'CC6.7', covered: true, detail: 'Key management controls' },
                iec81001: { ref: 'Clause 5.3.4', covered: true, detail: 'Cryptographic key management' },
            },
            {
                id: 'dp-4',
                name: 'Data Integrity Verification',
                description: 'Checksums, HMAC, or digital signatures for data integrity',
                fda: { ref: 'SPDF — Data Integrity', covered: true, detail: 'Data integrity for device data' },
                hipaa: { ref: '§ 164.312(c)(1)', covered: true, detail: 'Integrity controls for ePHI' },
                soc2: { ref: 'PI1.1', covered: true, detail: 'Processing integrity validation' },
                iec81001: { ref: 'Clause 5.3.5', covered: true, detail: 'Data integrity protection' },
            },
            {
                id: 'dp-5',
                name: 'Secure Data Disposal',
                description: 'Secure erasure per NIST SP 800-88 on decommission',
                fda: { ref: 'N/A', covered: false, detail: 'Not directly addressed in premarket guidance' },
                hipaa: { ref: '§ 164.310(d)(2)(i)', covered: true, detail: 'Device and media disposal' },
                soc2: { ref: 'CC6.5', covered: true, detail: 'Data and asset disposal' },
                iec81001: { ref: 'Clause 5.7', covered: true, detail: 'Decommissioning activities' },
            },
            {
                id: 'dp-6',
                name: 'Data Classification',
                description: 'Classification scheme for data sensitivity levels',
                fda: { ref: 'N/A', covered: false, detail: 'Implicit in data-flow diagrams' },
                hipaa: { ref: '§ 164.312(a)(1)', covered: true, detail: 'ePHI identification and classification' },
                soc2: { ref: 'CC6.7, C1.1', covered: true, detail: 'Data classification and confidentiality' },
                iec81001: { ref: 'Clause 5.3.1', covered: true, detail: 'Asset identification and classification' },
            },
        ],
    },
    {
        id: 'monitoring-logging',
        name: 'Monitoring, Logging & Audit',
        controls: [
            {
                id: 'ml-1',
                name: 'Audit Logging',
                description: 'Record of security-relevant events with timestamps',
                fda: { ref: 'SPDF — Audit Trail', covered: true, detail: 'Security event logging for devices' },
                hipaa: { ref: '§ 164.312(b)', covered: true, detail: 'Required — audit controls' },
                soc2: { ref: 'CC7.2', covered: true, detail: 'System monitoring and logging' },
                iec81001: { ref: 'Clause 5.3.6', covered: true, detail: 'Security event logging' },
            },
            {
                id: 'ml-2',
                name: 'Log Protection and Retention',
                description: 'Tamper-proof log storage with retention policy',
                fda: { ref: 'SPDF — Log Integrity', covered: true, detail: 'Log integrity for audit purposes' },
                hipaa: { ref: '§ 164.316(b)(2)', covered: true, detail: 'Six-year retention requirement' },
                soc2: { ref: 'CC7.2', covered: true, detail: 'Log retention and protection' },
                iec81001: { ref: 'Clause 5.3.6', covered: true, detail: 'Audit log protection' },
            },
            {
                id: 'ml-3',
                name: 'Security Monitoring (SIEM)',
                description: 'Real-time security event detection and correlation',
                fda: { ref: 'Post-market monitoring', covered: true, detail: 'Required for cyber devices under 524B' },
                hipaa: { ref: '§ 164.308(a)(1)(ii)(D)', covered: true, detail: 'Information system activity review' },
                soc2: { ref: 'CC7.2, CC7.3', covered: true, detail: 'Security incident detection' },
                iec81001: { ref: 'Clause 5.6', covered: true, detail: 'Security event management' },
            },
            {
                id: 'ml-4',
                name: 'Anomaly Detection',
                description: 'Automated detection of unusual access or behavior patterns',
                fda: { ref: 'SPDF — Anomaly Detection', covered: true, detail: 'Detect/respond security capability' },
                hipaa: { ref: '§ 164.308(a)(1)(ii)(D)', covered: true, detail: 'Part of activity review' },
                soc2: { ref: 'CC7.3', covered: true, detail: 'Anomalous activity detection' },
                iec81001: { ref: 'Clause 5.6', covered: true, detail: 'Anomaly and intrusion detection' },
            },
        ],
    },
    {
        id: 'risk-management',
        name: 'Risk Assessment & Management',
        controls: [
            {
                id: 'rm-1',
                name: 'Cybersecurity Risk Assessment',
                description: 'Formal exploitability-based risk evaluation',
                fda: { ref: 'SPDF — Risk Assessment', covered: true, detail: 'Cybersecurity risk assessment per guidance Section V.A' },
                hipaa: { ref: '§ 164.308(a)(1)(ii)(A)', covered: true, detail: 'Required — security risk analysis' },
                soc2: { ref: 'CC3.2', CC3: true, covered: true, detail: 'Risk assessment process' },
                iec81001: { ref: 'Clause 5.2', covered: true, detail: 'Security risk management' },
            },
            {
                id: 'rm-2',
                name: 'Threat Modeling',
                description: 'Systematic threat identification using STRIDE/PASTA',
                fda: { ref: 'SPDF — Threat Model', covered: true, detail: 'Required threat model with DFDs and STRIDE' },
                hipaa: { ref: '§ 164.308(a)(1)(ii)(A)', covered: true, detail: 'Part of risk analysis — threat identification' },
                soc2: { ref: 'CC3.2', covered: true, detail: 'Threat identification process' },
                iec81001: { ref: 'Clause 5.2.2', covered: true, detail: 'Threat analysis activities' },
            },
            {
                id: 'rm-3',
                name: 'SBOM Management',
                description: 'Software Bill of Materials with CVE monitoring',
                fda: { ref: 'Section 524B SBOM', covered: true, detail: 'Legally required for cyber devices' },
                hipaa: { ref: 'N/A', covered: false, detail: 'Not a HIPAA requirement' },
                soc2: { ref: 'CC3.2', covered: true, detail: 'Component risk management' },
                iec81001: { ref: 'Clause 5.4', covered: true, detail: 'Secure implementation — component management' },
            },
            {
                id: 'rm-4',
                name: 'Residual Risk Acceptance',
                description: 'Formal acceptance process for remaining risks',
                fda: { ref: 'SPDF — Risk Acceptance', covered: true, detail: 'Documented residual risk acceptance' },
                hipaa: { ref: '§ 164.308(a)(1)(ii)(B)', covered: true, detail: 'Risk management — implement measures' },
                soc2: { ref: 'CC3.4', covered: true, detail: 'Risk acceptance documentation' },
                iec81001: { ref: 'Clause 5.2.5', covered: true, detail: 'Residual risk evaluation' },
            },
        ],
    },
    {
        id: 'vulnerability-patch',
        name: 'Vulnerability & Patch Management',
        controls: [
            {
                id: 'vp-1',
                name: 'Vulnerability Scanning',
                description: 'Regular automated vulnerability scanning',
                fda: { ref: 'SPDF — Security Testing', covered: true, detail: 'SAST, DAST, SCA required' },
                hipaa: { ref: '§ 164.308(a)(8)', covered: true, detail: 'Evaluation — technical and non-technical' },
                soc2: { ref: 'CC7.1', covered: true, detail: 'Vulnerability identification' },
                iec81001: { ref: 'Clause 5.5', covered: true, detail: 'Security verification and validation' },
            },
            {
                id: 'vp-2',
                name: 'Patch Management Process',
                description: 'Timely deployment of security patches',
                fda: { ref: 'Section 524B Patching', covered: true, detail: 'Required update/patch capability' },
                hipaa: { ref: '§ 164.308(a)(5)(ii)(B)', covered: true, detail: 'Protection from malicious software' },
                soc2: { ref: 'CC7.1', covered: true, detail: 'Vulnerability remediation' },
                iec81001: { ref: 'Clause 5.6.2', covered: true, detail: 'Security update management' },
            },
            {
                id: 'vp-3',
                name: 'Coordinated Vulnerability Disclosure',
                description: 'Public process for reporting and addressing vulnerabilities',
                fda: { ref: 'Section 524B CVD', covered: true, detail: 'Required coordinated disclosure process' },
                hipaa: { ref: 'N/A', covered: false, detail: 'Not a HIPAA requirement' },
                soc2: { ref: 'CC7.4', covered: true, detail: 'Security incident communication' },
                iec81001: { ref: 'Clause 5.6.3', covered: true, detail: 'Vulnerability disclosure process' },
            },
            {
                id: 'vp-4',
                name: 'Penetration Testing',
                description: 'Annual third-party security assessment',
                fda: { ref: 'SPDF — Pen Testing', covered: true, detail: 'Required for Enhanced tier devices' },
                hipaa: { ref: '§ 164.308(a)(8)', covered: true, detail: 'Part of evaluation activities' },
                soc2: { ref: 'CC7.1', covered: true, detail: 'Independent security assessment' },
                iec81001: { ref: 'Clause 5.5', covered: true, detail: 'Security testing activities' },
            },
        ],
    },
    {
        id: 'incident-response',
        name: 'Incident Response & Business Continuity',
        controls: [
            {
                id: 'ir-1',
                name: 'Incident Response Plan',
                description: 'Documented procedure for security incident handling',
                fda: { ref: 'SPDF — Incident Mgmt', covered: true, detail: 'Security incident procedures' },
                hipaa: { ref: '§ 164.308(a)(6)', covered: true, detail: 'Required — security incident procedures' },
                soc2: { ref: 'CC7.3, CC7.4', covered: true, detail: 'Incident response and communication' },
                iec81001: { ref: 'Clause 5.6.1', covered: true, detail: 'Security incident management' },
            },
            {
                id: 'ir-2',
                name: 'Breach Notification',
                description: 'Process for notifying affected parties after a breach',
                fda: { ref: 'MDR (21 CFR 803)', covered: true, detail: 'Medical device reporting for cyber incidents' },
                hipaa: { ref: '§ 164.400-414', covered: true, detail: 'Required — breach notification rule' },
                soc2: { ref: 'CC7.4', covered: true, detail: 'External communication of incidents' },
                iec81001: { ref: 'N/A', covered: false, detail: 'Not directly addressed' },
            },
            {
                id: 'ir-3',
                name: 'Disaster Recovery Plan',
                description: 'Procedures for system recovery after major incidents',
                fda: { ref: 'N/A', covered: false, detail: 'Not required in premarket guidance' },
                hipaa: { ref: '§ 164.308(a)(7)(ii)(B)', covered: true, detail: 'Required — disaster recovery plan' },
                soc2: { ref: 'A1.2', covered: true, detail: 'Recovery operations and testing' },
                iec81001: { ref: 'N/A', covered: false, detail: 'Not directly addressed' },
            },
            {
                id: 'ir-4',
                name: 'Data Backup',
                description: 'Regular backup of critical data with verification',
                fda: { ref: 'N/A', covered: false, detail: 'Not required in premarket guidance' },
                hipaa: { ref: '§ 164.308(a)(7)(ii)(A)', covered: true, detail: 'Required — data backup plan' },
                soc2: { ref: 'A1.2', covered: true, detail: 'Data backup and recovery' },
                iec81001: { ref: 'N/A', covered: false, detail: 'Not directly addressed' },
            },
        ],
    },
    {
        id: 'governance',
        name: 'Governance & Change Management',
        controls: [
            {
                id: 'gv-1',
                name: 'Security Policies and Procedures',
                description: 'Documented security policies reviewed annually',
                fda: { ref: 'SPDF — Security Policy', covered: true, detail: 'Security development policy documentation' },
                hipaa: { ref: '§ 164.316(a)', covered: true, detail: 'Required — policies and procedures' },
                soc2: { ref: 'CC1.1, CC1.2', covered: true, detail: 'Control environment and governance' },
                iec81001: { ref: 'Clause 5.1', covered: true, detail: 'Quality management of security' },
            },
            {
                id: 'gv-2',
                name: 'Change Management Process',
                description: 'Formal change control for production systems',
                fda: { ref: 'Design Controls (820.30)', covered: true, detail: 'Design change procedures' },
                hipaa: { ref: '§ 164.316(b)(2)(iii)', covered: true, detail: 'Documentation updates' },
                soc2: { ref: 'CC8.1', covered: true, detail: 'Change management process' },
                iec81001: { ref: 'Clause 5.4.3', covered: true, detail: 'Configuration management' },
            },
            {
                id: 'gv-3',
                name: 'Security Training Program',
                description: 'Role-based security awareness training',
                fda: { ref: 'SPDF — Training', covered: true, detail: 'Security training for development team' },
                hipaa: { ref: '§ 164.308(a)(5)', covered: true, detail: 'Required — security awareness training' },
                soc2: { ref: 'CC1.4', covered: true, detail: 'Security awareness program' },
                iec81001: { ref: 'Clause 5.1.2', covered: true, detail: 'Security competence and training' },
            },
            {
                id: 'gv-4',
                name: 'Vendor/Third-Party Risk Management',
                description: 'Security assessment of vendors and suppliers',
                fda: { ref: 'SPDF — Supply Chain', covered: true, detail: 'SBOM and supply chain security' },
                hipaa: { ref: '§ 164.314(a)', covered: true, detail: 'Business associate contracts' },
                soc2: { ref: 'CC9.2', covered: true, detail: 'Vendor risk management' },
                iec81001: { ref: 'Clause 5.4.2', covered: true, detail: 'Secure supply chain management' },
            },
            {
                id: 'gv-5',
                name: 'Business Associate Agreements',
                description: 'Contractual HIPAA flow-down to vendors',
                fda: { ref: 'N/A', covered: false, detail: 'Not an FDA requirement' },
                hipaa: { ref: '§ 164.314(a)', covered: true, detail: 'Required — business associate contracts' },
                soc2: { ref: 'CC9.2', covered: true, detail: 'Subservice organization management' },
                iec81001: { ref: 'N/A', covered: false, detail: 'Not directly addressed' },
            },
        ],
    },
];

type FrameworkKey = 'fda' | 'hipaa' | 'soc2' | 'iec81001';

const FRAMEWORKS: { key: FrameworkKey; name: string; shortName: string; color: string }[] = [
    { key: 'fda', name: 'FDA Cybersecurity Guidance', shortName: 'FDA', color: '#2563eb' },
    { key: 'hipaa', name: 'HIPAA Security Rule', shortName: 'HIPAA', color: '#7c3aed' },
    { key: 'soc2', name: 'SOC 2 Type II', shortName: 'SOC 2', color: '#059669' },
    { key: 'iec81001', name: 'IEC 81001-5-1', shortName: 'IEC 81001', color: '#dc2626' },
];

export default function CybersecurityFrameworkMapper() {
    const [selectedFrameworks, setSelectedFrameworks] = useState<FrameworkKey[]>(['fda', 'hipaa', 'soc2', 'iec81001']);
    const [filterMode, setFilterMode] = useState<'all' | 'overlap' | 'gaps'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedDomains, setExpandedDomains] = useState<string[]>(CONTROL_DOMAINS.map(d => d.id));

    const toggleFramework = (key: FrameworkKey) => {
        setSelectedFrameworks(prev =>
            prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
        );
    };

    const toggleDomain = (id: string) => {
        setExpandedDomains(prev =>
            prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
        );
    };

    const filteredDomains = useMemo(() => {
        return CONTROL_DOMAINS.map(domain => {
            const filteredControls = domain.controls.filter(control => {
                // Search filter
                if (searchQuery) {
                    const q = searchQuery.toLowerCase();
                    if (!control.name.toLowerCase().includes(q) && !control.description.toLowerCase().includes(q)) {
                        return false;
                    }
                }

                // Framework filter
                if (filterMode === 'overlap') {
                    // Show controls covered by ALL selected frameworks
                    return selectedFrameworks.every(fw => control[fw].covered);
                } else if (filterMode === 'gaps') {
                    // Show controls NOT covered by at least one selected framework
                    return selectedFrameworks.some(fw => !control[fw].covered);
                }
                return true;
            });

            return { ...domain, controls: filteredControls };
        }).filter(domain => domain.controls.length > 0);
    }, [selectedFrameworks, filterMode, searchQuery]);

    const stats = useMemo(() => {
        const allControls = CONTROL_DOMAINS.flatMap(d => d.controls);
        const total = allControls.length;
        const coveredByAll = allControls.filter(c =>
            selectedFrameworks.every(fw => c[fw].covered)
        ).length;
        const gaps = allControls.filter(c =>
            selectedFrameworks.some(fw => !c[fw].covered)
        ).length;
        const perFramework = FRAMEWORKS.reduce((acc, fw) => {
            acc[fw.key] = allControls.filter(c => c[fw.key].covered).length;
            return acc;
        }, {} as Record<FrameworkKey, number>);

        return { total, coveredByAll, gaps, perFramework };
    }, [selectedFrameworks]);

    const exportMatrix = () => {
        let csv = 'Control Domain,Control Name,Description';
        selectedFrameworks.forEach(fw => {
            const framework = FRAMEWORKS.find(f => f.key === fw);
            csv += `,${framework?.name} Covered,${framework?.name} Reference,${framework?.name} Detail`;
        });
        csv += '\n';

        CONTROL_DOMAINS.forEach(domain => {
            domain.controls.forEach(control => {
                csv += `"${domain.name}","${control.name}","${control.description}"`;
                selectedFrameworks.forEach(fw => {
                    csv += `,${control[fw].covered ? 'Yes' : 'No'},"${control[fw].ref}","${control[fw].detail}"`;
                });
                csv += '\n';
            });
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cybersecurity-framework-mapping-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-6">
            {/* Framework Selector */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-blue-600" />
                    Select Frameworks to Compare
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {FRAMEWORKS.map(fw => (
                        <button
                            key={fw.key}
                            onClick={() => toggleFramework(fw.key)}
                            className={`p-3 rounded-lg border-2 transition-all text-left ${selectedFrameworks.includes(fw.key)
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 bg-gray-50 opacity-60'
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: fw.color }}
                                />
                                <span className="font-bold text-sm text-gray-900">{fw.shortName}</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">{fw.name}</p>
                            <p className="text-xs font-medium mt-1" style={{ color: fw.color }}>
                                {stats.perFramework[fw.key]}/{stats.total} controls
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                    <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                    <p className="text-sm text-gray-600">Total Controls</p>
                </div>
                <div className="bg-green-50 rounded-lg border border-green-200 p-4 text-center">
                    <p className="text-3xl font-bold text-green-700">{stats.coveredByAll}</p>
                    <p className="text-sm text-green-600">Covered by All Selected</p>
                </div>
                <div className="bg-red-50 rounded-lg border border-red-200 p-4 text-center">
                    <p className="text-3xl font-bold text-red-700">{stats.gaps}</p>
                    <p className="text-sm text-red-600">Gaps (≥1 framework missing)</p>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search controls..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex gap-2">
                    {[
                        { mode: 'all' as const, label: 'All Controls' },
                        { mode: 'overlap' as const, label: 'Full Overlap' },
                        { mode: 'gaps' as const, label: 'Gaps Only' },
                    ].map(f => (
                        <button
                            key={f.mode}
                            onClick={() => setFilterMode(f.mode)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterMode === f.mode
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                    <button
                        onClick={exportMatrix}
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Control Matrix */}
            {filteredDomains.map(domain => (
                <div key={domain.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <button
                        onClick={() => toggleDomain(domain.id)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <h3 className="text-lg font-bold text-gray-900">{domain.name}</h3>
                            <span className="text-sm text-gray-500">({domain.controls.length} controls)</span>
                        </div>
                        {expandedDomains.includes(domain.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                    </button>
                    {expandedDomains.includes(domain.id) && (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left p-3 font-medium text-gray-700 min-w-[200px]">Control</th>
                                        {selectedFrameworks.map(fw => {
                                            const framework = FRAMEWORKS.find(f => f.key === fw)!;
                                            return (
                                                <th key={fw} className="text-center p-3 font-medium min-w-[140px]" style={{ color: framework.color }}>
                                                    {framework.shortName}
                                                </th>
                                            );
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {domain.controls.map(control => (
                                        <tr key={control.id} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="p-3">
                                                <p className="font-medium text-gray-900">{control.name}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{control.description}</p>
                                            </td>
                                            {selectedFrameworks.map(fw => (
                                                <td key={fw} className="p-3 text-center">
                                                    {control[fw].covered ? (
                                                        <div className="flex flex-col items-center gap-1">
                                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                                            <span className="text-xs text-gray-600">{control[fw].ref}</span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center gap-1">
                                                            <XCircle className="w-5 h-5 text-red-400" />
                                                            <span className="text-xs text-gray-400">N/A</span>
                                                        </div>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            ))}

            {filteredDomains.length === 0 && (
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
                    <MinusCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">No controls match your current filter criteria.</p>
                    <p className="text-sm text-gray-500 mt-1">Try adjusting your search or filter settings.</p>
                </div>
            )}
        </div>
    );
}
