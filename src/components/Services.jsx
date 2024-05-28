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
    description:
      "'Web Development has always been a subject of interest to me.'",
  },
  {
    id: 2,
    image: secondservice,
    title: "Video Editing",
    description:
      "'Video Editing indeed transform raw footage into polished professional videos.'",
  },
  {
    id: 3,
    image: thirdservice,
    title: "UI/UX Design",
    description:
      "Creating inituitive and engaging user experiences is indeed everyone's priotity.",
  },
];

const Services = () => {
  return (
    <div className="ml-12 mr-4 flex flex-col sm:ml-24">
      {/* full nai leko xa */}
      <div className="flex justify-center">
        <h2 className="heading ibm-plex-mono-bold text-2xl font-bold md:text-3xl lg:text-4xl">
          Services
        </h2>
      </div>

      <div className="mt-6 flex flex-wrap justify-center mb-20 md:mt-12 lg:mt-12">
        {services.map(({ id, image, title, description }) => {
          return (
            //each div
            <div
              className="services__card w-[80%] ml-2 flex flex-col flex-wrap justify-center items-center  mt-3 pl-2 pr-2 pt-2 pb-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]  sm:mt-6 sm:w-[40%] md:w-[40%] md:mr-3 lg:w-[30%] "
              key={id}
            >
              <div className="h-20 w-40 flex flex-1 sm:h-20 sm:w-40 md:h-36 md:w-48 lg:h-52 lg:w-60 ">
                <img
                  className="h-full w-full object-cover"
                  src={image}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col w-full">
                <h3 className="title ibm-plex-sans-regular text-lg text-center mt-3  sm:text-xl  md:text-2xl lg:text-3xl">
                  {title}
                </h3>
                <p className="description ibm-plex-sans-regular text-center px-2 text-md mt-0.5 ml-1 mr-1 mb-1 sm:mt-2 sm:ml-1 sm:mr-1  md:mt-3 md:ml-5 md:mr-5 lg:text-xl">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
