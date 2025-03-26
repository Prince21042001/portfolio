import React from 'react';
import styles from './styles/Home.module.css';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.introContainer}>
            <p className={styles.greeting}>Hi, my name is</p>
            <h1 className={styles.name}>Brittany Chiang.</h1>
            <h2 className={styles.tagline}>I build things for the web.</h2>
            <p className={styles.description}>
              I'm a software engineer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I'm focused on building accessible, 
              human-centered products at{' '}
              <a href="https://upstatement.com/" target="_blank" rel="noopener noreferrer">
                Upstatement
              </a>.
            </p>
            <a href="#word" className={styles.cta}>
              Check out my work!
            </a>
          </div>
        </section>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 