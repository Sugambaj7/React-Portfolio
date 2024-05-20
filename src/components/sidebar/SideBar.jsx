import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FiLayers } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { IoMdChatboxes } from "react-icons/io";
import { BsPersonCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function SideBar() {
  return (
    <aside className="ml-4 mt-1 mr-1">
      <nav className="nav mt-10">
        <ul className="text-3xl flex flex-col space-y-8">
          <li className="nav_links">
            <Link to="/">
              <IoHomeOutline />
            </Link>
          </li>
          <li className="nav_links">
            <Link to="/about">
              <BsPersonCheck />
            </Link>
          </li>
          <li className="nav_links">
            <Link to="/services">
              <IoBriefcaseOutline />
            </Link>
          </li>
          <li className="nav_links">
            <Link to="/academics">
              <LuGraduationCap />
            </Link>
          </li>
          <li className="nav_links">
            <Link to="/recentworks">
              <FiLayers />
            </Link>
          </li>
          <li className="nav_links">
            <Link to="/contact">
              <IoMdChatboxes />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
