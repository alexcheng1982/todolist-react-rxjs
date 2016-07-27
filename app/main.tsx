/// <reference path="../node_modules/rxjs/Rx.d.ts" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="es6-promise" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TodoApp from "./containers/TodoApp";

ReactDOM.render(
  <TodoApp/>,
  document.getElementById("app")
);
