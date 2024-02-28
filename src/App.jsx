import { useContext } from "react";

// Components
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./containers/Todos";
import { ThemeChange } from "./components/ThemeChange";

// Context Provider
import TodoContextProvider from "./context/todoContext";
import ThemeContextProvider, { ThemeContext } from "./context/themeContex";

function App() {
  return (
    <ThemeContextProvider>
      <TodoContextProvider>
        <AppContent />
      </TodoContextProvider>
    </ThemeContextProvider>
  );

  function AppContent() {
    const { theme } = useContext(ThemeContext);

    return (
      <div className={`min-h-screen ${theme === "light" ? "bg-gray-200 transition duration-300" : "bg-gray-800 transition duration-300"}`}>
        <div className="xl:max-w-3xl lg:max-w-2xl md:max-w-xl mx-auto lg:py-20 md:py-10 py-6">
          <div className="flex justify-between items-center md:mx-0 mx-2">
            <div>
              <h1 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                  Todo App
                </span>
              </h1>
            </div>
            <ThemeChange/>
          </div>
          <AddTodo />
          <Todos />
        </div>
      </div>
    );
  }
}

export default App;
