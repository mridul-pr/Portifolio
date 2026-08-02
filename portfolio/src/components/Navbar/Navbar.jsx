import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "../shared/MagneticButton";
import "./Navbar.scss";

const NAV_LINKS = [
  { label: "Journey", id: "journey" },
  { label: "Toolbox", id: "toolbox" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1kUPlanKhbF1Rw8EnjkM08ccCnKRQjmG0/view?usp=sharing";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__inner">
        <a
          className="navbar__logo"
          onClick={() => scrollToSection("hero")}
          role="button"
          tabIndex={0}
          aria-label="Back to top"
        >
          MP<span className="navbar__logo-dot">.</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <MagneticButton
            variant="ghost"
            href={RESUME_URL}
            className="navbar__resume-btn"
          >
            Resume ↗
          </MagneticButton>
          <button
            className={`navbar__burger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          className="navbar__mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {NAV_LINKS.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)}>
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
