'use client';

const NAV_LINKS = ['Services', 'Solutions', 'Industries', 'Process', 'About', 'Insights', 'Contact'];
const SERVICE_LINKS = ['Software Development', 'AI Solutions', 'Product Engineering', 'Cloud & DevOps', 'Data & Analytics'];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--void)', borderTop: '1px solid var(--void-border)' }}>
      <div className="cx" style={{ paddingTop: 80, paddingBottom: 40 }}>
        {/* Top row */}
        <div className="grid-responsive-4" style={{ marginBottom: 72, paddingBottom: 72, borderBottom: '1px solid var(--void-border)' }}>
          {/* Logo + tagline */}
          <div>
            <a href="#" style={{ textDecoration: 'none', display: 'inline-block', lineHeight: 1, marginBottom: 24 }}>
              <img src="/logo.png" alt="Acquiring Technology" style={{ height: 32, width: 'auto' }} />
            </a>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--fg-white-40)', maxWidth: 300, margin: 0 }}>
              We build software and engineer intelligence. Helping businesses turn complex ideas into scalable digital products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="tag" style={{ color: 'var(--fg-white-40)', display: 'block', marginBottom: 24 }}>Navigation</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV_LINKS.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  style={{ color: 'var(--fg-white-70)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg-white)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-white-70)')}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <span className="tag" style={{ color: 'var(--fg-white-40)', display: 'block', marginBottom: 24 }}>Services</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SERVICE_LINKS.map((l) => (
                <a
                  key={l}
                  href="#contact"
                  style={{ color: 'var(--fg-white-70)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg-white)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-white-70)')}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <span className="tag" style={{ color: 'var(--fg-white-40)', display: 'block', marginBottom: 24 }}>Contact</span>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--fg-white-40)', marginBottom: 20 }}>
              Ready to build? Let&apos;s talk.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: 'var(--red)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                borderRadius: 3,
                transition: 'background 0.25s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--red-dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--red)')}
            >
              START A PROJECT
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontSize: '0.8125rem', color: 'var(--fg-white-40)' }}>
            © 2026 Acquiring Technology. All Rights Reserved.
          </span>
          <span className="tag" style={{ color: 'var(--fg-white-40)', fontSize: '0.5rem', letterSpacing: '0.12em' }}>
            Software Engineering • AI • Digital Transformation
          </span>
        </div>
      </div>
    </footer>
  );
}
