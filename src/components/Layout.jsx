import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import Logo from "../assets/shareknowledge.png";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-20 p-2">
        <div className="h-16 w-16">
          <img className="h-full w-full object-cover" src={Logo} alt="Logo" />
        </div>
      </header>

      <main className="flex flex-1">
        <aside className="bg-green-400 fixed top-[50%] translate-y-[-1/2] flex justify-center w-10 sm:w-20 ">
          <SideBar />
        </aside>

        <section className="w-full">
          <Outlet />
        </section>
      </main>

      <footer className="h-10 w-full flex items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
