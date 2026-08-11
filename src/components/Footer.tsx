import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      padding: '60px 0 36px',
      borderTop: '1px solid var(--border)',
      background: 'rgba(8, 10, 16, 0.95)',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          maxWidth: '700px',
          margin: '0 auto'
        }}>

          {/* Large Name Headline */}
          <h2 style={{
            fontFamily: 'var(--font-main)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 42px)',
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            Dhatchan K R
          </h2>

          {/* Subtitle / Role Tagline */}
          <p style={{
            fontFamily: 'var(--font-main)',
            fontSize: '14.5px',
            color: 'var(--text-muted)',
            margin: 0,
            lineHeight: 1.6
          }}>
            Passionate Software Engineer &nbsp;|&nbsp; Full-Stack &amp; AI Systems Developer &nbsp;|&nbsp; Problem Solver &nbsp;|&nbsp; Tech Enthusiast
          </p>

          {/* Circular Social Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '6px' }}>
            {[
              { href: 'https://github.com/dhatchankr', icon: <Github size={18} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/dhatchankr/', icon: <Linkedin size={18} />, label: 'LinkedIn' },
              { href: 'mailto:dhxtchn@gmail.com', icon: <Mail size={18} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                title={label}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--text)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--primary)';
                  e.currentTarget.style.color = '#0a0c12';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = 'var(--text)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
            margin: '12px 0 0'
          }} />

          {/* Copyright Note */}
          <p style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-main)',
            margin: 0
          }}>
            © {new Date().getFullYear()} Dhatchan K R. Architected &amp; Crafted with <span style={{ color: '#e05555' }}>❤️</span> using React, TypeScript &amp; Vite.
          </p>

        </div>
      </div>
    </footer>
  );
}
