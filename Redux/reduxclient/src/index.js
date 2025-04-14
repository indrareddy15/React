import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
Pure Functions are functions that always return the same result if the same arguments [inputs] are passed in.
Reasons
It is deterministic, meaning that it will always produce the same output for the same input.
Testing is easier because you can test the function in isolation without worrying about external factors.
They do not depend on any external state or variables, and they do not cause any side effects.
For example, a function that takes two numbers and returns their sum is a pure function.
A function that modifies a global variable or performs I/O operations is not a pure function.
Pure functions are easier to test, reason about, and debug.
Pure functions are a key concept in functional programming and are often used in React applications.
*/ 