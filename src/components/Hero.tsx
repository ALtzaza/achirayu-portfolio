export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="home" className="hero">

      {/* Background */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">

        {/* Badge */}
        <div className="hero-badge">
          <span className="status-dot"></span>
          Computer Science Student
        </div>

        {/* Heading */}
        <h1>
          Hi, I'm <span>Achirayu</span>
        </h1>

        {/* Subtitle */}
        <p className="subtitle">
          <span>Full Stack Developer</span>
          <span className="divider">|</span>
          <strong>Aspiring Backend Developer</strong>
        </p>

        {/* Description */}
        <p className="description">
          I'm a Computer Science student passionate about web development
          and backend technologies. I enjoy building APIs, working with
          databases, and developing full-stack applications.
        </p>

        {/* Tech Stack */}
        <div className="hero-tech">
          <span>React</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>FastAPI</span>
          <span>MySQL</span>
        </div>

        {/* Buttons */}
        <div className="hero-actions">

          <button
            className="cta-button primary"
            onClick={scrollToProjects}
          >
            View My Projects
            <span>→</span>
          </button>

          <button
            className="cta-button secondary"
            onClick={scrollToContact}
          >
            Contact Me
          </button>

        </div>

      </div>

      {/* Floating Cards */}
      <div className="backend-card card-api">
        <span className="card-icon">⌘</span>

        <div>
          <small>Backend</small>
          <strong>REST API</strong>
        </div>
      </div>

      <div className="backend-card card-db">
        <span className="card-icon">◉</span>

        <div>
          <small>Database</small>
          <strong>MySQL</strong>
        </div>
      </div>

    </section>
  );
}   