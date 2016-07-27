import * as React from 'react';
import state$ from '../state';
import bindAction from '../state/bindAction';
import connect from '../state/connect';
import TodoActions from '../actions/TodoActions';

interface IProps {
  add: (title: string) => void;
  todos: any[]
}

interface IState {
  title: string
}

export class TodoComponent extends React.Component<IProps, IState> {
  constructor() {
    super()
  }

  add() {
    this.props.add(this.state.title);
  }

  handleTitleChange(event: any) {
    this.setState({
      title: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Todos: { this.props.todos.map(todo => todo.title).join(',') }</h1>
        <input type="text" onChange={this.handleTitleChange.bind(this)} />
        <button onClick={this.add.bind(this)}>Add</button>
      </div>
    );
  }
}

export default connect(state$, state => ({
  todos: state.todos,
  add: bindAction(TodoActions.add$)
}))(TodoComponent);