import React from "react";
import { SectionHead, Eyebrow, Entry } from "../design/DesignSystem";

// Presentations, teaching and service read as one record, set in three
// columns rather than three separate full-width sections.
const AcademicRecord = ({ heading, eyebrow, columns }) => (
  <section id="record" className="ds-section">
    <SectionHead eyebrow={eyebrow} title={heading} />

    <div className="ds-record">
      {columns.map((column) => (
        <div className="ds-record__col" key={column.heading}>
          <Eyebrow variant="plain">{column.heading}</Eyebrow>
          <div className="ds-record__list">
            {column.data.map((item, index) => (
              <Entry
                key={`${item.title}-${index}`}
                title={item.title}
                // A short description belongs on the accent line beside the
                // venue; a full sentence gets its own muted line below.
                meta={
                  column.combineMeta && item.description
                    ? `${item.subtitle} · ${item.description}`
                    : item.subtitle
                }
                note={column.combineMeta ? undefined : item.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AcademicRecord;
