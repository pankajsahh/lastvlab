import React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';
import App from './App';
import { BrowserRouter  }  from 'react-router-dom';
import Store from './components/context/store';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Store>
    <App />
    </Store>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

