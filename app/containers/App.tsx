import * as React from "react";
import { Observable } from "rxjs/Rx";
import TodoListComponent from "../components/TodoList";
import { ITodo, ITodoList } from "../model/todo";
import { TodoImpl, TodoListImpl } from "../model/todo.impl";
import { TodosServiceImpl } from "../service/todos.impl";

interface AppProps {
  todoList: Observable<ITodo>;
}

interface AppState {
  todoList: ITodoList;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor() {
    super()
    this.state = {
      todoList: new TodoListImpl()
    };
  }

  componentWillMount(): void {
    this.props.todoList.subscribe(
      (todo) => {
        this.state.todoList.addTodo(todo);
        this.setState(this.state);
      }
    );
  }

  render(): React.ReactElement<{}> {
    return (
      <TodoListComponent todoList={this.state.todoList}/>
    );
  }
}
