import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/about";
import RepoList from "./Components/home";
import Users from "./Components/users";
import Navbar from "./Components/navbar";
import NotFound from "./Components/notfound";
import UserProfile from "./Components/userProfile";
import SearchUser from "./Components/searchUser";
import Login from "./Components/login";
import AuthProfile from "./Components/authProfile";

function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar isLogged={isLogged} />}>
          <Route exact path="/" element={<RepoList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
          <Route element={<UserProfile />} path="/users/user/:usernamae" />
          <Route element={<SearchUser />} path="/search" />
          <Route
            element={
              <Login setIsLogged={setIsLogged} setUsername={setUsername} />
            }
            path="/login"
          />
          <Route
            element={
              isLogged ? (
                <AuthProfile username={username} />
              ) : (
                <Navigate replace={"/login"} />
              )
            }
            path="/authProfile"
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
