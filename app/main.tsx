import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TodosServiceImpl } from './service/todos.impl';
import TodoListComponent from './components/TodoList';

let todosService: TodosServiceImpl = new TodosServiceImpl();

ReactDOM.render(
  <TodoListComponent todoList={todosService.list()}/>,
  document.getElementById('app')
);
