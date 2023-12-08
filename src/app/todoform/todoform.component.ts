import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent {

  constructor(private ts:TodoService){}

  todoname = "";

  addtdtask(){
    this.ts.addTodo(this.todoname);
    this.todoname = ""
  }
  resettask(){
    this.todoname = ""
  }
}
