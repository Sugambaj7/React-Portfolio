import React from "react";
import firstservice from "../assets/web_development.png";
import secondservice from "../assets/video_editing.png";
import thirdservice from "../assets/ui_ux.png";
import "../assets/css/Services.css";
import { data } from "autoprefixer";

const services = [
  {
    id: 1,
    image: firstservice,
    title: "Web Development",
    description: "aa",
  },
  {
    id: 2,
    image: secondservice,
    title: "Video Editing",
    description: "dfsdfs",
  },
  {
    id: 3,
    image: thirdservice,
    title: "UI/UX Design",
    description: "dfsdf",
  },
];

const Services = () => {
  return (
    <section className="h-full w-full flex flex-col">
      <h2 className="text-3xl flex justify-center items-center mt-14 font-bold">
        Services
      </h2>
      <div className="flex flex-col flex-wrap ml-2 mr-2  md:flex-row justify-center items-center mt-12">
        {services.map(({ id, image, title, description }) => {
          return (
            <div
              className="services__card flex flex-col justify-center items-center bg-white ml-5 mt-3 p-5 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex-wrap"
              key={id}
            >
              <div className="h-40 w-80">
                <img
                  className="h-full w-full object-cover"
                  src={image}
                  alt=""
                />
              </div>
              <h3 className="text-xl mt-3">{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
