'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function CFR11Page() {
  return (
    <RegulationPageTemplate
      regulation={{
        number: '21 CFR Part 11',
        title: 'Electronic Records; Electronic Signatures',
        organization: 'FDA',
        effectiveDate: '1997',
        category: 'electronic-records',
        regulationUrl: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11',
        guidanceUrl: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application',
      }}
      overview={{
        scope: '21 CFR Part 11 establishes requirements for electronic records and electronic signatures used in FDA-regulated industries. It applies when electronic records are used in place of paper records or when electronic signatures are used in place of handwritten signatures. The regulation covers systems used to create, modify, maintain, archive, retrieve, or transmit electronic records.',
        applicability: 'Part 11 applies to all FDA-regulated industries including medical devices, pharmaceuticals, biologics, and food. It applies when: (1) electronic records are used in place of paper records required by FDA regulations, or (2) electronic signatures are used in place of handwritten signatures. Common applications include eQMS systems, electronic batch records, electronic CAPA systems, and electronic design history files.',
        whyItMatters: '21 CFR Part 11 is critical for modern medical device companies using electronic systems. Most companies use electronic quality management systems (eQMS), electronic document management, and electronic signatures. Non-compliance can result in FDA warning letters, import detentions, and rejection of regulatory submissions. Understanding Part 11 helps ensure electronic systems meet FDA requirements and support regulatory compliance.',
        keyConcepts: [
          'Electronic records validation',
          'Audit trails and data integrity',
          'Electronic signature requirements',
          'System security and access controls',
          'Data backup and recovery',
          'System validation and testing',
          'Change control and configuration management',
          'User training and qualification',
          'Risk-based approach to compliance',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'System Validation (11.10)',
            description: 'Systems must be validated to ensure accuracy, reliability, consistent intended performance, and the ability to discern invalid or altered records. Validation must be documented and include testing of system functions.',
          },
          {
            title: 'Audit Trails (11.10(e))',
            description: 'Systems must use secure, computer-generated, time-stamped audit trails to independently record the date and time of operator entries and actions that create, modify, or delete electronic records. Audit trails must be retained and available for review.',
          },
          {
            title: 'Electronic Signatures (11.50-11.200)',
            description: 'Electronic signatures must be unique to one person and not reused or reassigned. They must include identification of the signer, date and time of signing, and meaning of the signature. Signatures must be linked to their respective records.',
          },
          {
            title: 'Access Controls (11.10(d))',
            description: 'Systems must have procedures and controls to ensure that only authorized individuals can access the system, electronically sign records, alter records, or perform operations. Access must be limited to authorized individuals.',
          },
          {
            title: 'Data Integrity (11.10)',
            description: 'Systems must ensure that electronic records are accurate, complete, and not altered in an unauthorized manner. Controls must prevent unauthorized access, modification, or deletion of records.',
          },
          {
            title: 'System Documentation',
            description: 'System documentation must be maintained including standard operating procedures, system descriptions, validation documentation, and user manuals. Documentation must be current and available.',
          },
          {
            title: 'Backup and Recovery (11.10(c))',
            description: 'Systems must have procedures for backup and recovery of electronic records. Backup copies must be exact, complete, and retrievable. Recovery procedures must be tested and documented.',
          },
          {
            title: 'Change Control',
            description: 'Changes to systems must be controlled, validated, and documented. Change control procedures must ensure that system changes do not compromise data integrity or system validation.',
          },
        ],
      }}
      complianceGuide={{
        title: 'Compliance Roadmap',
        steps: [
          {
            step: 1,
            title: 'Assess System Scope',
            description: 'Identify all electronic systems that create, modify, maintain, archive, retrieve, or transmit electronic records subject to FDA regulations. Determine which systems fall under Part 11 requirements.',
          },
          {
            step: 2,
            title: 'Conduct Gap Analysis',
            description: 'Evaluate each system against Part 11 requirements. Identify gaps in validation, audit trails, access controls, electronic signatures, and documentation. Prioritize gaps based on risk.',
          },
          {
            step: 3,
            title: 'Develop Validation Plan',
            description: 'Create a validation plan for each system covering validation approach, scope, test cases, acceptance criteria, and documentation requirements. Consider risk-based validation approach.',
          },
          {
            step: 4,
            title: 'Implement Access Controls',
            description: 'Establish user access controls including unique user IDs, password policies, role-based access, and periodic access reviews. Ensure access is limited to authorized individuals only.',
          },
          {
            step: 5,
            title: 'Enable Audit Trails',
            description: 'Ensure systems have secure, computer-generated, time-stamped audit trails. Verify audit trails capture all required actions. Test audit trail functionality and reviewability.',
          },
          {
            step: 6,
            title: 'Implement Electronic Signatures',
            description: 'Configure electronic signatures to meet Part 11 requirements including unique identification, date/time stamping, and meaning of signature. Ensure signatures are linked to records.',
          },
          {
            step: 7,
            title: 'Establish Backup and Recovery',
            description: 'Implement backup and recovery procedures. Test backup and recovery processes. Document procedures and verify backup integrity. Ensure backups are stored securely.',
          },
          {
            step: 8,
            title: 'Document System Procedures',
            description: 'Create standard operating procedures for system use, administration, validation, change control, and backup/recovery. Ensure procedures are current and accessible to users.',
          },
          {
            step: 9,
            title: 'Train Users',
            description: 'Train users on Part 11 requirements, system use, and procedures. Document training. Ensure users understand their responsibilities for data integrity and electronic signatures.',
          },
          {
            step: 10,
            title: 'Maintain Compliance',
            description: 'Establish ongoing compliance monitoring including periodic system reviews, access reviews, validation maintenance, and change control. Update documentation as systems change.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Determining which systems require Part 11 compliance',
            solution: 'Assess whether electronic records are used in place of paper records required by FDA regulations. If yes, Part 11 applies. Consider FDA guidance on Part 11 scope and application.',
          },
          {
            challenge: 'Validating legacy systems',
            solution: 'Conduct retrospective validation for legacy systems. Document existing controls and procedures. Implement missing controls where feasible. Consider risk-based approach for legacy systems.',
          },
          {
            challenge: 'Managing cloud-based systems',
            solution: 'Ensure cloud service providers understand Part 11 requirements. Establish agreements covering data integrity, access controls, audit trails, and backup/recovery. Verify provider compliance.',
          },
        ],
      }}
      relatedRegulations={[
        {
          number: '21 CFR Part 820',
          title: 'Quality System Regulation',
          relationship: 'Part 11 applies to electronic records used to meet Part 820 requirements',
          url: '/regulations/cfr-820',
        },
        {
          number: '21 CFR Part 803',
          title: 'Medical Device Reporting',
          relationship: 'Electronic MDR submissions must comply with Part 11',
          url: '/regulations/cfr-803',
        },
      ]}
      relatedStandards={[
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'Part 11 requirements apply to electronic QMS systems used for ISO 13485 compliance',
          url: '/standards/iso-13485',
        },
      ]}
      hotTake={{
        take: `Part 11 covers electronic records and signatures. If you use electronic systems for QMS records—and you probably do—this applies to you.

The good news: FDA takes a risk-based approach. Not every system needs the same level of validation. Focus your efforts on systems with the highest data integrity impact.`,
        context: 'Modern quality systems are electronic. Part 11 compliance enables digital transformation without sacrificing data integrity.',
        realWorldTips: [
          'Audit trails are non-negotiable. Ensure your systems capture who did what and when.',
          'Electronic signatures must be unique, linked to records, and include meaning.',
          'Cloud systems can comply—but you need the right agreements with vendors.',
          'Validation doesn\'t mean over-documenting. It means proving the system works.',
        ],
      }}
    />
  );
}

