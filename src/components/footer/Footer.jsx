import React from "react";
import { PiCopyright } from "react-icons/pi";
import "../../assets/css/Footer.css";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="flex justify-center pt-2 pb-2">
      <p className=" footer-text ibm-plex-sans-regulartext-white lg:text-lg">
        Copyright
      </p>
      <p className="ibm-plex-sans-regular footer-icon mx-1 mt-1.5 lg:text-lg">
        <PiCopyright />
      </p>
      <p className="footer-text ibm-plex-sans-regular lg:text-lg">
        {currentYear}
      </p>
    </div>
  );
};

export default Footer;
