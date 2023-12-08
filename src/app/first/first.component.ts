import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

// string interpolation starts
data = "Hanuma"
path = "../assets/hanuman.jpg";

// string interpolation ends

// property binding starts

isdisabled : boolean = false;
ishidden : boolean = false;

// property binding ends


//  event binding starts

count:number = 0;

increment(){
this.count+= 1;
}

decrement(){
  this.count-= 1;
}

name : string = "Anji Babu"

changename(e:any){
  this.name = e.target.value;
}

//  event binding ends

// two way data binding starts here

city : string = "Hyderabad";

updatecity(){
  this.city = "bangalore";
}

//  Two way data binding ends here

}
