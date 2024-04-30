import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  return (
    <div>
      <h1>Search Results</h1>
      <p>Showing results for: {query}</p>
    </div>
  );
};

export default SearchResults;
