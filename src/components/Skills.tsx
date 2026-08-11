import { useState } from "react";
import { motion } from "motion/react";

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "Bash / Shell", "HTML5 / CSS3"]
  },
  {
    category: "Frontend & UI",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Three.js", "Framer Motion", "Vite", "HTML/CSS"]
  },
  {
    category: "Backend & Cloud",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets / Socket.IO", "PostgreSQL", "MongoDB", "Redis", "Docker", "GCP", "Firebase", "Git / GitHub"]
  },
  {
    category: "Generative AI & Vector Search",
    skills: ["Generative AI", "LLMs & Prompt Engineering", "LangChain", "LlamaIndex", "CrewAI Swarms", "Gemini & OpenAI APIs", "RAG & Vector Search", "ChromaDB & Pinecone", "PyTorch & OpenCV"]
  }
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skill Matrix</h2>
        <p className="section-desc">
          Technologies, frameworks, languages, AI architectures, and developer tools I work with.
        </p>

        {/* 4-column tag grid with spring motion, magnetic hover, gold spotlight glow */}
        <div className="skills-wrapper">
          {skillsData.map((group) => (
            <div key={group.category} className="skill-category">
              <h4>{group.category}</h4>
              <div className="tag-cloud">
                {group.skills.map((skill) => {
                  const isHovered = activeSkill === skill;
                  return (
                    <motion.span
                      key={skill}
                      className="tag"
                      onMouseEnter={() => setActiveSkill(skill)}
                      onMouseLeave={() => setActiveSkill(null)}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                        boxShadow: "0 8px 25px -4px rgba(212, 175, 55, 0.45), 0 0 15px rgba(240, 208, 96, 0.3)",
                        borderColor: "rgba(212, 175, 55, 0.7)",
                        color: "#ffffff",
                        backgroundColor: "rgba(212, 175, 55, 0.15)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        cursor: "pointer",
                        display: "inline-block",
                        transition: "color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease"
                      }}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
