'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function CFR830Page() {
  return (
    <RegulationPageTemplate
      regulation={{
        number: '21 CFR Part 830',
        title: 'Unique Device Identification (UDI)',
        organization: 'FDA',
        effectiveDate: '2013',
        category: 'identification',
        regulationUrl: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-830',
        guidanceUrl: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/unique-device-identification-system',
      }}
      overview={{
        scope: '21 CFR Part 830 establishes requirements for unique device identification (UDI) of medical devices. UDI is a system for identifying medical devices through their distribution and use. The regulation requires device labelers to provide a UDI on device labels and packages, and to submit device information to the Global Unique Device Identification Database (GUDID).',
        applicability: 'Part 830 applies to medical device labelers (manufacturers, specification developers, repackagers, relabelers, and convenience kit assemblers). UDI requirements are phased in based on device class, with Class III devices required first, followed by Class II, and then Class I. Some devices are exempt from UDI requirements.',
        whyItMatters: 'UDI is critical for post-market surveillance, recalls, and device tracking. It enables FDA and healthcare providers to quickly identify devices, track adverse events, and manage recalls. UDI is required for device registration and listing, and is increasingly required by healthcare systems for inventory management and patient safety. Non-compliance can result in FDA enforcement action.',
        keyConcepts: [
          'Unique Device Identifier (UDI) format',
          'Device Identifier (DI) and Production Identifier (PI)',
          'UDI labeling requirements',
          'Global Unique Device Identification Database (GUDID)',
          'UDI issuing agencies (GS1, HIBCC, ICCBBA)',
          'Direct marking requirements for reusable devices',
          'UDI submission and data management',
          'UDI format standards (AIDC and HRI)',
          'Exemptions and exceptions',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'UDI Format (830.20)',
            description: 'UDI must consist of Device Identifier (DI) and Production Identifier (PI). DI identifies the labeler and device model. PI identifies unit of manufacture (lot, serial number, expiration date, etc.). UDI must be in both AIDC (barcode/RFID) and HRI (human-readable) formats.',
          },
          {
            title: 'UDI Labeling (830.40)',
            description: 'UDI must appear on device labels and device packages. UDI must be easily readable and accessible. Labelers must ensure UDI is not removed or altered. UDI must be placed in a consistent location.',
          },
          {
            title: 'Direct Marking (830.50)',
            description: 'Reusable devices that are reprocessed must be directly marked with UDI on the device itself. Direct marking must be readable throughout device lifetime. Exceptions apply for devices that cannot be directly marked.',
          },
          {
            title: 'GUDID Submission (830.300)',
            description: 'Labelers must submit device information to GUDID for each device identifier. Submission must include device attributes, labeling information, and other required data. Updates must be submitted when device information changes.',
          },
          {
            title: 'UDI Issuing Agencies',
            description: 'UDI must be issued by FDA-accredited issuing agencies (GS1, HIBCC, or ICCBBA). Labelers must obtain company prefix from issuing agency and create UDI according to agency standards.',
          },
          {
            title: 'Standard Date Format (830.60)',
            description: 'Dates in UDI must be in YYYY-MM-DD format. This applies to expiration dates, manufacturing dates, and other date fields in UDI.',
          },
          {
            title: 'UDI Changes',
            description: 'Changes to device that affect UDI require new device identifier. Labelers must submit new GUDID record and update labeling. Old UDI may need to be maintained for traceability.',
          },
          {
            title: 'Exemptions',
            description: 'Some devices are exempt from UDI requirements including custom devices, investigational devices, veterinary devices, and certain low-risk devices. Labelers must document exemptions.',
          },
        ],
      }}
      complianceGuide={{
        title: 'Compliance Roadmap',
        steps: [
          {
            step: 1,
            title: 'Determine UDI Applicability',
            description: 'Assess whether your device requires UDI based on device class and exemptions. Review FDA guidance on UDI applicability and exemptions. Determine compliance date based on device class.',
          },
          {
            step: 2,
            title: 'Select UDI Issuing Agency',
            description: 'Choose FDA-accredited issuing agency (GS1, HIBCC, or ICCBBA). Consider agency standards, costs, and industry usage. Obtain company prefix from issuing agency.',
          },
          {
            step: 3,
            title: 'Develop UDI Assignment Process',
            description: 'Establish process for assigning UDI to devices. Determine when new device identifier is needed versus when production identifier changes. Document UDI assignment rules.',
          },
          {
            step: 4,
            title: 'Design UDI Labeling',
            description: 'Design device labels and packages to include UDI in both AIDC (barcode/RFID) and HRI formats. Ensure UDI is readable and accessible. Place UDI in consistent location.',
          },
          {
            step: 5,
            title: 'Implement Direct Marking (if required)',
            description: 'For reusable devices, implement direct marking of UDI on device. Ensure marking is readable throughout device lifetime. Test marking durability and readability.',
          },
          {
            step: 6,
            title: 'Prepare GUDID Data',
            description: 'Collect required device information for GUDID submission including device attributes, labeling information, and other required data. Ensure data accuracy and completeness.',
          },
          {
            step: 7,
            title: 'Submit to GUDID',
            description: 'Submit device information to GUDID for each device identifier. Use FDA GUDID system or third-party submission tools. Verify submission accuracy. Maintain submission records.',
          },
          {
            step: 8,
            title: 'Maintain UDI Compliance',
            description: 'Establish processes for UDI maintenance including updates when device information changes, new device identifier assignment, and GUDID updates. Monitor UDI compliance.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Determining when new device identifier is needed',
            solution: 'New device identifier is needed when device changes affect device identification (model, version, etc.). Production identifier changes (lot, serial number) do not require new device identifier. Review FDA guidance on UDI changes.',
          },
          {
            challenge: 'Managing GUDID data',
            solution: 'Establish data management processes for GUDID submission. Use templates and tools to ensure data accuracy. Validate data before submission. Maintain records of submissions and updates.',
          },
          {
            challenge: 'Direct marking implementation',
            solution: 'Evaluate direct marking methods (laser etching, labels, etc.) for durability and readability. Test marking under use conditions. Consider device materials and sterilization methods.',
          },
        ],
      }}
      relatedRegulations={[
        {
          number: '21 CFR Part 820',
          title: 'Quality System Regulation',
          relationship: 'UDI requirements complement Part 820 traceability requirements',
          url: '/regulations/cfr-820',
        },
        {
          number: '21 CFR Part 807',
          title: 'Establishment Registration and Device Listing',
          relationship: 'UDI is required for device listing under Part 807',
          url: '/regulations/cfr-807',
        },
      ]}
      relatedStandards={[
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'UDI requirements are part of quality system traceability requirements',
          url: '/standards/iso-13485',
        },
      ]}
      hotTake={{
        take: `Part 830 is Unique Device Identification—every device gets a UDI that follows it through distribution and use. It's essential for recalls, tracking, and post-market surveillance.

UDI requirements are phased by device class. Most devices are now covered.`,
        context: 'UDI enables modern device tracking and improves patient safety through better post-market surveillance.',
        realWorldTips: [
          'Choose your UDI issuing agency (GS1, HIBCC, or ICCBBA) based on your market.',
          'GUDID submission is required before device listing in Part 807.',
          'Reusable devices need direct marking—the UDI must survive reprocessing.',
          'DI (Device Identifier) stays constant; PI (Production Identifier) changes per lot/serial.',
        ],
      }}
    />
  );
}

