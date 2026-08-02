import React from "react";
import Reveal from "../shared/Reveal";
import "./Projects.scss";

const PROJECTS = [
  {
    code: "01",
    name: "HRM Software",
    status: "Shipped",
    period: "Jun 2024 — Dec 2024",
    summary:
      "The platform that started it all — a role-based HR system now used by multiple companies to run payroll, leave, and reimbursement.",
    tech: ["React", "Spring Boot", "MySQL", "Axios", "JWT"],
    built: [
      "Role-based and module-based access control to prevent unauthorized data access",
      "Leave tracking, payroll processing, and reimbursement handling",
      "Axios + JWT-based API layer for secure authenticated requests",
      "Hosted on Hostinger and Railway with continuous uptime",
    ],
    impact: [
      { value: "90%", label: "reduction in manual HR tasks" },
      { value: "50%", label: "less redundant code via reusable components" },
      { value: "99.9%", label: "uptime post-launch" },
    ],
  },
  {
    code: "02",
    name: "CRM Platform",
    status: "Shipped",
    period: "Jan 2025 — Jun 2025",
    summary:
      "Customer and sales-side counterpart to the HRM — built for lead tracking and sales workflow automation.",
    tech: ["React", "Spring Boot", "MySQL", "Axios"],
    built: [
      "Customer management, lead tracking, and sales workflow modules",
      "Responsive UI components built for daily, high-frequency use",
      "REST API integration with secure authentication",
      "Requirements gathered directly from stakeholders and translated into features",
    ],
    impact: [
      { value: "30%", label: "faster development via shared components" },
      { value: "100%", label: "responsive across devices" },
    ],
  },
  {
    code: "03",
    name: "Recruitment Platform",
    status: "In development",
    period: "Jun 2025 — Present",
    summary:
      "The newest product in the suite — job postings, candidate management, and hiring workflows for HR teams.",
    tech: ["React", "Spring Boot", "MySQL", "Axios"],
    built: [
      "Job postings, candidate management, and interview scheduling",
      "Role-based access and approval workflows for recruiters, managers, and HR",
      "Dynamic dashboards and reporting for recruitment operations",
      "Backend APIs for candidate tracking and vacancy management",
    ],
    impact: [{ value: "Active", label: "in collaboration with HR teams" }],
  },
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <Reveal>
        <p className="eyebrow">featured work</p>
        <h2 className="section-heading">Three products, one suite.</h2>
        <p className="section-sub">
          HRLabs' internal product line — each one shipped in sequence as I
          took on more ownership.
        </p>
      </Reveal>

      <div className="projects__list">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.06} className="project-card">
            <div className="project-card__visual">
              <span className="project-card__visual-code">{project.code}</span>
              <div className="project-card__visual-window">
                <div className="project-card__visual-dots">
                  <span /><span /><span />
                </div>
                <div className="project-card__visual-name">{project.name}</div>
              </div>
            </div>

            <div className="project-card__content">
              <div className="project-card__head">
                <h3>{project.name}</h3>
                <span
                  className={`project-card__status ${
                    project.status === "Shipped" ? "is-shipped" : "is-active"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <span className="project-card__period">{project.period}</span>
              <p className="project-card__summary">{project.summary}</p>

              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project-card__details">
                <div className="project-card__built">
                  <h4>What I built</h4>
                  <ul>
                    {project.built.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-card__impact">
                  <h4>Impact</h4>
                  {project.impact.map((imp) => (
                    <div className="project-card__impact-row" key={imp.label}>
                      <span className="project-card__impact-value">{imp.value}</span>
                      <span className="project-card__impact-label">{imp.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
