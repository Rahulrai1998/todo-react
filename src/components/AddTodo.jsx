import React from "react";

const AddTodo = () => {
  return (
    <div class="container text-center">
      <div class="row custom-row">
        <div class="col-5">
          <input type="text" placeholder="enter todo here" />
        </div>
        <div class="col-5">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success custom-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
