import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/Screens/LandingPages/LandingPage';
import Mynotes from './components/Screens/MyNotes/Mynotes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' component={LandingPage} exact />
          {/* we can import both ways to component  */}
          <Route path='/mynotes' component={() => <Mynotes />} />

        </Routes>
      </main>
      {/* <LandingPage /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
