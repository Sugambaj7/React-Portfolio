import React from "react";
import { AiTwotoneCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="bg-black flex justify-center mt-10">
      <div className="pt-2 pb-2">
        <p className="text-white flex flex-row">
          Copyright <AiTwotoneCopyrightCircle className="text-2xl" />
          {currentYear}
        </p>
      </div>
    </div>
  );
};

export default Footer;
