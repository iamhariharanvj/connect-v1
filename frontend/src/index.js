import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './Redux/store/store'
import './index.css';

import Routes from './Routes/routes'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store()}>
      <Routes />
    </Provider>
  </React.StrictMode>
);

