import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Typography, CssBaseline } from "@mui/material";
import Login from "./With-Redux/Login";
import Logout from "./With-Redux/LogOut";
import Navbar from "./With-Redux/NavBar";
import BasicForm from "./Components/BasicForm";
import LoginSignup from "./Login/Login";

function App() {
  return (
    <>
      <h1>------------------Part-1------------------------</h1>
      <div>
        <Router>
          <CssBaseline /> {/* Apply baseline styles */}
          <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
              Login and Logout Application
            </Typography>
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Container>
        </Router>
      </div>
      <h1>-------------------Part-2---------------------</h1>
      <div>
        <BasicForm />
      </div>
      <h1>---------------------Part-3----------------------</h1>
      <div>
        <LoginSignup />
      </div>
    </>
  );
}

export default App;
