import React from "react";
import { FaCode, FaUsers, FaGraduationCap, FaBullseye } from "react-icons/fa";
import Reveal, { StaggerGroup, StaggerItem } from "../shared/Reveal";
import "./About.scss";

const CARDS = [
  {
    icon: <FaCode />,
    title: "What I build",
    text: "Responsive, production-ready interfaces that turn business requirements into features people actually use — with React, clean component architecture, and REST APIs at the core.",
  },
  {
    icon: <FaUsers />,
    title: "How I work",
    text: "I sit close to stakeholders. At HRLabs I work directly with the CEO and team lead to translate raw requirements into shipped, responsive products — then lead a 4-person team through delivery.",
  },
  {
    icon: <FaBullseye />,
    title: "What I optimize for",
    text: "Reusable components over one-off code. On the HRM platform, componentizing the UI cut redundant code by 50% and sped up development by 30%.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Where I started",
    text: "B.E. in Computer Science Engineering from Acharya Institute of Technology, Bangalore — then straight into building software people rely on daily.",
  },
];

const About = () => {
  return (
    <section className="about section" id="about">
      <Reveal>
        <p className="eyebrow">about</p>
        <h2 className="section-heading">Frontend-first, product-minded.</h2>
        <p className="section-sub">
          Four things worth knowing before you read the timeline.
        </p>
      </Reveal>

      <StaggerGroup className="about__grid">
        {CARDS.map((card) => (
          <StaggerItem key={card.title} className="about__card">
            <div className="about__card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
};

export default About;
