import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoText={"clean car"} date={"10 JAN 2001"} />
        <TodoItem todoText={"clean car"} date={"10 JAN 2001"} />
      </div>
    </center>
  );
}

export default App;
