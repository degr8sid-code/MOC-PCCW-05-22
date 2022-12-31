import logo from './logo.svg';
import './App.css';
import Navibar from './components/Navibar';
import { useState } from 'react';
import Task from './components/Task';

function App() {
  return (
    <div id = "container" >
      <Task />
    </div>
  );
}

export default App;
