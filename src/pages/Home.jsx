import React from 'react';
import { resumeData } from '../data';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div style={styles.container}>
      <div className="container">
        <div style={styles.content}>
          <h2 style={styles.greeting}>Hello, I'm</h2>
          <h1 style={styles.name}>{resumeData.name}</h1>
          <h3 style={styles.title}>{resumeData.title}</h3>
          <p style={styles.summary}>{resumeData.summary}</p>
          
          <div style={styles.actions}>
            <Link to="/works" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>

          <div style={styles.socials}>
            <a href={resumeData.socials.github} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaGithub />
            </a>
            <a href={resumeData.socials.linkedin} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: 'calc(100vh - var(--nav-height))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 40%)', // Removed to let cursor show clearly
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    maxWidth: '800px',
  },
  greeting: {
    color: 'var(--accent-primary)',
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  name: {
    fontSize: 'clamp(3rem, 5vw, 5rem)',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '1rem',
    background: 'var(--accent-gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  title: {
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    color: 'var(--text-primary)',
    marginBottom: '1.5rem',
  },
  summary: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    marginBottom: '2.5rem',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '3rem',
  },
  socials: {
    display: 'flex',
    gap: '1.5rem',
  },
  socialLink: {
    fontSize: '1.5rem',
    color: 'var(--text-secondary)',
  }
};

export default Home;
