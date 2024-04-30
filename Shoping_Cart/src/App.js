import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { appRoute } from "./route";
import { Suspense } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={() => <h1>Loading...!</h1>}>
        <Routes>
          {appRoute.map((route) => {
            const Component = route.component;
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                element={<Component />}
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
