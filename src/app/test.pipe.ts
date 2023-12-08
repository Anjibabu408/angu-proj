import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(p: any, wish:string,wishes:string): any {
console.log(p.name);
console.log(wish);
console.log(wishes);
     if(p.gender == "m"){
      return `Hello Mr ${p.name} ${wish} ${wishes}`
    }
    else{
      return `Hello Miss ${p.name} ${wish} ${wishes}`
    }
  }

}
