import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { appRoute } from "./route";
import React, { Suspense, useRef, useState } from "react";

function App() {
  const cartInitialItems = {
    totalAmount: 0,
    numberOfItems: 0,
    cartItems: [],
  };
  const categoryRef = useRef();
  const [cartItems, setCartItems] = useState(cartInitialItems);
  return (
    <div>
      <Navbar
        categoryRef={categoryRef}
        cartItemsCount={cartItems.numberOfItems}
      />
      <Suspense fallback={() => <h1>Loading...!</h1>}>
        <Routes>
          {appRoute.map((route) => {
            const Component = route.component;
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                element={
                  <Component
                    categoryRef={categoryRef}
                    _cartItems={cartItems}
                    setCartItems={setCartItems}
                  />
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

// Suspense is a React feature that allows developers to display a temporary or "fallback" UI while waiting for data to load

// Suspense is a React component that will work with Lazy(Component)
// When Every the comaponent is lazyly imported the Suspense component will the the fallback UI until the lazy loading works
// it will take a fallback prop in which  you want load
// mainly used for complex applications like lots of API calls lots of Data
