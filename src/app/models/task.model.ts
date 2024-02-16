// task.model.ts
import { User } from './user.model';

export class Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  user: User;

  constructor(id: number, title: string, description: string, completed: boolean, user: User) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.user = user;
  }
}
