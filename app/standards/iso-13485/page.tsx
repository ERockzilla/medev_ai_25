'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function ISO13485Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'ISO 13485',
        title: 'Medical devices — Quality management systems — Requirements for regulatory purposes',
        organization: 'ISO',
        publicationDate: '2016',
        currentVersion: '2016',
        category: 'foundation',
        purchaseUrl: 'https://www.iso.org/standard/59752.html',
      }}
      overview={{
        scope: 'ISO 13485 specifies requirements for a quality management system where an organization needs to demonstrate its ability to provide medical devices and related services that consistently meet customer and applicable regulatory requirements. This standard is applicable to organizations throughout the medical device lifecycle, including design and development, production, storage and distribution, installation, servicing, and final decommissioning and disposal of medical devices.',
        whyItMatters: 'ISO 13485 is the foundation of medical device quality management. It provides the framework for ensuring consistent quality, regulatory compliance, and customer satisfaction. For medical device manufacturers, ISO 13485 certification is often required for market access in many countries, including Canada, Australia, and the EU. FDA\'s Quality Management System Regulation (QMSR) final rule aligns FDA requirements with ISO 13485:2016, making ISO 13485 the standard for FDA compliance as well.',
        keyConcepts: [
          'Process-based approach to quality management',
          'Risk-based thinking throughout the QMS',
          'Document control and record management',
          'Design and development controls',
          'Purchasing and supplier management',
          'Production and service provision controls',
          'Monitoring and measurement of processes and products',
          'Corrective and preventive action (CAPA)',
          'Management responsibility and resource management',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Quality Management System (Clause 4)',
            description: 'Organizations must establish, document, implement, and maintain a quality management system. This includes defining the scope, establishing quality policy and objectives, and maintaining documented procedures and records. The QMS must be appropriate for the organization\'s activities and the medical devices it provides.',
          },
          {
            title: 'Management Responsibility (Clause 5)',
            description: 'Top management must demonstrate commitment to the QMS, establish quality policy and objectives, ensure adequate resources are available, and conduct management reviews. Management must also ensure customer and regulatory requirements are understood and met.',
          },
          {
            title: 'Resource Management (Clause 6)',
            description: 'Organizations must provide adequate human resources, infrastructure, and work environment. Personnel must be competent based on education, training, skills, and experience. Training records must be maintained.',
          },
          {
            title: 'Product Realization (Clause 7)',
            description: 'This clause covers design and development, purchasing, production and service provision, and control of monitoring and measuring equipment. Design controls must ensure design outputs meet design inputs, and design changes must be controlled.',
          },
          {
            title: 'Measurement, Analysis, and Improvement (Clause 8)',
            description: 'Organizations must monitor and measure processes and products, conduct internal audits, analyze data, and implement corrective and preventive actions. Nonconforming product must be controlled and prevented from unintended use.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Implementation Roadmap',
        steps: [
          {
            step: 1,
            title: 'Gap Analysis and Planning',
            description: 'Conduct a gap analysis comparing your current quality system to ISO 13485 requirements. Identify areas needing improvement and create an implementation plan with timelines and responsibilities. Consider hiring a consultant or using gap analysis templates.',
          },
          {
            step: 2,
            title: 'Establish Quality Policy and Objectives',
            description: 'Develop a quality policy that reflects your organization\'s commitment to quality and regulatory compliance. Set measurable quality objectives aligned with the policy. Ensure these are communicated throughout the organization.',
          },
          {
            step: 3,
            title: 'Document Control System',
            description: 'Implement a document control system that ensures all QMS documents are approved, reviewed, updated, and available where needed. Use version control and change history. Consider electronic document management systems for efficiency.',
          },
          {
            step: 4,
            title: 'Design and Development Controls',
            description: 'Establish design and development procedures covering planning, inputs, outputs, review, verification, validation, and transfer. Create design history files (DHF) for each device. Link design controls to risk management (ISO 14971).',
          },
          {
            step: 5,
            title: 'Supplier Management',
            description: 'Develop supplier evaluation and selection criteria. Establish purchasing controls including supplier qualification, purchase order review, and incoming inspection. Maintain approved supplier lists and performance records.',
          },
          {
            step: 6,
            title: 'Production Controls',
            description: 'Implement production controls including work instructions, process validation, equipment calibration, and environmental controls. Establish traceability systems for components and finished devices. Control nonconforming product.',
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
            challenge: 'Over-documentation or under-documentation',
            solution: 'Document only what is necessary for effective QMS operation. Focus on processes that affect product quality and regulatory compliance. Use templates and examples, but tailor them to your organization.',
          },
          {
            challenge: 'Lack of management commitment',
            solution: 'Ensure top management understands the business value of ISO 13485. Link quality objectives to business objectives. Include quality metrics in management reviews and performance evaluations.',
          },
          {
            challenge: 'Inadequate design controls',
            solution: 'Start early in product development. Use design review checkpoints. Maintain traceability from user needs through design inputs to design outputs. Link design changes to risk management.',
          },
          {
            challenge: 'Supplier management complexity',
            solution: 'Categorize suppliers by risk. Focus detailed controls on critical suppliers. Use supplier questionnaires and audits. Consider supplier quality agreements for key components.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'ISO 13485 for Medical Laser Systems',
        description: 'For Class 4 laser systems (Class II/III medical devices), ISO 13485 provides the quality management framework ensuring consistent manufacturing, proper design controls, and regulatory compliance. Key considerations include laser-specific design controls, supplier management for critical components (laser diodes, optics, safety interlocks), and production controls for high-power laser assembly.',
        applications: [
          {
            application: 'Surgical Laser Systems (Ophthalmic, Dermatological)',
            considerations: [
              'Design controls must address laser power accuracy, beam delivery, and safety interlocks',
              'Supplier management critical for laser diodes, optical components, and safety switches',
              'Production controls must ensure proper alignment, calibration, and testing of laser systems',
              'Traceability required for laser components and finished devices',
              'CAPA system must address laser-related incidents and near-misses',
            ],
          },
          {
            application: 'Therapeutic Laser Systems',
            considerations: [
              'Design validation must demonstrate therapeutic efficacy and safety',
              'Production controls must ensure consistent laser output characteristics',
              'Service and maintenance procedures critical for laser system longevity',
              'Post-market surveillance must monitor laser performance and adverse events',
              'Documentation must support regulatory submissions (510(k), CE Mark)',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'ISO 14971',
          title: 'Application of risk management to medical devices',
          relationship: 'Risk management is integrated throughout ISO 13485, particularly in design controls',
          url: '/standards/iso-14971',
        },
        {
          number: 'IEC 60601-1',
          title: 'Medical electrical equipment — General requirements',
          relationship: 'ISO 13485 QMS ensures compliance with IEC 60601-1 requirements',
          url: '/standards/iec-60601-1',
        },
        {
          number: 'IEC 60601-2-22',
          title: 'Medical electrical equipment — Laser equipment',
          relationship: 'ISO 13485 production controls ensure laser systems meet IEC 60601-2-22',
          url: '/standards/iec-60601-2-22',
        },
      ]}
      hotTake={{
        take: `ISO 13485 is your QMS foundation—everything else builds on this. With FDA's QMSR final rule aligning with 13485:2016, this standard is now the single source of truth for quality management across FDA and international markets.

Don't over-engineer your QMS. Start lean, document what you actually do, and expand as your organization grows. A bloated QMS creates compliance burden without adding value.`,
        context: 'A well-designed QMS accelerates development and regulatory submissions—it shouldn\'t slow you down.',
        realWorldTips: [
          'FDA QMSR now references ISO 13485:2016 directly—align your QMS accordingly.',
          'Focus design controls on traceability: user needs → requirements → design → verification → validation.',
          'CAPA is where auditors spend the most time. Build a robust investigation process.',
          'Supplier management complexity scales with risk—don\'t treat all suppliers the same.',
        ],
      }}
    />
  );
}

