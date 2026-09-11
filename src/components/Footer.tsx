export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <div className="contact-info">
            <p><i className="bi bi-envelope"></i> Email: achirayu19@gmail.com</p>
            <p><i className="bi bi-telephone"></i> Phone: 0621980591</p>
            <p><i className="bi bi-geo-alt"></i> Location: Pathum thani, Thailand</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a href="https://github.com/ALtzaza#" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/อชิรยุ-นวลสกุลวัฒน์-722b2a434 " className="social-link">LinkedIn</a>
            <a href="https://www.facebook.com/achii.rayu?locale=th_TH" className="social-link">Facebook</a>
            
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="quick-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
