import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();
const TodoContextProvider = ({ children }) => {
  // Define state
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  // Detect and set lacolStorage to defult 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  // function
  const saveTodo = (todo) => {
    if(!todo.title){
      alert("Please add title");
    } else {
      const newTodo = {
        id: todos.length + 1,
        title: todo.title,
        desc: todo.desc,
        status: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const completedTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const clearCompleted = (id) => {
    setTodos(todos.filter(todo => todo.status !== true));
  }

  // return
  return (
    <TodoContext.Provider value={{ todos, saveTodo, completedTodo, deleteTodo, clearCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
