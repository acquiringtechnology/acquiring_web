'use client';

import { useEffect, useState } from 'react';

export default function TalkToTeamModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '12px 14px',
    border: `1px solid ${focused === field ? 'var(--red)' : 'rgba(255,255,255,0.12)'}`,
    borderRadius: 4,
    fontSize: '0.9375rem',
    color: 'var(--fg-white)',
    background: 'rgba(255,255,255,0.06)',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'var(--font-sans)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(11,11,13,0.85)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="modal-box"
        style={{
          background: 'var(--void-surface)',
          border: '1px solid var(--void-border)',
          borderRadius: 8,
          width: '100%',
          maxWidth: 520,
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 20, right: 20,
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--fg-white-40)', lineHeight: 0, padding: 4,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4,12 9,17 20,7" />
              </svg>
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--fg-white)', marginBottom: 12, letterSpacing: '-0.02em' }}>
              MESSAGE SENT
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--fg-white-70)', marginBottom: 32 }}>
              {"We'll be in touch shortly."}
            </p>
            <button
              onClick={onClose}
              style={{
                padding: '12px 28px', background: 'var(--red)', color: '#fff',
                border: 'none', borderRadius: 4, fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.04em',
              }}
            >
              CLOSE
            </button>
          </div>
        ) : (
          <>
            <h3 style={{ fontWeight: 700, fontSize: '1.375rem', letterSpacing: '-0.02em', color: 'var(--fg-white)', margin: '0 0 12px' }}>
              Talk to Our Experts
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--fg-white-70)', margin: '0 0 36px' }}>
              Tell us about your project and a member of our team will be in touch within 1 business day.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <input
                  required placeholder="Your name"
                  style={inputStyle('name')}
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
                <input
                  placeholder="Company"
                  style={inputStyle('company')}
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  onFocus={() => setFocused('company')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <input
                required type="email" placeholder="Work email"
                style={inputStyle('email')}
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
              />
              <textarea
                required rows={4} placeholder="Tell us about your project..."
                style={{ ...inputStyle('message'), resize: 'vertical', lineHeight: 1.6 }}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />
              <button
                type="submit"
                style={{
                  padding: '14px 28px', background: 'var(--red)', color: '#fff',
                  border: 'none', borderRadius: 4, fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem', fontWeight: 600, cursor: 'pointer',
                  letterSpacing: '0.06em', transition: 'background 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--red-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--red)')}
              >
                START THE CONVERSATION
              </button>
            </form>
          </>
        )}
      </div>
      <style>{`
        .modal-box { padding: 56px; }
        @media (max-width: 640px) {
          .modal-box { padding: 36px 20px !important; }
        }
      `}</style>
    </div>
  );
}
