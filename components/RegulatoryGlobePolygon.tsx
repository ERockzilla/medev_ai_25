'use client';

import { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import { type RegulatoryData } from '@/lib/regulatoryData';

interface RegulatoryGlobePolygonProps {
  selectedCountry?: string;
  onCountrySelect?: (data: RegulatoryData) => void;
  data: RegulatoryData[];
  metric: 'complexity' | 'cost' | 'timeline';
}

export default function RegulatoryGlobePolygon({ selectedCountry, onCountrySelect, data, metric }: RegulatoryGlobePolygonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeEl = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [countries, setCountries] = useState<any[]>([]);

  // Load GeoJSON data
  useEffect(() => {
    fetch('/countries.geo.json')
      .then(res => res.json())
      .then(data => {
        const features = data.features || [];
        setCountries(features);
      })
      .catch(err => {
        console.error('Error loading countries:', err);
        setError('Failed to load map data');
        setLoading(false);
      });
  }, []);

  // Initialize globe
  useEffect(() => {
    if (!globeEl.current || countries.length === 0) return;

    try {
      const myGlobe = new Globe(globeEl.current)
        .showGlobe(true) // Show Earth texture as fallback/base layer
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
        .showAtmosphere(true)
        .atmosphereColor('#3b82f6')
        .atmosphereAltitude(0.25)
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .width(globeEl.current.offsetWidth)
        .height(Math.min(700, window.innerHeight - 250))
        .pointOfView({ altitude: 2.5 });

      // Auto-rotate
      myGlobe.controls().autoRotate = true;
      myGlobe.controls().autoRotateSpeed = 0.5;
      myGlobe.controls().enableZoom = true;

      globeInstance.current = myGlobe;
      setLoading(false);

      // Handle resize
      const handleResize = () => {
        if (globeEl.current && myGlobe) {
          myGlobe
            .width(globeEl.current.offsetWidth)
            .height(Math.min(700, window.innerHeight - 250));
        }
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (myGlobe) {
          myGlobe._destructor?.();
        }
      };
    } catch (err) {
      console.error('Error initializing globe:', err);
      setError('Failed to initialize 3D globe');
      setLoading(false);
    }
  }, [countries]);

  // Update polygon colors based on passed data and metric
  useEffect(() => {
    if (!globeInstance.current || countries.length === 0 || data.length === 0) return;

    // Create maps for country matching using the passed data (which includes adjustments)
    const regulatoryByCode = new Map(data.map(d => [d.code.toUpperCase(), d]));
    const regulatoryByCountry = new Map(data.map(d => [d.country.toUpperCase(), d]));

    // Country name aliases
    const nameAliases: Record<string, string> = {
      'UNITED STATES OF AMERICA': 'US',
      'USA': 'US',
      'PEOPLE\'S REPUBLIC OF CHINA': 'CN',
      'RUSSIAN FEDERATION': 'RU',
      'UNITED KINGDOM': 'GB',
      'SOUTH KOREA': 'KR',
      'REPUBLIC OF KOREA': 'KR',
    };

    // Create polygon data with colors
    const polygonsData = countries.map((feature: any) => {
      let regulatory = null;

      // Try ISO2/ISO3 match
      const iso2 = (feature.id || feature.properties?.iso_a2 || '').toUpperCase();
      const iso3 = (feature.properties?.iso_a3 || '').toUpperCase();
      regulatory = regulatoryByCode.get(iso2) || regulatoryByCode.get(iso3);

      // Try by country name
      if (!regulatory) {
        const countryName = (feature.properties?.name || '').toUpperCase();
        regulatory = regulatoryByCountry.get(countryName);

        // Try aliases
        if (!regulatory && nameAliases[countryName]) {
          regulatory = regulatoryByCode.get(nameAliases[countryName]);
        }
      }

      return {
        ...feature,
        regulatory,
        color: regulatory ? regulatory.color : 'rgba(100, 100, 120, 0.4)',
      };
    });

    globeInstance.current
      .polygonsData(polygonsData)
      .polygonCapColor((d: any) => d.color)
      .polygonSideColor((d: any) => d.color)
      .polygonStrokeColor(() => '#ffffff')
      .polygonAltitude((d: any) => d.regulatory ? 0.02 : 0.005)
      .polygonLabel((d: any) => {
        if (!d.regulatory) return '';
        const reg = d.regulatory;

        // Determine which metric to highlight based on prop
        const metricLabel = metric === 'complexity' ? 'Complexity' : metric === 'cost' ? 'Avg Cost' : 'Timeline';
        const metricValue = metric === 'complexity'
          ? `${reg.complexity}/10`
          : metric === 'cost'
            ? `$${(reg.avgCost / 1000).toFixed(0)}k`
            : `${reg.avgTimeline} months`;

        return `
          <div style="background: rgba(17, 24, 39, 0.95); color: white; padding: 12px 16px; border-radius: 8px; font-family: system-ui; min-width: 220px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 1px solid ${reg.color};">
            <div style="font-size: 18px; font-weight: bold; margin-bottom: 4px; color: ${reg.color};">${reg.country}</div>
            <div style="font-size: 13px; color: #9ca3af; margin-bottom: 12px;">${reg.code} - ${reg.agency}</div>
            <div style="background: ${reg.color}20; padding: 8px; border-radius: 6px; margin-bottom: 8px;">
              <div style="display: flex; justify-content: space-between;">
                <span style="color: #d1d5db; font-size: 14px;">${metricLabel}:</span>
                <span style="font-weight: bold; color: ${reg.color}; font-size: 16px;">${metricValue}</span>
              </div>
            </div>
            <div style="border-top: 1px solid #374151; padding-top: 8px; margin-top: 8px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <span style="color: #d1d5db; font-size: 13px;">Complexity:</span>
                <span style="font-weight: bold; color: white; font-size: 14px;">${reg.complexity}/10</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <span style="color: #d1d5db; font-size: 13px;">Avg Cost:</span>
                <span style="font-weight: bold; color: white; font-size: 14px;">$${(reg.avgCost / 1000).toFixed(0)}k</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: #d1d5db; font-size: 13px;">Timeline:</span>
                <span style="font-weight: bold; color: white; font-size: 14px;">${reg.avgTimeline} months</span>
              </div>
            </div>
          </div>
        `;
      })
      .onPolygonClick((polygon: any) => {
        if (polygon.regulatory && onCountrySelect) {
          onCountrySelect(polygon.regulatory);
        }
      });

  }, [countries, selectedCountry, onCountrySelect, data, metric]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-xl z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 font-semibold">Loading 3D Globe...</p>
            <p className="text-gray-500 text-sm mt-2">This may take a moment</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-xl z-10">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🌍</div>
            <p className="text-red-600 font-semibold mb-2">{error}</p>
            <p className="text-gray-600 text-sm">
              Try refreshing the page or check your internet connection
            </p>
          </div>
        </div>
      )}

      <div
        ref={globeEl}
        className="w-full h-full rounded-xl overflow-hidden"
        style={{ minHeight: '600px' }}
      />
    </div>
  );
}

