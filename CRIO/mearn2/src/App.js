// import SonarReportGenerator from "./Components/ASonarQube/FileDownload";

import UserProvider from "./Components/UserContext/Users/UserProvider";

// import ThemeProvider from "./Components/CntxtProvider/Theme/ThemeProvider";

function App() {
  return (
    <div className="App">
      <UserProvider />
    </div>
  );
}

export default App;
