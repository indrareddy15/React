// import SonarReportGenerator from "./Components/ASonarQube/FileDownload";

import UserContextProvider from "./Components/NewContext/Context/UserContextProvider";
import Login from "./Components/NewContext/ProfileContext/Login";
import Profile from "./Components/NewContext/ProfileContext/Profile";
// import UserProvider from "./Components/UserContext/Users/UserProvider";
// import ThemeProvider from "./Components/CntxtProvider/Theme/ThemeProvider";

function App() {
  return (
    // <div className="App">
    //   <UserProvider />
    // </div>

    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
