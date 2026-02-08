import React from 'react';
import { resumeData } from '../data';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.heading}>Get In Touch</h2>
      <p style={styles.subtitle}>
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <div style={styles.content}>
        <div style={styles.info}>
          <div style={styles.infoItem}>
            <FaEnvelope style={styles.icon} />
            <a href={`mailto:${resumeData.socials.email}`} style={styles.link}>{resumeData.socials.email}</a>
          </div>
          <div style={styles.infoItem}>
            <FaPhone style={styles.icon} />
             <span style={styles.text}>{resumeData.socials.phone}</span>
          </div>
          <div style={styles.socials}>
             <a href={resumeData.socials.linkedin} target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
               <FaLinkedin />
             </a>
             <a href={resumeData.socials.github} target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
               <FaGithub />
             </a>
          </div>
        </div>

        <form style={styles.form} onClick={(e) => e.preventDefault()}>
            <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input type="text" style={styles.input} placeholder="Your Name" />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input type="email" style={styles.input} placeholder="Your Email" />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea style={styles.textarea} rows="5" placeholder="Your Message"></textarea>
            </div>
            <button className="btn btn-primary" style={{width: '100%'}}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 2rem',
    maxWidth: '1000px',
    margin: '0 auto',
    minHeight: 'calc(100vh - var(--nav-height))',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    background: 'var(--accent-gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    textAlign: 'center',
    maxWidth: '600px',
    marginBottom: '4rem',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    width: '100%',
    justifyContent: 'center',
  },
  info: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem',
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '12px',
    height: 'fit-content',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  icon: {
    color: 'var(--accent-primary)',
    fontSize: '1.2rem',
  },
  link: {
    color: 'var(--text-primary)',
    fontSize: '1rem',
  },
  text: {
    color: 'var(--text-primary)',
    fontSize: '1rem',
  },
  socials: {
    display: 'flex',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  socialIcon: {
    fontSize: '1.5rem',
    color: 'var(--text-secondary)',
    transition: 'color 0.3s',
  },
  form: {
    flex: '1 1 400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  input: {
    padding: '0.8rem',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  textarea: {
    padding: '0.8rem',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    resize: 'vertical',
  }
};

export default Contact;
