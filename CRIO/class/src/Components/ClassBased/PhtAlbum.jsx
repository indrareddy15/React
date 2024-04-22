import React from "react";

class PhotoAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoData: [],
    };
  }

  componentDidMount() {
    this.handleFetchPhotoData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.albumId !== this.props.albumId) {
      this.handleFetchPhotoData();
    }
  }

  handleFetchPhotoData = async () => {
    const { albumId } = this.props;
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      const filteredData = data.filter((d) => d.albumId === albumId);
      this.setState({ photosData: filteredData });
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  render() {
    const { photoData } = this.state;
    const { albumId } = this.props;
    return (
      <div>
        <h3>Photos {albumId}</h3>
        {photoData.map((pht) => (
          <img key={pht.id} src={pht.url} alt={pht.title} />
        ))}
      </div>
    );
  }
}

export default PhotoAlbum;
