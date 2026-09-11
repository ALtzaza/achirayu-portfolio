
export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* ================= HEADER ================= */}
        <div className="about-heading">
          <span className="about-label">ABOUT ME</span>

          <h2>
            About me,
            <br />
            <span>beyond the code.</span>
          </h2>

          <p>
            Computer Science student focused on Backend & Full-Stack
            Development.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="about-content">
          {/* LEFT SIDE */}
          <div className="about-main">
            <span className="content-label">WHO I AM</span>

            <h3>Hi, I'm Achirayu.</h3>

            <p>
              I'm a Computer Science student passionate about web development
              and backend technologies. I enjoy building web applications,
              developing REST APIs, working with databases, and turning ideas
              into functional applications.
            </p>

            <p>
              Through academic and personal projects, I've gained experience
              working across both frontend and backend development. I'm
              currently focusing on improving my backend development skills and
              building practical applications that solve real problems.
            </p>

            {/* BUTTONS */}
            <div className="about-actions">
              <a
                href="/documents/Achirayu_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn primary"
              >
                View CV
                <span>↗</span>
              </a>

              <a
                href="/documents/Achirayu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn secondary"
              >
                View Resume
                <span>↗</span>
              </a>

              <a
                href="https://github.com/ALtzaza"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn secondary"
              >
                GitHub
                <span><i className="bi bi-github"></i></span>
              </a>

              <a
                href="https://www.linkedin.com/in/อชิรยุ-นวลสกุลวัฒน์-722b2a434"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn secondary"
              >
                LinkedIn
                <span><i className="bi bi-linkedin"></i></span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="about-info">
            {/* EDUCATION */}
            <div className="info-block">
              <span className="info-label">EDUCATION</span>

              <h4>Sripatum University</h4>

              <p>Computer Science & Software Innovation (CSI)</p>

              <p>CGPA: 3.18</p>

              <small>2023 - Present</small>
            </div>

            {/* CURRENT FOCUS */}
            <div className="info-block">
              <span className="info-label">CURRENT FOCUS</span>

              <div className="focus-tags">
                <span>Backend Development</span>
                <span>UI/UX Design</span>
                <span>Data Analysis</span>
                <span>Full Stack</span>
              </div>
            </div>

            {/* LANGUAGES */}
            <div className="info-block">
              <span className="info-label">LANGUAGES</span>

              <div className="languages">
                <div>
                  <strong>Thai</strong>
                  <small>Native</small>
                </div>

                <div>
                  <strong>English</strong>
                  <small>Basic</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TECH STACK ================= */}
        <div className="tech-section">
          <div className="tech-heading">
            <div>
              <span className="content-label">TECH STACK</span>

              <h3>Technologies I work with</h3>
            </div>
          </div>

          <div className="tech-marquee">
            <div className="tech-list">
              <span>React</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>Python</span>
              <span>FastAPI</span>
              <span>C#</span>
              <span>ASP.NET Core</span>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>Git</span>

              <span>React</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>Python</span>
              <span>FastAPI</span>
              <span>C#</span>
              <span>ASP.NET Core</span>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
