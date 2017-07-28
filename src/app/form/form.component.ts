import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products/product';
import {ProductService} from "../products/product.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
})

export class FormComponent implements OnInit {
  @Input() product: Product;
  @Input() isNewProduct: boolean;
  @Input() showForm: boolean;
  productCopy: Product ;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.productCopy = {...this.product};
    console.log(this.productCopy);
  }

  saveProduct(product: Product){
    if(this.isNewProduct){
      this._productService.addProduct(product);

    }
    else{
      this._productService.updateProduct(product);
    }
    this.showForm = false;
  }

  cancel(){
    //this.product = this.productCopy;
    this.showForm = false;
  }

}
