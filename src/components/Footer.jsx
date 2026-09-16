import React from "react";
import { mainBody } from "../editable-stuff/config.js";

const Footer = ({ children }) => {
  const year = new Date().getFullYear();
  const name = `${mainBody.firstName} ${mainBody.lastName}`;

  return (
    <>
      {children}
      <footer className="ds-footer">
        <div className="ds-footer__inner">
          <p className="ds-footer__copy">
            Copyright © {year} {name}. All rights reserved.
          </p>
          <div className="ds-footer__links">
            {mainBody.icons.map((icon) => (
              <a
                key={icon.url}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
