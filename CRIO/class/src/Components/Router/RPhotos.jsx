import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RPhotos = () => {
  const { id } = useParams();
  console.log("id:", id);
  // const { albumId } = props;
  const [photosData, setPhotosData] = useState([]);

  const handleFetchPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    console.log("response", data);
    const filteredData = data.filter((d) => {
      console.log("He", d.albumId, id);
      return d.albumId === Number(id);
    });
    setPhotosData(filteredData);
  };
  useEffect(() => {
    handleFetchPhotos();
  }, [id]);
  return (
    <div>
      <h3>Photos {id}</h3>
      {photosData.map((pht) => {
        return <img key={pht.id} src={pht.url} alt={pht.title} />;
      })}
    </div>
  );
};

export default RPhotos;
