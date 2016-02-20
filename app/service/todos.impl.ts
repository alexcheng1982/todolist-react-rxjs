import { TodosService } from './todos';
import { TodoList } from '../model/todo';
import { TodoImpl, TodoListImpl } from '../model/todo.impl';

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
  list(): TodoList {
    return list;
  }
}
