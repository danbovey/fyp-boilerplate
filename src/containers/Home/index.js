import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import * as countActions from 'actions/count';
import Count from 'components/Count/Count';

import route from 'helpers/route';

import './styles';

const Home = ({ count, countActions }) => (
  <main className="home">
    <Helmet title="Home" />
    <a href="https://github.com/danbovey/fyp-boilerplate">
      <img src="/img/react-logo.svg" alt="React Logo" width="120" />
      <h1>FYP Boilerplate</h1>
    </a>
    <ul>
      <li>
        <Link to={route('home')}>Home</Link>
      </li>
      <li>
        <Link to={route('about')}>About</Link>
      </li>
    </ul>
    <Count
      count={count}
      onIncrement={countActions.increment}
      onDecrement={countActions.decrement}
    />
  </main>
);

const connector = connect(
  state => ({ count: state.count }),
  dispatch => ({ countActions: bindActionCreators(countActions, dispatch) })
);

export default connector(Home);
