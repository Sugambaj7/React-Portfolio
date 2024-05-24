import React from "react";
import "../assets/css/Card.css";

const Card = (props) => {
  return (
    <div className="timeline_item relative pb-7 pl-8 leading-7">
      <div className="flex flex-row">
        <span className="timeline-icon text-2xl sm:text-4xl">{props.icon}</span>
        <span className="timeline__date text-md sm:text-xl">{props.year}</span>
      </div>
      <h3 className="timeline__title font-bold text-lg sm:text-xl">
        {props.title}
      </h3>
      <p className="timeline__desc mt-2 sm:text-lg">{props.description}</p>
    </div>
  );
};

export default Card;
