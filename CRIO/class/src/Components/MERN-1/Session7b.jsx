import React, { useState } from "react";

const Debounce = () => {
  const [searctText, setSearchText] = useState("");

  console.log(searctText);

  return (
    <div>
      <h1>Debouncing</h1>
      <input
        type="text"
        value={searctText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Debounce;
