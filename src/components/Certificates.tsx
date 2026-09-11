import { useState } from "react";interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  link?: string;
}

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const certificates: Certificate[] = [
{
  id: 1,
  title: "Deploy and run a containerized web app with Azure App Service",
  issuer: "Microsoft Learn",
  date: "March 25, 2025",
  category: "Cloud & Azure",
  image: "/certificates/azure-app-service.png",
  link: "https://learn.microsoft.com/api/achievements/share/en-us/AchirayuNualsakulawat-6776/747RH7WZ?sharingId=50961076E7783137",
},

    {
      id: 2,
      title: "Build a containerized web application with Docker",
      issuer: "Microsoft Learn",
      date: "March 25, 2025",
      category: "Cloud & Docker",
      image: "/certificates/Docker.png",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/AchirayuNualsakulawat-6776/N2N8G8PF?sharingId=50961076E7783137",
    },

    {
      id: 3,
      title: "Automate Docker container deployments with Azure Pipelines",
      issuer: "Microsoft Learn",
      date: "March 25, 2025",
      category: "Cloud & DevOps",
      image: "/certificates/Docker2.png",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/AchirayuNualsakulawat-6776/P5PQR724?sharingId=50961076E7783137",
    },

    {
      id: 4,
      title: "Get started with React",
      issuer: "Microsoft Learn",
      date: "March 24, 2025",
      category: "Development",
      image: "/certificates/React.png",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/AchirayuNualsakulawat-6776/VDVZQVKM?sharingId=50961076E7783137",
    },

    {
      id: 5,
      title: "Working with data and properties in React components",
      issuer: "Microsoft Learn",
      date: "March 25, 2025",
      category: "Development",
      image: "/certificates/React2.png",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/AchirayuNualsakulawat-6776/KGKPXVWB?sharingId=50961076E7783137",
    },

    {
      id: 6,
      title: "React state and events",
      issuer: "Microsoft Learn",
      date: "March 25, 2025",
      category: "Development",
      image: "/certificates/React3.png",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/AchirayuNualsakulawat-6776/CFCGEGG9?sharingId=50961076E7783137",
    },

    {
      id: 7,
      title: "Get started with web development using Visual Studio Code",
      issuer: "Microsoft Learn",
      date: "March 24, 2025",
      category: "Development",
      image: "/certificates/VS.png",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/AchirayuNualsakulawat-6776/KGKEV92B?sharingId=50961076E7783137",
    },

    {
      id: 8,
      title: "Using GitHub Copilot with JavaScript",
      issuer: "Microsoft Learn",
      date: "March 25, 2025",
      category: "Development",
      image: "/certificates/Git.png",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/AchirayuNualsakulawat-6776/4L4EXR8K?sharingId=50961076E7783137",
    }

  ];
    const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, 6);

  return (
    <section id="certificates" className="certificates">
      <div className="container">

        {/* Header */}
        <div className="certificates-header">
          <span className="section-label">
            CERTIFICATES
          </span>

          <h2>
            Learning & <span>Achievements.</span>
          </h2>

          <p>
            Certificates and achievements I've earned through
            learning, training, and developing my technical skills.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {visibleCertificates.map((certificate) => (
            <div
              className="certificate-card"
              key={certificate.id}
            >

              {/* Certificate Image */}
              <div className="certificate-image-wrapper">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                />

                <div className="certificate-overlay">
                  {certificate.link && certificate.link !== "#" ? (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-view"
                    >
                      <i className="bi bi-eye"></i>
                      View Certificate
                    </a>
                  ) : (
                    <span className="certificate-view disabled">
                      <i className="bi bi-eye"></i>
                      Certificate
                    </span>
                  )}
                </div>
              </div>

              {/* Certificate Info */}
              <div className="certificate-info">

                <div className="certificate-meta">
                  <span className="certificate-category">
                    {certificate.category}
                  </span>

                  <span className="certificate-date">
                    {certificate.date}
                  </span>
                </div>

                <h3>{certificate.title}</h3>

                <p className="certificate-issuer">
                  <i className="bi bi-award"></i>
                  {certificate.issuer}
                </p>

                {certificate.link && certificate.link !== "#" && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    View Certificate
                    <span>↗</span>
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>

        {certificates.length > 6 && (
  <div className="certificates-more">
    <button
      className="certificates-more-btn"
      onClick={() => setShowAll(!showAll)}
    >
      {showAll ? "Show Less" : "View All Certificates"}
      <span>{showAll ? "↑" : "→"}</span>
    </button>
  </div>
)}

      </div>
    </section>
  );
}