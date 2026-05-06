import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--raised' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="navbar__logo-mark">BL</span>
          <span className="navbar__logo-dot" />
        </button>

        <nav className="navbar__nav">
          {NAV_LINKS.map((link, i) => (
            <button key={link} className="navbar__link" onClick={() => scrollTo(link)}>
              <span className="navbar__link-num">{String(i + 1).padStart(2,'0')}</span>
              {link}
            </button>
          ))}
        </nav>

        <a href="mailto:bhavyalamba56@gmail.com" className="navbar__cta">
          Say hello ↗
        </a>

        <button className={`navbar__hamburger ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="navbar__drawer">
          {NAV_LINKS.map((link) => (
            <button key={link} className="navbar__drawer-link" onClick={() => scrollTo(link)}>
              {link}
            </button>
          ))}
          <a href="mailto:bhavyalamba56@gmail.com@bhavyalamba56@gmail.comrivera.dev" className="navbar__drawer-cta">Say hello ↗</a>
        </div>
      )}
    </header>
  );
}
