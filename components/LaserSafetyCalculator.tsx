'use client';

import { useState, useMemo } from 'react';
import { Download, AlertTriangle, Eye, Shield, Info, Zap } from 'lucide-react';

// Laser wavelength ranges for different laser types
const LASER_TYPES = [
  { name: 'UV-C', range: '100-280 nm', minWavelength: 100, maxWavelength: 280 },
  { name: 'UV-B', range: '280-315 nm', minWavelength: 280, maxWavelength: 315 },
  { name: 'UV-A', range: '315-400 nm', minWavelength: 315, maxWavelength: 400 },
  { name: 'Visible (Blue)', range: '400-500 nm', minWavelength: 400, maxWavelength: 500 },
  { name: 'Visible (Green)', range: '500-600 nm', minWavelength: 500, maxWavelength: 600 },
  { name: 'Visible (Red)', range: '600-700 nm', minWavelength: 600, maxWavelength: 700 },
  { name: 'Near-IR (NIR)', range: '700-1400 nm', minWavelength: 700, maxWavelength: 1400 },
  { name: 'Mid-IR', range: '1400-3000 nm', minWavelength: 1400, maxWavelength: 3000 },
  { name: 'Far-IR', range: '3000-10600 nm', minWavelength: 3000, maxWavelength: 10600 },
];

const COMMON_LASERS = [
  { name: 'HeNe (Red)', wavelength: 632.8, typical_power: 5, divergence: 1.0 },
  { name: 'Nd:YAG (1064nm)', wavelength: 1064, typical_power: 10000, divergence: 2.0 },
  { name: 'Nd:YAG (532nm, doubled)', wavelength: 532, typical_power: 5000, divergence: 1.5 },
  { name: 'CO2 (10.6μm)', wavelength: 10600, typical_power: 40000, divergence: 3.0 },
  { name: 'Diode (808nm)', wavelength: 808, typical_power: 60000, divergence: 10.0 },
  { name: 'Diode (980nm)', wavelength: 980, typical_power: 30000, divergence: 8.0 },
  { name: 'Er:YAG (2940nm)', wavelength: 2940, typical_power: 10000, divergence: 2.5 },
  { name: 'Argon (488nm)', wavelength: 488, typical_power: 500, divergence: 0.7 },
  { name: 'Ruby (694nm)', wavelength: 694, typical_power: 10000, divergence: 1.0 },
  { name: 'Excimer ArF (193nm)', wavelength: 193, typical_power: 200000, divergence: 3.0 },
];

interface CalculationResult {
  mpe: number;
  mpeUnit: string;
  mpeSkin: number;
  mpeSkinUnit: string;
  nohd: number;
  nohdSkin: number;
  irradianceAtDistance: number;
  laserClass: string;
  classDescription: string;
  hazardZone: string;
  hazardZoneSkin: string;
  controlMeasures: string[];
  warningLabels: string[];
}

