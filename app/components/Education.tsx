import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  const educationList = [
    {
      school: 'Loyalist College',
      degree: 'Post Graduate Diploma in Computer Software & Database Development',
      date: 'Sep 2023 - Apr 2025',
      location: 'Toronto, Canada',
      gpa: 'GPA: 3.8/4.0',
      description: 'Advanced program focusing on full-stack development, database management, cloud computing, and agile methodologies. Developing expertise in modern web frameworks and scalable application architectures.'
    },
    {
      school: 'Gujarat Technological University',
      degree: 'Bachelor of Engineering in Computer Engineering',
      date: 'Aug 2017 - May 2021',
      location: 'Gujarat, India',
      gpa: 'GPA: 8.7/10.0',
      description: 'Comprehensive curriculum covering algorithms, data structures, operating systems, and software engineering principles. Participated in hackathons and developed several academic projects including web applications and mobile solutions.'
    }
  ];

  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.heading}>
        <span className={styles.number}>03.</span> Education
      </h2>
      <div className={styles.container}>
        {educationList.map((edu, i) => (
          <div key={i} className={styles.educationItem}>
            <div className={styles.content}>
              <div className={styles.timeframe}>
                <span>{edu.date}</span>
                <span>{edu.location}</span>
              </div>
              <h3 className={styles.school}>{edu.school}</h3>
              <div className={styles.degree}>{edu.degree}</div>
              <div className={styles.gpa}>{edu.gpa}</div>
              <p className={styles.description}>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 