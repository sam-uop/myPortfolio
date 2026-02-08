import React from 'react';
import { resumeData } from '../data';
import { FaGraduationCap, FaBriefcase, FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="container" style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Resume</h2>
        <a href="/resume.pdf" download className="btn btn-primary" style={styles.downloadBtn}>
          <FaDownload /> Download PDF
        </a>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          <FaBriefcase style={styles.icon} /> Experience
        </h3>
        <div style={styles.timeline}>
          {resumeData.experience.map((exp, index) => (
            <div key={index} style={styles.timelineItem}>
              <div style={styles.timelineContent}>
                <h4 style={styles.role}>{exp.role}</h4>
                <div style={styles.companyRow}>
                    <span style={styles.company}>{exp.company}</span>
                    <span style={styles.location}>{exp.location}</span>
                </div>
                <span style={styles.year}>{exp.year}</span>
                <ul style={styles.list}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={styles.listItem}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          <FaGraduationCap style={styles.icon} /> Education
        </h3>
        <div style={styles.timeline}>
          {resumeData.education.map((edu, index) => (
            <div key={index} style={styles.timelineItem}>
              <div style={styles.timelineContent}>
                <h4 style={styles.role}>{edu.school}</h4>
                <div style={styles.companyRow}>
                    <span style={styles.company}>{edu.degree}</span>
                </div>
                <span style={styles.year}>{edu.year}</span>
                <p style={styles.detail}>GPA: {edu.gpa}</p>
                <p style={styles.detail}>Courses: {edu.courses}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  heading: {
    fontSize: '2.5rem',
    background: 'var(--accent-gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
  },
  section: {
    marginBottom: '4rem',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: 'var(--text-primary)',
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    borderBottom: '1px solid var(--text-secondary)',
    paddingBottom: '0.5rem',
  },
  icon: {
    color: 'var(--accent-primary)',
  },
  timeline: {
    borderLeft: '2px solid rgba(99, 102, 241, 0.2)',
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  timelineItem: {
    position: 'relative',
  },
  timelineContent: {
    position: 'relative',
  },
  role: {
    fontSize: '1.3rem',
    color: 'var(--text-primary)',
    marginBottom: '0.3rem',
  },
  companyRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '0.2rem',
  },
  company: {
    fontSize: '1.1rem',
    color: 'var(--accent-primary)',
    fontWeight: '500',
  },
  location: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
  },
  year: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    display: 'block',
    marginBottom: '1rem',
    fontStyle: 'italic',
  },
  list: {
    listStyle: 'none',
  },
  listItem: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.5rem',
    lineHeight: '1.6',
  },
  detail: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    marginTop: '0.5rem',
  }
};

export default Resume;
