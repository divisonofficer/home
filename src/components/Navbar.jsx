import React from "react";
import {
  mainBody,
  about,
  publications,
  experiences,
  education,
  getInTouch,
} from "../editable-stuff/config.js";

// Sticky hairline header with pill navigation. Collapses to a disclosure menu
// below 900px (see .ds-nav in scss/_site.scss).
const Navigation = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const base = process.env.PUBLIC_URL + "/";

  const links = [
    about.show && { href: `${base}#about`, label: "About" },
    publications.show && { href: `${base}#publications`, label: "Publications" },
    education.show && { href: `${base}#education`, label: "Education" },
    experiences.show && { href: `${base}#experience`, label: "Experience" },
    about.resume && {
      href: about.resume,
      label: "Resume",
      target: "_blank",
      rel: "noreferrer noopener",
    },
    getInTouch.show && { href: `${base}#contact`, label: "Contact" },
  ].filter(Boolean);

  return (
    <header className="ds-header">
      <div className="ds-header__inner">
        <a className="ds-brand" href={`${base}#home`} ref={ref}>
          {`<${mainBody.firstName} />`}
        </a>

        <button
          type="button"
          className="ds-nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <i className={`fas ${open ? "fa-times" : "fa-bars"}`} />
        </button>

        <nav
          aria-label="Main navigation"
          className={`ds-nav ${open ? "ds-nav--open" : ""}`.trim()}
        >
          {links.map((link) => (
            <a
              key={link.label}
              className="ds-nav__link"
              href={link.href}
              target={link.target}
              rel={link.rel}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
});

export default Navigation;
