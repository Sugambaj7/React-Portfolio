import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import Logo from "../assets/shareknowledge.png";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="ml-4 mt-4">
        <h1>
          <img className="h-16 w-16" src={Logo} alt="logo" />
        </h1>
      </div>
      <div className="flex flex-row flex-grow justify-center items-center">
        <SideBar />
        <main className="flex justify-center w-full h-full  overflow-hidden">
          <Outlet />
        </main>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
