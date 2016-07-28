import * as React from 'react';
import { ITodo } from '../model/todo';
import TodoItemComponent from './TodoItem';

interface Props {
  todos: ITodo[];
}

export default class TodoListComponent extends React.Component<Props, {}> {
  render(): React.ReactElement<{}> {
    return (
      <ul>
        {
          this.props.todos.map(todo => <TodoItemComponent key={todo.id} todo={todo}/>)
        }
      </ul>
    );
  }
}
