import React from 'react';
import ReactDOM from 'react-dom';
import{ BrowserRouter } from 'react-router-dom';
import { MemeProvider } from './context/MemeContext'
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  
  <BrowserRouter>
    <MemeProvider>
      <App />
    </MemeProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);
