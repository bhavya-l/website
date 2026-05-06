import React, { useState } from 'react';
import { experience } from '../data/resumeData';
import useInView from '../hooks/useInView';
import '../styles/Experience.css';

export default function Experience() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="experience section-wrap">
      <div className="container" ref={ref}>
        <div className="experience__head">
          <span className="eyebrow">Work history</span>
          <h2 className={`section-heading reveal ${inView ? 'visible' : ''}`}>
            Places I've<br /><em>called home.</em>
          </h2>
        </div>

        <div className="experience__layout">
          {/* Big numbered list */}
          <div className="experience__list">
            {experience.map((job, i) => (
              <button
                key={job.id}
                className={`exp-item ${active === i ? 'exp-item--active' : ''}`}
                onClick={() => setActive(i)}
                style={{ '--job-color': job.color, '--job-bg': job.bg }}
              >
                <span className="exp-item__num">{job.index}</span>
                <div className="exp-item__meta">
                  <span className="exp-item__company">{job.company}</span>
                  <span className="exp-item__period">{job.period}</span>
                </div>
                <span className="exp-item__chevron">↗</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="experience__panel">
            {experience.map((job, i) => (
              <div
                key={job.id}
                className={`exp-detail ${active === i ? 'exp-detail--visible' : ''}`}
                style={{ '--job-color': job.color, '--job-bg': job.bg }}
              >
                <div className="exp-detail__card">
                  <div className="exp-detail__top">
                    <span className="exp-detail__index">{job.index}</span>
                    <div>
                      <h3 className="exp-detail__role">{job.role}</h3>
                      <p className="exp-detail__at">
                        at <strong style={{ color: job.color }}>{job.company}</strong>
                        <span className="exp-detail__period">{job.period}</span>
                      </p>
                    </div>
                  </div>

                  <p className="exp-detail__desc">{job.description}</p>

                  <div className="exp-detail__tags">
                    {job.tags.map((t) => (
                      <span key={t} className="exp-detail__tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Decorative accent */}
                <div className="exp-detail__accent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
