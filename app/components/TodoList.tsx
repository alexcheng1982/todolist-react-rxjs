import * as React from 'react';
import { Todo, TodoList } from '../model/todo';
import TodoItemComponent from './TodoItem';

interface Props {
  todoList: TodoList;
}

export default class TodoListComponent extends React.Component<Props, {}> {
  render(): React.ReactElement<{}> {
    return (
      <ul>
        {
          this.props.todoList.getTodos().map(todo => <TodoItemComponent key={todo.id} todo={todo}/>)
        }
      </ul>
    );
  }
}
