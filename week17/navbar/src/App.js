import logo from './logo.svg';
import './App.css';
import MainNav from './components/MainNav';
import Home from './components/Home';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Welcomeview from './components/Welcomeview';

function App() {
  console.log("Loading app")
  return (
    <>
      <Router>
        <MainNav />
        <Routes>
          <Route exact path="/" element={<Welcomeview />}>
          </Route>
          <Route exact path="/Home" element={<Home />}>
          </Route>
          <Route exact path="/Pricing" element={<Pricing />}>
          </Route>
          <Route exact path="/AboutUs" element={<AboutUs />}>
          </Route>
        </Routes>
      </Router>
    </>
    // <div className="App">
    //   <MainNav />
    //   <Home />
    //   <Pricing />
    //   <AboutUs />
    //   <h1>Navigation Bar Using Bootstrap and React Route</h1>
    // </div>
  );
}

export default App;
