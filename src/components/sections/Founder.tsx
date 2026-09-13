'use client';

import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Founder({ onTalkToTeam }: { onTalkToTeam?: () => void }) {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: '120px 0',
        borderTop: '1px solid var(--hairline)',
        borderBottom: '1px solid var(--hairline)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Abstract visual — structural network */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', pointerEvents: 'none' }}>
        <FounderVisual />
      </div>

      <div className="cx" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 580 }}>
          <span className={`tag rv ${visible ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 32 }}>
            For Founders &amp; Technology Owners
          </span>

          <h2
            className={`rv ${visible ? 'in' : ''} d1`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(2.25rem, 5vw, 5rem)',
              lineHeight: 0.97,
              letterSpacing: '-0.035em',
              color: 'var(--ink)',
              margin: 0,
              marginBottom: 36,
            }}
          >
            BUILT SOMETHING VALUABLE?
          </h2>

          <p
            className={`rv ${visible ? 'in' : ''} d2`}
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: 'var(--muted)',
              marginBottom: 48,
            }}
          >
            {"If you've built a technology product, platform, SaaS business, intellectual property, or specialized technology capability, Acquiring Technology would like to understand what you've created and explore whether there is a strategic fit."}
          </p>

          <div className={`rv ${visible ? 'in' : ''} d3`} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <OutlineBtn href="#submit" variant="dark">
              Submit Your Technology <Arrow />
            </OutlineBtn>
            <OutlineBtn href="#submit" variant="light" onClick={onTalkToTeam}>
              Talk to Our Team <Arrow />
            </OutlineBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutlineBtn({
  href,
  variant,
  children,
  onClick,
}: {
  href: string;
  variant: 'dark' | 'light';
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const [hov, setHov] = useState(false);
  const dark = variant === 'dark';

  return (
    <a
      href={onClick ? '#' : href}
      onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: hov ? 14 : 8,
        padding: '14px 26px',
        background: dark ? (hov ? 'transparent' : 'var(--ink)') : 'transparent',
        color: dark ? (hov ? 'var(--ink)' : 'var(--fg-white)') : 'var(--ink)',
        border: `1px solid ${dark ? 'var(--ink)' : 'var(--hairline)'}`,
        borderRadius: 3,
        textDecoration: 'none',
        fontSize: '0.875rem',
        fontWeight: 500,
        letterSpacing: '0.02em',
        transition: 'background 0.3s, color 0.3s, gap 0.3s, border-color 0.3s',
        ...(dark ? {} : { borderColor: hov ? 'var(--ink)' : 'var(--hairline)' }),
      }}
    >
      {children}
    </a>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="1" y1="7" x2="13" y2="7" />
      <polyline points="8,2 13,7 8,12" />
    </svg>
  );
}

function FounderVisual() {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      style={{ width: '100%', height: '100%', opacity: 0.5 }}
    >
      {/* Fine grid */}
      {Array.from({ length: 14 }, (_, i) => (
        <line key={`v${i}`} x1={i * 48} y1={0} x2={i * 48} y2={600} stroke="var(--ink)" strokeWidth="1" opacity="0.06" />
      ))}
      {Array.from({ length: 14 }, (_, i) => (
        <line key={`h${i}`} x1={0} y1={i * 48} x2={600} y2={i * 48} stroke="var(--ink)" strokeWidth="1" opacity="0.06" />
      ))}

      {/* Small structure on left → expanding on right */}
      <g stroke="var(--ink)" strokeWidth="1" opacity="0.18">
        <circle cx="100" cy="300" r="20" />
        <circle cx="200" cy="220" r="28" />
        <circle cx="200" cy="380" r="28" />
        <circle cx="340" cy="160" r="36" />
        <circle cx="340" cy="300" r="36" />
        <circle cx="340" cy="440" r="36" />
        <circle cx="500" cy="100" r="44" />
        <circle cx="500" cy="240" r="44" />
        <circle cx="500" cy="380" r="44" />
        <circle cx="500" cy="520" r="44" />
        <line x1="120" y1="300" x2="172" y2="232" />
        <line x1="120" y1="300" x2="172" y2="368" />
        <line x1="228" y1="236" x2="304" y2="175" />
        <line x1="228" y1="300" x2="304" y2="300" />
        <line x1="228" y1="364" x2="304" y2="425" />
        <line x1="376" y1="178" x2="456" y2="120" />
        <line x1="376" y1="290" x2="456" y2="248" />
        <line x1="376" y1="310" x2="456" y2="372" />
        <line x1="376" y1="452" x2="456" y2="512" />
      </g>

      {/* Accent copper dots */}
      {[[100, 300], [340, 300], [500, 240], [500, 380]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={5} fill="var(--copper)" opacity="0.5" />
      ))}
    </svg>
  );
}
