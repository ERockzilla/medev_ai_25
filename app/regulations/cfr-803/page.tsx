'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function CFR803Page() {
  return (
    <RegulationPageTemplate
      regulation={{
        number: '21 CFR Part 803',
        title: 'Medical Device Reporting (MDR)',
        organization: 'FDA',
        effectiveDate: '1984',
        category: 'post-market',
        regulationUrl: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-803',
        guidanceUrl: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/medical-device-reporting-mdr',
      }}
      overview={{
        scope: '21 CFR Part 803 establishes requirements for reporting device-related adverse events and malfunctions to FDA. Medical Device Reporting (MDR) is a post-market surveillance requirement that helps FDA identify device problems and protect public health. The regulation requires manufacturers, importers, and device user facilities to report certain device-related events.',
        applicability: 'Part 803 applies to device manufacturers, importers, and device user facilities (hospitals, nursing homes, etc.). Manufacturers must report MDRs for their devices. Importers must report MDRs for devices they import. User facilities must report device-related deaths and serious injuries. Reporting requirements vary by entity type.',
        whyItMatters: '21 CFR Part 803 MDR is critical for post-market surveillance and patient safety. FDA uses MDR data to identify device problems, issue recalls, and take regulatory action. Timely and accurate MDR reporting helps protect public health. Non-compliance can result in FDA warning letters, enforcement action, and criminal penalties. MDR data also informs device risk management and design improvements.',
        keyConcepts: [
          'Medical Device Report (MDR)',
          'Reportable events (death, serious injury, malfunction)',
          'MDR reporting timelines (5-day, 30-day)',
          'MDR form (FDA Form 3500A)',
          'Manufacturer reporting requirements',
          'Importer reporting requirements',
          'User facility reporting requirements',
          'MDR investigation and evaluation',
          'MDR data analysis and trending',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Reportable Events (803.3)',
            description: 'Manufacturers must report device-related deaths, serious injuries, and malfunctions. Deaths and serious injuries must be reported within 30 days (or 5 days if remedial action required). Malfunctions must be reported within 30 days if likely to cause death or serious injury.',
          },
          {
            title: 'MDR Timelines (803.10)',
            description: 'MDRs must be submitted within specified timelines: 5 days for events requiring remedial action, 30 days for deaths and serious injuries, and 30 days for malfunctions. Timelines start when manufacturer becomes aware of event.',
          },
          {
            title: 'MDR Form (803.12)',
            description: 'MDRs must be submitted using FDA Form 3500A or electronic equivalent. Form must include complete information about event, device, patient, and reporter. Incomplete forms may be rejected.',
          },
          {
            title: 'Manufacturer Responsibilities (803.10)',
            description: 'Manufacturers must establish MDR procedures, investigate events, evaluate reportability, submit MDRs, and maintain MDR files. Manufacturers must have MDR contact person and procedures for receiving complaints.',
          },
          {
            title: 'MDR Investigation (803.20)',
            description: 'Manufacturers must investigate MDR events to determine reportability. Investigation must evaluate device involvement, event cause, and whether event meets reporting criteria. Investigation must be documented.',
          },
          {
            title: 'MDR Files (803.18)',
            description: 'Manufacturers must maintain MDR files including all MDRs, supporting documentation, and investigation records. Files must be accessible to FDA. Files must be retained per record retention requirements.',
          },
          {
            title: 'User Facility Reporting (803.30)',
            description: 'User facilities must report device-related deaths to FDA and manufacturer within 10 days. User facilities must report serious injuries to manufacturer within 10 days. User facilities must submit annual reports.',
          },
          {
            title: 'Importer Reporting (803.40)',
            description: 'Importers must report device-related deaths and serious injuries to FDA and manufacturer within 30 days. Importers must report malfunctions to manufacturer within 30 days. Importers must maintain MDR files.',
          },
        ],
      }}
      complianceGuide={{
        title: 'Compliance Roadmap',
        steps: [
          {
            step: 1,
            title: 'Establish MDR Procedures',
            description: 'Develop MDR procedures covering event receipt, investigation, evaluation, reporting, and file maintenance. Define roles and responsibilities. Establish MDR contact person and complaint handling process.',
          },
          {
            step: 2,
            title: 'Train Staff',
            description: 'Train staff on MDR requirements, procedures, and reportability criteria. Ensure staff understand timelines and reporting requirements. Train on MDR form completion and submission.',
          },
          {
            step: 3,
            title: 'Establish Complaint Handling',
            description: 'Establish process for receiving and documenting complaints. Ensure complaints are routed to MDR contact person. Document complaint information including device, event, and patient details.',
          },
          {
            step: 4,
            title: 'Investigate Events',
            description: 'Investigate MDR events to determine reportability. Evaluate device involvement, event cause, and whether event meets reporting criteria. Document investigation findings and conclusions.',
          },
          {
            step: 5,
            title: 'Evaluate Reportability',
            description: 'Evaluate events against MDR reportability criteria. Determine if event is reportable based on death, serious injury, or malfunction. Consider FDA guidance on reportability.',
          },
          {
            step: 6,
            title: 'Submit MDRs',
            description: 'Submit MDRs within required timelines using FDA Form 3500A or electronic submission. Ensure MDRs are complete and accurate. Track MDR submissions and FDA acknowledgments.',
          },
          {
            step: 7,
            title: 'Maintain MDR Files',
            description: 'Maintain MDR files including all MDRs, supporting documentation, and investigation records. Organize files for easy access. Ensure files are retained per requirements. Prepare for FDA inspections.',
          },
          {
            step: 8,
            title: 'Monitor and Analyze',
            description: 'Monitor MDR trends and patterns. Analyze MDR data for device problems. Use MDR data for risk management and design improvements. Report trends to management.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Determining reportability',
            solution: 'Review FDA guidance on MDR reportability. Evaluate events against reporting criteria. When in doubt, report the event. Consider consulting MDR experts or FDA for complex cases.',
          },
          {
            challenge: 'Meeting reporting timelines',
            solution: 'Establish efficient complaint handling and investigation processes. Prioritize MDR events. Use templates and checklists. Track timelines carefully. Consider automated systems for MDR management.',
          },
          {
            challenge: 'MDR data quality',
            solution: 'Ensure complete and accurate MDR information. Train staff on MDR form completion. Review MDRs before submission. Use data validation tools. Maintain consistent data entry.',
          },
        ],
      }}
      relatedRegulations={[
        {
          number: '21 CFR Part 820',
          title: 'Quality System Regulation',
          relationship: 'MDR requirements are part of Part 820 post-market surveillance requirements',
          url: '/regulations/cfr-820',
        },
        {
          number: '21 CFR Part 830',
          title: 'Unique Device Identification',
          relationship: 'UDI helps identify devices in MDR reports',
          url: '/regulations/cfr-830',
        },
      ]}
      relatedStandards={[
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'MDR requirements are part of ISO 13485 post-market surveillance requirements',
          url: '/standards/iso-13485',
        },
        {
          number: 'ISO 14971',
          title: 'Risk management',
          relationship: 'MDR data informs risk management and post-market risk assessment',
          url: '/standards/iso-14971',
        },
      ]}
      hotTake={{
        take: `Part 803 is Medical Device Reporting—your post-market surveillance obligation. When something goes wrong with your device, FDA needs to know.

The key question for every complaint: Is this reportable? Build a robust process for making that determination consistently.`,
        context: 'MDR data protects patients and informs FDA\'s regulatory decisions. Timely, accurate reporting is a legal and ethical obligation.',
        realWorldTips: [
          'When in doubt, report. Under-reporting is a far worse compliance issue than over-reporting.',
          '30-day timeline starts when you become aware—not when investigation is complete.',
          'MDR trending drives recalls and safety actions. Monitor your own data for patterns.',
          'Coordinate with CAPA—MDR events should feed your corrective action process.',
        ],
      }}
    />
  );
}

