'use client';

import { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import { DOMAINS, type DomainData, type DomainType } from './domainsData';

export type { DomainType, DomainData };

interface MGlobeProps {
  onDomainSelect?: (domain: DomainData) => void;
  selectedDomain?: DomainType | null;
}

export default function MGlobe({ onDomainSelect, selectedDomain }: MGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeEl = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<any>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDomain, setHoveredDomain] = useState<DomainType | null>(null);

  useEffect(() => {
    if (!globeEl.current || !containerRef.current) return;

    // Get container dimensions
    const container = containerRef.current;
    const size = Math.min(container.offsetWidth, container.offsetHeight);

    try {
      const myGlobe = new Globe(globeEl.current)
        .showGlobe(true)
        .showAtmosphere(true)
        .atmosphereColor('#1e3a5f')
        .atmosphereAltitude(0.2)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .width(size)
        .height(size)
        .pointOfView({ lat: 20, lng: 0, altitude: 2.2 });

      // Controls - disable zoom to prevent scroll hijacking
      const controls = myGlobe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = false; // Disable zoom so page can scroll
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
      
      // Stop auto-rotate on interaction
      let resumeTimeout: NodeJS.Timeout | null = null;
      
      const stopAutoRotate = () => {
        controls.autoRotate = false;
        if (resumeTimeout) clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(() => {
          controls.autoRotate = true;
        }, 3000);
      };
      
      const renderer = myGlobe.renderer();
      if (renderer?.domElement) {
        renderer.domElement.addEventListener('mousedown', stopAutoRotate);
        renderer.domElement.addEventListener('touchstart', stopAutoRotate);
      }

      globeInstance.current = myGlobe;
      setLoading(false);

      // Handle resize - use container size
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
        if (resumeTimeout) clearTimeout(resumeTimeout);
        if (myGlobe) myGlobe._destructor?.();
      };
    } catch (err) {
      console.error('Error initializing globe:', err);
      setLoading(false);
    }
  }, []);

  // Add domain markers - LARGE visible markers
  useEffect(() => {
    if (!globeInstance.current) return;

    // Calculate total volume for scaling
    const totalVolume = DOMAINS.reduce((sum, d) => sum + d.dataVolume, 0);

    // Create large, visible HTML markers for each domain
    const htmlData = DOMAINS.map(domain => {
      const volumePercentage = (domain.dataVolume / totalVolume) * 100;
      const baseSize = 50;
      const maxSize = 90;
      const markerSize = baseSize + ((volumePercentage / 100) * (maxSize - baseSize));
      
      return {
        ...domain,
        size: markerSize,
        domain: domain.id
      };
    });

    // Use HTML elements for large, clickable markers
    globeInstance.current
      .htmlElementsData(htmlData)
      .htmlLat((d: any) => d.lat)
      .htmlLng((d: any) => d.lng)
      .htmlAltitude(0.02)
      .htmlElement((d: any) => {
        const isHovered = hoveredDomain === d.domain;
        const isSelected = selectedDomain === d.domain;
        const scale = isSelected ? 1.2 : isHovered ? 1.1 : 1;
        
        const el = document.createElement('div');
        el.style.cssText = `
          width: ${d.size}px;
          height: ${d.size}px;
          background: ${d.color}33;
          border: 3px solid ${d.color};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          transform: scale(${scale}) translate(-50%, -50%);
          box-shadow: 0 0 20px ${d.color}66, inset 0 0 15px ${d.color}44;
        `;
        
        const inner = document.createElement('div');
        inner.style.cssText = `
          text-align: center;
          pointer-events: none;
        `;
        inner.innerHTML = `
          <div style="font-size: ${d.size * 0.35}px; line-height: 1;">${d.icon}</div>
          <div style="font-size: 10px; color: white; font-weight: bold; margin-top: 2px; text-shadow: 0 1px 3px rgba(0,0,0,0.8);">${d.id}</div>
        `;
        el.appendChild(inner);
        
        // Event handlers
        el.addEventListener('mouseenter', () => {
          setHoveredDomain(d.domain);
          el.style.transform = `scale(1.15) translate(-50%, -50%)`;
          el.style.boxShadow = `0 0 30px ${d.color}, inset 0 0 20px ${d.color}66`;
        });
        
        el.addEventListener('mouseleave', () => {
          setHoveredDomain(null);
          el.style.transform = `scale(1) translate(-50%, -50%)`;
          el.style.boxShadow = `0 0 20px ${d.color}66, inset 0 0 15px ${d.color}44`;
        });
        
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          if (onDomainSelect) {
            onDomainSelect(d);
          }
        });
        
        return el;
      });

    // Remove arcs and points - using HTML elements instead
    globeInstance.current
      .arcsData([])
      .pointsData([])
      .ringsData([]);

  }, [selectedDomain, hoveredDomain, onDomainSelect]);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500 mx-auto mb-4"></div>
            <p className="text-white font-semibold">Loading Globe...</p>
          </div>
        </div>
      )}
      
      <div 
        ref={globeEl} 
        className="w-full h-full flex items-center justify-center"
      />
      
      {/* Tooltip for hovered domain */}
      {hoveredDomain && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-slate-700 rounded-lg px-4 py-3 pointer-events-none z-20">
          {(() => {
            const domain = DOMAINS.find(d => d.id === hoveredDomain);
            if (!domain) return null;
            return (
              <div className="text-center">
                <div className="text-2xl mb-1">{domain.icon}</div>
                <div className="text-white font-semibold">{domain.name}</div>
                <div className="text-slate-400 text-sm">{domain.description}</div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
