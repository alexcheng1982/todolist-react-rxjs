export interface ITodo {
  id: string;
  description: string;
  isCompleted(): boolean;
  getLastUpdatedAt(): number;
  markAsCompleted(): void;
  markAsUncompleted(): void;
}
