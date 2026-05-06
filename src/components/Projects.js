import React, { useState } from 'react';
import { projects } from '../data/resumeData';
import useInView from '../hooks/useInView';
import '../styles/Projects.css';

const SHAPES = {
  circle:   <circle cx="40" cy="40" r="36" />,
  square:   <rect x="6" y="6" width="68" height="68" rx="8" />,
  triangle: <polygon points="40,6 74,70 6,70" />,
  diamond:  <polygon points="40,4 76,40 40,76 4,40" />,
};

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <article
      ref={ref}
      className={`proj-card reveal reveal-delay-${(index % 4) + 1} ${inView ? 'visible' : ''}`}
      style={{ '--proj-color': project.color, '--proj-text': project.textColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="proj-card__color-block">
        <svg className="proj-card__shape" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {React.cloneElement(SHAPES[project.shape], {
            fill: 'rgba(255,255,255,0.25)',
            stroke: 'rgba(255,255,255,0.5)',
            strokeWidth: 1.5
          })}
        </svg>
        <span className="proj-card__year">{project.year}</span>
      </div>

      <div className="proj-card__body">
        <h3 className="proj-card__name">{project.name}</h3>
        <p className="proj-card__tagline">{project.tagline}</p>
        <p className="proj-card__desc">{project.description}</p>

        <div className="proj-card__footer">
          <div className="proj-card__tech">
            {project.tech.map(t => (
              <span key={t} className="proj-card__tech-item">{t}</span>
            ))}
          </div>
          <a href={project.link} className="proj-card__link">View →</a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="projects section-wrap">
      <div className="container">
        <div className="projects__head" ref={ref}>
          <span className="eyebrow">Selected work</span>
          <div className="projects__head-row">
            <h2 className={`section-heading reveal ${inView ? 'visible' : ''}`}>
              Things I've<br /><em>built & shipped.</em>
            </h2>
            <p className={`projects__sub reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
              A selection of side projects and experiments that I'm proud of.
            </p>
          </div>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
