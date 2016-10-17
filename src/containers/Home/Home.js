import React, { Component } from 'react';

import Count from 'components/Count/Count';

import './styles';

export default class Home extends Component {
    render() {
        return (
            <main className="home">
                <a href="https://github.com/danbovey/fyp-boilerplate">
                    <img src="/img/react-logo.svg" alt="React Logo" width="120" />
                    <h1>FYP Boilerplate</h1>
                </a>
                <Count />
            </main>
        );
    }
}
