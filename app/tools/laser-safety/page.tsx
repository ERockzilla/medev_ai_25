'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import { CalculatorSkeleton } from '@/components/skeletons';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { BookOpen, Download, ArrowLeft, AlertTriangle, Eye, Zap, Shield } from 'lucide-react';

// Dynamic import with shimmer skeleton for faster initial load
const LaserSafetyCalculator = dynamic(
  () => import('@/components/LaserSafetyCalculator'),
  { loading: () => <CalculatorSkeleton />, ssr: true }
);

export default function LaserSafetyPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
            <BookmarkButton
              title="Laser Safety Calculator"
              url="/tools/laser-safety"
              type="tool"
            />
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-red-900 mb-2">
                  Laser Safety for Medical Devices
                </h2>
                <p className="text-sm text-red-800 mb-4">
                  Medical lasers range from low-power diagnostic devices to high-power surgical systems.
                  Understanding Maximum Permissible Exposure (MPE), Nominal Ocular Hazard Distance (NOHD),
                  and proper laser classification is critical for both regulatory compliance and user safety.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="font-bold mb-1">Key Parameters:</p>
                    <ul className="text-xs space-y-1 pl-4 list-disc">
                      <li><strong>MPE:</strong> Maximum safe exposure level</li>
                      <li><strong>NOHD:</strong> Safe distance from beam</li>
                      <li><strong>AEL:</strong> Accessible emission limit</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Hazard Types:</p>
                    <ul className="text-xs space-y-1 pl-4 list-disc">
                      <li>Ocular (eye) damage</li>
                      <li>Skin burns/injuries</li>
                      <li>Fire hazards (Class 4)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/standards/iec-60825-1"
                  className="px-4 py-3 bg-white border-2 border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <BookOpen className="w-5 h-5" />
                  IEC 60825-1 Standard
                </Link>

                <Link
                  href="/how-to/develop-medical-laser-system"
                  className="px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <Zap className="w-5 h-5" />
                  Medical Laser Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <LaserSafetyCalculator />

          {/* Regulatory Standards */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">Regulatory Framework</h3>
            <div className="space-y-4 text-sm text-yellow-800">
              <div>
                <p className="font-bold">IEC 60825-1:2014 - Safety of Laser Products</p>
                <p>International standard for laser classification, labeling, and safety requirements.
                  Defines laser classes (1, 1M, 2, 2M, 3R, 3B, 4), Accessible Emission Limits (AELs),
                  and MPE values for different wavelengths and exposure durations.</p>
              </div>

              <div>
                <p className="font-bold">21 CFR 1040.10 - FDA Laser Performance Standard</p>
                <p>U.S. FDA requirements for laser products. Harmonized with IEC 60825-1 but includes
                  additional requirements for medical devices. All medical lasers must comply with this
                  standard and IEC 60601-2-22 for laser medical equipment.</p>
              </div>

              <div>
                <p className="font-bold">ANSI Z136.1 - Safe Use of Lasers</p>
                <p>American National Standard providing guidance on laser hazard evaluation, control measures,
                  and administrative requirements. Widely used in U.S. healthcare and research settings
                  for establishing laser safety programs.</p>
              </div>

              <div>
                <p className="font-bold">IEC 60601-2-22 - Medical Electrical Equipment (Laser)</p>
                <p>Particular requirements for basic safety and essential performance of laser medical equipment.
                  Required for CE marking and FDA clearance of medical laser devices. Addresses unique
                  hazards of lasers in clinical environments.</p>
              </div>

              <div className="mt-4 pt-4 border-t border-yellow-300">
                <p className="font-bold mb-2">Medical Device Classification:</p>
                <ul className="space-y-1 pl-5 list-disc">
                  <li><strong>FDA Class II:</strong> Most medical lasers (510(k) pathway)</li>
                  <li><strong>FDA Class III:</strong> Novel laser treatments, implants near laser (PMA)</li>
                  <li><strong>EU Class IIb/III:</strong> Depending on invasiveness and duration of use</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Laser Hazards by Type */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Medical Laser Hazards by Wavelength</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-purple-500"></span>
                  UV Lasers (100-400nm)
                </h4>
                <p className="text-sm text-purple-800 mb-2">
                  Excimer lasers (ArF 193nm, XeCl 308nm) for LASIK, PRK, dermatology
                </p>
                <ul className="space-y-1 text-xs text-purple-700">
                  <li className="flex items-start gap-2">
                    <Eye className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Corneal absorption - photochemical damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Mutagenic potential - requires strict controls</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-green-500"></span>
                  Visible Lasers (400-700nm)
                </h4>
                <p className="text-sm text-green-800 mb-2">
                  Argon (488, 514nm), KTP (532nm), HeNe (632nm), PDT lasers
                </p>
                <ul className="space-y-1 text-xs text-green-700">
                  <li className="flex items-start gap-2">
                    <Eye className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Retinal hazard - focused by eye onto retina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Class 2: Blink reflex provides some protection</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-red-500"></span>
                  Near-IR Lasers (700-1400nm)
                </h4>
                <p className="text-sm text-red-800 mb-2">
                  Diode (808, 980nm), Nd:YAG (1064nm), Ho:YAG (2100nm)
                </p>
                <ul className="space-y-1 text-xs text-red-700">
                  <li className="flex items-start gap-2">
                    <Eye className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Retinal + lens damage - invisible hazard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>No blink reflex - must rely on safety controls</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-orange-500"></span>
                  Mid/Far-IR Lasers (&gt;1400nm)
                </h4>
                <p className="text-sm text-orange-800 mb-2">
                  Er:YAG (2940nm), CO2 (10600nm) for surgery, dermatology
                </p>
                <ul className="space-y-1 text-xs text-orange-700">
                  <li className="flex items-start gap-2">
                    <Eye className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Corneal absorption - surface damage only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Skin burns, fire hazards at high power</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Safety Interlock Requirements */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Medical Laser Safety Features (IEC 60601-2-22)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">Emission Controls</h4>
                <ul className="space-y-2 text-xs text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                    <span>Key switch control (Class 3B/4)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                    <span>Emission indicator (visible/audible)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                    <span>Beam attenuator or shutter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                    <span>Remote interlock connector</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-2">Protective Features</h4>
                <ul className="space-y-2 text-xs text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></span>
                    <span>Protective housing interlocks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></span>
                    <span>Delivery system interlocks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></span>
                    <span>Foot switch with guards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></span>
                    <span>Emergency stop (readily accessible)</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-900 mb-2">User Interface</h4>
                <ul className="space-y-2 text-xs text-orange-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></span>
                    <span>Clear parameter display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></span>
                    <span>Aiming beam for invisible lasers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></span>
                    <span>Reset/arm sequence required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></span>
                    <span>Service access panel interlocks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* PPE Requirements */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Laser Protective Eyewear Selection</h3>
            <div className="space-y-4">
              <p className="text-sm text-blue-800">
                Laser protective eyewear must be selected based on wavelength, power, and exposure duration.
                Key specifications include Optical Density (OD) and Damage Threshold (D).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2">Optical Density (OD) Formula</h4>
                  <div className="p-3 bg-gray-100 rounded font-mono text-sm mb-2">
                    OD = log₁₀(H₀ / MPE)
                  </div>
                  <p className="text-xs text-blue-700">
                    Where H₀ is the anticipated exposure and MPE is the maximum permissible exposure.
                    Select eyewear with OD at least equal to calculated value.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2">Typical OD Requirements</h4>
                  <ul className="space-y-1 text-xs text-blue-800">
                    <li>Class 3B (CW): OD 3-4 typically sufficient</li>
                    <li>Class 4 (low power): OD 4-5 required</li>
                    <li>Class 4 (high power): OD 6+ may be needed</li>
                    <li>Pulsed lasers: Consider peak power</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                <p className="text-xs text-yellow-800">
                  <strong>Important:</strong> Laser eyewear must be wavelength-specific. Always verify
                  the protection wavelength range matches your laser. Mark eyewear with laser type and
                  OD rating. Replace eyewear after any direct hit or damage.
                </p>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-red-900 mb-4">Common Laser Safety Mistakes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-red-800 mb-2">❌ Design Errors</h4>
                <ul className="space-y-2 text-sm text-red-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Interlock defeat capability accessible to user</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Emission indicator not visible from all positions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>No aiming beam for invisible lasers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Specular reflections from surfaces in beam path</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-red-800 mb-2">❌ Documentation Gaps</h4>
                <ul className="space-y-2 text-sm text-red-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Missing laser classification justification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Incorrect warning labels or missing translations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>NOHD not calculated or documented</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>IFU missing PPE requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Tools & Standards */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/standards/iec-60825-1"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">IEC 60825-1</h4>
                <p className="text-sm text-gray-600">Safety of laser products - equipment classification & requirements</p>
              </Link>

              <Link
                href="/standards/iec-60601-2-22"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">IEC 60601-2-22</h4>
                <p className="text-sm text-gray-600">Particular requirements for laser medical equipment</p>
              </Link>

              <Link
                href="/tools/fmea"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">FMEA Calculator</h4>
                <p className="text-sm text-gray-600">Risk analysis for laser safety interlocks and controls</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

