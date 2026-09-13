'use client';

import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { label: 'Services', href: '#what-we-do', sectionId: 'what-we-do' },
  { label: 'Solutions', href: '#ai', sectionId: 'ai' },
  { label: 'Industries', href: '#industries', sectionId: 'industries' },
  { label: 'Process', href: '#process', sectionId: 'process' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

// Map section IDs to LINKS index
const SECTION_TO_LINK: Record<string, number> = {
  'hero': -1,
  'what-we-do': 0,
  'software': 0,
  'ai': 1,
  'industries': 2,
  'process': 3,
  'about': 4,
  'contact': 5,
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLinkIdx, setActiveLinkIdx] = useState(-1);

  // Refs to nav link DOM elements for underline positioning
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navRef = useRef<HTMLElement>(null);

  // Underline position state
  const [underline, setUnderline] = useState({ left: 0, width: 0, visible: false });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 72);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sectionIds = ['hero', 'what-we-do', 'software', 'ai', 'industries', 'process', 'about', 'contact'];
    const observers: IntersectionObserver[] = [];

    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
          // Find the section with the highest intersection ratio
          let bestId = '';
          let bestRatio = 0;
          visibleSections.forEach((ratio, sid) => {
            if (ratio > bestRatio) { bestRatio = ratio; bestId = sid; }
          });
          const idx = bestId ? (SECTION_TO_LINK[bestId] ?? -1) : -1;
          setActiveLinkIdx(idx);
        },
        { threshold: [0, 0.1, 0.3, 0.5], rootMargin: '-64px 0px -30% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Update underline position when activeLinkIdx changes
  useEffect(() => {
    if (activeLinkIdx < 0 || activeLinkIdx >= linkRefs.current.length) {
      setUnderline((u) => ({ ...u, visible: false }));
      return;
    }
    const el = linkRefs.current[activeLinkIdx];
    const nav = navRef.current;
    if (!el || !nav) return;
    const elRect = el.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    setUnderline({ left: elRect.left - navRect.left, width: elRect.width, visible: true });
  }, [activeLinkIdx]);

  const navBg = scrolled ? 'rgba(11, 11, 13, 0.94)' : 'transparent';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '13px 0' : '20px 0',
          background: navBg,
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          borderBottom: scrolled ? '1px solid var(--void-border)' : '1px solid transparent',
          transition: 'background 0.45s ease, padding 0.35s ease, border-color 0.45s ease, backdrop-filter 0.45s ease',
        }}
      >
        <div className="cx" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', lineHeight: 1 }}>
            <img src="/logo.png" alt="Acquiring Technology" style={{ height: 28, width: 'auto' }} />
          </a>

          {/* Desktop links */}
          <nav ref={navRef} className="hide-tab" style={{ display: 'flex', gap: 28, alignItems: 'center', position: 'relative' }}>
            {LINKS.map((l, i) => {
              const isActive = activeLinkIdx === i;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  ref={(el) => { linkRefs.current[i] = el; }}
                  style={{
                    color: isActive ? 'var(--red)' : 'var(--fg-white-70)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    transition: 'color 0.25s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--fg-white)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? 'var(--red)' : 'var(--fg-white-70)'; }}
                >
                  {l.label}
                </a>
              );
            })}
            {/* Sliding underline */}
            <div
              style={{
                position: 'absolute',
                bottom: -6,
                left: underline.left,
                width: underline.width,
                height: 2,
                background: 'var(--red)',
                borderRadius: 1,
                opacity: underline.visible ? 1 : 0,
                transition: 'left 0.3s ease, width 0.3s ease, opacity 0.25s ease',
                pointerEvents: 'none',
              }}
            />
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hide-tab"
            style={{
              padding: '10px 22px',
              background: 'var(--red)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              borderRadius: 3,
              border: '1px solid var(--red)',
              transition: 'background 0.3s, border-color 0.3s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--red-dark)';
              e.currentTarget.style.borderColor = 'var(--red-dark)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--red)';
              e.currentTarget.style.borderColor = 'var(--red)';
            }}
          >
            START A PROJECT
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="show-tab"
            aria-label="Toggle navigation"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--fg-white)', lineHeight: 0 }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="3" y1="3" x2="19" y2="19" />
                  <line x1="19" y1="3" x2="3" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" />
                  <line x1="3" y1="15" x2="19" y2="15" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--void)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          padding: '100px 24px 48px',
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
          pointerEvents: open ? 'all' : 'none',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: 'var(--fg-white)',
                textDecoration: 'none',
                fontSize: '1.875rem',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                padding: '20px 0',
                borderBottom: '1px solid var(--void-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.4s ease ${0.1 + i * 0.04}s, transform 0.4s ease ${0.1 + i * 0.04}s`,
              }}
            >
              {l.label}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M3 9h12M10 4l5 5-5 5" />
              </svg>
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          style={{
            display: 'block',
            marginTop: 32,
            padding: '18px',
            background: 'var(--red)',
            color: '#fff',
            textDecoration: 'none',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '0.9375rem',
            letterSpacing: '0.06em',
            borderRadius: 4,
          }}
        >
          START A PROJECT
        </a>
      </div>
    </>
  );
}
