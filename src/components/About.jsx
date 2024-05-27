import React from "react";
import myPic from "../assets/me.jpg";

const About = () => {
  return (
    <div className="ml-12 mr-2 flex flex-col sm:ml-24 sm:mr-10 justify-center items-center">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">About me</h2>
      </div>

      <div className="flex flex-col mt-10 ml-7 mr-7 mb-8 sm:flex-row sm:mt-2 sm:mr-2 sm:ml-1 lg:flex-col lg:items-center lg:w-[70%] lg:mt-16">
        <div className="w-full flex justify-center sm:items-center sm:w-[50%]">
          <div className="w-24 h-24 rounded-full md:w-28 md:h-28 lg:w-36 lg:h-36">
            <img
              className="w-full h-full object-cover rounded-full"
              src={myPic}
              alt=""
            />
          </div>
        </div>

        <div className="mt-10 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded sm:ml-5 md:flex flex-row">
          <div className="m-4  md:w-[30%] md:flex flex-1 md:mt-11 lg:m-12">
            <p className="text-lg text-center sm:text-xl lg:text-2xl">
              "I am Sugam Bajracharya, a web developer from Kathmandu, Nepal. I
              am currently a Student and looking for opportunities for
              professional development."
            </p>
          </div>
          <div className="about___skills flex flex-col items-center mx-4 mb-9 mt-8 px-4 py-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded md:flex-1 lg:px-6 lg:py-6">
            <div className="w-full mb-2">
              <h3 className="font-bold text-xl mb-4 sm:text-2xl lg:text-3xl lg:mb-6">Skills</h3>
            </div>
            <div className="skills__data w-full mb-2 lg:mb-4">
              <div className=" skills__title flex justify-between md:mb-2 lg:mb-4">
                <h3 className="skills__name text-lg sm:text-xl lg:text-2xl">
                  Web Development
                </h3>
                <span className="skills__number leading-8 text-lg sm:text-xl lg:text-2xl">
                  90%
                </span>
              </div>
              <div className="skills__bar h-2 bg-custom-white rounded md:h-3 md:rounded-lg">
                <span className="skills__percentage h-2 rounded block bg-custom-blue w-[90%] lg:h-3 lg:rounded-lg"></span>
              </div>
            </div>

            <div className="skills__data w-full mb-2 lg:mb-4">
              <div className="skills__title flex justify-between md:mb-2 lg:mb-4">
                <h3 className="skills__name text-lg sm:text-xl lg:text-2xl">
                  Video Editing
                </h3>
                <span className="skills__number leading-8 text-lg sm:text-xl lg:text-2xl">
                  30%
                </span>
              </div>
              <div className="skills__bar h-2 bg-custom-white rounded lg:h-3 lg:rounded-lg">
                <span className="skills__percentage h-2 rounded block bg-custom-red w-[30%] lg:h-3 lg:rounded-lg"></span>
              </div>
            </div>

            <div className="skills__data w-full mb-2">
              <div className="skills__title flex justify-between md:mb-2 lg:mb-4">
                <h3 className="skills__name text-lg sm:text-xl lg:text-2xl">
                  UI/UX Design
                </h3>
                <span className="skills__number leading-8 text-lg sm:text-xl lg:text-2xl">
                  50%
                </span>
              </div>
              <div className="skills__bar h-2 bg-custom-white rounded lg:h-3 lg:rounded-lg">
                <span className="skills__percentage h-2 rounded block bg-custom-yellow w-[50%] lg:h-3 lg:rounded-lg"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
