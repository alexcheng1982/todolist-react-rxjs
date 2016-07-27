import * as Rx from "rxjs";

import createState from "./state/createState";
import TodoReducer$ from "./reducers/TodoReducer";

const reducer$ = Rx.Observable.merge(
  TodoReducer$
);

const initialState$ = Rx.Observable.of({ todos: [] });

export default createState(reducer$, initialState$);
