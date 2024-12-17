import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';
import { TaskItemComponent } from "../task-item/task-item.component";
import { AddTaskComponent } from "../add-task/add-task.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent, AddTaskComponent],
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

    addTask(novaTarefa: Task){
      return this.taskService.addTask(novaTarefa).subscribe(tarefa => {
        this.tarefas.push(tarefa);
      });
    }

    deleteTask(tarefa: Task){
      this.taskService.deleteTask(tarefa).subscribe(() => {
        this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
      });
    }

    toggleFinish(tarefa: Task) {
      tarefa.finish = !tarefa.finish;
      this.taskService.updateTask(tarefa).subscribe();
    }
  }
