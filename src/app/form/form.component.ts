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
  @Input() callback: Function;
  @Input() updateList: Function;

  isNewProduct: boolean = true; 

  constructor(private _productService: ProductService) { }

  ngOnInit() {    
    console.log(this.product);
  }

  saveProduct(product: Product){
   
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
