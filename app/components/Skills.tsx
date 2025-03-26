import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Angular', 'Next.js', 'HTML5', 'CSS3/SCSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Python', 'Django']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']
    },
    {
      category: 'DevOps & Cloud',
      skills: ['AWS', 'Docker', 'CI/CD', 'Git', 'GitHub Actions']
    },
    {
      category: 'Tools & Others',
      skills: ['VSCode', 'Postman', 'Figma', 'Agile/Scrum', 'Jest', 'Redux', 'Tailwind CSS']
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.heading}>
        <span className={styles.number}>04.</span> Skills
      </h2>
      <div className={styles.container}>
        {skillCategories.map((skillCategory, i) => (
          <div key={i} className={styles.category}>
            <h3 className={styles.categoryTitle}>{skillCategory.category}</h3>
            <ul className={styles.skillList}>
              {skillCategory.skills.map((skill, j) => (
                <li key={j} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 