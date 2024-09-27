import "./App.css";
import FetchCustomHook from "./Components/CustomHooks/apiCustomHook";
import FileExplorer from "./Components/File Explorer";

function App() {
  return (
    <div className="container">
      <h3>File Explorer</h3>
      <FetchCustomHook />
    </div>
  );
}

export default App;
