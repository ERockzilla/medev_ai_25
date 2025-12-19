'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function FDA510kSubmissionPage() {
  return (
    <RegulationPageTemplate
      regulation={{
        number: '510(k) Premarket Notification',
        title: 'Premarket Notification Submission',
        organization: 'FDA',
        effectiveDate: 'Current',
        category: 'premarket',
        regulationUrl: 'https://www.fda.gov/medical-devices/premarket-submissions/premarket-notification-510k',
        guidanceUrl: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-and-fda-staff-510k-program-evaluating-substantial-equivalence-premarket',
      }}
      overview={{
        scope: '510(k) Premarket Notification is a premarket submission made to FDA to demonstrate that a medical device is substantially equivalent to a legally marketed device (predicate device). Most Class II medical devices require 510(k) clearance before marketing in the US. The submission must demonstrate that the new device is as safe and effective as the predicate device.',
        applicability: '510(k) submissions are required for most Class II devices and some Class I devices (those not exempt from premarket notification). Class III devices typically require PMA, not 510(k). The 510(k) pathway is available when there is a legally marketed predicate device to which substantial equivalence can be demonstrated.',
        whyItMatters: '510(k) clearance is required for most medical devices before they can be legally marketed in the US. Without 510(k) clearance, devices cannot be sold or distributed. The 510(k) process allows FDA to review devices for substantial equivalence, ensuring safety and effectiveness while facilitating market access for new devices. Non-compliance can result in FDA enforcement actions including warning letters, import detentions, and product seizures.',
        keyConcepts: [
          'Substantial equivalence to predicate device',
          'Indications for use comparison',
          'Performance data and testing',
          'eSTAR electronic submission format',
          '90-day review timeline (may be longer)',
          'Special controls and standards compliance',
          'Software documentation requirements',
          'Biocompatibility and sterilization data',
          'Labeling requirements',
        ],
      }}
      keyRequirements={{
        title: '510(k) Submission Requirements',
        sections: [
          {
            title: 'Substantial Equivalence',
            description: 'The core requirement is demonstrating substantial equivalence to a predicate device. This means the new device has the same intended use and either: (1) the same technological characteristics, or (2) different technological characteristics that do not raise new questions of safety and effectiveness and demonstrate equivalent safety and effectiveness.',
          },
          {
            title: 'Device Description',
            description: 'Provide detailed description of the device including design, materials, components, and specifications. Include diagrams, photographs, and technical drawings. Describe how the device works and its key features.',
          },
          {
            title: 'Indications for Use',
            description: 'Clearly state the intended use, indications for use, and target patient population. Compare to predicate device indications. Any expansion of indications may require additional data or clinical studies.',
          },
          {
            title: 'Substantial Equivalence Comparison',
            description: 'Provide side-by-side comparison with predicate device(s) including: intended use, technological characteristics, performance specifications, materials, design features, and labeling. Explain any differences and why they don\'t raise new safety/effectiveness questions.',
          },
          {
            title: 'Performance Data',
            description: 'Include all testing data demonstrating safety and effectiveness: electrical safety (IEC 60601-1), EMC (IEC 60601-1-2), laser safety (IEC 60825-1, IEC 60601-2-22), software validation (IEC 62304), usability (IEC 62366), biocompatibility (ISO 10993), and performance testing. Include NRTL test reports and certificates.',
          },
          {
            title: 'Software Documentation',
            description: 'For devices with software, provide software documentation per IEC 62304 including: software safety classification, software development plan, software requirements, architecture, verification and validation, and cybersecurity documentation.',
          },
          {
            title: 'Labeling',
            description: 'Include all labeling: device labels, instructions for use, user manual, and any promotional materials. Labeling must comply with 21 CFR 801 and include required warnings, precautions, and use instructions.',
          },
          {
            title: 'Truthful and Accurate Statement',
            description: 'Include statement that all information is truthful and accurate, signed by authorized representative. False statements can result in criminal penalties.',
          },
        ],
      }}
      complianceGuide={{
        title: '510(k) Submission Process',
        steps: [
          {
            step: 1,
            title: 'Determine Regulatory Pathway',
            description: 'Confirm device requires 510(k) and identify appropriate predicate device(s). Review FDA device classification database. Consider Pre-Submission meeting with FDA to discuss pathway.',
          },
          {
            step: 2,
            title: 'Prepare eSTAR Submission',
            description: 'Download latest eSTAR template from FDA website. Use eSTAR for structured submission format with validation checks. Complete all required sections including device description, predicate comparison, and performance data.',
          },
          {
            step: 3,
            title: 'Complete Performance Testing',
            description: 'Conduct all required testing: electrical safety (NRTL), EMC (NRTL), laser safety (if applicable), software validation, usability, biocompatibility. Ensure test reports are complete and include all required data.',
          },
          {
            step: 4,
            title: 'Prepare Substantial Equivalence Comparison',
            description: 'Provide detailed side-by-side comparison with predicate device(s). Explain any differences and demonstrate they don\'t raise new safety/effectiveness questions. Include performance data comparison.',
          },
          {
            step: 5,
            title: 'Complete Software Documentation',
            description: 'For devices with software, provide complete IEC 62304 documentation including safety classification, development plan, requirements, architecture, verification/validation, and cybersecurity documentation.',
          },
          {
            step: 6,
            title: 'Finalize Labeling',
            description: 'Prepare all labeling including device labels, instructions for use, user manual. Ensure compliance with 21 CFR 801. Include all required warnings, precautions, and use instructions.',
          },
          {
            step: 7,
            title: 'Submit Through ESG',
            description: 'Submit eSTAR-generated PDF through FDA Electronic Submission Gateway (ESG). Ensure ESG account and credentials. Keep submission confirmation and tracking number.',
          },
          {
            step: 8,
            title: 'Respond to FDA Questions',
            description: 'Monitor submission status. Respond promptly and completely to any FDA requests for additional information. Consider teleconference to clarify questions. Delayed responses extend review timeline.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Incomplete test reports or missing NRTL certificates',
            solution: 'Ensure all testing is completed before submission. Obtain NRTL certificates for electrical safety and EMC. Include complete test reports with all required data.',
          },
          {
            challenge: 'Insufficient substantial equivalence justification',
            solution: 'Provide detailed comparison with predicate device. Explain all differences and demonstrate equivalent safety/effectiveness. Include performance data comparison.',
          },
          {
            challenge: 'Missing software documentation',
            solution: 'Provide complete IEC 62304 documentation including safety classification, development plan, requirements, verification/validation. Include cybersecurity documentation if applicable.',
          },
        ],
      }}
      relatedRegulations={[
        { number: '21 CFR Part 807', title: 'Establishment Registration and Device Listing', relationship: 'Required before marketing device', url: '/regulations/cfr-807' },
        { number: '21 CFR Part 820', title: 'Quality System Regulation', relationship: 'QMS requirements for device development', url: '/regulations/cfr-820' },
        { number: 'PMA Submission', title: 'Premarket Approval', relationship: 'Alternative pathway for Class III devices', url: '/regulations/pma-submission' },
        { number: '21 CFR Part 812', title: 'Investigational Device Exemptions', relationship: 'Required for clinical studies', url: '/regulations/cfr-812' },
      ]}
      relatedStandards={[
        { number: 'IEC 60601-1', title: 'Medical Electrical Equipment - General Requirements', relationship: 'Electrical safety testing requirements', url: '/standards/iec-60601-1' },
        { number: 'IEC 60601-1-2', title: 'EMC Requirements', relationship: 'EMC testing requirements', url: '/standards/iec-60601-1-2' },
        { number: 'IEC 62304', title: 'Software Lifecycle', relationship: 'Software documentation requirements', url: '/standards/iec-62304' },
        { number: 'ISO 10993', title: 'Biological Evaluation', relationship: 'Biocompatibility testing requirements', url: '/standards/iso-10993' },
      ]}
      hotTake={{
        take: `The 510(k) is the most common pathway for medical device clearance. The key: demonstrate substantial equivalence to a predicate device that's already legally marketed.

Choose your predicate wisely. A good predicate comparison is the foundation of your entire submission.`,
        context: 'Most Class II devices go through 510(k). Understanding this process is fundamental to US market access.',
        realWorldTips: [
          'Use eSTAR—it\'s faster to prepare and FDA reviews it more quickly.',
          'Pre-Sub meetings with FDA are free and can save months of back-and-forth.',
          'Missing NRTL test reports is the #1 cause of additional information requests.',
          'FDA\'s 90-day review clock doesn\'t include the time they\'re waiting for your responses.',
        ],
      }}
    />
  );
}

