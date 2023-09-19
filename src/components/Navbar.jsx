import React from "react";

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
        <button>Logo</button>
      </div>
    </div>
  );
};

export default Navbar;
