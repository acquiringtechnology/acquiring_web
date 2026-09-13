'use client';

import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const PRINCIPLES = [
  {
    num: '01',
    title: 'ENGINEERING FIRST',
    desc: 'Strong architecture, clean code, scalability, and long-term maintainability at the core of every project.',
  },
  {
    num: '02',
    title: 'AI WITH PURPOSE',
    desc: 'Practical AI solutions focused on measurable business outcomes, not technology for its own sake.',
  },
  {
    num: '03',
    title: 'PRODUCT THINKING',
    desc: 'Users, usability, business goals, and technical execution considered together from day one.',
  },
  {
    num: '04',
    title: 'LONG-TERM PARTNERSHIP',
    desc: 'We continue improving and scaling your product after launch, not just hand over code.',
  },
];

export default function WhyUs() {
  const [hov, setHov] = useState<number | null>(null);
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: gridRef, visible: gridVis } = useScrollReveal(0.08);

  return (
    <section style={{ background: 'var(--surface)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Large background number */}
      <div
        style={{
          position: 'absolute',
          right: -40,
          bottom: -40,
          fontFamily: 'var(--font-mono)',
          fontSize: '20rem',
          fontWeight: 700,
          color: 'var(--ink)',
          opacity: 0.02,
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        04
      </div>

      <div className="cx" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headRef} style={{ marginBottom: 72 }}>
          <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 24 }}>
            Why Acquiring Technology
          </span>
          <h2
            className={`rv ${headVis ? 'in' : ''} d1`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              maxWidth: 680,
              margin: 0,
            }}
          >
            TECHNICAL DEPTH. BUSINESS UNDERSTANDING.
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid-responsive-2"
          style={{
            gap: 1,
            background: 'var(--hairline)',
            border: '1px solid var(--hairline)',
          }}
        >
          {PRINCIPLES.map((p, i) => {
            const isHov = hov === i;
            return (
              <div
                key={p.num}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                className={`rv ${gridVis ? 'in' : ''} why-card`}
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  background: isHov ? 'var(--sand)' : 'var(--surface)',
                  transition: 'background 0.3s ease',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.06em',
                    color: 'var(--red)',
                    display: 'block',
                    marginBottom: 20,
                  }}
                >
                  {p.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '1.0625rem',
                    letterSpacing: '0.04em',
                    color: 'var(--ink)',
                    marginBottom: 16,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.72, color: 'var(--muted)', margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .why-card { padding: 48px; }
        @media (max-width: 640px) {
          .why-card { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}
