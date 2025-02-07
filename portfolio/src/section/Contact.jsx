import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-text">
        Feel free to reach out for collaborations or just a chat! 📩
      </p>
      <div className="contact-links">
        <a href="mailto:Mridulpramod8@gmail.com" className="contact-link">
          <FaEnvelope className="contact-icon" />
          Mridulpramod8@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/mridulpramod"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaLinkedin className="contact-icon" />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
