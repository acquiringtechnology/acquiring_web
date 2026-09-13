'use client';

import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import FloatingStars from '../FloatingStars';

interface TechItem {
  name: string;
  desc: string;
  tag?: string;
  iconType: string;
}

interface TechGroup {
  id: string;
  label: string;
  title: string;
  num: string;
  description: string;
  items: TechItem[];
}

const GROUPS: TechGroup[] = [
  {
    id: 'frontend',
    num: '01',
    label: 'FRONTEND',
    title: 'Client & Interface',
    description: 'High-performance, reactive user interfaces with modern typography and strict type safety.',
    items: [
      { name: 'React', desc: 'Component architecture, concurrent rendering & hooks', tag: 'v19', iconType: 'react' },
      { name: 'Next.js', desc: 'App router, SSR, Edge runtime & hybrid rendering', tag: 'v15', iconType: 'next' },
      { name: 'TypeScript', desc: 'Strict static type validation & enterprise scale', tag: 'Strict', iconType: 'ts' },
      { name: 'Tailwind CSS', desc: 'Utility-first modern design token systems', tag: 'v4', iconType: 'tailwind' },
    ],
  },
  {
    id: 'backend',
    num: '02',
    label: 'BACKEND',
    title: 'Distributed Systems',
    description: 'Resilient APIs, event-driven microservices, and high-throughput server runtimes.',
    items: [
      { name: 'Node.js', desc: 'Asynchronous event loop & high-concurrency APIs', tag: 'LTS', iconType: 'node' },
      { name: 'Python', desc: 'FastAPI, Django & asynchronous microservices', tag: '3.12+', iconType: 'python' },
      { name: '.NET', desc: 'Enterprise mission-critical services & C# core', tag: 'Core', iconType: 'dotnet' },
      { name: 'Java', desc: 'Spring Boot & high-volume distributed services', tag: 'JVM', iconType: 'java' },
      { name: 'Go', desc: 'High-performance, low-latency microservices', tag: 'Go', iconType: 'go' },
    ],
  },
  {
    id: 'ai',
    num: '03',
    label: 'AI & ML',
    title: 'Intelligence & Models',
    description: 'Production neural networks, multi-agent frameworks, and vector retrieval pipelines.',
    items: [
      { name: 'Python', desc: 'Data science, numerical computing & ML pipelines', tag: 'Core', iconType: 'python' },
      { name: 'PyTorch', desc: 'Deep learning research, fine-tuning & model training', tag: 'CUDA', iconType: 'pytorch' },
      { name: 'TensorFlow', desc: 'Production inference, quantization & TPU deployment', tag: 'v2+', iconType: 'tf' },
      { name: 'LLM APIs', desc: 'OpenAI, Anthropic Claude, Gemini & open weights', tag: 'GenAI', iconType: 'llm' },
      { name: 'Vector Databases', desc: 'Pinecone, Qdrant, Milvus & pgvector indexing', tag: 'RAG', iconType: 'vector' },
      { name: 'LangChain', desc: 'Chains, memory, agent tooling & orchestration', tag: 'Agents', iconType: 'langchain' },
    ],
  },
  {
    id: 'data',
    num: '04',
    label: 'DATA',
    title: 'Storage & Streaming',
    description: 'ACID transactional databases, low-latency in-memory caches, and analytics pipelines.',
    items: [
      { name: 'PostgreSQL', desc: 'Relational data integrity, JSONB & pgvector', tag: 'SQL', iconType: 'postgres' },
      { name: 'MongoDB', desc: 'High-speed document storage & dynamic schemas', tag: 'NoSQL', iconType: 'mongo' },
      { name: 'Redis', desc: 'Sub-millisecond caching, pub/sub & rate limiting', tag: 'Cache', iconType: 'redis' },
      { name: 'Data Platforms', desc: 'Snowflake, BigQuery & Apache Kafka pipelines', tag: 'ETL', iconType: 'data' },
      { name: 'Analytics', desc: 'Telemetry, instrumentation & real-time insights', tag: 'BI', iconType: 'analytics' },
    ],
  },
  {
    id: 'cloud',
    num: '05',
    label: 'CLOUD',
    title: 'Cloud & Infrastructure',
    description: 'Multi-cloud resilience, container orchestration, and automated CI/CD pipelines.',
    items: [
      { name: 'AWS', desc: 'EC2, Lambda, ECS, S3 & distributed cloud architecture', tag: 'Cloud', iconType: 'aws' },
      { name: 'Azure', desc: 'Microsoft enterprise cloud, AKS & cognitive services', tag: 'Cloud', iconType: 'azure' },
      { name: 'Google Cloud', desc: 'GKE, Vertex AI, Cloud Run & BigQuery infrastructure', tag: 'Cloud', iconType: 'gcp' },
      { name: 'Docker', desc: 'Containerization, reproducible runtimes & microservices', tag: 'OCI', iconType: 'docker' },
      { name: 'Kubernetes', desc: 'Autoscaling, self-healing orchestration & mesh', tag: 'K8s', iconType: 'k8s' },
      { name: 'CI/CD', desc: 'GitHub Actions, automated test suites & zero-downtime deploy', tag: 'DevOps', iconType: 'cicd' },
    ],
  },
];

