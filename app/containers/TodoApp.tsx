
import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Todo from '../components/Todo';

export default class TodoApp extends React.Component<any, any> {
  render() {
    return (
      <div>
        <AppBar
          title="Todo App"
        />
        <Todo/>
      </div>
    );
  }
};
