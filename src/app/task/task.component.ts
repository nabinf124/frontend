import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      },
      (error) => {
        console.error('Error fetching tasks: ', error);
      }
    );
  }

  addTask() {
    // Implement the addTask method here
    console.log('Adding a new task');
  }

  deleteTask(task: Task) {
    // Implement the deleteTask method here
    console.log('Deleting task:', task);
  }

  editTask(task: Task) {
    // Implement the editTask method here
    console.log('Editing task:', task);
  }

  updateTask(task: Task) {
    // Implement the updateTask method here
    console.log('Updating task:', task);
  }
}
