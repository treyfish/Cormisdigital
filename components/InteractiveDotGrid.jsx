'use client';

import { useRef, useEffect, useCallback } from 'react';

const CONFIG = {
  gridSpacing: 28,
  dotRadius: 1,
  dotColor: 'rgba(55, 138, 221, 0.12)',
  dotColorHover: 'rgba(55, 138, 221, 0.35)',
  mouse: {
    radius: 150,
    strength: 20,
    lerp: 0.08,
  },
};

export default function InteractiveDotGrid() {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const cursorRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);
  const dprRef = useRef(1);

  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;

    const spacing = CONFIG.gridSpacing;
    const cols = Math.ceil(canvas.width / dpr / spacing) + 1;
    const rows = Math.ceil(canvas.height / dpr / spacing) + 1;

    const dots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          ox: col * spacing,
          oy: row * spacing,
          x: col * spacing,
          y: row * spacing,
          dx: 0, dy: 0,
          cx: 0, cy: 0,
        });
      }
    }
    dotsRef.current = dots;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    buildGrid();

    const heroEl = canvas.closest('.hero');

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      cursorRef.current.x = e.clientX - rect.left;
      cursorRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      cursorRef.current.x = -9999;
      cursorRef.current.y = -9999;
    };

    const target = heroEl || window;
    target.addEventListener('mousemove', handleMouseMove);
    target.addEventListener('mouseleave', handleMouseLeave);

    function animate() {
      rafRef.current = requestAnimationFrame(animate);

      const dpr = dprRef.current;
      const dots = dotsRef.current;
      const cursor = cursorRef.current;
      const { radius, strength, lerp } = CONFIG.mouse;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        const vecX = dot.ox - cursor.x;
        const vecY = dot.oy - cursor.y;
        const dist = Math.sqrt(vecX * vecX + vecY * vecY);

        if (dist < radius) {
          const force = 1 - dist / radius;
          const angle = Math.atan2(vecY, vecX);
          dot.dx = Math.cos(angle) * force * strength;
          dot.dy = Math.sin(angle) * force * strength;
        } else {
          dot.dx = 0;
          dot.dy = 0;
        }

        dot.cx += lerp * (dot.dx - dot.cx);
        dot.cy += lerp * (dot.dy - dot.cy);

        dot.x = dot.ox + dot.cx;
        dot.y = dot.oy + dot.cy;

        const proximity = Math.sqrt(dot.cx * dot.cx + dot.cy * dot.cy);
        ctx.fillStyle = proximity > 0.5 ? CONFIG.dotColorHover : CONFIG.dotColor;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, CONFIG.dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    animate();

    const handleResize = () => buildGrid();
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      target.removeEventListener('mousemove', handleMouseMove);
      target.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [buildGrid]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-dot-grid"
      style={{ pointerEvents: 'none' }}
    />
  );
}
