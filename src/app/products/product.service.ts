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

  getProducts(): Promise<Product[]>{
    return Promise.resolve(this.pItems);
  }

  addProduct(product: Product) : Promise<any>{
    this.pItems.push(product);
    let resp = {
      data: this.pItems,
      success: true
    };
    return Promise.resolve(resp);

  }

  getSingeProduct(id: number): Promise<Product>{
    return this.getProducts()
        .then(products => products.find(product => product.id == id))

  }

  saveData(product: Product): Promise<any>{
    let resp = {
      status: true
    };
    return Promise.resolve(resp);
  }

  removeProduct(id: number): Promise<Product[]>{
    let index = this.findId(id, this.pItems);
    this.pItems.splice(index,1);

    return this.getProducts();
  }

  updateProduct(product: Product){
    let index = this.findId(product.id, this.pItems);

    this.pItems[index] = product;
  }

  findId(id: number ,products: Product[]){
    var index = -1;
    products.map((product, _index) => {
      if(product.id === id){
        index = _index;
      }
    });
    return index;
  }

}
