import * as uuid from 'node-uuid';
import { ITodo } from './todo';


export class TodoImpl implements ITodo {
  id: string;
  description: string;
  private completed: boolean = false;
  private lastUpdatedAt: number = new Date().getTime();

  constructor(description: string) {
    this.id = uuid.v4();
    this.description = description;
  }

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