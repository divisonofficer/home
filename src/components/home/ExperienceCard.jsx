import React from "react";

const ExperienceCard = ({ data }) => (
  <div className="ds-card">
    <div className="ds-card__logo">
      <img src={data.companylogo} alt={data.company || ""} />
    </div>
    <div>
      <p className="ds-card__role">{data.role}</p>
      <p className="ds-card__date">{data.date}</p>
    </div>
  </div>
);

export default ExperienceCard;
