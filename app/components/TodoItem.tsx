/// <reference types="react" />

import * as React from 'react';
import { Todo } from '../model/todo';

interface Props {
  key: string;
  todo: Todo;
}

interface State {
  completed: boolean;
}

export default class TodoItemComponent extends React.Component<Props, State> {

  componentWillMount() {
    this.setState({
      completed: this.props.todo.isCompleted()
    });
  }

  handleChange(event: React.FormEvent<any>) {
    this.setState({
      completed: (event as any).target.checked
    });
  }

  render(): React.ReactElement<{}> {
    let { description } = this.props.todo;
    return (
      <li>
        <input type="checkbox" checked={this.state.completed} onChange={this.handleChange.bind(this)} /> {description}
      </li>
    );
  }
}
