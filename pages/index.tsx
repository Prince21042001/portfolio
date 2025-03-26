import React from 'react';
import Head from 'next/head';
import Nav from '../app/components/Nav';
import About from '../app/components/About';
import Experience from '../app/components/Experience';
import Education from '../app/components/Education';
import Skills from '../app/components/Skills';
import Projects from '../app/components/Projects';
import Contact from '../app/components/Contact';
import Footer from '../app/components/Footer';
import styles from '../app/styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prince Patel | Software Developer</title>
        <meta name="description" content="Prince Patel is a software developer specializing in building exceptional digital experiences with expertise in Node.js, Angular, React, and AWS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.introContainer}>
            <p className={styles.greeting}>Hi, my name is</p>
            <h1 className={styles.name}>Prince Patel.</h1>
            <h2 className={styles.tagline}>I build things for the web.</h2>
            <p className={styles.description}>
              I'm a software developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on developing scalable applications using 
              Node.js, React, and AWS.
            </p>
            <a href="#work" className={styles.cta}>
              Check out my work!
            </a>
          </div>
        </section>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 