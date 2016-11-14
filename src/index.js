import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import { configureStore } from 'store/configureStore';

import getRoutes from 'routes';

const dest = document.getElementById('root');
const store = configureStore();

const router = (
    <Router history={browserHistory}>
        {getRoutes(store)}
    </Router>
);

if(typeof process.env.NODE_ENV != 'undefined' && process.env.NODE_ENV == 'development') {
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
