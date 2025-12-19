'use client';

import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import Stepper, { StepperStep } from '@/components/Stepper';
import EmbeddedFMEACalculator from '@/components/EmbeddedFMEACalculator';
import ExpandableSection from '@/components/ExpandableSection';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Download, CheckCircle, AlertTriangle, Lightbulb, FileText } from 'lucide-react';

export default function HowToFMEAPage() {
  const steps: StepperStep[] = [
    {
      id: 'planning',
      title: 'Planning & Team Setup',
      description: 'Establish the foundation for your FMEA analysis',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Define Scope</h4>
            <p className="text-gray-700 mb-3">
              Clearly define what you're analyzing: a device, component, process, or system. For medical devices, 
              FMEA typically covers design (DFMEA) and process (PFMEA).
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Example:</strong> "Class 4 surgical laser system - DFMEA for power control subsystem"
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Assemble Cross-Functional Team</h4>
            <p className="text-gray-700 mb-3">
              Include representatives from engineering, quality, regulatory, clinical, and manufacturing. 
              Each brings unique perspective on potential failures.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Design engineers (understand device function)</li>
              <li>Quality engineers (understand risk management)</li>
              <li>Regulatory affairs (understand compliance requirements)</li>
              <li>Clinical specialists (understand use scenarios)</li>
              <li>Manufacturing engineers (understand production risks)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Gather Information</h4>
            <p className="text-gray-700 mb-3">
              Collect relevant documentation before starting:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Design specifications and requirements</li>
              <li>Previous FMEAs (if available)</li>
              <li>Historical failure data and complaints</li>
              <li>Similar device adverse events</li>
              <li>Regulatory requirements (ISO 14971, ISO 13485)</li>
            </ul>
          </div>

          <ExpandableSection title="💡 Pro Tip: Use a FMEA Template" variant="info">
            <p className="text-sm text-gray-700 mb-2">
              Start with a standardized FMEA worksheet template. This ensures consistency and completeness. 
              Download our Excel template or use the calculator below.
            </p>
            <a
              href="/templates/FMEA_Template.xlsx"
              download
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              <Download className="w-4 h-4" />
              Download FMEA Template
            </a>
          </ExpandableSection>
        </div>
      ),
    },
    {
      id: 'structure',
      title: 'Structure the Analysis',
      description: 'Break down your device or process into analyzable components',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Create Functional Block Diagram</h4>
            <p className="text-gray-700 mb-3">
              Visualize your device/system as interconnected functions. This helps identify all potential 
              failure points and their relationships.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-3">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-3 rounded border border-gray-300 text-center">
                  <p className="font-semibold">Power Supply</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-300 text-center">
                  <p className="font-semibold">Control System</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-300 text-center">
                  <p className="font-semibold">Beam Delivery</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 text-center">Example: Laser System Functions</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. List Process Steps or Components</h4>
            <p className="text-gray-700 mb-3">
              For each function, list all process steps (PFMEA) or components (DFMEA). Be specific and 
              comprehensive.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-900 mb-2"><strong>DFMEA Example:</strong></p>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Power control circuit</li>
                <li>• Safety interlock system</li>
                <li>• Beam delivery fiber</li>
                <li>• User interface display</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Document Intended Function</h4>
            <p className="text-gray-700 mb-3">
              For each item, clearly state what it's supposed to do. This is your baseline for identifying failures.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Example:</strong> "Power control circuit - Regulates laser output power to ±5% of setpoint"
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'identify-failures',
      title: 'Identify Failure Modes',
      description: 'Systematically identify how things can go wrong',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Failure Mode</h4>
            <p className="text-gray-700 mb-3">
              How can the component/process fail? Think about all possible ways it could fail to perform its intended function.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-3">
              <p className="text-sm text-red-900 mb-2"><strong>Common Failure Modes:</strong></p>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Fails to operate (complete failure)</li>
                <li>• Operates incorrectly (wrong output)</li>
                <li>• Operates intermittently (unreliable)</li>
                <li>• Operates out of specification (degraded)</li>
                <li>• Operates prematurely (unintended activation)</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Failure Effect</h4>
            <p className="text-gray-700 mb-3">
              What happens to the device/system/patient when this failure occurs? Consider the impact at 
              different levels: local, next level, and end effect.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-sm text-orange-900 mb-2"><strong>Example:</strong></p>
              <p className="text-sm text-orange-800">
                <strong>Failure Mode:</strong> Power control circuit fails open<br/>
                <strong>Local Effect:</strong> No power regulation<br/>
                <strong>Next Level:</strong> Uncontrolled laser output<br/>
                <strong>End Effect:</strong> Patient tissue damage (Severity: 9-10)
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Failure Cause</h4>
            <p className="text-gray-700 mb-3">
              What causes this failure mode? Think about root causes: design flaws, manufacturing defects, 
              wear, misuse, environmental factors.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Component failure (e.g., resistor burnout)</li>
              <li>Design error (e.g., inadequate margin)</li>
              <li>Manufacturing defect (e.g., poor solder joint)</li>
              <li>Environmental stress (e.g., temperature extremes)</li>
              <li>Use error (e.g., incorrect operation)</li>
            </ul>
          </div>

          <ExpandableSection title="⚠️ Common Mistake: Vague Failure Modes" variant="warning">
            <p className="text-sm text-gray-700">
              Avoid generic failure modes like "device fails" or "error occurs". Be specific: 
              "Power control circuit fails to regulate output, resulting in 2x setpoint power" is much better.
            </p>
          </ExpandableSection>
        </div>
      ),
    },
    {
      id: 'rate-risks',
      title: 'Rate Severity, Occurrence, and Detection',
      description: 'Quantify the risk using standardized scales',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Use the Interactive Calculator Below</h4>
            <EmbeddedFMEACalculator compact={false} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">Severity (S)</h4>
              <p className="text-sm text-red-800 mb-2">
                How severe is the harm if this failure occurs?
              </p>
              <ul className="text-xs text-red-700 space-y-1">
                <li>1-2: Minor inconvenience</li>
                <li>3-5: Performance impact</li>
                <li>6-7: Significant degradation</li>
                <li>8-9: Serious injury</li>
                <li>10: Death</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-900 mb-2">Occurrence (O)</h4>
              <p className="text-sm text-orange-800 mb-2">
                How likely is this failure to occur?
              </p>
              <ul className="text-xs text-orange-700 space-y-1">
                <li>1-2: Very rare (&lt;1 in 150k)</li>
                <li>3-4: Rare (1 in 2k-15k)</li>
                <li>5-6: Occasional (1 in 80-400)</li>
                <li>7-8: Frequent (1 in 8-20)</li>
                <li>9-10: Very frequent (&gt;1 in 3)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Detection (D)</h4>
              <p className="text-sm text-yellow-800 mb-2">
                How likely are we to detect this before it reaches the user?
              </p>
              <ul className="text-xs text-yellow-700 space-y-1">
                <li>1-2: Almost certain to detect</li>
                <li>3-4: High probability</li>
                <li>5-6: Moderate probability</li>
                <li>7-8: Low probability</li>
                <li>9-10: Almost impossible</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Calculate RPN</h4>
            <p className="text-sm text-blue-800">
              <strong>RPN = Severity × Occurrence × Detection</strong><br/>
              RPN ranges from 1 (lowest risk) to 1000 (highest risk). 
              Typically, RPN &gt; 100 requires mitigation actions.
            </p>
          </div>

          <ExpandableSection title="💡 Rating Guidelines" variant="info">
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>Severity:</strong> Rate based on worst-case harm, not typical case. Consider all use scenarios.</p>
              <p><strong>Occurrence:</strong> Use data when available. For new designs, use engineering judgment and similar device data.</p>
              <p><strong>Detection:</strong> Consider all detection methods: design verification, testing, inspections, alarms, user training.</p>
            </div>
          </ExpandableSection>
        </div>
      ),
    },
    {
      id: 'mitigation',
      title: 'Develop Risk Mitigation Actions',
      description: 'Address unacceptable risks with appropriate controls',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Prioritize Risks</h4>
            <p className="text-gray-700 mb-3">
              Focus on high RPN items first. However, also consider severity alone - a Severity 10 item 
              may need mitigation even with low RPN.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-900">
                <strong>Priority Order:</strong><br/>
                1. High Severity (8-10) regardless of RPN<br/>
                2. High RPN (&gt;100)<br/>
                3. Moderate RPN (50-100) - evaluate case-by-case
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Implement Risk Controls (ISO 14971 Priority)</h4>
            <p className="text-gray-700 mb-3">
              Apply risk controls in priority order per ISO 14971:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                <strong>Inherent Safety by Design</strong> - Eliminate or reduce the hazard through design changes
                <div className="ml-6 mt-1 text-sm text-gray-600">
                  Example: Add redundant safety interlock instead of relying on single interlock
                </div>
              </li>
              <li>
                <strong>Protective Measures</strong> - Add safety features or protective devices
                <div className="ml-6 mt-1 text-sm text-gray-600">
                  Example: Add power monitoring circuit with automatic shutoff
                </div>
              </li>
              <li>
                <strong>Information for Safety</strong> - Warnings, instructions, training (last resort)
                <div className="ml-6 mt-1 text-sm text-gray-600">
                  Example: Warning label and user training on proper operation
                </div>
              </li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Document Actions</h4>
            <p className="text-gray-700 mb-3">
              For each mitigation action, document:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>What action will be taken</li>
              <li>Who is responsible</li>
              <li>Target completion date</li>
              <li>How effectiveness will be verified</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Re-rate After Mitigation</h4>
            <p className="text-gray-700 mb-3">
              After implementing controls, re-rate the failure mode. The new RPN should be lower. 
              Document both original and revised RPN.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-900">
                <strong>Example:</strong><br/>
                Original: S=9, O=4, D=3, RPN=108<br/>
                After adding redundant interlock: S=9, O=2, D=2, RPN=36 ✓ Acceptable
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'documentation',
      title: 'Document & Review',
      description: 'Complete your FMEA documentation and conduct review',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Complete FMEA Worksheet</h4>
            <p className="text-gray-700 mb-3">
              Ensure all columns are filled out for each failure mode:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Process step / Component</li>
                <li>✓ Function</li>
                <li>✓ Failure mode</li>
                <li>✓ Failure effect</li>
                <li>✓ Severity rating</li>
                <li>✓ Failure cause</li>
                <li>✓ Occurrence rating</li>
                <li>✓ Current controls</li>
                <li>✓ Detection rating</li>
                <li>✓ RPN</li>
                <li>✓ Recommended actions</li>
                <li>✓ Action owner and due date</li>
                <li>✓ Revised ratings after action</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Link to Risk Management File</h4>
            <p className="text-gray-700 mb-3">
              FMEA is part of your risk management file (ISO 14971). Ensure:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>FMEA is referenced in risk management plan</li>
              <li>Hazards from FMEA are in master hazard list</li>
              <li>Risk controls are linked to design controls</li>
              <li>Verification activities are planned</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Conduct FMEA Review</h4>
            <p className="text-gray-700 mb-3">
              Review FMEA with cross-functional team:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Verify completeness (all failure modes identified)</li>
              <li>Verify ratings are consistent and justified</li>
              <li>Verify all high-risk items have mitigation plans</li>
              <li>Verify actions are assigned and scheduled</li>
              <li>Obtain approval signatures</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Maintain and Update</h4>
            <p className="text-gray-700 mb-3">
              FMEA is a living document. Update when:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Design changes are made</li>
              <li>New failure modes are discovered</li>
              <li>Post-market data reveals new risks</li>
              <li>Manufacturing process changes (PFMEA)</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">📋 FMEA Checklist</h4>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2 text-blue-800">
                <input type="checkbox" className="w-4 h-4" />
                All failure modes identified
              </label>
              <label className="flex items-center gap-2 text-blue-800">
                <input type="checkbox" className="w-4 h-4" />
                All ratings justified and documented
              </label>
              <label className="flex items-center gap-2 text-blue-800">
                <input type="checkbox" className="w-4 h-4" />
                High-risk items have mitigation plans
              </label>
              <label className="flex items-center gap-2 text-blue-800">
                <input type="checkbox" className="w-4 h-4" />
                Actions assigned and scheduled
              </label>
              <label className="flex items-center gap-2 text-blue-800">
                <input type="checkbox" className="w-4 h-4" />
                Linked to risk management file
              </label>
              <label className="flex items-center gap-2 text-blue-800">
                <input type="checkbox" className="w-4 h-4" />
                Reviewed and approved
              </label>
            </div>
          </div>
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
              href="/dashboard"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Center
            </Link>
            <BookmarkButton
              title="How to Conduct FMEA Analysis"
              url="/how-to/conduct-fmea-analysis"
              type="how-to"
            />
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  How to Conduct an FMEA Analysis
                </h1>
                <p className="text-xl text-gray-700 mb-4">
                  Step-by-step guide to performing Failure Mode and Effects Analysis for medical devices
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Link
                    href="/standards/iso-14971"
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200"
                  >
                    ISO 14971
                  </Link>
                  <Link
                    href="/standards/iso-13485"
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200"
                  >
                    ISO 13485
                  </Link>
                  <Link
                    href="/tools/fmea"
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200"
                  >
                    FMEA Calculator
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is FMEA?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Failure Mode and Effects Analysis (FMEA) is a systematic method for identifying and preventing 
                  product and process failures. For medical devices, FMEA is required by ISO 14971 for risk management 
                  and is essential for regulatory compliance.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Use FMEA?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Identify risks before they cause harm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Prioritize risk mitigation efforts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Meet ISO 14971 requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Support regulatory submissions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prerequisites</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Understanding of ISO 14971 risk management principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Access to device design specifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cross-functional team availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">FMEA template or worksheet</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Stepper */}
          <div className="mb-8">
            <Stepper steps={steps} showProgress={true} allowNavigation={true} />
          </div>

          {/* Related Resources */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Standards & Guides</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/standards/iso-14971" className="text-blue-600 hover:text-blue-700">
                      ISO 14971 - Risk Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/standards/iso-13485" className="text-blue-600 hover:text-blue-700">
                      ISO 13485 - Quality Management Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/integrated-risk-management" className="text-blue-600 hover:text-blue-700">
                      Integrated Risk Management Guide
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Tools & Templates</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/tools/fmea" className="text-blue-600 hover:text-blue-700">
                      FMEA Calculator Tool
                    </Link>
                  </li>
                  <li>
                    <a href="/templates/FMEA_Template.xlsx" download className="text-blue-600 hover:text-blue-700">
                      Download FMEA Excel Template
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

