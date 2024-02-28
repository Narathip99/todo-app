import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import { ThemeContext } from "../context/themeContex";
import { TodoCard } from "../components/TodoCard";

export const Todos = () => {
  // Define state
  const { todos, completedTodo, deleteTodo, clearCompleted } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState("All");
  const todosPerPage = 5;

  const filteredTodos = currentFilter === "All"
    ? todos
    : currentFilter === "Active"
    ? todos.filter((todo) => !todo.status)
    : todos.filter((todo) => todo.status);


  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);
  const startIndex = (currentPage - 1) * todosPerPage;
  const endIndex = startIndex + todosPerPage;
  const currentTodos = filteredTodos.slice(startIndex, endIndex);

  const pageNumber = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  //
  let fPaginationNum = Math.max(currentPage -3, 0);
  if (currentPage === totalPages - 2 ) {
    fPaginationNum = Math.max(currentPage -3, 0);
  } else if (currentPage === totalPages - 1) {
    fPaginationNum = Math.max(currentPage -4, 0);
  } else if (currentPage === totalPages) {
    fPaginationNum = Math.max(currentPage -5, 0);
  }

  let bPaginationNum = Math.min(currentPage +2, totalPages);
  if (currentPage === 1) {
    bPaginationNum = Math.min(currentPage +4, totalPages);
  } else if (currentPage === 2) {
    bPaginationNum = Math.min(currentPage +3, totalPages);
  }

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    setCurrentPage(1); // Reset page to 1 when changing the filter
  };

  const textTheme = theme === "light" 
    ? "text-gray-600 transition duration-300" 
    : "text-white transition duration-300"

  return (
    <div className={`
    ${theme === "light" 
      ? "bg-white transition duration-300"
      : "bg-gray-700 transition duration-300"
    } rounded-md shadow-lg`
    }>
      {/* ToolBar */}
      <div className="flex justify-between items-center p-4">
        {/* Number of item */}
        <div>
          <p className={textTheme}>
            <span className="text-lg">{filteredTodos.length}</span>
            <span>{`${filteredTodos.length !== 1 ? " items" : ""} left`}</span>
          </p>
        </div>
        {/* Filter ToolBar */}
        <div className="md:flex hidden">
          <p 
            className={`px-2 ${textTheme} ${currentFilter === "All" ? "font-bold" : ""}`} 
            onClick={() => handleFilterChange("All")}
          >
            All
          </p>
          <p 
            className={`px-2 ${textTheme} ${currentFilter === "Active" ? "font-bold" : ""}`} 
            onClick={() => handleFilterChange("Active")}
          >
            Active
          </p>
          <p 
            className={`px-2 ${textTheme} ${currentFilter === "Completed" ? "font-bold" : ""}`} 
            onClick={() => handleFilterChange("Completed")}
          >
            Completed
          </p>
        </div>
        {/* Clear Completed */}
        <button
          onClick={() => {
            const isConfirm = window.confirm(
              "Are you sure!!! you want to clear completed?"
            )
            if (isConfirm) {
              clearCompleted();
            }
          }}
          className={`${textTheme} hover:text-red-500`}
        >
          Clear Completed
        </button>
      </div>
      {/* Todos */}
      {currentTodos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          completedTodo={completedTodo}
          deleteTodo={deleteTodo}
          theme={theme}
        />
      ))}
      <hr className={theme === "light" ? "border-t-2 transition duration-300" : "border-t-2 border-gray-800 transition duration-300"} />
      {/* Pagination */}
      <div className="flex justify-center py-2">
        <a className={`${textTheme} px-2 cursor-pointer font-bold`}  
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        >
          &lt;
        </a>
        { pageNumber.slice(
          fPaginationNum,
          bPaginationNum
          ).map((page) => (
            <span
              key={page}
              onClick={() => handlePageChange(page)}
              className={`${textTheme} cursor-pointer px-2 ${
                currentPage === page ? "font-bold" : ""
              }`}
            >
              {page}
            </span>
          ))
        }
        <a className={`${textTheme} px-2 cursor-pointer font-bold`} 
          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
        >
          &gt;
        </a>
      </div>
    </div>
  );
};
