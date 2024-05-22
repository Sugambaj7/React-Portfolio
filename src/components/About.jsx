import React from "react";
import myPic from "../assets/me.jpg";

const About = () => {
  return (
    <section className="m-3 w-full flex flex-col  items-center">
      <h2 className="text-2xl font-bold">About me</h2>
      <div className="flex flex-row w-full h-full mt-12">
        <div className="flex justify-center items-center w-20 h-20 rounded-full flex-end">
          <img className="w-full h-full object-cover rounded-full" src={myPic} alt="" />
        </div>
        <div className="grow w-full bg-yellow-300">desc</div>
      </div>
    </section>
  );
};

export default About;
