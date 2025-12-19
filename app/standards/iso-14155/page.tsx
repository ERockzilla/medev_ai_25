'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function ISO14155Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'ISO 14155',
        title: 'Clinical investigation of medical devices for human subjects — Good clinical practice',
        organization: 'ISO',
        publicationDate: '2020',
        currentVersion: '2020',
        category: 'clinical',
        purchaseUrl: 'https://www.iso.org/standard/71690.html',
      }}
      overview={{
        scope: 'ISO 14155 specifies requirements for the clinical investigation of medical devices in human subjects. It covers the design, conduct, recording, and reporting of clinical investigations to assess the safety and performance of medical devices. The standard applies to all clinical investigations, including those required for regulatory approval and post-market clinical follow-up studies.',
        whyItMatters: 'ISO 14155 is essential for conducting clinical investigations that meet regulatory requirements worldwide. Most medical devices require clinical data to demonstrate safety and effectiveness before market approval. This standard ensures clinical investigations are conducted ethically, scientifically sound, and in compliance with regulatory requirements. It is recognized by FDA, EU MDR, and other major regulatory bodies. Compliance with ISO 14155 helps ensure patient safety, data integrity, and successful regulatory submissions.',
        keyConcepts: [
          'Good Clinical Practice (GCP) principles',
          'Ethical considerations and informed consent',
          'Clinical investigation plan (CIP) development',
          'Investigator responsibilities and qualifications',
          'Subject protection and safety monitoring',
          'Data collection, management, and quality assurance',
          'Adverse event reporting and management',
          'Clinical investigation report (CIR) preparation',
          'Multi-site investigation coordination',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Clinical Investigation Plan (CIP)',
            description: 'A comprehensive plan must be developed before starting the investigation. The CIP must include objectives, design, methodology, statistical considerations, subject selection criteria, procedures, safety monitoring, and data management. The CIP must be approved by ethics committee and regulatory authority.',
          },
          {
            title: 'Ethics Committee Approval',
            description: 'All clinical investigations must be reviewed and approved by an independent ethics committee (IRB in US). The ethics committee evaluates the scientific validity, ethical acceptability, and risk-benefit ratio. Approval must be obtained before enrolling subjects.',
          },
          {
            title: 'Informed Consent',
            description: 'Subjects must provide informed consent before participation. Consent must be voluntary, based on adequate information about the investigation, risks, benefits, and alternatives. Consent must be documented and subjects can withdraw at any time.',
          },
          {
            title: 'Investigator Responsibilities',
            description: 'Investigators must be qualified, have adequate resources, and conduct the investigation per the CIP and ISO 14155. They are responsible for subject safety, protocol compliance, data accuracy, and adverse event reporting.',
          },
          {
            title: 'Subject Selection and Enrollment',
            description: 'Subjects must meet inclusion/exclusion criteria defined in the CIP. Enrollment must be documented, and subjects must be assigned to treatment groups per the randomization scheme (if applicable).',
          },
          {
            title: 'Safety Monitoring and Reporting',
            description: 'All adverse events must be documented and reported according to defined procedures. Serious adverse events must be reported to the sponsor, ethics committee, and regulatory authority within specified timelines. Safety monitoring continues throughout the investigation.',
          },
          {
            title: 'Data Management and Quality Assurance',
            description: 'Data must be collected accurately, completely, and in a timely manner. Data management procedures must ensure data integrity, confidentiality, and traceability. Quality assurance measures, including monitoring and auditing, must be implemented.',
          },
          {
            title: 'Clinical Investigation Report (CIR)',
            description: 'A comprehensive report must be prepared documenting the investigation design, conduct, results, and conclusions. The CIR must include statistical analysis, safety data, and conclusions regarding device safety and performance.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Implementation Roadmap',
        steps: [
          {
            step: 1,
            title: 'Determine Clinical Investigation Need',
            description: 'Assess whether clinical data is required for your device based on regulatory requirements, device classification, and risk level. High-risk devices and novel technologies typically require clinical investigations. Review regulatory guidance for your device type.',
          },
          {
            step: 2,
            title: 'Develop Clinical Investigation Plan (CIP)',
            description: 'Create a comprehensive CIP including objectives, study design, endpoints, sample size calculation, subject selection criteria, procedures, safety monitoring plan, and statistical analysis plan. Consider consulting a clinical research organization (CRO) or clinical expert.',
          },
          {
            step: 3,
            title: 'Select Investigators and Sites',
            description: 'Identify qualified investigators with appropriate training, experience, and resources. Select investigation sites with adequate facilities, patient populations, and regulatory compliance. Ensure investigators understand their responsibilities.',
          },
          {
            step: 4,
            title: 'Obtain Ethics Committee Approval',
            description: 'Submit the CIP and supporting documents to an independent ethics committee (IRB). Address any questions or concerns raised by the committee. Obtain written approval before starting the investigation.',
          },
          {
            step: 5,
            title: 'Obtain Regulatory Approval',
            description: 'Submit the CIP and required documents to the regulatory authority (FDA IDE, EU competent authority, etc.). Address any questions and obtain approval before enrolling subjects. Some investigations may qualify for abbreviated review.',
          },
          {
            step: 6,
            title: 'Prepare Investigation Materials',
            description: 'Develop case report forms (CRFs), informed consent documents, investigator training materials, and data management procedures. Ensure all materials are approved and ready before site initiation.',
          },
          {
            step: 7,
            title: 'Site Initiation and Training',
            description: 'Conduct site initiation visits to train investigators and site staff on the CIP, procedures, and data collection. Ensure all staff understand their responsibilities and the investigation requirements.',
          },
          {
            step: 8,
            title: 'Conduct Investigation and Monitor',
            description: 'Enroll subjects per the CIP, collect data accurately, and monitor subject safety. Conduct regular monitoring visits to ensure protocol compliance and data quality. Report adverse events promptly.',
          },
          {
            step: 9,
            title: 'Data Analysis and Reporting',
            description: 'Analyze data per the statistical analysis plan. Prepare the Clinical Investigation Report (CIR) documenting all aspects of the investigation, results, and conclusions. Submit the CIR to regulatory authorities as required.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Determining if clinical investigation is required',
            solution: 'Review regulatory guidance for your device type and classification. High-risk devices, novel technologies, and devices with limited predicate data typically require clinical investigations. Consider consulting regulatory experts.',
          },
          {
            challenge: 'High cost and long timelines',
            solution: 'Plan early and budget appropriately. Consider feasibility studies or pilot investigations before large studies. Use efficient study designs and consider multi-site investigations to accelerate enrollment.',
          },
          {
            challenge: 'Subject recruitment difficulties',
            solution: 'Select sites with appropriate patient populations. Consider patient-friendly study designs and procedures. Provide adequate compensation and support for subjects. Consider using patient advocacy groups.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'ISO 14155 for Medical Laser Clinical Investigations',
        description: 'Medical laser systems often require clinical investigations to demonstrate safety and effectiveness, especially for new indications, novel wavelengths, or significant design changes. Clinical data supports regulatory submissions and market access.',
        applications: [
          {
            application: 'New Laser Indication',
            considerations: [
              'Design clinical investigation to demonstrate safety and effectiveness for new indication',
              'Define primary and secondary endpoints relevant to clinical outcome',
              'Include appropriate control groups or historical controls',
              'Monitor for laser-specific adverse events (burns, scarring, pigmentation changes)',
            ],
          },
          {
            application: 'Novel Wavelength or Technology',
            considerations: [
              'Conduct feasibility study before large pivotal study',
              'Include safety endpoints specific to new technology',
              'Compare to established laser treatments where appropriate',
              'Monitor long-term effects and patient satisfaction',
            ],
          },
          {
            application: 'Post-Market Clinical Follow-up (PMCF)',
            considerations: [
              'Design PMCF study per EU MDR requirements',
              'Focus on real-world safety and effectiveness data',
              'Include diverse patient populations and use conditions',
              'Monitor for rare adverse events not seen in pre-market studies',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'QMS requirements include clinical investigation planning and documentation',
          url: '/standards/iso-13485',
        },
        {
          number: 'ISO 14971',
          title: 'Risk management',
          relationship: 'Clinical data supports risk assessment and risk-benefit analysis',
          url: '/standards/iso-14971',
        },
        {
          number: 'ISO 10993',
          title: 'Biological evaluation',
          relationship: 'Clinical data can support biological safety evaluation',
          url: '/standards/iso-10993',
        },
      ]}
      hotTake={{
        take: `ISO 14155 governs clinical investigations for medical devices. If your device needs clinical data—and most do beyond Class I—this standard defines how to get it ethically and rigorously.

Clinical studies are expensive and time-consuming. Plan early, design efficiently, and don't underestimate subject recruitment challenges.`,
        context: 'Clinical data is often the rate-limiting step to market access. Early planning prevents costly delays.',
        realWorldTips: [
          'Determine clinical evidence needs early—don\'t discover you need a study at the last minute.',
          'Work with experienced CROs and investigators who understand medical device studies.',
          'Subject recruitment is almost always harder than expected. Plan for it.',
          'Post-market clinical follow-up (PMCF) is now mandatory under EU MDR—plan for ongoing data collection.',
        ],
      }}
    />
  );
}

