import React from "react";

const TodoItem = ({ todoText, date }) => {
  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6 todoText">{todoText}</div>
        <div className="col-4 todoText">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger custom-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
