import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firbase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/7713521/pexels-photo-7713521.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <span>John</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
