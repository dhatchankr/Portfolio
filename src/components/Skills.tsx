import { useState } from "react";
import { motion } from "motion/react";
import { Code2, Layout, Server, Brain } from "lucide-react";

const skillsData = [
  {
    id: "ai-rag",
    category: "Generative & Agentic AI",
    icon: <Brain size={20} />,
    skills: [
      { name: "Agentic AI", level: "Advanced" },
      { name: "Generative AI", level: "Advanced" },
      { name: "LLMs & Prompt Engineering", level: "Expert" },
      { name: "LangChain", level: "Advanced" },
      { name: "LlamaIndex", level: "Intermediate" },
      { name: "CrewAI Swarms", level: "Advanced" },
      { name: "Gemini & OpenAI APIs", level: "Expert" },
      { name: "RAG & Vector Search", level: "Advanced" },
      { name: "ChromaDB & Pinecone", level: "Advanced" },
      { name: "PyTorch & OpenCV", level: "Intermediate" },
    ]
  },
  {
    id: "backend-cloud",
    category: "Backend & Cloud Systems",
    icon: <Server size={20} />,
    skills: [
      { name: "Node.js & Express.js", level: "Expert" },
      { name: "FastAPI", level: "Advanced" },
      { name: "REST APIs & WebSockets", level: "Expert" },
      { name: "PostgreSQL & MongoDB", level: "Advanced" },
      { name: "Redis", level: "Intermediate" },
      { name: "Docker Containerization", level: "Advanced" },
      { name: "GCP & Firebase Platform", level: "Advanced" },
      { name: "Git & GitHub Workflows", level: "Expert" },
    ]
  },
  {
    id: "frontend-ui",
    category: "Frontend & UI Design",
    icon: <Layout size={20} />,
    skills: [
      { name: "React.js & Next.js", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Redux Toolkit", level: "Advanced" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Three.js", level: "Intermediate" },
      { name: "Vite Bundler", level: "Expert" },
    ]
  },
  {
    id: "languages",
    category: "Core Languages",
    icon: <Code2 size={20} />,
    skills: [
      { name: "Python", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "C / C++", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "Bash / Shell", level: "Intermediate" },
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories = activeTab === "all"
    ? skillsData
    : skillsData.filter((c) => c.id === activeTab);

  return (
    <section id="skills" style={{ padding: '110px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span className="section-label">TECHNICAL MATRIX</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
            Capabilities &amp; Stack
          </h2>
          <p className="section-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive breakdown of languages, AI architectures, frameworks, and cloud developer tools.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '40px'
        }}>
          <button
            onClick={() => setActiveTab("all")}
            className={`filter-pill ${activeTab === "all" ? "active" : ""}`}
            style={{ cursor: 'pointer' }}
          >
            All Skills ({skillsData.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {skillsData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`filter-pill ${activeTab === cat.id ? "active" : ""}`}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              {cat.icon}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <div className="skills-wrapper" style={{
          display: 'grid',
          gridTemplateColumns: activeTab === "all" ? 'repeat(auto-fit, minmax(280px, 1fr))' : '1fr',
          gap: '24px'
        }}>
          {filteredCategories.map((group) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card"
              style={{ padding: '28px', borderRadius: '20px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ color: 'var(--primary)', background: 'rgba(212, 175, 55, 0.1)', padding: '8px', borderRadius: '10px' }}>
                  {group.icon}
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                  {group.category}
                </h4>
              </div>

              <div className="tag-cloud" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="tag"
                    style={{
                      padding: '8px 14px',
                      fontSize: '13px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'default'
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text)' }}>{item.name}</span>
                    <span style={{
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--primary)',
                      background: 'rgba(212, 175, 55, 0.12)',
                      padding: '2px 6px',
                      borderRadius: '4px'
                    }}>
                      {item.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
