'use client';

import RegulationPageTemplate from '@/components/RegulationPageTemplate';

export default function CFR812Page() {
  return (
    <RegulationPageTemplate
      regulation={{
        number: '21 CFR Part 812',
        title: 'Investigational Device Exemptions (IDE)',
        organization: 'FDA',
        effectiveDate: '1980',
        category: 'clinical',
        regulationUrl: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-812',
        guidanceUrl: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/investigational-device-exemptions-ide',
      }}
      overview={{
        scope: '21 CFR Part 812 establishes requirements for clinical investigations of medical devices. It covers the submission, review, and conduct of investigational device exemptions (IDE) that allow devices to be used in clinical studies before market approval. The regulation applies to significant risk devices, non-significant risk devices, and exempt investigations.',
        applicability: 'Part 812 applies to clinical investigations of medical devices in human subjects. It applies to manufacturers, sponsors, and investigators conducting device studies. Significant risk devices require FDA IDE approval before study initiation. Non-significant risk devices require IRB approval and IDE notification to FDA. Some investigations are exempt from IDE requirements.',
        whyItMatters: '21 CFR Part 812 is essential for conducting clinical investigations required for device approval. Most high-risk devices and many moderate-risk devices require clinical data to demonstrate safety and effectiveness. Understanding IDE requirements helps ensure studies are conducted legally and ethically, supporting successful regulatory submissions. Non-compliance can result in FDA enforcement action and study shutdown.',
        keyConcepts: [
          'Investigational Device Exemption (IDE)',
          'Significant risk vs. non-significant risk devices',
          'IDE submission and FDA review',
          'Institutional Review Board (IRB) approval',
          'Informed consent requirements',
          'Investigator responsibilities',
          'Sponsor responsibilities',
          'Adverse event reporting',
          'IDE exemptions and abbreviated requirements',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'IDE Submission (812.20)',
            description: 'Sponsors must submit IDE application to FDA for significant risk devices. IDE must include device description, investigational plan, manufacturing information, investigator information, IRB information, and informed consent documents. FDA reviews IDE and may approve, disapprove, or approve with conditions.',
          },
          {
            title: 'Risk Determination (812.3)',
            description: 'Sponsors must determine whether device presents significant risk or non-significant risk. Significant risk devices require FDA IDE approval. Non-significant risk devices require IRB approval and IDE notification to FDA. Risk determination must be documented.',
          },
          {
            title: 'IRB Approval (812.62)',
            description: 'All clinical investigations require IRB approval before initiation. IRB must review and approve investigational plan, informed consent, and investigator qualifications. IRB must conduct continuing review and approve protocol changes.',
          },
          {
            title: 'Informed Consent (812.100)',
            description: 'Investigators must obtain informed consent from subjects before participation. Consent must be voluntary, based on adequate information about risks, benefits, and alternatives. Consent must be documented and subjects can withdraw at any time.',
          },
          {
            title: 'Investigator Responsibilities (812.100)',
            description: 'Investigators must conduct investigation per approved protocol, ensure subject safety, obtain informed consent, maintain records, and report adverse events. Investigators must be qualified and have adequate resources.',
          },
          {
            title: 'Sponsor Responsibilities (812.40)',
            description: 'Sponsors must select qualified investigators, provide investigational devices, ensure proper labeling, monitor investigations, and report adverse events to FDA and IRBs. Sponsors must maintain IDE and update FDA on changes.',
          },
          {
            title: 'Adverse Event Reporting (812.150)',
            description: 'Unanticipated adverse device effects (UADEs) must be reported to FDA and IRBs within specified timelines. Serious adverse events must be reported promptly. All adverse events must be documented and evaluated.',
          },
          {
            title: 'Labeling Requirements (812.5)',
            description: 'Investigational devices must be labeled "CAUTION: Investigational device. Limited by Federal (or United States) law to investigational use." Labeling must not be promotional.',
          },
        ],
      }}
      complianceGuide={{
        title: 'Compliance Roadmap',
        steps: [
          {
            step: 1,
            title: 'Determine IDE Requirement',
            description: 'Assess whether clinical investigation requires IDE. Determine if device is significant risk or non-significant risk. Review FDA guidance on IDE requirements and exemptions.',
          },
          {
            step: 2,
            title: 'Develop Investigational Plan',
            description: 'Create comprehensive investigational plan including study objectives, design, endpoints, sample size, subject selection criteria, procedures, and statistical analysis plan. Consider consulting clinical research experts.',
          },
          {
            step: 3,
            title: 'Prepare IDE Submission',
            description: 'Prepare IDE application including device description, investigational plan, manufacturing information, investigator information, IRB information, and informed consent documents. Ensure completeness and accuracy.',
          },
          {
            step: 4,
            title: 'Submit IDE to FDA',
            description: 'Submit IDE application to FDA for significant risk devices. For non-significant risk devices, submit IDE notification. Address FDA questions and concerns. Obtain FDA approval before study initiation.',
          },
          {
            step: 5,
            title: 'Obtain IRB Approval',
            description: 'Submit investigational plan and informed consent to IRB. Address IRB questions and concerns. Obtain IRB approval before enrolling subjects. Ensure IRB approval is maintained throughout study.',
          },
          {
            step: 6,
            title: 'Select and Qualify Investigators',
            description: 'Select qualified investigators with appropriate training, experience, and resources. Qualify investigators per Part 812 requirements. Ensure investigators understand their responsibilities.',
          },
          {
            step: 7,
            title: 'Initiate Investigation',
            description: 'Distribute investigational devices to investigators. Ensure proper labeling. Train investigators and site staff. Begin subject enrollment per approved protocol.',
          },
          {
            step: 8,
            title: 'Monitor Investigation',
            description: 'Monitor investigation for protocol compliance, data quality, and subject safety. Conduct monitoring visits. Review adverse events and data. Report UADEs to FDA and IRBs promptly.',
          },
          {
            step: 9,
            title: 'Maintain IDE',
            description: 'Update IDE when protocol changes, add investigators, or make other changes. Submit IDE supplements for significant changes. Maintain IDE throughout investigation.',
          },
          {
            step: 10,
            title: 'Complete Investigation',
            description: 'Complete investigation per protocol. Submit final report to FDA. Archive study records. Prepare clinical data for regulatory submission.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Determining significant risk vs. non-significant risk',
            solution: 'Review FDA guidance on risk determination. Consider device type, intended use, and potential for serious injury. When in doubt, treat as significant risk. Document risk determination rationale.',
          },
          {
            challenge: 'IDE review timelines',
            solution: 'Plan for FDA review time (typically 30 days for significant risk devices). Submit complete IDE application to avoid delays. Respond promptly to FDA questions. Consider pre-IDE meetings for complex devices.',
          },
          {
            challenge: 'Managing multi-site investigations',
            solution: 'Coordinate multiple IRB approvals. Ensure consistent protocol implementation across sites. Establish central monitoring and data management. Coordinate adverse event reporting.',
          },
        ],
      }}
      relatedRegulations={[
        {
          number: '21 CFR Part 50',
          title: 'Protection of Human Subjects',
          relationship: 'Part 50 establishes informed consent requirements used in IDE investigations',
          url: '/regulations',
        },
        {
          number: '21 CFR Part 56',
          title: 'Institutional Review Boards',
          relationship: 'Part 56 establishes IRB requirements for IDE investigations',
          url: '/regulations',
        },
      ]}
      relatedStandards={[
        {
          number: 'ISO 14155',
          title: 'Clinical investigation of medical devices',
          relationship: 'ISO 14155 provides Good Clinical Practice requirements that complement Part 812',
          url: '/standards/iso-14155',
        },
      ]}
      hotTake={{
        take: `Part 812 covers Investigational Device Exemptions—your pathway to conducting clinical studies before FDA clearance or approval.

The key determination: significant risk vs. non-significant risk. Get this wrong, and your study may be illegal.`,
        context: 'IDE requirements protect human subjects while enabling device development. Follow them carefully.',
        realWorldTips: [
          'Significant risk devices require FDA IDE approval before study initiation.',
          'Non-significant risk devices need IRB approval but not FDA IDE approval.',
          'Consider a pre-IDE meeting with FDA for complex or novel devices.',
          'Keep ISO 14155 in mind—it complements Part 812 for GCP.',
        ],
      }}
    />
  );
}

