const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "Start by understanding the real problem, identifying the users, constraints, and expected outcome.",
    color: "var(--primary)"
  },
  {
    num: "02",
    title: "Architect",
    desc: "Design the system architecture, data flow, APIs, AI components, and technology choices before implementation.",
    color: "var(--secondary)"
  },
  {
    num: "03",
    title: "Build",
    desc: "Turn the architecture into a working product using modern development tools and frameworks.",
    color: "#22d3ee"
  },
  {
    num: "04",
    title: "Integrate AI",
    desc: "When AI can create meaningful value, integrate intelligent capabilities — not just for the sake of it.",
    color: "var(--accent)"
  },
  {
    num: "05",
    title: "Improve",
    desc: "Test, analyze, optimize, and continuously improve the product based on performance and usability.",
    color: "#ec4899"
  }
];

export default function WhyHireMe() {
  return (
    <section>
      <div className="container">
        <span className="section-label">HOW I BUILD</span>
        <h2 className="section-title">From problem to product.</h2>
        <p className="section-desc">
          My approach to engineering — every project follows the same philosophy: understand first, then build with intention.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {steps.map((step, idx) => (
            <div
              key={step.num}
              style={{
                display: 'flex',
                gap: '28px',
                alignItems: 'flex-start',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '24px 28px',
                transition: 'border-color 0.3s ease, transform 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-glow)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              {/* Step number */}
              <div style={{
                fontSize: '28px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                color: step.color,
                opacity: 0.85,
                flexShrink: 0,
                minWidth: '48px'
              }}>
                {step.num}
              </div>

              <div>
                <h3 style={{
                  fontSize: '19px', fontWeight: 700, color: 'var(--text)',
                  fontFamily: 'var(--font-heading)', marginBottom: '8px'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '14.5px', color: 'var(--text-muted)',
                  lineHeight: 1.7, fontFamily: 'var(--font-main)', margin: 0
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
