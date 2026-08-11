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
    category: "Generative & Agentic AI",
    skills: ["Generative AI", "Agentic AI", "LLMs", "LangChain", "LlamaIndex", "CrewAI", "Gemini API", "OpenAI API", "RAG Pipelines", "Vector Search", "ChromaDB", "Pinecone", "PyTorch", "OpenCV", "Prompt Engineering"]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skill Matrix</h2>
        <p className="section-desc">
          Technologies, frameworks, languages, AI architectures, and developer tools I work with.
        </p>

        {/* 4-column tag grid */}
        <div className="skills-wrapper">
          {skillsData.map((group) => (
            <div key={group.category} className="skill-category">
              <h4>{group.category}</h4>
              <div className="tag-cloud">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
