import { motion } from "motion/react";
import { Sparkles, Terminal, Code2, Cpu } from "lucide-react";

export default function Hero() {
  const badges = [
    { title: "Multi-Agent Systems", sub: "Autonomous Workflows", icon: <Cpu size={16} /> },
    { title: "Local RAG",           sub: "Vector Search Pipelines", icon: <Terminal size={16} /> },
    { title: "Full Stack",          sub: "React & Node.js", icon: <Code2 size={16} /> },
    { title: "Cloud Services",      sub: "GCP & Docker", icon: <Sparkles size={16} /> },
  ];

  return (
    <section id="hero" className="hero" style={{ padding: '130px 0 90px', textAlign: 'center' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="status-pill"
          style={{ margin: '0 auto 28px' }}
        >
          <span className="status-dot" />
          Available for Software &amp; AI Engineering Roles
        </motion.div>

        {/* Hero Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(44px, 7.5vw, 84px)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--text)',
            marginBottom: '18px',
          }}
        >
          Dhatchan K R
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-subtitle"
          style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 600,
            color: 'var(--primary)',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Software Engineer · Full Stack &amp; AI Systems
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-bio"
          style={{
            maxWidth: '680px',
            margin: '0 auto 40px',
            fontSize: '17px',
            lineHeight: 1.75,
            color: 'var(--text-muted)',
          }}
        >
          Building high-performance web applications, multi-agent AI workflows, and local RAG pipelines.
          Specialized in React, TypeScript, Python, and scalable Cloud architectures.
        </motion.p>

        {/* CTAs Centered */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-ctas"
          style={{ justifyContent: 'center', marginBottom: '64px' }}
        >
          <a href="#projects" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
            Explore Projects
          </a>
          <a href="#contact" className="btn btn-secondary" style={{ padding: '14px 32px', fontSize: '15px' }}>
            Contact Me
          </a>
        </motion.div>

        {/* Badge cards — centered layout */}
        <div className="hero-badges" style={{ width: '100%', marginTop: '0' }}>
          {badges.map((b) => (
            <div key={b.title} className="badge-item" style={{ textAlign: 'left', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{
                color: 'var(--primary)',
                background: 'rgba(212, 175, 55, 0.1)',
                padding: '8px',
                borderRadius: '8px',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                flexShrink: 0
              }}>
                {b.icon}
              </div>
              <div>
                <strong>{b.title}</strong>
                <span>{b.sub}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
