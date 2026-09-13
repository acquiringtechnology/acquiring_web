'use client';

import { useEffect, useState } from 'react';

const STAGES = [
  { id: 'hero',       label: 'Discover' },
  { id: 'what-we-do', label: 'Understand' },
  { id: 'software',  label: 'Explore' },
  { id: 'process',   label: 'Process' },
  { id: 'contact',   label: 'Build' },
];

export default function ScrollStageIndicator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    STAGES.forEach((stage, i) => {
      const el = document.getElementById(stage.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      className="scroll-stage-indicator"
      style={{
        position: 'fixed',
        left: 24,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        pointerEvents: 'none',
      }}
    >
      {STAGES.map((stage, i) => {
        const isActive = i === active;
        const isPast = i < active;

        return (
          <div key={stage.id} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: isActive ? 8 : 5,
                height: isActive ? 8 : 5,
                borderRadius: '50%',
                background: isActive ? 'var(--red)' : isPast ? 'var(--fg-white)' : 'rgba(255,255,255,0.25)',
                transition: 'width 0.4s, height 0.4s, background 0.4s',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.5rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--red)' : 'transparent',
                transition: 'color 0.4s',
                whiteSpace: 'nowrap',
                userSelect: 'none',
              }}
            >
              {stage.label}
            </span>
          </div>
        );
      })}

      <style>{`
        @media (max-width: 1100px) {
          .scroll-stage-indicator { display: none !important; }
        }
      `}</style>
    </div>
  );
}
