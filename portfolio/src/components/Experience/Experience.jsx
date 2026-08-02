import React from "react";
import { FaArrowUp, FaUsers, FaBolt, FaLayerGroup, FaTachometerAlt, FaBoxOpen } from "react-icons/fa";
import Reveal, { StaggerGroup, StaggerItem } from "../shared/Reveal";
import "./Experience.scss";

const ACHIEVEMENTS = [
  {
    icon: <FaArrowUp />,
    stat: "3 months",
    title: "Promoted ahead of schedule",
    text: "Went from Frontend Developer Intern to Junior Frontend Developer in three months, on the strength of delivery.",
  },
  {
    icon: <FaUsers />,
    stat: "4 engineers",
    title: "Took ownership of a team",
    text: "Lead task allocation and delivery for a 4-person developer team across HRLabs' product suite.",
  },
  {
    icon: <FaBolt />,
    stat: "90%",
    title: "Automated HR operations",
    text: "Built leave tracking, payroll, and reimbursement handling that cut manual HR work by 90%.",
  },
  {
    icon: <FaLayerGroup />,
    stat: "50% less code",
    title: "Standardized the UI layer",
    text: "Drove component reuse across the HRM platform, reducing redundant code and speeding up new feature delivery by 30%.",
  },
  {
    icon: <FaTachometerAlt />,
    stat: "99.9% uptime",
    title: "Owned deployment",
    text: "Hosted and maintained production apps on Hostinger and Railway with consistent uptime for paying clients.",
  },
  {
    icon: <FaBoxOpen />,
    stat: "3 products",
    title: "Shipped a full product suite",
    text: "HRM, CRM, and a recruitment platform — each handed off to real HR teams to run their operations on.",
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <Reveal>
        <p className="eyebrow">experience</p>
        <h2 className="section-heading">Software Developer, Frontend Focus</h2>
        <p className="section-sub">
          HRLabs — Jun 2024 to Present. Six achievements that tell the story
          better than a job description would.
        </p>
      </Reveal>

      <StaggerGroup className="experience__grid">
        {ACHIEVEMENTS.map((item) => (
          <StaggerItem key={item.title} className="experience__card">
            <div className="experience__card-top">
              <span className="experience__card-icon">{item.icon}</span>
              <span className="experience__card-stat">{item.stat}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
};

export default Experience;
