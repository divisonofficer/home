import React from "react";

// Shared primitives from the POSTECH CI design canvas. Presentation only —
// every one of these reads its content from editable-stuff/config.js.

export const Eyebrow = ({ children, variant = "accent", className = "" }) => {
  const tone =
    variant === "onPanel"
      ? "ds-label--on-panel"
      : variant === "plain"
      ? "ds-label--plain"
      : "";
  return <span className={`ds-label ${tone} ${className}`.trim()}>{children}</span>;
};

export const SectionHead = ({ eyebrow, title }) => (
  <header className="ds-sectionhead">
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
  </header>
);

export const Button = ({ href, variant = "secondary", children, ...rest }) => {
  const tone =
    variant === "primary"
      ? "ds-btn--primary"
      : variant === "onPanel"
      ? "ds-btn--on-panel"
      : "ds-btn--secondary";
  return (
    <a className={`ds-btn ${tone}`} href={href} {...rest}>
      {children}
    </a>
  );
};

// Co-first-author asterisks stay attached to the name; the group member is set
// in bold. The dataset writes the name a few different ways ("Jin-Nyeong Kim"),
// so match loosely rather than on an exact string.
const GROUP_MEMBER = /^jin-?nyeong\s+kim$/i;

export const AuthorList = ({ authors }) => {
  if (!authors || !authors.length) return null;

  return (
    <p className="ds-authors">
      {authors.map((author, index) => {
        const marker = author.endsWith("*") ? "*" : "";
        const name = marker ? author.slice(0, -1).trim() : author;
        const isMe = GROUP_MEMBER.test(name);

        return (
          <React.Fragment key={`${author}-${index}`}>
            {index > 0 && ", "}
            <span className={isMe ? "ds-authors__me" : undefined}>{name}</span>
            {marker && <sup className="ds-authors__marker">{marker}</sup>}
          </React.Fragment>
        );
      })}
    </p>
  );
};

// A title / meta / note triplet — the shape every list entry in the academic
// record and honors sections shares.
export const Entry = ({ title, meta, note }) => (
  <div className="ds-entry">
    <p className="ds-entry__title">{title}</p>
    {meta && <p className="ds-entry__meta">{meta}</p>}
    {note && <p className="ds-entry__note">{note}</p>}
  </div>
);
