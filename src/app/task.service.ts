import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8085/api/v1/tasks';
  private username = 'admin'; // Hardcoded username
  private password = 'admin'; // Hardcoded password

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(this.username + ':' + this.password));

    return this.http.get<Task[]>(this.apiUrl, { headers });
  }
}
