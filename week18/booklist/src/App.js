import './App.css';
import Booklist from './Components/Booklist'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Favourites from './Components/Favourites';
import Products from './Components/Cart';
function App() {

  console.log("Loading App.js");
  return (
    // <div>
    //   <Booklist />
    // </div>
    <>
    { <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Booklist />}>
        </Route>
        <Route exact path="/Favourites" element={<Favourites />}>
        </Route>
      </Routes>
    </Router> }

  </>
  );
}

export default App;
