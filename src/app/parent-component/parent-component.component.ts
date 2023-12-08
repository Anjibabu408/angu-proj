import { Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {

// parent to child data communication
  
pdata :string = "parent to child data";
pdata1 = [1,2,3,4,5,6,7,8];

// child data coming---

parentdata = "";

// viewchild using

@ViewChild(ChildComponentComponent) child:  any ;

vichild = "";

test(){
  console.log(this.child.viewchilddata)
  this.vichild = this.child.viewchilddata;

}

}
