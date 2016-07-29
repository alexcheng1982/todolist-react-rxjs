import * as React from 'react';
import { ITodo } from '../model/todo';
import Checkbox from 'material-ui/Checkbox';

interface IProps {
  key: string;
  todo: ITodo;
  updateStatus: (todo: any) => void;
}

interface IState {
  completed: boolean;
}

export default class TodoItemComponent extends React.Component<IProps, IState> {

  componentWillMount() {
    this.setState({
      completed: this.props.todo.completed
    });
  }

  handleChange(event: React.FormEvent) {
    let completed = (event as any).target.checked;
    this.setState({
      completed: completed
    });
    this.props.updateStatus({
      id: this.props.todo.id,
      completed: completed
    });
  }

  render(): React.ReactElement<{}> {
    let { description } = this.props.todo;
    return (
      <Checkbox
        label={ description }
        defaultChecked={this.state.completed}
        value={this.state.completed}
        onCheck={this.handleChange.bind(this)}
      />
    );
  }
}
