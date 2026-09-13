'use client';

import { useEffect, useRef } from 'react';

interface Star {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
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
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export default function FloatingStars({
  starCount = 85,
  particleSpeed = 0.25,
}: {
  starCount?: number;
  particleSpeed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let frame = 0;
    let isVisible = false;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Mouse tracking state in local canvas coordinates
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      isHovering: false,
      lastMoveTime: 0,
    };

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onMouseMove = (e: MouseEvent) => {
      if (prefersReduced) return;
      const rect = canvas.getBoundingClientRect();
      const inCanvas =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (inCanvas) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        mouse.isHovering = true;
        mouse.lastMoveTime = Date.now();
      } else {
        mouse.isHovering = false;
      }
    };

    const onMouseLeave = () => {
      mouse.isHovering = false;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      width = canvas.offsetWidth || (parent ? parent.offsetWidth : window.innerWidth);
      height = canvas.offsetHeight || (parent ? parent.offsetHeight : window.innerHeight);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Initialize mouse target near center if unset
      if (mouse.targetX === -9999) {
        mouse.x = width * 0.5;
        mouse.y = height * 0.5;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Intersection observer so it only runs when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animId) {
          animId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Star color palette
    const colors = [
      '#ffffff',
      '#ffffff',
      '#f8fafc',
      '#93c5fd', // Ice blue / AI cyan
      '#fed7aa', // Celestial amber
      '#fecaca', // Soft ruby accent tint
    ];

    // Generate stars with home positions
    const stars: Star[] = Array.from({ length: starCount }, () => {
      const rx = Math.random() * (width || 1200);
      const ry = Math.random() * (height || 800);
      return {
        homeX: rx,
        homeY: ry,
        x: rx,
        y: ry,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed - 0.08,
        radius: Math.random() * 1.5 + 0.6,
        baseAlpha: Math.random() * 0.5 + 0.35,
        twinkleSpeed: Math.random() * 0.03 + 0.015,
        twinklePhase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    // Cursor stardust trail followers
    const dustParticles: StardustTrail[] = [];
    const trailColors = ['#ffffff', '#ffccd5', '#ffe5ec', '#ff6b81', '#93c5fd'];

    // Occasional shooting star
    const shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      length: 80,
      speed: 12,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      opacity: 0,
      active: false,
    };

    const triggerShootingStar = () => {
      if (shootingStar.active || !isVisible) return;
      shootingStar.x = Math.random() * width * 0.8;
      shootingStar.y = Math.random() * height * 0.4;
      shootingStar.length = Math.random() * 70 + 60;
      shootingStar.speed = Math.random() * 6 + 10;
      shootingStar.opacity = 1;
      shootingStar.active = true;
    };

    const shootingStarTimer = setInterval(() => {
      if (Math.random() > 0.45) {
        triggerShootingStar();
      }
    }, 4800);

    const render = () => {
      if (!isVisible) {
        animId = 0;
        return;
      }

      frame++;

      // Smooth mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      const isMouseActive = mouse.isHovering && Date.now() - mouse.lastMoveTime < 2400;

      // Spawn cursor stardust trail followers when moving mouse inside canvas
      if (isMouseActive && frame % 2 === 0) {
        const spread = 14;
        dustParticles.push({
          x: mouse.x + (Math.random() - 0.5) * spread,
          y: mouse.y + (Math.random() - 0.5) * spread,
          vx: (Math.random() - 0.5) * 1.0,
          vy: (Math.random() - 0.5) * 1.0 - 0.2,
          size: Math.random() * 1.8 + 0.6,
          alpha: 0.85,
          color: trailColors[Math.floor(Math.random() * trailColors.length)],
        });
      }

      ctx.clearRect(0, 0, width, height);

      // ── 1. Interactive Constellation Lines between stars ──
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * 0.08;
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // ── 2. Interactive Constellation Lines connecting Cursor to Nearby Stars ──
      if (isMouseActive) {
        const cursorInfluence = 135;
        for (let i = 0; i < stars.length; i++) {
          const dx = mouse.x - stars[i].x;
          const dy = mouse.y - stars[i].y;
          const dist = Math.hypot(dx, dy);

          if (dist < cursorInfluence) {
            const lineAlpha = Math.pow(1 - dist / cursorInfluence, 1.2) * 0.28;
            ctx.strokeStyle = `rgba(255, 140, 160, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(stars[i].x, stars[i].y);
            ctx.stroke();
          }
        }
      }

      // ── 3. Update and Render Stars with Gravitational Attraction ──
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Gravitational Attraction & gentle orbital swirl around cursor
        if (isMouseActive) {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const dist = Math.hypot(dx, dy);
          const influenceRadius = 260;

          if (dist < influenceRadius && dist > 6) {
            const pullStrength = Math.pow(1 - dist / influenceRadius, 1.3) * 2.2;
            star.vx += (dx / dist) * pullStrength;
            star.vy += (dy / dist) * pullStrength;

            // Delicate orbital swirl
            star.vx += (-dy / dist) * pullStrength * 0.25;
            star.vy += (dx / dist) * pullStrength * 0.25;
          }
        }

        // Damping / friction
        star.vx *= 0.91;
        star.vy *= 0.91;

        star.x += star.vx;
        star.y += star.vy;
        star.twinklePhase += star.twinkleSpeed;

        // Wrap around canvas boundaries
        if (star.x < -15) star.x = width + 15;
        if (star.x > width + 15) star.x = -15;
        if (star.y < -15) star.y = height + 15;
        if (star.y > height + 15) star.y = -15;

        // Proximity brightness boost: stars glow brighter near mouse cursor
        const mDist = isMouseActive ? Math.hypot(mouse.x - star.x, mouse.y - star.y) : 9999;
        const nearBoost = isMouseActive && mDist < 180 ? (1 - mDist / 180) * 0.55 : 0;

        const twinkle = 0.65 + 0.35 * Math.sin(star.twinklePhase);
        const currentAlpha = Math.min(1, (star.baseAlpha + nearBoost) * twinkle);
        const currentR = star.radius * (1 + nearBoost * 0.65);

        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;

        // Star core
        ctx.beginPath();
        ctx.arc(star.x, star.y, currentR, 0, Math.PI * 2);
        ctx.fill();

        // Subtle halo glow for larger stars or stars near the cursor
        if (currentR > 1.3 || nearBoost > 0.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, currentR * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = currentAlpha * 0.25;
          ctx.fill();
        }

        // 4-point cross diffraction sparkle for stars close to the cursor
        if ((currentR > 1.6 || nearBoost > 0.25) && twinkle > 0.75) {
          const arm = currentR * 2.6;
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentAlpha * 0.75})`;
          ctx.lineWidth = 0.65;
          ctx.beginPath();
          ctx.moveTo(star.x - arm, star.y);
          ctx.lineTo(star.x + arm, star.y);
          ctx.moveTo(star.x, star.y - arm);
          ctx.lineTo(star.x, star.y + arm);
          ctx.stroke();
        }
      }

      // ── 4. Render Cursor Stardust Trail Following Mouse ──
      for (let i = dustParticles.length - 1; i >= 0; i--) {
        const p = dustParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.024;

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

      // ── 5. Draw and Update Shooting Star ──
      if (shootingStar.active) {
        ctx.save();
        ctx.globalAlpha = shootingStar.opacity;

        const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

        const grad = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          tailX,
          tailY
        );
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.3, 'rgba(147, 197, 253, 0.8)');
        grad.addColorStop(1, 'rgba(176, 24, 42, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.02;

        if (
          shootingStar.opacity <= 0 ||
          shootingStar.x > width + 100 ||
          shootingStar.y > height + 100
        ) {
          shootingStar.active = false;
        }

        ctx.restore();
      }

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      observer.disconnect();
      clearInterval(shootingStarTimer);
    };
  }, [starCount, particleSpeed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
