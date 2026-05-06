import React from 'react';
import { personalInfo } from '../data/resumeData';
import useInView from '../hooks/useInView';
import '../styles/Contact.css';

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="contact section-wrap">
      <div className="container" ref={ref}>
        <div className="contact__inner">
          {/* Left decorative column */}
          <div className={`contact__art reveal ${inView ? 'visible' : ''}`}>
            <div className="contact__art-circle contact__art-circle--1" />
            <div className="contact__art-circle contact__art-circle--2" />
            <div className="contact__art-circle contact__art-circle--3" />
            <div className="contact__art-label">Let's build something</div>
          </div>

          {/* Right content */}
          <div className="contact__content">
            <span className={`eyebrow reveal ${inView ? 'visible' : ''}`}>Get in touch</span>
            <h2 className={`section-heading contact__heading reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
              Say <em>hello.</em>
            </h2>
            <p className={`contact__sub reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
              I'm always open to new opportunities, collaborations, and interesting conversations.
              Drop me a message and I'll get back to you quickly.
            </p>

            <div className={`contact__links reveal reveal-delay-3 ${inView ? 'visible' : ''}`}>
              <a href={`mailto:${personalInfo.email}`} className="contact__email">
                <span className="contact__email-label">Email me</span>
                <span className="contact__email-addr">{personalInfo.email} ↗</span>
              </a>

              <div className="contact__socials">
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="contact__social">
                  <span className="contact__social-icon">⌥</span>
                  <span>GitHub</span>
                </a>
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="contact__social">
                  <span className="contact__social-icon">in</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
