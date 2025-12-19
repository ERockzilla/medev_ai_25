'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function ISO15223Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'ISO 15223',
        title: 'Medical devices — Symbols to be used with medical device labels, labelling and information to be supplied',
        organization: 'ISO',
        publicationDate: '2021',
        currentVersion: '2021',
        category: 'labeling',
        purchaseUrl: 'https://www.iso.org/standard/73339.html',
      }}
      overview={{
        scope: 'ISO 15223 specifies symbols used to express information supplied for a medical device. These symbols may be used on the medical device itself, on its packaging, or in accompanying documentation. The standard provides standardized symbols that can be used internationally, reducing the need for text in multiple languages and improving clarity.',
        whyItMatters: 'ISO 15223 symbols enable medical device manufacturers to communicate essential information efficiently and consistently across different languages and markets. Using standardized symbols reduces labeling space, improves readability, and helps meet international regulatory requirements. Many regulatory authorities, including FDA and EU MDR, recognize ISO 15223 symbols. Proper use of symbols can streamline global market access and improve user understanding.',
        keyConcepts: [
          'Standardized symbol library for medical devices',
          'Symbol usage requirements and restrictions',
          'Symbol meaning and interpretation',
          'Labeling space efficiency',
          'International recognition and acceptance',
          'Symbol size and legibility requirements',
          'Combination of symbols and text',
          'Symbol validation and user testing',
          'Regulatory acceptance of symbols',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Symbol Selection',
            description: 'Select symbols from ISO 15223 that accurately represent the information to be conveyed. Ensure symbols are appropriate for the device type and use environment. Consider user understanding and cultural factors.',
          },
          {
            title: 'Symbol Legibility',
            description: 'Symbols must be legible and clearly visible. Minimum size requirements ensure symbols can be read under normal use conditions. Consider viewing distance and lighting conditions.',
          },
          {
            title: 'Symbol Meaning',
            description: 'Each symbol has a specific meaning defined in ISO 15223. Use symbols only for their intended meaning. Do not modify symbols or create custom symbols that could be confused with ISO 15223 symbols.',
          },
          {
            title: 'Text Accompaniment',
            description: 'While symbols can reduce text, some information may still require text explanation. Consider providing text explanations in user manuals or accompanying documentation, especially for complex or critical information.',
          },
          {
            title: 'Symbol Validation',
            description: 'Validate that users understand the symbols used on your device. Conduct user testing to ensure symbol comprehension, especially for new or less common symbols. Document validation results.',
          },
          {
            title: 'Regulatory Compliance',
            description: 'Ensure symbol usage meets regulatory requirements in target markets. Some jurisdictions may require specific symbols or have restrictions on symbol use. Verify regulatory acceptance before finalizing labeling.',
          },
          {
            title: 'Common Symbols',
            description: 'Common symbols include: manufacturer identification, lot/batch number, serial number, manufacturing date, use-by date, sterile, single use, do not reuse, consult instructions for use, temperature limits, and many others.',
          },
          {
            title: 'Symbol Maintenance',
            description: 'Stay current with ISO 15223 updates as new symbols are added or existing symbols are modified. Review labeling periodically to ensure continued compliance and optimal symbol usage.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Implementation Roadmap',
        steps: [
          {
            step: 1,
            title: 'Identify Labeling Requirements',
            description: 'Determine what information must be communicated on device labels based on regulatory requirements (FDA, EU MDR, etc.) and device type. Identify information that can be conveyed using symbols versus text.',
          },
          {
            step: 2,
            title: 'Review ISO 15223 Symbol Library',
            description: 'Review the ISO 15223 standard to identify symbols that match your labeling needs. Understand symbol meanings and usage requirements. Note any restrictions or special considerations for specific symbols.',
          },
          {
            step: 3,
            title: 'Select Appropriate Symbols',
            description: 'Select symbols that accurately represent the information to be conveyed. Ensure symbols are appropriate for your device type, use environment, and target users. Avoid modifying or creating custom symbols.',
          },
          {
            step: 4,
            title: 'Design Label Layout',
            description: 'Design label layout incorporating selected symbols. Ensure symbols meet minimum size requirements and are clearly visible. Consider symbol placement and grouping for optimal readability.',
          },
          {
            step: 5,
            title: 'Validate Symbol Understanding',
            description: 'Conduct user testing to validate that target users understand the symbols used. Test with representative users in relevant use environments. Document validation results and address any comprehension issues.',
          },
          {
            step: 6,
            title: 'Verify Regulatory Acceptance',
            description: 'Verify that symbol usage meets regulatory requirements in target markets. Check FDA, EU MDR, and other relevant regulations for symbol acceptance and requirements. Address any regulatory concerns.',
          },
          {
            step: 7,
            title: 'Create Labeling Documentation',
            description: 'Document symbol usage in labeling procedures and design files. Include symbol meanings and explanations in user manuals or accompanying documentation. Maintain symbol library and usage records.',
          },
          {
            step: 8,
            title: 'Implement Quality Control',
            description: 'Establish quality control procedures to ensure symbols are printed correctly and legibly. Verify symbol accuracy during production. Monitor for symbol degradation or printing issues.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Limited space on small devices',
            solution: 'Use ISO 15223 symbols to maximize information density. Consider using symbols on primary packaging or in accompanying documentation if device size is extremely limited. Prioritize critical information.',
          },
          {
            challenge: 'User understanding of symbols',
            solution: 'Conduct user validation testing to ensure symbol comprehension. Provide text explanations in user manuals. Consider user training or education for complex devices. Use well-known symbols when possible.',
          },
          {
            challenge: 'Regulatory variations across markets',
            solution: 'Research regulatory requirements in each target market. Some markets may require specific symbols or have restrictions. Consider market-specific labeling variations if necessary.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'ISO 15223 for Medical Laser Systems',
        description: 'Medical laser systems use ISO 15223 symbols to communicate essential safety and use information efficiently. Symbols help convey critical information across language barriers and in space-constrained labeling areas.',
        applications: [
          {
            application: 'Safety Information',
            considerations: [
              'Use laser radiation warning symbol (IEC 60825-1)',
              'Display laser class and wavelength information',
              'Include eye protection requirements',
              'Show maximum permissible exposure (MPE) limits',
            ],
          },
          {
            application: 'Device Identification',
            considerations: [
              'Manufacturer identification symbol',
              'Model number and serial number',
              'Lot/batch number for traceability',
              'Manufacturing date and expiration date',
            ],
          },
          {
            application: 'Use Instructions',
            considerations: [
              'Consult instructions for use symbol',
              'Temperature limits and storage conditions',
              'Single use or reusable indicators',
              'Sterile or non-sterile indicators',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'ISO 20417',
          title: 'Information to be supplied by the manufacturer',
          relationship: 'ISO 20417 specifies what information must be supplied, ISO 15223 provides symbols to express it',
          url: '/standards/iso-20417',
        },
        {
          number: 'IEC 60825-1',
          title: 'Laser safety',
          relationship: 'IEC 60825-1 defines laser warning symbols that complement ISO 15223',
          url: '/standards/iec-60825-1',
        },
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'QMS requirements include labeling control and documentation',
          url: '/standards/iso-13485',
        },
      ]}
      hotTake={{
        take: `ISO 15223 provides standardized symbols for medical device labeling. Symbols save label space and work across languages—but only if users understand them.

Don't assume users know what symbols mean. Validate symbol comprehension with actual users, especially for symbols less commonly seen.`,
        context: 'Good labeling enables safe use. Poor labeling causes use errors and regulatory findings.',
        realWorldTips: [
          'Use ISO 15223 symbols where possible—they\'re internationally recognized.',
          'User validation of symbol understanding is now expected by regulators.',
          'Laser warning symbols come from IEC 60825-1, not ISO 15223—use both standards.',
          'Include symbol meanings in your IFU for less common symbols.',
        ],
      }}
    />
  );
}

