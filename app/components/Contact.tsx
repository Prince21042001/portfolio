import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>
        <span className={styles.number}>06.</span> What's Next?
      </h2>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.description}>
        I'm currently looking for new opportunities in software development. My inbox is always open,
        whether you have a question or just want to say hi. I'll try my best to get back to you as soon as possible!
      </p>
      <a className={styles.emailLink} href="mailto:pp21042001@gmail.com">
        Say Hello
      </a>
    </section>
  );
};

export default Contact; 