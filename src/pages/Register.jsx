import React from "react";
import add from "../images/addAvtar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" name="" value="" />
          <input type="email" placeholder="email" name="" value="" />
          <input type="password" placeholder="password" name="" value="" />
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            name=""
            value=""
          />
          <label htmlFor="">
            <img src={add} alt="" />
            <span>Add an avtar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
