import React from "react";
import myPic from "../assets/me.jpg";

const About = () => {
  return (
    <div className="ml-10 flex flex-col ">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold">About me</h2>
      </div>

      <div className="flex flex-col mt-10 ml-7 mr-7 mb-8">
        <div className="w-full flex justify-center">
          <div className="w-24 h-24 rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src={myPic}
              alt=""
            />
          </div>
        </div>

        <div className="mt-10 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded ">
          <div className="m-4">
            <p>
              I am Sugam Bajracharya, a web developer from Kathmandu, Nepal. I
              am currently Student and looking for opportunities for
              professional development.
            </p>
          </div>
          <div className="about___skills flex flex-col items-center mx-4 mb-9 mt-8 px-2 py-1 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded">
            <div className="w-full mb-2">
              <h3 className="text-xl font-bold">Skills</h3>
            </div>
            <div className="skills__data w-full mb-2">
              <div className=" skills__title flex justify-between">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number leading-8">90%</span>
              </div>
              <div className="skills__bar h-2 bg-custom-white rounded">
                <span className="skills__percentage h-2 rounded block bg-custom-blue w-[90%]"></span>
              </div>
            </div>

            <div className="skills__data w-full mb-2">
              <div className="skills__title flex justify-between">
                <h3 className="skills__name">Video Editing</h3>
                <span className="skills__number leading-8">30%</span>
              </div>
              <div className="skills__bar h-2 bg-custom-white rounded">
                <span className="skills__percentage h-2 rounded block bg-custom-red w-[30%]"></span>
              </div>
            </div>

            <div className="skills__data w-full mb-2">
              <div className="skills__title flex justify-between">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number leading-8">50%</span>
              </div>
              <div className="skills__bar h-2 bg-custom-white rounded">
                <span className="skills__percentage h-2 rounded block bg-custom-yellow w-[50%]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
