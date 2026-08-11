import { motion } from "motion/react";
import profileImg from "../assets/images/profile.jpg";
import { CheckCircle2, Award, Zap, Code, ShieldCheck, MapPin, GraduationCap } from "lucide-react";

export default function About() {
  const capabilities = [
    { title: "Multi-Agent AI Workflows", desc: "Event-driven orchestration using Gemini & LangChain." },
    { title: "Local RAG Pipelines", desc: "High-accuracy vector search & contextual document retrieval." },
    { title: "Full-Stack Architecture", desc: "Modern React, TypeScript, Node.js & REST APIs." },
    { title: "Cloud & Microservices", desc: "Docker containerization, GCP deployment & serverless." },
  ];

  return (
    <section id="about" style={{ padding: '110px 0', borderTop: '1px solid var(--border)', position: 'relative' }}>
      <div className="container">

        {/* Header Label */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">Engineering Profile</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
            Crafting Intelligent Systems
          </h2>
          <p className="section-desc" style={{ margin: '0 auto', maxWidth: '620px' }}>
            Bridging foundational computer science with cutting-edge AI architecture & production-ready software engineering.
          </p>
        </div>

        {/* Main Grid: Photo Card + Story & Highlights */}
        <div className="about-redesign-grid">

          {/* Left: Premium Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="profile-card" style={{ width: '100%', maxWidth: '320px' }}>
              <div className="profile-img-wrap" style={{ width: '100%', height: '400px', borderRadius: '24px' }}>
                <img
                  src={profileImg}
                  alt="Dhatchan K R — Software Engineer"
                  className="profile-img"
                />
                <div className="profile-img-overlay" />
                <div className="profile-corner profile-corner--tl" />
                <div className="profile-corner profile-corner--tr" />
                <div className="profile-corner profile-corner--bl" />
                <div className="profile-corner profile-corner--br" />
              </div>
            </div>
          </motion.div>

          {/* Center/Right: Detailed Story & Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            {/* Story Card */}
            <div className="glass-card" style={{ padding: '32px', borderRadius: '20px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text)', marginBottom: '14px', fontFamily: 'var(--font-heading)' }}>
                Engineering Mindset
              </h3>
              <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '16px' }}>
                I specialize in bridging deep algorithmic computer science foundations (C++, Java, Python) with modern, production-grade full-stack web applications and autonomous AI agent systems.
              </p>
              <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'var(--text-muted)' }}>
                My focus centers on high-throughput RAG search pipelines, multi-agent LLM decision loops, and responsive web user interfaces designed with meticulous attention to visual detail and performance.
              </p>
            </div>

            {/* Core Capability Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    padding: '18px 20px',
                    borderRadius: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, fontSize: '14px' }}>
                    <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
                    <span>{cap.title}</span>
                  </div>
                  <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontFamily: 'var(--font-main)', lineHeight: 1.5 }}>
                    {cap.desc}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* Bottom Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: '56px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          <div className="glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ color: 'var(--primary)', background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '12px' }}>
              <GraduationCap size={22} />
            </div>
            <div>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Degree</span>
              <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', margin: 0 }}>B.E. CCE (2024–2028)</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ color: 'var(--primary)', background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '12px' }}>
              <Award size={22} />
            </div>
            <div>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Focus</span>
              <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', margin: 0 }}>AI & Full-Stack Systems</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ color: 'var(--primary)', background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '12px' }}>
              <MapPin size={22} />
            </div>
            <div>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</span>
              <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', margin: 0 }}>Tamil Nadu, India</p>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        .about-redesign-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .about-redesign-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
