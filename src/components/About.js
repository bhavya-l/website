import React from 'react';
import useInView from '../hooks/useInView';
import { personalInfo } from '../data/resumeData';
import '../styles/About.css';

const STATS = [
  { value: '6+', label: 'Years building' },
  { value: '2', label: 'Years of Experience' },
  { value: '5+', label: 'Full-stack applications' },,
  { value: '∞', label: 'Cups of coffee' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="about section-wrap">
      <div className="container">
        {/* Heading row */}
        <div className="about__top" ref={ref}>
          <div className={`about__label-col reveal ${inView ? 'visible' : ''}`}>
            <span className="eyebrow">About me</span>
          </div>
          <h2 className={`section-heading about__heading reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
            Engineer by trade,<br />
            <em>maker</em> by nature.
          </h2>
        </div>

        {/* Two column body */}
        <div className="about__body">
          <div className={`about__bio-col reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
            <p className="about__bio">{personalInfo.bio}</p>
            <p className="about__bio about__bio--2">{personalInfo.bio2}</p>
            <div className="about__links">
              <a href={`mailto:${personalInfo.email}`} className="about__link">
                <span className="about__link-icon">✉</span>
                {personalInfo.email}
              </a>
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="about__link">
                <span className="about__link-icon">⌥</span>
                {personalInfo.github}
              </a>
            </div>
          </div>

          <div className={`about__right-col reveal reveal-delay-3 ${inView ? 'visible' : ''}`}>
            {/* Avatar card */}
            <div className="about__avatar-card">
              <div className="about__avatar">
                <span>BL</span>
              </div>
              <div className="about__avatar-tag about__avatar-tag--1">🎨 Creative coder</div>
              <div className="about__avatar-tag about__avatar-tag--2">☕ Coffee snob</div>
              <div className="about__avatar-tag about__avatar-tag--3">📱 App maker</div>
            </div>

            {/* Stats grid */}
            <div className="about__stats">
              {STATS.map((s, i) => (
                <div key={s.label} className="about__stat" style={{ '--i': i }}>
                  <span className="about__stat-val">{s.value}</span>
                  <span className="about__stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
