export default function FutureVision() {
  const principles = [
    { label: "Intelligent", desc: "Able to understand information and make useful decisions." },
    { label: "Scalable", desc: "Designed to handle growing users, data, and workloads." },
    { label: "Practical", desc: "Focused on solving actual problems." },
    { label: "Human-Centered", desc: "Technology should simplify people's lives." }
  ];

  return (
    <section>
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: '64px 48px',
            textAlign: 'center',
            background: 'rgba(17, 23, 38, 0.8)',
            borderColor: 'rgba(59, 130, 246, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Ambient blobs */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)', pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0,
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)', pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center', marginBottom: '16px' }}>
              MY APPROACH
            </span>

            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--text)',
              lineHeight: 1.15,
              marginBottom: '20px'
            }}>
              AI should solve problems,<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                not just impress people.
              </span>
            </h2>

            <p style={{
              color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.75,
              maxWidth: '640px', margin: '0 auto 40px',
              fontFamily: 'var(--font-main)'
            }}>
              I believe the most useful AI applications are the ones that quietly solve difficult problems.
              Instead of treating AI as an isolated feature, I focus on integrating intelligence into complete
              software systems — combining AI models, APIs, databases, backend services, user interfaces, and cloud infrastructure.
            </p>

            <p style={{
              color: 'var(--text-muted)', fontSize: '15px',
              fontFamily: 'var(--font-mono)',
              marginBottom: '36px'
            }}>
              My goal is to build systems that are:
            </p>

            {/* Principles grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              textAlign: 'left'
            }}>
              {principles.map((p) => (
                <div key={p.label} style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '20px',
                  transition: 'border-color 0.3s ease'
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-glow)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <strong style={{
                    display: 'block', fontSize: '16px', fontWeight: 700,
                    color: 'var(--text)', fontFamily: 'var(--font-heading)',
                    marginBottom: '8px'
                  }}>
                    {p.label}.
                  </strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
