import * as Rx from "rxjs";

export default function createState(reducer$, initialState$ = Rx.Observable.of({})) {
  return initialState$
    .merge(reducer$)
    .scan((state, reducer: (state: any) => any) => reducer(state))
    .publishReplay(1)
    .refCount();
};
