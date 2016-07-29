
import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Todo from '../components/Todo';

export default class TodoApp extends React.Component<any, any> {
  render() {
    return (
      <div>
        <AppBar
          title="Todo App"
          showMenuIconButton={false}
        />
        <Todo/>
      </div>
    );
  }
};
