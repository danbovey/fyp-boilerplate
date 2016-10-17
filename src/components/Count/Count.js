import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as countActions from 'actions/count';

import './styles';

@connect(
    state => ({
        count: state.count
    }),
    dispatch => ({
        actions: bindActionCreators(countActions, dispatch)
    })
)
export default class Count extends Component {
    render() {
        const {
            count,
            actions
        } = this.props;

        return (
            <div className="count">
                <button onClick={actions.decrement}>-</button>
                <h2>The count is: {count}</h2>
                <button onClick={actions.increment}>+</button>
            </div>
        );
    }
}
