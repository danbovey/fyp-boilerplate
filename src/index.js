import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { configureStore } from 'store/configureStore';

import getRoutes from 'routes';

const dest = document.getElementById('root');
const store = configureStore();

const router = <Router>{getRoutes(store)}</Router>;

if (
  typeof process.env.NODE_ENV != 'undefined' &&
  process.env.NODE_ENV == 'development'
) {
  const DevTools = require('./containers/DevTools');
  ReactDOM.render(
    <Provider store={store} key="provider">
      <div>
        {router}
        <DevTools />
      </div>
    </Provider>,
    dest
  );
} else {
  ReactDOM.render(
    <Provider store={store} key="provider">
      {router}
    </Provider>,
    dest
  );
}
