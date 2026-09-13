'use client';

import { useEffect, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const STACK_LAYERS = ['FRONTEND', 'API', 'SERVICES', 'DATABASE', 'CLOUD'];
const AI_STEPS = ['DATA', 'MODEL', 'INTELLIGENCE', 'ACTION'];

function SoftwareStackDiagram() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STACK_LAYERS.length);
    }, 1250);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <svg
        width="100%"
        viewBox="0 0 280 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {STACK_LAYERS.map((label, i) => {
          const isActive = activeIdx === i;
          const y = 8 + i * 40;

          return (
            <g
              key={label}
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveIdx(i)}
            >
              {/* Box */}
              <rect
                x={18}
                y={y}
                width={244}
                height={32}
                rx={6}
                fill={isActive ? 'rgba(176,24,42,0.08)' : 'rgba(23,23,26,0.035)'}
                stroke={isActive ? 'var(--red)' : 'var(--hairline)'}
                strokeWidth={isActive ? 1.8 : 1}
                style={{
                  transition: 'fill 0.35s ease, stroke 0.35s ease, stroke-width 0.35s ease, filter 0.35s ease',
                  filter: isActive ? 'drop-shadow(0 2px 10px rgba(176,24,42,0.22))' : 'none',
                }}
              />

              {/* Text label */}
              <text
                x={140}
                y={y + 20.5}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="11.5"
                fontWeight={isActive ? '700' : '500'}
                fill={isActive ? 'var(--red)' : 'var(--muted)'}
                letterSpacing="1.2"
                style={{
                  transition: 'fill 0.35s ease, font-weight 0.35s ease',
                  userSelect: 'none',
                }}
              >
                {label}
              </text>

              {/* Connector line between steps */}
              {i < STACK_LAYERS.length - 1 && (
                <g>
                  {/* Base line */}
                  <line
                    x1={140}
                    y1={y + 32}
                    x2={140}
                    y2={y + 40}
                    stroke="var(--hairline)"
                    strokeWidth={1}
                  />
                  {/* Active highlight connector line into active layer */}
                  <line
                    x1={140}
                    y1={y + 32}
                    x2={140}
                    y2={y + 40}
                    stroke="var(--red)"
                    strokeWidth={activeIdx === i + 1 ? 2.5 : 0}
                    opacity={activeIdx === i + 1 ? 1 : 0}
                    style={{
                      transition: 'opacity 0.3s ease, stroke-width 0.3s ease',
                    }}
                  />
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function AiFlowDiagram() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % AI_STEPS.length);
    }, 1250);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: 460 }}>
      <svg
        width="100%"
        viewBox="0 0 420 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {AI_STEPS.map((label, i) => {
          const isActive = activeIdx === i;
          const x = 6 + i * 106;

          return (
            <g
              key={label}
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveIdx(i)}
            >
              {/* Box */}
              <rect
                x={x}
                y={15}
                width={92}
                height={42}
                rx={6}
                fill={isActive ? 'rgba(176,24,42,0.08)' : 'rgba(23,23,26,0.035)'}
                stroke={isActive ? 'var(--red)' : 'var(--hairline)'}
                strokeWidth={isActive ? 1.8 : 1}
                style={{
                  transition: 'fill 0.35s ease, stroke 0.35s ease, stroke-width 0.35s ease, filter 0.35s ease',
                  filter: isActive ? 'drop-shadow(0 2px 10px rgba(176,24,42,0.22))' : 'none',
                }}
              />

              {/* Text label */}
              <text
                x={x + 46}
                y={41}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="10"
                fontWeight={isActive ? '700' : '500'}
                fill={isActive ? 'var(--red)' : 'var(--muted)'}
                letterSpacing="0.8"
                style={{
                  transition: 'fill 0.35s ease, font-weight 0.35s ease',
                  userSelect: 'none',
                }}
              >
                {label}
              </text>

              {/* Connector line between steps */}
              {i < AI_STEPS.length - 1 && (
                <g>
                  {/* Base line */}
                  <line
                    x1={x + 92}
                    y1={36}
                    x2={x + 106}
                    y2={36}
                    stroke="var(--hairline)"
                    strokeWidth={1}
                  />
                  {/* Active highlight connector line into active layer */}
                  <line
                    x1={x + 92}
                    y1={36}
                    x2={x + 106}
                    y2={36}
                    stroke="var(--red)"
                    strokeWidth={activeIdx === i + 1 ? 2.5 : 0}
                    opacity={activeIdx === i + 1 ? 1 : 0}
                    style={{
                      transition: 'opacity 0.3s ease, stroke-width 0.3s ease',
                    }}
                  />
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

const PANELS = [
  {
    num: '01',
    title: 'SOFTWARE ENGINEERING',
    desc: 'From product concepts to enterprise platforms, we design and build reliable software engineered for performance, scale, security, and long-term maintainability.',
    caps: ['Custom Software', 'Web Applications', 'Mobile Applications', 'Enterprise Applications', 'APIs & Integrations', 'Cloud Applications', 'Product Engineering', 'Legacy Modernization'],
    cta: 'EXPLORE SOFTWARE DEVELOPMENT →',
    Diagram: SoftwareStackDiagram,
  },
  {
    num: '02',
    title: 'ARTIFICIAL INTELLIGENCE',
    desc: 'We turn AI capabilities into practical products, intelligent automation, and business systems that create measurable value.',
    caps: ['Generative AI', 'AI Agents', 'Machine Learning', 'Computer Vision', 'Natural Language Processing', 'RAG Systems', 'AI Automation', 'AI Integration', 'Data & Analytics'],
    cta: 'EXPLORE AI SOLUTIONS →',
    Diagram: AiFlowDiagram,
  },
];

export default function CoreExpertise() {
  const [hov, setHov] = useState<number | null>(null);
  const { ref, visible } = useScrollReveal(0.08);

  return (
    <section style={{ background: 'var(--sand)' }}>
      <div className="cx sp">
        <span className="tag" style={{ color: 'var(--muted)', display: 'block', marginBottom: 64 }}>
          Our Core Expertise
        </span>
        <div
          ref={ref}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 1, background: 'var(--hairline)' }}
        >
          {PANELS.map((p, i) => (
            <div
              key={p.num}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              className={`rv ${visible ? 'in' : ''} expertise-card`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: hov === i ? 'var(--surface)' : 'var(--sand)',
                transition: 'background 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 32 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--red)', letterSpacing: '0.06em' }}>{p.num}</span>
                <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', letterSpacing: '0.06em', color: 'var(--ink)', margin: 0 }}>{p.title}</h3>
              </div>

              <p style={{ fontSize: '0.9375rem', lineHeight: 1.72, color: 'var(--muted)', marginBottom: 32 }}>{p.desc}</p>

              {/* Interactive Looping Diagram */}
              <div style={{ marginBottom: 32 }}>
                <p.Diagram />
              </div>

              {/* Capabilities */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {p.caps.map((c) => (
                  <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--ink-60)' }}>{c}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: 'var(--red)',
                  textDecoration: 'none',
                  transform: hov === i ? 'translateX(4px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease',
                }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .expertise-card { padding: 48px; }
        @media (max-width: 640px) {
          .expertise-card { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}
