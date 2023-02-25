import logo from './logo.svg';
import './App.css';
import Navibar from './components/Navibar';
import { useState } from 'react';
import TodoTask from './components/TodoTask';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navibar />
        <Routes>
          <Route exact path="/" element={<TodoTask/>}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
