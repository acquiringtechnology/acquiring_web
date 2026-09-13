'use client';

import { useEffect, useRef, useState } from 'react';
import AnimatedHeroLogo from './AnimatedHeroLogo';
import CosmicHeroPlanet from './CosmicHeroPlanet';
import HeroStarfield from './HeroStarfield';

// -------------------------------------------------------------------
// AI Sphere canvas visualization — galaxy orbital ribbon + neural net
// -------------------------------------------------------------------
function AIVisualization({ mouseRef }: { mouseRef: { current: { x: number; y: number } } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      W = rect.width || 640;
      H = rect.height || 540;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth > 768;
    const TAU = Math.PI * 2;
    const DEG = Math.PI / 180;

    // Background stars — scattered sparkle field
    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.4 + 0.2,
      op: Math.random() * 0.5 + 0.08,
      phase: Math.random() * TAU,
      spd: Math.random() * 0.018 + 0.005,
    }));

    // Neural network nodes inside sphere
    const nodes = Array.from({ length: 22 }, () => ({
      ax: (Math.random() - 0.5) * 1.6,  // normalized coords -0.8..0.8
      ay: (Math.random() - 0.5) * 1.6,
      phase: Math.random() * TAU,
      spd: (Math.random() * 0.008 + 0.003) * (Math.random() < 0.5 ? 1 : -1),
      r: Math.random() * 2 + 1.2,
    }));

    // Edges: connect nearby nodes
    const edges: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].ax - nodes[j].ax;
        const dy = nodes[i].ay - nodes[j].ay;
        if (Math.sqrt(dx * dx + dy * dy) < 0.8) edges.push([i, j]);
      }
    }

    // Sparkle particles scattered in scene (static positions, random flicker)
    const sparkles = Array.from({ length: 55 }, () => ({
      x: Math.random(), y: Math.random(),
      phase: Math.random() * TAU,
      spd: Math.random() * 0.04 + 0.015,
      size: Math.random() * 2 + 0.5,
    }));

    // Ring group config — 2 sweeping orbital ribbons
    type RingGroup = {
      tilt: number; rxBase: number; ryBase: number;
      sweepT: number; spd: number;
      lineCount: number; lineStep: number;
    };
    const ringGroups: RingGroup[] = [
      { tilt: -20 * DEG, rxBase: 2.9, ryBase: 0.62, sweepT: 0,    spd: 1/16,   lineCount: 34, lineStep: 0.040 },
      { tilt:  26 * DEG, rxBase: 2.5, ryBase: 0.50, sweepT: 0.48, spd: -(1/20),lineCount: 26, lineStep: 0.045 },
    ];

    // Travelers along rings
    const travelers = Array.from({ length: 36 }, (_, i) => ({
      groupIdx: i % 2,
      t: i / 36,
      lineIdx: Math.floor(Math.random() * 34),
    }));

    const easeOut = (t: number) => 1 - (1 - Math.min(t, 1)) ** 3;

    const ellipseStroke = (rx: number, ry: number, tilt: number, lw: number, color: string) => {
      ctx.save(); ctx.rotate(tilt);
      ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, 0, TAU);
      ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.stroke();
      ctx.restore();
    };
    const arcStroke = (rx: number, ry: number, tilt: number, sa: number, ea: number, lw: number, color: string) => {
      ctx.save(); ctx.rotate(tilt);
      ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, sa, ea);
      ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.stroke();
      ctx.restore();
    };

    const draw = () => {
      if (!W || !H) { raf = requestAnimationFrame(draw); return; }

      const CX = W * 0.5;
      const CY = H * 0.5;
      const SR = Math.min(W * 0.33, H * 0.45);

      const mx = isDesktop && !prefersReduced ? mouseRef.current.x : 0;
      const my = isDesktop && !prefersReduced ? mouseRef.current.y : 0;
      const ringOx = mx * 10, ringOy = my * 10;

      const sphereT = easeOut(Math.min(frame / 65, 1));
      const ringT   = easeOut(Math.max(0, Math.min((frame - 15) / 90, 1)));
      const flareT  = easeOut(Math.max(0, Math.min((frame - 45) / 60, 1)));

      ctx.clearRect(0, 0, W, H);

      // ── 1. Deep void background ───────────────────────────────────────
      const bgG = ctx.createRadialGradient(CX * 0.85, CY * 0.8, 0, CX, CY, Math.max(W, H) * 0.9);
      bgG.addColorStop(0,   '#120306');
      bgG.addColorStop(0.3, '#090103');
      bgG.addColorStop(0.7, '#050102');
      bgG.addColorStop(1,   '#020001');
      ctx.fillStyle = bgG; ctx.fillRect(0, 0, W, H);

      // ── 2. Stars ──────────────────────────────────────────────────────
      for (const s of stars) {
        s.phase += s.spd;
        const a = s.op * (0.55 + 0.45 * Math.sin(s.phase));
        ctx.beginPath();
        ctx.arc(s.x * W + mx * 3, s.y * H + my * 3, s.r, 0, TAU);
        ctx.fillStyle = `rgba(255,220,228,${a * sphereT})`; ctx.fill();
      }

      // ── 3. Scattered sparkle field ────────────────────────────────────
      for (const sp of sparkles) {
        sp.phase += sp.spd;
        const pulse = (0.5 + 0.5 * Math.sin(sp.phase));
        if (pulse < 0.3) continue;
        const a = pulse * 0.6 * ringT;
        const sx = sp.x * W + mx * 5, sy = sp.y * H + my * 5;
        ctx.beginPath(); ctx.arc(sx, sy, sp.size * pulse, 0, TAU);
        ctx.fillStyle = `rgba(255,190,205,${a})`; ctx.fill();
        // 4-point star cross for bright ones
        if (pulse > 0.75 && sp.size > 1.8) {
          const arm = sp.size * 4 * pulse;
          ctx.strokeStyle = `rgba(255,210,220,${a * 0.7})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.moveTo(sx - arm, sy); ctx.lineTo(sx + arm, sy); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(sx, sy - arm); ctx.lineTo(sx, sy + arm); ctx.stroke();
        }
      }

      // ── 4. Wide ambient halo ──────────────────────────────────────────
      const halo = ctx.createRadialGradient(CX, CY, SR * 0.3, CX, CY, SR * 4.2);
      halo.addColorStop(0,    `rgba(220,35,60,${0.60 * sphereT})`);
      halo.addColorStop(0.18, `rgba(176,24,42,${0.35 * sphereT})`);
      halo.addColorStop(0.42, `rgba(100,12,22,${0.14 * sphereT})`);
      halo.addColorStop(0.75, `rgba(60,6,14,${0.05 * sphereT})`);
      halo.addColorStop(1,    'rgba(176,24,42,0)');
      ctx.beginPath(); ctx.arc(CX, CY, SR * 4.2, 0, TAU);
      ctx.fillStyle = halo; ctx.fill();

      // ── 5. Ring bands — back pass (behind sphere) ─────────────────────
      ctx.save();
      ctx.translate(CX + ringOx, CY + ringOy);

      for (const g of ringGroups) {
        g.sweepT = ((g.sweepT + g.spd / 60) + 1) % 1;
        const baseRx = SR * g.rxBase;
        const baseRy = SR * g.ryBase;

        // Stacked ellipses — thick ribbon
        for (let li = 0; li < g.lineCount; li++) {
          const t = li / (g.lineCount - 1);
          const offset = (t - 0.5) * g.lineStep * g.lineCount;
          const rx = baseRx * (1 + offset);
          const ry = baseRy * (1 + offset * 0.5);
          const dist = Math.abs(t - 0.5) * 2;
          const bright = 1 - dist * 0.72;

          ellipseStroke(rx, ry, g.tilt, 8,   `rgba(180,20,40,${0.07 * bright * ringT})`);
          ellipseStroke(rx, ry, g.tilt, 3,   `rgba(210,38,58,${0.18 * bright * ringT})`);
          ellipseStroke(rx, ry, g.tilt, 1.0, `rgba(255,${70 + Math.floor(bright * 80)},${88 + Math.floor(bright * 55)},${(0.30 + 0.55 * bright) * ringT})`);
        }

        // Bright sweep highlight ribbon
        const sa = g.sweepT * TAU;
        const ea = sa + 0.60 * TAU;

        arcStroke(baseRx, baseRy, g.tilt, sa, ea, 32, `rgba(255,60,90,${0.05 * ringT})`);
        arcStroke(baseRx, baseRy, g.tilt, sa, ea, 16, `rgba(255,85,110,${0.14 * ringT})`);
        arcStroke(baseRx, baseRy, g.tilt, sa, ea, 7,  `rgba(255,130,150,${0.38 * ringT})`);
        arcStroke(baseRx, baseRy, g.tilt, sa, ea, 2.5,`rgba(255,195,208,${0.82 * ringT})`);
        arcStroke(baseRx, baseRy, g.tilt, sa, ea, 0.8,`rgba(255,240,246,${0.98 * ringT})`);

        // Traveler sparkles
        const gIdx = ringGroups.indexOf(g);
        for (const tv of travelers.filter(v => v.groupIdx === gIdx)) {
          tv.t = (tv.t + Math.abs(g.spd) * 0.8 / 60) % 1;
          const lineOff = (tv.lineIdx / g.lineCount - 0.5) * g.lineStep * g.lineCount;
          const tvRx = baseRx * (1 + lineOff);
          const tvRy = baseRy * (1 + lineOff * 0.5);
          const angle = (g.sweepT + tv.t * 0.55) * TAU;
          const cosT = Math.cos(g.tilt), sinT = Math.sin(g.tilt);
          const lx = tvRx * Math.cos(angle), ly = tvRy * Math.sin(angle);
          const px = lx * cosT - ly * sinT;
          const py = lx * sinT + ly * cosT;
          const sz = 1.2 + Math.random() * 1.2;
          ctx.beginPath(); ctx.arc(px, py, sz, 0, TAU);
          ctx.fillStyle = `rgba(255,210,222,${(0.6 + Math.random() * 0.4) * ringT})`; ctx.fill();
        }
      }
      ctx.restore();

      // ── 6. Sphere dark occluder ───────────────────────────────────────
      const darkFill = ctx.createRadialGradient(CX - SR * 0.1, CY - SR * 0.1, 0, CX, CY, SR * 1.04);
      darkFill.addColorStop(0,   `rgba(14,2,5,${sphereT})`);
      darkFill.addColorStop(0.5, `rgba(10,1,4,${sphereT})`);
      darkFill.addColorStop(1,   `rgba(6,0,2,${sphereT})`);
      ctx.beginPath(); ctx.arc(CX, CY, SR * 1.04, 0, TAU);
      ctx.fillStyle = darkFill; ctx.fill();

      // ── 7. Neural network inside sphere ──────────────────────────────
      ctx.save();
      ctx.beginPath(); ctx.arc(CX, CY, SR * 0.91, 0, TAU); ctx.clip();
      const t60 = frame * 0.007;
      const nodePos = nodes.map(n => {
        n.phase += n.spd;
        const wobble = Math.sin(n.phase) * 0.04;
        const nx = CX + (n.ax + wobble) * SR * 0.82;
        const ny = CY + (n.ay + wobble * 0.7) * SR * 0.82;
        return { x: nx, y: ny, n };
      });

      // Edges
      for (const [i, j] of edges) {
        const a = nodePos[i], b = nodePos[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist2 = Math.sqrt(dx * dx + dy * dy);
        const edgeA = Math.max(0, 1 - dist2 / (SR * 0.75));
        const pulse = 0.4 + 0.6 * Math.sin(t60 + i * 0.5 + j * 0.3);
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(255,160,175,${edgeA * 0.28 * pulse * sphereT})`;
        ctx.lineWidth = 0.7; ctx.stroke();
      }

      // Nodes
      for (const { x, y, n } of nodePos) {
        const pulse = 0.5 + 0.5 * Math.sin(n.phase * 1.4 + t60);
        ctx.beginPath(); ctx.arc(x, y, n.r * (0.7 + 0.3 * pulse), 0, TAU);
        ctx.fillStyle = `rgba(255,180,195,${(0.35 + 0.5 * pulse) * sphereT})`; ctx.fill();
        // Node glow
        const ng = ctx.createRadialGradient(x, y, 0, x, y, n.r * 4);
        ng.addColorStop(0, `rgba(255,140,160,${0.20 * pulse * sphereT})`);
        ng.addColorStop(1, 'rgba(200,30,55,0)');
        ctx.beginPath(); ctx.arc(x, y, n.r * 4, 0, TAU);
        ctx.fillStyle = ng; ctx.fill();
      }
      ctx.restore();

      // ── 8. Sphere interior glow ───────────────────────────────────────
      const innerGlow = ctx.createRadialGradient(
        CX - SR * 0.10, CY - SR * 0.10, 0,
        CX, CY, SR * 0.99
      );
      innerGlow.addColorStop(0,    `rgba(255,230,238,${0.70 * sphereT})`);
      innerGlow.addColorStop(0.10, `rgba(255,160,180,${0.60 * sphereT})`);
      innerGlow.addColorStop(0.28, `rgba(210,40,65,${0.50 * sphereT})`);
      innerGlow.addColorStop(0.52, `rgba(120,15,30,${0.32 * sphereT})`);
      innerGlow.addColorStop(0.78, `rgba(40,4,10,${0.18 * sphereT})`);
      innerGlow.addColorStop(1,    `rgba(8,1,3,${0.05 * sphereT})`);
      ctx.beginPath(); ctx.arc(CX, CY, SR * 0.99, 0, TAU);
      ctx.fillStyle = innerGlow; ctx.fill();

      // ── 9. Sphere rim — multi-pass glow ──────────────────────────────
      const rimPasses: [number, string][] = [
        [50,  `rgba(176,24,42,${0.04 * sphereT})`],
        [28,  `rgba(200,35,55,${0.09 * sphereT})`],
        [14,  `rgba(225,55,75,${0.22 * sphereT})`],
        [5.5, `rgba(250,90,110,${0.55 * sphereT})`],
        [2.2, `rgba(255,160,175,${0.82 * sphereT})`],
        [0.9, `rgba(255,235,242,${0.98 * sphereT})`],
      ];
      for (const [lw, col] of rimPasses) {
        ctx.beginPath(); ctx.arc(CX, CY, SR, 0, TAU);
        ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.stroke();
      }

      // Specular hot arc (upper-left)
      ctx.beginPath(); ctx.arc(CX, CY, SR, Math.PI * 1.05, Math.PI * 1.70);
      ctx.strokeStyle = `rgba(255,200,215,${0.38 * sphereT})`; ctx.lineWidth = 4; ctx.stroke();
      ctx.beginPath(); ctx.arc(CX, CY, SR, Math.PI * 1.18, Math.PI * 1.52);
      ctx.strokeStyle = `rgba(255,245,250,${0.60 * sphereT})`; ctx.lineWidth = 1.8; ctx.stroke();

      // ── 10. Starburst flare — upper-right ─────────────────────────────
      const fA = -Math.PI * 0.28;
      const fX = CX + Math.cos(fA) * SR * 0.97;
      const fY = CY + Math.sin(fA) * SR * 0.97;
      const fi = (0.82 + 0.18 * Math.sin(frame * 0.028)) * flareT;

      // Wide bloom
      const bloom = ctx.createRadialGradient(fX, fY, 0, fX, fY, SR * 0.9);
      bloom.addColorStop(0,    `rgba(255,248,252,${fi})`);
      bloom.addColorStop(0.06, `rgba(255,210,225,${0.90 * fi})`);
      bloom.addColorStop(0.18, `rgba(255,130,150,${0.58 * fi})`);
      bloom.addColorStop(0.40, `rgba(210,35,58,${0.25 * fi})`);
      bloom.addColorStop(0.70, `rgba(130,15,30,${0.10 * fi})`);
      bloom.addColorStop(1,    'rgba(176,24,42,0)');
      ctx.beginPath(); ctx.arc(fX, fY, SR * 0.9, 0, TAU);
      ctx.fillStyle = bloom; ctx.fill();

      // Ray spikes — 12 rays, alternating long/short
      for (let i = 0; i < 12; i++) {
        const rayA = (i / 12) * TAU + frame * 0.0025;
        const rayL = SR * (i % 2 === 0 ? 1.1 : 0.6);
        const rG = ctx.createLinearGradient(fX, fY, fX + Math.cos(rayA) * rayL, fY + Math.sin(rayA) * rayL);
        rG.addColorStop(0,   `rgba(255,240,248,${0.75 * fi})`);
        rG.addColorStop(0.3, `rgba(255,120,140,${0.28 * fi})`);
        rG.addColorStop(1,   'rgba(176,24,42,0)');
        ctx.beginPath(); ctx.moveTo(fX, fY);
        ctx.lineTo(fX + Math.cos(rayA) * rayL, fY + Math.sin(rayA) * rayL);
        ctx.strokeStyle = rG; ctx.lineWidth = i % 2 === 0 ? 1.8 : 1.0; ctx.stroke();
      }
      // Flare core dot
      ctx.beginPath(); ctx.arc(fX, fY, 6.5, 0, TAU);
      ctx.fillStyle = `rgba(255,252,255,${fi})`; ctx.fill();
      ctx.beginPath(); ctx.arc(fX, fY, 15, 0, TAU);
      ctx.fillStyle = `rgba(255,215,228,${0.35 * fi})`; ctx.fill();

      // ── 11. Front ring arcs (depth pass on top of sphere) ─────────────
      ctx.save();
      ctx.translate(CX + ringOx * 0.30, CY + ringOy * 0.30);
      for (const g of ringGroups) {
        const rx = SR * g.rxBase, ry = SR * g.ryBase;
        arcStroke(rx, ry, g.tilt, Math.PI * 0.82, Math.PI * 2.18, 26, `rgba(200,35,55,${0.06 * ringT})`);
        arcStroke(rx, ry, g.tilt, Math.PI * 0.82, Math.PI * 2.18, 10, `rgba(225,55,78,${0.16 * ringT})`);
        arcStroke(rx, ry, g.tilt, Math.PI * 0.82, Math.PI * 2.18, 3.5,`rgba(255,150,168,${0.48 * ringT})`);
        arcStroke(rx, ry, g.tilt, Math.PI * 0.82, Math.PI * 2.18, 1.2,`rgba(255,220,230,${0.88 * ringT})`);
        for (let li = 0; li < g.lineCount; li += 3) {
          const t = li / (g.lineCount - 1);
          const off = (t - 0.5) * g.lineStep * g.lineCount;
          const bRx = rx * (1 + off), bRy = ry * (1 + off * 0.5);
          const b = 1 - Math.abs(t - 0.5) * 2 * 0.75;
          arcStroke(bRx, bRy, g.tilt, Math.PI * 0.82, Math.PI * 2.18, 0.9,
            `rgba(255,${65 + Math.floor(b * 90)},${85 + Math.floor(b * 60)},${(0.28 + 0.45 * b) * ringT})`);
        }
      }
      ctx.restore();

      frame++;
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [mouseRef]);

  useEffect(() => {
    const t = setTimeout(() => setLogoVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
      <img
        src="/logo.png"
        alt="Acquiring Technology"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(130px, 19%, 180px)',
          height: 'auto',
          opacity: logoVisible ? 1 : 0,
          transition: 'opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
    </div>
  );
}

// -------------------------------------------------------------------
// Hero section
// -------------------------------------------------------------------
export default function Hero() {
  const scrollWrapRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const mouseTarget = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  const [step, setStep] = useState(0);

  const prefersReduced = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  // 10-step staggered load sequence
  useEffect(() => {
    const timings = [0, 80, 150, 300, 420, 540, 700, 850, 950, 1050, 1200];
    const timers = timings.map((t, i) => setTimeout(() => setStep(i), t));
    return () => timers.forEach(clearTimeout);
  }, []);

  // Scroll parallax on visual panel + hero content opacity fade
  useEffect(() => {
    const fn = () => {
      const y = window.scrollY * 0.18;
      if (scrollWrapRef.current) scrollWrapRef.current.style.transform = `translateY(${y}px)`;
      if (sectionRef.current) {
        const progress = Math.min(1, window.scrollY / window.innerHeight);
        sectionRef.current.style.setProperty('--hero-content-opacity', String(1 - progress * 0.4));
      }
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Mouse parallax — lerp into mouseCurrent; grid layer gets 2px; canvas reads the ref internally
  useEffect(() => {
    if (prefersReduced.current) return;
    const isDesktop = () => window.innerWidth > 768;

    const onMouse = (e: MouseEvent) => {
      if (!isDesktop()) return;
      mouseTarget.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseTarget.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const lf = 0.06;
      mouseCurrent.current.x = lerp(mouseCurrent.current.x, mouseTarget.current.x, lf);
      mouseCurrent.current.y = lerp(mouseCurrent.current.y, mouseTarget.current.y, lf);
      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(${mouseCurrent.current.x * 2}px, ${mouseCurrent.current.y * 2}px, 0)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouse, { passive: true });
    rafId.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const vis = (s: number) => step >= s;

  const lineStyle = (s: number): React.CSSProperties => ({
    display: 'block',
    opacity: vis(s) ? 1 : 0,
    transform: vis(s) ? 'translateY(0) translateZ(0)' : 'translateY(35px) translateZ(0)',
    filter: vis(s) ? 'blur(0px)' : 'blur(4px)',
    transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1), filter 0.6s ease',
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{ background: '#08080A', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
    >
      {/* Interactive cosmic starfield with mouse hover parallax */}
      <HeroStarfield mouseRef={mouseCurrent} />

      {/* Fine grid — parallax bg layer */}
      <div ref={gridRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', willChange: 'transform' }}>
        <svg width="100%" height="100%" style={{ opacity: 0.025 }}>
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div
        className="cx hero-content-wrap"
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 1,
          opacity: 'var(--hero-content-opacity, 1)' as React.CSSProperties['opacity'],
        }}
      >
        <div className="hero-grid">

          {/* Left: copy */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 36,
                opacity: vis(2) ? 1 : 0,
                transform: vis(2) ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)', flexShrink: 0, opacity: 0.5 }} />
              <span className="tag" style={{ color: 'var(--fg-white-40)', letterSpacing: '0.15em', fontSize: '0.5625rem' }}>
                SOFTWARE ENGINEERING • AI • DIGITAL TRANSFORMATION
              </span>
            </div>

            {/* Headline — 3-line staggered blur+fade reveal */}
            <h1
              style={{
                fontFamily: 'var(--font-sans)', fontWeight: 700,
                fontSize: 'clamp(2.2rem, 4.6vw, 5.6rem)',
                lineHeight: 0.98, letterSpacing: '-0.035em',
                wordBreak: 'keep-all',
                color: 'var(--fg-white)', margin: '0 0 32px',
              }}
            >
              <span className="rv-mask" style={{ display: 'block' }}>
                <span style={lineStyle(3)}>WE BUILD SOFTWARE.</span>
              </span>
              <span className="rv-mask" style={{ display: 'block' }}>
                <span style={lineStyle(4)}>WE ENGINEER</span>
              </span>
              <span className="rv-mask" style={{ display: 'block' }}>
                <span style={lineStyle(5)}>INTELLIGENCE.</span>
              </span>
            </h1>

            {/* Supporting */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)', lineHeight: 1.7,
                color: 'var(--fg-white-70)', maxWidth: 520, margin: '0 0 48px',
                opacity: vis(6) ? 1 : 0,
                transform: vis(6) ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.9s ease, transform 0.9s ease',
              }}
            >
              Acquiring Technology helps businesses turn complex ideas into scalable software products and intelligent AI solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto" style={{ flexWrap: 'wrap' }}>
              <a
                href="#contact"
                className="hero-btn w-full sm:w-auto"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '16px 32px', background: 'var(--red)', color: '#fff',
                  textDecoration: 'none', fontWeight: 600, fontSize: '0.9375rem',
                  letterSpacing: '0.04em', borderRadius: 3,
                  transition: 'background 0.28s, transform 0.2s ease',
                  opacity: vis(7) ? 1 : 0,
                  transform: vis(7) ? 'translateY(0)' : 'translateY(16px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--red-dark)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--red)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                START A PROJECT
                <span
                  style={{ display: 'inline-block', transition: 'transform 0.25s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(5px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  →
                </span>
              </a>
              <a
                href="#what-we-do"
                className="hero-btn w-full sm:w-auto text-center"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  padding: '16px 32px', background: 'transparent', color: 'var(--fg-white)',
                  textDecoration: 'none', fontWeight: 500, fontSize: '0.9375rem',
                  letterSpacing: '0.04em', borderRadius: 3,
                  border: '1px solid var(--void-border)',
                  transition: 'border-color 0.25s, background 0.25s, color 0.25s',
                  opacity: vis(8) ? 1 : 0,
                  transform: vis(8) ? 'translateY(0)' : 'translateY(16px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--red)';
                  e.currentTarget.style.background = 'var(--red)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--void-border)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--fg-white)';
                }}
              >
                EXPLORE OUR SERVICES
              </a>
            </div>
          </div>

          {/* Right: Animated Company Logo */}
          <div
            ref={scrollWrapRef}
            style={{
              opacity: vis(9) ? 1 : 0,
              transition: 'opacity 1.5s ease',
              willChange: 'transform',
              minHeight: 'clamp(520px, 78vh, 880px)',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CosmicHeroPlanet />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          opacity: vis(10) ? 0.6 : 0, transition: 'opacity 1s ease',
        }}
      >
        <span className="tag" style={{ color: 'var(--fg-white-40)', fontSize: '0.5rem', letterSpacing: '0.14em' }}>
          SCROLL TO EXPLORE ↓
        </span>
        <div
          style={{
            width: 1, height: 48,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
            borderRadius: 1, position: 'relative',
          }}
        >
          <div
            style={{
              width: 4, height: 4, borderRadius: '50%',
              background: 'rgba(255,255,255,0.7)',
              position: 'absolute', left: -1.5,
              animation: 'scroll-dot 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}
