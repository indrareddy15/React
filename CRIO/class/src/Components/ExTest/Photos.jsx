import React, { useEffect, useState } from "react";

const Photos = (props) => {
  const { albumId } = props;
  const [photosData, setPhotosData] = useState([]);

  const handleFetchPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    console.log("response", data);
    const filteredData = data.filter((d) => d.albumId === albumId);
    setPhotosData(filteredData);
  };
  useEffect(() => {
    handleFetchPhotos();
  }, [albumId]);
  return (
    <div>
      <h3>Photos {albumId}</h3>
      {photosData.map((pht) => {
        return <img key={pht.id} src={pht.url} alt={pht.title} />;
      })}
    </div>
  );
};

export default Photos;
