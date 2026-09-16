import React from "react";
import { Eyebrow, Button } from "../design/DesignSystem";

// The one dark panel on the page — it closes the document.
const GetInTouch = ({ heading, message, emails }) => (
  <section id="contact" className="ds-section">
    <div className="ds-panel">
      <Eyebrow variant="onPanel">{heading}</Eyebrow>
      <p className="ds-panel__message">{message}</p>
      <div className="ds-panel__actions">
        {emails.map((email) => (
          <Button key={email} href={`mailto:${email}`} variant="onPanel">
            {email}
          </Button>
        ))}
      </div>
    </div>
  </section>
);

export default GetInTouch;
