'use client';

import { useScrollReveal } from '../../hooks/useScrollReveal';

const CAPS = [
  'Product Discovery',
  'UX/UI Design',
  'MVP Development',
  'AI Integration',
  'Cloud Architecture',
  'Product Scaling',
];

export default function StartupSection() {
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: bodyRef, visible: bodyVis } = useScrollReveal(0.08);

  return (
    <section style={{ background: 'var(--sand)', padding: '120px 0' }}>
      <div className="cx">
        <div
          className="grid-responsive-2"
          style={{ gap: 'clamp(36px, 6vw, 80px)', alignItems: 'center' }}
        >
          {/* Left */}
          <div ref={headRef}>
            <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 20 }}>
              FROM IDEA TO PRODUCT
            </span>
            <h2
              className={`rv ${headVis ? 'in' : ''} d1`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                margin: '0 0 24px',
              }}
            >
              HAVE AN IDEA? LET&apos;S BUILD IT.
            </h2>
            <p
              className={`rv ${headVis ? 'in' : ''} d2`}
              style={{ fontSize: '1.0625rem', lineHeight: 1.72, color: 'var(--muted)', margin: '0 0 40px' }}
            >
              From early concepts to production-ready platforms, we help transform ambitious ideas into real digital products.
            </p>

            <div
              ref={bodyRef}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 48 }}
            >
              {CAPS.map((c, i) => (
                <div
                  key={c}
                  className={`rv ${bodyVis ? 'in' : ''}`}
                  style={{ transitionDelay: `${i * 0.06}s`, display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>{c}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                background: 'var(--red)',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9375rem',
                letterSpacing: '0.06em',
                borderRadius: 3,
                transition: 'background 0.25s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--red-dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--red)')}
            >
              BUILD WITH US →
            </a>
          </div>

          {/* Right: SVG product arc */}
          <div className="hide-mob">
            <svg width="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Connection lines */}
              <line x1="80" y1="150" x2="160" y2="100" stroke="var(--hairline)" strokeWidth="1" />
              <line x1="160" y1="100" x2="240" y2="130" stroke="var(--hairline)" strokeWidth="1" />
              <line x1="240" y1="130" x2="320" y2="80" stroke="var(--red)" strokeWidth="1.5" />

              {/* Idea bubble */}
              <circle cx="80" cy="150" r="28" fill="var(--surface)" stroke="var(--hairline)" strokeWidth="1.5" />
              <text x="80" y="147" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="var(--muted)" letterSpacing="0.5">IDEA</text>
              <circle cx="80" cy="158" r="3" fill="var(--red)" />

              {/* Wireframe node */}
              <rect x="132" y="76" width="56" height="48" rx="3" fill="var(--surface)" stroke="var(--hairline)" strokeWidth="1.5" />
              <text x="160" y="97" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="6" fill="var(--muted)" letterSpacing="0.5">DESIGN</text>
              <rect x="142" y="102" width="36" height="4" rx="1" fill="var(--hairline)" />
              <rect x="142" y="110" width="24" height="4" rx="1" fill="var(--hairline)" />

              {/* Code node */}
              <rect x="210" y="106" width="60" height="48" rx="3" fill="var(--surface)" stroke="var(--hairline)" strokeWidth="1.5" />
              <text x="240" y="128" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="6" fill="var(--muted)" letterSpacing="0.5">BUILD</text>
              <text x="225" y="145" fontFamily="var(--font-mono)" fontSize="6" fill="rgba(176,24,42,0.6)">&lt;/&gt;</text>

              {/* Product node */}
              <circle cx="320" cy="80" r="32" fill="var(--red)" opacity="0.08" stroke="var(--red)" strokeWidth="1.5" />
              <text x="320" y="77" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="var(--red)" letterSpacing="0.5">LAUNCH</text>
              <circle cx="320" cy="88" r="4" fill="var(--red)" />

              {/* Labels */}
              <text x="80" y="192" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="var(--muted)" letterSpacing="0.5">Concept</text>
              <text x="160" y="135" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="var(--muted)" letterSpacing="0.5">Wireframe</text>
              <text x="240" y="165" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="var(--muted)" letterSpacing="0.5">Code</text>
              <text x="320" y="126" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="var(--red)" letterSpacing="0.5">Product</text>

              {/* Small dots along path */}
              {[0.25, 0.5, 0.75].map((t, i) => (
                <circle
                  key={i}
                  cx={80 + t * (320 - 80)}
                  cy={150 + t * (80 - 150)}
                  r="2.5"
                  fill="var(--hairline)"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
