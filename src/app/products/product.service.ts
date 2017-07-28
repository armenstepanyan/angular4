import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService{

  pItems = [
    {
      id: 1,
      name: 'Scissors',
      description: 'some description',
      price: 4.99
    },
    {
      id: 2,
      name: 'Test',
      description: 'some test description',
      price: 6.4
    }
  ];

  getProducts(): Product[]{
    return this.pItems;
  }

  addProduct(product: Product){
    this.pItems.push(product);
  }

  updateProduct(product: Product){
    let index = this.findId(product.id, this.pItems);
    console.log(index);
    this.pItems[index] = product;
  }

  findId(id: number ,products: Product[]){
    var index = -1;
    products.map((product) => {
      if(product.id === id){
        index = id;
      }
    });
    return index;
  }

}
