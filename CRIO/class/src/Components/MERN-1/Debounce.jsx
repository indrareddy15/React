import React, { useEffect, useRef, useState } from "react";

const debounce = (func, delay) => {
  // debounce is function it will accept two arguments
  // one is function that you want delay(apply debounce logic) and second paramater will be the actul delay given by user

  // define timeout id varibale to add the function
  let timeoutId;

  // the debounce function will return a new function
  return function (...args) {
    // args is ntg but what ever arguments that are passing to function
    // args ==> arguments it is any array
    // args will be avaliable only in normal functions not in array functions

    // function (...args) will Check now if timeoutId exits then clear timeoutId
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // now initilize a new setTimeoutId that you can pass a call back function and pass func and delay as argument
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// The above uses the coluser concept in debouncing
//

const SearchDebounce = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (searchText) => {
    console.log("E: : ", searchText);
  };

  useEffect(() => {
    if (search) {
      debounceSearch(search);
    }
  }, [search]);

  const debounceSearch = useRef(debounce(handleSearch, 500)).current;

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          // debounceSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchDebounce;
