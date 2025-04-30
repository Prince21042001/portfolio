import React, { useState } from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  const jobs = [
    {
      title: 'Software Developer',
      company: 'Mobiquity Softech',
      url: 'https://mobiquitysoftech.com/',
      range: 'June 2022 - February 2024',
      duties: [
        'Engineered a secure user authentication and authorization system using Auth0 and event-driven architecture, enhancing user data integration efficiency by 30% across internal and external platforms.',
        'Developed REST APIs for end-to-end user onboarding and business registration processes, enabling seamless data flow and reducing user onboarding time by 20%.',
        'Built scalable microservices using Node.js, AWS Lambda, S3, DynamoDB, and API Gateway, enabling seamless CSV file uploads, validation, JSON conversion, and DynamoDB storage.',
        'Enhanced system reliability and testability by integrating AWS SDK, implementing unit tests to prevent regressions, and using AWS CloudWatch Logs for debugging.',
      ],
    },
    {
      title: 'Software Developer (Banking Project)',
      company: 'National Bank Holdings',
      url: '#',
      range: 'Project at Mobiquity Softech',
      duties: [
        'Engineered a secure user authentication system using Auth0 and event-driven architecture.',
        'Developed REST APIs for end-to-end user onboarding and business registration processes using Node.js and Nest.js.',
        'Built scalable microservices using Node.js, AWS Lambda, S3, DynamoDB, and API Gateway for data processing.',
        'Implemented comprehensive unit tests and used AWS CloudWatch Logs for efficient debugging.',
      ],
    },
    {
      title: 'Frontend Developer (Banking Project)',
      company: 'Bank of Philippines Ireland',
      url: '#',
      range: 'Project at Mobiquity Softech',
      duties: [
        'Developed reusable common components using Angular and Bootstrap for a high-traffic banking platform serving millions of users.',
        'Delivered key features such as balance conversions, money transfers, credit card replacements, promotional banners, and Favorite transactions.',
        'Spearheaded a performance optimization initiative, reducing frontend page load time by 30% through code-splitting and lazy loading.',
        'Achieved 90% test coverage with comprehensive unit testing using Jasmine and Mocha, reducing post-release defects by 25%.',
      ],
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.heading}>
        <span className={styles.number}>02.</span> Where I've Worked
      </h2>
      <div className={styles.container}>
        <div className={styles.tabList}>
          {jobs.map((job, i) => (
            <button
              key={i}
              className={`${styles.tabButton} ${activeTabId === i ? styles.active : ''}`}
              onClick={() => setActiveTabId(i)}
            >
              {job.company}
            </button>
          ))}
          <div className={styles.highlightBar} style={{ transform: `translateY(calc(${activeTabId} * 42px))` }}></div>
        </div>

        <div className={styles.tabContent}>
          <h3 className={styles.title}>
            {jobs[activeTabId].title} <span className={styles.company}>@ <a href={jobs[activeTabId].url} target="_blank" rel="noopener noreferrer">{jobs[activeTabId].company}</a></span>
          </h3>
          <p className={styles.range}>{jobs[activeTabId].range}</p>
          <ul className={styles.duties}>
            {jobs[activeTabId].duties.map((duty, i) => (
              <li key={i} className={styles.duty}>{duty}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience; 