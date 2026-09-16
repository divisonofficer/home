import React from "react";
import { SectionHead, Entry } from "../design/DesignSystem";

// Two shapes share this data: the education timeline (period in the left
// column) and the honors grid (two columns of title / year / awarding body).
const Achievements = ({ achievements, sectionId, variant = "grid" }) => {
  const { heading, eyebrow, data } = achievements;

  return (
    <section id={sectionId} className="ds-section">
      <SectionHead eyebrow={eyebrow} title={heading} />

      {variant === "timeline" ? (
        <div className="ds-timeline">
          {data.map((item, index) => (
            <div className="ds-timeline__row" key={`${item.title}-${index}`}>
              <span className="ds-timeline__when">{item.subtitle}</span>
              <div>
                <p className="ds-timeline__title">{item.title}</p>
                {item.description && (
                  <p className="ds-timeline__note">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="ds-honors">
          {data.map((item, index) => (
            <Entry
              key={`${item.title}-${index}`}
              title={item.title}
              meta={item.subtitle}
              note={item.description}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Achievements;
