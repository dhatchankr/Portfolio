import { motion } from "motion/react";
import { Sparkles, Network, Layers, Cloud, ArrowUpRight } from "lucide-react";

export default function WhatIBuild() {
  const focuses = [
    {
      id: "gen-ai",
      title: "Generative AI & LLMs",
      meta: "LLMs & RAG Pipelines",
      icon: <Sparkles size={22} />,
      badge: "AI Engineering",
      description:
        "Developing context-aware applications powered by modern LLMs, vector search, custom RAG pipelines, and prompt engineering.",
      details: [
        "Custom Vector Retrieval (Chroma / Pinecone)",
        "Prompt Optimization & Guardrails",
        "Multimodal LLM Integrations"
      ],
      tags: ["Generative AI", "LLMs", "RAG Pipelines", "Prompt Engineering"]
    },
    {
      id: "multi-agent",
      title: "Multi-Agent Systems",
      meta: "Collaborative Orchestration",
      icon: <Network size={22} />,
      badge: "Distributed AI",
      description:
        "Designing multi-agent systems where specialized AI agents collaborate through event buses and shared state to execute complex workflows.",
      details: [
        "Inter-Agent Event Communication",
        "Specialized Persona Delegation",
        "Parallel Workflow Synthesis"
      ],
      tags: ["Agent Orchestration", "Event Bus", "Autonomous Workflows", "Swarm Intelligence"]
    },
    {
      id: "fullstack",
      title: "Full-Stack Engineering",
      meta: "Modern Web & APIs",
      icon: <Layers size={22} />,
      badge: "Web Systems",
      description:
        "Architecting responsive, high-performance web applications with modern frontend frameworks and robust microservice backends.",
      details: [
        "React & TypeScript Frontends",
        "High-Throughput Node / Python APIs",
        "Real-Time WebSockets Communication"
      ],
      tags: ["React", "Node.js", "TypeScript", "REST APIs", "WebSockets"]
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure",
      meta: "Scalable Deployment",
      icon: <Cloud size={22} />,
      badge: "DevOps & Cloud",
      description:
        "Deploying and managing scalable, resilient cloud-native applications with containerization and serverless backends.",
      details: [
        "Docker Containerization",
        "Google Cloud & Firebase Platform",
        "CI/CD & Serverless API Routes"
      ],
      tags: ["GCP", "Docker", "Firebase", "Microservices"]
    }
  ];

  return (
    <section id="what-i-build" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="section-label">WHAT I'M FOCUSED ON</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 46px)' }}>
            Exploring what's next in<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              intelligent software.
            </span>
          </h2>
          <p className="section-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
            The core technical domains I actively build, architect, and experiment in.
          </p>
        </div>

        {/* Premium Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {focuses.map((f, idx) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card"
              style={{
                padding: '30px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Card Header: Icon & Badge */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{
                    color: 'var(--primary)',
                    background: 'rgba(212, 175, 55, 0.1)',
                    padding: '10px',
                    borderRadius: '12px',
                    border: '1px solid rgba(212, 175, 55, 0.2)'
                  }}>
                    {f.icon}
                  </div>

                  <span style={{
                    fontSize: '10.5px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: '14px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    color: 'var(--primary)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    {f.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '10px'
                }}>
                  {f.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.65,
                  color: 'var(--text-muted)',
                  marginBottom: '20px'
                }}>
                  {f.description}
                </p>

                {/* Key Highlights List */}
                <div style={{
                  padding: '14px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {f.details.map((detail, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--text)' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '11px' }}>✓</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags Footer */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border)'
              }}>
                {f.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: '11.5px', padding: '4px 10px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
