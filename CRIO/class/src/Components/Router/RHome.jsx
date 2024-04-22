import React from "react";
import { Routes, Route } from "react-router-dom";
import RPhotos from "./RPhotos";
import RAlbum from "./RAlbum";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<RAlbum />} />
      <Route path="/photos/:id" element={<RPhotos />} />
    </Routes>
  );
};

export default Home;
