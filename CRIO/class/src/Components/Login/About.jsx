// About.js
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Link to="/about">
      <h2>About Us</h2>
      <p>Learn more about our company.</p>
    </Link>
  );
};

export default About;
