import React from 'react';
import { personalInfo } from '../data/resumeData';
import '../styles/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">
          <span>BL</span>
          <span className="footer__logo-dot" />
        </div>
        <p className="footer__copy">
          © {year} {personalInfo.name}. Designed & built with curiosity.
        </p>
        <div className="footer__links">
          <a href={`mailto:${personalInfo.email}`} className="footer__link">Email</a>
          <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="footer__link">GitHub</a>
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="footer__link">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
