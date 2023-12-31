import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value: number,param:string): number 
  {
    let mul=parseFloat(param);
    return value * mul;
  }

}
