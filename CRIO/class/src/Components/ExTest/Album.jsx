import React, { useState, useEffect } from "react";
import Photos from "./Photos";

const Album = () => {
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
            <p
              onClick={() => setSelectedAlbum(album.id)}
              style={{ cursor: "pointer" }}
              key={album.id}
            >
              {album.title} {album.id}
            </p>
          );
        })}
      </div>
      <Photos albumId={selectedAlbum} />
    </>
  );
};

export default Album;

// https://jsonplaceholder.typicode.com/albums ==> albumData
// https://jsonplaceholder.typicode.com/photos  ==> phtData

// When ever we itreate a list we need to pass the "key" attribute to all p tags to identifies items unquily
