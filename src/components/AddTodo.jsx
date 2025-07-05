import React, { useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

const AddTodo = ({ handleAddTodo }) => {
  const textRef = useRef("");
  const dateRef = useRef("");
  // const [todo, setTodo] = useState({ id: 1, text: "", date: "" });

  // const handleTodoChange = (event) => {
  //   setTodo({ ...todo, text: event.target.value });
  // };
  // const handleTimeChange = (event) => {
  //   setTodo({ ...todo, date: event.target.value });
  // };

  const handleAddClick = () => {
    handleAddTodo({
      id: 1,
      text: textRef.current.value,
      date: dateRef.current.value,
    });
    textRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <div className="container text-center mt-5 mb-3">
      <div className="row custom-row d-flex justify-content-end gap-0">
        <div className="col-4">
          <input
            ref={textRef}
            // value={todo.text}
            type="text"
            placeholder="Enter here..."
            className="form-control"
            // onChange={handleTodoChange}
          />
        </div>
        <div className="col-4">
          <input
            ref={dateRef}
            type="date"
            className="form-control"
            // value={todo.date}
            // onChange={handleTimeChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success custom-btn"
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
