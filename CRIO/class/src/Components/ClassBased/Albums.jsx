import React from "react";
import PhotoAlbum from "./PhtAlbum";
import axios from "axios";

class ClassAlbum extends React.Component {
  constructor() {
    super();
    this.state = {
      albumData: [],
      selectedAlbum: "",
    };
  }

  componentDidMount() {
    console.log("On Load render");
    this.handleFetchAlbumData();
  }

  handleFetchAlbumData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        const albumResponse = response.data;
        console.log(albumResponse);
        this.setState({ albumData: albumResponse });
      })
      .catch((error) => {
        console.log("Error in Fetching Album Data", error);
      });
  };

  render() {
    const { album, selectedAlbum } = this.state;
    return (
      <>
        <div>
          <h1>AlbumData</h1>
          {this.state.albumData.map((album) => {
            return (
              <p
                onClick={() => this.setState({ selectedAlbum: album.id })}
                style={{ cursor: "pointer" }}
                key={album.id}
              >
                {album.title} {album.id}
              </p>
            );
          })}
        </div>
        <PhotoAlbum albumId={selectedAlbum} />
      </>
    );
  }
}

export default ClassAlbum;
