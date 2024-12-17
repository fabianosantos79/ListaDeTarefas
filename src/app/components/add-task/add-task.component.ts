import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  tarefa: string ="";
  categoria: string = "";
  finish: boolean = false;
  @Output() onAddTask = new EventEmitter<Task>();
  showForm: boolean = true;

  onSubmit(){
    if(!this.tarefa || !this.categoria){
      alert("Por favor, adicione uma tarefa");
      return;
    }
    
    const novaTarefa = {
      task: this.tarefa,
      category: this.categoria,
      finish: false
    }
  
    this.onAddTask.emit(novaTarefa);

    this.tarefa = "";
    this.categoria = "";
    this.finish = false;
  }
}
