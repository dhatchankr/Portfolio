const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Three.js", "Framer Motion"]
  },
  {
    category: "Backend & Cloud",
    skills: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "GCP", "Firebase"]
  },
  {
    category: "AI, ML & Vector Search",
    skills: ["LangChain", "LlamaIndex", "OpenAI API", "Gemini API", "PyTorch", "OpenCV", "ChromaDB"]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skill Matrix</h2>
        <p className="section-desc">
          Technologies, frameworks, languages, and developer tools I work with.
        </p>

        {/* 4-column tag grid — no filter pills, matches screenshot */}
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
