import { Mail, Github, Linkedin, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dhxtchn@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '120px 0 80px',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow behind the text */}
      <div style={{
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '650px',
        height: '650px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>

        {/* Label row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          marginBottom: '32px',
        }}>
          <div style={{ width: '36px', height: '1.5px', background: 'var(--primary)', borderRadius: '2px' }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--primary)',
            fontWeight: 600,
          }}>
            Let's Connect
          </span>
          <div style={{ width: '36px', height: '1.5px', background: 'var(--primary)', borderRadius: '2px' }} />
        </div>

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(38px, 7vw, 80px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: '20px',
            maxWidth: '820px',
            margin: '0 auto 20px',
          }}
        >
          Let's build something<br />
          <span style={{
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            meaningful.
          </span>
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            color: 'var(--text-muted)',
            fontSize: '16px',
            lineHeight: 1.75,
            maxWidth: '520px',
            margin: '0 auto 48px',
            fontFamily: 'var(--font-main)',
          }}
        >
          Open for software engineering roles, AI system projects, and ambitious collaborations.
        </motion.p>

        {/* Name + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: '44px' }}
        >
          <p style={{
            fontFamily: 'var(--font-main)',
            fontSize: '16px',
            color: 'var(--text)',
            fontWeight: 600,
            marginBottom: '6px',
          }}>
            Dhatchan K R
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--primary)',
            fontStyle: 'italic',
          }}>
            "Authenticity breeds identity."
          </p>
        </motion.div>

        {/* Action buttons (Back to Top removed) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
          }}
        >
          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/dhatchankr"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="contact-action-btn contact-action-btn--fill"
          >
            <Linkedin size={15} />
            LinkedIn
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/dhatchankr"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="contact-action-btn contact-action-btn--outline"
          >
            <Github size={15} />
            GitHub
          </motion.a>

          {/* Email copy */}
          <motion.button
            onClick={handleCopyEmail}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="contact-action-btn contact-action-btn--outline"
          >
            {copied
              ? <><Check size={15} />Copied!</>
              : <><Mail size={15} />Email</>
            }
          </motion.button>
        </motion.div>

        {/* Divider */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)',
          margin: '60px auto 28px',
          maxWidth: '600px',
        }} />

        {/* Footer note */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'rgba(136,146,164,0.5)',
          letterSpacing: '0.04em',
        }}>
          dhxtchn@gmail.com &nbsp;·&nbsp; Tamil Nadu, India &nbsp;·&nbsp; Open to remote worldwide
        </p>

      </div>

      <style>{`
        .contact-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 26px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-main);
          cursor: none;
          border: none;
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .contact-action-btn--fill {
          background: #ffffff;
          color: #0a0c12;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
        }
        .contact-action-btn--fill:hover {
          background: var(--primary);
          color: #0a0c12;
          box-shadow: 0 6px 28px rgba(212, 175, 55, 0.45);
        }
        .contact-action-btn--outline {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
        }
        .contact-action-btn--outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(212, 175, 55, 0.3);
          color: var(--primary);
        }
      `}</style>
    </section>
  );
}
