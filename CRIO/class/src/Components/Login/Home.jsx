// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link to="/">
      <h2>Home</h2>
      <p>Welcome to our website!</p>
    </Link>
  );
};

export default Home;
