import React from 'react';
import { resumeData } from '../data';

const About = () => {
  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.heading}>About Me</h2>
      <div style={styles.content}>
        <div style={styles.textColumn}>
          <p style={styles.bio}>{resumeData.summary}</p>
          <p style={styles.bio}>
            I have a deep passion for developing innovative software solutions. 
            With a Master's in Computer Science and hands-on experience in full-stack development, 
            I thrive in dynamic environments where I can apply my skills in React, Node.js, and AI integration.
          </p>
          
          <div style={styles.skillsSection}>
            <h3 style={styles.subHeading}>Languages</h3>
            <div style={styles.skillTags}>
              {resumeData.skills.languages.map((skill, index) => (
                <span key={index} style={styles.tag}>{skill}</span>
              ))}
            </div>
          </div>

          <div style={styles.skillsSection}>
            <h3 style={styles.subHeading}>Frameworks & Tools</h3>
            <div style={styles.skillTags}>
              {resumeData.skills.frameworks.map((skill, index) => (
                <span key={index} style={styles.tag}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Placeholder for optional image */}
        <div style={styles.imageColumn}>
           <div style={styles.placeholderImage}>
             <span>Photo Placeholder</span>
           </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 2rem',
    minHeight: 'calc(100vh - var(--nav-height))',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    background: 'var(--accent-gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'start',
  },
  textColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  bio: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.8',
  },
  skillsSection: {
    marginTop: '1rem',
  },
  subHeading: {
    fontSize: '1.2rem',
    color: 'var(--text-primary)',
    marginBottom: '1rem',
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem',
  },
  tag: {
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '4px',
    fontSize: '0.9rem',
    color: 'var(--accent-primary)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
  },
  imageColumn: {
    display: 'flex',
    justifyContent: 'center',
  },
  placeholderImage: {
    width: '100%',
    maxWidth: '400px',
    aspectRatio: '1/1',
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)',
    border: '2px dashed var(--text-secondary)',
  },
};

export default About;
