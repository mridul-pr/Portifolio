import React from "react";
import Reveal, { StaggerGroup, StaggerItem } from "../shared/Reveal";
import "./CareerJourney.scss";

const LOG = [
  {
    tag: "v1.0",
    date: "Jun 2024",
    title: "joined HRLabs as Frontend Developer Intern",
    detail: "Started contributing to the HRM codebase alongside the founding engineering team.",
  },
  {
    tag: "v1.1",
    date: "Sep 2024",
    title: "promoted to Junior Frontend Developer",
    detail: "Promoted within 3 months on the strength of delivery and code quality.",
  },
  {
    tag: "v1.2",
    date: "Dec 2024",
    title: "shipped HRM software — Phase 1",
    detail: "Role-based access, payroll, and leave tracking. 100% responsive, cut manual HR work by 90%.",
  },
  {
    tag: "v2.0",
    date: "Jan 2025",
    title: "started leading a 4-person dev team",
    detail: "Took ownership of task allocation and delivery while gathering requirements directly with the CEO.",
  },
  {
    tag: "v2.1",
    date: "Jun 2025",
    title: "shipped CRM platform",
    detail: "Lead tracking, sales workflow automation, and secure Axios + JWT-based API integration.",
  },
  {
    tag: "v3.0",
    date: "Present",
    title: "building the recruitment platform",
    detail: "Job postings, interview scheduling, and role-based approval workflows — in active development.",
    current: true,
  },
];

const CareerJourney = () => {
  return (
    <section className="journey section" id="journey">
      <Reveal>
        <p className="eyebrow">career journey</p>
        <h2 className="section-heading">A log of how I got here.</h2>
        <p className="section-sub">
          No embellishment — this is the real sequence, from intern to
          leading the team that builds HRLabs' core products.
        </p>
      </Reveal>

      <div className="journey__log">
        <div className="journey__log-header">
          <span>$ git log --oneline --reverse career</span>
        </div>

        <StaggerGroup className="journey__list" staggerDelay={0.1}>
          {LOG.map((entry) => (
            <StaggerItem key={entry.tag} className="journey__entry">
              <div className="journey__rail">
                <span className={`journey__dot ${entry.current ? "is-current" : ""}`} />
                <span className="journey__line" />
              </div>
              <div className="journey__body">
                <div className="journey__meta">
                  <span className="journey__tag">{entry.tag}</span>
                  <span className="journey__date">{entry.date}</span>
                  {entry.current && <span className="journey__badge">current</span>}
                </div>
                <h3 className="journey__title">{entry.title}</h3>
                <p className="journey__detail">{entry.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default CareerJourney;
