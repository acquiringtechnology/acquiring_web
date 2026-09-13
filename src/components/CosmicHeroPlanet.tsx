'use client';

import { useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------
// Cosmic Hero Planet with Expanded 3D Rotating Orbital Rings & Company Logo
// -------------------------------------------------------------------
export default function CosmicHeroPlanet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let frame = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Preload the high-resolution red planet core with uploaded logo
    const planetImg = new Image();
    planetImg.src = '/planet-core-red-with-logo.png';
    planetImg.onload = () => {
      setIsLoaded(true);
    };

    // Parallax mouse tracker
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onMouseMove = (e: MouseEvent) => {
      if (prefersReduced) return;
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouse.targetX = Math.max(-1, Math.min(1, nx));
      mouse.targetY = Math.max(-1, Math.min(1, ny));
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Handle resizing to accommodate the expansive orbital system
    const resize = () => {
      const rect = container.getBoundingClientRect();
      const isMobile = window.innerWidth < 640;
      width = isMobile ? Math.min(rect.width || 360, window.innerWidth) : Math.max(rect.width || 580, 680);
      height = Math.max(rect.height || 540, isMobile ? 460 : 620);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    // ── Generate Background Cosmic Stars ──
    const STAR_COUNT = 150;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.008,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.4 ? 'rgba(255, 235, 240, ' : 'rgba(255, 210, 225, ',
    }));

    // ── Generate Rotating Ring Particles across the expanded orbit ──
    const PARTICLE_COUNT = 480;
    const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const rNorm = Math.pow(Math.random(), 0.82);
      // Orbit ratio spans from 1.15 (just outside the planet surface) up to 2.48 (broad cosmic orbit)
      const baseR = 1.15 + rNorm * 1.33;
      // Keplerian-inspired speed: inner orbital particles move faster than outer ones
      const speed = (0.005 + (2.6 - baseR) * 0.0045) * (Math.random() * 0.3 + 0.85);
      return {
        rRatio: baseR,
        angle: Math.random() * Math.PI * 2,
        speed,
        size: Math.random() < 0.10 ? Math.random() * 2.4 + 1.2 : Math.random() * 1.2 + 0.4,
        alpha: Math.random() * 0.65 + 0.25,
        twinkleSpeed: Math.random() * 0.05 + 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
        colorType: i % 4, // 0: Crimson Red, 1: Ruby Red, 2: Amber/Coral, 3: Pure White
      };
    });

    // ── Energy Waves traveling along distinct orbital tracks ──
    const waves = [
      { angle: 0, speed: 0.012, width: 0.85, color: 'rgba(255, 50, 80, ' },
      { angle: Math.PI * 0.85, speed: 0.009, width: 1.1, color: 'rgba(255, 140, 70, ' },
      { angle: Math.PI * 1.55, speed: 0.014, width: 0.7, color: 'rgba(255, 255, 255, ' },
    ];

    // Main animation loop
    const render = () => {
      frame++;

      // Lerp mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const CX = width * 0.5 + mouse.x * 12;
      const CY = height * 0.5 + mouse.y * 10;

      // Tilt angle in screen plane: -23 degrees with slight mouse tilt
      const tiltAngle = (-23 + mouse.x * 3) * (Math.PI / 180);
      const cosTilt = Math.cos(tiltAngle);
      const sinTilt = Math.sin(tiltAngle);

      // Orbital inclination / pitch
      const pitchAngle = (64 + mouse.y * 4) * (Math.PI / 180);
      const aspect = Math.cos(pitchAngle);
      const sinPitch = Math.sin(pitchAngle);

      // Expanded orbit ratio: 2.48× planet radius (significantly enlarged outer perimeter)
      const ringOuterRatio = 2.48;
      const isNarrow = width < 640;

      // Geometric ellipse bounds accounting for 3D tilt
      const horizFactor = Math.sqrt(cosTilt * cosTilt + aspect * aspect * sinTilt * sinTilt);
      const vertFactor = Math.sqrt(sinTilt * sinTilt + aspect * aspect * cosTilt * cosTilt);
      const maxHorizontalRadius = (width * 0.94) / (2 * ringOuterRatio * horizFactor);
      const maxVerticalRadius = (height * 0.90) / (2 * ringOuterRatio * vertFactor);
      const planetRadius = Math.max(95, Math.min(maxHorizontalRadius, maxVerticalRadius, isNarrow ? 120 : 165));

      ctx.clearRect(0, 0, width, height);

      // ── 1. Cosmic Space Starfield ──
      for (const s of stars) {
        s.phase += s.pulseSpeed;
        const currentAlpha = s.alpha * (0.6 + 0.4 * Math.sin(s.phase));
        const sx = (s.x * width + mouse.x * 6 + width) % width;
        const sy = (s.y * height + mouse.y * 5 + height) % height;
        ctx.beginPath();
        ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${currentAlpha})`;
        ctx.fill();
      }

      // ── Helper: 3D Point to Screen Projection ──
      const projectPoint = (r: number, alpha: number) => {
        const xPrime = r * Math.cos(alpha);
        const yPrime = r * Math.sin(alpha) * aspect;
        const zPrime = r * Math.sin(alpha) * sinPitch;

        const screenX = CX + xPrime * cosTilt - yPrime * sinTilt;
        const screenY = CY + xPrime * sinTilt + yPrime * cosTilt;

        return { x: screenX, y: screenY, z: zPrime };
      };

      // ── Helper: Draw Segment of Concentric Glowing Ring Bands (Expanded Orbit) ──
      const drawRingBands = (startA: number, endA: number, isFront: boolean) => {
        ctx.save();
        ctx.translate(CX, CY);
        ctx.rotate(tiltAngle);

        const bandSteps = 56;
        const innerR = planetRadius * 1.15;
        const outerR = planetRadius * ringOuterRatio;

        for (let i = 0; i < bandSteps; i++) {
          const t = i / (bandSteps - 1);
          const r = innerR + t * (outerR - innerR);

          // Subtle division gaps (Cassini-like division gaps for realistic celestial depth)
          const isGap1 = Math.abs(t - 0.38) < 0.024;
          const isGap2 = Math.abs(t - 0.70) < 0.020;
          if (isGap1 || isGap2) continue;

          let intensity = 1;
          // Smooth fade in at inner boundary
          if (t < 0.12) intensity *= t / 0.12;
          // Peak intensity throughout the main luminous orbit band
          else if (t < 0.65) intensity = 0.85 + 0.15 * Math.sin(((t - 0.12) / 0.53) * Math.PI);
          // Ethereal gradual fade into deep space at outer perimeter
          else intensity = (1 - t) / 0.35;

          const rx = r;
          const ry = r * aspect;

          // Red celestial color grading across the enlarged orbit
          let strokeStyle = '';
          if (t < 0.30) {
            strokeStyle = `rgba(195, 25, 55, ${0.20 * intensity})`;
          } else if (t < 0.70) {
            strokeStyle = `rgba(255, 50, 80, ${0.34 * intensity})`;
          } else {
            strokeStyle = `rgba(255, 130, 110, ${0.20 * intensity})`;
          }

          ctx.beginPath();
          ctx.ellipse(0, 0, rx, ry, 0, startA, endA);
          ctx.strokeStyle = strokeStyle;
          ctx.lineWidth = 1.4;
          ctx.stroke();

          // Bright glowing core lines at key resonant orbits across the enlarged system
          if (i === 10 || i === 20 || i === 30 || i === 42) {
            ctx.beginPath();
            ctx.ellipse(0, 0, rx, ry, 0, startA, endA);
            ctx.strokeStyle = `rgba(255, 240, 245, ${isFront ? 0.58 : 0.36})`;
            ctx.lineWidth = i === 20 ? 1.5 : 1.1;
            ctx.stroke();
          }
        }

        ctx.restore();
      };

      // ── Helper: Draw Rotating Particles for an Angular Range ──
      const drawParticles = (isFront: boolean) => {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        for (const p of particles) {
          p.angle += p.speed;
          if (p.angle > Math.PI * 2) p.angle -= Math.PI * 2;

          p.twinklePhase += p.twinkleSpeed;
          const twinkle = 0.65 + 0.35 * Math.sin(p.twinklePhase);

          const r = planetRadius * p.rRatio;
          const proj = projectPoint(r, p.angle);

          const belongsToFront = proj.z >= -10;
          if (belongsToFront !== isFront) continue;

          let waveBoost = 1;
          for (const w of waves) {
            let diff = Math.abs(p.angle - w.angle);
            if (diff > Math.PI) diff = Math.PI * 2 - diff;
            if (diff < w.width) {
              waveBoost += (1 - diff / w.width) * 1.8;
            }
          }

          const currentAlpha = Math.min(1, p.alpha * twinkle * waveBoost * (isFront ? 1.15 : 0.7));
          const sz = p.size * (isFront ? 1.0 : 0.85);

          ctx.beginPath();
          ctx.arc(proj.x, proj.y, sz, 0, Math.PI * 2);

          let fill = '';
          if (p.colorType === 0) fill = `rgba(255, 45, 75, ${currentAlpha})`;
          else if (p.colorType === 1) fill = `rgba(224, 32, 48, ${currentAlpha})`;
          else if (p.colorType === 2) fill = `rgba(255, 145, 90, ${currentAlpha})`;
          else fill = `rgba(255, 255, 255, ${currentAlpha * 0.95})`;

          ctx.fillStyle = fill;
          ctx.fill();

          // Sparkle 4-point cross for larger particles
          if (sz > 2.0 && waveBoost > 1.2) {
            const arm = sz * 2.8;
            ctx.strokeStyle = `rgba(255, 255, 255, ${currentAlpha * 0.7})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(proj.x - arm, proj.y);
            ctx.lineTo(proj.x + arm, proj.y);
            ctx.moveTo(proj.x, proj.y - arm);
            ctx.lineTo(proj.x, proj.y + arm);
            ctx.stroke();
          }
        }

        ctx.restore();
      };

      // Advance wave positions
      for (const w of waves) {
        w.angle = (w.angle + w.speed) % (Math.PI * 2);
      }

      // ── 2. BACK PASS: Rings behind the planet ──
      drawRingBands(Math.PI, Math.PI * 2, false);
      drawParticles(false);

      // ── 3. PLANET SPHERE: Render massive high-res red planet core (zero background red haze) ──
      if (planetImg.complete && planetImg.naturalWidth > 0) {
        ctx.save();
        // Subtle planetary breathing pulse
        const pulse = 1 + 0.008 * Math.sin(frame * 0.02);
        // Scaled to prominent large size, perfectly balanced inside the expansive orbit
        const pSize = planetRadius * 2.06 * pulse;
        ctx.drawImage(
          planetImg,
          CX - pSize / 2,
          CY - pSize / 2,
          pSize,
          pSize
        );
        ctx.restore();
      }

      // ── 5. FRONT PASS: Rings in front of the planet ──
      drawRingBands(0, Math.PI, true);
      drawParticles(true);

      // ── 6. Luminous Sweeping Energy Filament Arcs across the front ring tracks ──
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.translate(CX, CY);
      ctx.rotate(tiltAngle);

      for (let wi = 0; wi < waves.length; wi++) {
        const w = waves[wi];
        const sa = Math.max(0, w.angle - w.width * 0.5);
        const ea = Math.min(Math.PI, w.angle + w.width * 0.5);
        if (ea > sa) {
          // Sweeping across multiple radii of the enlarged orbit: inner, mid, and outer
          const midR = planetRadius * (wi === 0 ? 1.45 : wi === 1 ? 1.88 : 2.22);
          ctx.beginPath();
          ctx.ellipse(0, 0, midR, midR * aspect, 0, sa, ea);
          ctx.strokeStyle = `${w.color}0.75)`;
          ctx.lineWidth = 3.2;
          ctx.stroke();

          ctx.beginPath();
          ctx.ellipse(0, 0, midR, midR * aspect, 0, sa, ea);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
      ctx.restore();

      // ── 7. Atmospheric Specular Rim & Starburst Flare at Upper-Right ──
      const flareAngle = -32 * (Math.PI / 180);
      const flareDist = planetRadius * 0.98;
      const flareX = CX + Math.cos(flareAngle) * flareDist;
      const flareY = CY + Math.sin(flareAngle) * flareDist;
      const flarePulse = 0.82 + 0.18 * Math.sin(frame * 0.04);

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      // Specular diamond starburst glint (pure white, zero background red haze)
      const flareBloom = ctx.createRadialGradient(flareX, flareY, 0, flareX, flareY, planetRadius * 0.30);
      flareBloom.addColorStop(0, `rgba(255, 255, 255, ${0.98 * flarePulse})`);
      flareBloom.addColorStop(0.25, `rgba(255, 255, 255, ${0.50 * flarePulse})`);
      flareBloom.addColorStop(0.6, `rgba(255, 250, 250, ${0.10 * flarePulse})`);
      flareBloom.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.beginPath();
      ctx.arc(flareX, flareY, planetRadius * 0.30, 0, Math.PI * 2);
      ctx.fillStyle = flareBloom;
      ctx.fill();

      // Multi-point diffraction star rays
      const RAY_COUNT = 10;
      for (let i = 0; i < RAY_COUNT; i++) {
        const rAngle = (i / RAY_COUNT) * Math.PI * 2 + frame * 0.002;
        const rLen = planetRadius * (i % 2 === 0 ? 0.95 : 0.45) * flarePulse;
        const grad = ctx.createLinearGradient(
          flareX, flareY,
          flareX + Math.cos(rAngle) * rLen,
          flareY + Math.sin(rAngle) * rLen
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.9 * flarePulse})`);
        grad.addColorStop(0.35, `rgba(255, 255, 255, ${0.35 * flarePulse})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.moveTo(flareX, flareY);
        ctx.lineTo(flareX + Math.cos(rAngle) * rLen, flareY + Math.sin(rAngle) * rLen);
        ctx.strokeStyle = grad;
        ctx.lineWidth = i % 2 === 0 ? 1.6 : 0.9;
        ctx.stroke();
      }

      // Bright flare core dot
      ctx.beginPath();
      ctx.arc(flareX, flareY, 4.5 * flarePulse, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        minHeight: 'clamp(520px, 78vh, 880px)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        userSelect: 'none',
      }}
      aria-label="Acquiring Technology Red Celestial Planet with Rotating Rings"
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          opacity: isLoaded ? 1 : 0.8,
          transition: 'opacity 0.8s ease',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
