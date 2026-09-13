'use client';

import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import FloatingStars from '../FloatingStars';

const INDUSTRIES = [
  {
    name: 'Healthcare',
    desc: 'HIPAA-compliant platforms, clinical systems, patient engagement, and healthcare data analytics.',
    software: 'Digital health, clinical workflows',
    ai: 'Predictive diagnostics, automation',
  },
  {
    name: 'Financial Services',
    desc: 'Fintech platforms, trading systems, compliance technology, and financial data products.',
    software: 'Core banking, payments, compliance',
    ai: 'Fraud detection, risk modeling',
  },
  {
    name: 'Retail & Commerce',
    desc: 'Commerce platforms, inventory systems, omnichannel technology, and customer intelligence.',
    software: 'E-commerce, POS, supply chain',
    ai: 'Recommendation engines, demand forecasting',
  },
  {
    name: 'Manufacturing',
    desc: 'IoT platforms, production intelligence, supply chain technology, and operational systems.',
    software: 'MES, ERP integrations, IoT',
    ai: 'Predictive maintenance, quality control',
  },
  {
    name: 'Enterprise',
    desc: 'Workflow automation, enterprise applications, business intelligence, and integration platforms.',
    software: 'Enterprise apps, automation, BI',
    ai: 'Process automation, intelligent search',
  },
  {
    name: 'Startups & Scaleups',
    desc: 'From MVPs to scalable platforms — rapid development, product engineering, and growth architecture.',
    software: 'MVP, product engineering',
    ai: 'AI-first product development',
  },
];

export default function Industries() {
  const [hov, setHov] = useState<number | null>(null);
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: gridRef, visible: gridVis } = useScrollReveal(0.06);

  return (
    <section id="industries" style={{ background: 'var(--void)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Floating celestial stars background */}
      <FloatingStars starCount={95} particleSpeed={0.22} />

      <div className="cx" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headRef} style={{ marginBottom: 72 }}>
          <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--fg-white-40)', display: 'block', marginBottom: 24 }}>
            Industries
          </span>
          <h2
            className={`rv ${headVis ? 'in' : ''} d1`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'var(--fg-white)',
              maxWidth: 720,
              margin: 0,
            }}
          >
            TECHNOLOGY THAT UNDERSTANDS YOUR INDUSTRY.
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid-responsive-3"
          style={{
            gap: 1,
            background: 'var(--void-border)',
            border: '1px solid var(--void-border)',
          }}
        >
          {INDUSTRIES.map((ind, i) => {
            const isHov = hov === i;
            return (
              <div
                key={ind.name}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                className={`rv ${gridVis ? 'in' : ''} industry-card`}
                style={{
                  transitionDelay: `${i * 0.06}s`,
                  background: isHov ? 'rgba(24, 24, 30, 0.88)' : 'rgba(10, 10, 14, 0.82)',
                  backdropFilter: 'blur(12px)',
                  borderTop: isHov ? '2px solid var(--red)' : '2px solid transparent',
                  transition: 'background 0.3s ease, border-top-color 0.3s ease',
                  position: 'relative',
                  cursor: 'default',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '1.125rem',
                      letterSpacing: '-0.01em',
                      color: 'var(--fg-white)',
                      margin: 0,
                    }}
                  >
                    {ind.name}
                  </h3>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    style={{
                      color: isHov ? 'var(--red)' : 'var(--fg-white-40)',
                      transform: isHov ? 'translate(3px, -3px)' : 'translate(0,0)',
                      transition: 'color 0.3s, transform 0.3s',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <path d="M3 13L13 3M7 3h6v6" />
                  </svg>
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--fg-white-70)', margin: '0 0 20px' }}>
                  {ind.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <span className="tag" style={{ color: 'var(--fg-white-40)', fontSize: '0.5rem' }}>Software</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--fg-white-70)' }}>{ind.software}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <span className="tag" style={{ color: 'var(--red)', fontSize: '0.5rem' }}>AI</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--fg-white-70)' }}>{ind.ai}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .industry-card { padding: 40px 32px; }
        @media (max-width: 640px) {
          .industry-card { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}
