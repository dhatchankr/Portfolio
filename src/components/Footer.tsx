import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>

          {/* Logo */}
          <a href="#hero" style={{
            fontFamily: 'var(--font-heading)', fontWeight: 800,
            fontSize: '18px', color: 'var(--text)', letterSpacing: '0.04em',
            textTransform: 'uppercase'
          }}>
            DHATCHAN K R<span style={{ color: 'var(--primary)' }}>.</span>
          </a>

          {/* Tagline */}
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '13px',
            color: 'var(--text-muted)', margin: 0
          }}>
            AI Engineer &nbsp;•&nbsp; Full-Stack Developer &nbsp;•&nbsp; Cloud Enthusiast
          </p>

          {/* Social links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {[
              { href: 'https://github.com/dhatchankr', icon: <Github size={16} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/dhatchankr/', icon: <Linkedin size={16} />, label: 'LinkedIn' },
              { href: 'mailto:dhxtchn@gmail.com', icon: <Mail size={16} />, label: 'dhxtchn@gmail.com' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                title={label}
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  color: 'var(--text-muted)', fontSize: '13px',
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />

          {/* Bottom row */}
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '12px'
          }}>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', margin: 0 }}>
              Designed &amp; built with curiosity, code, and AI.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', margin: 0 }}>
                © {new Date().getFullYear()} Dhatchan K R. All rights reserved.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                title="Back to top"
                style={{
                  padding: '8px', borderRadius: '8px',
                  background: 'var(--bg-subtle)', border: '1px solid var(--border)',
                  color: 'var(--text-muted)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.color = 'var(--text)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
