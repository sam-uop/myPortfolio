import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.logo}>
          SAMRUDH<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </Link>

        {/* Desktop Menu */}
        <ul style={styles.desktopMenu}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                style={{
                  ...styles.link,
                  ...(location.pathname === link.path ? styles.activeLink : {}),
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div style={styles.mobileIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul style={styles.mobileMenu}>
            {navLinks.map((link) => (
              <li key={link.name} style={styles.mobileMenuItem}>
                <Link
                  to={link.path}
                  style={{
                    ...styles.link,
                    ...(location.pathname === link.path ? styles.activeLink : {}),
                  }}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    height: 'var(--nav-height)',
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(10, 10, 10, 0.95)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '-1px',
    color: 'var(--text-primary)',
  },
  desktopMenu: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
    position: 'relative',
  },
  activeLink: {
    color: 'var(--text-primary)',
  },
  mobileIcon: { // Hidden by default in CSS for desktop, handled via media queries ideally, but inline for now we'll rely on conditional rendering logic or improved CSS class structure later. 
    // Implementing responsive logic via JS for simplicity in this artifact or assuming standard media queries in index.css would be better.
    // For now, I'll add a quick media query check or just rely on CSS classes if I had them. 
    // Since I'm using inline styles here, I'll add a class 'mobile-hidden' to index.css or simple conditional.
    display: 'none', // Placeholder, needs CSS to show on mobile
    color: 'var(--text-primary)',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  mobileMenu: {
    position: 'absolute',
    top: 'var(--nav-height)',
    left: 0,
    width: '100%',
    backgroundColor: 'var(--bg-secondary)',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  mobileMenuItem: {
    textAlign: 'center',
  }
};

export default Navbar;
