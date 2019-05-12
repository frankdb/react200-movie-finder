import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';
import App from './app';
import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(reducers, applyMiddleware(thunk));

/* eslint-enable */


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export default store