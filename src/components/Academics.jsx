import React from "react";
import AcademicsData from "./AcademicsData";
import Card from "./Card";
import { LuGraduationCap } from "react-icons/lu";

const Academics = () => {
  return (
    <section>
      <h2 className="flex justify-center items-center text-3xl mb-14 font-bold">
        Academics & Experience
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-stretch mb-8 ">
        <div className="w-full m-3 md:w-[33%] academics__timeline  p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg relative mr-10 flex flex-col justify-center items-stretch">
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
        <div className="w-full m-3 md:w-[33%] experience__timeline p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg relative">
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
    </section>
  );
};

export default Academics;
