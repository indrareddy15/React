import React, { useState, useRef, useEffect } from "react";

const ReactRef = () => {
  const [searctText, setSearchText] = useState("");

  // inputRef is the ref object that can be used to access and manipulate the DOM directly or store mutable (changele) values.
  const inputRef = useRef(null);
  console.log("input Ref : :", inputRef);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  return (
    <div>
      <h1>ReactRef</h1>
      <p>Google</p>
      <input
        ref={inputRef}
        type="text"
        value={searctText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <br />
      {<h1>{searctText}</h1>}
    </div>
  );
};

export default ReactRef;
