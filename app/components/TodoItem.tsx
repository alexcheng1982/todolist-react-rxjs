import * as React from 'react';
import { Todo } from '../model/todo';

interface Props {
  key: string;
  todo: Todo;
}

export default class TodoItemComponent extends React.Component<Props, {}> {
  render(): React.ReactElement<{}> {
    let { description } = this.props.todo;
    return (
      <li>
        <input type="checkbox" defaultChecked={this.props.todo.isCompleted()} /> {description}
      </li>
    );
  }
}
