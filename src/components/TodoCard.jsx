import React from "react";

export const TodoCard = ({ todo, completedTodo, deleteTodo }) => {
  // Completed Todo
  const completedTodoStatus = todo.status 
  ? `line-through text-gray-500` 
  : ``;

  return (
    <>
      <hr className="border-t-2" />
      <div className="flex justify-between items-center p-4 ">
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
                className="mt-2.5 before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
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
          <h1 className={`ml-3 ${completedTodoStatus}`}>
            {todo.title.length > 20
              ? `${todo.title.slice(0, 20)}...`
              : todo.title}
          </h1>
        </div>
        {/* Button */}
        <div>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="delete-btn text-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
