import React from "react";
import ExperienceCard from "./ExperienceCard";
import { SectionHead } from "../design/DesignSystem";

const Experience = ({ experiences }) => (
  <section id="experience" className="ds-section">
    <SectionHead eyebrow={experiences.eyebrow} title={experiences.heading} />
    <div className="ds-cards">
      {experiences.data.map((data, index) => (
        <ExperienceCard key={index} data={data} />
      ))}
    </div>
  </section>
);

export default Experience;
