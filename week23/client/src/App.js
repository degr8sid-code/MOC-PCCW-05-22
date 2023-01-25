import logo from './logo.svg';
import './App.css';
import Navibar from './components/Navibar';
import { useState } from 'react';
import TodoTask from './components/TodoTask';


function App() {
  return (
    <div id = "container" >
      <TodoTask />
    </div>
  );
}

export default App;
