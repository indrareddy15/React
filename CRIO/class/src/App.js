import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Login/Home";
import About from "./Components/Login/About";
import Services from "./Components/Login/Services";
import Contact from "./Components/Login/Contact";
import NotFound from "./Components/Login/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/notfound" element={<NotFound />} />
    </Routes>
  );
}
export default App;
