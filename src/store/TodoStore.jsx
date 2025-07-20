import { createContext, useReducer, useState } from "react";

export const TodoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((item) => item.text != action.payload.text);
      break;
    case "ADD":
      return [...state, action.payload.todoInput];
      break;
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  // const [todo, setTodo] = useState([]);
  const [todo, dispatch] = useReducer(reducer, []);

  const handleDeleteTodo = (text) => {
    dispatch({
      type: "DELETE",
      payload: {
        text,
      },
    });
  };

  const handleAddTodo = (todoInput, time) => {
    //functional updates
    dispatch({
      type: "ADD",
      payload: {
        todoInput,
      },
    });
  };

  return (
    <TodoContext value={{ todo, handleDeleteTodo, handleAddTodo }}>
      {children}
    </TodoContext>
  );
};

export default TodoProvider;
