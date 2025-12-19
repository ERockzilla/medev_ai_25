'use client';

import { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import { REGULATORY_DATA, type RegulatoryData } from '@/lib/regulatoryData';

// Re-export for backwards compatibility
export { REGULATORY_DATA, type RegulatoryData } from '@/lib/regulatoryData';


interface RegulatoryGlobeProps {
  onCountrySelect?: (data: RegulatoryData) => void;
  selectedCountry?: string | null;
}

export default function RegulatoryGlobe({ onCountrySelect, selectedCountry }: RegulatoryGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeEl = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<any>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  useEffect(() => {
    if (!globeEl.current || !containerRef.current) return;

    const container = containerRef.current;
    const size = Math.min(container.offsetWidth, container.offsetHeight);

    try {
      const myGlobe = new Globe(globeEl.current)
        .showGlobe(true)
        .showAtmosphere(true)
        .atmosphereColor('#3b82f6')
        .atmosphereAltitude(0.15)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .width(size)
        .height(size)
        .pointOfView({ lat: 30, lng: 0, altitude: 2.5 });

      const controls = myGlobe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.enableZoom = true;
      controls.enablePan = true;
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
      controls.minDistance = 200;
      controls.maxDistance = 600;

      globeInstance.current = myGlobe;
      setLoading(false);

      const handleResize = () => {
        if (containerRef.current && myGlobe) {
          const newSize = Math.min(
            containerRef.current.offsetWidth,
            containerRef.current.offsetHeight
          );
          myGlobe.width(newSize).height(newSize);
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (myGlobe) myGlobe._destructor?.();
      };
    } catch (err) {
      console.error('Error initializing globe:', err);
      setLoading(false);
    }
  }, []);

  // Add markers
  useEffect(() => {
    if (!globeInstance.current) return;

    const htmlData = REGULATORY_DATA.map(item => ({
      ...item,
      size: 40 + (item.complexity * 3)
    }));

    globeInstance.current
      .htmlElementsData(htmlData)
      .htmlLat((d: any) => d.lat)
      .htmlLng((d: any) => d.lng)
      .htmlAltitude(0.02)
      .htmlElement((d: any) => {
        const isHovered = hoveredCountry === d.code;
        const isSelected = selectedCountry === d.code;
        const scale = isSelected ? 1.3 : isHovered ? 1.15 : 1;

        const el = document.createElement('div');
        el.style.cssText = `
          width: ${d.size}px;
          height: ${d.size}px;
          background: ${d.color}40;
          border: 3px solid ${d.color};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          transform: scale(${scale}) translate(-50%, -50%);
          box-shadow: 0 0 ${isHovered || isSelected ? '30' : '15'}px ${d.color};
        `;

        const inner = document.createElement('div');
        inner.style.cssText = `
          font-size: 11px;
          color: white;
          font-weight: bold;
          text-align: center;
          pointer-events: none;
          text-shadow: 0 1px 3px rgba(0,0,0,0.8);
        `;
        inner.textContent = d.code;
        el.appendChild(inner);

        el.addEventListener('mouseenter', () => setHoveredCountry(d.code));
        el.addEventListener('mouseleave', () => setHoveredCountry(null));
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          if (onCountrySelect) onCountrySelect(d);
        });

        return el;
      });

    globeInstance.current
      .arcsData([])
      .pointsData([])
      .ringsData([]);

  }, [selectedCountry, hoveredCountry, onCountrySelect]);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 rounded-xl z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500 mx-auto mb-4"></div>
            <p className="text-white font-semibold">Loading Regulatory Map...</p>
          </div>
        </div>
      )}

      <div ref={globeEl} className="w-full h-full flex items-center justify-center" />

      {hoveredCountry && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-slate-700 rounded-lg px-4 py-3 pointer-events-none z-20 min-w-[250px]">
          {(() => {
            const data = REGULATORY_DATA.find(d => d.code === hoveredCountry);
            if (!data) return null;
            return (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-bold text-lg">{data.country}</span>
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ backgroundColor: `${data.color}30`, color: data.color }}
                  >
                    Complexity: {data.complexity}/10
                  </span>
                </div>
                <div className="text-slate-400 text-sm space-y-1">
                  <div><span className="text-slate-500">Agency:</span> {data.agency}</div>
                  <div><span className="text-slate-500">Avg Cost:</span> ${(data.avgCost / 1000).toFixed(0)}k</div>
                  <div><span className="text-slate-500">Timeline:</span> {data.avgTimeline} months</div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}

