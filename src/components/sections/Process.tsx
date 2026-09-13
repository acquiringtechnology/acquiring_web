'use client';

import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import FloatingStars from '../FloatingStars';

const STEPS = [
  {
    num: '01',
    title: 'DISCOVER',
    desc: 'Understand your goals, users, constraints, and technical context.',
  },
  {
    num: '02',
    title: 'DEFINE',
    desc: 'Scope the solution, define success criteria, and plan the architecture.',
  },
  {
    num: '03',
    title: 'DESIGN',
    desc: 'Create user experiences, system designs, and technical blueprints.',
  },
  {
    num: '04',
    title: 'BUILD',
    desc: 'Engineer, test, and iterate on the software or AI solution.',
  },
  {
    num: '05',
    title: 'DEPLOY',
    desc: 'Launch to production with monitoring, security, and infrastructure in place.',
  },
  {
    num: '06',
    title: 'EVOLVE',
    desc: 'Continuously improve, optimize, and scale based on real-world usage.',
  },
];

// Clean, medium-speed typewriter text animation
function TypewriterText({
  text,
  stepKey,
  speed = 36, // medium typing speed
}: {
  text: string;
  stepKey: number | string;
  speed?: number;
}) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedCount(0);
    setIsTyping(true);

    let currentIdx = 0;
    const totalLength = text.length;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      if (currentIdx < totalLength) {
        currentIdx++;
        setDisplayedCount(currentIdx);

        // Natural typing cadence with brief pauses at punctuation
        const char = text[currentIdx - 1];
        let delay = speed;
        if (char === ',' || char === ';') {
          delay = speed + 90;
        } else if (char === '.') {
          delay = speed + 140;
        }

        timeoutId = setTimeout(typeNext, delay);
      } else {
        setIsTyping(false);
      }
    };

    // Brief initial delay before typing commences
    timeoutId = setTimeout(typeNext, 120);

    return () => clearTimeout(timeoutId);
  }, [text, stepKey, speed]);

  return (
    <span
      style={{
        display: 'inline',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        position: 'relative',
      }}
    >
      <span style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
        {text.slice(0, displayedCount)}
      </span>

      {/* High-tech typing cursor */}
      <span
        style={{
          display: 'inline-block',
          width: 3,
          height: '1.15em',
          background: 'var(--red)',
          boxShadow: '0 0 10px var(--red)',
          marginLeft: 3,
          verticalAlign: 'middle',
          borderRadius: 1,
          animation: isTyping ? 'none' : 'cursor-blink 1.2s ease-in-out infinite',
          opacity: isTyping ? 1 : undefined,
        }}
      />
    </span>
  );
}

