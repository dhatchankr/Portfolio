import { Github, ExternalLink } from "lucide-react";

export default function GitHub() {
  const matrix = Array.from({ length: 28 }, () => Math.floor(Math.random() * 5));

  const getColor = (val: number) =>
    ['var(--bg-subtle)', 'rgba(16,185,129,0.2)', 'rgba(16,185,129,0.4)', 'rgba(16,185,129,0.65)', 'rgba(16,185,129,0.9)'][val] ?? 'var(--bg-subtle)';

  return (
    <section>
      <div className="container">
        <span className="section-label">OPEN SOURCE ACTIVITY</span>
        <h2 className="section-title">GitHub Command Center</h2>
        <p className="section-desc">Live metric telemetry and activity stream from github.com/dhatchankr</p>

        <div className="glass-card" style={{ padding: '32px' }}>
          {/* Header */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '16px',
            borderBottom: '1px solid var(--border)', paddingBottom: '24px', marginBottom: '28px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                padding: '12px', borderRadius: '12px',
                background: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--text)'
              }}>
                <Github size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                  github.com/dhatchankr
                </h3>
                <p style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--accent)', margin: 0 }}>
                  Dhatchan K R — AI Engineer &amp; Developer
                </p>
              </div>
            </div>
            <a
              href="https://github.com/dhatchankr"
              target="_blank" rel="noreferrer"
              className="btn btn-primary"
              style={{ fontSize: '13px', padding: '10px 20px' }}
            >
              <span>Follow on GitHub</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Metrics */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '16px', marginBottom: '28px'
          }}>
            {[
              { val: '480+', label: 'Total Commits', color: 'var(--text)' },
              { val: '18+', label: 'Repositories', color: 'var(--accent)' },
              { val: '35+', label: 'Stars Earned', color: 'var(--primary)' },
              { val: '100%', label: 'Open Source', color: 'var(--secondary)' },
            ].map(({ val, label, color }) => (
              <div key={label} style={{
                padding: '16px', borderRadius: '10px',
                background: 'var(--bg-subtle)', border: '1px solid var(--border)', textAlign: 'center'
              }}>
                <div style={{ fontSize: '22px', fontWeight: 700, color, fontFamily: 'var(--font-mono)' }}>{val}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Contribution grid */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: '12px', fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)', marginBottom: '10px'
            }}>
              <span>Contribution Matrix (2025 — 2026)</span>
              <span style={{ color: 'var(--accent)' }}>Active Daily Committer</span>
            </div>
            <div style={{ overflowX: 'auto', paddingBottom: '8px' }}>
              <div style={{
                display: 'grid', gridTemplateRows: 'repeat(4, 16px)',
                gridAutoFlow: 'column', gap: '4px', minWidth: '600px'
              }}>
                {matrix.map((val, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '16px', height: '16px', borderRadius: '3px',
                      background: getColor(val), border: '1px solid var(--border)',
                      transition: 'transform 0.2s ease, background 0.2s ease'
                    }}
                    title={`Activity level: ${val}`}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.3)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Language bar */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: '12px', fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)', marginBottom: '10px'
            }}>
              <span>Primary Tech Breakdown</span>
              <span>Python · TypeScript · React · C++</span>
            </div>
            <div style={{
              height: '10px', background: 'var(--bg-subtle)',
              borderRadius: '20px', overflow: 'hidden', display: 'flex',
              border: '1px solid var(--border)'
            }}>
              <div style={{ height: '100%', background: 'var(--primary)', width: '40%' }} title="Python 40%" />
              <div style={{ height: '100%', background: 'var(--secondary)', width: '30%' }} title="TypeScript 30%" />
              <div style={{ height: '100%', background: 'var(--accent)', width: '20%' }} title="JavaScript 20%" />
              <div style={{ height: '100%', background: '#f59e0b', width: '10%' }} title="Other 10%" />
            </div>
            <div style={{
              display: 'flex', gap: '16px', marginTop: '10px',
              fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)'
            }}>
              {[
                { label: 'Python', color: 'var(--primary)' },
                { label: 'TypeScript', color: 'var(--secondary)' },
                { label: 'JavaScript', color: 'var(--accent)' },
                { label: 'Other', color: '#f59e0b' },
              ].map(({ label, color }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
