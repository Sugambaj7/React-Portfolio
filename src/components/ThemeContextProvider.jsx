import React, { createContext, useState } from "react";
import useLocalStorage from "use-local-storage";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
