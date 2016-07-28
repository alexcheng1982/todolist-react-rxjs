import * as React from 'react';
import state$ from '../state';
import bindAction from '../state/bindAction';
import connect from '../state/connect';
import TodoActions from '../actions/TodoActions';
import { ITodo } from '../model/todo';
import TodoListComponent from './TodoList';
import TodoInput from './TodoInput';

interface IProps {
  add: (title: string) => void;
  todos: ITodo[];
}

interface IState {
  title: string;
}

export class TodoComponent extends React.Component<IProps, IState> {
  add(description: string) {
    this.props.add(description);
  }

  handleTitleChange(event: any) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <TodoListComponent todos={ this.props.todos } />
        <TodoInput add={this.add.bind(this)}/>
      </div>
    );
  }
}

export default connect(state$, state => ({
  todos: state.todos,
  add: bindAction(TodoActions.add$),
}))(TodoComponent);
