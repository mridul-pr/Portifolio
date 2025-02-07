import React from "react";
import "./Experience.scss";

const experiences = [
  {
    role: "Frontend Developer",
    company: "HRLabs",
    duration: "June 2024 - Jan 2025 (7 Months - Full-Time)",
    description:
      "Worked for 6 months developing an HRM website and other related projects.",
  },
  {
    role: "Frontend Developer",
    company: "Atom Engineers",
    duration: "March 2024 - June 2024 (3 Months - Internship)",
    description:
      "Built a modern portfolio website for a construction company, ensuring a professional and visually appealing online presence.",
  },
];

const Experience = () => {
  return (
    <section className="timeline-section">
      <h1 className="timeline-title">Experience</h1>
      <div className="timeline">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h2>{exp.role}</h2>
              <h3>{exp.company}</h3>
              <p>{exp.description}</p>
              <span className="timeline-date">{exp.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
