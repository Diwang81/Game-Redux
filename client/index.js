import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Navbar from './Navbar/Navbar';

render(
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Navbar} />
        </Switch>
      </App>
    </Router>
  , document.getElementById('app'));