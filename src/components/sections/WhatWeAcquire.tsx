'use client';

import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CATEGORIES = [
  {
    num: '01',
    title: 'Software & SaaS',
    desc: 'Enterprise software, SaaS platforms, workflow applications, and vertical software products built to solve real business problems.',
  },
  {
    num: '02',
    title: 'AI & Machine Learning',
    desc: 'AI platforms, machine learning systems, generative AI, computer vision, intelligent automation, and applied AI capabilities.',
  },
  {
    num: '03',
    title: 'Data & Analytics',
    desc: 'Data platforms, analytics products, business intelligence, predictive technology, and proprietary datasets with defensible value.',
  },
  {
    num: '04',
    title: 'Healthcare Technology',
    desc: 'Digital health platforms, clinical technology, healthcare analytics, patient engagement, and regulatory-compliant health systems.',
  },
  {
    num: '05',
    title: 'Enterprise Technology',
    desc: 'Cloud platforms, automation infrastructure, cybersecurity systems, APIs, enterprise integrations, and mission-critical applications.',
  },
  {
    num: '06',
    title: 'Intellectual Property',
    desc: 'Algorithms, software patents, proprietary frameworks, specialized technical capabilities, and technology IP with licensing potential.',
  },
];

export default function WhatWeAcquire() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: listRef, visible: listVis } = useScrollReveal(0.08);

  return (
    <section id="acquire" style={{ background: 'var(--sand)', padding: '120px 0' }}>
      <div className="cx">
        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 72 }}>
          <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 24 }}>
            What We Acquire
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
              maxWidth: 700,
              margin: 0,
            }}
          >
            WE LOOK FOR TECHNOLOGY WITH THE POTENTIAL TO GO FURTHER.
          </h2>
        </div>

        {/* Category list */}
        <div ref={listRef} style={{ borderTop: '1px solid var(--hairline)' }}>
          {CATEGORIES.map((cat, i) => {
            const isHov = hovered === i;
            const isFaded = hovered !== null && !isHov;

            return (
              <div
                key={cat.num}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`rv ${listVis ? 'in' : ''}`}
                style={{
                  transitionDelay: `${i * 0.06}s`,
                  borderBottom: '1px solid var(--hairline)',
                  padding: isHov ? '36px 0' : '28px 0',
                  cursor: 'default',
                  transition: 'padding 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease',
                  opacity: isFaded ? 0.35 : 1,
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  alignItems: 'start',
                  gap: 24,
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    color: isHov ? 'var(--copper)' : 'var(--muted)',
                    paddingTop: 4,
                    transition: 'color 0.35s',
                  }}
                >
                  {cat.num}
                </span>

                {/* Title + desc */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      color: 'var(--ink)',
                      margin: 0,
                      marginBottom: isHov ? 16 : 0,
                      transition: 'margin 0.45s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.9375rem',
                      lineHeight: 1.68,
                      color: 'var(--muted)',
                      maxWidth: 540,
                      maxHeight: isHov ? '6em' : 0,
                      overflow: 'hidden',
                      opacity: isHov ? 1 : 0,
                      transition: 'max-height 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease',
                    }}
                  >
                    {cat.desc}
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  width="20" height="20" viewBox="0 0 20 20" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  style={{
                    color: isHov ? 'var(--copper)' : 'var(--hairline)',
                    transform: isHov ? 'translateX(6px)' : 'translateX(0)',
                    transition: 'color 0.35s, transform 0.35s',
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                >
                  <line x1="2" y1="10" x2="18" y2="10" />
                  <polyline points="12,4 18,10 12,16" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
