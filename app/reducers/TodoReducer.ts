import * as Rx from 'rxjs';
// import * as uuid from 'node-uuid';
import * as find from 'lodash.find';
import TodoActions from '../actions/TodoActions';

export default Rx.Observable.merge(
  TodoActions.add$.map(value => {
    return (state: any) => {
      state.todos.push({
        id: 'id',
        description: value
      });
      return state;
    };
  }),
  TodoActions.updateStatus$.map((value: any) => {
    return (state: any) => {
      let todo = find(state.todos, ['id', value.id]);
      if (todo) {
        todo.completed = value.completed;
      }
      return state;
    };
  })
);
