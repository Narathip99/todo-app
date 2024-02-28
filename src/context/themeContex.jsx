import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // Define state
  const [theme, setTheme] = useState(() => {
    // Detect saved theme
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  // Detect and set lacolStorage to defult
  useEffect(() => {
    // set theme changed in local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;