'use client';

/**
 * Dynamic Header Background Effects
 * - matrix-fast: Quick flowing medical standards
 * - neural-network: Animated connected nodes
 * - pulse: Medical heartbeat effect
 * - data-stream: Fast vertical data particles
 */

import { useEffect, useRef, memo } from 'react';

type BackgroundEffect = 'matrix-fast' | 'neural-network' | 'pulse' | 'data-stream' | 'gradient';

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

        // PULSE - Heartbeat effect
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
                opacity: 0.7,
            }}
        />
    );
});

export default HeaderBackground;
