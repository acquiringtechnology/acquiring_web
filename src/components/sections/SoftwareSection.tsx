'use client';

import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const STAGES = [
  {
    num: '01',
    title: 'DISCOVERY',
    desc: 'Understand business goals, users, workflows, and technical requirements.',
    details: ['Stakeholder interviews', 'Requirements mapping', 'User research', 'Technical landscape audit'],
  },
  {
    num: '02',
    title: 'ARCHITECTURE',
    desc: 'Design scalable systems, APIs, infrastructure, and technical foundations.',
    details: ['System design', 'API architecture', 'Infrastructure planning', 'Technology selection'],
  },
  {
    num: '03',
    title: 'EXPERIENCE',
    desc: 'Design intuitive user experiences and interfaces.',
    details: ['UX research', 'Wireframing', 'UI design', 'Prototype validation'],
  },
  {
    num: '04',
    title: 'ENGINEERING',
    desc: 'Build secure, maintainable, production-ready software.',
    details: ['Agile development', 'Code review', 'Security practices', 'Continuous integration'],
  },
  {
    num: '05',
    title: 'QUALITY',
    desc: 'Testing, security, performance, and reliability assurance.',
    details: ['Automated testing', 'Security scanning', 'Performance testing', 'Accessibility audit'],
  },
  {
    num: '06',
    title: 'SCALE',
    desc: 'Cloud deployment, monitoring, optimization, and continuous improvement.',
    details: ['Cloud deployment', 'Monitoring & alerting', 'Performance tuning', 'Continuous evolution'],
  },
];

