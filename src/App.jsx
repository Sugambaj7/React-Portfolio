import React from "react";
import SideBar from "./components/sidebar/SideBar";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Academics from "./components/Academics";
import RecentWorks from "./components/RecentWorks";
import Contact from "./components/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import ThemeContextProvider from "./components/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/recentworks" element={<RecentWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
