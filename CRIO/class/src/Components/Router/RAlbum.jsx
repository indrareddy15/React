import React, { useState, useEffect } from "react";
import Photos from "./RPhotos";
import { Link } from "react-router-dom";

const RAlbum = () => {
  const [album, setAlbum] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState("");

  const handleFetchAlbum = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albumData = await response.json();
    console.log(albumData);
    setAlbum(albumData);
  };

  useEffect(() => {
    console.log("AlbumData");
    handleFetchAlbum();
  }, []);

  return (
    <>
      <div>
        <h1>Albums</h1>
        {album.map((album) => {
          return (
            <Link
              to={`/photos/${album.id}`}
              style={{ cursor: "pointer" }}
              key={album.id}
            >
              <p>
                {album.title} {album.id}
              </p>
            </Link>
          );
        })}
      </div>
      <Photos albumId={selectedAlbum} />
    </>
  );
};

export default RAlbum;

// https://jsonplaceholder.typicode.com/albums ==> albumData
// https://jsonplaceholder.typicode.com/photos  ==> phtData

// When ever we itreate a list we need to pass the "key" attribute to all p tags to identifies items unquily
