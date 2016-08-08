import * as React from 'react';

export default class App extends React.Component<{}, {}> {
  render(): React.ReactElement<{}> {
    return (
      <div>
        <h1>Todo List App</h1>
        {this.props.children}
      </div>
    );
  }
}