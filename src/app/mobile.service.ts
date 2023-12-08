import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor() { }
  
  mobiles = [
    {
      Name : "Real me",
      Price : 12000,
      Ram : "6GB",
      Storage : "128GB"
    },
    {
      Name : "Red me",
      Price : 16000,
      Ram : "8GB",
      Storage : "128GB"
    },
    {
      Name : "iQoo",
      Price : 22000,
      Ram : "12GB",
      Storage : "256GB"
    }
  ]
deletemobile(index: number){
  this.mobiles.splice(index,1)
}
}
