'use client';

import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Introduction() {
  const { ref: leftRef, visible: leftVis } = useScrollReveal(0.15);
  const { ref: rightRef, visible: rightVis } = useScrollReveal(0.15);

  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: '128px 0',
        borderTop: '1px solid var(--hairline)',
      }}
    >
      <div
        className="cx"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left — large editorial statement */}
        <div ref={leftRef}>
          <h2
            className={`rv ${leftVis ? 'in' : ''}`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              margin: '0 0 28px',
            }}
          >
            TECHNOLOGY IS MORE THAN A PRODUCT.
          </h2>
          <p
            className={`rv ${leftVis ? 'in' : ''} d1`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: 1.55,
              letterSpacing: '-0.01em',
              color: 'var(--muted)',
              margin: 0,
            }}
          >
            {"It's capability, intellectual property, people, data, infrastructure, and future potential."}
          </p>

          {/* Brand signature */}
          <div
            className={`rv ${leftVis ? 'in' : ''} d3`}
            style={{
              marginTop: 64,
              paddingTop: 28,
              borderTop: '1px solid var(--hairline)',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.8125rem', letterSpacing: '0.08em', color: 'var(--ink)' }}>
              ACQUIRING TECHNOLOGY
            </span>
            <span className="tag" style={{ color: 'var(--muted)' }}>
              / Technology Acquisition &amp; Strategic Services
            </span>
          </div>
        </div>

        {/* Right — supporting content */}
        <div ref={rightRef} style={{ paddingTop: 8 }}>
          <p
            className={`rv ${rightVis ? 'in' : ''} d1`}
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: 'var(--muted)',
              marginBottom: 40,
            }}
          >
            Acquiring Technology looks beyond the surface of a business to understand the technology underneath it — its architecture, intellectual property, market opportunity, scalability, and strategic value.
          </p>

          <div className={`rv ${rightVis ? 'in' : ''} d2`} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { label: 'Evaluate', text: 'We assess technology on its merits — architecture, IP, market position, and strategic fit.' },
              { label: 'Acquire', text: 'We structure acquisitions that reflect the true value of what has been built.' },
              { label: 'Integrate', text: 'We support the transition and transformation of technology into its next chapter.' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <span className="tag" style={{ color: 'var(--copper)', paddingTop: 4, minWidth: 70 }}>
                  {item.label}
                </span>
                <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--ink-60)' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .intro-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
