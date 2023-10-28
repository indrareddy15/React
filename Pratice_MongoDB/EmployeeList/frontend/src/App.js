import Create from "./components/create";
import Edit from "./components/edit";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Create />
      <Edit />
      <RecordList />

    </div>
  );
}

export default App;
