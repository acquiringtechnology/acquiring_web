'use client';

import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const STEPS = [
  {
    num: '01',
    title: 'SUBMIT',
    desc: 'Tell Acquiring Technology about your technology, company, or opportunity. We review all submissions with care and confidentiality.',
  },
  {
    num: '02',
    title: 'EVALUATE',
    desc: 'We review the technology, business model, IP, market position, and strategic fit against our acquisition criteria.',
  },
  {
    num: '03',
    title: 'ASSESS',
    desc: 'We perform deeper technical, commercial, and operational due diligence on opportunities that meet our initial evaluation.',
  },
  {
    num: '04',
    title: 'STRUCTURE',
    desc: 'We work together to determine the right acquisition or partnership structure that reflects the value of what has been built.',
  },
  {
    num: '05',
    title: 'EXECUTE',
    desc: 'We complete the transaction and provide ongoing support for integration, transition, and transformation.',
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: stepsRef, visible: stepsVis } = useScrollReveal(0.08);

  return (
    <section
      id="process"
      style={{
        background: 'var(--void)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <svg width="100%" height="100%" style={{ opacity: 0.03 }}>
          <defs>
            <pattern id="grid-dark" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#F5F4F0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dark)" />
        </svg>
      </div>

      <div className="cx" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 88 }}>
          <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--fg-white-40)', display: 'block', marginBottom: 24 }}>
            How It Works
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
              margin: 0,
              maxWidth: 700,
            }}
          >
            A CLEAR PATH FROM FIRST CONVERSATION TO TECHNOLOGY INTEGRATION.
          </h2>
        </div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div ref={stepsRef}>
          {/* Connecting line (desktop) */}
          <div
            className="hide-mob"
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: `repeat(${STEPS.length}, 1fr)`,
              gap: 0,
              marginBottom: 64,
            }}
          >
            {/* Track line */}
            <div
              style={{
                position: 'absolute',
                top: 18,
                left: '10%',
                right: '10%',
                height: 1,
                background: 'var(--void-border)',
                zIndex: 0,
              }}
            />
            {/* Progress fill */}
            <div
              style={{
                position: 'absolute',
                top: 18,
                left: '10%',
                width: `${(activeStep / (STEPS.length - 1)) * 80}%`,
                height: 1,
                background: 'var(--copper)',
                transition: 'width 0.6s cubic-bezier(0.22,1,0.36,1)',
                zIndex: 1,
              }}
            />

            {STEPS.map((step, i) => (
              <div
                key={step.num}
                onClick={() => setActiveStep(i)}
                className={`rv ${stepsVis ? 'in' : ''}`}
                style={{
                  transitionDelay: `${i * 0.07}s`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* Step dot */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: `1.5px solid ${i <= activeStep ? 'var(--copper)' : 'var(--void-border)'}`,
                    background: i === activeStep ? 'var(--copper)' : i < activeStep ? 'var(--void-mid)' : 'var(--void)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s ease',
                    marginBottom: 24,
                  }}
                >
                  <span
                    className="tag"
                    style={{ color: i === activeStep ? 'var(--ink)' : i < activeStep ? 'var(--copper)' : 'var(--fg-white-40)', letterSpacing: '0.06em', fontSize: '0.5625rem' }}
                  >
                    {step.num}
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    color: i === activeStep ? 'var(--fg-white)' : 'var(--fg-white-40)',
                    transition: 'color 0.35s',
                    textAlign: 'center',
                  }}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Active step detail (desktop) */}
          <div
            className="hide-mob"
            key={activeStep}
            style={{
              padding: '48px',
              border: '1px solid var(--void-border)',
              borderRadius: 8,
              animation: 'step-enter 0.5s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'center' }}>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '5rem',
                    color: 'var(--fg-white-08)',
                    lineHeight: 1,
                    marginBottom: 16,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {STEPS[activeStep].num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '2rem',
                    letterSpacing: '-0.02em',
                    color: 'var(--fg-white)',
                    margin: 0,
                  }}
                >
                  {STEPS[activeStep].title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                  color: 'var(--fg-white-70)',
                  margin: 0,
                }}
              >
                {STEPS[activeStep].desc}
              </p>
            </div>
          </div>

          {/* Mobile: vertical list */}
          <div className="show-mob" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`rv ${stepsVis ? 'in' : ''}`}
                style={{
                  transitionDelay: `${i * 0.07}s`,
                  padding: '28px 0',
                  borderBottom: '1px solid var(--void-border)',
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: 16,
                }}
              >
                <span className="tag" style={{ color: 'var(--copper)', paddingTop: 3 }}>{step.num}</span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '0.1em', color: 'var(--fg-white)', margin: '0 0 10px' }}>{step.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--fg-white-70)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
