import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  show = true; 
  data = ['anji','babu','sri','honey'];
  hide = false;
  num = [1,2,3,4,5,6,7];
  movies = ['RRR','LEO','pushpa','skanda','veera'];
  student = [  
    {  
       name:'arun',
       gender:'Male',
       physics:88,
       maths:87,
       english:78
    },
    {  
       name:'rajesh',
       gender:'Male',
       physics:96,
       maths:100,
       english:95
    },
    {  
       name:'moorthy',
       gender:'Male',
       physics:89,
       maths:90,
       english:70
    },
    {  
       name:'raja',
       gender:'Male',
       physics:30,
       maths:25,
       english:40
    },]


    //  pipes code
    wish = "good morning";
    wishes = "hbday";
    person = {"name":"anji","gender":"m"};

    // Template reference variable  example used starts here

    email: string = "";
    updatemail(d:any){
      this.email = d.value;
    }
}
