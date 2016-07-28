import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import TodoApp from './containers/TodoApp';

ReactDOM.render(
  <MuiThemeProvider>
    <TodoApp/>
  </MuiThemeProvider>,
  document.getElementById('app')
);
