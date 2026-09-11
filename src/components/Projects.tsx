interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  period: string;
  link?: string;
  github?: string;
  image?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Elderly Care & Telemedicine App",
      description:
        "Designed a healthcare and elderly care mobile application in Figma for families caring for elderly or bedridden patients. The application allows families to arrange caregivers for hospital visits, communicate through real-time chat, track caregiver locations via GPS, receive hospital arrival updates, manage medication and meal reminders, consult with doctors in real time, view medication information, and receive appointment notifications.",
      technologies: ["Figma", "UI/UX Design", "Healthcare", "Telemedicine"],
      period: "Year 1 • Semester 1",
      image: "/projects/healthcare-app.png",
      link: "https://www.figma.com/design/mQGIevbXrNbDAxKm0yreYf/Untitled?node-id=0-1&t=PQjYKhbZo8AzASN3-1",
    },

    {
      id: 2,
      title: "Slide Me Admin",
      description:
        "Admin management system for managing vehicles and services. Developed a full-stack web application with React frontend, Node.js backend, and MySQL database, including REST API integration and image upload functionality.",
      technologies: ["React", "Vite", "CSS", "JavaScript", "REST API"],
      period: "Year 2 • Semester 1 , Year 2 • Semester 2",
      image: "/projects/Slideme_Admin.png",
      github: "https://github.com/ALtzaza/_slideme_admin",
      link: "https://www.figma.com/design/GP9NCfOjxMVekeeTcMgZ8l/Prototype-design-system?node-id=0-1&t=nmpIMSaqFYRv5ppO-1",
    },

    {
      id: 3,
      title: "Tid_Code",
      description:
        "A comprehensive online learning platform that enables students to discover and purchase courses organized by categories, progress through lessons with chapter-by-chapter tracking, participate in interactive quizzes with detailed results, earn certificates upon completion, and engage with instructors through workshops and reviews. Includes a full admin dashboard for managing courses, content, users, and payments with PDF slip generation for bank transfers.",
      technologies: [
        "React",
        "Vite",
        "MongoDB",
        "JavaScript",
        "Web Development",
      ],
      period: "Year 3 • Semester 2",
      image: "/projects/Tid_Code.png",
      github: "https://github.com/ALtzaza/Edu/tree/Ishi",
      link: "#",
    },

    {
      id: 4,
      title: "PixelUI",
      description:
        "Web application built with ASP.NET Core MVC and MySQL. Implemented user authentication, role-based access control, product management, promotions, checkout functionality, and admin management features.",
      technologies: [
        "C#",
        "ASP.NET Core MVC",
        "Entity Framework Core",
        "MySQL",
      ],
      period: "Year 3 • Semester 2",
      image: "/projects/PixelUI.png",
      github: "https://github.com/ALtzaza/PixelUI",
      link: "#",
    },

    {
      id: 5,
      title: "Tax_ChatBot",
      description:
        "Thai-language tax chatbot using RAG to retrieve relevant tax information before generating answers. Built semantic search with FAISS and multilingual embeddings, developed REST APIs with FastAPI, and integrated query classification and typo correction to improve response accuracy.",
      technologies: [
        "Python",
        "FastAPI",
        "FAISS",
        "RAG",
        "Hugging Face",
        "Ollama",
      ],
      period: "Year 3 • Semester 2",
      image: "/projects/Tax_Bot.png",
      link: "#",
      github: "https://github.com/ALtzaza/tax_chatbot",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>

        <p className="section-subtitle">
          Selected projects from my academic journey
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Image */}
              {project.image && (
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
              )}

              {/* Header */}
              <div className="project-header">
                <h3>{project.title}</h3>

                <span className="project-period">{project.period}</span>
              </div>

              {/* Description */}
              <p className="project-description">{project.description}</p>

              {/* Technologies */}
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <div className="project-actions">
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project <span>→</span>
                  </a>
                )}

                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    View Code <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