export default function SoftwareSection() {
  const containerRef = useRef<HTMLElement>(null);
  const pillContainerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 960);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Sticky Scroll Locking: User manually scrolls through all 6 stages (auto-scroll disabled)
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;

      // Inside sticky pinning zone
      if (currentScroll >= 0 && currentScroll <= totalScrollable) {
        const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

        // Map progress across 6 stages cleanly
        const stageIdx = Math.min(
          STAGES.length - 1,
          Math.floor(progress * STAGES.length)
        );

        setActiveIdx(stageIdx);
      } else if (currentScroll < 0) {
        setActiveIdx(0);
      } else if (currentScroll > totalScrollable) {
        setActiveIdx(STAGES.length - 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Jump to stage with smooth window scroll sync
  const jumpToStage = (idx: number) => {
    setActiveIdx(idx);
    const pill = pillRefs.current[idx];
    const container = pillContainerRef.current;
    if (pill && container) {
      const pillLeft = pill.offsetLeft;
      const pillWidth = pill.offsetWidth;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: pillLeft - containerWidth / 2 + pillWidth / 2,
        behavior: 'smooth',
      });
    }

    if (!isMobile) {
      const containerEl = containerRef.current;
      if (!containerEl) return;
      const rect = containerEl.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const targetProgress = (idx + 0.5) / STAGES.length;
      const targetY = window.scrollY + rect.top + targetProgress * totalScrollable;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  const nextStage = () => {
    if (activeIdx < STAGES.length - 1) {
      jumpToStage(activeIdx + 1);
    } else {
      jumpToStage(0);
    }
  };

  const prevStage = () => {
    if (activeIdx > 0) {
      jumpToStage(activeIdx - 1);
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
      // Swiped left -> NEXT
      nextStage();
    } else if (diff < -45) {
      // Swiped right -> PREVIOUS
      prevStage();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="software"
      ref={containerRef}
      style={{
        background: 'var(--surface)',
        position: 'relative',
        // Pinning scroll track: each stage gets dedicated scroll distance so all 6 are viewed before unpinning
        height: isMobile ? 'auto' : 'calc(100vh + 5 * 65vh)',
      }}
    >
      {/* Sticky container positioned cleanly below the 72px fixed navbar */}
      <div
        className="software-sticky-wrap"
        style={{
          position: isMobile ? 'relative' : 'sticky',
          top: isMobile ? 0 : 72,
          height: isMobile ? 'auto' : 'calc(100vh - 72px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: isMobile ? 48 : 'clamp(16px, 3vh, 32px)',
          paddingBottom: isMobile ? 110 : 'clamp(20px, 3.5vh, 40px)',
          overflow: isMobile ? 'visible' : 'hidden',
        }}
      >
        {/* Section header */}
        <div className="cx software-cx" ref={headRef} style={{ marginBottom: 'clamp(16px, 2.5vh, 28px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block' }}>
              Software Engineering
            </span>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                color: 'var(--red)',
                background: 'rgba(224, 32, 48, 0.08)',
                padding: '4px 10px',
                borderRadius: 4,
                border: '1px solid rgba(224, 32, 48, 0.2)',
              }}
            >
              STAGE {activeIdx + 1} OF 6
            </div>
          </div>

          <h2
            className={`rv ${headVis ? 'in' : ''} d1`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(1.85rem, 3.8vw, 3.8rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              margin: '12px 0 0',
            }}
          >
            BUILT FOR TODAY.<br />ENGINEERED FOR WHAT&apos;S NEXT.
          </h2>
        </div>

        <div className="cx software-cx">
          {/* Top Segmented Progress Bar (Manual, strictly reflects active stage without auto-scroll animation) */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 'clamp(20px, 3vh, 32px)', alignItems: 'center' }}>
            {STAGES.map((s, i) => (
              <div
                key={s.num}
                onClick={() => jumpToStage(i)}
                title={`Jump to ${s.num} ${s.title}`}
                style={{
                  height: 4,
                  flex: 1,
                  background: i <= activeIdx ? 'var(--red)' : 'var(--hairline)',
                  borderRadius: 2,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background 0.3s ease',
                }}
              />
            ))}
          </div>

          {/* Responsive Mobile Pills */}
          {isMobile && (
            <div
              ref={pillContainerRef}
              className="software-pill-strip"
              style={{
                display: 'flex',
                gap: 8,
                overflowX: 'auto',
                paddingBottom: 14,
                marginBottom: 16,
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                width: '100%',
                maxWidth: '100%',
                minWidth: 0,
                boxSizing: 'border-box',
              }}
            >
              {STAGES.map((s, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={s.num}
                    ref={(el) => { pillRefs.current[i] = el; }}
                    onClick={() => jumpToStage(i)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: 20,
                      border: `1px solid ${isActive ? 'var(--red)' : 'var(--hairline)'}`,
                      background: isActive ? 'rgba(176,24,42,0.08)' : 'transparent',
                      color: isActive ? 'var(--red)' : 'var(--muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.04em',
                      fontWeight: isActive ? 600 : 400,
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <span>{s.num}</span>
                    <span>{s.title}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Main 2-Column Grid: Aligned flush at top for uniform alignment */}
          <div className="software-main-grid">
            {/* Left: Stage Navigation (Desktop) - Uniformly spaced and height-matched with right card */}
            {!isMobile && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: 440,
                }}
              >
                {STAGES.map((s, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <div
                      key={s.num}
                      onClick={() => jumpToStage(i)}
                      style={{
                        padding: '14px 0',
                        borderBottom: i < STAGES.length - 1 ? '1px solid var(--hairline)' : 'none',
                        display: 'flex',
                        gap: 20,
                        alignItems: 'center',
                        cursor: 'pointer',
                        position: 'relative',
                        opacity: isActive ? 1 : 0.38,
                        transform: isActive ? 'translateX(8px)' : 'translateX(0)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                      }}
                    >
                      {/* Active accent tick mark */}
                      <div
                        style={{
                          position: 'absolute',
                          left: -16,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 3,
                          height: isActive ? 22 : 0,
                          background: 'var(--red)',
                          borderRadius: 2,
                          transition: 'height 0.3s ease',
                        }}
                      />
                      <span
                        className="tag"
                        style={{
                          color: isActive ? 'var(--red)' : 'var(--muted)',
                          minWidth: 28,
                          transition: 'color 0.3s ease',
                          fontWeight: isActive ? 600 : 400,
                        }}
                      >
                        {s.num}
                      </span>
                      <span
                        style={{
                          fontWeight: isActive ? 700 : 400,
                          fontSize: '1rem',
                          letterSpacing: '0.04em',
                          color: isActive ? 'var(--ink)' : 'var(--muted)',
                          transition: 'color 0.3s ease, font-weight 0.3s ease',
                        }}
                      >
                        {s.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Right: Uniform, rock-solid Fixed-Size Card Container */}
            <div style={{ minWidth: 0 }}>
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: isMobile ? 370 : 440,
                }}
              >
                {STAGES.map((s, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <div
                      key={s.num}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        padding: isMobile ? '20px 20px' : 'clamp(26px, 3.8vw, 42px)',
                        background: 'var(--sand)',
                        borderRadius: 12,
                        border: '1px solid var(--hairline)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                        pointerEvents: isActive ? 'auto' : 'none',
                        transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: isActive ? '0 10px 30px rgba(0, 0, 0, 0.04)' : 'none',
                      }}
                    >
                      {/* Top row: Giant Monospace Step Watermark + status accent */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'clamp(3.8rem, 6vw, 5.8rem)',
                            fontWeight: 400,
                            letterSpacing: '-0.04em',
                            color: 'var(--red)',
                            lineHeight: 1,
                            opacity: 0.22,
                            userSelect: 'none',
                          }}
                        >
                          {s.num}
                        </div>
                        <div
                          style={{
                            width: 14,
                            height: 14,
                            borderRadius: '50%',
                            border: '1.5px solid var(--red)',
                            marginTop: 10,
                            opacity: 0.6,
                          }}
                        />
                      </div>

                      {/* Stage Title */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 700,
                          fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                          letterSpacing: '-0.025em',
                          lineHeight: 1.1,
                          color: 'var(--ink)',
                          marginBottom: 12,
                        }}
                      >
                        {s.title}
                      </h3>

                      {/* Description: Fixed min-height ensures identical baseline across all stages */}
                      <p
                        style={{
                          fontSize: '1rem',
                          lineHeight: 1.65,
                          color: 'var(--muted)',
                          marginBottom: 20,
                          minHeight: 52,
                          maxWidth: 500,
                        }}
                      >
                        {s.desc}
                      </p>

                      {/* Capability Bullets */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 'auto' }}>
                        {s.details.map((d) => (
                          <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
                            <span style={{ fontSize: '0.9375rem', color: 'var(--ink-80)' }}>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile-Only Previous & Next Navigation Controls */}
              <div
                className="mobile-stage-nav-bar"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 6,
                  marginTop: 14,
                  width: '100%',
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <button
                  type="button"
                  onClick={prevStage}
                  disabled={activeIdx === 0}
                  aria-label="Previous Phase"
                  className="mobile-stage-btn-prev"
                  style={{
                    flex: '1 1 0px',
                    minWidth: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    padding: '10px 8px',
                    borderRadius: 8,
                    border: activeIdx === 0 ? '1px solid #E2E2E0' : '1px solid var(--hairline)',
                    background: activeIdx === 0 ? '#EEEEEC' : 'var(--sand)',
                    color: activeIdx === 0 ? '#9999A0' : 'var(--ink)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: 'clamp(0.7rem, 2.7vw, 0.8125rem)',
                    letterSpacing: '0.02em',
                    cursor: activeIdx === 0 ? 'not-allowed' : 'pointer',
                    opacity: activeIdx === 0 ? 0.75 : 1,
                    transition: 'all 0.2s ease',
                    boxShadow: activeIdx === 0 ? 'none' : '0 2px 8px rgba(0,0,0,0.04)',
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13L5 8l5-5" />
                  </svg>
                  <span>PREVIOUS</span>
                </button>

                <div
                  className="mobile-stage-badge"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(0.68rem, 2.4vw, 0.75rem)',
                    fontWeight: 700,
                    color: 'var(--red)',
                    background: 'rgba(176,24,42,0.08)',
                    padding: '6px 10px',
                    borderRadius: 20,
                    border: '1px solid rgba(176,24,42,0.2)',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.03em',
                    flexShrink: 0,
                    boxSizing: 'border-box',
                  }}
                >
                  PHASE {activeIdx + 1} / {STAGES.length}
                </div>

                <button
                  type="button"
                  onClick={nextStage}
                  aria-label="Next Phase"
                  className="mobile-stage-btn-next"
                  style={{
                    flex: '1 1 0px',
                    minWidth: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    padding: '10px 8px',
                    borderRadius: 8,
                    border: '1px solid var(--red)',
                    background: 'var(--red)',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: 'clamp(0.7rem, 2.7vw, 0.8125rem)',
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(176,24,42,0.25)',
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box',
                  }}
                >
                  <span>{activeIdx === STAGES.length - 1 ? 'RESTART ↺' : 'NEXT'}</span>
                  {activeIdx !== STAGES.length - 1 && (
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3l5 5-5 5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .software-main-grid {
          display: grid;
          grid-template-columns: minmax(260px, 1fr) minmax(340px, 1.4fr);
          gap: clamp(28px, 4.5vw, 64px);
          align-items: start;
        }
        @media (max-width: 960px) {
          .software-sticky-wrap,
          .software-cx {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
          }
          .software-pill-strip {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
          }
          .software-main-grid {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
          }
          .mobile-stage-nav-bar {
            display: flex !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
            gap: 6px !important;
          }
          .mobile-stage-btn-prev, .mobile-stage-btn-next {
            flex: 1 1 0px !important;
            min-width: 0 !important;
            padding: 10px 8px !important;
            box-sizing: border-box !important;
          }
          .mobile-stage-badge {
            flex-shrink: 0 !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </section>
  );
}
