import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const PrivateRoute = ({ path, component: Component }) => {
  const navigate = useNavigate();
  return isAuthenticated() ? (
    <Route path={path} element={<Component />} />
  ) : (
    navigate("/login")
  );
};

export default PrivateRoute;
