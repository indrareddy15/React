import React, { useState } from "react";
import "./Login.css";

import axios from "axios";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [mobile, setMobile] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);

    setName("");

    setEmail("");

    setPassword("");

    setMobile("");

    setErrorMessage("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);

        break;

      case "email":
        setEmail(value);

        break;

      case "password":
        setPassword(value);

        break;

      case "mobile":
        const numericValue = value.replace(/\D/g, "");

        setMobile(numericValue);

        break;

      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isLogin) {
        const response = await axios.post("http://localhost:5000/api/login", {
          email,
          password,
        });

        setErrorMessage(response.data.message);
      } else {
        const response = await axios.post(
          "http://localhost:5000/api/register",
          {
            name,
            email,
            password,
            mobile,
          }
        );

        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again");

      console.error(error);
    }
  };

  return (
    <div className="center">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      <form onSubmit={handleSubmit} className="form-container">
        {!isLogin && (
          <div>
            <label>Fullname:</label>

            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
              style={{ width: "200px" }}
            />
          </div>
        )}

        <div>
          <label>Email Id:</label>

          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
            style={{ width: "200px" }}
          />
        </div>

        <div>
          <label>Password:</label>

          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
            style={{ width: "200px" }}
          />
        </div>

        {!isLogin && (
          <div>
            <label>Mobile no:</label>

            <input
              type="text"
              name="mobile"
              maxLength="10"
              pattern="[0-9]{10}"
              value={mobile}
              onChange={handleInputChange}
              required
              style={{ width: "200px" }}
            />
          </div>
        )}

        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>

      <p className="error-message">{errorMessage}</p>

      <div className="buttons-container">
        <button onClick={toggleForm} className="switch-button">
          Switch to {isLogin ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default LoginSignup;
