import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})

export class TaskItemComponent {
@Input() tarefaCompleta!:Task
@Output() onDeleteTask = new EventEmitter<Task>();
@Output() onToggleFinish = new EventEmitter<Task>();

onDelete(tarefaCompleta: Task){
  const confirmacao = confirm("Deseja excluir essa tarefa?")
  if(confirmacao){
    this.onDeleteTask.emit(tarefaCompleta);
  }
}

onToggle(tarefaCompleta: Task){
  this.onToggleFinish.emit(tarefaCompleta);
}
}
