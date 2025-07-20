import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import Clock from "./components/Clock";
import { useState } from "react";
import TodoProvider from "./store/TodoStore";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <center className="todo-container  mt-5 m-auto border">
      <TodoProvider>
        <AppName />
        <AddTodo />
        <div className="items-container w-100">
          <TodoItems />
        </div>
      </TodoProvider>
    </center>
  );
}

export default App;
