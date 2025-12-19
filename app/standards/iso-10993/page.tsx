'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function ISO10993Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'ISO 10993',
        title: 'Biological evaluation of medical devices',
        organization: 'ISO',
        publicationDate: '2018-2023',
        currentVersion: 'Series (multiple parts)',
        category: 'testing',
        purchaseUrl: 'https://www.iso.org/standard/36406.html',
      }}
      overview={{
        scope: 'ISO 10993 is a series of standards that provides guidance for the biological evaluation of medical devices. The series covers the evaluation of medical devices that come into contact with the human body, including assessment of biocompatibility, cytotoxicity, sensitization, irritation, systemic toxicity, and other biological effects. The standard helps manufacturers determine what biological safety testing is needed based on the nature and duration of body contact.',
        whyItMatters: 'ISO 10993 is critical for ensuring medical device safety. All medical devices that contact the human body must undergo biological evaluation to demonstrate they do not cause adverse biological effects. This standard is required for FDA submissions, CE marking, and most international regulatory approvals. Understanding ISO 10993 helps manufacturers plan appropriate biocompatibility testing, avoid unnecessary testing, and ensure patient safety while managing development costs and timelines.',
        keyConcepts: [
          'Biological evaluation based on device categorization',
          'Material characterization and chemical analysis',
          'Risk-based approach to testing selection',
          'Cytotoxicity, sensitization, and irritation testing',
          'Systemic toxicity and genotoxicity assessment',
          'Implantation testing for long-term contact devices',
          'Hemocompatibility for blood-contacting devices',
          'Test method selection based on body contact duration and type',
          'Use of existing data and literature reviews',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'ISO 10993-1: Evaluation and Testing (Part 1)',
            description: 'Provides the framework for biological evaluation, including categorization of devices based on body contact type and duration. Defines the evaluation process, test selection criteria, and documentation requirements. Manufacturers must develop a biological evaluation plan and report.',
          },
          {
            title: 'Material Characterization (Part 18)',
            description: 'Requires comprehensive characterization of materials used in medical devices, including chemical composition, extractables, and leachables. Material characterization helps identify potential biological hazards and may reduce the need for animal testing.',
          },
          {
            title: 'Cytotoxicity Testing (Part 5)',
            description: 'Assesses the potential for cell death or growth inhibition. This is typically the first test performed and is required for most devices. Can be performed using in vitro methods.',
          },
          {
            title: 'Sensitization Testing (Part 10)',
            description: 'Evaluates the potential for allergic reactions. Required for devices with prolonged or repeated contact. Uses guinea pig maximization test or local lymph node assay.',
          },
          {
            title: 'Irritation Testing (Part 10)',
            description: 'Assesses potential for local irritation at the contact site. Required for devices with skin or mucosal contact. Can use in vitro methods or animal models.',
          },
          {
            title: 'Systemic Toxicity (Part 11)',
            description: 'Evaluates potential for adverse effects on organs and systems distant from the contact site. Required for devices with systemic exposure. Includes acute, subacute, subchronic, and chronic toxicity studies.',
          },
          {
            title: 'Genotoxicity (Part 3)',
            description: 'Assesses potential for genetic damage. Required for devices with prolonged contact or systemic exposure. Uses bacterial reverse mutation test (Ames test) and mammalian cell tests.',
          },
          {
            title: 'Implantation Testing (Part 6)',
            description: 'Evaluates local effects of implanted devices. Required for devices intended for implantation. Assesses tissue response, inflammation, and healing at the implant site.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Implementation Roadmap',
        steps: [
          {
            step: 1,
            title: 'Categorize Your Device',
            description: 'Determine the nature and duration of body contact using ISO 10993-1 categorization. Identify contact type (surface, external communicating, or implant) and contact duration (limited, prolonged, or permanent). This categorization determines which tests are required.',
          },
          {
            step: 2,
            title: 'Material Characterization',
            description: 'Characterize all materials used in your device, including chemical composition, additives, processing aids, and potential leachables. Review material safety data sheets and supplier information. This may reduce or eliminate the need for some biological tests.',
          },
          {
            step: 3,
            title: 'Literature Review',
            description: 'Conduct a comprehensive literature review of existing biological safety data for your materials and similar devices. Published data, supplier data, and clinical history can be used to support biological safety without new testing.',
          },
          {
            step: 4,
            title: 'Develop Biological Evaluation Plan',
            description: 'Create a biological evaluation plan (BEP) that identifies which tests are needed based on device categorization, material characterization, and literature review. Justify any tests that are not performed based on risk assessment.',
          },
          {
            step: 5,
            title: 'Select Testing Laboratory',
            description: 'Choose a testing laboratory that is GLP-compliant and has experience with ISO 10993 testing. Ensure they can provide test protocols, execution, and reports that meet regulatory requirements.',
          },
          {
            step: 6,
            title: 'Perform Required Testing',
            description: 'Execute the biological tests identified in your BEP. Typically start with cytotoxicity (required for most devices), then proceed with other tests based on device categorization. Document all test results and any deviations.',
          },
          {
            step: 7,
            title: 'Risk Assessment',
            description: 'Assess the biological risks based on test results, material characterization, and clinical data. Identify any residual risks and determine if they are acceptable. Consider risk mitigation measures if needed.',
          },
          {
            step: 8,
            title: 'Biological Evaluation Report',
            description: 'Compile a biological evaluation report (BER) that documents the entire evaluation process, including device categorization, material characterization, literature review, test results, risk assessment, and conclusions. This report is required for regulatory submissions.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Determining which tests are required',
            solution: 'Use ISO 10993-1 categorization tables and FDA guidance documents. Consider consulting a biological safety expert or using FDA\'s biocompatibility guidance to determine test requirements for your specific device type.',
          },
          {
            challenge: 'High cost and time for testing',
            solution: 'Maximize use of existing data through literature reviews and material supplier data. Consider in vitro alternatives to animal testing where acceptable. Plan testing early in development to avoid delays.',
          },
          {
            challenge: 'Material changes requiring re-evaluation',
            solution: 'Establish a change control process that evaluates material changes for biological impact. Minor changes may only require literature review, while major changes may require new testing.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'ISO 10993 for Medical Laser Systems',
        description: 'Medical laser systems require biological evaluation for components that contact the patient, such as handpieces, delivery fibers, and applicators. The evaluation focuses on materials that directly contact tissue during treatment.',
        applications: [
          {
            application: 'Laser Handpiece Materials',
            considerations: [
              'Evaluate materials in direct contact with patient skin or tissue',
              'Assess biocompatibility of handpiece coatings and materials',
              'Consider sterilization method impact on material biocompatibility',
              'Evaluate potential for material degradation and leachables',
            ],
          },
          {
            application: 'Fiber Optic Delivery Systems',
            considerations: [
              'Evaluate fiber materials that contact tissue',
              'Assess biocompatibility of fiber coatings',
              'Consider potential for fiber breakage and tissue contact',
              'Evaluate materials used in fiber connectors',
            ],
          },
          {
            application: 'Disposable Applicators',
            considerations: [
              'Full biological evaluation required for single-use applicators',
              'Assess materials used in applicator tips',
              'Evaluate biocompatibility after sterilization',
              'Consider potential for material transfer to patient',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'QMS requirements include biological evaluation planning and documentation',
          url: '/standards/iso-13485',
        },
        {
          number: 'ISO 14971',
          title: 'Risk management',
          relationship: 'Biological risks must be evaluated and managed per ISO 14971',
          url: '/standards/iso-14971',
        },
        {
          number: 'ISO 14155',
          title: 'Clinical investigation',
          relationship: 'Clinical data can support biological safety evaluation',
          url: '/standards/iso-14155',
        },
      ]}
      hotTake={{
        take: `ISO 10993 is often over-interpreted—not every device needs every test. Start with device categorization and material characterization. Existing data and literature can significantly reduce testing needs.

For laser systems, focus on patient-contacting components: handpieces, fibers, applicators. The laser source itself typically doesn't require biocompatibility testing.`,
        context: 'Biocompatibility testing takes time and money. Smart planning avoids unnecessary testing while ensuring safety.',
        realWorldTips: [
          'Categorize first: body contact type and duration determine which tests you need.',
          'Material characterization can eliminate the need for some biological tests.',
          'Existing supplier data and literature reviews are legitimate evidence—use them.',
          'Sterilization method affects biocompatibility—test the final sterilized product.',
        ],
      }}
    />
  );
}

