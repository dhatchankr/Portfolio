import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About",       href: "#about" },
    { name: "What I Build",href: "#what-i-build" },
    { name: "Skills",      href: "#skills" },
    { name: "Projects",    href: "#projects" },
    { name: "Experience",  href: "#experience" },
    { name: "Contact",     href: "#contact" },
  ];

  return (
    <nav>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <a href="#hero" style={{
          fontFamily: 'var(--font-heading)', fontWeight: 800,
          fontSize: '18px', color: 'var(--text)', letterSpacing: '0.04em',
          textTransform: 'uppercase'
        }}>
          DHATCHAN K R<span style={{ color: 'var(--primary)' }}>.</span>
        </a>

        {/* Desktop nav links */}
        <ul style={{
          display: 'flex', gap: '28px', listStyle: 'none', margin: 0, padding: 0
        }} id="nav-desktop">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{
                  fontSize: '14px', fontWeight: 500,
                  color: 'var(--text-muted)', transition: 'color 0.25s ease',
                  fontFamily: 'var(--font-main)'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          id="nav-mobile-toggle"
          style={{
            display: 'none', padding: '8px',
            color: 'var(--text-muted)', background: 'none',
            border: 'none', cursor: 'pointer'
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          borderTop: '1px solid var(--border)',
          background: 'rgba(9,13,22,0.97)',
          padding: '16px 24px',
          display: 'flex', flexDirection: 'column', gap: '0'
        }}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '14px', fontWeight: 500, color: 'var(--text-muted)',
                padding: '14px 0', borderBottom: '1px solid var(--border)',
                fontFamily: 'var(--font-main)', transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #nav-desktop { display: none !important; }
          #nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
