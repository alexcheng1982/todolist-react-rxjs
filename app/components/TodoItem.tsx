import * as React from 'react';
import { ITodo } from '../model/todo';
import Checkbox from 'material-ui/Checkbox';

interface IProps {
  key: string;
  todo: ITodo;
}

interface IState {
  completed: boolean;
}

export default class TodoItemComponent extends React.Component<IProps, IState> {

  componentWillMount() {
    this.setState({
      completed: this.props.todo.isCompleted()
    });
  }

  handleChange(event: React.FormEvent) {
    this.setState({
      completed: (event as any).target.checked
    });
  }

  render(): React.ReactElement<{}> {
    let { description } = this.props.todo;
    return (
      <Checkbox
        label={ description }
        checked={this.state.completed}
        onCheck={this.handleChange.bind(this)}
      />
    );
  }
}
