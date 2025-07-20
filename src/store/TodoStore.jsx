import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const handleDeleteTodo = (text) => {
    const newTodo = todo.filter((item) => item.text != text);
    setTodo(newTodo);
  };

  const handleAddTodo = (todoInput, time) => {
    //functional updates
    setTodo((todo) => [...todo, todoInput]);
  };

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, handleDeleteTodo, handleAddTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
