import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";
import "../assets/css/Toggle.css";

const Toggle = ({ handleChange, isChecked }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">
        <p className="text-xl md:text-2xl">
          {isDark ? "Dark Mode" : "Light Mode"}
        </p>
      </label>
    </div>
  );
};

export default Toggle;
