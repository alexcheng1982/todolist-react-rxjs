import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class TodoApp extends React.Component<{}, {}> {
  render(): React.ReactElement<{}> {
    return (
      <MuiThemeProvider>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}