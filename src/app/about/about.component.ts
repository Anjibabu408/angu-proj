import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

constructor(private ts:TestService){
  console.log(this.ts.mobiles)
  console.log(this.ts.student)
}

mobile = this.ts.mobiles;
student = this.ts.student
}