// Clean SVGs for each category
function CategoryIcon({ type }: { type: string }) {
  switch (type) {
    case 'frontend':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case 'backend':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case 'ai':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case 'data':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'cloud':
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
  }
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);
  const { ref: headRef, visible: headVis } = useScrollReveal(0.08);

  const filteredGroups = activeTab === 'all' ? GROUPS : GROUPS.filter((g) => g.id === activeTab);

  return (
    <section
      id="technology"
      style={{
        background: 'var(--void)',
        color: '#ffffff',
        position: 'relative',
        padding: 'clamp(80px, 10vw, 130px) 0',
        scrollMarginTop: 88,
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Ambient background celestial stars */}
      <FloatingStars starCount={36} particleSpeed={0.15} />

      {/* Cyber ambient glow backdrop */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176, 24, 42, 0.12) 0%, rgba(176, 24, 42, 0) 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224, 32, 48, 0.08) 0%, rgba(224, 32, 48, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="cx" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div ref={headRef} style={{ marginBottom: 'clamp(36px, 5vw, 64px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--red)',
                boxShadow: '0 0 10px var(--red)',
              }}
            />
            <span
              className="tag"
              style={{
                color: 'var(--red)',
                letterSpacing: '0.14em',
                fontWeight: 700,
                fontSize: '0.75rem',
              }}
            >
              TECH STACK & ARCHITECTURE
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              maxWidth: 820,
            }}
          >
            <h2
              className={`rv ${headVis ? 'in' : ''} d1`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                margin: 0,
              }}
            >
              ENGINEERED WITH MODERN TECHNOLOGY.
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.65)',
                margin: 0,
                maxWidth: 680,
              }}
            >
              Battle-tested frameworks, distributed backends, scalable AI pipelines, and enterprise cloud infrastructure engineered for zero downtime.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              marginTop: 36,
              paddingBottom: 4,
            }}
          >
            <button
              onClick={() => setActiveTab('all')}
              style={{
                padding: '8px 18px',
                borderRadius: 24,
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                border: `1px solid ${activeTab === 'all' ? 'var(--red)' : 'rgba(255, 255, 255, 0.12)'}`,
                background: activeTab === 'all' ? 'var(--red)' : 'rgba(255, 255, 255, 0.04)',
                color: '#ffffff',
                transition: 'all 0.25s ease',
                boxShadow: activeTab === 'all' ? '0 4px 16px rgba(176, 24, 42, 0.35)' : 'none',
              }}
            >
              All Systems (26)
            </button>

            {GROUPS.map((g) => {
              const isActive = activeTab === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setActiveTab(g.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 24,
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    border: `1px solid ${isActive ? 'var(--red)' : 'rgba(255, 255, 255, 0.12)'}`,
                    background: isActive ? 'var(--red)' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 4px 16px rgba(176, 24, 42, 0.35)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span>{g.label}</span>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      opacity: 0.7,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    ({g.items.length})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Cards Grid */}
        <div
          className="tech-bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: activeTab === 'all' ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
            gap: 24,
          }}
        >
          {filteredGroups.map((group, idx) => (
            <div
              key={group.id}
              className="tech-card"
              style={{
                background: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                padding: 'clamp(24px, 3.5vw, 36px)',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Subtle card top glow line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, transparent, rgba(224, 32, 48, 0.5), transparent)',
                  opacity: 0.6,
                }}
              />

              <div>
                {/* Header: Number, Icon, and Category Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: 'rgba(224, 32, 48, 0.1)',
                        border: '1px solid rgba(224, 32, 48, 0.25)',
                        color: 'var(--red)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CategoryIcon type={group.id} />
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          color: 'var(--red)',
                          letterSpacing: '0.12em',
                          fontWeight: 700,
                          display: 'block',
                        }}
                      >
                        // STACK {group.num}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          color: '#ffffff',
                          margin: '2px 0 0',
                        }}
                      >
                        {group.label}
                      </h3>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.35)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {group.items.length} MODULES
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.6)',
                    margin: '0 0 24px',
                  }}
                >
                  {group.description}
                </p>

                {/* Tech Chips Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))',
                    gap: 10,
                  }}
                >
                  {group.items.map((item) => {
                    const isHovered = hoveredTech?.name === item.name;
                    return (
                      <div
                        key={item.name}
                        onMouseEnter={() => setHoveredTech(item)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className="tech-chip"
                        style={{
                          padding: '10px 12px',
                          borderRadius: 6,
                          background: isHovered ? 'rgba(224, 32, 48, 0.16)' : 'rgba(255, 255, 255, 0.04)',
                          border: `1px solid ${isHovered ? 'rgba(224, 32, 48, 0.55)' : 'rgba(255, 255, 255, 0.08)'}`,
                          cursor: 'pointer',
                          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          boxShadow: isHovered ? '0 4px 16px rgba(176, 24, 42, 0.25)' : 'none',
                          transform: isHovered ? 'translateY(-2px)' : 'none',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: '50%',
                              background: isHovered ? 'var(--red)' : 'rgba(255, 255, 255, 0.35)',
                              boxShadow: isHovered ? '0 0 8px var(--red)' : 'none',
                              transition: 'all 0.25s ease',
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontSize: '0.875rem',
                              fontWeight: isHovered ? 600 : 500,
                              color: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
                              letterSpacing: '0.01em',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {item.name}
                          </span>
                        </div>

                        {item.tag && (
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.625rem',
                              color: isHovered ? 'var(--red)' : 'rgba(255, 255, 255, 0.35)',
                              background: isHovered ? 'rgba(224, 32, 48, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                              padding: '2px 6px',
                              borderRadius: 3,
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                              fontWeight: 600,
                              flexShrink: 0,
                            }}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Card Footer with Subtle Stat */}
              <div
                style={{
                  marginTop: 24,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span style={{ color: '#22c55e' }}>●</span> Production Active
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'rgba(255, 255, 255, 0.35)',
                    letterSpacing: '0.04em',
                  }}
                >
                  ENTERPRISE READY
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Technology Inspector Bar */}
        <div
          style={{
            marginTop: 32,
            padding: '16px 24px',
            borderRadius: 8,
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--red)',
                letterSpacing: '0.1em',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              {hoveredTech ? `// INSPECT: ${hoveredTech.name}` : '// ARCHITECTURE METRIC'}
            </span>
            <span
              style={{
                fontSize: '0.875rem',
                color: hoveredTech ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                transition: 'color 0.2s ease',
              }}
            >
              {hoveredTech
                ? hoveredTech.desc
                : 'All technology components are architected for horizontal scalability, sub-100ms response latencies, and zero single point of failure.'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'rgba(255, 255, 255, 0.45)',
                letterSpacing: '0.08em',
              }}
            >
              99.99% SYSTEM UPTIME
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .tech-card:hover {
          border-color: rgba(224, 32, 48, 0.35) !important;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45), 0 0 24px rgba(176, 24, 42, 0.12) !important;
        }
        @media (max-width: 768px) {
          .tech-bento-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
