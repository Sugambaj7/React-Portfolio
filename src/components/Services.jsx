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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do e",
  },
  {
    id: 2,
    image: secondservice,
    title: "Video Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do e ",
  },
  {
    id: 3,
    image: thirdservice,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do e",
  },
];

const Services = () => {
  return (
    <div className="ml-12 mr-4 flex flex-col sm:ml-24">
      {/* full nai leko xa */}
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Services</h2>
      </div>

      <div className="mt-6 flex flex-wrap justify-center mb-20 md:mt-12 lg:mt-12">
        {services.map(({ id, image, title, description }) => {
          return (
            //each div
            <div
              className="services__card bg-white h-60 w-72 ml-2 flex flex-col flex-wrap justify-center items-center  mt-3 p-2 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]  sm:mt-6 sm:h-56 sm:w-72 md:h-72 md:w-96 md:mr-3 lg:h-96 lg:w-100 "
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
                <h3 className=" text-lg text-center mt-3  sm:text-xl  md:text-2xl lg:text-3xl">
                  {title}
                </h3>
                <p className="text-md mt-1 ml-1 mr-1 mb-1 sm:mt-3 sm:ml-1 sm:mr-1  md:mt-3 md:ml-5 md:mr-5 lg:text-xl">
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
