import profileImg from "../assets/images/profile.jpg";

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

        <div className="about-grid" style={{ gridTemplateColumns: '260px 1fr 300px', gap: '32px', alignItems: 'center' }}>
          
          {/* Profile Photo */}
          <div className="about-photo-col" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="profile-card" style={{ width: '100%', maxWidth: '260px' }}>
              <div className="profile-img-wrap" style={{ width: '100%', height: '340px', borderRadius: '20px' }}>
                <img
                  src={profileImg}
                  alt="Dhatchan K R — Software Engineer"
                  className="profile-img"
                />
                <div className="profile-img-overlay" />
                <div className="profile-corner profile-corner--tl" />
                <div className="profile-corner profile-corner--tr" />
                <div className="profile-corner profile-corner--bl" />
                <div className="profile-corner profile-corner--br" />
              </div>
            </div>
          </div>

          {/* Center — text */}
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

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-photo-col {
            margin-bottom: 16px;
          }
        }
      `}</style>
    </section>
  );
}
