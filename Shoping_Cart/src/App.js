import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { appRoute } from "./route";
import React, { Suspense, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function App() {
  const cartInitialItems = {
    totalAmount: 0,
    numberOfItems: 0,
    cartItems: [],
  };
  const categoryRef = useRef();
  const [cartItems, setCartItems] = useState(cartInitialItems);
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const location = useLocation();
  return (
    <div>
      <Navbar
        categoryRef={categoryRef}
        cartItemsCount={cartItems.numberOfItems}
        isLogged={isLogged}
      />
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Suspense fallback={<h1>Loading...!</h1>}>
            <Routes Location={location}>
              {appRoute.map((route) => {
                if (route.requireAuth && !isLogged) {
                  return (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      element={<Navigate replace to={"/login"} />}
                    />
                  );
                } else {
                  return (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      element={
                        <route.component
                          categoryRef={categoryRef}
                          _cartItems={cartItems}
                          setCartItems={setCartItems}
                          setUser={setUser}
                          setIsLogged={setIsLogged}
                          isLogged={isLogged}
                          user={user}
                        />
                      }
                    />
                  );
                }
              })}
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;

// Suspense is a React feature that allows developers to display a temporary or "fallback" UI while waiting for data to load

// Suspense is a React component that will work with Lazy(Component)
// When Every the comaponent is lazyly imported the Suspense component will the the fallback UI until the lazy loading works
// it will take a fallback prop in which  you want load
// mainly used for complex applications like lots of API calls lots of Data
