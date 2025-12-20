'use client';

import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import Stepper, { StepperStep } from '@/components/Stepper';
import ExpandableSection from '@/components/ExpandableSection';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { ArrowLeft, FileText, Zap, Shield, Code, Users, TestTube, FileCheck, Clock, Layers } from 'lucide-react';

// FDA Guidance Documents data
const guidanceDocuments = [
  { area: 'Laser Safety', docId: 'FDA-2017-D-7011', name: 'Laser Notice No. 56', desc: 'Recognition of IEC 60825-1 and IEC 60601-2-22 as alternatives to 21 CFR 1040' },
  { area: 'Usability / HFE', docId: 'FDA-2011-D-0469', name: 'HFE Process', desc: 'Human factors engineering process, task analysis, and validation testing' },
  { area: 'HFE Submission', docId: 'FDA-2015-D-4599', name: 'HFE Content', desc: 'HFE documentation requirements for premarket submissions' },
  { area: 'Software', docId: 'FDA-2021-D-0775', name: 'SW Documentation', desc: 'Basic vs. Enhanced documentation levels for device software' },
  { area: 'OTS Software', docId: 'FDA-2019-D-3598', name: 'OTS/COTS', desc: 'Validation for third-party/OTS software integration' },
  { area: 'Cybersecurity', docId: 'FDA-2021-D-1158', name: 'Premarket', desc: 'Cybersecurity risk management and premarket submission content' },
  { area: 'Cybersecurity', docId: 'FDA-2016-D-1224', name: 'Postmarket', desc: 'Postmarket surveillance and vulnerability management' },
  { area: 'EMC', docId: 'FDA-2015-D-3787', name: 'EMC Testing', desc: 'EMC testing expectations per IEC 60601-1-2 Ed. 4.1' },
  { area: 'Biocompatibility', docId: 'FDA-2013-D-0350', name: 'ISO 10993', desc: 'ISO 10993-1 interpretation and chemical characterization' },
  { area: 'Sterility', docId: 'FDA-2024-D-0520', name: 'Packaging', desc: 'Sterility validation and packaging for 510(k) submissions' },
  { area: 'Labeling / UDI', docId: 'FDA-2021-D-0889', name: 'UDI', desc: 'UDI placement and content per 21 CFR 801/830' },
  { area: '510(k)', docId: 'FDA-2014-D-0090', name: 'SE Framework', desc: 'Substantial equivalence determination framework' },
  { area: '510(k)', docId: 'FDA-2012-D-1002', name: 'RTA Policy', desc: 'Refuse-to-accept checklist criteria' },
  { area: '510(k)', docId: 'FDA-2023-D-0308', name: 'eSTAR', desc: 'Mandatory eSTAR template for 510(k) submissions' },
  { area: 'Standards', docId: 'FDA-2018-D-1716', name: 'Consensus Standards', desc: 'Proper citation of consensus standards in submissions' },
];

