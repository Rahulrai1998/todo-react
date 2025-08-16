import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import Clock from "./components/Clock";
import { useState } from "react";
import TodoProvider from "./store/TodoStore";
import TodoItems from "./components/TodoItems";
import Modal from "./components/Modal";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <center className="todo-container  mt-5 m-auto border">
      <TodoProvider>
        <AppName />

        <button onClick={() => setOpen(true)}>Click me</button>

        <AddTodo />

        <div className="items-container w-100">
          <ErrorBoundary>
            <TodoItems />
          </ErrorBoundary>
        </div>
      </TodoProvider>
      <Modal isOpen={open}>
        <h1>This is a modal</h1>
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal>
    </center>
  );
}

export default App;
