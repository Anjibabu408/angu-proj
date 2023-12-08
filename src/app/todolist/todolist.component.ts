import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  constructor(private ts:TodoService){}

  tdlist :any = "";

  ngOnInit(){

  this.tdlist = this.ts.todolist
}

removetodo(index: number){
  this.ts.deleteTodo(index)
}
}