import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../pages/Dashboard";
import UserProfile from "../pages/UserProfile";
import SearchResults from "../pages/SearchResults";

const FinalRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile/:username" element={<UserProfile />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default FinalRoutes;
