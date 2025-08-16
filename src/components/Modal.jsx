import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  console.log("Clicked", isOpen);
  return createPortal(
    <div
      className="modal"
      style={{ backgroundColor: "#000", width: "50%", margin: "auto" }}
    >
      {children}
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
