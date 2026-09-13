'use client';

import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import FloatingStars from '../FloatingStars';

const CAPABILITIES = [

  {
    num: '01',
    title: 'Generative AI',
    desc: 'Build intelligent applications powered by modern foundation models including GPT-4, Claude, Gemini, and open-source alternatives.',
  },
  {
    num: '02',
    title: 'AI Agents',
    desc: 'Create systems that can reason, plan, and execute multi-step workflows with minimal human intervention.',
  },
  {
    num: '03',
    title: 'RAG Systems',
    desc: 'Connect AI models with trusted enterprise knowledge bases for accurate, context-aware responses.',
  },
  {
    num: '04',
    title: 'Machine Learning',
    desc: 'Develop custom predictive models, classification systems, and recommendation engines.',
  },
  {
    num: '05',
    title: 'Computer Vision',
    desc: 'Build systems that understand, classify, and extract insights from images and visual data.',
  },
  {
    num: '06',
    title: 'AI Automation',
    desc: 'Automate complex workflows and augment human decision-making with intelligent process automation.',
  },
];

export default function AISolutions() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: listRef, visible: listVis } = useScrollReveal(0.08);

  return (
    <section id="ai" style={{ background: 'var(--void)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Floating celestial stars background */}
      <FloatingStars starCount={95} particleSpeed={0.22} />

      {/* Grid background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <svg width="100%" height="100%" style={{ opacity: 0.03 }}>
          <defs>
            <pattern id="ai-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ai-grid)" />
        </svg>
      </div>

      <div className="cx" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 80 }}>
          <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--fg-white-40)', display: 'block', marginBottom: 24 }}>
            Artificial Intelligence
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
              maxWidth: 700,
              margin: '0 0 28px',
            }}
          >
            FROM DATA TO INTELLIGENCE.
          </h2>
          <p
            className={`rv ${headVis ? 'in' : ''} d2`}
            style={{ fontSize: '1.0625rem', lineHeight: 1.72, color: 'var(--fg-white-70)', maxWidth: 580, margin: 0 }}
          >
            We help organizations move beyond AI experimentation and build intelligent systems that work in real-world environments.
          </p>
        </div>

        {/* Capability list */}
        <div ref={listRef} style={{ borderTop: '1px solid var(--void-border)' }}>
          {CAPABILITIES.map((cap, i) => {
            const isHov = hovered === i;
            const isFaded = hovered !== null && !isHov;

            return (
              <div
                key={cap.num}
                onClick={() => setHovered(hovered === i ? null : i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`rv ${listVis ? 'in' : ''} ai-capability-item`}
                style={{
                  transitionDelay: `${i * 0.06}s`,
                  borderBottom: '1px solid var(--void-border)',
                  padding: isHov ? '36px 0 36px 16px' : '28px 0 28px 16px',
                  cursor: 'pointer',
                  transition: 'padding 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease',
                  opacity: isFaded ? 0.35 : 1,
                  position: 'relative',
                }}
              >
                {/* Left red accent line */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 2,
                    background: 'var(--red)',
                    transform: isHov ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'top',
                    transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
                    borderRadius: 1,
                  }}
                />

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    color: isHov ? 'var(--red)' : 'var(--fg-white-40)',
                    paddingTop: 4,
                    transition: 'color 0.35s, transform 0.35s',
                    transform: isHov ? 'scale(1.08)' : 'scale(1)',
                    transformOrigin: 'left center',
                    display: 'inline-block',
                  }}
                >
                  {cap.num}
                </span>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: 'clamp(1.15rem, 2.2vw, 1.75rem)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                      color: 'var(--fg-white)',
                      margin: 0,
                      marginBottom: isHov ? 16 : 0,
                      transition: 'margin 0.45s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className="ai-desc-mobile"
                    style={{
                      margin: 0,
                      fontSize: '0.9375rem',
                      lineHeight: 1.68,
                      color: 'var(--fg-white-70)',
                      maxWidth: 540,
                      maxHeight: isHov ? '6em' : 0,
                      overflow: 'hidden',
                      opacity: isHov ? 1 : 0,
                      transition: 'max-height 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease',
                    }}
                  >
                    {cap.desc}
                  </p>
                </div>

                <svg
                  width="20" height="20" viewBox="0 0 20 20" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  style={{
                    color: isHov ? 'var(--red)' : 'var(--void-border)',
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
      <style>{`
        @media (hover: none) {
          .ai-desc-mobile {
            max-height: 8em !important;
            opacity: 0.85 !important;
            margin-top: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
