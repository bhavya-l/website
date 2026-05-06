import React from 'react';
import { education } from '../data/resumeData';
import useInView from '../hooks/useInView';
import '../styles/Education.css';

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="education section-wrap">
      <div className="container" ref={ref}>
        <div className="education__inner">
          <div className="education__left">
            <span className="eyebrow">Background</span>
            <h2 className={`section-heading reveal ${inView ? 'visible' : ''}`}>
              Where I<br /><em>studied.</em>
            </h2>
            <p className={`education__note reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
              Formal education topped up with<br />
              a constant stream of self-directed learning.
            </p>
          </div>

          <div className="education__cards">
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className={`edu-card reveal reveal-delay-${i + 2} ${inView ? 'visible' : ''}`}
                style={{ '--edu-color': edu.color }}
              >
                <div className="edu-card__stripe" />
                <div className="edu-card__body">
                  <span className="edu-card__period">{edu.period}</span>
                  <h3 className="edu-card__degree">{edu.degree}</h3>
                  <p className="edu-card__school">{edu.school}</p>
                  <p className="edu-card__detail">{edu.detail}</p>
                </div>
                <div className="edu-card__num">{String(i + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
