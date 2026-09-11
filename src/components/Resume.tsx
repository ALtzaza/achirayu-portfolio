export default function Resume() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vite"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "FastAPI", "REST API", "C#"],
    },
    {
      category: "Database",
      items: ["MySQL", "MongoDB", "Entity Framework Core", "FAISS"],
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "GitHub", "Postman", "Swagger", "Docker", "Figma"],
    },
  ];

 const experience = [
  {
    year: "2025",
    title: "Tax ChatBot — Backend / AI Project",
    type: "Academic Project",
    description:
      "Developed a Thai-language tax chatbot using Python and FastAPI. Implemented Retrieval-Augmented Generation (RAG), semantic search with FAISS and multilingual embeddings, and REST APIs for chatbot interaction.",
    technologies: ["Python", "FastAPI", "FAISS", "RAG"],
  },

  {
    year: "2025",
    title: "PixelUI — Web Application",
    type: "Academic Project",
    description:
      "Developed a web application using ASP.NET Core MVC with Entity Framework Core and MySQL. Implemented user authentication, role-based access control, product management, promotions, checkout functionality, and administrative features.",
    technologies: [
      "C#",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "MySQL",
    ],
  },

  {
    year: "2025",
    title: "Tid_Code — Learning Platform",
    type: "Academic Project",
    description:
      "Developed an online learning platform where users can purchase courses, watch lessons chapter by chapter, complete quizzes, earn certificates, and interact with course content. Also implemented an admin dashboard for managing courses, users, and payments.",
    technologies: ["React", "Vite", "MongoDB", "JavaScript"],
  },

  {
    year: "2024",
    title: "Slide Me Admin — Admin Management System",
    type: "Academic Project",
    description:
      "Developed a full-stack admin management system for managing vehicles and services. Built frontend interfaces with React and connected them to backend REST APIs using Node.js, Express, and MySQL, including image upload functionality.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
  },


  {
    year: "2023",
    title: "Elderly Care & Telemedicine App",
    type: "UI/UX Academic Project",
    description:
      "Designed a healthcare and elderly care mobile application in Figma for elderly and bedridden patients. The concept includes caregiver booking, real-time communication, GPS tracking, medication reminders, doctor consultation, and appointment notifications.",
    technologies: ["Figma", "UI/UX Design", "Healthcare"],
  },
];

  return (
    <section id="resume" className="resume">
      <div className="container">

        {/* Header */}
        <div className="resume-header">
          <span className="section-label">RESUME</span>

          <h2>
            Skills & <span>Experience.</span>
          </h2>

          <p>
            My technical skills, academic projects, and experience
            building web applications and backend systems.
          </p>
        </div>

        {/* Skills */}
        <div className="resume-section">
          <div className="resume-section-title">
            <span className="section-number">01</span>

            <div>
              <span className="content-label">TECHNICAL SKILLS</span>
              <h3>What I work with</h3>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-card-header">
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h4>{skillGroup.category}</h4>
                </div>

                <div className="skill-tags">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="resume-section experience-wrapper">
          <div className="resume-section-title">
            <span className="section-number">02</span>

            <div>
              <span className="content-label">EXPERIENCE</span>
              <h3>Projects I've worked on</h3>
            </div>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <div className="experience-item" key={index}>

                <div className="experience-year">
                  {item.year}
                </div>

                <div className="experience-line">
                  <span></span>
                </div>

                <div className="experience-content">
                  <div className="experience-top">
                    <div>
                      <h4>{item.title}</h4>
                      <span className="experience-type">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <p>{item.description}</p>

                  <div className="experience-tech">
                    {item.technologies.map((tech, idx) => (
                      <span key={idx}>{tech}</span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

    

      </div>
    </section>
  );
}