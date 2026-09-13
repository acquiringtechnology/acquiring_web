'use client';

import { useEffect, useRef } from 'react';

interface HeroStar {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  depth: number; // 0.2 to 1.0 (parallax & gravity multiplier)
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface StardustTrail {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  alpha: number;
  active: boolean;
}

export default function HeroStarfield({
  mouseRef, // eslint-disable-line @typescript-eslint/no-unused-vars
}: {
  mouseRef?: { current: { x: number; y: number } };
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Mouse tracking in container coordinates
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      isHovering: false,
      lastMoveTime: 0,
    };

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onMouseMove = (e: MouseEvent) => {
      if (prefersReduced) return;
      const rect = container.getBoundingClientRect();
      const inHero =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = inHero;
      mouse.lastMoveTime = Date.now();
    };

    const onMouseLeave = () => {
      mouse.isHovering = false;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave, { passive: true });

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Default mouse to center if not interacted yet
      if (mouse.targetX === 0 && mouse.targetY === 0) {
        mouse.x = width * 0.5;
        mouse.y = height * 0.5;
        mouse.targetX = width * 0.5;
        mouse.targetY = height * 0.5;
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    // Star color palette
    const starColors = [
      '#ffffff',
      '#ffffff',
      '#f8fafc',
      '#fed7aa', // celestial amber
      '#fecaca', // soft ruby accent
      '#ffffff',
    ];

    // Generate 180 celestial stars
    const STAR_COUNT = 180;
    const stars: HeroStar[] = Array.from({ length: STAR_COUNT }, () => {
      const depth = Math.pow(Math.random(), 1.4) * 0.85 + 0.15;
      const hx = Math.random() * (width || 1200);
      const hy = Math.random() * (height || 800);
      return {
        homeX: hx,
        homeY: hy,
        x: hx,
        y: hy,
        vx: 0,
        vy: 0,
        r: depth > 0.65 ? Math.random() * 1.5 + 1.1 : Math.random() * 1.0 + 0.45,
        depth,
        alpha: Math.random() * 0.55 + 0.35,
        twinkleSpeed: Math.random() * 0.04 + 0.015,
        twinklePhase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      };
    });

    // Interactive cursor stardust trail
    const dustParticles: StardustTrail[] = [];
    const trailColors = ['#ffffff', '#ffccd5', '#ffe5ec', '#ff6b81', '#ffffff'];

    // Shooting stars
    const shootingStars: ShootingStar[] = [];
    let lastShootFrame = 0;

    const spawnShootingStar = () => {
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.25;
      const speed = Math.random() * 8 + 12;
      shootingStars.push({
        x: Math.random() * (width * 0.7),
        y: Math.random() * (height * 0.35),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 90 + 70,
        alpha: 1,
        active: true,
      });
    };

    let frame = 0;

    const render = () => {
      frame++;

      // Smooth mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.09;
      mouse.y += (mouse.targetY - mouse.y) * 0.09;

      const isMouseActive = mouse.isHovering && (Date.now() - mouse.lastMoveTime < 2500);

      // Spawn cursor stardust followers when mouse moves
      if (isMouseActive && frame % 2 === 0) {
        const spread = 16;
        dustParticles.push({
          x: mouse.x + (Math.random() - 0.5) * spread,
          y: mouse.y + (Math.random() - 0.5) * spread,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.2,
          size: Math.random() * 1.8 + 0.6,
          alpha: 0.9,
          color: trailColors[Math.floor(Math.random() * trailColors.length)],
        });
      }

      ctx.clearRect(0, 0, width, height);

      // Occasional shooting star
      if (frame - lastShootFrame > 280 && Math.random() < 0.015) {
        spawnShootingStar();
        lastShootFrame = frame;
      }

      // ── 1. Update and Render Stars Following Mouse ──
      for (const s of stars) {
        // Gravitational Attraction toward mouse cursor (stars follow the mouse!)
        if (isMouseActive) {
          const dx = mouse.x - s.x;
          const dy = mouse.y - s.y;
          const dist = Math.hypot(dx, dy);

          // Within influence radius, pull stars toward the cursor
          const influenceRadius = 340;
          if (dist < influenceRadius && dist > 8) {
            const pullStrength = Math.pow(1 - dist / influenceRadius, 1.4) * 2.6 * s.depth;
            // Vector pointing to mouse
            s.vx += (dx / dist) * pullStrength;
            s.vy += (dy / dist) * pullStrength;

            // Delicate orbital swirl around mouse
            s.vx += (-dy / dist) * pullStrength * 0.28;
            s.vy += (dx / dist) * pullStrength * 0.28;
          }
        }

        // Parallax drift offset based on mouse position from center of screen
        const pxOffset = (mouse.x - width * 0.5) * 0.12 * s.depth;
        const pyOffset = (mouse.y - height * 0.5) * 0.12 * s.depth;

        // Spring force returning star toward home position + parallax target
        const targetHomeX = s.homeX + pxOffset;
        const targetHomeY = s.homeY + pyOffset;
        s.vx += (targetHomeX - s.x) * 0.032;
        s.vy += (targetHomeY - s.y) * 0.032;

        // Friction / damping
        s.vx *= 0.89;
        s.vy *= 0.89;

        s.x += s.vx;
        s.y += s.vy;

        // Twinkle calculation
        s.twinklePhase += s.twinkleSpeed;
        const twinkle = 0.65 + 0.35 * Math.sin(s.twinklePhase);

        // Proximity brightness boost: stars glow brighter near mouse
        const mDist = Math.hypot(mouse.x - s.x, mouse.y - s.y);
        const nearBoost = isMouseActive && mDist < 200 ? (1 - mDist / 200) * 0.55 : 0;
        const currentAlpha = Math.min(1, (s.alpha + nearBoost) * twinkle);
        const currentR = s.r * (1 + nearBoost * 0.6);

        ctx.beginPath();
        ctx.arc(s.x, s.y, currentR, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();

        // 4-point cross diffraction sparkle for bright stars or stars near cursor
        if ((currentR > 1.8 || nearBoost > 0.25) && twinkle > 0.8) {
          const arm = currentR * 2.8;
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentAlpha * 0.75})`;
          ctx.lineWidth = 0.65;
          ctx.beginPath();
          ctx.moveTo(s.x - arm, s.y);
          ctx.lineTo(s.x + arm, s.y);
          ctx.moveTo(s.x, s.y - arm);
          ctx.lineTo(s.x, s.y + arm);
          ctx.stroke();
        }
      }

      // ── 2. Render Cursor Stardust Trail Following Mouse ──
      for (let i = dustParticles.length - 1; i >= 0; i--) {
        const p = dustParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.022;

        if (p.alpha <= 0) {
          dustParticles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      // ── 3. Render Shooting Stars ──
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        if (!ss.active) {
          shootingStars.splice(i, 1);
          continue;
        }

        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.alpha -= 0.024;

        if (ss.alpha <= 0 || ss.x > width + 100 || ss.y > height + 100) {
          ss.active = false;
          continue;
        }

        const tailX = ss.x - (ss.vx / (Math.hypot(ss.vx, ss.vy) || 1)) * ss.length;
        const tailY = ss.y - (ss.vy / (Math.hypot(ss.vx, ss.vy) || 1)) * ss.length;

        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${ss.alpha * 0.95})`);
        grad.addColorStop(0.3, `rgba(255, 180, 190, ${ss.alpha * 0.6})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${ss.alpha})`;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
