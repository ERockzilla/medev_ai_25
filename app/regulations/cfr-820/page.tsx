'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function CFR820Page() {
  return (
    <RegulationPageTemplate
      regulation={{
        number: '21 CFR Part 820',
        title: 'Quality System Regulation (QMSR)',
        organization: 'FDA',
        effectiveDate: '2024 (aligned with ISO 13485:2016)',
        category: 'quality-system',
        regulationUrl: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820',
        guidanceUrl: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/quality-system-regulation',
      }}
      overview={{
        scope: '21 CFR Part 820 establishes quality system requirements for medical device manufacturers. The Quality System Regulation (QMSR) is now aligned with ISO 13485:2016, creating harmonized requirements for quality management systems. Part 820 covers all aspects of device design, development, production, and distribution.',
        applicability: 'Part 820 applies to all medical device manufacturers, including those that design, manufacture, prepare, process, assemble, or package medical devices. It applies to finished device manufacturers, contract manufacturers, and specification developers. The regulation covers devices intended for human use and veterinary devices.',
        whyItMatters: '21 CFR Part 820 is the foundation of FDA quality system requirements for medical devices. Compliance is mandatory for US market access. The 2024 update aligning with ISO 13485:2016 creates harmonized requirements, allowing manufacturers to use a single QMS for both FDA and international markets. Non-compliance can result in FDA inspections, warning letters, import detentions, and product recalls.',
        keyConcepts: [
          'Quality management system requirements',
          'Design controls and design history file (DHF)',
          'Corrective and preventive action (CAPA)',
          'Management responsibility and resource management',
          'Production and process controls',
          'Purchasing controls and supplier management',
          'Document and record control',
          'Nonconforming product control',
          'Quality audits and management review',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Quality Management System (820.5)',
            description: 'Manufacturers must establish and maintain a quality management system appropriate for the device. The QMS must include quality policy, quality objectives, quality planning, and documented procedures. The system must be effective and continuously improved.',
          },
          {
            title: 'Management Responsibility (820.20)',
            description: 'Management must establish quality policy and objectives, ensure adequate resources, appoint management representative, and conduct management reviews. Management must ensure customer and regulatory requirements are understood and met.',
          },
          {
            title: 'Design Controls (820.30)',
            description: 'Manufacturers must establish and maintain procedures for design and development. Design controls include design planning, design inputs, design outputs, design review, design verification, design validation, design transfer, design changes, and design history file (DHF).',
          },
          {
            title: 'Document Control (820.40)',
            description: 'Manufacturers must establish procedures for document approval, distribution, and changes. Documents must be reviewed and approved before use. Changes must be reviewed and approved. Obsolete documents must be removed or identified.',
          },
          {
            title: 'Purchasing Controls (820.50)',
            description: 'Manufacturers must establish procedures for evaluating and selecting suppliers. Purchasing documents must specify requirements. Incoming products must be verified. Supplier performance must be evaluated.',
          },
          {
            title: 'Production and Process Controls (820.70)',
            description: 'Manufacturers must establish procedures for production and process controls including work instructions, process validation, equipment calibration, environmental controls, and personnel qualification.',
          },
          {
            title: 'Corrective and Preventive Action (CAPA) (820.100)',
            description: 'Manufacturers must establish procedures for investigating nonconformities, identifying root causes, implementing corrections, and preventing recurrence. CAPA effectiveness must be verified.',
          },
          {
            title: 'Nonconforming Product (820.90)',
            description: 'Manufacturers must establish procedures for identifying, documenting, evaluating, segregating, and disposing of nonconforming product. Nonconforming product must be prevented from unintended use.',
          },
        ],
      }}
      complianceGuide={{
        title: 'Compliance Roadmap',
        steps: [
          {
            step: 1,
            title: 'Gap Analysis',
            description: 'Conduct gap analysis comparing current quality system to Part 820 requirements (aligned with ISO 13485:2016). Identify areas needing improvement and create implementation plan with timelines and responsibilities.',
          },
          {
            step: 2,
            title: 'Establish Quality Policy and Objectives',
            description: 'Develop quality policy reflecting commitment to quality and regulatory compliance. Set measurable quality objectives aligned with policy. Communicate policy and objectives throughout organization.',
          },
          {
            step: 3,
            title: 'Document Control System',
            description: 'Implement document control system ensuring all QMS documents are approved, reviewed, updated, and available where needed. Use version control and change history. Consider electronic document management systems.',
          },
          {
            step: 4,
            title: 'Design Controls',
            description: 'Establish design and development procedures covering planning, inputs, outputs, review, verification, validation, and transfer. Create design history files (DHF) for each device. Link design controls to risk management.',
          },
          {
            step: 5,
            title: 'Supplier Management',
            description: 'Develop supplier evaluation and selection criteria. Establish purchasing controls including supplier qualification, purchase order review, and incoming inspection. Maintain approved supplier lists and performance records.',
          },
          {
            step: 6,
            title: 'Production Controls',
            description: 'Implement production controls including work instructions, process validation, equipment calibration, and environmental controls. Establish traceability systems. Control nonconforming product.',
          },
          {
            step: 7,
            title: 'CAPA System',
            description: 'Implement corrective and preventive action procedures. Establish processes for investigating nonconformities, identifying root causes, implementing corrections, and preventing recurrence. Track CAPA effectiveness.',
          },
          {
            step: 8,
            title: 'Internal Audits and Management Review',
            description: 'Conduct regular internal audits of the QMS. Schedule management reviews to evaluate QMS effectiveness, review quality objectives, and identify improvement opportunities. Document all findings and actions.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Transitioning to ISO 13485:2016 alignment',
            solution: 'Review FDA guidance on QMSR transition. Update QMS procedures to align with ISO 13485:2016 while maintaining FDA-specific requirements. Train staff on changes. Update documentation systematically.',
          },
          {
            challenge: 'Implementing design controls',
            solution: 'Start with design planning and design inputs. Establish design review process. Link design controls to risk management. Create design history files. Consider using design control templates and tools.',
          },
          {
            challenge: 'Managing supplier quality',
            solution: 'Develop supplier evaluation criteria and processes. Establish supplier qualification requirements. Implement incoming inspection and supplier performance monitoring. Maintain supplier records.',
          },
        ],
      }}
      relatedRegulations={[
        {
          number: '21 CFR Part 11',
          title: 'Electronic Records; Electronic Signatures',
          relationship: 'Part 11 applies to electronic records used to meet Part 820 requirements',
          url: '/regulations/cfr-11',
        },
        {
          number: '21 CFR Part 830',
          title: 'Unique Device Identification',
          relationship: 'UDI requirements complement Part 820 traceability requirements',
          url: '/regulations/cfr-830',
        },
      ]}
      relatedStandards={[
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'Part 820 is now aligned with ISO 13485:2016, creating harmonized requirements',
          url: '/standards/iso-13485',
        },
        {
          number: 'ISO 14971',
          title: 'Risk management',
          relationship: 'Risk management is integrated into Part 820 quality system requirements',
          url: '/standards/iso-14971',
        },
      ]}
      hotTake={{
        take: `Part 820 is FDA's Quality System Regulation—and with QMSR, it now references ISO 13485:2016 directly. This is a huge harmonization win.

If you're building a QMS from scratch, build to ISO 13485. You'll meet FDA requirements and international requirements with one system.`,
        context: 'FDA\'s QMSR alignment with ISO 13485 simplifies global compliance for manufacturers.',
        realWorldTips: [
          'QMSR is now in effect—align your QMS with ISO 13485:2016.',
          'Design controls and CAPA remain FDA\'s highest inspection focus areas.',
          'Document your processes—not just what to do, but how to prove you did it.',
          'FDA inspections focus on trending and pattern analysis. Track your data.',
        ],
      }}
    />
  );
}

