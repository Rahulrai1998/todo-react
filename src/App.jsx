import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import Clock from "./components/Clock";
import { useState } from "react";
import TodoProvider from "./store/TodoStore";
import TodoItems from "./components/TodoItems";

import ErrorBoundary from "./components/ErrorBoundary";
import Debounce from "./components/Debounce";

function App() {
  const [open, setOpen] = useState(false);
  return (
    // <Debounce />
    <center className="todo-container  mt-5 m-auto border">
      <Clock />
      {/* <TodoProvider>
        <AppName />

        <button onClick={() => setOpen(true)}>Click me</button>

        <AddTodo />

        <div className="items-container w-100">
          <ErrorBoundary>
            <TodoItems />
          </ErrorBoundary>
        </div>
      </TodoProvider> */}
    </center>
  );
}

export default App;
