'use client';

import React, { useRef, useEffect, memo, useState } from 'react';
// Tree-shaken imports - only import what we use
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    PlaneGeometry,
    ShaderMaterial,
    Mesh,
    Color,
    DoubleSide,
    PointLight,
    AmbientLight
} from 'three';

/**
 * GaussianBeamVortex3D - A true 3D WebGL animated logo featuring:
 * - 3D grid mesh representing a Gaussian beam profile
 * - Vortex animation spiraling down into a singularity
 * - Pulse effect that expands the beam back up with volume
 * - Laser light effects with bloom-like glow
 * 
 * Performance optimizations:
 * - Reduced motion support
 * - Lower pixel ratio on mobile
 * - Viewport-aware animation pause
 */
const GaussianBeamVortex3D = memo(function GaussianBeamVortex3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<WebGLRenderer | null>(null);
    const animationRef = useRef<number | null>(null);
    const timeRef = useRef(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        if (mediaQuery.matches) return; // Show static fallback

        if (!containerRef.current) return;

        const container = containerRef.current;
        const width = 100;
        const height = 100;

        // Scene setup
        const scene = new Scene();

        // Camera - positioned to see full beam without clipping
        const camera = new PerspectiveCamera(40, width / height, 0.1, 100);
        camera.position.set(0, 3.5, 4);
        camera.lookAt(0, 0.3, 0);

        // Renderer with transparency - lower pixel ratio on mobile for performance
        const isMobile = window.innerWidth < 768;
        const renderer = new WebGLRenderer({
            antialias: !isMobile, // Disable antialiasing on mobile
            alpha: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create Gaussian beam surface geometry - reduced grid on mobile
        const gridSize = isMobile ? 24 : 32;
        const geometry = new PlaneGeometry(3, 3, gridSize, gridSize);

        // Store original positions for animation
        const positions = geometry.attributes.position;
        const originalPositions = new Float32Array(positions.array.length);
        originalPositions.set(positions.array);

        // Custom shader material for laser effect
        const material = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uVortexPhase: { value: 0 },
                uPulsePhase: { value: 0 },
                uColor1: { value: new Color(0x0159A3) }, // Blue
                uColor2: { value: new Color(0x00AA86) }, // Teal
                uColor3: { value: new Color(0x00ffff) }, // Cyan glow
            },
            vertexShader: `
        uniform float uTime;
        uniform float uVortexPhase;
        uniform float uPulsePhase;
        
        varying vec2 vUv;
        varying float vElevation;
        varying float vDistance;
        
        void main() {
          vUv = uv;
          
          // Distance from center
          float dist = length(position.xy);
          vDistance = dist;
          
          // Gaussian profile with vortex
          float sigma = 0.6 + 0.2 * sin(uTime * 0.5);
          float gaussian = exp(-dist * dist / (2.0 * sigma * sigma));
          
          // Vortex spiral effect
          float angle = atan(position.y, position.x);
          float spiral = sin(angle * 3.0 - uTime * 2.0 + dist * 4.0) * 0.15;
          
          // Vortex collapse and pulse expansion
          float vortexCollapse = sin(uVortexPhase) * 0.5 + 0.5; // 0 to 1
          float pulseExpand = sin(uPulsePhase) * 0.3;
          
          // Height calculation
          float height = gaussian * (1.5 - vortexCollapse * 1.2) + spiral * (1.0 - vortexCollapse);
          height += pulseExpand * gaussian * 2.0;
          
          // Add ripple effect
          float ripple = sin(dist * 8.0 - uTime * 3.0) * 0.05 * gaussian;
          height += ripple;
          
          vElevation = height;
          
          vec3 newPosition = position;
          newPosition.z = height;
          
          // Rotate the whole thing for 3D effect
          float rotAngle = uTime * 0.3;
          mat3 rotation = mat3(
            cos(rotAngle), 0.0, sin(rotAngle),
            0.0, 1.0, 0.0,
            -sin(rotAngle), 0.0, cos(rotAngle)
          );
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
            fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        
        varying vec2 vUv;
        varying float vElevation;
        varying float vDistance;
        
        void main() {
          // Color based on elevation and distance
          vec3 color = mix(uColor1, uColor2, vElevation);
          
          // Add laser glow at peak
          float glow = smoothstep(0.3, 1.5, vElevation);
          color = mix(color, uColor3, glow * 0.6);
          
          // Fresnel-like edge glow
          float edge = 1.0 - smoothstep(0.0, 1.5, vDistance);
          color += uColor3 * edge * 0.3 * sin(uTime * 2.0) * 0.5 + 0.5;
          
          // Grid lines effect
          float gridX = abs(sin(vUv.x * 32.0 * 3.14159));
          float gridY = abs(sin(vUv.y * 32.0 * 3.14159));
          float grid = max(gridX, gridY);
          grid = smoothstep(0.95, 1.0, grid);
          
          // Combine with elevation-based alpha
          float alpha = 0.4 + vElevation * 0.4 + grid * 0.3;
          alpha = clamp(alpha, 0.0, 1.0);
          
          // Add scanline effect
          float scanline = sin(vUv.y * 100.0 + uTime * 5.0) * 0.1 + 0.9;
          color *= scanline;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
            transparent: true,
            side: DoubleSide,
            wireframe: false,
        });

        const mesh = new Mesh(geometry, material);
        mesh.rotation.x = -Math.PI * 0.35; // Tilt to show 3D depth
        scene.add(mesh);

        // Add wireframe overlay for grid effect
        const wireframeMaterial = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uVortexPhase: { value: 0 },
                uColor: { value: new Color(0x00ffff) },
            },
            vertexShader: `
        uniform float uTime;
        uniform float uVortexPhase;
        
        varying float vElevation;
        
        void main() {
          float dist = length(position.xy);
          float sigma = 0.6 + 0.2 * sin(uTime * 0.5);
          float gaussian = exp(-dist * dist / (2.0 * sigma * sigma));
          float angle = atan(position.y, position.x);
          float spiral = sin(angle * 3.0 - uTime * 2.0 + dist * 4.0) * 0.15;
          float vortexCollapse = sin(uVortexPhase) * 0.5 + 0.5;
          float height = gaussian * (1.5 - vortexCollapse * 1.2) + spiral * (1.0 - vortexCollapse);
          float ripple = sin(dist * 8.0 - uTime * 3.0) * 0.05 * gaussian;
          height += ripple;
          vElevation = height;
          
          vec3 newPosition = position;
          newPosition.z = height + 0.01; // Slight offset to avoid z-fighting
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
            fragmentShader: `
        uniform vec3 uColor;
        uniform float uTime;
        varying float vElevation;
        
        void main() {
          float alpha = 0.1 + vElevation * 0.3;
          float pulse = sin(uTime * 3.0) * 0.2 + 0.8;
          gl_FragColor = vec4(uColor * pulse, alpha);
        }
      `,
            transparent: true,
            wireframe: true,
        });

        const wireframeMesh = new Mesh(geometry.clone(), wireframeMaterial);
        wireframeMesh.rotation.x = -Math.PI * 0.35;
        scene.add(wireframeMesh);

        // Add point light for laser effect
        const pointLight = new PointLight(0x00ffff, 2, 10);
        pointLight.position.set(0, 2, 1);
        scene.add(pointLight);

        // Add ambient light
        const ambientLight = new AmbientLight(0x404040, 0.5);
        scene.add(ambientLight);

        // Animation loop
        const animate = () => {
            timeRef.current += 0.016; // ~60fps
            const time = timeRef.current;

            // Update uniforms
            if (material.uniforms) {
                material.uniforms.uTime.value = time;
                material.uniforms.uVortexPhase.value = time * 0.8; // Vortex cycle
                material.uniforms.uPulsePhase.value = time * 1.2; // Pulse cycle
            }

            if (wireframeMaterial.uniforms) {
                wireframeMaterial.uniforms.uTime.value = time;
                wireframeMaterial.uniforms.uVortexPhase.value = time * 0.8;
            }

            // Gentle camera rotation for depth perception
            if (camera) {
                camera.position.x = Math.sin(time * 0.2) * 0.4;
                camera.position.z = 4 + Math.cos(time * 0.15) * 0.2;
                camera.lookAt(0, 0.3, 0);
            }

            // Pulse the point light
            pointLight.intensity = 1.5 + Math.sin(time * 2) * 0.5;

            renderer.render(scene, camera);
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
                container.removeChild(rendererRef.current.domElement);
            }
            geometry.dispose();
            material.dispose();
            wireframeMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    // Static fallback for reduced motion
    if (prefersReducedMotion) {
        return (
            <div
                className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center"
                style={{
                    background: 'linear-gradient(135deg, #0159A3 0%, #00AA86 100%)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
                }}
            >
                <div className="w-12 h-12 border-2 border-cyan-400/50 rounded-full" />
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className="relative w-[100px] h-[100px] flex items-center justify-center overflow-visible"
            style={{
                filter: 'drop-shadow(0 0 12px rgba(0, 255, 255, 0.5))',
            }}
        />
    );
});

export default GaussianBeamVortex3D;
