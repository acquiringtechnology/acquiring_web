'use client';

import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const SERVICES = [
  {
    num: '01',
    title: 'Technology Acquisition',
    desc: 'Identify, evaluate, negotiate, and execute technology acquisition opportunities that align with strategic objectives and long-term value creation.',
    details: ['Target identification', 'Deal structuring', 'Negotiation support', 'Transaction execution'],
  },
  {
    num: '02',
    title: 'Technical Due Diligence',
    desc: 'Architecture, codebase, security, scalability, infrastructure, technical debt, and IP assessment — a complete technical picture before any decision.',
    details: ['Architecture review', 'Codebase analysis', 'Security assessment', 'Scalability evaluation'],
  },
  {
    num: '03',
    title: 'Technology Valuation',
    desc: 'Evaluate technology maturity, IP value, market opportunity, revenue potential, and strategic value to establish an objective assessment.',
    details: ['IP valuation', 'Market analysis', 'Revenue modelling', 'Strategic fit scoring'],
  },
  {
    num: '04',
    title: 'Technology Integration',
    desc: 'Migration, APIs, cloud integration, data migration, infrastructure consolidation, and product integration — delivered as a structured programme.',
    details: ['Migration planning', 'API integration', 'Data consolidation', 'Team transition'],
  },
  {
    num: '05',
    title: 'Strategic Partnerships',
    desc: 'Licensing, joint ventures, strategic investment, technology commercialization, and product partnerships that create lasting value for all parties.',
    details: ['License structuring', 'Joint venture design', 'Commercialization', 'Partnership governance'],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const fn = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, scrolled / total);
      setProgress(p);
      setActiveIdx(Math.min(SERVICES.length - 1, Math.floor(p * SERVICES.length)));
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [isMobile]);

  const svc = SERVICES[activeIdx];

  return (
    <section id="services" style={{ background: 'var(--surface)' }}>
      {/* Section header */}
      <div className="cx" ref={headRef} style={{ paddingTop: 120, paddingBottom: 60 }}>
        <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 24 }}>
          Our Services
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
            margin: 0,
          }}
        >
          FROM DISCOVERY<br />TO INTEGRATION.
        </h2>
      </div>

      {isMobile ? (
        /* Mobile: stacked cards */
        <div className="cx" style={{ paddingBottom: 80, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {SERVICES.map((s) => (
            <div key={s.num} style={{ borderTop: '1px solid var(--hairline)', padding: '32px 0' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 16 }}>
                <span className="tag" style={{ color: 'var(--copper)', paddingTop: 3, minWidth: 32 }}>{s.num}</span>
                <h3 style={{ fontWeight: 600, fontSize: '1.25rem', letterSpacing: '-0.02em', margin: 0, color: 'var(--ink)' }}>{s.title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.68, color: 'var(--muted)', paddingLeft: 48 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop: scroll-driven pinned section */
        <div ref={containerRef} style={{ height: `${SERVICES.length * 120}vh` }}>
          <div
            style={{
              position: 'sticky',
              top: 0,
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              borderTop: '1px solid var(--hairline)',
            }}
          >
            <div
              className="cx"
              style={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 80,
                alignItems: 'center',
              }}
            >
              {/* Left: service number tabs + progress */}
              <div>
                {/* Progress indicator */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 56, alignItems: 'center' }}>
                  {SERVICES.map((s, i) => (
                    <button
                      key={s.num}
                      onClick={() => {}} // driven by scroll
                      style={{
                        height: 2,
                        flex: 1,
                        background: i <= activeIdx ? 'var(--ink)' : 'var(--hairline)',
                        border: 'none',
                        borderRadius: 1,
                        transition: 'background 0.5s ease',
                        cursor: 'default',
                        padding: 0,
                      }}
                    />
                  ))}
                </div>

                {/* Service nav list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {SERVICES.map((s, i) => (
                    <div
                      key={s.num}
                      style={{
                        padding: '16px 0',
                        borderBottom: '1px solid var(--hairline)',
                        display: 'flex',
                        gap: 20,
                        alignItems: 'center',
                        opacity: i === activeIdx ? 1 : 0.35,
                        transition: 'opacity 0.5s ease',
                      }}
                    >
                      <span
                        className="tag"
                        style={{ color: i === activeIdx ? 'var(--copper)' : 'var(--muted)', minWidth: 28 }}
                      >
                        {s.num}
                      </span>
                      <span
                        style={{
                          fontWeight: i === activeIdx ? 600 : 400,
                          fontSize: '0.9375rem',
                          color: 'var(--ink)',
                          transition: 'font-weight 0.3s',
                        }}
                      >
                        {s.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: active service detail */}
              <div key={activeIdx} style={{ animation: 'step-enter 0.55s cubic-bezier(0.22,1,0.36,1) both' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(4rem, 8vw, 7rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.04em',
                    color: 'var(--hairline)',
                    lineHeight: 1,
                    marginBottom: 32,
                    userSelect: 'none',
                  }}
                >
                  {svc.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                    color: 'var(--ink)',
                    marginBottom: 24,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: '1.0625rem',
                    lineHeight: 1.72,
                    color: 'var(--muted)',
                    marginBottom: 36,
                    maxWidth: 480,
                  }}
                >
                  {svc.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {svc.details.map((d) => (
                    <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--copper)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--ink-60)' }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
