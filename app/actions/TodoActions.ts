import * as Rx from "rxjs";

export default {
  add$: new Rx.Subject<string>(),
  updateTitle$: new Rx.Subject(),
};
