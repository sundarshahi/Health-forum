import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import store from './redux';

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <AppWithRouter />
    </BrowserRouter>  
  </Provider>
, document.getElementById('root'));
