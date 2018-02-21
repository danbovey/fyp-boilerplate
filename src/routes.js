import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from 'containers/App';
import Home from 'containers/Home';
import About from 'containers/About';

export const schema = {
  home: '/',
  about: '/about'
};

export default store => (
  <App>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </App>
);
