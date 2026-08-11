import profileImg from "../assets/images/profile.jpg";

export default function Hero() {
  const badges = [
    { title: "Multi-Agent Systems", sub: "Autonomous Workflows" },
    { title: "Local RAG",           sub: "Vector Search Pipelines" },
    { title: "Full Stack",          sub: "React & Node.js" },
    { title: "Cloud Services",      sub: "GCP & Docker" },
  ];

  return (
    <section id="hero" className="hero">
      <div className="container">

        {/* Two-column hero layout */}
        <div className="hero-split">

          {/* ── Left: Text content ── */}
          <div className="hero-text-col">

            {/* Status pill */}
            <div className="status-pill">
              <span className="status-dot" />
              Available for Software &amp; AI Engineering Roles
            </div>

            {/* Name */}
            <h1>Dhatchan K R</h1>

            {/* Subtitle */}
            <div className="hero-subtitle">
              Software Engineer · Full Stack &amp; AI Systems
            </div>

            {/* Bio */}
            <p className="hero-bio">
              Building high-performance web applications, multi-agent AI workflows, and local RAG pipelines.
              Specialized in React, TypeScript, Python, and scalable Cloud architectures.
            </p>

            {/* CTAs */}
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">
                Explore Projects →
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <div className="hero-photo-col">
            <div className="profile-card">

              {/* Clean photo with premium frame */}
              <div className="profile-img-wrap">
                <img
                  src={profileImg}
                  alt="Dhatchan K R — Software Engineer"
                  className="profile-img"
                />
                <div className="profile-img-overlay" />

                {/* Corner accent lines */}
                <div className="profile-corner profile-corner--tl" />
                <div className="profile-corner profile-corner--tr" />
                <div className="profile-corner profile-corner--bl" />
                <div className="profile-corner profile-corner--br" />
              </div>

            </div>
          </div>
        </div>

        {/* Badge cards — full width below */}
        <div className="hero-badges">
          {badges.map((b) => (
            <div key={b.title} className="badge-item">
              <strong>{b.title}</strong>
              <span>{b.sub}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
