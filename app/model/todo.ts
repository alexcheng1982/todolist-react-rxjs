export interface Todo {
  id: string;
  description: string;
  isCompleted(): boolean;
  getLastUpdatedAt(): number;
  markAsCompleted(): void;
  markAsUncompleted(): void;
}

export interface TodoList {
  getTodos(): Array<Todo>;
  addTodo(todo: Todo): TodoList;
  removeTodo(todoId: string): TodoList;
}
