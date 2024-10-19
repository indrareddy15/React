import { useState } from "react";
import "./App.css";

const initialState = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  {
    word: "Component",
    meaning: "A reusable building block in React.",
  },
  {
    word: "State",
    meaning: "An object that stores data for a component.",
  },
];

export default function App() {
  const [distData] = useState(initialState);
  const [srchTerm, setSrchTerm] = useState("");
  const [res, setRes] = useState("");

  const handleSearch = () => {
    const searchWord = distData.find(
      (value) => value.word.toLowerCase() === srchTerm.toLowerCase()
    );

    if (searchWord) {
      setRes(searchWord.meaning);
    } else {
      setRes("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          value={srchTerm}
          onChange={(e) => setSrchTerm(e.target.value)}
          placeholder="Enter a word"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <h3>Definition:</h3>
      {res && <p className="result">{res}</p>}
    </div>
  );
}
