import React from "react";
import { Eyebrow, Button } from "../design/DesignSystem";

// Hero: eyebrow, display headline with the crimson tagline clause, lede,
// two actions, and the portrait in a 4:5 rounded frame.
const MainBody = React.forwardRef(
  ({ eyebrow, name, tagline, message, icons, portrait, portraitAlt }, ref) => (
    <section id="home" className="ds-hero">
      <div className="ds-hero__copy">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

        <h1 className="ds-hero__title" ref={ref}>
          {tagline ? (
            <>
              {name}, <em>{tagline}</em>
            </>
          ) : (
            name
          )}
        </h1>

        <p className="ds-hero__lede">{message}</p>

        <div className="ds-hero__actions">
          {icons.map((icon, index) => (
            <Button
              key={icon.url}
              href={icon.url}
              variant={index === 0 ? "primary" : "secondary"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`My ${icon.label}`}
            >
              <i className={`fab ${icon.image}`} />
              {icon.label}
            </Button>
          ))}
        </div>
      </div>

      {portrait && (
        <div className="ds-hero__portrait">
          <img src={portrait} alt={portraitAlt} />
        </div>
      )}
    </section>
  )
);

export default MainBody;
