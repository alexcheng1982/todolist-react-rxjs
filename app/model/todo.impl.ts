import { Todo, TodoList } from './todo';

export class TodoImpl implements Todo {
  id: string;
  description: string;
  private completed: boolean = false;
  private lastUpdatedAt: number = new Date().getTime();

  isCompleted() {
    return this.completed;
  }

  markAsCompleted() {
    this.completed = true;
    this.updated();
  }

  markAsUncompleted() {
    this.completed = false;
    this.updated();
  }

  getLastUpdatedAt() {
    return this.lastUpdatedAt;
  }

  private updated() {
    this.lastUpdatedAt = new Date().getTime()
  }
}

export class TodoListImpl implements TodoList {
  private todos:Array<Todo> = [];
  getTodos() {
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
    return this;
  }
  removeTodo(todoId: string) {
    return this;
  }
}
