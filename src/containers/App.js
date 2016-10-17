import React, { Component } from 'react';

import '../../resources/scss/app';

// Global app container for <Helmet>, global components, auth etc.
export default class App extends Component {
    render() {
        return this.props.children;
    }
}
