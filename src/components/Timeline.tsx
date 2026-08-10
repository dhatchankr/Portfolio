export default function Timeline() {
  const journey = [
    {
      year: "2024",
      role: "Started Engineering Journey",
      org: "Computer & Communication Engineering",
      description:
        "Began my B.E. journey and started exploring programming, software development, and problem solving. Dived into core CS fundamentals: Data Structures, Algorithms, and Systems Programming.",
      tags: ["DSA", "C / C++", "Python", "Web Basics"]
    },
    {
      year: "2025",
      role: "Started Building Real Projects",
      org: "Self-Directed Development",
      description:
        "Moved beyond academic exercises and began developing complete applications involving web development, databases, APIs, and AI. Built first full-stack and AI-integrated products.",
      tags: ["React", "Node.js", "MongoDB", "REST APIs", "Firebase"]
    },
    {
      year: "2025 — 2026",
      role: "Exploring Artificial Intelligence",
      org: "AI Research & Engineering",
      description:
        "Focused deeply on Machine Learning, NLP, Computer Vision, Generative AI, and AI-powered applications. Built RAG pipelines, deepfake detection systems, and AI chat platforms.",
      tags: ["LLMs", "RAG", "NLP", "Computer Vision", "Generative AI"]
    },
    {
      year: "2026",
      role: "Multi-Agent & Cloud Systems",
      org: "TeachSphere AI & Open Source",
      description:
        "Architected TeachSphere AI — a multi-agent education platform with 5 specialized AI agents. Explored event-driven architecture, cloud infrastructure, and autonomous AI workflows.",
      tags: ["Multi-Agent", "Event Bus", "GCP", "Docker", "Socket.IO"]
    },
    {
      year: "Now",
      role: "Building. Learning. Experimenting.",
      org: "Continuous Growth",
      description:
        "Continuously developing projects, exploring emerging technologies like LangGraph, MCP, and advanced RAG — and improving software engineering skills every day.",
      tags: ["LangGraph", "MCP", "Advanced RAG", "System Design"]
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <span className="section-label">MY JOURNEY</span>
        <h2 className="section-title">From curiosity to<br />engineering.</h2>
        <p className="section-desc">
          My path through engineering, AI exploration, and building real-world projects.
        </p>

        <div className="timeline-wrap">
          {journey.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap' }}>
                  <span className="timeline-year">{item.year}</span>
                  <span style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {item.org}
                  </span>
                </div>
                <div className="timeline-role">{item.role}</div>
                <p style={{
                  fontSize: '14.5px', color: 'var(--text-muted)',
                  lineHeight: 1.7, fontFamily: 'var(--font-main)',
                  margin: '6px 0 14px'
                }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {item.tags.map((t) => (
                    <span key={t} className="tag">✓ {t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
