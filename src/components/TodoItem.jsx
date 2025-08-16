import React from "react";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ todoText, date, handleDeleteTodo }) => {
  if (!todoText) throw new Error("Text required");
  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6 todoText">{todoText}</div>
        <div className="col-4 todoText">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger custom-btn"
            onClick={() => handleDeleteTodo(todoText)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
