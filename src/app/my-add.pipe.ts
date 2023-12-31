import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number,param:string): number 
  {
    let add=parseFloat(param);
    return value+add;
  }

}