const STEP_INTERVAL_MS = 5200;

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: stepsRef, visible: stepsVis } = useScrollReveal(0.08);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Continuous auto-advancing loop through steps 1 to 6
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, STEP_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPaused, activeStep]);

  const jumpToStep = (idx: number) => {
    setActiveStep(idx);
    setIsPaused(true);
    const item = timelineItemRefs.current[idx];
    const container = timelineContainerRef.current;
    if (item && container) {
      const itemLeft = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: itemLeft - containerWidth / 2 + itemWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  const nextStep = () => {
    if (activeStep < STEPS.length - 1) {
      jumpToStep(activeStep + 1);
    } else {
      jumpToStep(0);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      jumpToStep(activeStep - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextStep();
    } else if (diff < -45) {
      prevStep();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Progress line width calculation
  const progressPct = activeStep === 0 ? 0 : (activeStep / (STEPS.length - 1)) * 84;

  return (
    <section id="process" ref={sectionRef} style={{ background: 'var(--surface)', padding: 'clamp(64px, 8vw, 120px) 0' }}>
      <div className="cx">
        <div ref={headRef} style={{ marginBottom: 'clamp(36px, 5vw, 64px)' }}>
          <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 16 }}>
            Our Process
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
              maxWidth: 600,
            }}
          >
            FROM IDEA TO PRODUCTION.
          </h2>
        </div>

        <div ref={stepsRef}>
          {/* Responsive timeline */}
          <div
            ref={timelineContainerRef}
            className="process-timeline"
            style={{
              position: 'relative',
            }}
          >
            {/* Track line (desktop & mobile) */}
            <div className="process-track-line" />
            {/* Progress fill — smooth width transition */}
            <div
              className="process-progress-line"
              style={{
                width: `${progressPct}%`,
              }}
            />

            {STEPS.map((step, i) => {
              const isActive = i === activeStep;
              const isPast = i < activeStep;

              return (
                <div
                  key={step.num}
                  ref={(el) => { timelineItemRefs.current[i] = el; }}
                  onClick={() => jumpToStep(i)}
                  className={`process-timeline-item rv ${stepsVis ? 'in' : ''}`}
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
                  <div
                    className="process-step-circle"
                    style={{
                      borderRadius: '50%',
                      border: `1.5px solid ${i <= activeStep ? 'var(--red)' : 'var(--hairline)'}`,
                      background: isActive ? 'var(--red)' : isPast ? 'var(--red-pale)' : 'var(--surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.35s ease',
                      transform: isActive ? 'scale(1.1)' : 'scale(1)',
                      boxShadow: isActive ? '0 4px 14px rgba(176,24,42,0.3)' : 'none',
                    }}
                  >
                    <span
                      className="tag process-step-num"
                      style={{
                        color: isActive ? '#fff' : isPast ? 'var(--red)' : 'var(--muted)',
                        letterSpacing: '0.06em',
                        fontWeight: isActive ? 700 : 500,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <span
                    className="process-step-title"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--ink)' : 'var(--muted)',
                      transition: 'color 0.35s ease, font-weight 0.3s ease',
                      textAlign: 'center',
                    }}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active step detail card (Responsive on all viewports) */}
          <div
            className="process-card"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Floating stars animation in dark card background */}
            <FloatingStars starCount={48} particleSpeed={0.2} />

            <div
              key={activeStep}
              className="process-card-grid"
            >
              <div>
                {/* Phase status indicator tag */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12,
                    padding: '3px 10px',
                    borderRadius: 4,
                    background: 'rgba(224, 32, 48, 0.12)',
                    border: '1px solid rgba(224, 32, 48, 0.28)',
                    animation: 'title-reveal 0.45s cubic-bezier(0.16, 1, 0.3, 1) both',
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: 'var(--red)',
                      boxShadow: '0 0 8px var(--red)',
                      animation: 'cursor-blink 1.2s ease-in-out infinite',
                    }}
                  />
                  <span
                    className="tag"
                    style={{
                      color: 'var(--red)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.14em',
                      fontWeight: 700,
                    }}
                  >
                    PHASE // {STEPS[activeStep].num}
                  </span>
                </div>

                {/* Giant Monospace Step Watermark */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(3.2rem, 7vw, 5.5rem)',
                    color: 'var(--red)',
                    lineHeight: 1,
                    marginBottom: 8,
                    letterSpacing: '-0.04em',
                    userSelect: 'none',
                    animation: 'num-reveal 0.55s cubic-bezier(0.16, 1, 0.3, 1) both',
                  }}
                >
                  {STEPS[activeStep].num}
                </div>

                {/* Title */}
                <div style={{ overflow: 'hidden' }}>
                  <h3
                    key={`title-${activeStep}`}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700,
                      fontSize: 'clamp(1.5rem, 3.8vw, 2.6rem)',
                      letterSpacing: '-0.02em',
                      color: 'var(--fg-white)',
                      margin: 0,
                      animation: 'title-expand 0.55s cubic-bezier(0.16, 1, 0.3, 1) both',
                    }}
                  >
                    {STEPS[activeStep].title}
                  </h3>
                </div>
              </div>

              {/* Authentic Medium-Speed Typewriter Text Animation */}
              <div style={{ position: 'relative', minHeight: 'clamp(3.8rem, 6vw, 4.8rem)', display: 'flex', alignItems: 'center' }}>
                <p
                  style={{
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.35rem)',
                    lineHeight: 1.7,
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontWeight: 400,
                    margin: 0,
                    maxWidth: 680,
                  }}
                >
                  <TypewriterText text={STEPS[activeStep].desc} stepKey={activeStep} speed={36} />
                </p>
              </div>
            </div>

            {/* Subtle bottom time-progress indicator for the active card */}
            <div
              key={`progress-${activeStep}`}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 2,
                background: 'linear-gradient(to right, var(--red), rgba(224, 32, 48, 0.4))',
                transformOrigin: 'left',
                animation: isPaused ? 'none' : 'step-card-progress 5.2s linear forwards',
              }}
            />
          </div>

          {/* Mobile-Only Previous & Next Navigation Controls */}
          <div
            className="mobile-process-nav-bar"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
              marginTop: 14,
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
            }}
          >
            <button
              type="button"
              onClick={prevStep}
              disabled={activeStep === 0}
              aria-label="Previous Phase"
              style={{
                flex: '1 1 0px',
                minWidth: 0,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                padding: '11px 10px',
                borderRadius: 8,
                border: activeStep === 0 ? '1px solid #E2E2E0' : '1px solid var(--hairline)',
                background: activeStep === 0 ? '#EEEEEC' : 'var(--sand)',
                color: activeStep === 0 ? '#9999A0' : 'var(--ink)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.02em',
                cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                opacity: activeStep === 0 ? 0.75 : 1,
                transition: 'all 0.2s ease',
                boxShadow: activeStep === 0 ? 'none' : '0 2px 8px rgba(0,0,0,0.04)',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13L5 8l5-5" />
              </svg>
              <span>PREVIOUS</span>
            </button>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--red)',
                background: 'rgba(176,24,42,0.08)',
                padding: '7px 12px',
                borderRadius: 20,
                border: '1px solid rgba(176,24,42,0.2)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.04em',
                flexShrink: 0,
                boxSizing: 'border-box',
              }}
            >
              {activeStep + 1} / {STEPS.length}
            </div>

            <button
              type="button"
              onClick={nextStep}
              aria-label="Next Phase"
              style={{
                flex: '1 1 0px',
                minWidth: 0,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                padding: '11px 10px',
                borderRadius: 8,
                border: '1px solid var(--red)',
                background: 'var(--red)',
                color: '#fff',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.02em',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(176,24,42,0.25)',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
              }}
            >
              <span>{activeStep === STEPS.length - 1 ? 'RESTART ↺' : 'NEXT'}</span>
              {activeStep !== STEPS.length - 1 && (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .process-timeline {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0;
          margin-bottom: 64px;
        }
        .process-track-line {
          position: absolute;
          top: 18px;
          left: 8%;
          right: 8%;
          height: 1px;
          background: var(--hairline);
          z-index: 0;
        }
        .process-progress-line {
          position: absolute;
          top: 18px;
          left: 8%;
          height: 2px;
          background: var(--red);
          transition: width 0.6s cubic-bezier(0.22,1,0.36,1);
          z-index: 1;
        }
        .process-step-circle {
          width: 38px;
          height: 38px;
          margin-bottom: 12px;
        }
        .process-step-num {
          font-size: 0.625rem;
        }
        .process-step-title {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          white-space: nowrap;
        }
        .process-card {
          padding: 48px;
          border: 1px solid var(--hairline);
          border-radius: 8px;
          background: var(--void);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
        }
        .process-card-grid {
          display: grid;
          grid-template-columns: minmax(200px, 1fr) minmax(320px, 2fr);
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 768px) {
          #process {
            padding-top: 48px !important;
            padding-bottom: 110px !important;
          }
          .process-timeline {
            display: grid !important;
            grid-template-columns: repeat(6, 1fr) !important;
            gap: 2px !important;
            margin-bottom: 24px !important;
            padding: 0 !important;
            width: 100% !important;
          }
          .process-track-line {
            top: 16px !important;
            left: calc(100% / 12) !important;
            right: calc(100% / 12) !important;
          }
          .process-progress-line {
            top: 16px !important;
            left: calc(100% / 12) !important;
          }
          .process-step-circle {
            width: 32px !important;
            height: 32px !important;
            margin-bottom: 6px !important;
          }
          .process-step-num {
            font-size: 0.5625rem !important;
          }
          .process-step-title {
            font-size: clamp(0.5rem, 1.7vw, 0.65rem) !important;
            letter-spacing: 0.03em !important;
            white-space: normal !important;
            line-height: 1.15 !important;
          }
          .process-card {
            padding: 24px 16px;
          }
          .process-card-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            align-items: start;
          }
          .mobile-process-nav-bar {
            display: flex !important;
          }
        }
        @keyframes cyber-shimmer-sweep {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .cyber-text-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0.95) 35%,
            #ff6b8b 50%,
            rgba(255, 255, 255, 0.95) 65%,
            rgba(255, 255, 255, 0.95) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: cyber-shimmer-sweep 1.6s cubic-bezier(0.16, 1, 0.3, 1) 1 forwards;
        }
        @keyframes title-expand {
          0% {
            opacity: 0;
            transform: translateY(100%);
            letter-spacing: 0.12em;
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: -0.02em;
            filter: blur(0px);
          }
        }
        @keyframes num-reveal {
          0% {
            opacity: 0;
            transform: scale(0.88);
          }
          100% {
            opacity: 0.28;
            transform: scale(1);
          }
        }
        @keyframes title-reveal {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes cursor-fast-pulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.3; transform: scaleY(0.85); }
        }
        @keyframes step-card-progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
