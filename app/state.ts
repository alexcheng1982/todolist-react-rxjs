import * as Rx from "rxjs";

import createState from "./state/createState";
import TodoReducer$ from "./reducers/TodoReducer";
import store from './services/store';

const reducer$ = Rx.Observable.merge(
  TodoReducer$
);

const initialState$ = Rx.Observable.of({ todos: store.load() });

let $state = createState(reducer$, initialState$);

$state.subscribe(state => store.save(state.todos));

export default $state;