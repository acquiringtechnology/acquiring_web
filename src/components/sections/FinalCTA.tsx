'use client';

import { useEffect, useRef, useState } from 'react';

// Red animated dots config — positions relative to button group
const DOTS = [
  { x: -40, y: -20, delay: 0, duration: 3.2 },
  { x: -20, y: 30, delay: 0.8, duration: 3.8 },
  { x: 40, y: -30, delay: 1.4, duration: 3.0 },
  { x: 60, y: 20, delay: 0.3, duration: 4.1 },
  { x: -60, y: 10, delay: 1.8, duration: 3.5 },
  { x: 80, y: -10, delay: 0.6, duration: 3.7 },
];

export default function FinalCTA({ onTalkToExperts }: { onTalkToExperts?: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setLine1(true), 0);
          setTimeout(() => setLine2(true), 120);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--void)',
        padding: '160px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated drifting grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ animation: 'grid-drift 12s linear infinite', height: 'calc(100% + 48px)' }}>
          <svg width="100%" height="100%" style={{ opacity: 0.04 }}>
            <defs>
              <pattern id="final-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#fff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#final-grid)" />
          </svg>
        </div>
      </div>

      {/* Radial red glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(176,24,42,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="cx" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: 'var(--fg-white)',
            margin: '0 0 28px',
          }}
        >
          {/* Line 1 */}
          <span
            style={{
              display: 'block',
              clipPath: line1 ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
              transition: 'clip-path 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            READY TO BUILD
          </span>
          {/* Line 2 */}
          <span
            style={{
              display: 'block',
              clipPath: line2 ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
              transition: 'clip-path 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            WHAT&apos;S NEXT?
          </span>
        </h2>
        <p
          style={{
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            color: 'var(--fg-white-70)',
            maxWidth: 540,
            margin: '0 auto 56px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
          }}
        >
          Let&apos;s turn your idea, challenge, or opportunity into technology that creates real value.
        </p>

        {/* Button group with red animated dots */}
        <div
          style={{
            display: 'inline-flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            position: 'relative',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.9s ease 0.45s, transform 0.9s ease 0.45s',
          }}
        >
          {/* Animated pulse dots */}
          {visible && DOTS.map((dot, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `calc(50% + ${dot.x}px)`,
                top: `calc(50% + ${dot.y}px)`,
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: 'var(--red)',
                pointerEvents: 'none',
                animation: `pulse-dot ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
              }}
            />
          ))}

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '18px 40px',
              background: 'var(--red)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9375rem',
              letterSpacing: '0.06em',
              borderRadius: 3,
              transition: 'background 0.25s, transform 0.2s ease',
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
            START A PROJECT{' '}
            <span style={{ display: 'inline-block', transition: 'transform 0.25s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(5px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}
            >→</span>
          </a>
          <button
            onClick={onTalkToExperts}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '18px 40px',
              background: 'transparent',
              color: 'var(--fg-white)',
              fontWeight: 500,
              fontSize: '0.9375rem',
              letterSpacing: '0.06em',
              borderRadius: 3,
              border: '1px solid var(--void-border)',
              cursor: 'pointer',
              transition: 'border-color 0.25s, background 0.25s, color 0.25s',
              fontFamily: 'var(--font-sans)',
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
            TALK TO OUR EXPERTS
          </button>
        </div>
      </div>
    </section>
  );
}
