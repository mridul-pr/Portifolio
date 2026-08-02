import React from "react";
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaUsers, FaTasks, FaServer,
} from "react-icons/fa";
import { SiSpring, SiMysql, SiAxios, SiJsonwebtokens } from "react-icons/si";
import Reveal, { StaggerGroup, StaggerItem } from "../shared/Reveal";
import "./Toolbox.scss";

const CATEGORIES = [
  {
    label: "Frontend",
    items: [
      { name: "React", icon: <FaReact />, note: "Component architecture, hooks, reusable UI" },
      { name: "JavaScript", icon: <FaJs />, note: "ES6+, async data flows" },
      { name: "HTML5", icon: <FaHtml5 />, note: "Semantic, accessible markup" },
      { name: "CSS3 / SCSS", icon: <FaCss3Alt />, note: "Responsive, component-scoped styling" },
    ],
  },
  {
    label: "Backend & data",
    items: [
      { name: "Spring Boot", icon: <SiSpring />, note: "APIs consumed by the frontend" },
      { name: "Java", icon: <FaJava />, note: "Backend service logic" },
      { name: "MySQL", icon: <SiMysql />, note: "Relational schema design" },
    ],
  },
  {
    label: "Integration & auth",
    items: [
      { name: "Axios", icon: <SiAxios />, note: "API interaction layer" },
      { name: "JWT", icon: <SiJsonwebtokens />, note: "Secure, token-based auth" },
      { name: "REST APIs", icon: <FaServer />, note: "Contract-first integration" },
    ],
  },
  {
    label: "Delivery",
    items: [
      { name: "Git", icon: <FaGitAlt />, note: "Version control, code review" },
      { name: "Agile", icon: <FaTasks />, note: "Sprint planning, iterative delivery" },
      { name: "Team leadership", icon: <FaUsers />, note: "Leading a 4-person dev team" },
    ],
  },
];

const Toolbox = () => {
  return (
    <section className="toolbox section" id="toolbox">
      <Reveal>
        <p className="eyebrow">toolbox</p>
        <h2 className="section-heading">What I reach for.</h2>
        <p className="section-sub">
          Grouped by where it sits in the stack — hover a chip for how I've
          actually used it.
        </p>
      </Reveal>

      <div className="toolbox__categories">
        {CATEGORIES.map((cat, i) => (
          <Reveal key={cat.label} delay={i * 0.08} className="toolbox__category">
            <h3 className="toolbox__category-label">{cat.label}</h3>
            <StaggerGroup className="toolbox__chips" staggerDelay={0.05}>
              {cat.items.map((item) => (
                <StaggerItem key={item.name} className="toolbox__chip" y={12}>
                  <span className="toolbox__chip-icon">{item.icon}</span>
                  <span className="toolbox__chip-name">{item.name}</span>
                  <span className="toolbox__chip-note">{item.note}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Toolbox;
