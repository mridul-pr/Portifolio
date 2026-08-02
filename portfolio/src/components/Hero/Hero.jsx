import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "../shared/MagneticButton";
import "./Hero.scss";

const STATS = [
  { value: "90%", label: "manual HR tasks cut" },
  { value: "4", label: "engineers led" },
  { value: "3", label: "products shipped" },
  { value: "99.9%", label: "uptime maintained" },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__inner">
        <motion.div
          className="hero__status"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hero__status-dot" />
          Open to new opportunities · Bangalore, IN
        </motion.div>

        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Mridul Pramod — Frontend Developer @ HRLabs
        </motion.p>

        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I turn business requirements
          <br />
          into production interfaces.
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          Promoted from Intern to Junior Frontend Developer in three months.
          Since then I've led a four-person team building the HRM, CRM, and
          recruitment platforms HRLabs' clients run their operations on — from
          first requirement to shipped, responsive product.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
        >
          <MagneticButton
            variant="primary"
            onClick={() => scrollTo("projects")}
          >
            See the work
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            onClick={() => scrollTo("contact")}
          >
            Get in touch
          </MagneticButton>

          <div className="hero__socials">
            <a
              href="https://github.com/mridul-pr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mridulpramod"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {STATS.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
