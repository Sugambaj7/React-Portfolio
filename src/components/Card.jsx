import React from "react";
import "../assets/css/Card.css";

const Card = (props) => {
  return (
    <div className="timeline_item relative pb-14 pl-8 leading-8">
      <div className="flex flex-row">
        <span className="timeline-icon text-2xl">{props.icon}</span>
        <span className="timeline__date">{props.year}</span>
      </div>
      <h3 className="timeline__title font-bold text-lg">{props.title}</h3>
      <p className="timeline__desc">{props.description}</p>
    </div>
  );
};

export default Card;
