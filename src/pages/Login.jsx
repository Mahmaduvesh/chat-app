import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import LogoIcon from "../images/login.png";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <img src={LogoIcon} alt="" />
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />

          <button>Sign in</button>
          {err && <span>Something Went Wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
