import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

export const AddTodo = () => {
  const { saveTodo } = useContext(TodoContext);
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
      className="bg-white my-6 rounded-md"
    >
      <div className="relative">
        <input
          type="text"
          id="title"
          placeholder="Create a new todo..."
          onChange={handleForm}
          value={formData.title || ''}
          className="placeholder-gray-300 text-gray-700 text-2xl block w-10/12 p-4 outline-none rounded-md"
        />
        <button className="absolute inset-y-0 right-0 px-12 bg-blue-500 text-white hover:bg-blue-700 rounded-r-md">
          Add
        </button>
      </div>
    </form>

  );
};
