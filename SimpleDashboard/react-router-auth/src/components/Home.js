import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <p>
        <Link to={"/login"}>Login</Link>
      </p>
      <p>
        <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};

export default Home;
