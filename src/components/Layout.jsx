import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import Logo from "../assets/shareknowledge.png";
import Logo2 from "../assets/mind-share.png";
import Footer from "./footer/Footer";
import Toggle from "./Toggle";
import { ThemeContext } from "./ThemeContextProvider";

const Layout = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <div
      className="overall-content flex flex-col min-h-screen"
      data-theme={isDark ? "dark" : "light"}
    >
      <header className="flex items-center h-20 p-2">
        <div className="h-16 w-16">
          <img
            className="h-full w-full object-cover"
            src={isDark ? Logo2 : Logo}
            alt="Logo"
          />
        </div>
        <div className="flex h-full flex-grow justify-end relative">
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
        </div>
      </header>

      <main className="flex flex-1">
        <aside className="fixed top-[50%] translate-y-[-1/2] flex justify-center w-10 sm:w-20">
          <SideBar />
        </aside>

        <section className="w-full">
          <Outlet />
        </section>
      </main>

      <footer className="my-footer h-10 w-full flex justify-center lg:h-11">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
