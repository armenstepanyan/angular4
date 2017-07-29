import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return (value.length > 50) ? value.substring(0, 50) + '...' : value;
  }

}
