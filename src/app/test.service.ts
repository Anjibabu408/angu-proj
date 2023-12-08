import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
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
    },
  ]

  mobiles = ["realme", "redmi","vivo","oppo"]


}
