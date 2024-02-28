import { useContext } from "react";
import { ThemeContext } from "../context/themeContex";

// Icons
import { BsSun, BsFillMoonFill } from "react-icons/bs";

export const ThemeChange = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" 
          ? <BsFillMoonFill className="text-2xl" /> 
          : <BsSun className="text-3xl text-white" />}
      </button>
    </div>
  );
};
