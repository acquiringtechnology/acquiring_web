'use client';

import { useScrollReveal } from '../../hooks/useScrollReveal';

const PILLARS = [
  {
    num: '01',
    title: 'Technology First',
    desc: 'We understand the technology before making strategic decisions. Every assessment begins with the architecture, code, and intellectual property.',
  },
  {
    num: '02',
    title: 'Strategic Thinking',
    desc: 'We evaluate opportunities based on long-term value and strategic fit — not short-term arbitrage. Our decisions are grounded in genuine market analysis.',
  },
  {
    num: '03',
    title: 'Confidential Process',
    desc: 'We maintain strict confidentiality throughout all discussions, evaluations, and negotiations. Your technology and business details are protected.',
  },
  {
    num: '04',
    title: 'Integration Support',
    desc: 'Our involvement can continue well beyond the transaction through hands-on technology integration, team transition, and transformation support.',
  },
];

export default function WhyPartner() {
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: gridRef, visible: gridVis } = useScrollReveal(0.08);

  return (
    <section style={{ background: 'var(--surface)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Large decorative "04" */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-2%',
          bottom: '-8%',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(12rem, 20vw, 22rem)',
          fontWeight: 400,
          color: 'var(--ink)',
          opacity: 0.025,
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.06em',
        }}
      >
        04
      </div>

      <div className="cx" style={{ position: 'relative' }}>
        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 88 }}>
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
              margin: 0,
              maxWidth: 640,
            }}
          >
            MORE THAN A BUYER. A TECHNOLOGY PARTNER.
          </h2>
        </div>

        {/* Pillars grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'var(--hairline)',
            border: '1px solid var(--hairline)',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {PILLARS.map((p, i) => (
            <Pillar key={p.num} pillar={p} delay={i * 0.08} visible={gridVis} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pillar-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Pillar({
  pillar,
  delay,
  visible,
}: {
  pillar: (typeof PILLARS)[0];
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      className={`rv ${visible ? 'in' : ''}`}
      style={{
        transitionDelay: `${delay}s`,
        padding: '52px 48px',
        background: 'var(--surface)',
        transition: 'background 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--sand)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--surface)')}
    >
      <span className="tag" style={{ color: 'var(--copper)', display: 'block', marginBottom: 20 }}>
        {pillar.num}
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: '1.375rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          color: 'var(--ink)',
          marginBottom: 16,
        }}
      >
        {pillar.title}
      </h3>
      <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--muted)' }}>
        {pillar.desc}
      </p>
    </div>
  );
}
