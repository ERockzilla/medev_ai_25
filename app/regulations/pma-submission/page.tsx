'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function FDAPMASubmissionPage() {
  return (
    <RegulationPageTemplate
      regulation={{
        number: 'PMA (Premarket Approval)',
        title: 'Premarket Approval Application',
        organization: 'FDA',
        effectiveDate: 'Current',
        category: 'premarket',
        regulationUrl: 'https://www.fda.gov/medical-devices/premarket-submissions/premarket-approval-pma',
        guidanceUrl: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/premarket-approval-pma',
      }}
      overview={{
        scope: 'Premarket Approval (PMA) is the most stringent type of device marketing application required by FDA. PMA is required for Class III medical devices, which are devices that support or sustain human life, are of substantial importance in preventing impairment of human health, or present a potential unreasonable risk of illness or injury. PMA requires demonstration of safety and effectiveness through valid scientific evidence, typically including clinical data.',
        applicability: 'PMA is required for Class III medical devices. Most Class III devices are those that were on the market before 1976 and were automatically classified as Class III, or new devices for which there is insufficient information to determine that general controls or special controls provide reasonable assurance of safety and effectiveness. Some devices may be down-classified from Class III to Class II through the de novo process.',
        whyItMatters: 'PMA approval is required before Class III devices can be legally marketed in the US. The PMA process is rigorous and requires comprehensive scientific evidence of safety and effectiveness. PMA approval provides market exclusivity benefits. Without PMA approval, Class III devices cannot be sold. The PMA process typically takes longer than 510(k) and requires more extensive data, including clinical studies.',
        keyConcepts: [
          'Safety and effectiveness demonstration',
          'Valid scientific evidence',
          'Clinical data requirements',
          'IDE for clinical studies',
          '180-day review timeline (often longer)',
          'Advisory panel review (may be required)',
          'Post-approval requirements',
          'Supplemental PMA for changes',
          'PMA annual reports',
        ],
      }}
      keyRequirements={{
        title: 'PMA Application Requirements',
        sections: [
          {
            title: 'Device Description',
            description: 'Provide comprehensive description of device including design, materials, components, manufacturing processes, and specifications. Include detailed technical documentation, drawings, and diagrams. Describe device operation and key features.',
          },
          {
            title: 'Indications for Use',
            description: 'Clearly define intended use, indications for use, target patient population, and use conditions. Describe clinical benefits and how device addresses medical need. Compare to available alternatives.',
          },
          {
            title: 'Preclinical Studies',
            description: 'Include all non-clinical testing data: electrical safety (IEC 60601-1), EMC (IEC 60601-1-2), laser safety (if applicable), software validation (IEC 62304), usability (IEC 62366), biocompatibility (ISO 10993), animal studies, bench testing, and reliability testing. All testing must be conducted per applicable standards and GLP where required.',
          },
          {
            title: 'Clinical Data',
            description: 'Provide clinical study data demonstrating safety and effectiveness. Clinical studies must be conducted under IDE (Investigational Device Exemption) if device is not cleared/approved. Include study protocols, informed consent forms, IRB approvals, case report forms, statistical analysis, and clinical study reports. Data must demonstrate reasonable assurance of safety and effectiveness.',
          },
          {
            title: 'Manufacturing Information',
            description: 'Provide detailed manufacturing information including: manufacturing processes, quality control procedures, facility information, process validation, and quality system compliance (21 CFR 820). FDA may inspect manufacturing facilities.',
          },
          {
            title: 'Labeling',
            description: 'Include all proposed labeling: device labels, instructions for use, user manual, patient labeling, and any promotional materials. Labeling must be truthful and not misleading. Include all warnings, precautions, contraindications, and adverse effects.',
          },
          {
            title: 'Environmental Impact',
            description: 'Provide environmental assessment per 21 CFR 25, unless device qualifies for categorical exclusion. Most medical devices qualify for exclusion, but certain device types may require environmental assessment.',
          },
          {
            title: 'Financial Disclosure',
            description: 'Disclose financial interests and arrangements with clinical investigators per 21 CFR 54. This includes compensation, proprietary interests, equity interests, and other financial arrangements that could bias study results.',
          },
        ],
      }}
      complianceGuide={{
        title: 'PMA Submission Process',
        steps: [
          {
            step: 1,
            title: 'Determine PMA Requirement',
            description: 'Confirm device is Class III and requires PMA. Review FDA device classification. Consider de novo pathway if appropriate. Engage FDA early through Pre-Submission meetings.',
          },
          {
            step: 2,
            title: 'Obtain IDE Approval',
            description: 'Submit IDE application for clinical studies. Obtain IRB approval and informed consent. IDE must be approved before enrolling patients. Conduct clinical studies per IDE and ISO 14155 requirements.',
          },
          {
            step: 3,
            title: 'Complete Preclinical Testing',
            description: 'Conduct all non-clinical testing: electrical safety (NRTL), EMC (NRTL), laser safety, software validation, usability, biocompatibility, animal studies, bench testing. All testing must be per applicable standards and GLP where required.',
          },
          {
            step: 4,
            title: 'Conduct Clinical Studies',
            description: 'Design and conduct clinical studies to demonstrate safety and effectiveness. Studies should be well-controlled with appropriate endpoints. Collect clinical data per study protocol. Analyze data statistically.',
          },
          {
            step: 5,
            title: 'Prepare PMA Application',
            description: 'Prepare comprehensive PMA application including: device description, indications for use, preclinical data, clinical data, manufacturing information, labeling, environmental assessment, and financial disclosure.',
          },
          {
            step: 6,
            title: 'Submit PMA Application',
            description: 'Submit PMA application through FDA Electronic Submission Gateway (ESG). Ensure all required sections are complete. Include all supporting documentation. Keep submission confirmation and tracking number.',
          },
          {
            step: 7,
            title: 'Respond to FDA Questions',
            description: 'Monitor submission status. Respond promptly to FDA requests for additional information. Prepare for advisory panel review if required. FDA may inspect manufacturing facilities and clinical sites.',
          },
          {
            step: 8,
            title: 'Post-Approval Compliance',
            description: 'After PMA approval: submit annual reports, report adverse events per 21 CFR 803, submit PMA supplements for changes, maintain quality system compliance, and comply with post-approval study requirements.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'IDE approval and clinical study conduct',
            solution: 'Submit IDE application early. Work closely with FDA on study design. Ensure IRB approval and informed consent. Conduct studies per protocol and GCP. Monitor studies closely.',
          },
          {
            challenge: 'Insufficient clinical data',
            solution: 'Design studies to provide valid scientific evidence. Include appropriate controls and endpoints. Ensure adequate sample size. Consider FDA guidance on clinical study design for device type.',
          },
          {
            challenge: 'FDA inspections',
            solution: 'Ensure manufacturing facilities comply with 21 CFR 820. Prepare for FDA inspections. Have all documentation readily available. Address inspection findings promptly.',
          },
        ],
      }}
      relatedRegulations={[
        { number: '21 CFR Part 812', title: 'Investigational Device Exemptions (IDE)', relationship: 'Required for clinical studies', url: '/regulations/cfr-812' },
        { number: '21 CFR Part 820', title: 'Quality System Regulation', relationship: 'QMS requirements for device development', url: '/regulations/cfr-820' },
        { number: '510(k) Submission', title: 'Premarket Notification', relationship: 'Alternative pathway for Class II devices', url: '/regulations/510k-submission' },
        { number: '21 CFR Part 803', title: 'Medical Device Reporting', relationship: 'Post-approval adverse event reporting', url: '/regulations/cfr-803' },
      ]}
      relatedStandards={[
        { number: 'IEC 60601-1', title: 'Medical Electrical Equipment - General Requirements', relationship: 'Electrical safety requirements', url: '/standards/iec-60601-1' },
        { number: 'ISO 14155', title: 'Clinical Investigation', relationship: 'Clinical study requirements', url: '/standards/iso-14155' },
        { number: 'IEC 62304', title: 'Software Lifecycle', relationship: 'Software documentation requirements', url: '/standards/iec-62304' },
        { number: 'ISO 10993', title: 'Biological Evaluation', relationship: 'Biocompatibility requirements', url: '/standards/iso-10993' },
      ]}
      hotTake={{
        take: `PMA is the most rigorous FDA pathway—required for Class III devices. Unlike 510(k), you must prove safety and effectiveness with valid scientific evidence, typically including clinical data.

This is a multi-year, multi-million dollar process. Plan accordingly.`,
        context: 'PMA devices help patients with the most serious conditions. The regulatory bar is appropriately high.',
        realWorldTips: [
          'Start Pre-Sub meetings with FDA early—they help shape your clinical study design.',
          'IDE approval is required before enrolling patients in your clinical study.',
          'PMA review takes 180+ days minimum. Plan your timeline realistically.',
          'Post-approval requirements include annual reports and supplemental PMAs for changes.',
        ],
      }}
    />
  );
}

