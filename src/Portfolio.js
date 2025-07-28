import { useState } from 'react';
import { Mail, Github, Linkedin, Code, Database, Globe, Shield } from 'lucide-react';
import './Portfolio.css'; // Import the CSS file
import profileImage from './img/1.jpg'; // Import your profile image

function Portfolio() {
  const [projects] = useState([
    {
      title: 'Personal Portfolio',
      description: 'This is my first portfolio built with React and modern CSS techniques including glassmorphism and advanced animations.',
      tech: ['React', 'CSS', 'JavaScript']
    },
    {
      title: 'Fullstack Developer Journey',
      description: 'I\'m learning to build complete web applications using modern front-end and back-end technologies. From responsive UI in React to REST APIs and databases, I enjoy making things that work from end to end.',
      tech: ['Node.js', 'MongoDB', 'Express', 'React']
    },
  ]);

  return (
    <div className="portfolio-container">
      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="floating-blob blob-1"></div>
        <div className="floating-blob blob-2"></div>
        <div className="floating-blob blob-3"></div>
      </div>

      {/* Header Section */}
      <header className="header-section">
        <div className="header-content">
          {/* Profile Image with Glow Effect */}
          <div className="profile-container">
            <div className="profile-image">
              <div className="profile-inner">
                <img src={profileImage} alt="Vignesh Profile" />
                <div className="profile-fallback">V</div>
              </div>
            </div>
            <div className="profile-glow"></div>
          </div>

          {/* Name and Title */}
          <div>
            <h1 className="main-title">Vignesh</h1>
            <p className="subtitle">Aspiring Fullstack Developer | Fresher</p>
          </div>

          {/* Floating Icons */}
          <div className="floating-icons">
            <div className="floating-icon">
              <Code size={24} color="#a855f7" />
            </div>
            <div className="floating-icon">
              <Database size={24} color="#3b82f6" />
            </div>
            <div className="floating-icon">
              <Globe size={24} color="#14b8a6" />
            </div>
            <div className="floating-icon">
              <Shield size={24} color="#ec4899" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          
          {/* About Section */}
          <section className="glass-card">
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm Vignesh, a passionate and curious learner currently exploring full-stack web development. On the front end, I use HTML, CSS, JavaScript, and React to create interactive user interfaces.
                </p>
                <p>
                  On the back end, I'm learning how to build RESTful APIs using Node.js and Express, and work with databases like MongoDB and MySQL. I'm also comfortable with Git, GitHub, and basic deployment workflows.
                </p>
                <p>
                  My goal is to become a skilled developer who can build secure, scalable, and user-friendly web applications from scratch. Alongside development, I'm also diving into cybersecurity to better understand how to build safer applications.
                </p>
              </div>
              <div className="about-visual">
                <div className="about-icon">
                  <Code size={80} />
                  <p>Building the Future</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="section-title blue">Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon orange">
                  <Globe size={24} color="white" />
                </div>
                <h3 className="skill-title">HTML, CSS, JavaScript</h3>
                <div className="skill-progress"></div>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon blue">
                  <Code size={24} color="white" />
                </div>
                <h3 className="skill-title">React Basics</h3>
                <div className="skill-progress"></div>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon green">
                  <Database size={24} color="white" />
                </div>
                <h3 className="skill-title">C Programming, Data Structures</h3>
                <div className="skill-progress"></div>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon purple">
                  <Shield size={24} color="white" />
                </div>
                <h3 className="skill-title">Basic Linux, Git & GitHub</h3>
                <div className="skill-progress"></div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="section-title teal">Projects</h2>
            <div className="projects-grid">
              {projects.map((project, idx) => (
                <div key={idx} className="project-card">
                  <div className="project-header">
                    <div className="project-icon">
                      <Code size={24} color="white" />
                    </div>
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-tech">
                        {project.tech?.map((tech, techIdx) => (
                          <span key={techIdx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-progress"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="section-title pink">Let's Connect</h2>
            <div className="contact-container">
              <div className="contact-links">
                <a href="mailto:mrvk272007@gmail.com" className="contact-link">
                  <div className="contact-icon email">
                    <Mail size={20} color="white" />
                  </div>
                  <span>Email</span>
                </a>
                
                <a 
                  href="https://github.com/MrVk-27" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <div className="contact-icon github">
                    <Github size={20} color="white" />
                  </div>
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/vignesh-krishnamoorthy-a1354b32a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <div className="contact-icon linkedin">
                    <Linkedin size={20} color="white" />
                  </div>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Vignesh. All rights reserved.</p>
          <div className="footer-line"></div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;