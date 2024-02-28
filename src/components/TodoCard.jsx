import React from "react";
// Icons
import { BsTrash3, BsTrash3Fill  } from "react-icons/bs";


export const TodoCard = ({ todo, completedTodo, deleteTodo, theme }) => {
  // Completed Todo
  const completedTodoStatusTheme = theme === "light" 
    ? "text-gray-500 transition duration-300" 
    : "text-gray-300 transition duration-300";
  const completedTodoStatus = todo.status 
    ? `line-through ${completedTodoStatusTheme}` 
    : `${theme === "light" ? "text-black" : "text-white"} transition duration-300`;

  const titleSliceDesktop = () => {
    if (todo.title.length > 23) {
      return todo.title.slice(0, 23) + "...";
    } else {
      return todo.title;
    }
  }
  const titleSliceTablet = () => {
    if (todo.title.length > 18) {
      return todo.title.slice(0, 18) + "...";
    } else {
      return todo.title;
    }
  }
  const titleSliceMobile = () => {
    if (todo.title.length > 12) {
      return todo.title.slice(0, 12) + "...";
    } else {
      return todo.title;
    }
  }

  return (
    <>
      <hr className={theme === "light" ? "border-t-2 transition duration-300" : "border-t-2 border-gray-800 transition duration-300"} />
      <div className="flex justify-between items-center p-2 md:p-6">
        <div className="flex items-center">
          {/* CheckBox */}
          <div className="inline-flex items-center">
            <label
              className="relative flexitems-center p-3 rounded-full cursor-pointer"
              htmlFor={`customStyle${todo.id}`}
            >
              <input
                type="checkbox"
                id={`customStyle${todo.id}`}
                checked={todo.status}
                onChange={() => completedTodo(todo.id)}
                className={`
                  ${theme === "light" 
                    ? "border-gray-900/20 bg-gray-900/10 checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 transition duration-300" 
                    : "border-gray-800 bg-gray-500 checked:border-gray-500 transition duration-300"
                  }
                  mt-2.5 before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:scale-105 hover:before:opacity-0
                `}
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          {/* Title */}
          <h1 className={`
            ml-3 hidden lg:block
            ${completedTodoStatus}
          `}>
            {titleSliceDesktop()}
          </h1>
          <h1 className={`
            ml-3 hidden md:block lg:hidden
            ${completedTodoStatus}
          `}>
            {titleSliceTablet()}
          </h1>
          <h1 className={`
            ml-3 md:hidden lg:hidden text-2xl
            ${completedTodoStatus}
          `}>
            {titleSliceMobile()}
          </h1>
        </div>
        {/* Button */}
        <div>
          <button
            onClick={() => {
              const isConfirm = window.confirm(
                "Are you sure!!! you want to delete this todo?"
              );
              if (isConfirm) {
                deleteTodo(todo.id);
              }
            }}
            className={`
              delete-btn text-2xl transition hover:-translate-x-1 hover:scale-125  duration-300
              ${theme === "light" 
                ? "text-red-500 duration-300" 
                : "text-red-400 duration-300"
              }
              `}
          >
            {theme === "light" ? <BsTrash3Fill /> : <BsTrash3 />}
          </button>
        </div>
      </div>
    </>
  );
};
