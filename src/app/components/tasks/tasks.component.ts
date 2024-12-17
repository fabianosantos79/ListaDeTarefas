import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent implements OnInit {

  tarefas: Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
      this.taskService.getTask().subscribe(task => {
        this.tarefas = task;
       })
    }
  }
