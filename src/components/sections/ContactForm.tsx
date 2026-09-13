'use client';

import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const SERVICES = [
  'Software Development', 'AI Solution', 'Web Application', 'Mobile Application',
  'Enterprise Platform', 'AI Automation', 'Data & Analytics', 'Other',
];

const inputStyle = (focused: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '12px 14px',
  border: `1px solid ${focused ? 'var(--red)' : 'var(--hairline)'}`,
  borderRadius: 4,
  fontSize: '0.9375rem',
  color: 'var(--ink)',
  background: '#fff',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'var(--font-sans)',
});

function Field({
  label,
  required,
  children,
  visible,
  delay,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  visible: boolean;
  delay: number;
}) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(15px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 8 }}>
        {label}{required && <span style={{ color: 'var(--red)' }}> *</span>}
      </label>
      {children}
    </div>
  );
}

function FocusInput({ type = 'text', placeholder, required }: { type?: string; placeholder?: string; required?: boolean }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      style={inputStyle(focused)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function FocusSelect({ options, placeholder }: { options: string[]; placeholder?: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      style={{ ...inputStyle(focused), appearance: 'none', cursor: 'pointer' }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

const SUCCESS_STEPS = ['PROJECT RECEIVED', 'INITIAL REVIEW', 'DISCOVERY CONVERSATION', 'PROPOSAL', 'BUILD'];

export default function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState(false);
  const { ref: leftRef, visible: leftVis } = useScrollReveal(0.08);
  const formRef = useRef<HTMLDivElement>(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const toggle = (s: string) => setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="contact" style={{ background: 'var(--sand)', padding: '120px 0' }}>
        <div className="cx" style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              background: 'var(--void)',
              padding: '64px',
              borderRadius: 8,
              maxWidth: 600,
              width: '100%',
              textAlign: 'center',
            }}
          >
            {/* Animated checkmark circle */}
            <div
              style={{
                width: 64, height: 64, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 32px',
              }}
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle
                  cx="32" cy="32" r="30"
                  stroke="var(--red)"
                  strokeWidth="2"
                  strokeDasharray="188.5"
                  strokeDashoffset="188.5"
                  style={{
                    animation: 'check-draw 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
                    animationFillMode: 'forwards',
                  }}
                />
                <polyline
                  points="20,32 28,40 44,24"
                  stroke="var(--red)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="40"
                  strokeDashoffset="40"
                  style={{
                    animation: 'check-draw 0.5s cubic-bezier(0.22,1,0.36,1) 0.5s forwards',
                    animationFillMode: 'forwards',
                  }}
                />
              </svg>
            </div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.04em', color: 'var(--fg-white)', marginBottom: 16 }}>
              THANK YOU. WE&apos;VE RECEIVED YOUR PROJECT.
            </h2>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--fg-white-70)', marginBottom: 48 }}>
              Our team will review your requirements and get back to you to discuss the next step.
            </p>
            {/* Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, textAlign: 'left', marginBottom: 48 }}>
              {SUCCESS_STEPS.map((step, i) => (
                <div key={step} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 0', borderBottom: i < SUCCESS_STEPS.length - 1 ? '1px solid var(--void-border)' : 'none' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', border: '1px solid var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'var(--red)' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.8125rem', letterSpacing: '0.08em', color: 'var(--fg-white-70)', paddingTop: 4 }}>{step}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: 'var(--fg-white)',
                border: '1px solid var(--void-border)',
                borderRadius: 4,
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                letterSpacing: '0.04em',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--fg-white-40)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--void-border)')}
            >
              BACK TO ACQUIRING TECHNOLOGY
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Field stagger — 8 fields, 80ms apart
  const fieldDelay = (i: number) => i * 0.08;

  return (
    <section id="contact" style={{ background: 'var(--sand)', padding: 'clamp(64px, 8vh, 120px) 0' }}>
      <div className="cx">
        <div className="contact-layout-grid">
          {/* Left sticky panel (desktop only; static on mobile to prevent overlapping) */}
          <div ref={leftRef} className="contact-left-panel" style={{ position: 'sticky', top: 100 }}>
            <span className={`tag rv ${leftVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 24 }}>
              Start a Project
            </span>
            <h2
              className={`rv ${leftVis ? 'in' : ''} d1`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                margin: '0 0 24px',
              }}
            >
              LET&apos;S BUILD SOMETHING USEFUL.
            </h2>
            <p
              className={`rv ${leftVis ? 'in' : ''} d2`}
              style={{ fontSize: '1rem', lineHeight: 1.72, color: 'var(--muted)', marginBottom: 40 }}
            >
              Tell us what you&apos;re trying to build, improve, or automate. Our team will help identify the right technology approach.
            </p>
            {['Response within 1 business day', 'Free initial consultation', 'No obligation to proceed'].map((t) => (
              <div key={t} className={`rv ${leftVis ? 'in' : ''} d3`} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{t}</span>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="grid-form-2">
                <Field label="Full Name" required visible={formVisible} delay={fieldDelay(0)}>
                  <FocusInput placeholder="Your name" required />
                </Field>
                <Field label="Company" visible={formVisible} delay={fieldDelay(1)}>
                  <FocusInput placeholder="Company name" />
                </Field>
              </div>
              <div className="grid-form-2">
                <Field label="Work Email" required visible={formVisible} delay={fieldDelay(2)}>
                  <FocusInput type="email" placeholder="you@company.com" required />
                </Field>
                <Field label="Phone" visible={formVisible} delay={fieldDelay(3)}>
                  <FocusInput type="tel" placeholder="+1 (000) 000 0000" />
                </Field>
              </div>

              {/* Service selector */}
              <Field label="What do you need help with?" visible={formVisible} delay={fieldDelay(4)}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 8 }}>
                  {SERVICES.map((s) => {
                    const isSelected = selected.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggle(s)}
                        style={{
                          padding: '10px 14px',
                          border: `1px solid ${isSelected ? 'var(--red)' : 'var(--hairline)'}`,
                          borderRadius: 4,
                          background: isSelected ? 'var(--red-pale)' : '#fff',
                          color: isSelected ? 'var(--red)' : 'var(--ink-60)',
                          fontSize: '0.8125rem',
                          fontWeight: isSelected ? 500 : 400,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Project Details" required visible={formVisible} delay={fieldDelay(5)}>
                <textarea
                  required
                  placeholder="Tell us about your project, challenge, or idea..."
                  rows={5}
                  style={{
                    ...inputStyle(focused),
                    resize: 'vertical',
                    lineHeight: 1.6,
                  }}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
              </Field>

              <div className="grid-form-2">
                <Field label="Timeline" visible={formVisible} delay={fieldDelay(6)}>
                  <FocusSelect
                    placeholder="Select timeline"
                    options={['Under 1 month', '1–3 months', '3–6 months', '6+ months', 'Flexible']}
                  />
                </Field>
                <Field label="Budget" visible={formVisible} delay={fieldDelay(7)}>
                  <FocusSelect
                    placeholder="Select budget"
                    options={['Under $25k', '$25k–$75k', '$75k–$150k', '$150k–$500k', '$500k+', 'To be discussed']}
                  />
                </Field>
              </div>

              <div
                style={{
                  opacity: formVisible ? 1 : 0,
                  transform: formVisible ? 'translateY(0)' : 'translateY(15px)',
                  transition: `opacity 0.6s ease ${fieldDelay(8)}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${fieldDelay(8)}s`,
                }}
              >
                <button
                  type="submit"
                  disabled={sending}
                  className="contact-submit-btn"
                  style={{
                    padding: '18px 40px',
                    background: 'var(--red)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 4,
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    cursor: sending ? 'default' : 'pointer',
                    transition: 'background 0.25s',
                    alignSelf: 'flex-start',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    borderLeft: sending ? '3px solid rgba(255,255,255,0.4)' : '3px solid transparent',
                    animation: sending ? 'sending-pulse 1s ease infinite' : 'none',
                  }}
                  onMouseEnter={(e) => { if (!sending) e.currentTarget.style.background = 'var(--red-dark)'; }}
                  onMouseLeave={(e) => { if (!sending) e.currentTarget.style.background = 'var(--red)'; }}
                >
                  {sending ? 'SENDING...' : (
                    <>
                      SEND PROJECT BRIEF{' '}
                      <span style={{ display: 'inline-block', transition: 'transform 0.25s ease' }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(5px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}
                      >→</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .contact-left-panel {
            position: static !important;
            top: auto !important;
          }
        }
        @media (max-width: 640px) {
          .contact-submit-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
