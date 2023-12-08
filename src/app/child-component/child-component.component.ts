import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

// title coming from parent

  @Input() cdata :any;
  @Input() cdata1:any;

  // data transfer child to parent

  @Output() childdata = new EventEmitter();
  
  msg = "child to parent";

  passtoparent(){
    this.childdata.emit(this.msg)
  }

  updatemsg(e:any){

    this.msg = e.target.value;

  }

    // by using template reference variable
    
    tempref = "template reference variable";

    template(){
      return this.msg;
    }

// by using view child we can share the data to child--

viewchilddata = "viewchild component data";

}
