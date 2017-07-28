import {Component, OnInit, Input, Output} from '@angular/core';
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
  @Input() callback: Function;
  @Input() updateList: Function;

  productCopy: Product ;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.productCopy = {...this.product};
    console.log(this.productCopy);
  }

  saveProduct(product: Product){
    debugger;
      this._productService.addProduct(product).then(resp => {
        if(resp.success){
            this.updateList(resp.data);
        }
        else{
          //display error
        }
      });
  }

  cancel(){
    this.callback();
  }

}
