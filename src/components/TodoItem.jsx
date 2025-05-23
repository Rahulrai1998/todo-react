import React from "react";

const TodoItem = ({ todoText, date }) => {
  return (
    <div class="container">
      <div class="row custom-row">
        <div class="col-6 todoText">{todoText}</div>
        <div class="col-4 todoText">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger custom-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
