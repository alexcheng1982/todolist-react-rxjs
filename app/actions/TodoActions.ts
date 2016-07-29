import * as Rx from "rxjs";

export default {
  add$: new Rx.Subject<string>(),
  updateStatus$: new Rx.Subject(),
};
