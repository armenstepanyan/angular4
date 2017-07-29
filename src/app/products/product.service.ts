import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService{

  pItems = [
    {
      id: 1,
      name: 'iPhone 7',
      description: 'iPhone 7 now has the best performance and battery life ever, as well as new finishes, water resistance, and stereo speakers.',
      price: 847.99
    },
    {
      id: 2,
      name: 'Samsung Galaxy S7',
      description: 'Experience the Galaxy S7 & Galaxy S7 edge water resistant phones and discover features and specs like amazing images, enhanced cameras and more',
      price: 729.66
    }
  ];

  getProducts(): Promise<Product[]>{
    return Promise.resolve(this.pItems);
  }

  addProduct(product: Product) : Promise<any>{    
    product.id = Math.floor(100 * Math.random());
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
