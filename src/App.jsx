// Components
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./containers/Todos";

// Context Provider
import TodoContextProvider from "./context/todoContext";

function App() {
  return (
    <TodoContextProvider>
      <div className="min-h-screen bg-gray-200">
        <div className="xl:max-w-3xl lg:max-w-2xl md:max-w-xl mx-auto">
          <div className="flex justify-between items-center xl:pt-20 lg:pt-12 md:pt-8 pt-8">
            <div>
              <h1 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                  Todo App
                </span>
              </h1>
            </div>
            <div>
              <p>Dark</p>
            </div>
          </div>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
