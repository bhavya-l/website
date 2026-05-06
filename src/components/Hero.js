import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/resumeData';
import '../styles/Hero.css';

export default function Hero() {
  const firstRef = useRef(null);
  const lastRef  = useRef(null);

  useEffect(() => {
    [firstRef, lastRef].forEach((r, ri) => {
      if (!r.current) return;
      r.current.querySelectorAll('.hero__char').forEach((c, i) => {
        c.style.animationDelay = `${0.4 + ri * 0.35 + i * 0.045}s`;
      });
    });
  }, []);

  const splitName = (str) =>
    str.split('').map((ch, i) => (
      <span key={i} className="hero__char">{ch === ' ' ? '\u00A0' : ch}</span>
    ));

  return (
    <section className="hero" id="hero">
      {/* Floating color shapes */}
      <div className="hero__shape hero__shape--circle" />
      <div className="hero__shape hero__shape--blob" />
      <div className="hero__shape hero__shape--ring" />
      <div className="hero__shape hero__shape--square" />
      <div className="hero__shape hero__shape--dot-grid" />

      <div className="container hero__content">
        {/* Status badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>Open to opportunities · {personalInfo.location}</span>
        </div>

        {/* Giant name */}
        <h1 className="hero__name">
          <span ref={firstRef} className="hero__name-row hero__name-first">
            {splitName(personalInfo.firstName)}
          </span>
          <span className="hero__name-row hero__name-last-wrap">
            <ref ref={lastRef}>
              <span ref={lastRef} className="hero__name-row hero__name-last">
                {splitName(personalInfo.lastName)}
              </span>
            </ref>
          </span>
        </h1>

        {/* Tagline */}
        <p className="hero__tagline">{personalInfo.tagline}</p>

        {/* Actions */}
        <div className="hero__actions">
          <a href={`mailto:${personalInfo.email}`} className="hero__btn-primary">
            Get in touch <span className="hero__btn-arrow">→</span>
          </a>
          <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="hero__btn-ghost">
            GitHub ↗
          </a>
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="hero__btn-ghost">
            LinkedIn ↗
          </a>
        </div>

        {/* Scroll cue */}
        <div className="hero__scroll">
          <div className="hero__scroll-wheel" />
          <span>scroll to explore</span>
        </div>
      </div>

      {/* Marquee tape */}
      <div className="hero__tape">
        <div className="hero__tape-track">
          {Array(6).fill(['React', 'TypeScript', 'Figma', 'Node.js', 'Python', 'SQL', 'Docker', 'Vue', 'Flutter', 'CSS']).flat()
            .map((t, i) => <span key={i} className="hero__tape-item">{t} <b>✦</b></span>)
          }
        </div>
      </div>
    </section>
  );
}
