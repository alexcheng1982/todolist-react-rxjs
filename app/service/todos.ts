import { TodoList } from '../model/todo';

export interface TodosService {
  list(): TodoList;
}
