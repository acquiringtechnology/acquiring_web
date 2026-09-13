'use client';

import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CRITERIA = [
  { num: '01', title: 'Technology', q: 'Is there meaningful proprietary technology?' },
  { num: '02', title: 'IP', q: 'Is the intellectual property owned or transferable?' },
  { num: '03', title: 'Product', q: 'Is there a working product or technology capability?' },
  { num: '04', title: 'Market', q: 'Is there a meaningful market opportunity?' },
  { num: '05', title: 'Strategic Fit', q: 'Does the technology align with acquisition or partnership objectives?' },
  { num: '06', title: 'Scalability', q: 'Can the technology create value at greater scale?' },
];

export default function CheckFit({ onCheckFit }: { onCheckFit: () => void }) {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: listRef, visible: listVis } = useScrollReveal(0.08);

  const toggle = (i: number) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const checkedCount = checked.size;
  const qualified = checkedCount >= 3;

  return (
    <section
      id="fit"
      style={{
        background: 'var(--surface)',
        padding: '120px 0',
        borderTop: '1px solid var(--hairline)',
        borderBottom: '1px solid var(--hairline)',
      }}
    >
      <div className="cx">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Left — heading */}
          <div ref={headRef} style={{ position: 'sticky', top: 120 }}>
            <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 24 }}>
              Could Your Technology Be a Fit?
            </span>
            <h2
              className={`rv ${headVis ? 'in' : ''} d1`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                margin: 0,
                marginBottom: 28,
              }}
            >
              COULD YOUR TECHNOLOGY BE A FIT?
            </h2>
            <p
              className={`rv ${headVis ? 'in' : ''} d2`}
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.72,
                color: 'var(--muted)',
                marginBottom: 48,
                maxWidth: 380,
              }}
            >
              Acquiring Technology evaluates opportunities based on technical quality, intellectual property, market opportunity, product maturity, scalability, and strategic fit.
            </p>

            {/* Dynamic CTA */}
            <div
              className={`rv ${headVis ? 'in' : ''} d3`}
              style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}
            >
              {checkedCount > 0 && (
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.12em',
                    color: qualified ? 'var(--copper)' : 'var(--muted)',
                    transition: 'color 0.35s',
                  }}
                >
                  {qualified
                    ? `${checkedCount} / ${CRITERIA.length} — LOOKS LIKE A STRONG FIT`
                    : `${checkedCount} / ${CRITERIA.length} — KEEP GOING`}
                </div>
              )}
              <CheckFitBtn qualified={qualified} onClick={onCheckFit} />
            </div>
          </div>

          {/* Right — criteria checklist */}
          <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {CRITERIA.map((c, i) => {
              const isChecked = checked.has(i);
              return (
                <button
                  key={c.num}
                  onClick={() => toggle(i)}
                  className={`rv ${listVis ? 'in' : ''}`}
                  style={{
                    transitionDelay: `${i * 0.07}s`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    padding: '22px 0',
                    borderBottom: '1px solid var(--hairline)',
                    background: 'none',
                    border: 'none',
                    borderBottomColor: 'var(--hairline)',
                    borderBottomStyle: 'solid' as const,
                    borderBottomWidth: 1,
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                    transition: 'background 0.25s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--sand)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                  aria-pressed={isChecked}
                >
                  {/* Checkbox */}
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      border: `1.5px solid ${isChecked ? 'var(--copper)' : 'var(--hairline)'}`,
                      background: isChecked ? 'var(--copper)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'border-color 0.3s, background 0.3s',
                    }}
                  >
                    {isChecked && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                        <polyline points="2,6 5,9 10,3" />
                      </svg>
                    )}
                  </div>

                  {/* Number */}
                  <span
                    className="tag"
                    style={{
                      color: isChecked ? 'var(--copper)' : 'var(--muted)',
                      minWidth: 24,
                      transition: 'color 0.3s',
                    }}
                  >
                    {c.num}
                  </span>

                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        color: isChecked ? 'var(--ink)' : 'var(--ink)',
                        marginBottom: 3,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {c.title}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                      {c.q}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .fit-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .fit-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

function CheckFitBtn({ qualified, onClick }: { qualified: boolean; onClick: () => void }) {
  const [hov, setHov] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: hov ? 14 : 8,
        padding: '14px 28px',
        background: qualified ? (hov ? 'transparent' : 'var(--ink)') : 'transparent',
        color: qualified ? (hov ? 'var(--ink)' : 'var(--fg-white)') : 'var(--ink)',
        border: `1px solid ${qualified ? 'var(--ink)' : 'var(--hairline)'}`,
        borderRadius: 3,
        fontFamily: 'var(--font-sans)',
        fontSize: '0.875rem',
        fontWeight: 500,
        letterSpacing: '0.04em',
        cursor: 'pointer',
        transition: 'background 0.35s, color 0.35s, border-color 0.35s, gap 0.3s',
        borderColor: hov && !qualified ? 'var(--ink)' : undefined,
      }}
    >
      CHECK YOUR FIT
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="7" x2="13" y2="7" />
        <polyline points="8,2 13,7 8,12" />
      </svg>
    </button>
  );
}
