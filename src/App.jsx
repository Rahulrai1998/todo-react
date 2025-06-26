import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  const todoData = [
    {
      id: 0,
      text: "Clean car",
      date: "10 JAN 2001",
    },
    {
      id: 1,
      text: "Read book",
      date: "10 JAN 2001",
    },
    {
      id: 3,
      text: "Go to market",
      date: "10 JAN 2001",
    },
    {
      id: 4,
      text: "Buy a house",
      date: "10 JAN 2001",
    },
  ];

  return (
    <>
      <center className="todo-container w-50 m-auto">
        <AppName />
        <AddTodo />
        <div className="items-container w-100">
          {todoData?.map((todo) => (
            <TodoItem key={todo?.id} todoText={todo?.text} date={todo?.date} />
          ))}
        </div>
      </center>
      {/* <center>
        <Clock />
      </center> */}
    </>
  );
}

export default App;
