import React from "react";
import Reveal from "../shared/Reveal";
import MagneticButton from "../shared/MagneticButton";
import "./Resume.scss";

const FILE_ID = "1kUPlanKhbF1Rw8EnjkM08ccCnKRQjmG0";
const VIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/view?usp=sharing`;
const PREVIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/preview`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <Reveal>
        <p className="eyebrow">resume</p>
        <h2 className="section-heading">Want the one-pager?</h2>
        <p className="section-sub">
          Everything above, condensed — preview it inline or take a copy with
          you.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="resume__panel">
        <div className="resume__preview">
          <iframe
            src={PREVIEW_URL}
            title="Mridul Pramod — Resume preview"
            loading="lazy"
            allow="autoplay"
          />
        </div>
        <div className="resume__actions">
          <MagneticButton variant="primary" href={DOWNLOAD_URL}>
            Download PDF
          </MagneticButton>
          <MagneticButton variant="secondary" href={VIEW_URL}>
            Open in Drive ↗
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
};

export default Resume;
