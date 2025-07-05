import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import Clock from "./components/Clock";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);

  const handleAddTodo = (todoInput, time) => {
    setTodo((todo) => [...todo, todoInput]);
  };
  
  const handleDeleteTodo = (text) => {
    const newTodo = todo.filter((item) => item.text != text);
    setTodo(newTodo);
  };

  return (
    <>
      <center className="todo-container  mt-5 m-auto border">
        <AppName />
        <AddTodo handleAddTodo={handleAddTodo} />
        <div className="items-container w-100">
          {todo?.map((todo) => (
            <TodoItem
              key={todo?.id}
              todoText={todo?.text}
              date={todo?.date}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </div>
        {todo.length === 0 && <p className="lead">Add Something</p>}
      </center>
      {/* <center>
        <Clock />
      </center> */}
    </>
  );
}

export default App;
