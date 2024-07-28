import React from "react";
import SvgIcon from "../Utils/SvgIcons";

const Login = ({
  isLoginOpen = true,
  setIsLoginOpen = () => {},
  isAtHomePage = false,
  onClose = () => {},
  setIsHomePage = () => {},
}) => {
  return (
    <div
      className={`login-container ${isLoginOpen ? "" : "sign-up-container"}`}
    >
      {isAtHomePage && (
        <button className="close-button" onClick={onClose}>
          <SvgIcon iconname="cross" />
        </button>
      )}
      <div className="modal-heading">
        <p className="welcome-back-text">
          {isLoginOpen ? " WELCOME BACK" : "SIGN UP"}
        </p>
        <p className="modal-title">
          {isLoginOpen
            ? "Log into your account"
            : "Create an account to continue"}
        </p>
      </div>
      <div className="form-container">
        <div className="input-container">
          <div className="input-label">
            {isLoginOpen ? "Email or Username" : "Email"}
          </div>
          <input
            type="text"
            className="input-field"
            placeholder={
              isLoginOpen ? "Enter your email or username" : "Enter your email"
            }
          />
        </div>
        {!isLoginOpen && (
          <div className="input-container">
            <div className="input-label">Username</div>
            <input
              type="text"
              className="input-field"
              placeholder="Choose a preferred username"
            />
          </div>
        )}
        <div className="input-container ">
          <div className="input-label">Password</div>
          <div className="password-container">
            <input
              type="password"
              className="input-field password-field"
              placeholder={
                isLoginOpen ? "Enter your password" : "Choose a strong password"
              }
            />
            <div className="eye-icon">
              <SvgIcon iconname="eye" />
            </div>
          </div>
        </div>
        <button
          className="login-button"
          onClick={() => (isAtHomePage ? onClose() : setIsHomePage(true))}
        >
          {isLoginOpen ? "Login now" : "Continue"}
        </button>
        <div className="not-registered">
          {isLoginOpen ? "Not registered yet?" : "Already have an account?"}
          <div
            className={`register ${isAtHomePage ? "pointer" : ""}`}
            onClick={() => isAtHomePage && setIsLoginOpen((prev) => !prev)}
          >
            {isLoginOpen ? "Register" : "Login"}
            <SvgIcon iconname="rightArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
