'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function IEC8100151Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'IEC 81001-5-1',
        title: 'Health software and health IT systems safety, effectiveness and security — Part 5-1: Security — Activities in the product life cycle',
        organization: 'IEC',
        publicationDate: '2021',
        currentVersion: '2021',
        category: 'software',
        purchaseUrl: 'https://webstore.iec.ch/en/publication/34263',
      }}
      overview={{
        scope: 'IEC 81001-5-1 specifies security requirements and activities throughout the product life cycle for health software and health IT systems. It addresses cybersecurity risks that could impact safety, effectiveness, and security of health software. The standard applies to software that is a medical device (SaMD) or software in a medical device (SiMD), as well as health IT systems.',
        whyItMatters: 'Cybersecurity is critical for medical devices, especially connected devices and software. Cyber attacks can compromise device safety, patient data privacy, and system availability. IEC 81001-5-1 provides a framework for managing cybersecurity risks throughout the product lifecycle. FDA requires cybersecurity documentation for premarket submissions, and this standard helps meet those requirements. Compliance demonstrates commitment to patient safety and data protection.',
        keyConcepts: [
          'Security risk management throughout product lifecycle',
          'Threat modeling and vulnerability assessment',
          'Security requirements and architecture',
          'Secure design and development practices',
          'Security testing and validation',
          'Security incident response and management',
          'Security maintenance and updates',
          'Supply chain security management',
          'Security documentation and reporting',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Security Risk Management',
            description: 'Organizations must establish a security risk management process that identifies threats, assesses vulnerabilities, evaluates risks, and implements security controls. Security risks must be managed throughout the product lifecycle, from design through decommissioning.',
          },
          {
            title: 'Threat Modeling',
            description: 'Conduct threat modeling to identify potential attackers, attack vectors, and security threats. Consider threats from external attackers, insiders, and supply chain. Document threat models and update them as threats evolve.',
          },
          {
            title: 'Security Requirements',
            description: 'Define security requirements based on threat modeling and risk assessment. Requirements should address authentication, authorization, encryption, data integrity, audit logging, and secure communications. Link security requirements to safety and effectiveness.',
          },
          {
            title: 'Secure Architecture and Design',
            description: 'Design systems with security in mind, using secure design principles such as defense in depth, least privilege, and secure defaults. Consider security architecture patterns and avoid known insecure practices.',
          },
          {
            title: 'Secure Development Practices',
            description: 'Implement secure coding practices, code reviews, static analysis, and security testing during development. Manage third-party components and dependencies securely. Follow secure software development lifecycle (SSDLC) practices.',
          },
          {
            title: 'Security Testing and Validation',
            description: 'Conduct security testing including vulnerability scanning, penetration testing, and security validation. Test for common vulnerabilities (OWASP Top 10, CWE Top 25). Validate that security controls are effective.',
          },
          {
            title: 'Security Incident Response',
            description: 'Establish procedures for detecting, responding to, and recovering from security incidents. Define roles and responsibilities, communication procedures, and incident reporting requirements. Plan for coordinated vulnerability disclosure.',
          },
          {
            title: 'Security Maintenance and Updates',
            description: 'Monitor for security vulnerabilities and threats. Provide security updates and patches in a timely manner. Establish processes for managing security updates, including risk assessment and deployment procedures.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Implementation Roadmap',
        steps: [
          {
            step: 1,
            title: 'Establish Security Risk Management Process',
            description: 'Develop a security risk management process aligned with ISO 14971 risk management principles. Define roles and responsibilities, establish security risk management file, and integrate with overall product risk management.',
          },
          {
            step: 2,
            title: 'Conduct Threat Modeling',
            description: 'Identify potential attackers (hackers, insiders, nation-states) and attack vectors. Model threats to your specific device and use environment. Consider threats to device functionality, patient data, and connected systems. Document threat models.',
          },
          {
            step: 3,
            title: 'Assess Vulnerabilities',
            description: 'Identify potential vulnerabilities in your software, hardware, network, and processes. Use vulnerability databases (CVE, NVD), security advisories, and security testing. Assess vulnerability severity and exploitability.',
          },
          {
            step: 4,
            title: 'Evaluate Security Risks',
            description: 'Evaluate security risks by combining threat likelihood with vulnerability impact. Consider impact on safety, effectiveness, and security. Prioritize risks based on severity and likelihood. Document risk assessment.',
          },
          {
            step: 5,
            title: 'Define Security Requirements',
            description: 'Develop security requirements to address identified risks. Requirements should be specific, measurable, and testable. Include requirements for authentication, encryption, access control, audit logging, secure communications, and data protection.',
          },
          {
            step: 6,
            title: 'Design Secure Architecture',
            description: 'Design system architecture with security in mind. Use secure design principles, security patterns, and avoid known vulnerabilities. Consider network architecture, data flow, and interfaces. Document security architecture.',
          },
          {
            step: 7,
            title: 'Implement Secure Development Practices',
            description: 'Establish secure coding standards, conduct code reviews, use static analysis tools, and implement security testing. Manage third-party components securely. Train developers on secure coding practices.',
          },
          {
            step: 8,
            title: 'Conduct Security Testing',
            description: 'Perform vulnerability scanning, penetration testing, and security validation. Test for common vulnerabilities and validate security controls. Document test results and address identified vulnerabilities.',
          },
          {
            step: 9,
            title: 'Establish Security Maintenance Process',
            description: 'Set up monitoring for security vulnerabilities and threats. Establish processes for security updates, patches, and coordinated vulnerability disclosure. Plan for ongoing security maintenance throughout product lifecycle.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Balancing security with usability',
            solution: 'Design security controls that are user-friendly and don\'t impede legitimate use. Consider user workflows and provide appropriate security defaults. Balance security requirements with usability requirements.',
          },
          {
            challenge: 'Managing third-party component risks',
            solution: 'Maintain inventory of third-party components, monitor for vulnerabilities, and update components regularly. Use software composition analysis tools. Consider security requirements in supplier agreements.',
          },
          {
            challenge: 'Keeping up with evolving threats',
            solution: 'Stay informed about cybersecurity threats and vulnerabilities. Subscribe to security advisories, participate in information sharing, and update threat models regularly. Plan for ongoing security maintenance.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'IEC 81001-5-1 for Medical Laser Systems',
        description: 'Medical laser systems increasingly include software, connectivity, and network features that require cybersecurity considerations. Connected lasers, cloud-based control systems, and software updates require security risk management.',
        applications: [
          {
            application: 'Connected Laser Systems',
            considerations: [
              'Secure network communications between laser and control systems',
              'Authentication and authorization for remote access',
              'Protection against unauthorized control commands',
              'Secure data transmission of treatment parameters and patient data',
            ],
          },
          {
            application: 'Software Updates and Maintenance',
            considerations: [
              'Secure update mechanisms to prevent tampering',
              'Authentication and integrity verification of updates',
              'Rollback capabilities for failed updates',
              'Secure remote maintenance access',
            ],
          },
          {
            application: 'Patient Data Protection',
            considerations: [
              'Encryption of stored patient data and treatment records',
              'Access controls for patient data',
              'Audit logging of data access and modifications',
              'Compliance with data protection regulations (HIPAA, GDPR)',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'IEC 62304',
          title: 'Software life cycle processes',
          relationship: 'IEC 81001-5-1 extends IEC 62304 with security-specific requirements',
          url: '/standards/iec-62304',
        },
        {
          number: 'ISO 14971',
          title: 'Risk management',
          relationship: 'Security risks must be managed per ISO 14971 risk management principles',
          url: '/standards/iso-14971',
        },
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'QMS requirements include security risk management and documentation',
          url: '/standards/iso-13485',
        },
      ]}
      hotTake={{
        take: `IEC 81001-5-1 is cybersecurity for health software—and it's becoming mandatory everywhere. FDA's premarket guidance now expects SBOM, threat modeling, and vulnerability management.

For laser systems with network connectivity, cloud features, or remote updates? This standard applies to you.`,
        context: 'Cybersecurity is no longer optional. Connected medical devices face real threats, and regulators expect documented security measures.',
        realWorldTips: [
          'Start with threat modeling—understand who might attack your device and how.',
          'SBOM (Software Bill of Materials) is now expected. Track every third-party component.',
          'Plan for coordinated vulnerability disclosure before you ship.',
          'Security updates need a process—you can\'t just patch and hope.',
        ],
      }}
    />
  );
}

