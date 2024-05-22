import React from "react";
import firstservice from "../assets/web_development.png";
import secondservice from "../assets/video_editing.png";
import thirdservice from "../assets/ui_ux.png";
import "../assets/css/Services.css";

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
    <div className="ml-10 sm:ml-20 md:ml-20 lg:ml-20 flex flex-col">
      {/* full nai leko xa */}
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold">Services</h2>
      </div>

      <div className="w-full flex flex-wrap mb-20 pb-4 sm:flex-row justify-center items-center md:flex-row   lg:flex lg:flex-row ">
        {services.map(({ id, image, title, description }) => {
          return (
            //each div
            <div
              className="services__card bg-white flex- h-30 w-50 ml-2 flex flex-col flex-wrap justify-center items-center  mt-3 p-2 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]  sm:h-40 sm:w-60 md:h-40 md:w-50 lg:h-72 lg:w-80 lg:mt-3"
              key={id}
            >
              <div className="h-20 w-40 lg:h-40 lg:w-72 ">
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
    </div>
  );
};

export default Services;
