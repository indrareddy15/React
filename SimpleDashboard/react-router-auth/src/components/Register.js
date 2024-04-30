import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      registerData.username !== "" &&
      registerData.password === registerData.confirmPassword
    ) {
      setRegisterData({
        username: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
    } else {
      alert("Invalid registration data");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form action="">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={registerData.username}
            onChange={handleRegisterChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleRegisterChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={handleRegisterChange}
          />
        </label>
        <button type="submit" value="Login" onClick={handleRegister}>
          Register
        </button>
        <p>
          Already have an account <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
