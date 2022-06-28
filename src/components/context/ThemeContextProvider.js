import React, { createContext, useContext, useState } from "react";

export const themeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("Dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "Light" ? "Dark" : "Light"));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export function useTheme() {
  return useContext(themeContext);
}
