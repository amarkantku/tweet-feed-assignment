import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import configureStore from './store';
import rootSaga from './sagas';
import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
store.runSaga(rootSaga);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}