import React  from "react";
import "./App.css";
import Details from "./Pages/Details/Details";
import { Menu } from "./Pages/Menu/Menu";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Redux/Reducers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const store = createStore(rootReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <Menu />
        <Details />
        <ToastContainer />

      </Provider>
    </div>
  );
}

export default App;
