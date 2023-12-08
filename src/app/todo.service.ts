import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todolist = [
    {"id":1, "taskname":"task1"},
    {"id":2, "taskname":"task12"},
    {"id":3, "taskname":"task13"}
  ]
  
  taskid = 4;
  // taskname = "";

  addTodo(taskname: string){
    this.todolist.push({'id':this.taskid++,'taskname':taskname})
  }
  
  deleteTodo(index: number){
    this.todolist.splice(index,1)
  }
}
