import React from "react";
import { SectionHead, Button } from "../design/DesignSystem";

const AboutMe = ({ heading, eyebrow, message, resume }) => (
  <section id="about" className="ds-section">
    <SectionHead eyebrow={eyebrow} title={heading} />
    <div className="ds-prose">
      <p>{message}</p>
    </div>
    {resume && (
      <div className="ds-actions">
        <Button
          href={resume}
          variant="secondary"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Resume/CV"
        >
          <i className="far fa-file-alt" />
          Resume
        </Button>
      </div>
    )}
  </section>
);

export default AboutMe;
