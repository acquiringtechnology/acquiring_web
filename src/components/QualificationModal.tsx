'use client';

import { useEffect, useState } from 'react';

const STEP1_OPTIONS = [
  'Technology Acquisition',
  'Technology Partnership',
  'Technology Licensing',
  'Technical Due Diligence',
  'Technology Valuation',
  'Other',
];

const STEP2_OPTIONS = [
  'SaaS / Software',
  'AI / Machine Learning',
  'Data / Analytics',
  'Healthcare Technology',
  'Enterprise Technology',
  'Other',
];

type State = {
  interest: string;
  category: string;
  brief: string;
};

export default function QualificationModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<State>({ interest: '', category: '', brief: '' });
  const [exiting, setExiting] = useState(false);

  // Close on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  function handleClose() {
    setExiting(true);
    setTimeout(onClose, 350);
  }

  function handleContinue() {
    if (step < 3) {
      setStep((s) => s + 1);
    } else {
      handleClose();
      setTimeout(() => {
        const el = document.getElementById('submit');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  }

  const canContinue =
    (step === 1 && data.interest !== '') ||
    (step === 2 && data.category !== '') ||
    (step === 3 && data.brief.trim().length > 0);

  return (
    <div
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(13,12,10,0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.35s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--surface)',
          borderRadius: 12,
          width: '100%',
          maxWidth: 560,
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 0,
          overflow: 'hidden',
          transform: exiting ? 'translateY(16px)' : 'translateY(0)',
          transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Modal header */}
        <div
          style={{
            padding: '28px 36px',
            borderBottom: '1px solid var(--hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span className="tag" style={{ color: 'var(--muted)' }}>Qualification</span>
            {/* Progress */}
            <div style={{ display: 'flex', gap: 6 }}>
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  style={{
                    width: s === step ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: s <= step ? 'var(--ink)' : 'var(--hairline)',
                    transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1), background 0.4s',
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.5625rem',
                letterSpacing: '0.12em',
                color: 'var(--muted)',
              }}
            >
              0{step} / 03
            </span>
          </div>

          <button
            onClick={handleClose}
            aria-label="Close"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--muted)',
              lineHeight: 0,
              padding: 4,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="3" y1="3" x2="15" y2="15" />
              <line x1="15" y1="3" x2="3" y2="15" />
            </svg>
          </button>
        </div>

        {/* Modal body */}
        <div style={{ padding: '40px 36px' }}>
          <StepContent
            step={step}
            data={data}
            onChange={(updates) => setData((prev) => ({ ...prev, ...updates }))}
          />
        </div>

        {/* Modal footer */}
        <div
          style={{
            padding: '20px 36px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {step > 1 ? (
            <button
              onClick={() => setStep((s) => s - 1)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'var(--muted)',
                padding: '10px 0',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="13" y1="7" x2="1" y2="7" />
                <polyline points="6,12 1,7 6,2" />
              </svg>
              Back
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleContinue}
            disabled={!canContinue}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '13px 28px',
              background: canContinue ? 'var(--ink)' : 'var(--hairline)',
              color: canContinue ? 'var(--fg-white)' : 'var(--muted)',
              border: 'none',
              borderRadius: 3,
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              cursor: canContinue ? 'pointer' : 'not-allowed',
              transition: 'background 0.35s, color 0.35s',
            }}
          >
            {step < 3 ? 'CONTINUE' : 'CONTINUE TO SUBMISSION'}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="1" y1="7" x2="13" y2="7" />
              <polyline points="8,2 13,7 8,12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function StepContent({
  step,
  data,
  onChange,
}: {
  step: number;
  data: State;
  onChange: (updates: Partial<State>) => void;
}) {
  if (step === 1) {
    return (
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '1.375rem',
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            marginBottom: 28,
          }}
        >
          What are you looking to discuss?
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {STEP1_OPTIONS.map((opt) => (
            <OptionCard
              key={opt}
              label={opt}
              selected={data.interest === opt}
              onClick={() => onChange({ interest: opt })}
            />
          ))}
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '1.375rem',
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            marginBottom: 28,
          }}
        >
          What have you built?
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {STEP2_OPTIONS.map((opt) => (
            <OptionCard
              key={opt}
              label={opt}
              selected={data.category === opt}
              onClick={() => onChange({ category: opt })}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: '1.375rem',
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          marginBottom: 8,
        }}
      >
        Tell us briefly about the opportunity.
      </h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: 20, lineHeight: 1.6 }}>
        A few sentences is enough — you can share more in the full submission.
      </p>
      <BriefTextarea value={data.brief} onChange={(v) => onChange({ brief: v })} />
    </div>
  );
}

function OptionCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '13px 16px',
        background: selected ? 'var(--ink)' : 'transparent',
        color: selected ? 'var(--fg-white)' : 'var(--ink)',
        border: `1px solid ${selected ? 'var(--ink)' : 'var(--hairline)'}`,
        borderRadius: 4,
        fontFamily: 'var(--font-sans)',
        fontSize: '0.875rem',
        fontWeight: selected ? 500 : 400,
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'background 0.25s, color 0.25s, border-color 0.25s',
      }}
      onMouseEnter={(e) => {
        if (!selected) {
          e.currentTarget.style.borderColor = 'var(--muted)';
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.currentTarget.style.borderColor = 'var(--hairline)';
        }
      }}
    >
      {label}
    </button>
  );
}

function BriefTextarea({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholder="Briefly describe what you've built and what you're looking to explore..."
      rows={5}
      style={{
        width: '100%',
        padding: '14px 16px',
        background: 'transparent',
        border: `1px solid ${focused ? 'var(--ink)' : 'var(--hairline)'}`,
        borderRadius: 4,
        fontFamily: 'var(--font-sans)',
        fontSize: '0.9375rem',
        color: 'var(--ink)',
        outline: 'none',
        resize: 'vertical',
        minHeight: 120,
        transition: 'border-color 0.25s',
        lineHeight: 1.65,
      }}
    />
  );
}
