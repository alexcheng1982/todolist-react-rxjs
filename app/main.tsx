/// <reference path="../node_modules/rxjs/Rx.d.ts" />
/// <reference types="es6-promise" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import App from './containers/App';
// import { TodosServiceImpl } from './service/todos.impl';

// let todosService: TodosServiceImpl = new TodosServiceImpl();

// ReactDOM.render(
//   <App todoList={todosService.list()}/>,
//   document.getElementById('app')
// );

import TodoApp from './containers/TodoApp';

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
