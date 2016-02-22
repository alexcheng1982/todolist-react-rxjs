import { Todo, TodoList } from '../model/todo';
import { Observable } from 'rxjs/Rx';

export interface TodosService {
  list(): Observable<Todo>;
}