export default function LaserSafetyCalculator() {
  const [wavelength, setWavelength] = useState(1064); // nm
  const [power, setPower] = useState(10); // mW
  const [beamDiameter, setBeamDiameter] = useState(3); // mm
  const [divergence, setDivergence] = useState(2); // mrad
  const [exposureTime, setExposureTime] = useState(0.25); // seconds (0.25s is typical blink reflex time)
  const [distance, setDistance] = useState(1); // meters
  const [isPulsed, setIsPulsed] = useState(false);
  const [pulseFrequency, setPulseFrequency] = useState(10); // Hz
  const [pulseDuration, setPulseDuration] = useState(0.001); // seconds (1ms)
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTab, setActiveTab] = useState<'calculator' | 'classification' | 'nohd'>('calculator');

  // Load preset laser
  const loadPreset = (preset: typeof COMMON_LASERS[0]) => {
    setWavelength(preset.wavelength);
    setPower(preset.typical_power);
    setDivergence(preset.divergence);
  };

  // Calculate MPE based on IEC 60825-1 simplified rules
  const calculateMPE = (wavelengthNm: number, exposureTimeS: number): { 
    mpe: number; 
    unit: string; 
    mpeSkin: number; 
    mpeSkinUnit: string;
  } => {
    // Simplified MPE calculations based on wavelength region and exposure time
    // These are approximations - actual IEC 60825-1 tables are more complex
    
    let mpeOcular = 0, unitOcular = '', mpeSkin = 0, unitSkin = '';

    if (wavelengthNm >= 400 && wavelengthNm <= 700) {
      // Visible region - retinal hazard (ocular)
      if (exposureTimeS < 18e-6) {
        mpeOcular = 5e-7;
        unitOcular = 'J/cm²';
      } else if (exposureTimeS < 10) {
        mpeOcular = 1.8e-3 * Math.pow(exposureTimeS, 0.75);
        unitOcular = 'J/cm²';
      } else {
        mpeOcular = 10e-3;
        unitOcular = 'W/cm²';
      }
      
      // Skin MPE for visible (thermal)
      if (exposureTimeS < 1e-7) {
        mpeSkin = 2e-2;
        unitSkin = 'J/cm²';
      } else if (exposureTimeS < 10) {
        mpeSkin = 1.1 * Math.pow(exposureTimeS, 0.25);
        unitSkin = 'J/cm²';
      } else {
        mpeSkin = 200e-3;
        unitSkin = 'W/cm²';
      }
    } else if (wavelengthNm > 700 && wavelengthNm <= 1400) {
      // Near-IR - retinal hazard (ocular)
      if (exposureTimeS < 18e-6) {
        mpeOcular = 5e-6;
        unitOcular = 'J/cm²';
      } else if (exposureTimeS < 10) {
        mpeOcular = 1.8e-3 * Math.pow(exposureTimeS, 0.75) * Math.pow(10, (wavelengthNm - 700) / 500);
        mpeOcular = Math.min(mpeOcular, 0.1);
        unitOcular = 'J/cm²';
      } else {
        mpeOcular = 10e-3 * Math.pow(10, (wavelengthNm - 700) / 500);
        mpeOcular = Math.min(mpeOcular, 0.1);
        unitOcular = 'W/cm²';
      }
      
      // Skin MPE for NIR (thermal)
      if (exposureTimeS < 1e-7) {
        mpeSkin = 2e-2;
        unitSkin = 'J/cm²';
      } else if (exposureTimeS < 10) {
        mpeSkin = 1.1 * Math.pow(exposureTimeS, 0.25);
        unitSkin = 'J/cm²';
      } else {
        mpeSkin = 200e-3;
        unitSkin = 'W/cm²';
      }
    } else if (wavelengthNm > 1400) {
      // Far-IR - corneal/skin hazard
      if (exposureTimeS < 1e-9) {
        mpeOcular = 10e-3;
        unitOcular = 'J/cm²';
        mpeSkin = 10e-3;
        unitSkin = 'J/cm²';
      } else if (exposureTimeS < 10) {
        mpeOcular = 0.56 * Math.pow(exposureTimeS, 0.25);
        unitOcular = 'J/cm²';
        mpeSkin = 0.56 * Math.pow(exposureTimeS, 0.25);
        unitSkin = 'J/cm²';
      } else {
        mpeOcular = 100e-3;
        unitOcular = 'W/cm²';
        mpeSkin = 100e-3;
        unitSkin = 'W/cm²';
      }
    } else {
      // UV region - photochemical/thermal (both eye and skin hazard)
      if (wavelengthNm >= 315 && wavelengthNm < 400) {
        mpeOcular = 1.0;
        unitOcular = 'J/cm²';
        mpeSkin = 10.0; // UV-A skin has higher MPE
        unitSkin = 'J/cm²';
      } else if (wavelengthNm >= 280 && wavelengthNm < 315) {
        mpeOcular = 3e-3;
        unitOcular = 'J/cm²';
        mpeSkin = 3e-3;
        unitSkin = 'J/cm²';
      } else {
        mpeOcular = 3e-3;
        unitOcular = 'J/cm²';
        mpeSkin = 3e-3;
        unitSkin = 'J/cm²';
      }
    }

    return { mpe: mpeOcular, unit: unitOcular, mpeSkin, mpeSkinUnit: unitSkin };
  };

  // Calculate NOHD - Nominal Ocular Hazard Distance
  const calculateNOHD = (powerMW: number, beamDiamMm: number, divergenceMrad: number, mpeCmSq: number): number => {
    // NOHD formula: NOHD = (1/φ) * sqrt((4*P)/(π*MPE) - d₀²)
    // Where φ is divergence in radians, P in watts, d₀ in cm, result in meters
    
    const powerW = powerMW / 1000;
    const beamDiamCm = beamDiamMm / 10;
    const divergenceRad = divergenceMrad / 1000;
    
    if (divergenceRad <= 0 || mpeCmSq <= 0) return 0;
    
    // Irradiance at exit = P / (π*(d/2)²)
    const exitIrradiance = powerW / (Math.PI * Math.pow(beamDiamCm / 2, 2));
    
    if (exitIrradiance <= mpeCmSq) return 0; // Already safe at exit
    
    // NOHD calculation - result in meters
    // The term inside sqrt: (4*P)/(π*MPE) gives area in cm²
    const areaTerm = (4 * powerW) / (Math.PI * mpeCmSq);
    const beamAreaTerm = Math.pow(beamDiamCm, 2);
    
    if (areaTerm <= beamAreaTerm) return 0;
    
    // NOHD in cm, convert to meters
    const nohdCm = (1 / divergenceRad) * Math.sqrt(areaTerm - beamAreaTerm);
    const nohdM = nohdCm / 100; // Convert cm to meters
    
    return Math.max(0, nohdM);
  };

  // Calculate irradiance at a given distance
  const calculateIrradiance = (powerMW: number, beamDiamMm: number, divergenceMrad: number, distanceM: number): number => {
    const powerW = powerMW / 1000;
    const beamDiamCm = beamDiamMm / 10;
    const divergenceRad = divergenceMrad / 1000;
    
    // Beam diameter at distance: d(z) = d0 + 2*z*tan(θ/2) ≈ d0 + z*θ (small angle)
    const beamDiamAtDistance = beamDiamCm + distanceM * 100 * divergenceRad;
    const area = Math.PI * Math.pow(beamDiamAtDistance / 2, 2);
    
    return powerW / area; // W/cm²
  };

  // Determine laser class based on accessible emission limits (simplified)
  const determineLaserClass = (wavelengthNm: number, powerMW: number, exposureTimeS: number): { class: string; description: string } => {
    // Simplified classification based on IEC 60825-1
    // Actual classification requires complete evaluation per the standard
    
    const powerW = powerMW / 1000;
    
    // Visible lasers (400-700nm) - simplified classification
    if (wavelengthNm >= 400 && wavelengthNm <= 700) {
      if (powerW <= 0.00039) return { class: 'Class 1', description: 'Safe under all conditions of normal use' };
      if (powerW <= 0.001) return { class: 'Class 1M', description: 'Safe for unaided eye, hazardous if viewed with optical instruments' };
      if (powerW <= 0.001 && exposureTimeS <= 0.25) return { class: 'Class 2', description: 'Visible laser, safe due to blink reflex (< 0.25s)' };
      if (powerW <= 0.005 && exposureTimeS <= 0.25) return { class: 'Class 2M', description: 'Class 2 but hazardous with optical instruments' };
      if (powerW <= 0.005) return { class: 'Class 3R', description: 'Low risk, direct viewing potentially hazardous' };
      if (powerW <= 0.5) return { class: 'Class 3B', description: 'Direct viewing hazardous, diffuse reflection usually safe' };
      return { class: 'Class 4', description: 'High power - hazardous to eye and skin, fire hazard' };
    }
    
    // Invisible lasers (IR and UV)
    if (powerW <= 0.0001) return { class: 'Class 1', description: 'Safe under all conditions of normal use' };
    if (powerW <= 0.001) return { class: 'Class 1M', description: 'Safe for unaided eye, potentially hazardous with optical aids' };
    if (powerW <= 0.005) return { class: 'Class 3R', description: 'Low risk, potentially hazardous for direct viewing' };
    if (powerW <= 0.5) return { class: 'Class 3B', description: 'Medium power - direct exposure hazardous' };
    return { class: 'Class 4', description: 'High power - eye, skin, and fire hazard' };
  };

  // Get control measures based on laser class
  const getControlMeasures = (laserClass: string): string[] => {
    const measures: { [key: string]: string[] } = {
      'Class 1': [
        'No special controls required for normal use',
        'Maintain manufacturer protective housings',
        'Do not defeat safety interlocks',
      ],
      'Class 1M': [
        'Do not view with telescopic or magnifying optics',
        'Post warning signs if optical aids used in area',
        'Train users on optical viewing hazards',
      ],
      'Class 2': [
        'Do not stare into beam',
        'Post appropriate warning signs',
        'Avoid intentional eye exposure',
        'Rely on blink reflex for protection (< 0.25s)',
      ],
      'Class 2M': [
        'All Class 2 controls',
        'Prohibit use of optical aids in beam path',
        'Post warning signs about optical instrument hazards',
      ],
      'Class 3R': [
        'Designate laser area',
        'Post warning signs at entrances',
        'Prevent direct eye exposure',
        'Provide laser safety training',
        'Consider protective eyewear for alignment procedures',
      ],
      'Class 3B': [
        'Controlled access to laser area',
        'Door interlocks or warning lights',
        'Protective eyewear required during operation',
        'Key switch control',
        'Beam path enclosed where possible',
        'Laser safety officer designation',
        'Written operating procedures',
        'Training documentation required',
      ],
      'Class 4': [
        'All Class 3B controls',
        'Skin protection may be required',
        'Fire-resistant beam stops and enclosures',
        'Remote firing capability',
        'Emission indicator visible from outside',
        'Emergency stop accessible',
        'Exhaust ventilation for fumes',
        'Specular reflection control',
        'Nominal Hazard Zone calculation required',
        'Medical surveillance program',
      ],
    };
    return measures[laserClass] || measures['Class 4'];
  };

  // Main calculation
  const result = useMemo((): CalculationResult => {
    const { mpe, unit, mpeSkin, mpeSkinUnit } = calculateMPE(wavelength, exposureTime);
    const nohd = calculateNOHD(power, beamDiameter, divergence, mpe);
    const nohdSkin = calculateNOHD(power, beamDiameter, divergence, mpeSkin);
    const irradianceAtDist = calculateIrradiance(power, beamDiameter, divergence, distance);
    const { class: laserClass, description: classDescription } = determineLaserClass(wavelength, power, exposureTime);
    const controlMeasures = getControlMeasures(laserClass);
    
    // Determine hazard zone description (ocular)
    let hazardZone = '';
    if (nohd <= 0) {
      hazardZone = 'No ocular hazard zone - beam is below MPE at all distances';
    } else if (nohd < 1) {
      hazardZone = `Ocular hazard zone: 0 to ${(nohd * 100).toFixed(1)} cm from aperture`;
    } else if (nohd < 100) {
      hazardZone = `Ocular hazard zone: 0 to ${nohd.toFixed(1)} m from aperture`;
    } else {
      hazardZone = `Extended ocular hazard zone: 0 to ${(nohd / 1000).toFixed(2)} km - outdoor use requires special controls`;
    }
    
    // Determine hazard zone description (skin)
    let hazardZoneSkin = '';
    if (nohdSkin <= 0) {
      hazardZoneSkin = 'No skin hazard zone - beam is below MPE at all distances';
    } else if (nohdSkin < 1) {
      hazardZoneSkin = `Skin hazard zone: 0 to ${(nohdSkin * 100).toFixed(1)} cm from aperture`;
    } else if (nohdSkin < 100) {
      hazardZoneSkin = `Skin hazard zone: 0 to ${nohdSkin.toFixed(1)} m from aperture`;
    } else {
      hazardZoneSkin = `Extended skin hazard zone: 0 to ${(nohdSkin / 1000).toFixed(2)} km`;
    }
    
    // Warning labels based on class
    const warningLabels: string[] = [];
    if (laserClass.includes('3') || laserClass.includes('4')) {
      warningLabels.push('DANGER - LASER RADIATION');
      warningLabels.push(`AVOID ${laserClass === 'Class 4' ? 'EXPOSURE TO' : 'DIRECT'} BEAM`);
      warningLabels.push(`${wavelength} nm, ${power >= 1000 ? (power/1000).toFixed(1) + ' W' : power.toFixed(1) + ' mW'}`);
      warningLabels.push(`CLASS ${laserClass.replace('Class ', '')} LASER PRODUCT`);
    } else if (laserClass.includes('2')) {
      warningLabels.push('CAUTION - LASER RADIATION');
      warningLabels.push('DO NOT STARE INTO BEAM');
      warningLabels.push(`CLASS ${laserClass.replace('Class ', '')} LASER PRODUCT`);
    }
    
    return {
      mpe,
      mpeUnit: unit,
      mpeSkin,
      mpeSkinUnit,
      nohd,
      nohdSkin,
      irradianceAtDistance: irradianceAtDist,
      laserClass,
      classDescription,
      hazardZone,
      hazardZoneSkin,
      controlMeasures,
      warningLabels,
    };
  }, [wavelength, power, beamDiameter, divergence, exposureTime, distance]);

  // Format numbers for display
  const formatNumber = (num: number, precision: number = 3): string => {
    if (num === 0) return '0';
    if (num >= 1000) return num.toExponential(precision);
    if (num < 0.001) return num.toExponential(precision);
    return num.toPrecision(precision);
  };

  // Get hazard level color
  const getHazardColor = (laserClass: string): string => {
    if (laserClass.includes('4')) return 'red';
    if (laserClass.includes('3B')) return 'orange';
    if (laserClass.includes('3R')) return 'yellow';
    if (laserClass.includes('2')) return 'blue';
    return 'green';
  };

  const hazardColor = getHazardColor(result.laserClass);

  // Export results
  const exportResults = () => {
    const report = `LASER SAFETY CALCULATION REPORT
================================
Generated: ${new Date().toISOString()}

INPUT PARAMETERS
----------------
Wavelength: ${wavelength} nm
Power: ${power} mW (${(power/1000).toFixed(3)} W)
Beam Diameter: ${beamDiameter} mm
Divergence: ${divergence} mrad
Exposure Time: ${exposureTime} s
Evaluation Distance: ${distance} m
Mode: ${isPulsed ? `Pulsed (${pulseFrequency} Hz, ${pulseDuration*1000} ms pulse)` : 'Continuous Wave (CW)'}

RESULTS
-------
Maximum Permissible Exposure (MPE) - Ocular: ${formatNumber(result.mpe)} ${result.mpeUnit}
Maximum Permissible Exposure (MPE) - Skin: ${formatNumber(result.mpeSkin)} ${result.mpeSkinUnit}
Nominal Ocular Hazard Distance (NOHD): ${result.nohd.toFixed(2)} m
Nominal Skin Hazard Distance: ${result.nohdSkin.toFixed(2)} m
Irradiance at ${distance} m: ${formatNumber(result.irradianceAtDistance)} W/cm²
Irradiance vs MPE Ocular Ratio: ${formatNumber(result.irradianceAtDistance / result.mpe)}x
Irradiance vs MPE Skin Ratio: ${formatNumber(result.irradianceAtDistance / result.mpeSkin)}x

CLASSIFICATION
--------------
Laser Class: ${result.laserClass}
Description: ${result.classDescription}
${result.hazardZone}
${result.hazardZoneSkin}

CONTROL MEASURES REQUIRED
-------------------------
${result.controlMeasures.map((m, i) => `${i + 1}. ${m}`).join('\n')}

WARNING LABEL REQUIREMENTS
--------------------------
${result.warningLabels.join('\n')}

REFERENCES
----------
- IEC 60825-1:2014 Safety of laser products
- ANSI Z136.1-2022 Safe Use of Lasers
- 21 CFR 1040.10 FDA Laser Product Performance Standard

DISCLAIMER: This calculation provides guidance only. Actual laser 
classification and safety requirements must be determined by a 
qualified laser safety professional using complete IEC 60825-1 
evaluation procedures.
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `laser-safety-report-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Laser Safety Calculator</h2>
          <p className="text-gray-600 mt-1">Calculate MPE, NOHD, and laser classification per IEC 60825-1</p>
        </div>
        <button
          onClick={exportResults}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Quick Presets */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm font-medium text-gray-700 mb-3">Quick Presets - Common Medical/Industrial Lasers:</p>
        <div className="flex flex-wrap gap-2">
          {COMMON_LASERS.map((laser) => (
            <button
              key={laser.name}
              onClick={() => loadPreset(laser)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                wavelength === laser.wavelength
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {laser.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-4">
          {(['calculator', 'classification', 'nohd'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'calculator' && 'MPE Calculator'}
              {tab === 'classification' && 'Laser Classification'}
              {tab === 'nohd' && 'NOHD Analysis'}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Calculator */}
      {activeTab === 'calculator' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Panel */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Laser Parameters</h3>
            
            <div className="space-y-4">
              {/* Wavelength */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Wavelength (nm)
                </label>
                <input
                  type="number"
                  value={wavelength}
                  onChange={(e) => setWavelength(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min={100}
                  max={100000}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {LASER_TYPES.find(t => wavelength >= t.minWavelength && wavelength < t.maxWavelength)?.name || 'Out of range'} region
                </p>
              </div>

              {/* Power */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Output Power (mW)
                </label>
                <input
                  type="number"
                  value={power}
                  onChange={(e) => setPower(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min={0}
                  step={0.1}
                />
                <p className="text-xs text-gray-500 mt-1">
                  = {(power/1000).toFixed(3)} W
                </p>
              </div>

              {/* Beam Diameter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Beam Diameter at Aperture (mm)
                </label>
                <input
                  type="number"
                  value={beamDiameter}
                  onChange={(e) => setBeamDiameter(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min={0.1}
                  step={0.1}
                />
              </div>

              {/* Divergence */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Beam Divergence (mrad, full angle)
                </label>
                <input
                  type="number"
                  value={divergence}
                  onChange={(e) => setDivergence(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min={0.01}
                  step={0.1}
                />
                <p className="text-xs text-gray-500 mt-1">
                  = {(divergence * 180 / Math.PI / 1000 * 60).toFixed(2)}° or {(divergence * 60).toFixed(1)} arcmin
                </p>
              </div>

              {/* Exposure Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Exposure Time (seconds)
                </label>
                <input
                  type="number"
                  value={exposureTime}
                  onChange={(e) => setExposureTime(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min={0.000001}
                  step={0.01}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setExposureTime(0.25)}
                    className={`px-2 py-1 text-xs rounded ${exposureTime === 0.25 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    0.25s (blink)
                  </button>
                  <button
                    onClick={() => setExposureTime(10)}
                    className={`px-2 py-1 text-xs rounded ${exposureTime === 10 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    10s (deliberate)
                  </button>
                  <button
                    onClick={() => setExposureTime(30000)}
                    className={`px-2 py-1 text-xs rounded ${exposureTime === 30000 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    8hr (workday)
                  </button>
                </div>
              </div>

              {/* Distance */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Evaluation Distance (m)
                </label>
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min={0.01}
                  step={0.1}
                />
              </div>

              {/* Advanced Options */}
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                {showAdvanced ? '− Hide' : '+ Show'} Advanced Options (Pulsed Lasers)
              </button>

              {showAdvanced && (
                <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isPulsed"
                      checked={isPulsed}
                      onChange={(e) => setIsPulsed(e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <label htmlFor="isPulsed" className="text-sm font-medium text-gray-700">
                      Pulsed Laser Mode
                    </label>
                  </div>

                  {isPulsed && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Pulse Repetition Frequency (Hz)
                        </label>
                        <input
                          type="number"
                          value={pulseFrequency}
                          onChange={(e) => setPulseFrequency(parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          min={0.1}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Pulse Duration (seconds)
                        </label>
                        <input
                          type="number"
                          value={pulseDuration}
                          onChange={(e) => setPulseDuration(parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          min={0.000000001}
                          step={0.0001}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          = {(pulseDuration * 1e9).toFixed(1)} ns or {(pulseDuration * 1e6).toFixed(3)} μs
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-4">
            {/* Info card about MPE differences */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-bold">Ocular vs Skin MPE</p>
                  <p className="mt-1">
                    MPE values differ for eye and skin exposure. Ocular MPE is typically more restrictive 
                    for visible and near-IR lasers due to retinal focusing. Skin MPE considers thermal damage 
                    thresholds. Exposure time durations affect both differently based on tissue response.
                  </p>
                </div>
              </div>
            </div>

            {/* MPE Results - Ocular and Skin */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* MPE Ocular */}
              <div className={`p-4 rounded-lg border-2 ${
                hazardColor === 'red' ? 'bg-red-50 border-red-300' :
                hazardColor === 'orange' ? 'bg-orange-50 border-orange-300' :
                hazardColor === 'yellow' ? 'bg-yellow-50 border-yellow-300' :
                hazardColor === 'blue' ? 'bg-blue-50 border-blue-300' :
                'bg-green-50 border-green-300'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">MPE - Ocular (Eye)</p>
                    <p className="text-2xl font-bold mt-1">{formatNumber(result.mpe)} {result.mpeUnit}</p>
                  </div>
                  <Eye className={`w-6 h-6 ${
                    hazardColor === 'red' ? 'text-red-600' :
                    hazardColor === 'orange' ? 'text-orange-600' :
                    hazardColor === 'yellow' ? 'text-yellow-600' :
                    hazardColor === 'blue' ? 'text-blue-600' :
                    'text-green-600'
                  }`} />
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Exposure: {exposureTime}s<br/>
                  NOHD: {result.nohd < 0.01 ? 'N/A' : 
                         result.nohd < 1 ? `${(result.nohd * 100).toFixed(1)} cm` :
                         `${result.nohd.toFixed(1)} m`}
                </p>
              </div>

              {/* MPE Skin */}
              <div className={`p-4 rounded-lg border-2 ${
                result.mpeSkin < result.mpe ? 'bg-orange-50 border-orange-300' : 'bg-green-50 border-green-300'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">MPE - Skin</p>
                    <p className="text-2xl font-bold mt-1">{formatNumber(result.mpeSkin)} {result.mpeSkinUnit}</p>
                  </div>
                  <Shield className={`w-6 h-6 ${
                    result.mpeSkin < result.mpe ? 'text-orange-600' : 'text-green-600'
                  }`} />
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Exposure: {exposureTime}s<br/>
                  NOHD: {result.nohdSkin < 0.01 ? 'N/A' : 
                         result.nohdSkin < 1 ? `${(result.nohdSkin * 100).toFixed(1)} cm` :
                         `${result.nohdSkin.toFixed(1)} m`}
                </p>
              </div>
            </div>

            {/* Irradiance at Distance */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-700">Irradiance at {distance} m</p>
              <p className="text-2xl font-bold mt-1">{formatNumber(result.irradianceAtDistance)} W/cm²</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-sm text-gray-600">vs MPE:</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  result.irradianceAtDistance > result.mpe
                    ? 'bg-red-100 text-red-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {result.irradianceAtDistance > result.mpe
                    ? `${formatNumber(result.irradianceAtDistance / result.mpe)}x ABOVE MPE`
                    : `${formatNumber(result.mpe / result.irradianceAtDistance)}x BELOW MPE`
                  }
                </span>
              </div>
            </div>

            {/* NOHD Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* NOHD Ocular */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  NOHD - Ocular
                </p>
                <p className="text-2xl font-bold mt-1">
                  {result.nohd < 0.01 ? 'N/A' : 
                   result.nohd < 1 ? `${(result.nohd * 100).toFixed(1)} cm` :
                   result.nohd < 1000 ? `${result.nohd.toFixed(2)} m` :
                   `${(result.nohd / 1000).toFixed(2)} km`}
                </p>
                <p className="text-xs text-gray-600 mt-2">{result.hazardZone}</p>
              </div>

              {/* NOHD Skin */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  NOHD - Skin
                </p>
                <p className="text-2xl font-bold mt-1">
                  {result.nohdSkin < 0.01 ? 'N/A' : 
                   result.nohdSkin < 1 ? `${(result.nohdSkin * 100).toFixed(1)} cm` :
                   result.nohdSkin < 1000 ? `${result.nohdSkin.toFixed(2)} m` :
                   `${(result.nohdSkin / 1000).toFixed(2)} km`}
                </p>
                <p className="text-xs text-gray-600 mt-2">{result.hazardZoneSkin}</p>
              </div>
            </div>

            {/* Laser Class */}
            <div className={`p-4 rounded-lg border-2 ${
              hazardColor === 'red' ? 'bg-red-50 border-red-300' :
              hazardColor === 'orange' ? 'bg-orange-50 border-orange-300' :
              hazardColor === 'yellow' ? 'bg-yellow-50 border-yellow-300' :
              hazardColor === 'blue' ? 'bg-blue-50 border-blue-300' :
              'bg-green-50 border-green-300'
            }`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Preliminary Classification</p>
                  <p className="text-2xl font-bold mt-1">{result.laserClass}</p>
                  <p className="text-sm text-gray-600 mt-1">{result.classDescription}</p>
                </div>
                <Shield className={`w-8 h-8 ${
                  hazardColor === 'red' ? 'text-red-600' :
                  hazardColor === 'orange' ? 'text-orange-600' :
                  hazardColor === 'yellow' ? 'text-yellow-600' :
                  hazardColor === 'blue' ? 'text-blue-600' :
                  'text-green-600'
                }`} />
              </div>
            </div>

            {/* Warning */}
            {(result.laserClass.includes('3') || result.laserClass.includes('4')) && (
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-900">Hazardous Laser</p>
                    <p className="text-sm text-red-800 mt-1">
                      This laser requires safety controls. Review control measures in the Classification tab.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Classification Tab */}
      {activeTab === 'classification' && (
        <div className="space-y-6">
          {/* Current Classification */}
          <div className={`p-6 rounded-lg border-2 ${
            hazardColor === 'red' ? 'bg-red-50 border-red-300' :
            hazardColor === 'orange' ? 'bg-orange-50 border-orange-300' :
            hazardColor === 'yellow' ? 'bg-yellow-50 border-yellow-300' :
            hazardColor === 'blue' ? 'bg-blue-50 border-blue-300' :
            'bg-green-50 border-green-300'
          }`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-bold text-gray-900">Your Laser: {result.laserClass}</p>
                <p className="text-gray-700 mt-1">{result.classDescription}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {wavelength} nm, {power >= 1000 ? `${(power/1000).toFixed(1)} W` : `${power} mW`}
                </p>
              </div>
              <Zap className={`w-12 h-12 ${
                hazardColor === 'red' ? 'text-red-600' :
                hazardColor === 'orange' ? 'text-orange-600' :
                hazardColor === 'yellow' ? 'text-yellow-600' :
                hazardColor === 'blue' ? 'text-blue-600' :
                'text-green-600'
              }`} />
            </div>
          </div>

          {/* Control Measures */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Required Control Measures</h3>
            <div className="space-y-2">
              {result.controlMeasures.map((measure, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-gray-700">{measure}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Labels */}
          {result.warningLabels.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-900 mb-4">Required Warning Labels</h3>
              <div className="bg-white border-2 border-yellow-400 rounded-lg p-4">
                {result.warningLabels.map((label, idx) => (
                  <p key={idx} className={`text-center ${idx === 0 ? 'text-lg font-bold text-red-600' : 'text-sm text-gray-900'}`}>
                    {label}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* All Classes Reference */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Laser Classification Overview (IEC 60825-1)</h3>
            <div className="space-y-3">
              {[
                { class: 'Class 1', color: 'green', power: '≤ 0.39 mW (visible)', desc: 'Safe under all conditions - no controls required' },
                { class: 'Class 1M', color: 'green', power: '≤ 1 mW (visible)', desc: 'Safe for unaided eye - no optical instruments' },
                { class: 'Class 2', color: 'blue', power: '≤ 1 mW (visible only)', desc: 'Visible only - protected by blink reflex' },
                { class: 'Class 2M', color: 'blue', power: '≤ 1 mW (visible only)', desc: 'Class 2 but hazardous with optics' },
                { class: 'Class 3R', color: 'yellow', power: '1-5 mW (visible)', desc: 'Low risk - some safety measures needed' },
                { class: 'Class 3B', color: 'orange', power: '5-500 mW', desc: 'Direct exposure hazardous - safety controls required' },
                { class: 'Class 4', color: 'red', power: '> 500 mW', desc: 'High hazard - eye, skin, fire risks - extensive controls' },
              ].map((cls) => (
                <div
                  key={cls.class}
                  className={`p-3 rounded-lg border-l-4 ${
                    cls.color === 'red' ? 'bg-red-50 border-red-500' :
                    cls.color === 'orange' ? 'bg-orange-50 border-orange-500' :
                    cls.color === 'yellow' ? 'bg-yellow-50 border-yellow-500' :
                    cls.color === 'blue' ? 'bg-blue-50 border-blue-500' :
                    'bg-green-50 border-green-500'
                  } ${result.laserClass === cls.class ? 'ring-2 ring-blue-400' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">{cls.class}</span>
                    <span className="text-xs text-gray-600">{cls.power}</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{cls.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* NOHD Tab */}
      {activeTab === 'nohd' && (
        <div className="space-y-6">
          {/* NOHD Visualization - Circular Hazard Zone */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Nominal Hazard Zone - Spherical Coverage</h3>
            <p className="text-sm text-gray-600 mb-4">
              This visualization shows the hazard zone as a circle around the laser source, representing 
              that a handheld applicator can be pointed in any direction (360° coverage).
            </p>
            
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg aspect-square max-w-2xl mx-auto overflow-hidden border-2 border-gray-300">
              {/* Grid background */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.3
              }} />
              
              {/* Concentric distance circles */}
              {[0.25, 0.5, 0.75, 1.0].map((factor) => {
                const maxDistance = Math.max(result.nohd * 1.2, distance * 1.2, 2);
                const radius = (factor * 45); // percentage
                return (
                  <div
                    key={factor}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-300"
                    style={{
                      width: `${radius * 2}%`,
                      height: `${radius * 2}%`,
                      opacity: 0.5
                    }}
                  >
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-xs text-gray-500">
                      {(maxDistance * factor).toFixed(1)}m
                    </span>
                  </div>
                );
              })}
              
              {/* NOHD Ocular hazard circle */}
              {result.nohd > 0 && (
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"
                  style={{
                    width: `${Math.min(90, (result.nohd / Math.max(result.nohd * 1.2, distance * 1.2, 2)) * 90)}%`,
                    height: `${Math.min(90, (result.nohd / Math.max(result.nohd * 1.2, distance * 1.2, 2)) * 90)}%`,
                    opacity: 0.3,
                    border: '3px solid rgb(239, 68, 68)'
                  }}
                />
              )}
              
              {/* NOHD Skin hazard circle */}
              {result.nohdSkin > 0 && result.nohdSkin !== result.nohd && (
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500"
                  style={{
                    width: `${Math.min(90, (result.nohdSkin / Math.max(result.nohd * 1.2, distance * 1.2, 2)) * 90)}%`,
                    height: `${Math.min(90, (result.nohdSkin / Math.max(result.nohd * 1.2, distance * 1.2, 2)) * 90)}%`,
                    opacity: 0.2,
                    border: '2px dashed rgb(249, 115, 22)'
                  }}
                />
              )}
              
              {/* Laser source at center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center z-10 border-4 border-yellow-400 shadow-lg">
                <Zap className="w-4 h-4 text-yellow-300" />
              </div>
              
              {/* User distance marker */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-600 pointer-events-none"
                style={{
                  width: `${Math.min(95, (distance / Math.max(result.nohd * 1.2, distance * 1.2, 2)) * 90)}%`,
                  height: `${Math.min(95, (distance / Math.max(result.nohd * 1.2, distance * 1.2, 2)) * 90)}%`,
                }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded whitespace-nowrap">
                  Eval Distance: {distance}m
                </div>
              </div>
              
              {/* Legend */}
              <div className="absolute left-4 top-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs space-y-2 shadow-md">
                <div className="font-bold text-gray-900 mb-2">Hazard Zones:</div>
                {result.nohd > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 opacity-60 border-2 border-red-600 rounded-full" />
                    <span>Ocular: {result.nohd.toFixed(2)} m</span>
                  </div>
                )}
                {result.nohdSkin > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-500 opacity-40 border-2 border-orange-600 rounded-full" />
                    <span>Skin: {result.nohdSkin.toFixed(2)} m</span>
                  </div>
                )}
                <div className="flex items-center gap-2 pt-2 border-t border-gray-300">
                  <div className="w-4 h-4 bg-gray-700 rounded-full border-2 border-yellow-400" />
                  <span>Laser Source</span>
                </div>
              </div>
              
              {/* Safety status */}
              <div className="absolute right-4 top-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
                <div className="text-xs font-bold mb-1">At {distance}m:</div>
                <div className={`text-xs px-2 py-1 rounded ${
                  result.irradianceAtDistance > result.mpe ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}>
                  {result.irradianceAtDistance > result.mpe ? '⚠ HAZARDOUS' : '✓ SAFE'}
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-bold">Important: Spherical Hazard Zone</p>
                  <p className="mt-1">
                    This circular visualization represents a 3D sphere around the laser source. When using handheld 
                    applicators that can be pointed in any direction, the entire spherical volume within the NOHD 
                    radius is considered hazardous. Safety controls must account for 360° coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Distance-Irradiance Table */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">Irradiance vs Distance</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Distance (m)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Beam Diameter (cm)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Irradiance (W/cm²)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">vs MPE</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[0.1, 0.5, 1, 2, 5, 10, 25, 50, 100].filter(d => d <= Math.max(result.nohd * 2, 10)).map((d) => {
                    const irr = calculateIrradiance(power, beamDiameter, divergence, d);
                    const beamDiam = (beamDiameter / 10) + d * 100 * (divergence / 1000);
                    const ratio = irr / result.mpe;
                    const isSafe = ratio < 1;
                    
                    return (
                      <tr key={d} className={d === distance ? 'bg-blue-50' : 'hover:bg-gray-50'}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {d} {d === distance && <span className="text-blue-600">(selected)</span>}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">{beamDiam.toFixed(2)}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{formatNumber(irr)}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{formatNumber(ratio)}x</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                            isSafe ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {isSafe ? 'SAFE' : 'HAZARDOUS'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* NOHD Formula */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-blue-900">NOHD Calculation</h4>
                <p className="text-sm text-blue-800 mt-2">
                  The Nominal Ocular Hazard Distance is calculated using:
                </p>
                <div className="mt-2 p-3 bg-white rounded font-mono text-sm">
                  NOHD = (1/φ) × √((4P)/(π×MPE) - d₀²)
                </div>
                <p className="text-xs text-blue-700 mt-2">
                  Where: φ = beam divergence (rad), P = power (W), d₀ = initial beam diameter (cm)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-700">Important Disclaimer</p>
            <p className="text-xs text-gray-600 mt-1">
              This calculator provides preliminary guidance only. Actual laser classification and safety 
              requirements must be determined by a qualified laser safety professional using complete 
              IEC 60825-1 or ANSI Z136.1 evaluation procedures. MPE values shown are simplified 
              approximations. Pulsed laser calculations require additional considerations not fully 
              represented here. Always consult with a Laser Safety Officer for Class 3B and Class 4 lasers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

