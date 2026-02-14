import React from 'react';
import Tilt from 'react-parallax-tilt';
import { resumeData } from '../data';
import profileImage from '../assets/profile.png';

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
        
        <div style={styles.imageColumn}>
           <Tilt tiltReverse={true} style={styles.tiltWrapper}>
             <img 
               src={profileImage} 
               alt="Profile" 
               style={styles.profileImage} 
             />
           </Tilt>
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
    alignItems: 'center', // Changed to center for better alignment with image
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
    perspective: '1000px', // Optional: adds depth to the 3D effect
  },
  tiltWrapper: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '20px',
    overflow: 'hidden', // Ensures image stays within rounded corners
    boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.3)', // Added shadow for depth
  },
  profileImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '20px', // Ensure image itself is rounded
  },
};

export default About;
