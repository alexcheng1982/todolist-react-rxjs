import * as Rx from 'rxjs';

import TodoActions from '../actions/TodoActions';

export default Rx.Observable.merge(
  TodoActions.add$.map(value => {
    return (state: any) => {
      state.todos.push({title: value});
      return state;
    }
  })
);