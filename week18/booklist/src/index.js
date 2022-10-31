import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from './Components/context/context';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
    <App />
    </AppContextProvider>
      
  </React.StrictMode>
  , document.getElementById('root'));
reportWebVitals();