import React, { useState } from "react";
import add from "../images/addAvtar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbase";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" name="displayName" />
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
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
