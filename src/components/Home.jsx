import React from "react";
import avatar from "../assets/me.jpg";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <div className="mt-28 ">
      <div className="flex flex-col justify-center items-center">
        <div>
          <div className="w-24 h-24 rounded-full p-1 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
            <img
              src={avatar}
              alt="myself"
              className="h-full w-full object-cover rounded-full "
            />
          </div>
        </div>
        <h1 className="mt-4 text-2xl font-semibold">Sugam Bajracharya</h1>
        <p className="mb-2 text-md">I'm a Student</p>
        <div className="mb-6">
          <ul className="flex flex-row space-x-4 text-xl">
            <li>
              <a href="https://www.instagram.com/sugam_bajracharya/">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/SugamBajra">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sugam-bajracharya-227b70210">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
        <button className="bg-black py-1 px-3 rounded text-white">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Home;
