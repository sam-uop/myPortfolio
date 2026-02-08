import React from 'react';
import { resumeData } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Works = () => {
  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.heading}>My Works</h2>
      <div style={styles.grid}>
        {resumeData.projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardContent}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.techStack}>{project.tech}</p>
              <p style={styles.year}>{project.year}</p>
              
              <ul style={styles.descriptionList}>
                {project.description.slice(0, 2).map((desc, i) => (
                   <li key={i} style={styles.descriptionItem}>• {desc}</li>
                ))}
              </ul>
              
              <div style={styles.links}>
                 {/* Placeholder links since extract didn't have specific URLs */}
                <a href="https://github.com/sam-uop" target="_blank" rel="noopener noreferrer" style={styles.link}>
                  <FaGithub /> Code
                </a>
              </div>
            </div>
            <div style={styles.cardOverlay}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 2rem',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    textAlign: 'center',
    background: 'var(--accent-gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  projectTitle: {
    fontSize: '1.4rem',
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
  },
  techStack: {
    fontSize: '0.9rem',
    color: 'var(--accent-primary)',
    marginBottom: '0.5rem',
    fontWeight: '600',
  },
  year: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    marginBottom: '1rem',
    fontStyle: 'italic',
  },
  descriptionList: {
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  descriptionItem: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.5rem',
    lineHeight: '1.5',
  },
  links: {
    display: 'flex',
    gap: '1rem',
    marginTop: 'auto',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
};

export default Works;
