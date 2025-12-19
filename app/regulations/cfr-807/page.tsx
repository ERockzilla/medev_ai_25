'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function CFR807Page() {
  return (
    <RegulationPageTemplate
      regulation={{
        number: '21 CFR Part 807',
        title: 'Establishment Registration and Device Listing',
        organization: 'FDA',
        effectiveDate: '1976',
        category: 'registration',
        regulationUrl: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-807',
        guidanceUrl: 'https://www.fda.gov/medical-devices/device-registration-and-listing/establishment-registration-and-medical-device-listing',
      }}
      overview={{
        scope: '21 CFR Part 807 requires medical device establishments to register with FDA and list their devices. Establishment registration identifies device manufacturers, distributors, and other establishments. Device listing provides FDA with information about devices being marketed. Registration and listing are prerequisites for device marketing in the US.',
        applicability: 'Part 807 applies to all medical device establishments including manufacturers, specification developers, repackagers, relabelers, contract manufacturers, contract sterilizers, and initial distributors. Foreign establishments must also register if they export devices to the US. Registration and listing are required before devices can be marketed.',
        whyItMatters: '21 CFR Part 807 registration and listing are mandatory requirements for US market access. FDA uses registration and listing information for device surveillance, recalls, and inspections. Registration must be renewed annually. Device listing must be updated when devices change. Non-compliance can result in FDA enforcement action and import detentions.',
        keyConcepts: [
          'Establishment registration',
          'Device listing',
          'Owner/operator information',
          'Device classification and product codes',
          'UDI requirements for listing',
          'Annual registration renewal',
          'Listing updates and changes',
          'Foreign establishment registration',
          'FURLS (FDA Unified Registration and Listing System)',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Establishment Registration (807.20)',
            description: 'All device establishments must register with FDA. Registration must include establishment name, address, owner/operator information, and establishment type. Foreign establishments must also register. Registration must be renewed annually.',
          },
          {
            title: 'Device Listing (807.25)',
            description: 'Establishments must list all devices they manufacture, prepare, propagate, compound, or process. Listing must include device name, classification, product code, and UDI (if required). Listing must be updated when devices change.',
          },
          {
            title: 'Registration Timing (807.21)',
            description: 'Domestic establishments must register within 30 days of beginning device operations. Foreign establishments must register before exporting devices to US. Registration must be renewed annually between October 1 and December 31.',
          },
          {
            title: 'Listing Information (807.25)',
            description: 'Device listing must include device name, classification, product code, UDI (if required), and labeling. Listing must identify device as finished device or component. Listing must be updated within 30 days of changes.',
          },
          {
            title: 'UDI Requirements (807.25)',
            description: 'Devices subject to UDI requirements (per Part 830) must include UDI in device listing. UDI must be submitted to GUDID before listing. Listing cannot be completed without UDI for devices requiring it.',
          },
          {
            title: 'Changes and Updates (807.30)',
            description: 'Establishments must update registration within 30 days of changes to name, address, or owner/operator. Device listing must be updated within 30 days of device changes. Establishments must notify FDA of discontinuation.',
          },
          {
            title: 'Foreign Establishments (807.40)',
            description: 'Foreign establishments must register before exporting devices to US. Foreign establishments must identify US agent. Registration and listing requirements apply to foreign establishments exporting to US.',
          },
          {
            title: 'FURLS System',
            description: 'Registration and listing are submitted through FDA Unified Registration and Listing System (FURLS). Establishments must create FURLS account and submit information electronically. FURLS provides registration and listing management tools.',
          },
        ],
      }}
      complianceGuide={{
        title: 'Compliance Roadmap',
        steps: [
          {
            step: 1,
            title: 'Determine Registration Requirement',
            description: 'Assess whether your establishment requires registration based on activities (manufacturing, distributing, etc.). Review FDA guidance on establishment types and registration requirements.',
          },
          {
            step: 2,
            title: 'Create FURLS Account',
            description: 'Create account in FDA Unified Registration and Listing System (FURLS). Complete account setup including user information and security questions. Obtain FURLS access credentials.',
          },
          {
            step: 3,
            title: 'Complete Establishment Registration',
            description: 'Submit establishment registration information including name, address, owner/operator information, and establishment type. For foreign establishments, identify US agent. Submit registration within required timeframe.',
          },
          {
            step: 4,
            title: 'Prepare Device Listing Information',
            description: 'Collect device information for listing including device name, classification, product code, and UDI (if required). Ensure UDI is submitted to GUDID before listing if required.',
          },
          {
            step: 5,
            title: 'Submit Device Listings',
            description: 'Submit device listings through FURLS for all devices manufactured, prepared, or distributed. Include required device information. Verify listing accuracy and completeness.',
          },
          {
            step: 6,
            title: 'Maintain Registration',
            description: 'Renew establishment registration annually between October 1 and December 31. Update registration within 30 days of changes to name, address, or owner/operator. Maintain current registration status.',
          },
          {
            step: 7,
            title: 'Maintain Device Listings',
            description: 'Update device listings within 30 days of device changes. Add new devices to listing when introduced. Update discontinued devices. Ensure listings remain current and accurate.',
          },
          {
            step: 8,
            title: 'Monitor Compliance',
            description: 'Establish processes for monitoring registration and listing compliance. Track registration renewal dates. Monitor device changes that require listing updates. Maintain compliance records.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Determining establishment type',
            solution: 'Review FDA guidance on establishment types. Consider your specific activities (manufacturing, distributing, etc.). When in doubt, register as manufacturer. You can update establishment type if needed.',
          },
          {
            challenge: 'UDI requirements for listing',
            solution: 'Determine if devices require UDI per Part 830. Submit UDI to GUDID before listing. Ensure UDI is included in device listing. Plan for UDI implementation timeline.',
          },
          {
            challenge: 'Managing multiple establishments',
            solution: 'Register each establishment separately. Maintain separate listings for each establishment. Coordinate registration and listing across establishments. Consider central management approach.',
          },
        ],
      }}
      relatedRegulations={[
        {
          number: '21 CFR Part 830',
          title: 'Unique Device Identification',
          relationship: 'UDI is required for device listing under Part 807',
          url: '/regulations/cfr-830',
        },
        {
          number: '21 CFR Part 820',
          title: 'Quality System Regulation',
          relationship: 'Registration and listing are prerequisites for Part 820 compliance',
          url: '/regulations/cfr-820',
        },
      ]}
      relatedStandards={[
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'Registration and listing are regulatory requirements that complement ISO 13485',
          url: '/standards/iso-13485',
        },
      ]}
      hotTake={{
        take: `Part 807 is establishment registration and device listing—the first step to legally marketing a device in the US. No registration = no market access.

Annual renewal happens October-December. Miss it, and your devices can be detained at the border.`,
        context: 'Registration and listing are foundational requirements. Get them right first.',
        realWorldTips: [
          'Register through FURLS (FDA Unified Registration and Listing System).',
          'Annual renewal deadline: December 31. Set a calendar reminder for October.',
          'Foreign manufacturers must designate a US Agent.',
          'Device listing requires UDI if your device is subject to Part 830.',
        ],
      }}
    />
  );
}

