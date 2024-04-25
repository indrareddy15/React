import React, { useEffect, useState } from "react";

const debounce = (func, delay) => {
  let timeoutId;

  return function (...args) {
    // args ==> arguments it is any array
    // args will be avaliable only in normal functions not in array functions

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const SearchDebounce = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (searchText) => {
    console.log("E: : ", searchText);
    setSearch(searchText);
  };

  useEffect(() => {
    handleSearch()
  });

  const debounceSearch = debounce(handleSearch, 500);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchDebounce;
