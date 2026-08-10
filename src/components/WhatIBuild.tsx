export default function WhatIBuild() {
  const focuses = [
    {
      id: "gen-ai",
      title: "Generative AI",
      meta: "LLMs & AI APIs",
      icon: "🤖",
      description:
        "Building applications powered by modern LLMs, AI APIs, prompt engineering, RAG, and intelligent automation.",
      tags: ["LLMs", "Prompt Engineering", "RAG", "AI APIs"]
    },
    {
      id: "multi-agent",
      title: "Multi-Agent Systems",
      meta: "Autonomous AI",
      icon: "🕸️",
      description:
        "Designing systems where specialized AI agents collaborate to solve complex tasks autonomously.",
      tags: ["Agent Orchestration", "Event Bus", "Autonomous Workflows"]
    },
    {
      id: "fullstack",
      title: "Full-Stack Engineering",
      meta: "MERN & React",
      icon: "🧱",
      description:
        "Creating modern web applications with robust backend services, databases, APIs, and intuitive interfaces.",
      tags: ["React", "Node.js", "REST APIs", "WebSockets"]
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      meta: "GCP & Firebase",
      icon: "☁️",
      description:
        "Learning how to design scalable, reliable, and cloud-ready software systems using Firebase, GCP, and Docker.",
      tags: ["Firebase", "GCP", "Docker", "Distributed Systems"]
    }
  ];

  return (
    <section id="what-i-build">
      <div className="container">
        <span className="section-label">WHAT I'M FOCUSED ON</span>
        <h2 className="section-title">Exploring what's next in<br />intelligent software.</h2>
        <p className="section-desc">
          The core technical domains I'm actively building, learning, and experimenting in.
        </p>

        <div className="cards-grid">
          {focuses.map((focus) => (
            <div key={focus.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Icon + meta */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                <span style={{ fontSize: '28px' }}>{focus.icon}</span>
                <span className="project-meta" style={{ margin: 0 }}>{focus.meta}</span>
              </div>

              <h3 style={{ margin: 0 }}>{focus.title}</h3>

              <p style={{ margin: 0 }}>{focus.description}</p>

              {/* Tags */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '6px',
                paddingTop: '16px', marginTop: 'auto',
                borderTop: '1px solid var(--border)'
              }}>
                {focus.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
