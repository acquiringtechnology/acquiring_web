'use client';

import { useEffect, useState } from 'react';

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  const [nearForm, setNearForm] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const form = document.getElementById('contact');
    if (!hero || !form) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.3 }
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => setNearForm(entry.isIntersecting),
      { threshold: 0.05 }
    );

    heroObserver.observe(hero);
    formObserver.observe(form);

    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  const show = visible && !nearForm;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        padding: '12px 16px calc(12px + env(safe-area-inset-bottom))',
        background: 'var(--red)',
        borderTop: '1px solid var(--red-dark)',
        transform: show ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1)',
        display: 'none',
      }}
      className="mobile-sticky-bar"
    >
      <a
        href="#contact"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '14px',
          background: 'rgba(255,255,255,0.12)',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: 4,
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9375rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
        }}
      >
        START A PROJECT
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="1" y1="7" x2="13" y2="7" />
          <polyline points="8,2 13,7 8,12" />
        </svg>
      </a>

      <style>{`
        @media (max-width: 768px) {
          .mobile-sticky-bar { display: block !important; }
        }
      `}</style>
    </div>
  );
}
