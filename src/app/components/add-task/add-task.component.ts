import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Task } from '../../models/Task';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  tarefa: string ="";
  categoria: string = "";
  finish: boolean = false;
  @Output() onAddTask = new EventEmitter<Task>();
  showForm: boolean = false;

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

  alteraVisualizacao(valor: boolean){
    this.showForm = valor;
  }
}
