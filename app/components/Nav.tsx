import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>P</span>
          </Link>
        </div>
        <ul className={styles.links}>
          <li>
            <Link href="/#about">
              <span className={styles.navLink}>
                <span className={styles.navNumber}>01.</span> About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#experience">
              <span className={styles.navLink}>
                <span className={styles.navNumber}>02.</span> Experience
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#education">
              <span className={styles.navLink}>
                <span className={styles.navNumber}>03.</span> Education
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#skills">
              <span className={styles.navLink}>
                <span className={styles.navNumber}>04.</span> Skills
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#work">
              <span className={styles.navLink}>
                <span className={styles.navNumber}>05.</span> Work
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <span className={styles.navLink}>
                <span className={styles.navNumber}>06.</span> Contact
              </span>
            </Link>
          </li>
          <li>
            <a href="/PrincePatel_Resume.pdf" className={styles.resumeButton} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav; 