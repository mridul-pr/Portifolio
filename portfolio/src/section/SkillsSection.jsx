import React from "react";
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiPostman,
  SiSass,
  SiFigma,
  SiSwagger,
  SiOpenai,
} from "react-icons/si";
import "./SkillsSection.scss";

const skills = [
  { name: "Python", icon: <FaPython />, color: "#306998" },
  { name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
  { name: "CSS / SCSS", icon: <FaCss3Alt />, color: "#1572b6" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "React", icon: <FaReact />, color: "#61dbfb" },
  { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
  { name: "Figma", icon: <SiFigma />, color: "#f24e1e" },
  { name: "ChatGPT", icon: <SiOpenai />, color: "#10a37f" },
  { name: "Swagger", icon: <SiSwagger />, color: "#85ea2d" },
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h1 className="skills-title">SKILLS</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            style={{ borderColor: skill.color }}
          >
            <div className="icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
