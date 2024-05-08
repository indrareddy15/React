import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const UseRefEx = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  const handleClick1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "skyblue";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };
  const handleClick2 = () => {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "skyblue";
    inputRef3.current.style.backgroundColor = "";
  };
  const handleClick3 = () => {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "skyblue";
  };

  useEffect(() => {
    console.log("Component Rendered");
  });
  return (
    <div>
      <button onClick={handleClick1}>Click me...!</button>
      <input ref={inputRef1} /> <br /> <br />
      <button onClick={handleClick2}>Click me...!</button>
      <input ref={inputRef2} /> <br /> <br />
      <button onClick={handleClick3}>Click me...!</button>
      <input ref={inputRef3} />
    </div>
  );
};

export default UseRefEx;

// useRef: "use Reference" Does not cause re-render when its value chnages.
//          When you want a component to "remember" some information but you don't want that information to trigger new render
// 1. Accessing/Intreacting with DOM elements
// 2. Handling Focus, Animation, and Transitions
// 3. Managing Timers and Intervals
// useRef returns an object with single property initiallly set the initial value you provided
