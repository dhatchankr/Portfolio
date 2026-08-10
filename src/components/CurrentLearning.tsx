const learningItems = [
  {
    title: "Agentic AI",
    icon: "🤖",
    status: "Active Exploration",
    description:
      "Building autonomous systems where AI agents can reason, collaborate, plan, and execute complex multi-step tasks independently.",
    tags: ["LangGraph", "Tool Calling", "Stateful Graphs"]
  },
  {
    title: "RAG Systems",
    icon: "📚",
    status: "Deep Dive",
    description:
      "Exploring retrieval-augmented generation and knowledge-based AI applications using vector databases, hybrid search, and re-ranking.",
    tags: ["ChromaDB", "FAISS", "Hybrid Search", "Reranking"]
  },
  {
    title: "Cloud Architecture",
    icon: "☁️",
    status: "Practicing",
    description:
      "Learning how distributed and cloud-native systems are designed for scale and reliability — Docker, GCP, CI/CD, and event-driven design.",
    tags: ["Docker", "GCP", "CI/CD", "Serverless"]
  },
  {
    title: "System Design",
    icon: "🏗️",
    status: "Building",
    description:
      "Improving understanding of scalable backend architecture, APIs, caching, databases, and distributed systems patterns.",
    tags: ["API Design", "Caching", "Load Balancing", "Databases"]
  },
  {
    title: "AI Engineering",
    icon: "⚙️",
    status: "In Progress",
    description:
      "Moving beyond model usage toward production-ready AI applications — fine-tuning, quantization, MCP, and model deployment.",
    tags: ["LoRA / QLoRA", "MCP Protocol", "Ollama", "GGUF"]
  }
];

export default function CurrentLearning() {
  return (
    <section>
      <div className="container">
        <span className="section-label">CURRENTLY EXPLORING</span>
        <h2 className="section-title">The learning never stops.</h2>
        <p className="section-desc">
          Actively expanding expertise in bleeding-edge AI, agentic architectures, and high-performance cloud engineering.
        </p>

        <div className="cards-grid">
          {learningItems.map((item) => (
            <div key={item.title} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '28px' }}>{item.icon}</span>
                <span style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '4px 10px', borderRadius: '20px',
                  background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)',
                  fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent)'
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: 'var(--accent)', animation: 'pulseDot 2s infinite'
                  }} />
                  {item.status}
                </span>
              </div>

              <h3 style={{ margin: 0, fontSize: '19px' }}>{item.title}</h3>

              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.7 }}>
                {item.description}
              </p>

              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '6px',
                paddingTop: '14px', marginTop: 'auto',
                borderTop: '1px solid var(--border)'
              }}>
                {item.tags.map((t) => (
                  <span key={t} className="tag">#{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
