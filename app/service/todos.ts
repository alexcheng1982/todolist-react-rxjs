import { ITodo, ITodoList } from '../model/todo';
import { Observable } from 'rxjs/Rx';

export interface TodosService {
  list(): Observable<ITodo>;
}
