'use client';

import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CRITERIA = [
  { num: '01', title: 'Technology', desc: 'Maturity, architecture quality, scalability, and defensibility of the core technology stack.' },
  { num: '02', title: 'IP', desc: 'Ownership, breadth, and enforceability of intellectual property, patents, and proprietary methods.' },
  { num: '03', title: 'Market', desc: 'Size, growth trajectory, competitive dynamics, and addressability of the target market.' },
  { num: '04', title: 'Product', desc: 'Product differentiation, user experience, feature depth, and roadmap potential.' },
  { num: '05', title: 'Customers', desc: 'Customer concentration, retention, contract terms, and quality of the existing customer base.' },
  { num: '06', title: 'Revenue', desc: 'Revenue quality, recurring revenue percentage, growth rate, and unit economics.' },
  { num: '07', title: 'Team', desc: 'Technical depth, domain expertise, key-person risk, and team retention post-acquisition.' },
  { num: '08', title: 'Strategic Fit', desc: 'Alignment with our acquisition focus, portfolio synergies, and long-term strategic direction.' },
  { num: '09', title: 'Scalability', desc: 'Technical and operational capacity to grow beyond current scale without fundamental rearchitecting.' },
  { num: '10', title: 'Integration', desc: 'Complexity and feasibility of integrating the technology into existing systems and workflows.' },
];

export default function Criteria() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: gridRef, visible: gridVis } = useScrollReveal(0.06);

  return (
    <section
      style={{
        background: 'var(--void-mid)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blueprint grid overlay */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" style={{ opacity: 0.04 }}>
          <defs>
            <pattern id="bp" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#F5F4F0" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1.5" fill="#F5F4F0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bp)" />
        </svg>
      </div>

      <div className="cx" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 72, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--fg-white-40)', display: 'block', marginBottom: 24 }}>
              Acquisition Criteria
            </span>
            <h2
              className={`rv ${headVis ? 'in' : ''} d1`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 4rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--fg-white)',
                margin: 0,
              }}
            >
              WHAT WE LOOK FOR
            </h2>
          </div>
          <p
            className={`rv ${headVis ? 'in' : ''} d2`}
            style={{
              maxWidth: 380,
              fontSize: '0.9375rem',
              lineHeight: 1.68,
              color: 'var(--fg-white-40)',
              margin: 0,
            }}
          >
            We evaluate technology opportunities across ten dimensions, assessing both standalone merit and strategic potential.
          </p>
        </div>

        {/* Criteria grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1px',
            background: 'var(--fg-white-08)',
          }}
        >
          {CRITERIA.map((c, i) => {
            const isHov = hovered === i;
            return (
              <div
                key={c.num}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`rv ${gridVis ? 'in' : ''}`}
                style={{
                  transitionDelay: `${i * 0.04}s`,
                  padding: '32px 28px',
                  background: isHov ? 'rgba(184,150,106,0.08)' : 'var(--void-mid)',
                  transition: 'background 0.35s ease, padding 0.35s ease',
                  cursor: 'default',
                  position: 'relative',
                  minHeight: 160,
                }}
              >
                <span className="tag" style={{ color: 'var(--copper)', display: 'block', marginBottom: 14 }}>{c.num}</span>
                <h4
                  style={{
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    color: 'var(--fg-white)',
                    margin: 0,
                    marginBottom: 12,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {c.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.8125rem',
                    lineHeight: 1.6,
                    color: 'var(--fg-white-40)',
                    maxHeight: isHov ? '8em' : 0,
                    overflow: 'hidden',
                    opacity: isHov ? 1 : 0,
                    transition: 'max-height 0.4s ease, opacity 0.3s ease',
                  }}
                >
                  {c.desc}
                </p>

                {/* Corner accent */}
                {isHov && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: 24,
                      height: 24,
                      borderTop: '2px solid var(--copper)',
                      borderRight: '2px solid var(--copper)',
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 1024px) { .criteria-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          @media (max-width: 768px)  { .criteria-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        `}</style>
      </div>
    </section>
  );
}
