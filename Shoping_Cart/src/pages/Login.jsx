import React, { useState } from "react";
import { authenticateUser } from "../utils";

const Login = ({ setUser, setIsLogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const getUser = async () => {
      try {
        const response = await authenticateUser(email, password);
        console.log("RESPONSE", response);
        if (response) {
          setUser(response);
          setIsLogged(true);
        } else {
          setErrorMsg("Invalid Email or Password");
        }
      } catch (error) {
        console.error("Error during authentication:", error);
        setErrorMsg("An error occurred during authentication");
      } finally {
        setLoading(false);
      }
    };
    getUser();
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <span className="error-span">{errorMsg}</span>
      <label htmlFor="email" className="login-label">
        Email
      </label>
      <input
        type="text"
        name="email"
        className="login-inp"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password" className="login-label">
        Password
      </label>
      <input
        type="password"
        name="password"
        className="login-inp"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading ? true : false}
      />
      <button type="submit">{!loading ? "Submit" : "Loading...."}</button>
    </form>
  );
};

export default Login;
