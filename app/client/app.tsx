import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from '../common/routes/Main';

const dest = document.getElementById('app');
const component = (
  <Router history={browserHistory}>
    {routes}
  </Router>
);

ReactDOM.render(
  component,
  dest
);