'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function IEC62304Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'IEC 62304',
        title: 'Medical device software — Software life cycle processes',
        organization: 'IEC',
        publicationDate: '2006',
        currentVersion: '2006 + Amd.1:2015',
        category: 'software',
        purchaseUrl: 'https://webstore.iec.ch/en/publication/22794',
      }}
      overview={{
        scope: 'IEC 62304 specifies life cycle requirements for the development of medical device software and software within medical devices. The standard applies to the development and maintenance of medical device software. It covers software that is itself a medical device (SaMD) and software that is embedded in or used as part of a medical device. The standard defines software safety classes (A, B, C) based on the potential for software to contribute to a hazardous situation.',
        whyItMatters: 'IEC 62304 is the international standard for medical device software development and is required by FDA, EU MDR, Health Canada, and other regulatory bodies. With the increasing use of software in medical devices, proper software lifecycle management is critical for patient safety and regulatory compliance. The standard helps manufacturers develop reliable, safe software through systematic processes, risk management, and validation. Software failures can lead to patient harm, product recalls, and regulatory action.',
        keyConcepts: [
          'Software safety classification (Class A, B, C)',
          'Software development lifecycle processes',
          'Software development plan (SDP)',
          'Software requirements specification (SRS)',
          'Software architecture and detailed design',
          'Software unit implementation and testing',
          'Software integration and integration testing',
          'Software system testing',
          'SOUP (Software of Unknown Provenance) management',
          'Software risk management (integrated with ISO 14971)',
          'Software maintenance and configuration management',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Software Safety Classification (Clause 4)',
            description: 'Software must be classified as Class A (no injury possible), Class B (non-serious injury possible), or Class C (death or serious injury possible). Classification determines the rigor of development processes required. Classification is based on the potential for software to contribute to a hazardous situation, considering both the severity of harm and the probability of occurrence.',
          },
          {
            title: 'Software Development Process (Clause 5)',
            description: 'Manufacturers must establish a software development plan (SDP) that defines the software lifecycle model, activities, tasks, and deliverables. The SDP must be appropriate for the software safety class. For Class B and C software, more rigorous processes are required including formal design reviews, verification, and validation.',
          },
          {
            title: 'Software Requirements Analysis (Clause 5.2)',
            description: 'Software requirements must be specified, documented, and reviewed. Requirements must be traceable to system requirements and risk control measures. For Class B and C software, requirements must be verified for completeness, correctness, consistency, testability, and feasibility.',
          },
          {
            title: 'Software Architectural Design (Clause 5.3)',
            description: 'Software architecture must be designed and documented. For Class B and C software, architectural design must be verified and reviewed. The architecture must support software safety requirements and facilitate verification and validation.',
          },
          {
            title: 'Software Detailed Design (Clause 5.4)',
            description: 'Detailed design must specify software units, their interfaces, and algorithms. For Class B and C software, detailed design must be verified and reviewed. Design must be traceable to software requirements.',
          },
          {
            title: 'Software Unit Implementation and Testing (Clause 5.5)',
            description: 'Software units must be implemented according to the detailed design. Each unit must be tested to verify it meets its requirements. For Class B and C software, unit testing must be documented and reviewed. Code must follow coding standards and be reviewed.',
          },
          {
            title: 'Software Integration and Testing (Clause 5.6)',
            description: 'Software units must be integrated incrementally and tested. Integration testing must verify interfaces and interactions between units. For Class B and C software, integration testing must be documented and reviewed.',
          },
          {
            title: 'Software System Testing (Clause 5.7)',
            description: 'Complete software system must be tested to verify it meets software requirements. System testing must include functional testing, performance testing, and safety testing. Test results must be documented and reviewed.',
          },
          {
            title: 'SOUP Management (Clause 5.8)',
            description: 'Software of Unknown Provenance (SOUP) includes commercial off-the-shelf (COTS) software, open-source software, and legacy software. SOUP must be evaluated for suitability, documented, and managed. Risk analysis must be performed for SOUP used in Class B and C software.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Software Development Implementation Guide',
        steps: [
          {
            step: 1,
            title: 'Determine Software Safety Class',
            description: 'Classify software based on potential to contribute to hazardous situations. Consider the device\'s intended use, user population, and risk analysis (ISO 14971). Class A: No injury possible (e.g., data logging). Class B: Non-serious injury possible (e.g., incorrect display). Class C: Death or serious injury possible (e.g., incorrect drug dosing, laser power control). Document classification rationale.',
          },
          {
            step: 2,
            title: 'Create Software Development Plan (SDP)',
            description: 'Document the software lifecycle model (waterfall, V-model, agile with medical device adaptations), development activities, tasks, deliverables, and responsibilities. Define coding standards, design standards, and review processes. Link SDP to design and development plan (ISO 13485) and risk management plan (ISO 14971).',
          },
          {
            step: 3,
            title: 'Develop Software Requirements Specification (SRS)',
            description: 'Document functional requirements, performance requirements, interface requirements, and safety requirements. Ensure requirements are traceable to system requirements and risk control measures. For Class B and C, verify requirements for completeness, correctness, consistency, testability, and feasibility. Use requirements management tools for traceability.',
          },
          {
            step: 4,
            title: 'Design Software Architecture',
            description: 'Create architectural design showing software components, their interactions, and interfaces. For Class B and C, verify architecture supports safety requirements and facilitates verification. Conduct architectural design review. Document design decisions and rationale.',
          },
          {
            step: 5,
            title: 'Create Detailed Design',
            description: 'Specify software units (modules, functions, classes), their interfaces, algorithms, and data structures. For Class B and C, verify detailed design is traceable to requirements and architecture. Conduct design review. Use design patterns and coding standards.',
          },
          {
            step: 6,
            title: 'Implement and Test Software Units',
            description: 'Code software units according to detailed design. Follow coding standards (MISRA C, CERT C, etc.). Perform unit testing for each unit. For Class B and C, document unit tests and conduct code review. Use static code analysis tools. Achieve code coverage targets (typically 80-100% for Class C).',
          },
          {
            step: 7,
            title: 'Integrate and Test Software',
            description: 'Integrate software units incrementally. Perform integration testing to verify interfaces and interactions. For Class B and C, document integration tests and review results. Use integration test frameworks. Verify integration meets architectural design.',
          },
          {
            step: 8,
            title: 'Perform Software System Testing',
            description: 'Test complete software system against SRS. Include functional testing, performance testing, boundary testing, and safety testing. For Class B and C, document all test cases and results. Conduct test review. Verify software meets all requirements including safety requirements.',
          },
          {
            step: 9,
            title: 'Manage SOUP',
            description: 'Identify all SOUP components (operating systems, libraries, frameworks). Evaluate SOUP for suitability, security vulnerabilities, and maintenance support. Document SOUP inventory and versions. For Class B and C, perform risk analysis for SOUP. Monitor SOUP for security updates and patches.',
          },
          {
            step: 10,
            title: 'Release Software',
            description: 'Complete software release documentation including release notes, known limitations, and installation instructions. Verify all development activities are complete. Conduct final review. Release software according to configuration management procedures.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Incorrect software classification',
            solution: 'Base classification on risk analysis (ISO 14971), not just device class. Consider all potential hazardous situations software could contribute to. When in doubt, classify higher (more rigorous). Document classification rationale clearly.',
          },
          {
            challenge: 'Inadequate requirements traceability',
            solution: 'Use requirements management tools (DOORS, Jira, Polarion) to maintain traceability from user needs through system requirements to software requirements to design to code to tests. Review traceability regularly.',
          },
          {
            challenge: 'SOUP security vulnerabilities',
            solution: 'Regularly scan SOUP for known vulnerabilities (OWASP, CVE database). Establish SOUP update procedures. Document security risk analysis. Consider alternatives if SOUP has critical vulnerabilities.',
          },
          {
            challenge: 'Insufficient testing coverage',
            solution: 'Define code coverage targets (80% for Class B, 100% for Class C). Use code coverage tools. Test boundary conditions, error handling, and safety-critical paths. Document test coverage and justify any gaps.',
          },
          {
            challenge: 'Poor integration with risk management',
            solution: 'Link software requirements to risk control measures. Include software-related hazards in risk analysis. Verify software risk controls through testing. Update risk management file when software changes.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'IEC 62304 for Medical Laser Control Software',
        description: 'Laser control software is typically Class C (safety-critical) because software failures can lead to uncontrolled laser emission, incorrect power delivery, or safety interlock bypass, resulting in serious eye injury or burns. The software controls laser power, safety interlocks, beam delivery, user interface, and data logging. Rigorous development processes, comprehensive testing, and SOUP management are essential.',
        applications: [
          {
            application: 'Laser Power Control Software (Class C)',
            considerations: [
              'Safety-critical: Software controls laser power output. Failure can cause overexposure or underexposure.',
              'Requirements: Power accuracy (±5%), power monitoring, automatic shutoff on error, calibration procedures.',
              'Architecture: Separate safety-critical power control module with watchdog timer, redundant power monitoring.',
              'Testing: 100% code coverage, boundary testing (min/max power), fault injection testing, safety testing.',
              'SOUP: Real-time operating system (RTOS) must be evaluated for determinism and safety certification.',
              'Risk management: Software failures linked to optical radiation hazard (Severity 9-10) in ISO 14971 risk analysis.',
            ],
          },
          {
            application: 'Safety Interlock Software (Class C)',
            considerations: [
              'Safety-critical: Software monitors safety interlocks and prevents laser operation if interlocks fail.',
              'Requirements: Continuous monitoring of interlock states, fail-safe behavior, redundant monitoring paths.',
              'Architecture: Independent interlock monitoring module with hardware watchdog, separate from power control.',
              'Testing: Fault injection (simulate interlock failures), timing analysis, worst-case execution time (WCET) analysis.',
              'Verification: Formal verification may be required for Class C interlock software.',
              'Documentation: Software safety case demonstrating interlock software reliability and fail-safe behavior.',
            ],
          },
          {
            application: 'User Interface Software (Class B)',
            considerations: [
              'Moderate risk: UI errors can lead to use errors (wrong settings) but software itself doesn\'t directly cause harm.',
              'Requirements: Clear display of power settings, confirmation prompts for high-power operations, error messages.',
              'Testing: Usability testing, display accuracy verification, error message clarity.',
              'Integration: UI software must correctly communicate with power control software (Class C).',
              'SOUP: UI framework (Qt, .NET) must be evaluated for stability and security.',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'ISO 14971',
          title: 'Application of risk management to medical devices',
          relationship: 'Software risk management must follow ISO 14971. Software classification based on risk analysis.',
          url: '/standards/iso-14971',
        },
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'Software development must be part of design controls (ISO 13485 Clause 7.3)',
          url: '/standards/iso-13485',
        },
        {
          number: 'IEC 60601-1',
          title: 'Medical electrical equipment — General requirements',
          relationship: 'Software in medical electrical equipment must comply with IEC 62304',
          url: '/standards/iec-60601-1',
        },
        {
          number: 'IEC 62366',
          title: 'Application of usability engineering',
          relationship: 'Usability engineering applies to software user interfaces',
          url: '/standards/iec-62366',
        },
      ]}
      hotTake={{
        take: `IEC 62304 defines how you develop and maintain medical device software. The key decision that drives everything: software safety classification (A, B, or C). Get this wrong, and you're either over-engineering Class A software or under-documenting Class C.

For laser control software? Almost always Class C. The software directly controls energy delivery to patients.`,
        context: 'Software is increasingly the differentiator in medical devices. Well-documented software development accelerates your entire regulatory pathway.',
        realWorldTips: [
          'Classify based on risk analysis, not device class. Software in a Class I device can still be Class C.',
          'SOUP (third-party libraries) management catches many teams off guard. Document everything you use.',
          'Requirements traceability is non-negotiable—use tools like DOORS, Jira, or Polarion.',
          'Unit test coverage targets: 80% for Class B, 100% for Class C safety-critical paths.',
        ],
      }}
    />
  );
}

