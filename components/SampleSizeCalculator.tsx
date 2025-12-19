'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';

type ConfidenceLevel = 90 | 95 | 99;
type TestType = 'proportion' | 'mean' | 'validation';

export default function SampleSizeCalculator() {
  const [testType, setTestType] = useState<TestType>('proportion');
  const [confidenceLevel, setConfidenceLevel] = useState<ConfidenceLevel>(95);
  
  // For proportion tests
  const [expectedProportion, setExpectedProportion] = useState(0.95);
  const [marginOfError, setMarginOfError] = useState(0.05);
  
  // For mean tests
  const [populationStdDev, setPopulationStdDev] = useState(10);
  const [meanMarginOfError, setMeanMarginOfError] = useState(2);
  
  // For validation tests
  const [power, setPower] = useState(80);
  const [effectSize, setEffectSize] = useState(0.5);
  
  const [populationSize, setPopulationSize] = useState<number | null>(null);

  // Z-scores for confidence levels
  const getZScore = (cl: ConfidenceLevel): number => {
    const zScores = { 90: 1.645, 95: 1.96, 99: 2.576 };
    return zScores[cl];
  };

  // Calculate sample size for proportion
  const calculateProportionSampleSize = (): number => {
    const z = getZScore(confidenceLevel);
    const p = expectedProportion;
    const e = marginOfError;
    
    // Formula: n = (Z^2 * p * (1-p)) / e^2
    const n = Math.pow(z, 2) * p * (1 - p) / Math.pow(e, 2);
    
    // Apply finite population correction if population size is known
    if (populationSize && populationSize > 0) {
      return Math.ceil(n / (1 + (n - 1) / populationSize));
    }
    
    return Math.ceil(n);
  };

  // Calculate sample size for mean
  const calculateMeanSampleSize = (): number => {
    const z = getZScore(confidenceLevel);
    const sigma = populationStdDev;
    const e = meanMarginOfError;
    
    // Formula: n = (Z * σ / e)^2
    const n = Math.pow((z * sigma) / e, 2);
    
    if (populationSize && populationSize > 0) {
      return Math.ceil(n / (1 + (n - 1) / populationSize));
    }
    
    return Math.ceil(n);
  };

  // Calculate sample size for validation (power analysis)
  const calculateValidationSampleSize = (): number => {
    const zAlpha = getZScore(confidenceLevel);
    const zBeta = power === 80 ? 0.84 : power === 90 ? 1.28 : 0.84;
    const d = effectSize;
    
    // Formula: n = 2 * ((Zα + Zβ) / d)^2
    const n = 2 * Math.pow((zAlpha + zBeta) / d, 2);
    
    return Math.ceil(n);
  };

  const getSampleSize = (): number => {
    switch (testType) {
      case 'proportion':
        return calculateProportionSampleSize();
      case 'mean':
        return calculateMeanSampleSize();
      case 'validation':
        return calculateValidationSampleSize();
    }
  };

  const sampleSize = getSampleSize();

  // Calculate confidence interval for given sample size
  const getConfidenceInterval = (): { lower: number; upper: number } => {
    const z = getZScore(confidenceLevel);
    
    if (testType === 'proportion') {
      const p = expectedProportion;
      const n = sampleSize;
      const se = Math.sqrt((p * (1 - p)) / n);
      return {
        lower: Math.max(0, p - z * se),
        upper: Math.min(1, p + z * se),
      };
    } else if (testType === 'mean') {
      const se = populationStdDev / Math.sqrt(sampleSize);
      return {
        lower: 100 - z * se, // Assuming mean of 100 for example
        upper: 100 + z * se,
      };
    }
    
    return { lower: 0, upper: 0 };
  };

  const ci = getConfidenceInterval();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Sample Size Calculator</h2>
        <p className="text-gray-600 mt-1">Calculate required sample sizes for validation studies and statistical tests</p>
      </div>

      {/* Test Type Selection */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Test Type</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => setTestType('proportion')}
            className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors ${
              testType === 'proportion'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="font-bold">Proportion Test</div>
            <div className="text-xs mt-1">Pass/fail, success rate</div>
          </button>
          
          <button
            onClick={() => setTestType('mean')}
            className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors ${
              testType === 'mean'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="font-bold">Mean Test</div>
            <div className="text-xs mt-1">Continuous measurements</div>
          </button>
          
          <button
            onClick={() => setTestType('validation')}
            className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors ${
              testType === 'validation'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="font-bold">Validation Study</div>
            <div className="text-xs mt-1">Power analysis</div>
          </button>
        </div>
      </div>

      {/* Parameters */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Parameters</h3>
        
        {/* Confidence Level (all types) */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confidence Level
          </label>
          <div className="flex gap-3">
            {[90, 95, 99].map((level) => (
              <button
                key={level}
                onClick={() => setConfidenceLevel(level as ConfidenceLevel)}
                className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${
                  confidenceLevel === level
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                {level}%
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-2">
            FDA typically requires 95% confidence for medical device validation
          </p>
        </div>

        {/* Proportion Test Parameters */}
        {testType === 'proportion' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Proportion (p): {(expectedProportion * 100).toFixed(0)}%
              </label>
              <input
                type="range"
                min="0.5"
                max="0.99"
                step="0.01"
                value={expectedProportion}
                onChange={(e) => setExpectedProportion(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>50%</span>
                <span>99%</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Expected success rate or pass rate (e.g., 95% for most device validations)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Margin of Error: ±{(marginOfError * 100).toFixed(1)}%
              </label>
              <input
                type="range"
                min="0.01"
                max="0.10"
                step="0.01"
                value={marginOfError}
                onChange={(e) => setMarginOfError(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>±1%</span>
                <span>±10%</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Acceptable precision (typical: ±5%)
              </p>
            </div>
          </div>
        )}

        {/* Mean Test Parameters */}
        {testType === 'mean' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Population Standard Deviation (σ): {populationStdDev}
              </label>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={populationStdDev}
                onChange={(e) => setPopulationStdDev(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>1</span>
                <span>50</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Estimate from pilot study or historical data
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Margin of Error: ±{meanMarginOfError}
              </label>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={meanMarginOfError}
                onChange={(e) => setMeanMarginOfError(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>±0.5</span>
                <span>±10</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Desired precision for mean estimate
              </p>
            </div>
          </div>
        )}

        {/* Validation Test Parameters */}
        {testType === 'validation' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Statistical Power: {power}%
              </label>
              <div className="flex gap-3">
                {[80, 90].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPower(p)}
                    className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${
                      power === p
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {p}%
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Probability of detecting a true effect (80% standard, 90% preferred)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Effect Size (Cohen's d): {effectSize.toFixed(2)}
              </label>
              <input
                type="range"
                min="0.1"
                max="1.5"
                step="0.1"
                value={effectSize}
                onChange={(e) => setEffectSize(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>0.1 (small)</span>
                <span>0.5 (medium)</span>
                <span>1.5 (large)</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Minimum meaningful difference to detect
              </p>
            </div>
          </div>
        )}

        {/* Optional: Population Size */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Population Size (optional)
          </label>
          <input
            type="number"
            value={populationSize || ''}
            onChange={(e) => setPopulationSize(e.target.value ? parseInt(e.target.value) : null)}
            placeholder="Leave blank for infinite population"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-600 mt-1">
            For finite populations, enables finite population correction
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
            <Calculator className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Required Sample Size</h3>
            <div className="text-5xl font-bold text-blue-600 mb-4">n = {sampleSize}</div>
            
            {testType !== 'validation' && (
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  {confidenceLevel}% Confidence Interval:
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {testType === 'proportion' 
                    ? `${(ci.lower * 100).toFixed(1)}% to ${(ci.upper * 100).toFixed(1)}%`
                    : `${ci.lower.toFixed(2)} to ${ci.upper.toFixed(2)}`
                  }
                </p>
              </div>
            )}

            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Interpretation:</strong></p>
              {testType === 'proportion' && (
                <p>
                  With {sampleSize} samples, you can estimate the true success rate within 
                  ±{(marginOfError * 100).toFixed(1)}% with {confidenceLevel}% confidence.
                </p>
              )}
              {testType === 'mean' && (
                <p>
                  With {sampleSize} samples, you can estimate the true mean within 
                  ±{meanMarginOfError} units with {confidenceLevel}% confidence.
                </p>
              )}
              {testType === 'validation' && (
                <p>
                  With {sampleSize} samples per group, you have {power}% power to detect 
                  an effect size of {effectSize.toFixed(2)} with {confidenceLevel}% confidence.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Medical Device Examples */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Medical Device Validation Examples</h3>
        <div className="space-y-4">
          {testType === 'proportion' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-2">Electrical Safety Test</h4>
                <p className="text-sm text-green-800 mb-2">
                  Requirement: 99% of devices pass leakage current test
                </p>
                <p className="text-xs text-green-700">
                  Settings: p=0.99, margin=±2%, confidence=95%<br/>
                  Result: n ≈ 96 devices
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">Software Validation</h4>
                <p className="text-sm text-blue-800 mb-2">
                  Requirement: 95% test cases pass
                </p>
                <p className="text-xs text-blue-700">
                  Settings: p=0.95, margin=±5%, confidence=95%<br/>
                  Result: n ≈ 73 test cases
                </p>
              </div>
            </div>
          )}

          {testType === 'mean' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-900 mb-2">Blood Pressure Monitor</h4>
                <p className="text-sm text-purple-800 mb-2">
                  Validate mean measurement accuracy
                </p>
                <p className="text-xs text-purple-700">
                  Settings: σ=5 mmHg, margin=±2 mmHg, confidence=95%<br/>
                  Result: n ≈ 25 subjects
                </p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-900 mb-2">Temperature Sensor</h4>
                <p className="text-sm text-orange-800 mb-2">
                  Calibration accuracy study
                </p>
                <p className="text-xs text-orange-700">
                  Settings: σ=0.3°C, margin=±0.1°C, confidence=95%<br/>
                  Result: n ≈ 35 measurements
                </p>
              </div>
            </div>
          )}

          {testType === 'validation' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <h4 className="font-bold text-indigo-900 mb-2">Clinical Study</h4>
                <p className="text-sm text-indigo-800 mb-2">
                  Efficacy vs. standard of care
                </p>
                <p className="text-xs text-indigo-700">
                  Settings: effect=0.5, power=80%, confidence=95%<br/>
                  Result: n ≈ 64 per group (128 total)
                </p>
              </div>
              
              <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                <h4 className="font-bold text-pink-900 mb-2">Usability Study</h4>
                <p className="text-sm text-pink-800 mb-2">
                  Task completion time comparison
                </p>
                <p className="text-xs text-pink-700">
                  Settings: effect=0.8, power=90%, confidence=95%<br/>
                  Result: n ≈ 34 per group (68 total)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Regulatory Note */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> Sample size calculations should be documented in your validation protocol. 
          Consult with a statistician for complex study designs. FDA guidance documents (e.g., "Statistical 
          Guidance on Reporting Results from Studies Evaluating Diagnostic Tests") provide additional requirements.
        </p>
      </div>
    </div>
  );
}

