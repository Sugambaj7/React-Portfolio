import React from "react";
import AcademicsData from "./AcademicsData";
import Card from "./Card";
import { LuGraduationCap } from "react-icons/lu";

const Academics = () => {
  return (
    <div className="ml-12 mr-2 flex flex-col sm:ml-24">
      <h2 className="text-center text-3xl font-bold mb-8 lg:text-4xl">
        Academics & Experience
      </h2>

      <div className="flex flex-col ml-6 mr-6 md:flex-row ">
        <div className="academics__timeline shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg relative flex flex-col pl-6 pr-8 sm:pl-20 md:flex-1 md:mt-4 md:mb-10">
          {AcademicsData.map((list, id) => {
            if (list.category == "Academics") {
              return (
                <Card
                  key={id}
                  category={list.category}
                  icon={list.icon}
                  year={list.year}
                  title={list.title}
                  description={list.description}
                />
              );
            }
          })}
        </div>
        <div className="experience__timeline mt-4 mb-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg relative flex flex-col pl-6 pr-8 sm:pl-20 md:flex-1 md:ml-4">
          {AcademicsData.map((list, id) => {
            if (list.category == "Experience") {
              return (
                <Card
                  key={id}
                  category={list.category}
                  icon={list.icon}
                  year={list.year}
                  title={list.title}
                  description={list.description}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Academics;
