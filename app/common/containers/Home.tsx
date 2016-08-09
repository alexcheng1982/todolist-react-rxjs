import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Todo from '../components/Todo';


import TodoApp from './TodoApp';

export default class Home extends React.Component<{}, {}> {
  render(): React.ReactElement<{}> {
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
}