import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const handleClickOutside = (e: any) => {
    if (
      isMenuOpen &&
      !e.target.closest(`.${styles.mobileMenu}`) &&
      !e.target.closest(`.${styles.hamburger}`)
    ) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "About", url: "/#about", number: "01" },
    { name: "Experience", url: "/#experience", number: "02" },
    { name: "Education", url: "/#education", number: "03" },
    { name: "Skills", url: "/#skills", number: "04" },
    { name: "Work", url: "/#work", number: "05" },
    { name: "Contact", url: "/#contact", number: "06" },
  ];

  return (
    <header
      className={`${styles.header} ${!scrolledToTop ? styles.scrolled : ""}`}
    >
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>P</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.links}>
          {navLinks.map(({ name, url, number }) => (
            <li key={name}>
              <Link href={url}>
                <span className={styles.navLink}>
                  <span className={styles.navNumber}>{number}.</span> {name}
                </span>
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/PrincePatel_Resume.pdf"
              className={styles.resumeButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <g>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </g>
            ) : (
              <g>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </g>
            )}
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
        >
          <ul className={styles.mobileLinks}>
            {navLinks.map(({ name, url, number }) => (
              <li key={name}>
                <Link
                  href={url}
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.body.style.overflow = "";
                  }}
                >
                  <span className={styles.mobileNavLink}>
                    <span className={styles.mobileNavNumber}>{number}.</span>
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/new_resume.pdf" passHref>
            <a
              className={`${styles.resumeButton} ${styles.mobileResumeButton}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
