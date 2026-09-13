'use client';

import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ARTICLES = [
  {
    category: 'Acquisition',
    title: 'Preparing Your Technology for Acquisition',
    desc: 'What technology founders and product teams should understand, document, and demonstrate before entering an acquisition process — from IP ownership to technical architecture.',
    date: 'September 2026',
    readTime: '8 min read',
  },
  {
    category: 'Due Diligence',
    title: 'Understanding Technical Due Diligence',
    desc: 'A guide to what happens during the technical review phase of an acquisition — what acquirers look for, how codebases are assessed, and what can accelerate or delay a deal.',
    date: 'August 2026',
    readTime: '11 min read',
  },
  {
    category: 'Strategy',
    title: 'What Makes Technology Strategically Valuable?',
    desc: 'Why some technology commands premium valuations while similar products trade at multiples of revenue. The factors that separate strategic value from commodity software.',
    date: 'July 2026',
    readTime: '9 min read',
  },
];

export default function Insights() {
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: cardsRef, visible: cardsVis } = useScrollReveal(0.08);

  return (
    <section id="insights" style={{ background: 'var(--surface)', padding: '120px 0' }}>
      <div className="cx">
        {/* Header */}
        <div
          ref={headRef}
          style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}
        >
          <div>
            <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 24 }}>
              Insights
            </span>
            <h2
              className={`rv ${headVis ? 'in' : ''} d1`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 4rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              INSIGHTS
            </h2>
          </div>
          <a
            href="#insights"
            className={`rv ${headVis ? 'in' : ''} d2`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.875rem',
              color: 'var(--muted)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--hairline)',
              paddingBottom: 4,
              transition: 'color 0.25s, border-color 0.25s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--hairline)'; }}
          >
            All Insights
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="1" y1="7" x2="13" y2="7" />
              <polyline points="8,2 13,7 8,12" />
            </svg>
          </a>
        </div>

        {/* Article cards */}
        <div
          ref={cardsRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--hairline)' }}
        >
          {ARTICLES.map((article, i) => (
            <ArticleCard key={article.title} article={article} delay={i * 0.08} visible={cardsVis} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .insights-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ArticleCard({
  article,
  delay,
  visible,
}: {
  article: (typeof ARTICLES)[0];
  delay: number;
  visible: boolean;
}) {
  const [hov, setHov] = useState(false);

  return (
    <article
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`rv ${visible ? 'in' : ''}`}
      style={{
        transitionDelay: `${delay}s`,
        padding: '48px 40px',
        background: hov ? 'var(--sand)' : 'var(--surface)',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        cursor: 'pointer',
        transition: 'background 0.35s ease',
      }}
    >
      {/* Category + date */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <span className="tag" style={{ color: 'var(--copper)' }}>{article.category}</span>
        <span className="tag" style={{ color: 'var(--muted)' }}>{article.date}</span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: '1.25rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.25,
          color: 'var(--ink)',
          marginBottom: 16,
        }}
      >
        {article.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '0.875rem', lineHeight: 1.68, color: 'var(--muted)', marginBottom: 32, flex: 1 }}>
        {article.desc}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: hov ? 10 : 6,
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: 'var(--ink)',
            transition: 'gap 0.3s',
          }}
        >
          Read article
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="1" y1="6" x2="11" y2="6" />
            <polyline points="7,2 11,6 7,10" />
          </svg>
        </span>
        <span className="tag" style={{ color: 'var(--muted)' }}>{article.readTime}</span>
      </div>
    </article>
  );
}
