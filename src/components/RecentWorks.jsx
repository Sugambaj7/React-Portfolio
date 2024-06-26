import React, { useState } from "react";
import RecentWorksDatas from "./RecentWorksDatas";
import WorkCard from "./WorkCard";
import "../assets/css/RecentWorks.css";

const RecentWorks = () => {
  const [works, setWorks] = useState(RecentWorksDatas);

  const filterWork = (category) => {
    const allClickedCategoryRecentWorks = RecentWorksDatas.filter((datas) => {
      return datas.category === category;
    });

    setWorks(allClickedCategoryRecentWorks);
  };
  return (
    <div className="ml-12 mr-2 mb-8 flex flex-col sm:ml-24 sm:mr-5">
      <h3 className="heading mt-6 ibm-plex-mono-bold text-2xl font-bold w-full text-center md:text-3xl lg:text-4xl">
        Recent Works
      </h3>
      <div className="work__filters mt-5 mr-2 flex flex-wrap space-x-4 justify-center">
        <span
          className="work_items text-md md:text-lg lg:text-xl"
          onClick={() => setWorks(RecentWorksDatas)}
        >
          Everything
        </span>
        <span
          className="work_items text-md md:text-lg lg:text-xl"
          onClick={() => filterWork("Design")}
        >
          Design
        </span>
        <span
          className="work_items text-md md:text-lg lg:text-xl"
          onClick={() => filterWork("Art")}
        >
          Art
        </span>
        <span
          className="work_items text-md md:text-lg lg:text-xl"
          onClick={() => filterWork("Creative")}
        >
          Creative
        </span>
        <span
          className="work_items text-md md:text-lg lg:text-xl"
          onClick={() => filterWork("Branding")}
        >
          Branding
        </span>
      </div>
      <div className="myworks flex flex-row flex-wrap gap-2 justify-center mt-12">
        {works.map((workdata, id) => {
          if (workdata.category !== "") {
            return (
              //each workcard
              <WorkCard
                key={id}
                image={workdata.image}
                title={workdata.title}
                category={workdata.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default RecentWorks;
