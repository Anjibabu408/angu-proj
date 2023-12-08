import { Component } from '@angular/core';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-curdoparation',
  templateUrl: './curdoparation.component.html',
  styleUrls: ['./curdoparation.component.css']
})
export class CurdoparationComponent {

  constructor(private ms:MobileService){}
  mobile = true;
  mobiledata : any = "";
  mobileName : string = "";
  Storage  = "";
  Ram = "";
  Price = ""
  showform = false;
  ngOnInit(){
    this.mobiledata = this.ms.mobiles
  }
removemobile(index: number){
  this.ms.deletemobile(index)
}
openform(mobiledata: any){
  this.showform = true;
  if(mobiledata){
    this.mobileName = this.mobiledata.Name;
    this.Price = this.mobiledata.Price;
    this.Ram = this.mobiledata.Ram;
    this.Storage = this.mobiledata.Storage;
  }
}
editform(){
  this.showform = true;
  if(this.mobiledata){
    this.mobileName = this.mobiledata.Name;
    this.Price = this.mobiledata.Price;
    this.Ram = this.mobiledata.Ram;
    this.Storage = this.mobiledata.Storage;
  }
}
closeform(){
  this.showform = false;
}
  }
