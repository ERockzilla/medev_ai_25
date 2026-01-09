'use client';

/**
 * Dynamic Header Background Effects
 * - matrix-fast: Quick flowing medical standards
 * - neural-network: Animated connected nodes
 * - pulse: Medical heartbeat effect
 * - data-stream: Fast vertical data particles
 * - xray-scan: MRI/X-ray style horizontal scan effect
 */

import { useEffect, useRef, memo } from 'react';

type BackgroundEffect = 'matrix-fast' | 'neural-network' | 'pulse' | 'data-stream' | 'gradient' | 'matrix-pulse' | 'xray-scan' | 'medical-fusion';

interface HeaderBackgroundProps {
    effect?: BackgroundEffect;
}

const HeaderBackground = memo(function HeaderBackground({ effect = 'data-stream' }: HeaderBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (effect === 'gradient') return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            }
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let animationId: number;
        let lastFrameTime = 0;
        const targetFPS = 30; // Reduced from 60fps for performance
        const frameInterval = 1000 / targetFPS;

        const terms = ['ISO', 'FDA', 'QMS', 'AI', 'ML', 'SaMD', 'IEC', '510k', 'MDR', 'IVDR', 'PMA', 'DHF'];

        // DATA STREAM - Fast vertical particles (default)
        if (effect === 'data-stream') {
            const particles: Array<{ x: number; y: number; speed: number; char: string; opacity: number }> = [];
            const charSet = '01'.split('');

            for (let i = 0; i < 60; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    speed: 2 + Math.random() * 4,
                    char: charSet[Math.floor(Math.random() * charSet.length)],
                    opacity: 0.1 + Math.random() * 0.3
                });
            }

            const draw = () => {
                ctx.fillStyle = 'rgba(1, 89, 163, 0.15)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.font = '10px monospace';

                particles.forEach(p => {
                    ctx.fillStyle = `rgba(0, 255, 200, ${p.opacity})`;
                    ctx.fillText(p.char, p.x, p.y);

                    p.y += p.speed;

                    if (p.y > canvas.height) {
                        p.y = -10;
                        p.x = Math.random() * canvas.width;
                        p.char = charSet[Math.floor(Math.random() * charSet.length)];
                    }
                });

                animationId = requestAnimationFrame(draw);
            };
            draw();
        }

        // MATRIX FAST - Quick horizontal flow
        if (effect === 'matrix-fast') {
            const particles: Array<{ x: number; y: number; text: string; speed: number; opacity: number }> = [];

            const initParticles = () => {
                particles.length = 0;
                const rows = Math.floor(canvas.height / 16);
                for (let i = 0; i < rows * 2; i++) {
                    particles.push({
                        x: Math.random() * canvas.width * 2 - canvas.width,
                        y: (i % rows) * 16 + 8,
                        text: terms[Math.floor(Math.random() * terms.length)],
                        speed: 2 + Math.random() * 4, // Much faster
                        opacity: 0.15 + Math.random() * 0.25
                    });
                }
            };
            initParticles();

            const draw = () => {
                ctx.fillStyle = 'rgba(1, 89, 163, 0.12)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.font = 'bold 9px monospace';

                particles.forEach(p => {
                    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                    ctx.fillText(p.text, p.x, p.y);

                    p.x += p.speed;

                    if (p.x > canvas.width + 50) {
                        p.x = -80;
                        p.text = terms[Math.floor(Math.random() * terms.length)];
                    }
                });

                animationId = requestAnimationFrame(draw);
            };
            draw();
        }

        // NEURAL NETWORK - Connected nodes
        if (effect === 'neural-network') {
            const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];

            for (let i = 0; i < 20; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 1.5, // Faster
                    vy: (Math.random() - 0.5) * 1.5
                });
            }

            const draw = () => {
                ctx.fillStyle = 'rgba(1, 89, 163, 0.15)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Connections
                ctx.lineWidth = 1;
                for (let i = 0; i < nodes.length; i++) {
                    for (let j = i + 1; j < nodes.length; j++) {
                        const dx = nodes[i].x - nodes[j].x;
                        const dy = nodes[i].y - nodes[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 80) {
                            ctx.strokeStyle = `rgba(0, 255, 200, ${(1 - dist / 80) * 0.4})`;
                            ctx.beginPath();
                            ctx.moveTo(nodes[i].x, nodes[i].y);
                            ctx.lineTo(nodes[j].x, nodes[j].y);
                            ctx.stroke();
                        }
                    }
                }

                // Nodes
                nodes.forEach(n => {
                    ctx.fillStyle = 'rgba(0, 255, 200, 0.8)';
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
                    ctx.fill();

                    n.x += n.vx;
                    n.y += n.vy;

                    if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                    if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
                });

                animationId = requestAnimationFrame(draw);
            };
            draw();
        }

        // MATRIX PULSE - Combined Matrix Fast + EKG Pulse (Realistic)
        if (effect === 'matrix-pulse') {
            // Matrix particles initialization
            const particles: Array<{ x: number; y: number; text: string; speed: number; opacity: number }> = [];

            const initParticles = () => {
                particles.length = 0;
                const rows = Math.floor(canvas.height / 16);
                for (let i = 0; i < rows * 2; i++) {
                    particles.push({
                        x: Math.random() * canvas.width * 2 - canvas.width,
                        y: (i % rows) * 16 + 8,
                        text: terms[Math.floor(Math.random() * terms.length)],
                        speed: 1.5 + Math.random() * 3,
                        opacity: 0.1 + Math.random() * 0.2
                    });
                }
            };
            initParticles();

            // EKG Variables
            let ekgX = 0; // Current cursor position
            const ekgPoints: number[] = new Array(Math.ceil(window.innerWidth * 1.5)).fill(0);
            let beatState = 0;
            let timeSinceLastBeat = 0;
            const baselineY = canvas.height * 0.45;

            // Simplified simulation of P-QRS-T complex
            const getHeartbeatValue = (t: number) => {
                // P wave
                if (t < 10) return -Math.sin(t * Math.PI / 10) * 3;
                if (t >= 10 && t < 15) return 0;
                // QRS Complex
                if (t >= 15 && t < 35) {
                    const phase = t - 15;
                    if (phase < 2) return 2; // Q start
                    if (phase < 5) return 5; // Q dip
                    if (phase < 10) return -35; // R spike
                    if (phase < 15) return 10; // S dip
                    return 0;
                }
                if (t >= 35 && t < 45) return 0;
                // T wave
                if (t >= 45 && t < 65) return -Math.sin((t - 45) * Math.PI / 20) * 6;
                return 0;
            };

            const draw = () => {
                // Clear with slight fade for trail effect if desired, but solid is cleaner for text
                ctx.fillStyle = 'rgba(1, 89, 163, 0.12)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // 1. Draw Matrix Text Stream
                ctx.font = 'bold 9px monospace';
                particles.forEach(p => {
                    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                    ctx.fillText(p.text, p.x, p.y);
                    p.x += p.speed;
                    if (p.x > canvas.width + 50) {
                        p.x = -80;
                        p.text = terms[Math.floor(Math.random() * terms.length)];
                    }
                });

                // 3. Update EKG Data (The "Writer" Head)
                const writeSpeed = 4;
                for (let s = 0; s < writeSpeed; s++) {
                    ekgX++;
                    if (ekgX >= canvas.width) ekgX = 0;

                    timeSinceLastBeat++;
                    let yVal = 0;

                    // Trigger beat logic
                    // Heart rate variability simulation
                    if (beatState === 0 && timeSinceLastBeat > 120 && Math.random() < 0.02) {
                        beatState = 1;
                        timeSinceLastBeat = 0;
                    }

                    if (beatState > 0) {
                        yVal = getHeartbeatValue(beatState);
                        beatState++;
                        if (beatState > 70) {
                            beatState = 0;
                            timeSinceLastBeat = 0;
                        }
                    }
                    yVal += (Math.random() - 0.5) * 1.5;

                    if (ekgX < ekgPoints.length) {
                        ekgPoints[ekgX] = yVal;
                    }
                }

                // 4. Draw EKG Line
                ctx.lineWidth = 1.8;
                ctx.lineCap = 'round';
                ctx.strokeStyle = '#00ffcc';
                ctx.shadowBlur = 4;
                ctx.shadowColor = 'rgba(0, 255, 204, 0.5)';

                const gap = 60;
                const drawSegment = (start: number, end: number) => {
                    if (start >= end) return;
                    ctx.beginPath();
                    let started = false;
                    for (let x = start; x < end; x++) {
                        if (x >= ekgPoints.length) break;
                        const y = baselineY + ekgPoints[x];
                        if (!started) { ctx.moveTo(x, y); started = true; }
                        else ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                };

                // Draw solid trace with gap
                if (ekgX > gap) {
                    drawSegment(0, ekgX);
                    drawSegment(ekgX + gap, canvas.width);
                } else {
                    drawSegment(ekgX + gap, canvas.width);
                }

                // Cursor Head
                const headY = baselineY + ekgPoints[ekgX];
                ctx.fillStyle = '#fff';
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#00ffcc';
                ctx.beginPath();
                ctx.arc(ekgX, headY, 2.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;

                animationId = requestAnimationFrame(draw);
            };
            draw();
        }

        // PULSE - Heartbeat effect (Original)
        if (effect === 'pulse') {
            let phase = 0;

            const draw = () => {
                ctx.fillStyle = 'rgba(1, 89, 163, 0.2)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Multiple pulse waves
                for (let wave = 0; wave < 4; wave++) {
                    const radius = ((phase * 3 + wave * 40) % 160);
                    const opacity = Math.max(0, 0.4 - radius / 160);

                    ctx.strokeStyle = `rgba(0, 255, 200, ${opacity})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(canvas.width * 0.15, canvas.height * 0.5, radius, 0, Math.PI * 2);
                    ctx.stroke();
                }

                // Fast EKG line
                ctx.strokeStyle = 'rgba(0, 255, 200, 0.5)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x += 3) {
                    const progress = (x + phase * 5) % 100;
                    let y = canvas.height * 0.5;
                    if (progress < 10) y += Math.sin(progress * 0.6) * 15;
                    else if (progress < 20) y -= 20;
                    else if (progress < 30) y += 25;
                    else if (progress < 40) y -= 10;
                    ctx.lineTo(x, y);
                }
                ctx.stroke();

                phase++;
                animationId = requestAnimationFrame(draw);
            };
            draw();
        }

        // XRAY-SCAN - MRI/X-ray style horizontal scan effect
        if (effect === 'xray-scan') {
            let scanX = 0;
            let phase = 0;
            const sliceData: number[] = [];

            // Initialize scan data
            for (let y = 0; y < canvas.height; y++) {
                sliceData.push(Math.random() * 0.3);
            }

            const draw = (timestamp: number) => {
                // Throttle to target FPS
                if (timestamp - lastFrameTime < frameInterval) {
                    animationId = requestAnimationFrame(draw);
                    return;
                }
                lastFrameTime = timestamp;

                // Clear with dark fade
                ctx.fillStyle = 'rgba(0, 20, 40, 0.08)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Draw scan lines grid (subtle background)
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
                ctx.lineWidth = 1;
                for (let y = 0; y < canvas.height; y += 4) {
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(canvas.width, y);
                    ctx.stroke();
                }

                // Main scanning line
                const scanWidth = 80;
                const gradient = ctx.createLinearGradient(scanX - scanWidth, 0, scanX + 20, 0);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
                gradient.addColorStop(0.5, 'rgba(200, 240, 255, 0.15)');
                gradient.addColorStop(0.8, 'rgba(100, 200, 255, 0.25)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0.4)');

                ctx.fillStyle = gradient;
                ctx.fillRect(scanX - scanWidth, 0, scanWidth + 20, canvas.height);

                // Scan line edge (bright white line)
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(scanX, 0);
                ctx.lineTo(scanX, canvas.height);
                ctx.stroke();

                // Add subtle "tissue" texture at scan position
                for (let y = 0; y < canvas.height; y += 3) {
                    const noise = sliceData[y % sliceData.length] * Math.sin(phase * 0.02 + y * 0.1);
                    const intensity = 0.05 + Math.abs(noise) * 0.1;
                    ctx.fillStyle = `rgba(150, 220, 255, ${intensity})`;
                    ctx.fillRect(scanX - 5, y, 8, 2);
                }

                // Subtle cyan glow behind the scan
                const glowGradient = ctx.createRadialGradient(
                    scanX, canvas.height / 2, 0,
                    scanX, canvas.height / 2, canvas.height
                );
                glowGradient.addColorStop(0, 'rgba(0, 200, 255, 0.08)');
                glowGradient.addColorStop(1, 'rgba(0, 200, 255, 0)');
                ctx.fillStyle = glowGradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Update scan position
                scanX += 2;
                if (scanX > canvas.width + scanWidth) {
                    scanX = -scanWidth;
                    // Regenerate slice data
                    for (let y = 0; y < sliceData.length; y++) {
                        sliceData[y] = Math.random() * 0.3;
                    }
                }
                phase++;

                animationId = requestAnimationFrame(draw);
            };
            animationId = requestAnimationFrame(draw);
        }

        // MEDICAL-FUSION - Finite element grid + neural network + EKG (crisp lines, no glow)
        if (effect === 'medical-fusion') {
            // Grid configuration
            const gridSpacingX = 40;
            const gridSpacingY = 20;
            let gridPhase = 0;

            // Neural network nodes on grid intersections
            const nodes: Array<{ x: number; y: number; baseX: number; baseY: number }> = [];
            for (let gx = 0; gx <= canvas.width + gridSpacingX; gx += gridSpacingX) {
                for (let gy = 0; gy <= canvas.height + gridSpacingY; gy += gridSpacingY) {
                    nodes.push({
                        x: gx,
                        y: gy,
                        baseX: gx,
                        baseY: gy
                    });
                }
            }

            // EKG state
            let ekgX = 0;
            const ekgPoints: number[] = new Array(Math.ceil(canvas.width * 1.5)).fill(0);
            let beatState = 0;
            let timeSinceLastBeat = 0;
            const baselineY = canvas.height * 0.5;

            // Scan line state
            let scanX = 0;

            const getHeartbeatValue = (t: number) => {
                if (t < 10) return -Math.sin(t * Math.PI / 10) * 2;
                if (t >= 10 && t < 15) return 0;
                if (t >= 15 && t < 35) {
                    const phase = t - 15;
                    if (phase < 2) return 1;
                    if (phase < 5) return 3;
                    if (phase < 10) return -18;
                    if (phase < 15) return 5;
                    return 0;
                }
                if (t >= 35 && t < 45) return 0;
                if (t >= 45 && t < 65) return -Math.sin((t - 45) * Math.PI / 20) * 3;
                return 0;
            };

            const draw = (timestamp: number) => {
                // Throttle to target FPS
                if (timestamp - lastFrameTime < frameInterval) {
                    animationId = requestAnimationFrame(draw);
                    return;
                }
                lastFrameTime = timestamp;

                // Clear completely
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                gridPhase += 0.01;

                // === LAYER 1: Finite Element Grid (subtle mesh) ===
                ctx.globalAlpha = 0.15;
                ctx.strokeStyle = 'rgba(0, 200, 180, 0.4)';
                ctx.lineWidth = 0.5;

                // Horizontal lines
                for (let y = 0; y <= canvas.height; y += gridSpacingY) {
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(canvas.width, y);
                    ctx.stroke();
                }

                // Vertical lines
                for (let x = 0; x <= canvas.width; x += gridSpacingX) {
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, canvas.height);
                    ctx.stroke();
                }

                // === LAYER 2: Neural Network Nodes (subtle dots at intersections) ===
                ctx.globalAlpha = 0.25;

                // Animate nodes with subtle wave
                nodes.forEach((n, i) => {
                    const wave = Math.sin(gridPhase * 2 + i * 0.1) * 1.5;
                    n.x = n.baseX + wave;
                    n.y = n.baseY + Math.cos(gridPhase * 1.5 + i * 0.15) * 1;
                });

                // Draw connections between nearby nodes
                ctx.strokeStyle = 'rgba(0, 255, 200, 0.2)';
                ctx.lineWidth = 0.5;
                for (let i = 0; i < nodes.length; i++) {
                    for (let j = i + 1; j < nodes.length; j++) {
                        const dx = nodes[i].x - nodes[j].x;
                        const dy = nodes[i].y - nodes[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 50 && dist > 20) {
                            ctx.beginPath();
                            ctx.moveTo(nodes[i].x, nodes[i].y);
                            ctx.lineTo(nodes[j].x, nodes[j].y);
                            ctx.stroke();
                        }
                    }
                }

                // Draw node points
                ctx.fillStyle = 'rgba(0, 255, 200, 0.3)';
                nodes.forEach(n => {
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
                    ctx.fill();
                });

                // === LAYER 3: Scan Line (finite element analysis style) ===
                ctx.globalAlpha = 0.4;
                scanX += 1.5;
                if (scanX > canvas.width + 30) scanX = -30;

                // Sharp scan line, no gradient glow
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(scanX, 0);
                ctx.lineTo(scanX, canvas.height);
                ctx.stroke();

                // Trailing fade lines
                for (let trail = 1; trail <= 4; trail++) {
                    ctx.strokeStyle = `rgba(0, 200, 180, ${0.15 - trail * 0.03})`;
                    ctx.beginPath();
                    ctx.moveTo(scanX - trail * 8, 0);
                    ctx.lineTo(scanX - trail * 8, canvas.height);
                    ctx.stroke();
                }

                // === LAYER 4: EKG Pulse Line (crisp, no blur) ===
                ctx.globalAlpha = 0.5;

                // Update EKG data
                for (let s = 0; s < 2; s++) {
                    ekgX++;
                    if (ekgX >= canvas.width) ekgX = 0;

                    timeSinceLastBeat++;
                    let yVal = 0;

                    if (beatState === 0 && timeSinceLastBeat > 120 && Math.random() < 0.02) {
                        beatState = 1;
                        timeSinceLastBeat = 0;
                    }

                    if (beatState > 0) {
                        yVal = getHeartbeatValue(beatState);
                        beatState++;
                        if (beatState > 70) {
                            beatState = 0;
                            timeSinceLastBeat = 0;
                        }
                    }
                    yVal += (Math.random() - 0.5) * 0.5;

                    if (ekgX < ekgPoints.length) {
                        ekgPoints[ekgX] = yVal;
                    }
                }

                // Draw EKG line - crisp, no shadow
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';
                ctx.strokeStyle = '#00ddaa';

                const gap = 50;
                ctx.beginPath();
                let started = false;
                for (let x = 0; x < canvas.width; x++) {
                    if (x > ekgX && x < ekgX + gap) continue;
                    if (x >= ekgPoints.length) break;

                    const y = baselineY + ekgPoints[x];
                    if (!started) { ctx.moveTo(x, y); started = true; }
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();

                // Cursor head - small dot
                const headY = baselineY + ekgPoints[ekgX];
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.beginPath();
                ctx.arc(ekgX, headY, 2, 0, Math.PI * 2);
                ctx.fill();

                ctx.globalAlpha = 1;
                animationId = requestAnimationFrame(draw);
            };
            animationId = requestAnimationFrame(draw);
        }


        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [effect]);

    if (effect === 'gradient') return null;

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{
                mixBlendMode: 'screen',
                opacity: 0.6, // Increased for better visibility
            }}
        />
    );
});

export default HeaderBackground;
