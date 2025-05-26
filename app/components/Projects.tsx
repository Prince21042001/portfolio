import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'SnapBrief',
      description: 'A full-stack SaaS platform for video summarization, leveraging OpenAI APIs to convert video content into text for enhanced accessibility. Integrated Stripe for secure payments, ensuring smooth and reliable transactions.',
      tech: ['Next.js', 'Sass', 'Tailwind CSS', 'OpenAI', 'Stripe'],
      github: 'https://github.com/Prince21042001/SnapBrief',
      external: 'https://snapbrief-two.vercel.app/',
      image: '/images/snapbrief.png'
    },
    {
      title: 'Taskify',
      description: 'A project management application with workspaces, boards, lists, cards, audit logs, activity tracking, and role-based member management. Implemented using modern web technologies and database management.',
      tech: ['React.js', 'Next.js', 'Tailwind CSS', 'MySQL', 'Prisma ORM'],
      github: 'https://github.com/Prince21042001/Taskify',
      external: 'https://taskify-fbnafpq8q-rakshit17patels-projects.vercel.app/',
      image: '/images/Taskify.png'
    },
    {
      title: 'ResourceHub',
      description: 'A web app to match resources with project requirements using the Hungarian algorithm, ensuring optimal team allocation. Added an intelligent search feature to query resource data, improving onboarding speed by 30% and enhancing visibility into resource availability.',
      tech: ['React.js', 'Python', 'Flask', 'Material UI', 'LangChain', 'ChromaDB'],
      github: 'https://github.com/Rakshit17patel/ResourceHub-FE',
      external: '#',
      image: '/images/resourcehub.png'
    }
  ];

  return (
    <section id="work" className={styles.projects}>
      <h2 className={styles.heading}>
        <span className={styles.number}>05.</span> Some Things I've Built
      </h2>
      <ul className={styles.projectsList}>
        {featuredProjects.map((project, i) => (
          <li key={i} className={styles.projectItem}>
            <div className={styles.projectContent}>
              <div>
                <p className={styles.projectOverline}>Featured Project</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectDescription}>
                  <p>{project.description}</p>
                </div>
                <ul className={styles.projectTechList}>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className={styles.projectLinks}>
                  {project.github && (
                    <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} aria-label="External Link" target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.projectImage}>
              <a href={project.external} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects; 