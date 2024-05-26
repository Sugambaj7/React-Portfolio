import React from "react";
import { FiLink } from "react-icons/fi";
import "../assets/css/RecentWorks.css";

const WorkCard = (props) => {
  return (
    <div className="work__card flex flex-col items-center bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg w-[60%] p-1 relative sm:w-[40%]">
      <div className="work__thumbnail">
        <div className="h-28 w-28 sm:h-40 sm:w-40">
          <img
            className="w-full h-full object-cover"
            src={props.image}
            alt="work"
          />
        </div>
        <div className="work__mask rounded-lg"></div>
      </div>

      <h3 className="work__category rounded-b-2xl ">{props.category}</h3>
      <p className="work__title text-center pl-2 pr-2 sm:text-lg sm:pl-3 sm:pr-3 sm:top-12">{props.title}</p>
      <a className="work__button flex justify-center items-center text-md sm:h-8 sm:w-8 sm:text-xl" href="#">
        <FiLink />
      </a>
    </div>
  );
};

export default WorkCard;
