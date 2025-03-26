import React from 'react';
import styles from './About.module.css';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Node.js',
    'Angular',
    'Next.js',
    'AWS',
    'Docker'
  ];

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>
        <span className={styles.number}>01.</span> About Me
      </h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <div>
            <p>
              Hello! My name is Prince and I enjoy creating things that live on the internet.
              My journey in software development began during my Bachelor's in Computer Engineering at Gujarat Technological University, where I developed a passion for building web applications.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at a software company where I built products for major banks and financial institutions. My main focus these days is building scalable, user-friendly applications using modern technologies.
            </p>
            <p>
              I'm currently pursuing a PG diploma in Computer Software and Database Management at Loyalist College in Toronto, Canada, while continuing to expand my development skills.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className={styles.skillsList}>
              {skills.map((skill, i) => (
                <li key={i} className={styles.skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img 
              src="https://github.com/Prince21042001.png" 
              alt="Prince Patel" 
              className={styles.profileImage} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 