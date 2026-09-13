'use client';

import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CARDS = [
  {
    category: 'AI • Software Engineering',
    title: 'AI-POWERED ENTERPRISE PLATFORM',
    desc: 'An intelligent platform combining enterprise software with generative AI capabilities.',
    svgAccent: '#B0182A',
  },
  {
    category: 'Product Engineering • Cloud',
    title: 'SCALABLE DIGITAL PRODUCT',
    desc: 'A high-performance digital product engineered for rapid growth and global scale.',
    svgAccent: '#8F1324',
  },
  {
    category: 'AI • Data • Automation',
    title: 'INTELLIGENT DATA & AUTOMATION PLATFORM',
    desc: 'End-to-end data pipeline with embedded AI automation and real-time analytics.',
    svgAccent: '#6F0F1C',
  },
];

function CardSVG({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="220" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0B0B0D" />
      {/* Grid */}
      <defs>
        <pattern id={`cs-grid-${accent}`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.05" />
        </pattern>
      </defs>
      <rect width="400" height="220" fill={`url(#cs-grid-${accent})`} />
      {/* Abstract system nodes */}
      {[
        { x: 60, y: 110 }, { x: 140, y: 70 }, { x: 140, y: 150 },
        { x: 220, y: 110 }, { x: 300, y: 70 }, { x: 300, y: 150 }, { x: 360, y: 110 },
      ].map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i === 3 ? 10 : 5}
          fill={i === 3 ? accent : 'rgba(255,255,255,0.15)'}
          stroke={i === 3 ? accent : 'rgba(255,255,255,0.2)'}
          strokeWidth="1"
        />
      ))}
      {/* Lines */}
      {[
        [60, 110, 140, 70], [60, 110, 140, 150],
        [140, 70, 220, 110], [140, 150, 220, 110],
        [220, 110, 300, 70], [220, 110, 300, 150],
        [300, 70, 360, 110], [300, 150, 360, 110],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      ))}
      {/* Red accent line */}
      <line x1="220" y1="110" x2="300" y2="70" stroke={accent} strokeWidth="1.5" opacity="0.8" />
    </svg>
  );
}

function CaseCard({ card, index, visible }: { card: typeof CARDS[number]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const visualDelay = index * 0.1;
  const textDelay = index * 0.15;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        display: 'flex',
        flexDirection: 'column',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform 0.25s ease-out',
      }}
    >
      {/* Visual area */}
      <div
        style={{
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.96)',
          transition: `opacity 0.6s ease-out ${visualDelay}s, transform 0.6s ease-out ${visualDelay}s`,
        }}
      >
        <div
          style={{
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.2s ease-out',
          }}
        >
          <CardSVG accent={card.svgAccent} />
        </div>
      </div>

      {/* Text content */}
      <div
        style={{
          padding: '32px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(25px)',
          transition: `opacity 0.5s ease-out ${textDelay}s, transform 0.5s ease-out ${textDelay}s`,
        }}
      >
        <span
          className="tag"
          style={{
            color: 'var(--red)',
            display: 'block',
            marginBottom: 16,
            fontSize: '0.5625rem',
            letterSpacing: '0.12em',
          }}
        >
          {card.category}
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '1.125rem',
            letterSpacing: '-0.01em',
            color: 'var(--ink)',
            marginBottom: 12,
          }}
        >
          {card.title}
        </h3>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--muted)', flex: 1, margin: '0 0 24px' }}>
          {card.desc}
        </p>
        <a
          href="#contact"
          style={{
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: 'var(--ink)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            borderBottom: '1px solid var(--hairline)',
            paddingBottom: 4,
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--red)';
            e.currentTarget.style.borderColor = 'var(--red)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--ink)';
            e.currentTarget.style.borderColor = 'var(--hairline)';
          }}
        >
          VIEW CASE STUDY{' '}
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.25s ease',
              transform: hovered ? 'translateX(5px)' : 'translateX(0)',
            }}
          >→</span>
        </a>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const el = cardsContainerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: 'var(--surface)', padding: '120px 0' }}>
      <div className="cx">
        <div ref={headRef} style={{ marginBottom: 64 }}>
          <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 24 }}>
            Selected Work
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
            }}
          >
            SELECTED WORK.
          </h2>
        </div>

        <div
          ref={cardsContainerRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'var(--hairline)', marginBottom: 24 }}
        >
          {CARDS.map((card, i) => (
            <CaseCard key={card.title} card={card} index={i} visible={cardsVisible} />
          ))}
        </div>

        <span className="tag" style={{ color: 'var(--muted)', fontSize: '0.5625rem' }}>
          Project details have been anonymised
        </span>
      </div>
    </section>
  );
}
