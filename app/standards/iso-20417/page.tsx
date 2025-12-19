'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function ISO20417Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'ISO 20417',
        title: 'Medical devices — Information to be supplied by the manufacturer',
        organization: 'ISO',
        publicationDate: '2021',
        currentVersion: '2021',
        category: 'labeling',
        purchaseUrl: 'https://www.iso.org/standard/73340.html',
      }}
      overview={{
        scope: 'ISO 20417 specifies requirements for information to be supplied by medical device manufacturers. It covers information that must be provided on the device itself, on its packaging, and in accompanying documentation. The standard addresses labeling requirements, instructions for use, and other information necessary for safe and effective device use.',
        whyItMatters: 'ISO 20417 ensures that medical device users receive essential information needed for safe and effective device use. Proper information supply is required for regulatory compliance worldwide, including FDA, EU MDR, and other major markets. This standard helps manufacturers determine what information must be provided and where, ensuring consistency and completeness. Compliance with ISO 20417 supports regulatory submissions and helps prevent use errors.',
        keyConcepts: [
          'Information requirements for medical devices',
          'Labeling content and format',
          'Instructions for use (IFU) requirements',
          'Information hierarchy and prioritization',
          'Language requirements for different markets',
          'Information for different user types',
          'Symbol usage (ISO 15223)',
          'Accessibility of information',
          'Information updates and revisions',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Device Labeling',
            description: 'Essential information must be provided on the device itself, including device identification, manufacturer information, and critical safety information. Information must be legible and durable under normal use conditions.',
          },
          {
            title: 'Packaging Labeling',
            description: 'Additional information may be provided on device packaging, including storage conditions, handling instructions, and regulatory markings. Packaging must protect information from damage.',
          },
          {
            title: 'Instructions for Use (IFU)',
            description: 'Comprehensive instructions for use must be provided, covering device description, intended use, contraindications, warnings, precautions, use instructions, maintenance, and troubleshooting. IFU must be appropriate for the intended user.',
          },
          {
            title: 'Information Hierarchy',
            description: 'Information must be organized hierarchically, with the most critical information (warnings, contraindications) prominently displayed. Less critical information can be in detailed sections.',
          },
          {
            title: 'User-Specific Information',
            description: 'Information must be appropriate for the intended user (healthcare professional, patient, lay user). Consider user knowledge, training, and use environment when preparing information.',
          },
          {
            title: 'Language Requirements',
            description: 'Information must be provided in the official language(s) of the target market. Some markets require multiple languages. Ensure accurate translation and cultural appropriateness.',
          },
          {
            title: 'Symbol Usage',
            description: 'Symbols from ISO 15223 may be used to convey information, but text explanations may be required in IFU. Ensure symbols are understood by target users.',
          },
          {
            title: 'Information Updates',
            description: 'Information must be updated when device changes affect safety or use. Establish procedures for information revision and distribution. Track information versions.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Implementation Roadmap',
        steps: [
          {
            step: 1,
            title: 'Identify Information Requirements',
            description: 'Determine what information must be supplied based on ISO 20417, regulatory requirements (FDA, EU MDR), and device type. Consider device classification, intended use, and user type.',
          },
          {
            step: 2,
            title: 'Categorize Information',
            description: 'Categorize information by location (device, packaging, IFU) and priority (critical, important, supplementary). Identify information that must be on-device versus information that can be in IFU.',
          },
          {
            step: 3,
            title: 'Design Device Labeling',
            description: 'Design device labeling with essential information that must be visible on the device. Consider space constraints, durability, and legibility. Use ISO 15223 symbols where appropriate.',
          },
          {
            step: 4,
            title: 'Design Packaging Labeling',
            description: 'Design packaging labeling with additional information not on the device. Include regulatory markings, storage conditions, and handling instructions. Ensure packaging protects information.',
          },
          {
            step: 5,
            title: 'Develop Instructions for Use',
            description: 'Create comprehensive IFU covering all required information. Organize information hierarchically with critical information first. Include device description, intended use, warnings, use instructions, maintenance, and troubleshooting.',
          },
          {
            step: 6,
            title: 'Consider User Needs',
            description: 'Tailor information to intended users. Healthcare professionals may need technical details, while patients may need simplified instructions. Consider user knowledge, training, and use environment.',
          },
          {
            step: 7,
            title: 'Validate Information',
            description: 'Conduct user testing to validate that information is clear, complete, and understandable. Test with representative users in relevant use environments. Address any comprehension issues.',
          },
          {
            step: 8,
            title: 'Translate and Localize',
            description: 'Translate information into required languages for target markets. Ensure accurate translation and cultural appropriateness. Consider local regulations and requirements.',
          },
          {
            step: 9,
            title: 'Establish Information Control',
            description: 'Establish document control procedures for labeling and IFU. Control information versions, updates, and distribution. Link information to device versions and changes.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Balancing completeness with readability',
            solution: 'Use information hierarchy to prioritize critical information. Provide detailed information in IFU while keeping device labeling concise. Use symbols and visual design to improve readability.',
          },
          {
            challenge: 'Managing multiple language versions',
            solution: 'Establish translation management processes with qualified translators. Use translation memory tools for consistency. Validate translations with native speakers and users.',
          },
          {
            challenge: 'Keeping information current',
            solution: 'Establish change control processes that trigger information updates when device changes affect safety or use. Maintain version control and distribution tracking.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'ISO 20417 for Medical Laser Systems',
        description: 'Medical laser systems require comprehensive information supply covering safety, operation, maintenance, and regulatory compliance. Information must be appropriate for healthcare professionals operating the equipment.',
        applications: [
          {
            application: 'Device Labeling',
            considerations: [
              'Laser class and wavelength on device',
              'Manufacturer name and contact information',
              'Model number and serial number',
              'Regulatory markings (CE, FDA)',
              'Critical safety warnings',
            ],
          },
          {
            application: 'Instructions for Use',
            considerations: [
              'Comprehensive operation manual',
              'Safety procedures and warnings',
              'Treatment protocols and parameters',
              'Maintenance and calibration procedures',
              'Troubleshooting guide',
              'Regulatory compliance information',
            ],
          },
          {
            application: 'User Training Materials',
            considerations: [
              'Training materials for operators',
              'Safety training requirements',
              'Hands-on training procedures',
              'Competency assessment criteria',
              'Refresher training schedules',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'ISO 15223',
          title: 'Symbols for medical device labels',
          relationship: 'ISO 15223 provides symbols that can be used to convey information per ISO 20417',
          url: '/standards/iso-15223',
        },
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'QMS requirements include labeling control and information management',
          url: '/standards/iso-13485',
        },
        {
          number: 'IEC 62366',
          title: 'Usability engineering',
          relationship: 'Usability requirements include information design and user instructions',
          url: '/standards/iec-62366',
        },
      ]}
      hotTake={{
        take: `ISO 20417 tells you WHAT information to provide. ISO 15223 tells you HOW to express it with symbols. Use them together for complete labeling compliance.

The hierarchy matters: device itself → packaging → IFU. Critical safety information goes on the device. Everything else cascades to documentation.`,
        context: 'Complete, clear labeling is a regulatory requirement and a patient safety imperative.',
        realWorldTips: [
          'Start with regulatory requirements (FDA, EU MDR) to identify what must be supplied.',
          'Laser systems need comprehensive IFU covering safety, operation, and maintenance.',
          'Language requirements vary by market—plan translations early.',
          'Link labeling to design control—IFU should trace to user requirements.',
        ],
      }}
    />
  );
}

