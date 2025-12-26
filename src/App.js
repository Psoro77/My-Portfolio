import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setAnimateSkills(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'JavaScript', image: '/assets/javascript.png' },
    { name: 'React', image: '/assets/React.png' },
    { name: 'Python', image: '/assets/python.svg.png' },
    { name: 'Node.js', image: '/assets/nodejs.png' },
    { name: 'MongoDB', image: '/assets/mongodb.webp' },
    { name: 'PostgreSQL', image: '/assets/postgresql.svg.png' },
    { name: 'C', image: '/assets/C.png' },
    { name: 'Java', image: '/assets/Java.png' },
    { name: 'CSS', image: '/assets/CSS.png' },
    { name: 'Git', image: '/assets/git.png' },
    { name: 'VSCode', image: '/assets/VSCode.png' },
    { name: 'Terminal', image: '/assets/terminal.png' },
    { name: 'PHP', image: '/assets/php.svg.png' },
    { name: 'Processing', image: '/assets/Processing.png' },
    { name: 'Sass', image: '/assets/Sass.svg' },
    { name: 'Jupyter', image: '/assets/jupyter.svg.png' },
    { name: 'TensorFlow', image: '/assets/tensorflow.svg.png' },
    { name: 'scikit-learn', image: '/assets/scikitlearn.svg.png' },
  ];

  const projects = [
    { title: 'TensorTrend', image: '/assets/tensortrend.png', link: 'https://github.com/Psoro77/tensortrend' },
    { title: 'Flower Shop', image: '/assets/flowershop.png', link: 'https://github.com/Psoro77/Learning-Web-page-Basics/tree/main/projet3' },
    { title: 'Mobile App', image: '/assets/mobileapp.png', link: 'https://github.com/Psoro77/' },
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background: ${darkMode ? '#0f0f0f' : '#ffffff'};
          color: ${darkMode ? '#e0e0e0' : '#333333'};
          transition: background 0.3s, color 0.3s;
        }

        @import url('https://fonts.googleapis.com/css2?family=Le+Murmure&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: ${darkMode ? 'rgba(15, 15, 15, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
          backdrop-filter: blur(10px);
          border-bottom: 1px solid ${darkMode ? '#333' : '#e0e0e0'};
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333333;
          text-decoration: none;
          font-family: 'Le Murmure', cursive;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 3.5rem;
          align-items: center;
          margin: 0;
          font-family: 'Courier Prime', monospace;
          font-weight: 600;
        }

        .nav-links a {
          text-decoration: none;
          color: ${darkMode ? '#e0e0e0' : '#333333'};
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #667eea;
          transition: width 0.3s ease;
        }

        .nav-links a:hover {
          color: #667eea;
          transform: translateY(-2px);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .theme-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
          padding: 0.5rem;
          display: flex;
          align-items: center;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            flex-direction: column;
            gap: 1rem;
            padding: 2rem;
            background: ${darkMode ? '#1a1a1a' : '#f5f5f5'};
            border-bottom: 1px solid ${darkMode ? '#333' : '#e0e0e0'};
          }

          .nav-links.mobile-open {
            display: flex;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }

        /* Typing Animation */
        @keyframes typing {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes blink {
          50% { border-right-color: transparent; }
        }

        .typing-text {
          display: inline-block;
          border-right: 3px solid ${darkMode ? '#ffffff' : '#333333'};
          animation: typing 3s steps(50, end), blink 0.7s infinite;
          overflow: hidden;
          white-space: nowrap;
          min-width: 450px;
        }

        /* Hero Section */
        .hero {
          margin-top: 80px;
          padding: 4rem 2rem;
          text-align: center;
          min-height: calc(100vh - 80px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, ${darkMode ? '#1a1a1a' : '#f8f9fa'} 0%, ${darkMode ? '#2a2a2a' : '#e9ecef'} 100%);
        }

        .hero h1 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: ${darkMode ? '#ffffff' : '#333333'};
          font-family: 'Le Murmure', cursive;
          letter-spacing: 2px;
        }

        .profile-picture {
          width: 275px;
          height: 275px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 2rem;
          border: 4px solid ${darkMode ? '#667eea' : '#333333'};
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .hero .subtitle {
          font-size: 1.5rem;
          color: ${darkMode ? '#ffffff' : '#333333'};
          margin-bottom: 2rem;
        }

        .hero-description {
          max-width: 600px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: ${darkMode ? '#b0b0b0' : '#555'};
          margin-top: 2rem;
          font-family: 'Courier Prime', monospace;
        }

        /* Skills Section */
        .skills-section {
          padding: 4rem 2rem;
          padding-bottom: 8rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-section h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          color: ${darkMode ? '#ffffff' : '#333333'};
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        .skill-item {
          text-align: center;
          padding: 1.5rem;
          border-radius: 12px;
          background: ${darkMode ? '#1a1a1a' : '#f5f5f5'};
          border: 2px solid ${darkMode ? '#333' : '#e0e0e0'};
          transition: all 0.3s;
          opacity: 0;
          transform: translateX(-50px);
          position: relative;
          cursor: pointer;
          height: 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .skill-item.animate {
          animation: slideIn 0.6s ease-out forwards;
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .skill-item:hover {
          transform: translateY(-5px);
          border-color: #667eea;
          background: ${darkMode ? '#2a2a2a' : '#ffffff'};
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
        }

        .skill-item:hover .skill-tooltip {
          opacity: 1;
          transform: translateY(-10px);
        }

        .skill-image {
          height: 60px;
          width: 60px;
          object-fit: contain;
          margin-bottom: 0.5rem;
        }

        .skill-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(0);
          background: ${darkMode ? '#333' : '#333333'};
          color: white;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          transition: all 0.3s;
          pointer-events: none;
          z-index: 10;
          margin-bottom: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .skill-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: ${darkMode ? '#333' : '#333333'};
        }

        /* Projects Section */
        .projects-section {
          padding: 4rem 2rem;
          padding-top: 8rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-section h2 {
          font-size: 3rem;
          margin-bottom: 3rem;
          text-align: center;
          color: ${darkMode ? '#ffffff' : '#333333'};
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .project-card {
          background: ${darkMode ? '#1a1a1a' : '#f5f5f5'};
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid ${darkMode ? '#333' : '#e0e0e0'};
          transition: all 0.3s;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: #667eea;
          box-shadow: 0 12px 24px rgba(102, 126, 234, 0.2);
        }

        .project-image {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${darkMode ? '#2a2a2a' : '#e9ecef'};
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-title {
          padding: 1.5rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: ${darkMode ? '#e0e0e0' : '#1a1a1a'};
        }

        .project-code {
          opacity: 0;
          transition: opacity 0.3s;
        }

        .project-card:hover .project-code {
          opacity: 1;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: ${darkMode ? '#667eea' : '#333333'};
          color: white;
          text-decoration: none;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1.2rem;
          transition: all 0.3s;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px ${darkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(51, 51, 51, 0.3)'};
        }

        .resume-btn {
          margin: 2rem 0;
        }

        /* Contact Section */
        .contact-section {
          padding: 4rem 2rem;
          text-align: center;
        }

        .contact-section h2 {
          font-size: 3rem;
        }

        .contact-links {
          display: flex;
          gap: 2.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          width: 60px;
          height: 60px;
          background: ${darkMode ? '#1a1a1a' : '#f5f5f5'};
          color: ${darkMode ? '#e0e0e0' : '#1a1a1a'};
          text-decoration: none;
          border: 2px solid ${darkMode ? '#333' : '#e0e0e0'};
          border-radius: 50%;
          cursor: pointer;
          font-weight: 600;
          font-size: 1.5rem;
          transition: all 0.3s;
        }

        .contact-btn:hover {
          border-color: #667eea;
          color: #667eea;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .hero .subtitle {
            font-size: 1.2rem;
          }

          .typing-text {
            min-width: auto;
            width: 100%;
            max-width: 300px;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="navbar-logo">BB</a>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={24} color="#fbbf24" /> : <Moon size={24} color="#667eea" />}
          </button>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="about">
        <img src="/assets/mypicture.png" alt="Boubacar Ba" className="profile-picture" />
        <h1>Boubacar Ba</h1>
        <p className="subtitle">
          <span className="typing-text">Computer Science Student at Laurentian University</span>
        </p>

        <p className="hero-description">
          Welcome! I'm Boubacar, a Computer Science student passionate about software development,
          artificial intelligence, and quantitative finance. This portfolio showcases my projects and technical skills.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <h2>Technical Experience</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-item ${animateSkills ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="skill-image"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="skill-tooltip">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <h2>Past & Present Work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <p className="project-title">
                <span className="project-code">&lt; </span>
                {project.title}
                <span className="project-code"> /&gt;</span>
              </p>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="https://drive.google.com/file/d/1Bhp9hp7uNEXU_Kt7xgYmVZFQxf59YXl6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn resume-btn"
          >
            Resume PDF →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 style={{ marginBottom: '2rem', color: darkMode ? '#ffffff' : '#333333' }}>Get In Touch</h2>
        <div className="contact-links">
          <a href="https://github.com/Psoro77" target="_blank" rel="noopener noreferrer" className="contact-btn" title="GitHub">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/b2o-7a9074372/" target="_blank" rel="noopener noreferrer" className="contact-btn" title="LinkedIn">
            <Linkedin size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}