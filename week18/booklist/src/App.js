import './App.css';
import Booklist from './Components/Booklist'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  console.log("Loading App.js");
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Booklist />}>

          </Route>
        </Routes>
      </Router> */}
      <Booklist />
    </div>
  );
}

export default App;
