'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: bodyRef, visible: bodyVis } = useScrollReveal(0.08);

  return (
    <section
      id="about"
      style={{
        background: 'var(--void-mid)',
        padding: '120px 0',
        borderTop: '1px solid var(--void-border)',
      }}
    >
      <div className="cx">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
          {/* Left */}
          <div ref={headRef}>
            <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--fg-white-40)', display: 'block', marginBottom: 28 }}>
              About
            </span>
            <h2
              className={`rv ${headVis ? 'in' : ''} d1`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(1.875rem, 3.5vw, 3.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--fg-white)',
                margin: 0,
              }}
            >
              BUILDING THE FUTURE THROUGH TECHNOLOGY.
            </h2>
          </div>

          {/* Right */}
          <div ref={bodyRef}>
            <p
              className={`rv ${bodyVis ? 'in' : ''}`}
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.75,
                color: 'var(--fg-white-70)',
                marginBottom: 52,
              }}
            >
              We work at the intersection of technology, business strategy, and opportunity. Our focus is identifying valuable technology capabilities and creating pathways for their continued growth through acquisition, partnership, and strategic transformation.
            </p>

            <div className="about-mv" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
              {[
                {
                  label: 'Mission',
                  text: 'To identify valuable technology and create new opportunities for the people and businesses behind it.',
                },
                {
                  label: 'Vision',
                  text: 'To become a trusted global partner for technology acquisition and strategic technology growth.',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rv ${bodyVis ? 'in' : ''} d2`}
                  style={{ borderTop: '1px solid var(--void-border)', paddingTop: 28 }}
                >
                  <span className="tag" style={{ color: 'var(--red)', display: 'block', marginBottom: 16 }}>
                    {item.label}
                  </span>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.68, color: 'var(--fg-white-70)' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-mv { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
