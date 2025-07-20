import React, { useContext } from "react";
import { TodoContext } from "../store/TodoStore";
import TodoItem from "./TodoItem";
const TodoItems = () => {
  const { todo, handleDeleteTodo } = useContext(TodoContext);

  return (
    <>
      {todo?.map((todo,i) => (
        <TodoItem
          key={i}
          todoText={todo?.text}
          date={todo?.date}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
      {todo.length === 0 && <p className="lead">Add Something</p>}
    </>
  );
};

export default TodoItems;
