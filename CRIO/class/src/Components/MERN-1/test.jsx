import React, { Component } from "react";
import Photos from "./Photos";

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: [],
      selectedAlbum: "",
    };
  }

  componentDidMount() {
    this.handleFetchAlbum();
  }

  handleFetchAlbum = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const albumData = await response.json();
      this.setState({ album: albumData });
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  render() {
    const { album, selectedAlbum } = this.state;
    return (
      <>
        <div>
          <h1>Albums</h1>
          {album.map((album) => (
            <p
              onClick={() => this.setState({ selectedAlbum: album.id })}
              style={{ cursor: "pointer" }}
              key={album.id}
            >
              {album.title} {album.id}
            </p>
          ))}
        </div>
        <Photos albumId={selectedAlbum} />
      </>
    );
  }
}

export default Album;
