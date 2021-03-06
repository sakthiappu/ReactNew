import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
//import Appnew from './Appnew';
//import UserJson from './UserJson';
import reportWebVitals from './reportWebVitals';
import RegisterPage from './auth/RegisterPage';
import Dashboard from './auth/Dashboard';
import Appnew from './crud/Appnew';

ReactDOM.render(
  <React.StrictMode>
    {/*<Appnew /> <App/> <Routing/><UserJson*/   }
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
