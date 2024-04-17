import axios from "axios";
import React from "react";

class DogPics extends React.Component {
  constructor() {
    super();
    this.state = {
      breed: "Random",
      imageUrl: "",
    };
  }
  componentDidMount() {
    this.handleFetchDogImg();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.breed !== this.state.breed) {
      this.handleFetchDogImg();
    }
  }

  handleFetchDogImg = () => {
    let url;
    if (this.state.breed === "Random") {
      url = "https://dog.ceo/api/breeds/image/random";
    } else {
      url = `https://dog.ceo/api/breed/${this.state.breed}/images/random`;
    }
    axios
      .get(url)
      .then((res) => {
        this.setState({ imageUrl: res.data.message });
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  };

  handleBreedChange = (e) => {
    this.setState({ breed: e.target.value });
  };

  handleNext = () => {
    this.handleFetchDogImg();
  };

  render() {
    return (
      <div>
        <h1>Dog Pics</h1>
        <select value={this.state.breed} onChange={this.handleBreedChange}>
          Select a breed
          <option value="Random">Random</option>
          <option value="beagle">Beagle</option>
          <option value="boxer">Boxer</option>
          <option value="dalmatian">Dalmatian</option>
          <option value="husky">Husky</option>
        </select>
        <br />
        <img src={this.state.imageUrl} alt="Dog" />
        <br />
        <button onClick={this.handleNextClick}>Next</button>
      </div>
    );
  }
}

export default DogPics;
