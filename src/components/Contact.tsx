import { Mail, Github, Linkedin, MapPin, Send, Check, Copy, Sparkles, MessageSquare, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFocus, setActiveFocus] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dhxtchn@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const contactRows = [
    {
      id: "email",
      icon: <Mail size={18} />,
      label: "dhxtchn@gmail.com",
      actionLabel: copied ? "Copied to Clipboard!" : "Click to Copy Email",
      onClick: handleCopyEmail,
      href: undefined,
      color: '#ef4444',
      badge: "Primary Contact"
    },
    {
      id: "github",
      icon: <Github size={18} />,
      label: "github.com/dhatchankr",
      actionLabel: "View Code & Repositories ↗",
      href: "https://github.com/dhatchankr",
      color: '#3b82f6',
      badge: "GitHub Profile"
    },
    {
      id: "linkedin",
      icon: <Linkedin size={18} />,
      label: "linkedin.com/in/dhatchankr",
      actionLabel: "Connect on LinkedIn ↗",
      href: "https://linkedin.com/in/dhatchankr",
      color: '#0ea5e9',
      badge: "Professional Network"
    },
    {
      id: "location",
      icon: <MapPin size={18} />,
      label: "Tamil Nadu, India",
      actionLabel: "Available Worldwide (Remote / On-site)",
      href: undefined,
      color: '#10b981',
      badge: "Location"
    },
  ];

  const quickTopics = [
    "AI Agent Systems",
    "Full-Stack Web App",
    "RAG & Vector Search",
    "Open Source Collab",
    "Hiring / Internship"
  ];

  return (
    <section id="contact" style={{ padding: '100px 0', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        
        {/* Top Accent Line */}
        <div style={{
          width: '60px',
          height: '3px',
          borderRadius: '2px',
          background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
          marginBottom: '20px'
        }} />

        <h2 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>Get in Touch</h2>
        <p className="section-desc" style={{ maxWidth: '650px', fontSize: '16px' }}>
          Open for software engineering roles, AI system projects, cloud architecture, and ambitious collaborations. Let's turn ideas into high-impact reality.
        </p>

        <div className="contact-layout" style={{ marginTop: '40px' }}>
          
          {/* Left Column: Interactive Contact Link Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(17,23,38,0.5)', border: '1px solid var(--border)', backdropFilter: 'blur(12px)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} style={{ color: 'var(--primary)' }} />
                <span>Direct Connection Channels</span>
              </h3>

              <div className="contact-links" style={{ gap: '14px' }}>
                {contactRows.map((row) => {
                  const Content = (
                    <motion.div
                      whileHover={{ x: 6, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onMouseEnter={() => setActiveFocus(row.id)}
                      onMouseLeave={() => setActiveFocus(null)}
                      style={{
                        padding: '16px 20px',
                        background: activeFocus === row.id ? 'rgba(59, 130, 246, 0.12)' : 'var(--bg-subtle)',
                        border: activeFocus === row.id ? '1px solid var(--primary)' : '1px solid var(--border)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        boxShadow: activeFocus === row.id ? '0 8px 25px -5px rgba(59,130,246,0.25)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{
                          padding: '10px',
                          borderRadius: '10px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid var(--border)',
                          color: row.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                          {row.icon}
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>
                              {row.label}
                            </span>
                          </div>
                          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-main)' }}>
                            {row.actionLabel}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight size={16} style={{
                        color: activeFocus === row.id ? 'var(--primary)' : 'var(--text-muted)',
                        transform: activeFocus === row.id ? 'translate(2px, -2px)' : 'none',
                        transition: 'transform 0.2s ease, color 0.2s ease'
                      }} />
                    </motion.div>
                  );

                  return row.href ? (
                    <a
                      key={row.id}
                      href={row.href}
                      target={row.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      {Content}
                    </a>
                  ) : (
                    <div key={row.id} onClick={row.onClick}>
                      {Content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Topic Chips */}
            <div style={{ padding: '20px 24px', borderRadius: '16px', background: 'rgba(17,23,38,0.4)', border: '1px solid var(--border)' }}>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
                Quick Subject Selector:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {quickTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setForm((prev) => ({ ...prev, subject: `Discussion: ${topic}` }))}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      background: form.subject.includes(topic) ? 'rgba(59,130,246,0.2)' : 'var(--bg-subtle)',
                      border: form.subject.includes(topic) ? '1px solid var(--primary)' : '1px solid var(--border)',
                      color: form.subject.includes(topic) ? '#fff' : 'var(--text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    + {topic}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Premium Interactive Form */}
          <div className="glass-card" style={{ padding: '32px', borderRadius: '20px', border: '1px solid var(--border-glow)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageSquare size={20} style={{ color: 'var(--primary)' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                  Send Message
                </h3>
              </div>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent)', background: 'rgba(16,185,129,0.1)', padding: '4px 10px', borderRadius: '12px', border: '1px solid rgba(16,185,129,0.3)' }}>
                ● Active Response
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '60px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
              >
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.5)',
                  color: 'var(--accent)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', boxShadow: '0 0 30px rgba(16,185,129,0.3)'
                }}>
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                  Message Delivered!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '380px', lineHeight: 1.6 }}>
                  Thank you <strong style={{ color: 'var(--primary)' }}>{form.name}</strong>. Your note was received, and I will reply to <span style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>{form.email}</span> shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" style={{ gap: '20px' }}>
                
                <div>
                  <label className="form-label" style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="form-input"
                    style={{ background: 'var(--bg-subtle)', borderRadius: '10px' }}
                  />
                </div>

                <div>
                  <label className="form-label" style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email" required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="form-input"
                    style={{ background: 'var(--bg-subtle)', borderRadius: '10px' }}
                  />
                </div>

                <div>
                  <label className="form-label" style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="AI Application Project / Internship Opportunity"
                    className="form-input"
                    style={{ background: 'var(--bg-subtle)', borderRadius: '10px' }}
                  />
                </div>

                <div>
                  <label className="form-label" style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>
                    YOUR MESSAGE
                  </label>
                  <textarea
                    rows={5} required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or role details..."
                    className="form-input"
                    style={{ background: 'var(--bg-subtle)', borderRadius: '10px' }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '16px', borderRadius: '12px', fontSize: '15px', fontWeight: 700 }}
                >
                  <Send size={16} />
                  <span>Send Message Directly</span>
                </motion.button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
