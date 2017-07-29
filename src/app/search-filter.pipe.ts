import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(products: any, term?: any): any {
    if(!term) return products;

    return products.filter(product => {
      return product.name.toLowerCase().includes(term.toLowerCase())
    })
  }

}
