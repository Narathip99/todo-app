import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import { ThemeContext } from "../context/themeContex";

export const AddTodo = () => {
  const { saveTodo } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({});

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveTodo = (e) => {
    e.preventDefault();
    saveTodo(formData);
    setFormData({});
  };

  return (
    <form
      onSubmit={(e) => handleSaveTodo(e, formData)}
      className="my-6 rounded-md shadow-lg"
    >
      <div className="relative">
        <input
          type="text"
          id="title"
          placeholder="Create a new todo..."
          onChange={handleForm}
          value={formData.title || ''}
          className={`
            ${theme === "light" 
              ? "bg-white placeholder-gray-400 text-gray-700 transition duration-300" 
              : "bg-gray-700 placeholder-gray-300 text-gray-100 transition duration-300"
            }
            text-2xl block w-10/12 p-4 outline-none rounded-md
          `}
        />
        <button 
          className={`
            ${theme === "light"
              ? "bg-blue-500 hover:bg-blue-700"
              : "bg-blue-700 hover:bg-blue-500"
            }
            absolute inset-y-0 right-0 px-8 md:px-12 text-white rounded-r-md
          `}
        >
          Add
        </button>
      </div>
    </form>

  );
};
