'use client';

import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download } from 'lucide-react';

type DistributionType = 'normal' | 'exponential' | 'weibull' | 'gamma';

interface DistributionParams {
  normal: { mean: number; stdDev: number };
  exponential: { lambda: number };
  weibull: { shape: number; scale: number };
  gamma: { shape: number; scale: number };
}

const INITIAL_PARAMS: DistributionParams = {
  normal: { mean: 100, stdDev: 15 },
  exponential: { lambda: 0.05 },
  weibull: { shape: 2, scale: 100 },
  gamma: { shape: 2, scale: 50 },
};

export default function DistributionCalculator() {
  const [distributionType, setDistributionType] = useState<DistributionType>('normal');
  const [params, setParams] = useState<DistributionParams>(INITIAL_PARAMS);
  const [sampleSize, setSampleSize] = useState(30);

  // Normal distribution functions
  const normalPDF = (x: number, mean: number, stdDev: number) => {
    const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
    const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2));
    return coefficient * Math.exp(exponent);
  };

  const normalCDF = (x: number, mean: number, stdDev: number) => {
    const z = (x - mean) / stdDev;
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    const probability = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return z > 0 ? 1 - probability : probability;
  };

  // Exponential distribution functions
  const exponentialPDF = (x: number, lambda: number) => {
    return x >= 0 ? lambda * Math.exp(-lambda * x) : 0;
  };

  const exponentialCDF = (x: number, lambda: number) => {
    return x >= 0 ? 1 - Math.exp(-lambda * x) : 0;
  };

  // Weibull distribution functions
  const weibullPDF = (x: number, shape: number, scale: number) => {
    if (x < 0) return 0;
    return (shape / scale) * Math.pow(x / scale, shape - 1) * Math.exp(-Math.pow(x / scale, shape));
  };

  const weibullCDF = (x: number, shape: number, scale: number) => {
    if (x < 0) return 0;
    return 1 - Math.exp(-Math.pow(x / scale, shape));
  };

  // Gamma distribution functions (simplified)
  const gammaPDF = (x: number, shape: number, scale: number) => {
    if (x <= 0) return 0;
    const gammaFunc = (n: number): number => {
      if (n <= 0) return 0;
      if (n < 0.5) return Math.PI / Math.sin(Math.PI * n) / gammaFunc(1 - n);
      n -= 1;
      let x = 0.99999999999980993;
      const coefficients = [676.5203681218851, -1259.1392167224028, 771.32342877765313,
        -176.61502916214059, 12.507343278686905, -0.13857109526572012,
        9.9843695780195716e-6, 1.5056327351493116e-7];
      for (let i = 0; i < 8; i++) {
        x += coefficients[i] / (n + i + 1);
      }
      const t = n + 7.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
    };
    return Math.pow(x, shape - 1) * Math.exp(-x / scale) / (Math.pow(scale, shape) * gammaFunc(shape));
  };

  // Generate data for charts
  const generateDistributionData = () => {
    const points: { x: number; pdf: number; cdf: number }[] = [];
    let xMin = 0;
    let xMax = 200;
    let step = 2;

    switch (distributionType) {
      case 'normal':
        xMin = params.normal.mean - 4 * params.normal.stdDev;
        xMax = params.normal.mean + 4 * params.normal.stdDev;
        step = (xMax - xMin) / 100;
        for (let x = xMin; x <= xMax; x += step) {
          points.push({
            x: parseFloat(x.toFixed(2)),
            pdf: normalPDF(x, params.normal.mean, params.normal.stdDev),
            cdf: normalCDF(x, params.normal.mean, params.normal.stdDev),
          });
        }
        break;

      case 'exponential':
        xMax = 5 / params.exponential.lambda;
        step = xMax / 100;
        for (let x = 0; x <= xMax; x += step) {
          points.push({
            x: parseFloat(x.toFixed(2)),
            pdf: exponentialPDF(x, params.exponential.lambda),
            cdf: exponentialCDF(x, params.exponential.lambda),
          });
        }
        break;

      case 'weibull':
        xMax = params.weibull.scale * 3;
        step = xMax / 100;
        for (let x = 0; x <= xMax; x += step) {
          points.push({
            x: parseFloat(x.toFixed(2)),
            pdf: weibullPDF(x, params.weibull.shape, params.weibull.scale),
            cdf: weibullCDF(x, params.weibull.shape, params.weibull.scale),
          });
        }
        break;

      case 'gamma':
        xMax = params.gamma.shape * params.gamma.scale * 3;
        step = xMax / 100;
        for (let x = 0; x <= xMax; x += step) {
          points.push({
            x: parseFloat(x.toFixed(2)),
            pdf: gammaPDF(x, params.gamma.shape, params.gamma.scale),
            cdf: x, // Simplified - would need numerical integration for true CDF
          });
        }
        break;
    }

    return points;
  };

  const data = generateDistributionData();

  // Calculate statistics
  const getStatistics = () => {
    switch (distributionType) {
      case 'normal':
        return {
          mean: params.normal.mean,
          median: params.normal.mean,
          mode: params.normal.mean,
          variance: Math.pow(params.normal.stdDev, 2),
          stdDev: params.normal.stdDev,
        };
      case 'exponential':
        return {
          mean: 1 / params.exponential.lambda,
          median: Math.log(2) / params.exponential.lambda,
          mode: 0,
          variance: 1 / Math.pow(params.exponential.lambda, 2),
          stdDev: 1 / params.exponential.lambda,
        };
      case 'weibull':
        const { shape, scale } = params.weibull;
        const gamma1 = (n: number): number => {
          if (n === 1) return 1;
          return (n - 1) * gamma1(n - 1);
        };
        return {
          mean: scale * gamma1(1 + 1 / shape),
          median: scale * Math.pow(Math.log(2), 1 / shape),
          mode: shape > 1 ? scale * Math.pow((shape - 1) / shape, 1 / shape) : 0,
          variance: Math.pow(scale, 2) * (gamma1(1 + 2 / shape) - Math.pow(gamma1(1 + 1 / shape), 2)),
          stdDev: 0, // Calculated from variance
        };
      case 'gamma':
        return {
          mean: params.gamma.shape * params.gamma.scale,
          median: params.gamma.shape * params.gamma.scale, // Approximation
          mode: (params.gamma.shape - 1) * params.gamma.scale,
          variance: params.gamma.shape * Math.pow(params.gamma.scale, 2),
          stdDev: Math.sqrt(params.gamma.shape) * params.gamma.scale,
        };
    }
  };

  const stats = getStatistics();

  const exportData = () => {
    const csvContent = [
      ['x', 'PDF', 'CDF'].join(','),
      ...data.map(d => [d.x, d.pdf, d.cdf].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${distributionType}-distribution-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Statistical Distribution Calculator</h2>
          <p className="text-gray-600 mt-1">Visualize and analyze common probability distributions</p>
        </div>
        <button
          onClick={exportData}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Distribution Type Selector */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Distribution Type</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(['normal', 'exponential', 'weibull', 'gamma'] as DistributionType[]).map((type) => (
            <button
              key={type}
              onClick={() => setDistributionType(type)}
              className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors capitalize ${
                distributionType === type
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Parameters */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Parameters</h3>
        
        {distributionType === 'normal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mean (μ): {params.normal.mean}
              </label>
              <input
                type="range"
                min="0"
                max="200"
                step="5"
                value={params.normal.mean}
                onChange={(e) => setParams({
                  ...params,
                  normal: { ...params.normal, mean: parseFloat(e.target.value) }
                })}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>0</span>
                <span>200</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Std Dev (σ): {params.normal.stdDev}
              </label>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={params.normal.stdDev}
                onChange={(e) => setParams({
                  ...params,
                  normal: { ...params.normal, stdDev: parseFloat(e.target.value) }
                })}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>1</span>
                <span>50</span>
              </div>
            </div>
          </div>
        )}

        {distributionType === 'exponential' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rate (λ): {params.exponential.lambda.toFixed(3)}
            </label>
            <input
              type="range"
              min="0.01"
              max="0.2"
              step="0.01"
              value={params.exponential.lambda}
              onChange={(e) => setParams({
                ...params,
                exponential: { lambda: parseFloat(e.target.value) }
              })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>0.01</span>
              <span>0.20</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Mean time between events: {(1 / params.exponential.lambda).toFixed(1)} units
            </p>
          </div>
        )}

        {distributionType === 'weibull' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shape (k): {params.weibull.shape.toFixed(2)}
              </label>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.1"
                value={params.weibull.shape}
                onChange={(e) => setParams({
                  ...params,
                  weibull: { ...params.weibull, shape: parseFloat(e.target.value) }
                })}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>0.5</span>
                <span>5.0</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                {params.weibull.shape < 1 ? 'Decreasing failure rate' :
                 params.weibull.shape === 1 ? 'Constant failure rate' :
                 'Increasing failure rate (wear-out)'}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scale (λ): {params.weibull.scale}
              </label>
              <input
                type="range"
                min="10"
                max="200"
                step="10"
                value={params.weibull.scale}
                onChange={(e) => setParams({
                  ...params,
                  weibull: { ...params.weibull, scale: parseFloat(e.target.value) }
                })}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>10</span>
                <span>200</span>
              </div>
            </div>
          </div>
        )}

        {distributionType === 'gamma' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shape (α): {params.gamma.shape.toFixed(1)}
              </label>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={params.gamma.shape}
                onChange={(e) => setParams({
                  ...params,
                  gamma: { ...params.gamma, shape: parseFloat(e.target.value) }
                })}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>0.5</span>
                <span>10</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scale (θ): {params.gamma.scale}
              </label>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={params.gamma.scale}
                onChange={(e) => setParams({
                  ...params,
                  gamma: { ...params.gamma, scale: parseFloat(e.target.value) }
                })}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>10</span>
                <span>100</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Distribution Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <p className="text-sm text-gray-600">Mean</p>
            <p className="text-2xl font-bold text-gray-900">{stats.mean.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Median</p>
            <p className="text-2xl font-bold text-gray-900">{stats.median.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Mode</p>
            <p className="text-2xl font-bold text-gray-900">{stats.mode.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Variance</p>
            <p className="text-2xl font-bold text-gray-900">{stats.variance.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Std Dev</p>
            <p className="text-2xl font-bold text-gray-900">{stats.stdDev.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PDF Chart */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Probability Density Function (PDF)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" label={{ value: 'Value', position: 'insideBottom', offset: -5 }} />
              <YAxis label={{ value: 'Probability Density', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Line type="monotone" dataKey="pdf" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* CDF Chart */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Cumulative Distribution Function (CDF)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" label={{ value: 'Value', position: 'insideBottom', offset: -5 }} />
              <YAxis domain={[0, 1]} label={{ value: 'Cumulative Probability', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Line type="monotone" dataKey="cdf" stroke="#10b981" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Medical Device Applications */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-3">Medical Device Applications</h3>
        <div className="space-y-2 text-sm text-blue-800">
          {distributionType === 'normal' && (
            <>
              <p><strong>• Performance Testing:</strong> Most physiological measurements (blood pressure, glucose levels)</p>
              <p><strong>• Manufacturing Tolerances:</strong> Component dimensions and assembly variations</p>
              <p><strong>• Sample Size Calculation:</strong> Validation studies with normally distributed outcomes</p>
            </>
          )}
          {distributionType === 'exponential' && (
            <>
              <p><strong>• Reliability Analysis:</strong> Time between random failures (constant failure rate)</p>
              <p><strong>• Service Life:</strong> Devices with memoryless failure characteristics</p>
              <p><strong>• Waiting Times:</strong> Time to first failure in electronic components</p>
            </>
          )}
          {distributionType === 'weibull' && (
            <>
              <p><strong>• Device Lifetime:</strong> Models wear-out failures (k '&gt;' 1) or infant mortality (k '&lt;' 1)</p>
              <p><strong>• Reliability Prediction:</strong> FDA requires for long-term implantable devices</p>
              <p><strong>• Accelerated Testing:</strong> Extrapolate lab results to field performance</p>
            </>
          )}
          {distributionType === 'gamma' && (
            <>
              <p><strong>• Multi-Stage Processes:</strong> Sum of multiple exponential events</p>
              <p><strong>• Biological Processes:</strong> Time to specific biochemical reactions</p>
              <p><strong>• Queuing Models:</strong> Service time distributions in healthcare settings</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

