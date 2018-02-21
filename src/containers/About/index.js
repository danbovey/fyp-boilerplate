import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import route from 'helpers/route';

import './style';

const About = () => (
  <main className="about">
    <Helmet title="About" />
    <h2>About</h2>
    <p>This is an empty page to show routing.</p>
    <Link to={route('home')}>Go back to home</Link>
  </main>
);

export default About;
