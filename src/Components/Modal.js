import React, { useState } from "react";
import Login from "./Login";

const Modal = ({ show, onClose, children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <div className={`modal-overlay ${show ? "show" : ""}`} onClick={onClose}>
      <div
        className={`modal ${show ? "show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Login
          isLoginOpen={isLoginOpen}
          setIsLoginOpen={setIsLoginOpen}
          isAtHomePage
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;
