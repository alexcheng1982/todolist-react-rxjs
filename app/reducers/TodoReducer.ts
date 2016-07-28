import * as Rx from 'rxjs';

import TodoActions from '../actions/TodoActions';
import { TodoImpl } from '../model/todo.impl';

export default Rx.Observable.merge(
  TodoActions.add$.map(value => {
    return (state: any) => {
      state.todos.push(new TodoImpl(value));
      return state;
    };
  })
);