export default function HowToDevelopMedicalLaserSystemPage() {
  const steps: StepperStep[] = [
    {
      id: 'planning',
      title: 'Planning & Regulatory Strategy',
      description: 'Establish regulatory pathway and project foundation',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Determine Regulatory Pathway</h4>
            <p className="text-gray-700 mb-3">
              Medical laser systems can follow different FDA pathways depending on intended use, risk, and predicate devices:
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-900 mb-2">510(k) Premarket Notification</h5>
                <p className="text-sm text-green-800 mb-2">
                  For devices substantially equivalent to a legally marketed predicate device. Most Class II laser systems.
                </p>
                <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                  <li>Requires demonstration of substantial equivalence</li>
                  <li>Typically 90-day review (may be longer)</li>
                  <li>Use eSTAR template for submission</li>
                </ul>
                <Link href="/regulations/510k-submission" className="text-green-700 hover:text-green-800 font-medium text-sm inline-flex items-center gap-1 mt-2">
                  Learn More <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-semibold text-orange-900 mb-2">PMA (Premarket Approval)</h5>
                <p className="text-sm text-orange-800 mb-2">
                  For Class III devices or novel devices without predicates. Higher risk laser systems.
                </p>
                <ul className="text-sm text-orange-800 space-y-1 list-disc list-inside">
                  <li>Requires clinical data demonstrating safety and effectiveness</li>
                  <li>Typically 180-day review (often longer)</li>
                  <li>More comprehensive submission requirements</li>
                </ul>
                <Link href="/regulations/pma-submission" className="text-orange-700 hover:text-orange-800 font-medium text-sm inline-flex items-center gap-1 mt-2">
                  Learn More <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-blue-900 mb-2">IDE (Investigational Device Exemption)</h5>
                <p className="text-sm text-blue-800 mb-2">
                  For clinical investigations of unapproved devices or new indications.
                </p>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Required before clinical studies for PMA devices</li>
                  <li>Allows use in clinical investigation</li>
                  <li>Requires IRB approval and informed consent</li>
                </ul>
                <Link href="/regulations/cfr-812" className="text-blue-700 hover:text-blue-800 font-medium text-sm inline-flex items-center gap-1 mt-2">
                  Learn More <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Identify Applicable Regulations</h4>
            <p className="text-gray-700 mb-3">
              Medical laser systems must comply with multiple FDA regulations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Core FDA Regulations</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>21 CFR 820</strong> – Quality System Regulation</li>
                  <li><strong>21 CFR 801</strong> – Labeling requirements</li>
                  <li><strong>21 CFR 830</strong> – Unique Device Identification</li>
                  <li><strong>21 CFR 803</strong> – Medical Device Reporting</li>
                  <li><strong>21 CFR 812</strong> – IDE requirements</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Laser-Specific Regulations</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>21 CFR 1002</strong> – Records and reports for radiation-emitting products</li>
                  <li><strong>21 CFR 1040</strong> – Performance standards for light-emitting products (laser products)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Identify Applicable Standards</h4>
            <p className="text-gray-700 mb-3">
              Medical laser systems must comply with multiple standards:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Electrical Safety
                </h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <Link href="/standards/iec-60601-1" className="text-blue-600 hover:underline">IEC 60601-1</Link> - General requirements</li>
                  <li>• <Link href="/standards/iec-60601-2-22" className="text-blue-600 hover:underline">IEC 60601-2-22</Link> - Laser equipment</li>
                  <li>• <Link href="/standards/iec-60601-1-2" className="text-blue-600 hover:underline">IEC 60601-1-2</Link> - EMC requirements</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-500" />
                  Laser Safety
                </h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <Link href="/standards/iec-60825-1" className="text-blue-600 hover:underline">IEC 60825-1</Link> - Laser product safety</li>
                  <li>• <Link href="/standards/iec-60601-2-57" className="text-blue-600 hover:underline">IEC 60601-2-57</Link> - Light source equipment</li>
                  <li>• FDA Laser Notice 56 - IEC conformance</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-500" />
                  Software
                </h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <Link href="/standards/iec-62304" className="text-blue-600 hover:underline">IEC 62304</Link> - Software lifecycle</li>
                  <li>• <Link href="/standards/iec-81001-5-1" className="text-blue-600 hover:underline">IEC 81001-5-1</Link> - Cybersecurity</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" />
                  Usability
                </h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <Link href="/standards/iec-62366" className="text-blue-600 hover:underline">IEC 62366</Link> - Usability engineering</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  Labeling
                </h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <Link href="/standards/iso-15223" className="text-blue-600 hover:underline">ISO 15223</Link> - Symbols for labels</li>
                  <li>• <Link href="/standards/iso-20417" className="text-blue-600 hover:underline">ISO 20417</Link> - Information supplied</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-teal-500" />
                  Packaging / Sterility
                </h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ISO 11135 - EO sterilization</li>
                  <li>• ISO 11607-1, -2 - Packaging</li>
                  <li>• ASTM D4169 - Shipping testing</li>
                  <li>• ASTM F1980 - Accelerated aging</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Establish Project Team</h4>
            <p className="text-gray-700 mb-3">
              Assemble a cross-functional team with expertise in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Regulatory Affairs:</strong> FDA submission strategy and requirements</li>
              <li><strong>Laser Engineering:</strong> Optical design, laser physics, beam delivery</li>
              <li><strong>Electrical Engineering:</strong> Power systems, control electronics, EMC</li>
              <li><strong>Software Engineering:</strong> IEC 62304 compliance, cybersecurity</li>
              <li><strong>Usability Engineering:</strong> Human factors, user interface design</li>
              <li><strong>Quality Engineering:</strong> Risk management, design controls, testing</li>
              <li><strong>Clinical Affairs:</strong> Clinical evaluation, use scenarios</li>
              <li><strong>Manufacturing:</strong> Production processes, supplier management</li>
            </ul>
          </div>

          <ExpandableSection title="Pro Tip: Early Engagement with FDA" variant="info">
            <p className="text-sm text-gray-700 mb-2">
              Consider requesting a Pre-Submission meeting with FDA early in development. This allows you to:
            </p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-2">
              <li>Discuss regulatory pathway and requirements</li>
              <li>Get feedback on proposed testing strategies</li>
              <li>Clarify clinical data requirements</li>
              <li>Identify potential submission issues early</li>
            </ul>
          </ExpandableSection>
        </div>
      ),
    },
    {
      id: 'design-controls',
      title: 'Design Controls & Requirements',
      description: 'Establish design inputs and design history file',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Design and Development Planning</h4>
            <p className="text-gray-700 mb-3">
              Create a Design and Development Plan per <Link href="/regulations/cfr-820" className="text-blue-600 hover:underline">21 CFR 820.30</Link> and <Link href="/standards/iso-13485" className="text-blue-600 hover:underline">ISO 13485:2016</Link>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Define design stages and milestones</li>
              <li>Assign responsibilities and resources</li>
              <li>Establish review points and deliverables</li>
              <li>Plan verification and validation activities</li>
              <li>Define risk management activities</li>
              <li>Plan usability engineering activities</li>
              <li>Schedule software development activities</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Design Inputs</h4>
            <p className="text-gray-700 mb-3">
              Document all design inputs including user needs, regulatory requirements, and standards:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">User Needs & Intended Use</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>Clinical indication and target patient population</li>
                  <li>User profile (surgeon, technician, etc.)</li>
                  <li>Use environment (OR, clinic, home)</li>
                  <li>Performance requirements</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Regulatory Requirements</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>FDA classification and regulatory pathway</li>
                  <li>Labeling requirements (21 CFR 801)</li>
                  <li>Unique Device Identification (21 CFR 830)</li>
                  <li>Medical Device Reporting (21 CFR 803)</li>
                  <li>Laser product requirements (21 CFR 1040)</li>
                  <li>Radiation product reporting (21 CFR 1002)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Standards Requirements</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>IEC 60601-1: Electrical safety requirements</li>
                  <li>IEC 60601-2-22: Laser-specific requirements</li>
                  <li>IEC 60825-1: Laser classification and labeling</li>
                  <li>IEC 60601-1-2: EMC requirements</li>
                  <li>IEC 62304: Software lifecycle requirements</li>
                  <li>IEC 62366: Usability engineering requirements</li>
                  <li>ISO 15223, ISO 20417: Labeling symbols and information</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Technical Requirements</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>Laser wavelength, power, pulse parameters</li>
                  <li>Beam delivery system specifications</li>
                  <li>Control system requirements</li>
                  <li>Safety interlock requirements</li>
                  <li>Environmental specifications</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Design Outputs</h4>
            <p className="text-gray-700 mb-3">
              Document design outputs that meet design inputs:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Design Specifications:</strong> Detailed technical specifications</li>
              <li><strong>Drawings:</strong> Mechanical, electrical, optical drawings</li>
              <li><strong>Software Specifications:</strong> Software requirements, architecture, code</li>
              <li><strong>Labeling:</strong> Labels, instructions for use, user manual</li>
              <li><strong>Manufacturing Specifications:</strong> Production procedures, BOMs</li>
              <li><strong>Test Procedures:</strong> Verification and validation protocols</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Design History File (DHF)</h4>
            <p className="text-gray-700 mb-3">
              Maintain a complete Design History File documenting all design activities:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900 font-semibold mb-2">DHF Contents:</p>
              <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                <li>Design and Development Plan</li>
                <li>Design Inputs and Outputs</li>
                <li>Design Review Records</li>
                <li>Design Verification Records</li>
                <li>Design Validation Records</li>
                <li>Risk Management File</li>
                <li>Software Development Records</li>
                <li>Usability Engineering File</li>
                <li>Design Change Records</li>
                <li>Design Transfer Records</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'risk-management',
      title: 'Risk Management',
      description: 'Comprehensive risk analysis per ISO 14971',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Risk Management Plan</h4>
            <p className="text-gray-700 mb-3">
              Establish a Risk Management Plan per <Link href="/standards/iso-14971" className="text-blue-600 hover:underline">ISO 14971</Link>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Define risk management activities and responsibilities</li>
              <li>Establish risk acceptability criteria</li>
              <li>Define risk analysis methods (FMEA, FTA, HAZOP)</li>
              <li>Plan for production and post-production risk management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Risk Analysis</h4>
            <p className="text-gray-700 mb-3">
              Perform comprehensive risk analysis covering all aspects of the laser system:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h5 className="font-semibold text-red-900 mb-2">Laser-Specific Hazards</h5>
                <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
                  <li>Eye exposure (retinal damage, corneal burns)</li>
                  <li>Skin exposure (burns, tissue damage)</li>
                  <li>Fire hazard (ignition of materials)</li>
                  <li>Incorrect power delivery (over/under treatment)</li>
                  <li>Beam misalignment</li>
                  <li>Unintended laser emission</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h5 className="font-semibold text-yellow-900 mb-2">Electrical Hazards</h5>
                <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
                  <li>Electric shock</li>
                  <li>Fire from electrical faults</li>
                  <li>EMC interference</li>
                  <li>Power supply failures</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-semibold text-purple-900 mb-2">Software Hazards</h5>
                <ul className="text-sm text-purple-800 space-y-1 list-disc list-inside">
                  <li>Software errors causing incorrect operation</li>
                  <li>Cybersecurity vulnerabilities</li>
                  <li>Data loss or corruption</li>
                  <li>Unauthorized access</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-900 mb-2">Usability Hazards</h5>
                <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                  <li>User errors in operation</li>
                  <li>Misinterpretation of displays</li>
                  <li>Incorrect device setup</li>
                  <li>Lack of training</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/how-to/conduct-fmea-analysis" className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1">
                Learn FMEA Methodology <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Risk Evaluation & Control</h4>
            <p className="text-gray-700 mb-3">
              Evaluate risks and implement risk control measures:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Inherent Safety by Design:</strong> Eliminate hazards through design</li>
              <li><strong>Protective Measures:</strong> Safety interlocks, beam shutters, protective housings</li>
              <li><strong>Information for Safety:</strong> Warnings, labels, training materials</li>
              <li><strong>Verification:</strong> Test risk controls to ensure effectiveness</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Risk Management Report</h4>
            <p className="text-gray-700 mb-3">
              Document all risk management activities in a Risk Management Report:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Summary of risk management activities</li>
              <li>Residual risk evaluation</li>
              <li>Risk-benefit analysis</li>
              <li>Conclusion on risk acceptability</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'software',
      title: 'Software Development',
      description: 'IEC 62304 software lifecycle processes',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Software Safety Classification</h4>
            <p className="text-gray-700 mb-3">
              Classify software per <Link href="/standards/iec-62304" className="text-blue-600 hover:underline">IEC 62304</Link>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="font-semibold text-green-900">Class A</p>
                <p className="text-sm text-green-800">Software cannot contribute to a hazardous situation</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="font-semibold text-yellow-900">Class B</p>
                <p className="text-sm text-yellow-800">Software can contribute to a non-serious injury hazard</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <p className="font-semibold text-orange-900">Class C</p>
                <p className="text-sm text-orange-800">Software can contribute to a serious injury hazard</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Software Development Plan</h4>
            <p className="text-gray-700 mb-3">
              Create a Software Development Plan including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Software architecture and design</li>
              <li>Development environment and tools</li>
              <li>Configuration management process</li>
              <li>Problem resolution process</li>
              <li>Software verification activities</li>
              <li>SOUP (Software of Unknown Provenance) management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Software Requirements</h4>
            <p className="text-gray-700 mb-3">
              Document software requirements including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Functional requirements (laser control, safety interlocks, user interface)</li>
              <li>Performance requirements (response time, accuracy)</li>
              <li>Safety requirements (failsafe modes, error handling)</li>
              <li>Usability requirements (user interface design)</li>
              <li>Cybersecurity requirements</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Software Verification & Validation</h4>
            <p className="text-gray-700 mb-3">
              Perform software verification and validation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Unit Testing:</strong> Test individual software modules</li>
              <li><strong>Integration Testing:</strong> Test software components together</li>
              <li><strong>System Testing:</strong> Test complete software system</li>
              <li><strong>Software Validation:</strong> Validate software in intended use environment</li>
              <li><strong>Regression Testing:</strong> Verify changes don't break existing functionality</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">5. Cybersecurity</h4>
            <p className="text-gray-700 mb-3">
              Address cybersecurity per <Link href="/standards/iec-81001-5-1" className="text-blue-600 hover:underline">IEC 81001-5-1</Link> and FDA guidance:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Threat modeling and risk assessment</li>
              <li>Security controls implementation</li>
              <li>Vulnerability management</li>
              <li>Security testing and penetration testing</li>
              <li>Cybersecurity documentation for submission</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'usability',
      title: 'Usability Engineering',
      description: 'IEC 62366 usability engineering process',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Usability Engineering Plan</h4>
            <p className="text-gray-700 mb-3">
              Create a Usability Engineering Plan per <Link href="/standards/iec-62366" className="text-blue-600 hover:underline">IEC 62366</Link>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Define user groups and use environments</li>
              <li>Identify use scenarios and tasks</li>
              <li>Identify known use-related hazards</li>
              <li>Plan formative and summative usability testing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. User Interface Design</h4>
            <p className="text-gray-700 mb-3">
              Design user interface considering:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>User capabilities and limitations</li>
              <li>Use environment constraints (OR lighting, noise)</li>
              <li>Critical tasks (laser activation, power setting, emergency stop)</li>
              <li>Error prevention and recovery</li>
              <li>Consistency and intuitiveness</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Formative Usability Testing</h4>
            <p className="text-gray-700 mb-3">
              Conduct iterative formative testing during development:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Early prototype testing with representative users</li>
              <li>Identify usability issues and design improvements</li>
              <li>Verify use-related risk controls</li>
              <li>Refine user interface design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Summative Usability Testing</h4>
            <p className="text-gray-700 mb-3">
              Conduct summative testing with final design:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Test critical tasks with representative users</li>
              <li>Demonstrate acceptable usability</li>
              <li>Verify use-related risk controls are effective</li>
              <li>Document results in Usability Engineering Report</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">5. Usability Engineering File</h4>
            <p className="text-gray-700 mb-3">
              Maintain Usability Engineering File including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Usability Engineering Plan</li>
              <li>User profiles and use scenarios</li>
              <li>Use-related risk analysis</li>
              <li>Formative and summative test reports</li>
              <li>Usability Engineering Report</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'testing',
      title: 'Testing & Validation',
      description: 'Electrical safety, EMC, laser safety, and performance testing',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Electrical Safety Testing (NRTL)</h4>
            <p className="text-gray-700 mb-3">
              Test at an NRTL (Nationally Recognized Testing Laboratory) per IEC 60601-1:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
              <div>
                <h5 className="font-semibold text-blue-900 mb-2">Key Tests:</h5>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Dielectric strength testing</li>
                  <li>Leakage current measurements</li>
                  <li>Protective earth resistance</li>
                  <li>Mechanical strength</li>
                  <li>Temperature rise</li>
                  <li>Component stress analysis</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-blue-900 mb-2">NRTL Options:</h5>
                <p className="text-sm text-blue-800">UL, CSA, TÜV SÜD, Intertek, SGS</p>
              </div>
              <div>
                <h5 className="font-semibold text-blue-900 mb-2">Timeline:</h5>
                <p className="text-sm text-blue-800">Typically 4-8 weeks depending on complexity</p>
              </div>
            </div>
          </div>

          <ExpandableSection title="ASCA Summary Reports" variant="info">
            <p className="text-sm text-gray-700 mb-2">
              Consider using <strong>Accreditation Scheme for Conformity Assessment (ASCA)</strong> participating test laboratories. ASCA summary reports from recognized test labs can streamline FDA review by providing pre-reviewed test data, potentially reducing review times and additional information requests.
            </p>
          </ExpandableSection>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. EMC Testing (NRTL)</h4>
            <p className="text-gray-700 mb-3">
              Test electromagnetic compatibility per IEC 60601-1-2:
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 space-y-3">
              <div>
                <h5 className="font-semibold text-purple-900 mb-2">Emission Tests:</h5>
                <ul className="text-sm text-purple-800 space-y-1 list-disc list-inside">
                  <li>Radiated emissions</li>
                  <li>Conducted emissions</li>
                  <li>Harmonic emissions</li>
                  <li>Voltage fluctuations</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-purple-900 mb-2">Immunity Tests:</h5>
                <ul className="text-sm text-purple-800 space-y-1 list-disc list-inside">
                  <li>Electrostatic discharge (ESD)</li>
                  <li>Radiated RF immunity</li>
                  <li>Conducted RF immunity</li>
                  <li>Power frequency magnetic fields</li>
                  <li>Voltage dips and interruptions</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Laser Safety Testing</h4>
            <p className="text-gray-700 mb-3">
              Test laser safety per IEC 60825-1 and IEC 60601-2-22:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Laser Classification:</strong> Determine laser class (1, 1M, 2, 2M, 3R, 3B, 4)</li>
              <li><strong>Accessible Emission Limits:</strong> Measure accessible laser radiation</li>
              <li><strong>Protective Housing:</strong> Verify protective housing integrity</li>
              <li><strong>Safety Interlocks:</strong> Test interlock functionality</li>
              <li><strong>Beam Delivery:</strong> Verify beam delivery system safety</li>
              <li><strong>Labeling:</strong> Verify compliance with labeling requirements</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Packaging & Shelf Life Testing</h4>
            <p className="text-gray-700 mb-3">
              For sterile accessories or packaged components:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ISO 11607-1, -2:</strong> Packaging validation for terminally sterilized devices</li>
              <li><strong>ISO 11135:</strong> EO sterilization validation (if applicable)</li>
              <li><strong>ASTM D4169:</strong> Distribution/shipping simulation testing</li>
              <li><strong>ASTM F1980:</strong> Accelerated aging for shelf life determination</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">5. Biocompatibility Testing</h4>
            <p className="text-gray-700 mb-3">
              If device has patient contact, test per <Link href="/standards/iso-10993" className="text-blue-600 hover:underline">ISO 10993</Link>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Identify patient contact materials</li>
              <li>Determine required biocompatibility tests</li>
              <li>Conduct testing at accredited laboratory</li>
              <li>Document results in biocompatibility report</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">6. Design Validation</h4>
            <p className="text-gray-700 mb-3">
              Validate device meets user needs and intended use:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Clinical validation (if required)</li>
              <li>Simulated use testing</li>
              <li>Usability validation</li>
              <li>Labeling validation</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'submission',
      title: 'FDA Submission',
      description: 'Prepare and submit to FDA',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Pre-Submission Preparation</h4>
            <p className="text-gray-700 mb-3">
              Before submission, ensure all documentation is complete:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Design History File (DHF) complete</li>
              <li>Risk Management File complete</li>
              <li>Software Development File complete</li>
              <li>Usability Engineering File complete</li>
              <li>All test reports available</li>
              <li>Labeling finalized</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Submission Package Contents</h4>
            <p className="text-gray-700 mb-3">
              For 510(k) submissions, include:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-2">Required Sections:</h5>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Administrative information</li>
                <li>Indications for use</li>
                <li>Device description</li>
                <li>Substantial equivalence comparison</li>
                <li>Performance data (electrical safety, EMC, laser safety)</li>
                <li>Software documentation</li>
                <li>Biocompatibility data (if applicable)</li>
                <li>Sterilization data (if applicable)</li>
                <li>Labeling</li>
                <li>Truthful and accurate statement</li>
              </ul>
            </div>
            <div className="mt-4">
              <Link href="/regulations/510k-submission" className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1">
                Learn 510(k) Requirements <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. eSTAR Template</h4>
            <p className="text-gray-700 mb-3">
              Use FDA&apos;s eSTAR (electronic Submission Template And Resource) for 510(k) submissions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Structured format ensures completeness</li>
              <li>Guided workflow through submission sections</li>
              <li>Automatic validation checks</li>
              <li>Faster FDA review</li>
            </ul>
            <div className="mt-4">
              <Link href="/regulations/estar-template" className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1">
                Learn eSTAR Template Usage <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Submission Process</h4>
            <p className="text-gray-700 mb-3">
              Submit through FDA&apos;s Electronic Submission Gateway (ESG):
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Obtain ESG account and credentials</li>
              <li>Prepare submission in eSTAR format</li>
              <li>Validate submission package</li>
              <li>Submit through ESG</li>
              <li>Receive acknowledgment and tracking number</li>
              <li>Respond to FDA questions (if any)</li>
              <li>Receive FDA decision</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">5. Post-Submission</h4>
            <p className="text-gray-700 mb-3">
              After submission:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Monitor submission status in FDA portal</li>
              <li>Respond promptly to FDA requests for additional information</li>
              <li>Prepare for potential FDA inspection</li>
              <li>Plan for post-market surveillance</li>
            </ul>
          </div>

          <ExpandableSection title="Common Submission Issues" variant="warning">
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Incomplete test reports or missing NRTL certificates</li>
              <li>Insufficient substantial equivalence justification</li>
              <li>Missing software documentation</li>
              <li>Incomplete risk management documentation</li>
              <li>Labeling not compliant with requirements</li>
            </ul>
          </ExpandableSection>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Center
            </Link>
            <BookmarkButton
              title="How to Develop a Medical Laser System"
              url="/how-to/develop-medical-laser-system"
              type="how-to"
            />
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-10 h-10 text-red-600" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">How to Develop a Medical Laser System</h1>
                <p className="text-xl text-gray-600 mt-2">
                  Comprehensive guide covering design controls, risk management, software, usability, testing, and FDA submission
                </p>
                <Link
                  href="/guides/medical-laser-implementation"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm mt-2"
                >
                  View Implementation Guide with Lifecycle Diagram <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>

            {/* Key Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Standards</span>
                </div>
                <p className="text-sm text-gray-600">IEC 60601-1, 60601-2-22, 60825-1, 62304, 62366</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Regulations</span>
                </div>
                <p className="text-sm text-gray-600">21 CFR 820, 801, 830, 1002, 1040</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TestTube className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-gray-900">Testing</span>
                </div>
                <p className="text-sm text-gray-600">NRTL Safety, EMC, Laser Safety</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-gray-900">Timeline</span>
                </div>
                <p className="text-sm text-gray-600">12-24 months typical</p>
              </div>
            </div>
          </div>

          {/* Stepper */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <Stepper steps={steps} />
          </div>

          {/* FDA Guidance Documents Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key FDA Guidance Documents</h3>
            <p className="text-gray-600 mb-4">
              The following FDA guidance documents are particularly relevant for medical laser system development:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {guidanceDocuments.map((doc, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{doc.area}</span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{doc.name}</p>
                  <p className="text-xs text-gray-500 font-mono mb-1">{doc.docId}</p>
                  <p className="text-xs text-gray-600">{doc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Resources */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Key Standards</h4>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>• <Link href="/standards/iec-60601-1" className="hover:underline">IEC 60601-1 - Electrical Safety</Link></li>
                  <li>• <Link href="/standards/iec-60601-2-22" className="hover:underline">IEC 60601-2-22 - Laser Equipment</Link></li>
                  <li>• <Link href="/standards/iec-60825-1" className="hover:underline">IEC 60825-1 - Laser Safety</Link></li>
                  <li>• <Link href="/standards/iec-62304" className="hover:underline">IEC 62304 - Software Lifecycle</Link></li>
                  <li>• <Link href="/standards/iec-62366" className="hover:underline">IEC 62366 - Usability Engineering</Link></li>
                  <li>• <Link href="/standards/iec-81001-5-1" className="hover:underline">IEC 81001-5-1 - Cybersecurity</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Labeling & Packaging</h4>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>• <Link href="/standards/iso-15223" className="hover:underline">ISO 15223 - Medical Device Symbols</Link></li>
                  <li>• <Link href="/standards/iso-20417" className="hover:underline">ISO 20417 - Information Supplied</Link></li>
                  <li>• ISO 11135 - EO Sterilization</li>
                  <li>• ISO 11607-1, -2 - Packaging</li>
                  <li>• ASTM D4169 - Shipping Testing</li>
                  <li>• ASTM F1980 - Accelerated Aging</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">FDA Regulations</h4>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>• <Link href="/regulations/cfr-820" className="hover:underline">21 CFR 820 - Quality System</Link></li>
                  <li>• <Link href="/regulations/cfr-801" className="hover:underline">21 CFR 801 - Labeling</Link></li>
                  <li>• <Link href="/regulations/cfr-830" className="hover:underline">21 CFR 830 - UDI</Link></li>
                  <li>• 21 CFR 1002 - Radiation Reports</li>
                  <li>• 21 CFR 1040 - Laser Products</li>
                  <li>• <Link href="/regulations/510k-submission" className="hover:underline">510(k) Submission</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
