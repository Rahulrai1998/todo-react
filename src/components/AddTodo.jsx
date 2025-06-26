import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const AddTodo = () => {
  return (
    <div className="container text-center mt-5 mb-3">
      <div className="row custom-row d-flex justify-content-end gap-0">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter here..."
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input type="date" className="form-control" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success custom-btn">
            <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
