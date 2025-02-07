import React from "react";
import mySelf from "../assets/Mridul.png";
import "./HeroSection.scss";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      {/* Left Section */}
      <div className="left-section">
        <h3 className="hero-box">
          Hey, I am <i className="fa-solid fa-angle-down"></i>
        </h3>

        <div className="hero-heading">
          <h1 className="hero-name">Mridul</h1>
          <div className="hero-secondname">
            <div className="gold-line"></div> {/* Golden line under "Mridul" */}
            <h2 className="secondname">Pramod</h2>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          className="contact-me"
        >
          Contact Me
        </button>
        <h3 className="hero-social-box">
          My Socials <i className="fa-solid fa-angle-down"></i>
        </h3>

        <div className="socials">
          <div className="linkedin">
            <i className="fa-brands fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/mridulpramod">LinkedIn</a>
          </div>

          <div className="github">
            <i className="fa-brands fa-square-github"></i>
            <a href="https://github.com/mridul-pr">Github</a>
          </div>

          <div className="instagram">
            <i className="fa-brands fa-square-instagram"></i>
            <a href="https://www.instagram.com/mridul_pr/">Instagram</a>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle-section">
        <img src={mySelf} alt="My-Photo" className="middle-image" />
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h1 className="right-heading">Frontend</h1>
        <h2 className="right-subheading">Web developer</h2>
        <p className="right-paragraph">
          I am a passionate frontend web developer with a keen eye for
          <br /> design and a love for crafting engaging user experiences.
          <br /> With expertise in modern frameworks and animations,
          <br /> I bring ideas to life through clean, responsive, and
          interactive <br /> interfaces.
        </p>
        <div className="right-button-section">
          <i className="fa-solid fa-arrow-right"></i>
          <a
            className="right-buttons"
            onClick={() => scrollToSection("skills")}
          >
            My Skills
          </a>
          <i className="fa-solid fa-arrow-right"></i>
          <a
            className="right-buttons"
            onClick={() => scrollToSection("experience")}
          >
            My Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
