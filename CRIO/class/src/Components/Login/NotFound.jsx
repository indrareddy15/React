// NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Link to="/notfound">
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </Link>
  );
};

export default NotFound;
