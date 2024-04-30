import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginData.username === "adminuser" &&
      loginData.password === "adminuser"
    ) {
      setLoginData({
        username: "",
        password: "",
      });
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleLoginChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
        </label>
        <button type="submit" value="Login" onClick={handleLogin}>
          Login
        </button>
        <p>
          Don't have an account <Link to={"/register"}>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
