import { Task } from "./task.model";

// user.model.ts
export class User {
  id: number;
  username: string;
  role: string;
  tasks: Task[];

  constructor(id: number, username: string, role: string, tasks: Task[]) {
    this.id = id;
    this.username = username;
    this.role = role;
    this.tasks = tasks;
  }
}
