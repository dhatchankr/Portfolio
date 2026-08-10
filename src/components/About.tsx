export default function About() {
  const checklist = [
    "Multi-Agent AI Systems",
    "Vector Search & RAG Pipelines",
    "Full-Stack Web Development",
    "Cloud Containerization & APIs",
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Engineering Profile</h2>
        <p className="section-desc">
          Background, core engineering checklist, and current academic focus.
        </p>

        <div className="about-grid">
          {/* Left — text */}
          <div className="about-text">
            <p>
              Combining core computer science foundations with modern AI engineering, cloud architecture, and full-stack software development. Building scalable web applications, autonomous AI agents, and privacy-first retrieval systems.
            </p>
            <p>
              I build end-to-end applications combining core algorithms in Java, C++, and Python with modern web tech stacks like React, TypeScript, Node.js, and cloud platforms.
            </p>

            {/* Checklist */}
            <ul className="checklist">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right — sidebar */}
          <div className="sidebar-box">
            <h4>Quick Highlights</h4>
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Specialization</span>
                <span className="info-val">AI &amp; Full Stack Systems</span>
              </div>
              <div className="info-item">
                <span className="info-label">Degree</span>
                <span className="info-val">B.E. CCE</span>
              </div>
              <div className="info-item">
                <span className="info-label">Timeline</span>
                <span className="info-val">2024 — 2028 Batch</span>
              </div>
              <div className="info-item">
                <span className="info-label">Core Tech</span>
                <span className="info-val">React, Python, C++, GCP</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-val">Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
