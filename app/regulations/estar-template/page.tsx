'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function FDAESTARTemplatePage() {
  return (
    <RegulationPageTemplate
      regulation={{
        number: 'eSTAR Template',
        title: 'electronic Submission Template And Resource',
        organization: 'FDA',
        effectiveDate: '2023 (Mandatory for most 510(k)s)',
        category: 'premarket',
        regulationUrl: 'https://www.fda.gov/medical-devices/premarket-submissions/estartemplate',
        guidanceUrl: 'https://www.fda.gov/medical-devices/premarket-submissions/estartemplate',
      }}
      overview={{
        scope: 'eSTAR (electronic Submission Template And Resource) is FDA\'s structured electronic submission template for 510(k) premarket notifications. eSTAR provides a guided, interactive format for preparing 510(k) submissions with built-in validation checks and automatic organization. FDA strongly recommends eSTAR for all 510(k) submissions, and it may become mandatory for certain device types.',
        applicability: 'eSTAR is available for all 510(k) submissions. FDA strongly recommends using eSTAR for all new 510(k) submissions. Some device types may be required to use eSTAR. Traditional PDF submissions are still accepted but may take longer to review. eSTAR can be used for original 510(k)s, special 510(k)s, and abbreviated 510(k)s.',
        whyItMatters: 'eSTAR submissions are processed faster by FDA due to structured format and automatic validation. The template guides users through all required sections, reducing errors and omissions. eSTAR ensures consistent submission format, making review more efficient. Using eSTAR can reduce review time and improve likelihood of first-cycle approval. FDA is moving toward making eSTAR mandatory for all 510(k) submissions.',
        keyConcepts: [
          'Structured electronic submission format',
          'Guided workflow through submission sections',
          'Automatic validation checks',
          'Faster FDA review processing',
          'Built-in help and guidance',
          'Attachment management',
          'PDF generation for submission',
          'Compatibility with FDA systems',
        ],
      }}
      keyRequirements={{
        title: 'eSTAR Template Features',
        sections: [
          {
            title: 'Structured Sections',
            description: 'eSTAR organizes submission into structured sections: Administrative Information, Device Information, Predicate Device Information, Indications for Use, Device Description, Substantial Equivalence, Performance Data, Software Documentation, Biocompatibility, Sterilization, Labeling, and Truthful and Accurate Statement. Each section has specific fields and requirements.',
          },
          {
            title: 'Guided Workflow',
            description: 'eSTAR provides step-by-step guidance through each section with instructions, examples, and help text. The template indicates required vs. optional fields and provides context-specific guidance. Users can navigate between sections and save progress.',
          },
          {
            title: 'Validation Checks',
            description: 'eSTAR includes automatic validation checks to ensure completeness and consistency. The template checks for required fields, file attachments, and data consistency. Validation errors are flagged before submission, reducing FDA review delays.',
          },
          {
            title: 'Attachment Management',
            description: 'eSTAR allows attachment of supporting documents (test reports, drawings, labeling, etc.) in appropriate sections. Files can be uploaded in various formats (PDF, Word, Excel, images). The template organizes attachments by section.',
          },
          {
            title: 'Help and Resources',
            description: 'eSTAR includes built-in help text, links to FDA guidance documents, and examples. Users can access relevant FDA guidance directly from the template. Help text explains requirements and provides examples of acceptable responses.',
          },
          {
            title: 'PDF Generation',
            description: 'eSTAR generates a structured PDF submission package that can be submitted through FDA\'s Electronic Submission Gateway (ESG). The PDF includes all entered information and attachments in organized format suitable for FDA review.',
          },
          {
            title: 'Version Control',
            description: 'eSTAR templates are updated periodically. Users should download the latest version from FDA website. Older versions may not be accepted. Check FDA website for current eSTAR version requirements.',
          },
          {
            title: 'Compatibility',
            description: 'eSTAR is compatible with FDA\'s Electronic Submission Gateway (ESG) and review systems. Submissions prepared in eSTAR can be directly uploaded to ESG. The structured format facilitates FDA\'s automated processing and review.',
          },
        ],
      }}
      complianceGuide={{
        title: 'Using eSTAR Template',
        steps: [
          {
            step: 1,
            title: 'Download Latest eSTAR Version',
            description: 'Download the latest eSTAR template from FDA website before starting. Check FDA website for current version requirements. Older versions may not be accepted. FDA periodically updates eSTAR.',
          },
          {
            step: 2,
            title: 'Complete Administrative Information',
            description: 'Enter all administrative information including submitter information, device information, and contact details. Ensure all required fields are completed. eSTAR validation will flag missing required fields.',
          },
          {
            step: 3,
            title: 'Enter Device and Predicate Information',
            description: 'Complete device description, indications for use, and predicate device comparison sections. Provide detailed information per eSTAR guidance. Use help text and examples provided in template.',
          },
          {
            step: 4,
            title: 'Attach Supporting Documents',
            description: 'Attach all required supporting documents in appropriate sections: test reports (electrical safety, EMC, laser safety), drawings, labeling, software documentation, biocompatibility data. Ensure files are readable and properly formatted.',
          },
          {
            step: 5,
            title: 'Complete Performance Data Sections',
            description: 'Enter performance data including test results, test methods, and conclusions. Reference attached test reports. Ensure all required testing is documented. Include NRTL certificates where applicable.',
          },
          {
            step: 6,
            title: 'Review and Validate',
            description: 'Review entire eSTAR submission for completeness and accuracy. Use eSTAR validation checks to identify any issues. Review attached documents to ensure they support the submission. Have regulatory affairs review.',
          },
          {
            step: 7,
            title: 'Generate PDF and Submit',
            description: 'Generate structured PDF submission package from eSTAR. Review PDF for completeness. Submit PDF through FDA Electronic Submission Gateway (ESG). Ensure ESG account and credentials. Keep confirmation and tracking number.',
          },
          {
            step: 8,
            title: 'Respond to Validation Errors',
            description: 'If FDA identifies validation issues, respond promptly. Address errors and resubmit. Delayed responses extend review timeline. Consider teleconference to clarify issues with FDA.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Understanding eSTAR structure and requirements',
            solution: 'Attend FDA eSTAR training sessions or webinars. Review FDA user guides and FAQs. Use help text and examples in template. Contact FDA with questions.',
          },
          {
            challenge: 'Attaching large files or multiple documents',
            solution: 'Compress large files if needed. Organize documents logically. Ensure files are readable and properly formatted. Split very large files if necessary.',
          },
          {
            challenge: 'Validation errors and missing information',
            solution: 'Complete all required fields. Review validation errors carefully. Ensure attached documents support entered information. Have regulatory affairs review before submission.',
          },
        ],
      }}
      relatedRegulations={[
        { number: '510(k) Submission', title: 'Premarket Notification', relationship: 'eSTAR used for 510(k) submissions', url: '/regulations/510k-submission' },
        { number: '21 CFR Part 807', title: 'Establishment Registration', relationship: 'Required before marketing device', url: '/regulations/cfr-807' },
        { number: '21 CFR Part 820', title: 'Quality System Regulation', relationship: 'QMS requirements for device development', url: '/regulations/cfr-820' },
      ]}
      relatedStandards={[
        { number: 'IEC 60601-1', title: 'Medical Electrical Equipment', relationship: 'Electrical safety data for eSTAR', url: '/standards/iec-60601-1' },
        { number: 'IEC 62304', title: 'Software Lifecycle', relationship: 'Software documentation for eSTAR', url: '/standards/iec-62304' },
      ]}
      hotTake={{
        take: `eSTAR is FDA's structured submission template for 510(k)s—and it's now essentially mandatory. Use it.

The guided format with validation checks actually makes preparation easier and reduces FDA review time. It's a win-win.`,
        context: 'eSTAR standardizes 510(k) format and accelerates FDA review. There\'s no reason not to use it.',
        realWorldTips: [
          'Always download the latest eSTAR version from FDA before starting.',
          'Built-in validation catches common errors before submission.',
          'Organize your attachments clearly—reviewers appreciate logical structure.',
          'PDF generation from eSTAR is what you actually submit through ESG.',
        ],
      }}
    />
  );
}

