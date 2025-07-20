import React from 'react';
import '../styles/Card.css';
import '../styles/Experience.css';
import vividSeats from '../assets/vividSeats.png';
import QBuild from '../assets/QBuild.png';
import ttc from '../assets/ttc.png';
import dbis from '../assets/dbis.png';
import syngli from '../assets/syngli.png';

const experiences = [
  {
    company: 'Vivid Seats',
    title: 'Software Engineer',
    duration: 'Sept 2024 - Dec 2024',
    logo: vividSeats,
    width: '76px',
    bullets: [
      'Developed and maintained APIs with Python and FastAPI, integrated Datadog monitoring, and documented new endpoints on Stoplight.',
      'Created Vue.js components for ticket viewing pages based on Figma designs, improving user experience with features like price sorting and quantity selection.',
      'Collaborated on porting a legacy ticket checkout page to React, contributing to task creation, planning, and component development.'
    ]
  },
  {
    company: 'QBuild Software',
    title: 'React Developer',
    duration: 'May 2024 - Aug 2024',
    logo: QBuild,
    width: '112px',
    bullets: [
      'Guided migration of the company’s flagship product from .NET to React to enhance UI interactivity, optimize performance with virtual DOM, and ensure scalability with modular design.'
    ]
  },
  {
    company: 'QBuild Software',
    title: 'Full Stack Engineer',
    duration: 'Sept 2023 - Dec 2023',
    logo: QBuild,
    width: '112px',
    bullets: [
      'Collaborated with internal stakeholders to enhance the company’s CRM website by implementing new pages and resolving numerous reported bugs, ensuring optimal functionality and user experience using .NET, Kendo UI, and C#.',
      'Designed and developed task scheduling and management pages for the sales team in .NET, C#, and Kendo UI.'
    ]
  },
  {
    company: 'Toronto Transit Commission',
    title: 'QA Engineer',
    duration: 'Sept 2022 - Dec 2022',
    logo: ttc,
    width: '112px',
    bullets: [
      'Designed algorithm in UFT to automatically update software on 4000+ telephones, saving time versus manual updates.',
      'Created presentation on accessibility training to present to TTC executives to teach about various testing tools and methods for accessibility enhancement on web pages.',
      'Documented detailed test cases for new features, enabling developers to fix errors and enhance features.'
    ]
  },
  {
    company: 'Dale Brain Injury Services',
    title: 'Application Developer',
    duration: 'Jan 2022 - Apr 2022',
    logo: dbis,
    width: '65px',
    bullets: [
      'Transformed various manual processes to automated processes through the use of Microsoft Office.',
      'Designed an innovative and engaging careers webpage for the company’s website.',
      'Assisted with projects like form creation, designing infographics, and updating surveys.'
    ]
  },
  {
    company: 'Syngli Inc',
    title: 'Marketing Intern',
    duration: 'May 2021 - Aug 2021',
    logo: syngli,
    width: '112px',
    bullets: [
      'Edited Wikipedia pages of the company to better reflect the updated website.',
      'Organized meetings with the CEO to update weekly progress of the project.',
      'Used knowledge from courses such as Microsoft Vidyard Partners Digital Bootcamp and Hubspot to improve the company site via SEO and interactive content.',
      'Created multiple blog posts, tooltips, FAQ pages, and optimized blog content.'
    ]
  }
];

const ExperiencePage = () => {
  return (
    <div id="experience" className="card experience-container">
      <div className="card-container" style={{ flexDirection: 'column' }}>
        <h1 className="card-title">Experience</h1>

        <div className="experience-row">
          <div className="experience-entries">
            {experiences.map((exp, index) => (
              <div key={index} style={{ display: 'flex', paddingLeft: '1.5rem' }}>
                <div className="timeline">
                  <div className="timeline-line"></div>
                  <div className="timeline-item">
                    <img style={{ width: exp.width }} src={exp.logo} alt={exp.company} />
                  </div>
                </div>

                <div className="experience-entry">
                  <div className="experience-header">
                    <h2 className="experience-company">
                      {exp.company}, <span className="experience-role">{exp.title}</span>
                    </h2>
                  </div>
                  <p className="experience-duration">{exp.duration}</p>
                  <ul className="experience-list">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="experience-bullet">{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ExperiencePage;
