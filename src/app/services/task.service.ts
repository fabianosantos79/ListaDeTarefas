import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private readonly API = environment.apiUrl

  constructor(private http: HttpClient) { }

  getTask():Observable<Task []>{
    return this.http.get<Task []>(this.API);
  }
}
