import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './app/api/store';
import AutoLogin from './components/AutoLogin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <AutoLogin />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


