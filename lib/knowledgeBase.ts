// Knowledge Center Data Structure
// This file tracks all articles, standards, and guides in the knowledge base

export interface Article {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description?: string;
  status: 'published' | 'draft' | 'coming-soon';
  views?: number;
  lastUpdated?: Date;
  url: string;
  type: 'standard' | 'guide' | 'howto' | 'checklist' | 'case-study';
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  articles: Article[];
}

// Categories aligned with Phase 1 plan
export const KNOWLEDGE_CATEGORIES: Category[] = [
  {
    id: 'standards',
    title: 'Standards Database',
    icon: '📚',
    color: '#3b82f6',
    description: 'ISO, IEC, FDA, and EU MDR standards with implementation guidance',
    articles: [
      {
        id: 'iso-13485',
        title: 'ISO 13485 - Quality Management Systems',
        category: 'standards',
        subcategory: 'qms',
        status: 'published',
        url: '/standards/iso-13485',
        type: 'standard',
        description: 'Quality management system requirements for medical device manufacturers',
      },
      {
        id: 'iso-14971',
        title: 'ISO 14971 - Risk Management',
        category: 'standards',
        subcategory: 'risk-management',
        status: 'published',
        url: '/standards/iso-14971',
        type: 'standard',
        description: 'Risk management process for medical devices throughout the lifecycle',
      },
      {
        id: 'iec-62304',
        title: 'IEC 62304 - Software Life Cycle Processes',
        category: 'standards',
        subcategory: 'software',
        status: 'published',
        url: '/standards/iec-62304',
        type: 'standard',
        description: 'Software development lifecycle requirements for medical device software',
      },
      {
        id: 'iec-60601-1',
        title: 'IEC 60601-1 - Medical Electrical Equipment General Requirements',
        category: 'standards',
        subcategory: 'medical-electrical',
        status: 'published',
        url: '/standards/iec-60601-1',
        type: 'standard',
        description: 'General safety and essential performance requirements for medical electrical equipment',
      },
      {
        id: 'iec-60601-1-2',
        title: 'IEC 60601-1-2 - Electromagnetic Disturbances',
        category: 'standards',
        subcategory: 'medical-electrical',
        status: 'published',
        url: '/standards/iec-60601-1-2',
        type: 'standard',
        description: 'EMC requirements and testing for medical electrical equipment',
      },
      {
        id: 'iec-62366',
        title: 'IEC 62366 - Usability Engineering',
        category: 'standards',
        subcategory: 'usability',
        status: 'published',
        url: '/standards/iec-62366',
        type: 'standard',
        description: 'Usability engineering process for medical devices',
      },
      {
        id: 'iec-60601-2-22',
        title: 'IEC 60601-2-22 - Laser Equipment',
        category: 'standards',
        subcategory: 'laser-safety',
        status: 'published',
        url: '/standards/iec-60601-2-22',
        type: 'standard',
        description: 'Particular requirements for surgical, cosmetic, therapeutic and diagnostic laser equipment',
      },
      {
        id: 'iec-60825-1',
        title: 'IEC 60825-1 - Laser Product Classification',
        category: 'standards',
        subcategory: 'laser-safety',
        status: 'published',
        url: '/standards/iec-60825-1',
        type: 'standard',
        description: 'Laser product classification and safety requirements',
      },
      {
        id: 'iso-10993',
        title: 'ISO 10993 - Biological Evaluation of Medical Devices',
        category: 'standards',
        subcategory: 'testing',
        status: 'published',
        url: '/standards/iso-10993',
        type: 'standard',
        description: 'Biological safety evaluation and biocompatibility testing requirements for medical devices',
      },
      {
        id: 'iso-14155',
        title: 'ISO 14155 - Clinical Investigation of Medical Devices',
        category: 'standards',
        subcategory: 'clinical',
        status: 'published',
        url: '/standards/iso-14155',
        type: 'standard',
        description: 'Good clinical practice for clinical investigations of medical devices',
      },
      {
        id: 'iec-81001-5-1',
        title: 'IEC 81001-5-1 - Health Software Cybersecurity',
        category: 'standards',
        subcategory: 'software',
        status: 'published',
        url: '/standards/iec-81001-5-1',
        type: 'standard',
        description: 'Cybersecurity requirements for health software and IT systems',
      },
      {
        id: 'iso-15223',
        title: 'ISO 15223 - Symbols for Medical Device Labels',
        category: 'standards',
        subcategory: 'labeling',
        status: 'published',
        url: '/standards/iso-15223',
        type: 'standard',
        description: 'Standardized symbols for medical device labeling and information',
      },
      {
        id: 'iso-20417',
        title: 'ISO 20417 - Information to be Supplied by Manufacturer',
        category: 'standards',
        subcategory: 'labeling',
        status: 'published',
        url: '/standards/iso-20417',
        type: 'standard',
        description: 'Requirements for information supplied with medical devices including labeling',
      },
      {
        id: 'iec-60601-2-57',
        title: 'IEC 60601-2-57 - Non-Laser Light Source Equipment',
        category: 'standards',
        subcategory: 'medical-electrical',
        status: 'published',
        url: '/standards/iec-60601-2-57',
        type: 'standard',
        description: 'Safety requirements for LED and other non-laser light source medical equipment',
      }
    ]
  },
  {
    id: 'regulations',
    title: 'FDA Regulations',
    icon: '⚖️',
    color: '#10b981',
    description: 'US FDA regulations - legally binding requirements for medical devices',
    articles: [
      {
        id: 'cfr-11',
        title: '21 CFR Part 11 - Electronic Records; Electronic Signatures',
        category: 'regulations',
        subcategory: 'electronic-records',
        status: 'published',
        url: '/regulations/cfr-11',
        type: 'standard',
        description: 'Requirements for electronic records and electronic signatures in FDA-regulated industries',
      },
      {
        id: 'cfr-820',
        title: '21 CFR Part 820 - Quality System Regulation (QMSR)',
        category: 'regulations',
        subcategory: 'quality-system',
        status: 'published',
        url: '/regulations/cfr-820',
        type: 'standard',
        description: 'Quality system requirements for medical devices (aligned with ISO 13485:2016)',
      },
      {
        id: 'cfr-830',
        title: '21 CFR Part 830 - Unique Device Identification (UDI)',
        category: 'regulations',
        subcategory: 'identification',
        status: 'published',
        url: '/regulations/cfr-830',
        type: 'standard',
        description: 'Requirements for device identification and labeling for post-market surveillance',
      },
      {
        id: 'cfr-812',
        title: '21 CFR Part 812 - Investigational Device Exemptions (IDE)',
        category: 'regulations',
        subcategory: 'clinical',
        status: 'published',
        url: '/regulations/cfr-812',
        type: 'standard',
        description: 'Requirements for clinical investigations of medical devices',
      },
      {
        id: 'cfr-807',
        title: '21 CFR Part 807 - Establishment Registration and Device Listing',
        category: 'regulations',
        subcategory: 'registration',
        status: 'published',
        url: '/regulations/cfr-807',
        type: 'standard',
        description: 'Requirements for device establishment registration and product listing',
      },
      {
        id: 'cfr-803',
        title: '21 CFR Part 803 - Medical Device Reporting (MDR)',
        category: 'regulations',
        subcategory: 'post-market',
        status: 'published',
        url: '/regulations/cfr-803',
        type: 'standard',
        description: 'Requirements for reporting device-related adverse events and malfunctions',
      },
      {
        id: '510k-submission',
        title: '510(k) Premarket Notification',
        category: 'regulations',
        subcategory: 'premarket',
        status: 'published',
        url: '/regulations/510k-submission',
        type: 'standard',
        description: 'Requirements for demonstrating substantial equivalence to predicate devices',
      },
      {
        id: 'pma-submission',
        title: 'PMA (Premarket Approval)',
        category: 'regulations',
        subcategory: 'premarket',
        status: 'published',
        url: '/regulations/pma-submission',
        type: 'standard',
        description: 'Requirements for Class III device approval including clinical data',
      },
      {
        id: 'estar-template',
        title: 'eSTAR Template - electronic Submission Template And Resource',
        category: 'regulations',
        subcategory: 'premarket',
        status: 'published',
        url: '/regulations/estar-template',
        type: 'standard',
        description: 'Structured electronic submission template for 510(k) submissions',
      },
    ]
  },
  {
    id: 'qms',
    title: 'Quality Management Systems',
    icon: '✅',
    color: '#10b981',
    description: 'ISO 13485 and QMS standards',
    articles: [
      {
        id: 'iso-13485-qms',
        title: 'ISO 13485 - Quality Management Systems',
        category: 'qms',
        status: 'published',
        url: '/standards/iso-13485',
        type: 'standard',
        description: 'Quality management system requirements for medical device manufacturers',
      },
      {
        id: 'cfr-820-qms',
        title: '21 CFR Part 820 - Quality System Regulation (QMSR)',
        category: 'qms',
        status: 'published',
        url: '/regulations/cfr-820',
        type: 'standard',
        description: 'FDA quality system requirements for medical devices (aligned with ISO 13485:2016)',
      },
      {
        id: 'design-development-qms',
        title: 'Design and Development per ISO 13485 7.3',
        category: 'qms',
        status: 'published',
        url: '/how-to/design-development-iso13485',
        type: 'howto',
        description: 'Complete guide to design controls aligned with ISO 13485 and FDA QMSR',
      }
    ]
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    icon: '⚠️',
    color: '#ef4444',
    description: 'FMEA, risk analysis, and ISO 14971 resources',
    articles: [
      {
        id: 'iso-14971-risk',
        title: 'ISO 14971 - Risk Management',
        category: 'risk-management',
        status: 'published',
        url: '/standards/iso-14971',
        type: 'standard',
        description: 'Risk management process for medical devices throughout the lifecycle',
      },
      {
        id: 'fmea-howto-risk',
        title: 'How to Conduct an FMEA Analysis',
        category: 'risk-management',
        status: 'published',
        url: '/how-to/conduct-fmea-analysis',
        type: 'howto',
        description: 'Step-by-step guide to performing Failure Mode and Effects Analysis for medical devices',
      },
      {
        id: 'fmea-calculator-risk',
        title: 'FMEA Calculator Tool',
        category: 'risk-management',
        status: 'published',
        url: '/tools/fmea',
        type: 'guide',
        description: 'Interactive RPN calculator with severity/occurrence/detection guides',
      },
      {
        id: 'integrated-risk-mgmt',
        title: 'Integrated Risk Management Guide',
        category: 'risk-management',
        status: 'published',
        url: '/guides/integrated-risk-management',
        type: 'guide',
        description: 'Comprehensive risk management integrating usability, software, and device risks with traceability',
      }
    ]
  },
  {
    id: 'software',
    title: 'Software Development',
    icon: '💻',
    color: '#ec4899',
    description: 'IEC 62304, software lifecycle processes, and software validation',
    articles: [
      {
        id: 'iec-62304-software',
        title: 'IEC 62304 - Software Life Cycle Processes',
        category: 'software',
        status: 'published',
        url: '/standards/iec-62304',
        type: 'standard',
        description: 'Software development lifecycle requirements for medical device software',
      },
      {
        id: 'software-risk-class-tool',
        title: 'Software Risk Classification Tool',
        category: 'software',
        status: 'published',
        url: '/tools/software-risk-class',
        type: 'guide',
        description: 'Interactive decision tree for IEC 62304 software safety classification (Class A, B, C)',
      },
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Data Security',
    icon: '🔒',
    color: '#dc2626',
    description: 'FDA cybersecurity guidance, HIPAA, SOC 2, cloud security, and cybersecurity risk management for connected medical devices',
    articles: [
      {
        id: 'fda-cybersecurity-guidance-cyber',
        title: 'FDA Cybersecurity Guidance',
        category: 'cybersecurity',
        status: 'published',
        url: '/regulations/fda-cybersecurity-guidance',
        type: 'standard',
        description: 'Premarket submission requirements for cybersecurity in medical devices',
      },
      {
        id: 'section-524b-cyber',
        title: 'Section 524B — Ensuring Cybersecurity of Devices',
        category: 'cybersecurity',
        status: 'published',
        url: '/regulations/section-524b',
        type: 'standard',
        description: 'Statutory mandate requiring SBOM, patching plans, and cybersecurity documentation for cyber devices',
      },
      {
        id: 'iec-81001-5-1-cyber',
        title: 'IEC 81001-5-1 — Health Software Security',
        category: 'cybersecurity',
        status: 'published',
        url: '/standards/iec-81001-5-1',
        type: 'standard',
        description: 'Security activities in the product life cycle for health software',
      },
      {
        id: 'ansi-aami-sw96',
        title: 'ANSI/AAMI SW96:2023 — Security Risk Management',
        category: 'cybersecurity',
        status: 'published',
        url: '/standards/ansi-aami-sw96',
        type: 'standard',
        description: 'FDA-recognized consensus standard for medical device cybersecurity risk management',
      },
      {
        id: 'aami-tir57',
        title: 'AAMI TIR57 — Legacy Security Risk Management',
        category: 'cybersecurity',
        status: 'published',
        url: '/standards/aami-tir57',
        type: 'standard',
        description: 'Foundational technical information report for cybersecurity risk management principles',
      },
      {
        id: 'ul-2900-series',
        title: 'UL 2900 Series — Cybersecurity Testing Standard',
        category: 'cybersecurity',
        status: 'published',
        url: '/standards/ul-2900',
        type: 'standard',
        description: 'Testing-centric standard for fuzz testing, static analysis, CVE scanning, and penetration testing',
      },
      {
        id: 'hipaa-security-rule',
        title: 'HIPAA Security Rule — ePHI Safeguards',
        category: 'cybersecurity',
        status: 'published',
        url: '/regulations/hipaa-security-rule',
        type: 'standard',
        description: 'Administrative, physical, and technical safeguard requirements for electronic Protected Health Information',
      },
      {
        id: 'hipaa-baa',
        title: 'HIPAA Business Associate Agreements',
        category: 'cybersecurity',
        status: 'published',
        url: '/regulations/hipaa-baa',
        type: 'standard',
        description: 'BAA requirements for medical device companies, cloud provider BAA management, and vendor compliance',
      },
      {
        id: 'hipaa-for-device-manufacturers',
        title: 'HIPAA Compliance Guide for Device Manufacturers',
        category: 'cybersecurity',
        status: 'published',
        url: '/guides/hipaa-for-device-manufacturers',
        type: 'guide',
        description: 'End-to-end ePHI protection guide from device to cloud with FDA-HIPAA dual compliance strategy',
      },
      {
        id: 'soc2-for-medtech',
        title: 'SOC 2 Type II for Medical Device SaaS Platforms',
        category: 'cybersecurity',
        status: 'published',
        url: '/guides/soc2-for-medtech',
        type: 'guide',
        description: 'Trust Services Criteria, audit preparation, and leveraging HIPAA/FDA controls for SOC 2 readiness',
      },
      {
        id: 'cloud-security-medical-devices',
        title: 'Cloud Security for Connected Medical Device Backends',
        category: 'cybersecurity',
        status: 'published',
        url: '/guides/cloud-security-medical-devices',
        type: 'guide',
        description: 'Reference architecture for medical device cloud backends — VPC, IAM, encryption, SIEM, and DR',
      },
      {
        id: 'threat-modeling-cyber',
        title: 'Threat Modeling for Medical Devices',
        category: 'cybersecurity',
        status: 'published',
        url: '/guides/threat-modeling-medical-devices',
        type: 'guide',
        description: 'STRIDE, PASTA, and attack-tree methodologies for medical device cybersecurity',
      },
      {
        id: 'cyber-risk-assessment',
        title: 'Cybersecurity Risk Assessment Guide',
        category: 'cybersecurity',
        status: 'published',
        url: '/guides/cybersecurity-risk-assessment',
        type: 'guide',
        description: 'Exploitability-based scoring with CVSS/CWSS for medical device cybersecurity risk management',
      },
      {
        id: 'spdf-implementation-cyber',
        title: 'SPDF Implementation Guide',
        category: 'cybersecurity',
        status: 'published',
        url: '/guides/spdf-implementation',
        type: 'guide',
        description: 'Secure Product Development Framework implementation for FDA compliance',
      },
      {
        id: 'sbom-creation-cyber',
        title: 'SBOM Creation & Management',
        category: 'cybersecurity',
        status: 'published',
        url: '/guides/sbom-creation',
        type: 'guide',
        description: 'Software Bill of Materials: SPDX, CycloneDX, and CI/CD integration',
      },
      {
        id: 'post-market-cybersecurity',
        title: 'Post-Market Cybersecurity Monitoring',
        category: 'cybersecurity',
        status: 'published',
        url: '/guides/post-market-cybersecurity',
        type: 'guide',
        description: 'CVE surveillance, ISAO participation, coordinated vulnerability disclosure, and patch management lifecycle',
      },
      {
        id: 'cybersecurity-labeling-mds2',
        title: 'Cybersecurity Labeling & MDS² Guide',
        category: 'cybersecurity',
        status: 'published',
        url: '/guides/cybersecurity-labeling',
        type: 'guide',
        description: 'Customer-facing security documentation: device hardening, MDS² disclosure, patch communication, and end-of-life plans',
      },
      {
        id: 'fda-cyber-submission',
        title: 'FDA Cybersecurity Submission How-To',
        category: 'cybersecurity',
        status: 'published',
        url: '/how-to/fda-cybersecurity-submission',
        type: 'howto',
        description: 'Step-by-step checklist for premarket cybersecurity documentation',
      },
      {
        id: 'framework-mapper-tool-cyber',
        title: 'Cybersecurity Framework Mapper Tool',
        category: 'cybersecurity',
        status: 'published',
        url: '/tools/cybersecurity-framework-mapper',
        type: 'guide',
        description: 'Interactive control overlap matrix: FDA ↔ HIPAA ↔ SOC 2 ↔ IEC 81001-5-1',
      },
      {
        id: 'cyber-device-classification-cyber',
        title: 'Cyber Device Classification Tool',
        category: 'cybersecurity',
        status: 'published',
        url: '/tools/cyber-device-classification',
        type: 'guide',
        description: 'Determine if your device is a "cyber device" per Section 524B',
      },
    ]
  },
  {
    id: 'medical-electrical',
    title: 'Medical Electrical Equipment',
    icon: '⚡',
    color: '#f59e0b',
    description: 'IEC 60601 series, EMC, and electrical safety',
    articles: [
      {
        id: 'iec-60601-1-mee',
        title: 'IEC 60601-1 - Medical Electrical Equipment General Requirements',
        category: 'medical-electrical',
        status: 'published',
        url: '/standards/iec-60601-1',
        type: 'standard',
        description: 'General safety and essential performance requirements for medical electrical equipment',
      },
      {
        id: 'iec-60601-1-2-emc',
        title: 'IEC 60601-1-2 - Electromagnetic Disturbances',
        category: 'medical-electrical',
        status: 'published',
        url: '/standards/iec-60601-1-2',
        type: 'standard',
        description: 'EMC requirements and testing for medical electrical equipment',
      }
    ]
  },
  {
    id: 'laser-safety',
    title: 'Laser Safety',
    icon: '🔴',
    color: '#dc2626',
    description: 'IEC 60825, IEC 60601-2-22, and laser device requirements',
    articles: [
      {
        id: 'iec-60601-2-22-laser',
        title: 'IEC 60601-2-22 - Laser Equipment',
        category: 'laser-safety',
        status: 'published',
        url: '/standards/iec-60601-2-22',
        type: 'standard',
        description: 'Particular requirements for surgical, cosmetic, therapeutic and diagnostic laser equipment',
      },
      {
        id: 'iec-60825-1-laser',
        title: 'IEC 60825-1 - Laser Product Classification',
        category: 'laser-safety',
        status: 'published',
        url: '/standards/iec-60825-1',
        type: 'standard',
        description: 'Laser product classification and safety requirements',
      },
      {
        id: 'laser-notice-56',
        title: 'FDA Laser Notice 56 - IEC Conformance',
        category: 'laser-safety',
        status: 'published',
        url: 'https://www.hhs.gov/guidance/document/laser-products-conformance-iec-60825-1-ed-3-and-iec-60601-2-22-ed-31-laser-notice-no-56',
        type: 'guide',
        description: 'FDA guidance on conformance with IEC 60825-1 Ed. 3 and IEC 60601-2-22 Ed. 3.1 for laser products',
      },
      {
        id: 'laser-safety-calculator',
        title: 'Laser Safety Calculator Tool',
        category: 'laser-safety',
        status: 'published',
        url: '/tools/laser-safety',
        type: 'guide',
        description: 'Calculate MPE, NOHD, and laser classification per IEC 60825-1 standards',
      }
    ]
  },
  {
    id: 'usability',
    title: 'Usability Engineering',
    icon: '👤',
    color: '#06b6d4',
    description: 'IEC 62366, human factors, and usability validation',
    articles: [
      {
        id: 'iec-62366-usability',
        title: 'IEC 62366 - Usability Engineering',
        category: 'usability',
        status: 'published',
        url: '/standards/iec-62366',
        type: 'standard',
        description: 'Usability engineering process for medical devices',
      },
      {
        id: 'usability-guide',
        title: 'Usability Engineering Implementation Guide',
        category: 'usability',
        status: 'published',
        url: '/guides/usability-engineering',
        type: 'guide',
        description: 'Complete process for implementing IEC 62366 usability engineering for medical devices',
      }
    ]
  },
  {
    id: 'implementation-guides',
    title: 'Implementation Guides',
    icon: '📖',
    color: '#8b5cf6',
    description: 'Step-by-step guides for implementing standards and processes',
    articles: [
      {
        id: 'medical-laser-implementation-guide',
        title: 'Medical Laser System Implementation Guide',
        category: 'implementation-guides',
        status: 'published',
        url: '/guides/medical-laser-implementation',
        type: 'guide',
        description: 'Visual lifecycle diagram and implementation roadmap for FDA-compliant medical laser system development',
      },
      {
        id: 'usability-engineering-guide',
        title: 'Usability Engineering Implementation Guide',
        category: 'implementation-guides',
        status: 'published',
        url: '/guides/usability-engineering',
        type: 'guide',
        description: 'Complete process for implementing IEC 62366 usability engineering for medical devices',
      },
      {
        id: 'integrated-risk-management-guide',
        title: 'Integrated Risk Management Implementation Guide',
        category: 'implementation-guides',
        status: 'published',
        url: '/guides/integrated-risk-management',
        type: 'guide',
        description: 'Comprehensive risk management integrating usability risk, software risk, and device risk with full traceability',
      },
    ]
  },
  {
    id: 'how-to',
    title: 'How-To Articles',
    icon: '🔧',
    color: '#10b981',
    description: 'Practical guides for common medical device development tasks',
    articles: [
      {
        id: 'how-to-fmea',
        title: 'How to Conduct an FMEA Analysis',
        category: 'how-to',
        status: 'published',
        url: '/how-to/conduct-fmea-analysis',
        type: 'howto',
        description: 'Step-by-step guide to performing Failure Mode and Effects Analysis for medical devices',
      },
      {
        id: 'how-to-design-development',
        title: 'How to Implement Design and Development per ISO 13485 7.3',
        category: 'how-to',
        status: 'published',
        url: '/how-to/design-development-iso13485',
        type: 'howto',
        description: 'Complete guide to design controls aligned with ISO 13485 and FDA QMSR',
      },
      {
        id: 'how-to-develop-medical-laser-system',
        title: 'How to Develop a Medical Laser System',
        category: 'how-to',
        status: 'published',
        url: '/how-to/develop-medical-laser-system',
        type: 'howto',
        description: 'Comprehensive guide covering design controls, risk management, software, usability, testing, and FDA submission for medical laser systems',
      },
    ]
  },
  {
    id: 'professional-development',
    title: 'Professional Development',
    icon: '💼',
    color: '#3b82f6',
    description: 'Career development resources, certifications, and networking opportunities',
    articles: [
      {
        id: 'professional-development-main',
        title: 'Professional Development Resources',
        category: 'professional-development',
        status: 'published',
        url: '/professional-development',
        type: 'guide',
        description: 'Industry insights, skill development pathways, certifications, and networking resources for medical device professionals',
      },
    ]
  },
  {
    id: 'tools',
    title: 'Interactive Tools & Calculators',
    icon: '🧮',
    color: '#f59e0b',
    description: 'Professional-grade calculators and interactive tools for medical device development',
    articles: [
      {
        id: 'fmea-calculator',
        title: 'FMEA Calculator',
        category: 'tools',
        status: 'published',
        url: '/tools/fmea',
        type: 'guide',
        description: 'Interactive RPN calculator with severity/occurrence/detection guides for ISO 14971 risk management',
      },
      {
        id: 'distributions-calculator',
        title: 'Statistical Distributions Calculator',
        category: 'tools',
        status: 'published',
        url: '/tools/distributions',
        type: 'guide',
        description: 'Visualize and analyze probability distributions for validation studies',
      },
      {
        id: 'sample-size-calculator',
        title: 'Sample Size Calculator',
        category: 'tools',
        status: 'published',
        url: '/tools/sample-size',
        type: 'guide',
        description: 'Calculate required sample sizes for validation and clinical studies',
      },
      {
        id: 'laser-safety-calculator',
        title: 'Laser Safety Calculator',
        category: 'tools',
        status: 'published',
        url: '/tools/laser-safety',
        type: 'guide',
        description: 'Calculate Maximum Permissible Exposure (MPE), NOHD, and laser classification per IEC 60825-1',
      },
      {
        id: 'software-risk-classification',
        title: 'Software Risk Classification Tool',
        category: 'tools',
        status: 'published',
        url: '/tools/software-risk-class',
        type: 'guide',
        description: 'Interactive decision tree for IEC 62304 software safety classification (Class A, B, C)',
      },
      {
        id: 'device-classification-tool',
        title: 'Device Classification Tool',
        category: 'tools',
        status: 'published',
        url: '/tools/device-classification',
        type: 'guide',
        description: 'Determine FDA device class (I, II, III) and regulatory controls',
      },
      {
        id: 'regulatory-pathway-tool',
        title: 'Regulatory Pathway Decision Tool',
        category: 'tools',
        status: 'published',
        url: '/tools/regulatory-pathway',
        type: 'guide',
        description: 'Determine appropriate FDA submission pathway (510k, PMA, De Novo)',
      },
      {
        id: 'design-change-notification-tool',
        title: 'Design Change Notification Guide',
        category: 'tools',
        status: 'published',
        url: '/tools/design-change-notification',
        type: 'guide',
        description: 'Visual decision tool for when to notify test labs (NRTL/CB) or regulatory bodies about design changes',
      },
      {
        id: 'cyber-device-classification-tool',
        title: 'Cyber Device Classification Tool',
        category: 'tools',
        status: 'published',
        url: '/tools/cyber-device-classification',
        type: 'guide',
        description: 'Determine if your device is a "cyber device" per FDA FD&C Act Section 524B and understand cybersecurity documentation requirements',
      },
      {
        id: 'cybersecurity-framework-mapper-tool',
        title: 'Cybersecurity Framework Mapper',
        category: 'tools',
        status: 'published',
        url: '/tools/cybersecurity-framework-mapper',
        type: 'guide',
        description: 'Interactive control overlap matrix mapping FDA, HIPAA, SOC 2, and IEC 81001-5-1 requirements with CSV export',
      },
    ]
  }
];

// Helper function to get total article count (unique articles only)
export function getTotalArticleCount(): number {
  const uniqueArticles = new Set<string>();
  KNOWLEDGE_CATEGORIES.forEach(category => {
    category.articles
      .filter(a => a.status === 'published')
      .forEach(article => {
        // Use URL as unique identifier to avoid counting duplicates
        uniqueArticles.add(article.url);
      });
  });
  return uniqueArticles.size;
}

// Helper function to get article count by category
export function getArticleCountByCategory(categoryId: string): number {
  const category = KNOWLEDGE_CATEGORIES.find(c => c.id === categoryId);
  if (!category) return 0;
  return category.articles.filter(a => a.status === 'published').length;
}

// Helper function to get all published articles
export function getAllPublishedArticles(): Article[] {
  return KNOWLEDGE_CATEGORIES.flatMap(category =>
    category.articles.filter(a => a.status === 'published')
  );
}

// Helper function to get articles by category
export function getArticlesByCategory(categoryId: string): Article[] {
  const category = KNOWLEDGE_CATEGORIES.find(c => c.id === categoryId);
  return category ? category.articles : [];
}

// Helper function to search articles
export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase();
  return getAllPublishedArticles().filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.description?.toLowerCase().includes(lowerQuery)
  );
}

