import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faPlus, faUser, faLock, faTrashAlt, faCog} from '@fortawesome/free-solid-svg-icons'
import{ BrowserRouter } from 'react-router-dom';
import { MemeProvider } from './context/MemeContext'
import App from './components/App/App';
import './index.css';


library.add(faPlus, faTrashAlt, faUser, faLock, faCog)

ReactDOM.render(
  <BrowserRouter>
    <MemeProvider>
      <App />
    </MemeProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);
