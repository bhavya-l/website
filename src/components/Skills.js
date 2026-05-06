import React from 'react';
import { skills } from '../data/resumeData';
import useInView from '../hooks/useInView';
import '../styles/Skills.css';

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="skills section-wrap">
      <div className="container" ref={ref}>
        <div className="skills__head">
          <span className="eyebrow">Toolkit</span>
          <h2 className={`section-heading reveal ${inView ? 'visible' : ''}`}>
            What I work<br /><em>with daily.</em>
          </h2>
        </div>

        <div className="skills__grid">
          {skills.map((cat, ci) => (
            <div
              key={cat.category}
              className={`skill-cat reveal reveal-delay-${ci + 1} ${inView ? 'visible' : ''}`}
              style={{ '--cat-color': cat.color, '--cat-bg': cat.bg }}
            >
              <div className="skill-cat__header">
                <span className="skill-cat__dot" />
                <h3 className="skill-cat__title">{cat.category}</h3>
              </div>
              <div className="skill-cat__pills">
                {cat.items.map((item, ii) => (
                  <span
                    key={item}
                    className="skill-pill"
                    style={{ animationDelay: `${ci * 0.1 + ii * 0.06}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Large decorative text */}
        <div className={`skills__deco reveal reveal-delay-4 ${inView ? 'visible' : ''}`}>
          <span>Always</span>
          <span className="skills__deco-accent">learning.</span>
        </div>
      </div>
    </section>
  );
}
