import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "About",       href: "#about" },
    { name: "What I Build",href: "#what-i-build" },
    { name: "Skills",      href: "#skills" },
    { name: "Projects",    href: "#projects" },
    { name: "Experience",  href: "#experience" },
    { name: "Contact",     href: "#contact", highlight: true },
  ];

  return (
    <>
      <div className="gnav-wrap">
        <nav className={`gnav ${scrolled ? "gnav--scrolled" : ""}`}>
          <ul className="gnav-list" id="nav-desktop">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={`gnav-link${link.highlight ? " gnav-link--cta" : ""}`}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile row */}
          <div className="gnav-mobile-row">
            <a href="#hero" className="gnav-brand">Dhatchan K R</a>
            <button onClick={() => setOpen(!open)} className="gnav-toggle">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="gnav-drawer">
          {links.map((link) => (
            <a key={link.name} href={link.href}
               onClick={() => setOpen(false)}
               className="gnav-drawer-link">
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .gnav-wrap {
          position: fixed;
          top: 18px;
          left: 0; right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          pointer-events: none;
          padding: 0 16px;
        }

        .gnav {
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 50px;
          background: rgba(12, 15, 26, 0.55);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow:
            0 8px 32px -8px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gnav--scrolled {
          padding: 4px 8px;
          background: rgba(10, 12, 22, 0.85);
          border-color: rgba(212, 175, 55, 0.2);
          box-shadow:
            0 10px 36px -8px rgba(0, 0, 0, 0.75),
            0 0 24px rgba(212, 175, 55, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .gnav-list {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0; padding: 0;
          transition: gap 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gnav--scrolled .gnav-list {
          gap: 0px;
        }

        .gnav-link {
          display: block;
          padding: 7px 16px;
          border-radius: 30px;
          font-size: 13.5px;
          font-weight: 500;
          font-family: var(--font-main);
          color: rgba(240, 237, 230, 0.6);
          text-decoration: none;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          letter-spacing: 0.01em;
        }

        .gnav--scrolled .gnav-link {
          padding: 5px 12px;
          font-size: 12.5px;
        }

        .gnav-link:hover {
          color: var(--text);
          background: rgba(255, 255, 255, 0.07);
        }

        /* Contact CTA pill */
        .gnav-link--cta {
          color: var(--primary);
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.22);
          padding: 6px 18px;
          font-weight: 600;
        }

        .gnav--scrolled .gnav-link--cta {
          padding: 4px 14px;
        }

        .gnav-link--cta:hover {
          background: rgba(212, 175, 55, 0.2);
          color: var(--secondary);
          box-shadow: 0 0 18px rgba(212, 175, 55, 0.2);
        }

        /* Mobile */
        .gnav-mobile-row {
          display: none;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          padding: 2px 6px;
        }

        .gnav-brand {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 700;
          color: var(--text);
          text-decoration: none;
        }

        .gnav-toggle {
          padding: 6px;
          color: var(--text-muted);
          background: none;
          border: none;
          cursor: none;
          display: flex;
          align-items: center;
        }

        .gnav-drawer {
          position: fixed;
          top: 72px;
          left: 16px; right: 16px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          background: rgba(10, 12, 22, 0.94);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 10px 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }

        .gnav-drawer-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-family: var(--font-main);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .gnav-drawer-link:last-child { border-bottom: none; }
        .gnav-drawer-link:hover { color: var(--primary); }

        @media (max-width: 768px) {
          .gnav-list { display: none; }
          .gnav-mobile-row { display: flex; }
          .gnav { width: 100%; max-width: 420px; }
        }
      `}</style>
    </>
  );
}
