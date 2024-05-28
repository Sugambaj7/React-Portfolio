import React from "react";
import avatar from "../assets/me.jpg";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <div className="mt-16 ml-12 mr-2 mb-10 flex flex-col justify-center items-center sm:ml-24 sm:mr-10">
      <div className="w-full flex justify-center">
        <div className="w-24 h-24 rounded-full p-1 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] sm:w-28 sm:h-28 lg:w-36 lg:h-36">
          <img
            src={avatar}
            alt="myself"
            className="h-full w-full object-cover rounded-full "
          />
        </div>
      </div>
      <h1 className="heading ibm-plex-mono-bold text-center text-2xl font-semibold mb-1 mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
        Sugam Bajracharya
      </h1>
      <p className="my-text ibm-plex-sans-regular mb-3 text-xl text-center md:text-2xl mt-1 lg:3xl lg:mt-2">
        I'm a Student
      </p>
      <div className="mb-6 md:mt-2 lg:mt-3">
        <ul className="flex flex-row text-xl space-x-2 md:text-2xl lg:space-x-3 lg:text-3xl">
          <li>
            <a href="https://www.instagram.com/sugam_bajracharya/">
              <IoLogoInstagram className="icons" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/SugamBajra">
              <FaFacebook className="icons" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sugam-bajracharya-227b70210">
              <FaLinkedin className="icons" />
            </a>
          </li>
          <li>
            <a href="https://x.com/sugambajra44675">
              <FaXTwitter className="icons" />
            </a>
          </li>
        </ul>
      </div>
      <button className="my-buttons py-1 px-3 rounded text-white">
        <Link to="/contact">
          <p className="ibm-plex-sans-regular">Hire Me</p>
        </Link>
      </button>
    </div>
  );
};

export default Home;
