import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import Reveal from "../shared/Reveal";
import MagneticButton from "../shared/MagneticButton";
import "./Contact.scss";

const LINKS = [
  {
    icon: <FaEnvelope />,
    label: "Mridulpramod8@gmail.com",
    href: "mailto:Mridulpramod8@gmail.com",
  },
  {
    icon: <FaPhone />,
    label: "+91 99026 10692",
    href: "tel:+919902610692",
  },
  {
    icon: <FaLinkedin />,
    label: "linkedin.com/in/mridulpramod",
    href: "https://www.linkedin.com/in/mridulpramod",
  },
  {
    icon: <FaGithub />,
    label: "github.com/mridul-pr",
    href: "https://github.com/mridul-pr",
  },
];

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <Reveal className="contact__inner">
        <p className="eyebrow">contact</p>
        <h2 className="contact__headline">
          Building something worth
          <br />a good frontend? Let's talk.
        </h2>

        <div className="contact__cta">
          <MagneticButton variant="primary" href="mailto:Mridulpramod8@gmail.com">
            Say hello
          </MagneticButton>
        </div>

        <div className="contact__links">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
