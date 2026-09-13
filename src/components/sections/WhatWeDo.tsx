'use client';

import { useScrollReveal } from '../../hooks/useScrollReveal';

const CAPS = [
  { num: '01', label: 'SOFTWARE' },
  { num: '02', label: 'AI' },
  { num: '03', label: 'DATA' },
  { num: '04', label: 'CLOUD' },
];

export default function WhatWeDo() {
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: capsRef, visible: capsVis } = useScrollReveal(0.1);

  return (
    <section id="what-we-do" style={{ background: 'var(--surface)' }}>
      <div className="cx sp">
        <div ref={headRef} style={{ marginBottom: 72 }}>
          <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 24 }}>
            WHAT WE DO
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
              maxWidth: 780,
              margin: '0 0 28px',
            }}
          >
            TURNING COMPLEX TECHNOLOGY INTO REAL BUSINESS VALUE.
          </h2>
          <p
            className={`rv ${headVis ? 'in' : ''} d2`}
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.72,
              color: 'var(--muted)',
              maxWidth: 640,
              margin: 0,
            }}
          >
            We combine software engineering, artificial intelligence, product thinking, and modern cloud technologies to build digital solutions that solve meaningful business problems.
          </p>
        </div>

        {/* Capability indicators */}
        <div
          ref={capsRef}
          className="caps-grid"
          style={{
            borderTop: '1px solid var(--hairline)',
            borderBottom: '1px solid var(--hairline)',
          }}
        >
          {CAPS.map((c, i) => (
            <div
              key={c.num}
              className={`rv ${capsVis ? 'in' : ''}`}
              style={{
                transitionDelay: `${i * 0.08}s`,
                padding: '28px 20px',
                borderRight: i < CAPS.length - 1 ? '1px solid var(--hairline)' : 'none',
                display: 'flex',
                gap: 14,
                alignItems: 'baseline',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: 'var(--red)',
                  lineHeight: 1,
                }}
              >
                {c.num}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  color: 'var(--muted)',
                }}
              >
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
