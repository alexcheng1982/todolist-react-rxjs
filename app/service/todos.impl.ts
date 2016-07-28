import { TodosService } from './todos';
import { ITodo, ITodoList } from '../model/todo';
import { TodoImpl, TodoListImpl } from '../model/todo.impl';
import { Observable } from 'rxjs/Rx';

let list:TodoListImpl = new TodoListImpl();
let todo1:TodoImpl = new TodoImpl();
todo1.id = '1';
todo1.description = 'Todo - 1';
list.addTodo(todo1);

let todo2:TodoImpl = new TodoImpl();
todo2.id = '2';
todo2.description = 'Todo - 2';
todo2.markAsCompleted();
list.addTodo(todo2);

export class TodosServiceImpl implements TodosService {
  list(): Observable<ITodo> {
    return Observable.of(todo1, todo2);
  }
}
