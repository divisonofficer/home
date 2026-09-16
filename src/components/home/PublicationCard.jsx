import React, { useState } from "react";
import { SectionHead, AuthorList } from "../design/DesignSystem";

const LINK_META = {
  page: { label: "Project", icon: "fas fa-folder-open" },
  pdf: { label: "arXiv", icon: "far fa-file-alt" },
  github: { label: "Code", icon: "fab fa-github" },
};

const PublicationLinks = ({ value }) => {
  const links = ["page", "pdf", "github"].filter((key) => value[key]);
  if (!links.length) return null;

  return (
    <>
      {links.map((key) => (
        <a
          key={key}
          className="ds-chip"
          href={value[key]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={LINK_META[key].icon} />
          {LINK_META[key].label}
        </a>
      ))}
    </>
  );
};

const PublicationEntry = ({ value }) => {
  const { title, abstract, authors, thumbnail, year, page, pdf } = value;
  const [showAbstract, setShowAbstract] = useState(false);
  // A remotely hosted thumbnail can go away; drop the whole frame rather than
  // leaving a black box in the grid.
  const [thumbFailed, setThumbFailed] = useState(false);

  // The first available link is what the title and thumbnail point at.
  const primary = page || pdf;
  const showThumb = Boolean(thumbnail) && !thumbFailed;
  const image = (
    <img src={thumbnail} alt="" onError={() => setThumbFailed(true)} />
  );

  return (
    <article className={`ds-pub ${showThumb ? "" : "ds-pub--no-thumb"}`.trim()}>
      {showThumb &&
        (primary ? (
          <a
            className="ds-pub__thumb"
            href={primary}
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden="true"
            tabIndex={-1}
          >
            {image}
          </a>
        ) : (
          <div className="ds-pub__thumb">{image}</div>
        ))}

      <div className="ds-pub__body">
        <h3 className="ds-pub__title">
          {primary ? (
            <a href={primary} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>

        <AuthorList authors={authors} />

        <div className="ds-pub__meta">
          {year && <span className="ds-pub__venue">{year}</span>}
          <PublicationLinks value={value} />
        </div>

        {abstract && (
          <>
            <button
              type="button"
              className="ds-pub__abstract-toggle"
              aria-expanded={showAbstract}
              onClick={() => setShowAbstract((open) => !open)}
            >
              {showAbstract ? "− Hide abstract" : "+ Abstract"}
            </button>
            {showAbstract && <p className="ds-pub__abstract">{abstract}</p>}
          </>
        )}
      </div>
    </article>
  );
};

const Publications = ({ heading, eyebrow, publications }) => (
  <section id="publications" className="ds-section">
    <SectionHead eyebrow={eyebrow} title={heading} />
    {publications.map((publication, index) => (
      <PublicationEntry key={`publication-${index}`} value={publication} />
    ))}
  </section>
);

export default Publications;
