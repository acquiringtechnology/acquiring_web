'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posTarget = useRef({ x: -100, y: -100 });
  const posCurrent = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const [hoverType, setHoverType] = useState<'default' | 'interactive' | 'svg'>('default');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch desktop
    const isTouch = window.matchMedia('(hover: none)').matches;
    const isSmall = window.innerWidth <= 768;
    if (isTouch || isSmall) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    setVisible(true);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      posCurrent.current.x = lerp(posCurrent.current.x, posTarget.current.x, 0.16);
      posCurrent.current.y = lerp(posCurrent.current.y, posTarget.current.y, 0.16);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posCurrent.current.x}px, ${posCurrent.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    const onMouseMove = (e: MouseEvent) => {
      posTarget.current.x = e.clientX - 10;
      posTarget.current.y = e.clientY - 10;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('svg, [data-cursor="svg"]')) {
        setHoverType('svg');
      } else if (target.closest('a, button, [role="button"], input, select, textarea')) {
        setHoverType('interactive');
      } else {
        setHoverType('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!visible) return null;

  const isInteractive = hoverType === 'interactive';
  const isSvg = hoverType === 'svg';

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: isSvg ? 'none' : isInteractive ? '1px solid rgba(176, 24, 42, 0.6)' : '1.5px solid var(--red)',
        background: isInteractive
          ? 'rgba(176, 24, 42, 0.18)'
          : isSvg
          ? 'var(--red)'
          : 'transparent',
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        transform: `scale(${isInteractive ? 1.5 : isSvg ? 0.35 : 1})`,
        transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.22s ease, border 0.22s ease',
      }}
    />
  );
}
