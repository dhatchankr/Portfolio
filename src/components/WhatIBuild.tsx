import { useState } from "react";
import { motion } from "motion/react";
import { Bot, Network, Layers, Cloud, Sparkles, ArrowRight } from "lucide-react";

export default function WhatIBuild() {
  const [activeId, setActiveId] = useState<string>("agentic-ai");

  const focuses = [
    {
      id: "agentic-ai",
      title: "Agentic AI Systems",
      meta: "Autonomous Reasoning & Tools",
      icon: <Bot size={24} />,
      badge: "Core Architecture",
      description:
        "Building goal-driven AI agents capable of multi-step reasoning, tool execution, memory retention, and self-reflection.",
      details: [
        "Autonomous Tool Use & API Execution",
        "Contextual Memory & State Management",
        "Goal Decomposition & Self-Correction"
      ],
      tags: ["Agentic AI", "Tool Calling", "Memory Management", "Goal Decomposition"]
    },
    {
      id: "gen-ai",
      title: "Generative AI & LLMs",
      meta: "LLMs & RAG Pipelines",
      icon: <Sparkles size={24} />,
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
      title: "Multi-Agent Swarms",
      meta: "Collaborative Orchestration",
      icon: <Network size={24} />,
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
      icon: <Layers size={24} />,
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
      icon: <Cloud size={24} />,
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

  const activeFocus = focuses.find((f) => f.id === activeId) || focuses[0];

  return (
    <section id="what-i-build" style={{ padding: '110px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">WHAT I'M FOCUSED ON</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
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
          <p className="section-desc" style={{ maxWidth: '620px', margin: '0 auto' }}>
            Interactive breakdown of the core technical domains I actively build, architect, and experiment in.
          </p>
        </div>

        {/* Interactive Dual-Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 360px) 1fr',
          gap: '24px',
          alignItems: 'stretch'
        }} className="what-i-build-grid">

          {/* Left Column: Interactive Selector List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {focuses.map((f) => {
              const isSelected = f.id === activeId;
              return (
                <motion.div
                  key={f.id}
                  onClick={() => setActiveId(f.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    background: isSelected
                      ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(240, 208, 96, 0.05))'
                      : 'var(--glass-bg)',
                    border: isSelected
                      ? '1px solid rgba(212, 175, 55, 0.4)'
                      : '1px solid var(--glass-border)',
                    boxShadow: isSelected
                      ? '0 8px 24px -6px rgba(212, 175, 55, 0.25)'
                      : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      color: isSelected ? 'var(--primary)' : 'var(--text-muted)',
                      background: isSelected ? 'rgba(212, 175, 55, 0.12)' : 'rgba(255,255,255,0.04)',
                      padding: '10px',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      {f.icon}
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: isSelected ? 'var(--text)' : 'rgba(240, 237, 230, 0.7)',
                        margin: '0 0 2px 0',
                        fontFamily: 'var(--font-heading)'
                      }}>
                        {f.title}
                      </h4>
                      <span style={{
                        fontSize: '11.5px',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        {f.meta}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    size={16}
                    style={{
                      color: isSelected ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                      transform: isSelected ? 'translateX(0)' : 'translateX(-4px)',
                      transition: 'all 0.25s ease'
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Active Focus Display Card */}
          <motion.div
            key={activeFocus.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(12, 16, 28, 0.75)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              boxShadow: '0 16px 48px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.1)'
            }}
          >
            <div>
              {/* Badge & Icon Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: 'var(--primary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}>
                  {activeFocus.badge}
                </span>

                <div style={{
                  color: 'var(--primary)',
                  background: 'rgba(212, 175, 55, 0.1)',
                  padding: '12px',
                  borderRadius: '14px',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}>
                  {activeFocus.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 style={{
                fontSize: '28px',
                fontWeight: 700,
                color: 'var(--text)',
                fontFamily: 'var(--font-heading)',
                marginBottom: '14px'
              }}>
                {activeFocus.title}
              </h3>

              <p style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '28px'
              }}>
                {activeFocus.description}
              </p>

              {/* Detailed Breakdown */}
              <div style={{
                padding: '20px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '28px'
              }}>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--primary)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  Key Engineering Highlights
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeFocus.details.map((detail, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--text)' }}>
                      <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span>
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
              gap: '8px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border)'
            }}>
              {activeFocus.tags.map((tag) => (
                <span key={tag} className="tag" style={{ fontSize: '12px', padding: '5px 12px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .what-i-build-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
