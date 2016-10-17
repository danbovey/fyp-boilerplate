import React from 'react';
import { IndexRoute, Route } from 'react-router';

import {
    App,
    Home
} from 'containers';

export const schema = {
    'home': '/'
};

export default (store) => {
    return (
        <Route component={App}>
            <Route path="/" component={Home} />
        </Route>
    );
};
