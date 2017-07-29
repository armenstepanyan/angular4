import {Component, OnInit} from "@angular/core";
import {Product} from "./product";
import {ProductService} from "./product.service";
import { Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  showForm: boolean = false;
  isNewProduct: boolean;
  currentProduct: any = {};
  term: string;

  private router: Router;

  constructor(private _productService: ProductService) {
    //this.hideForm = this.hideForm.bind(this);
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().then(products => this.products = products)
  }

  showEditProductForm(product: Product){
    this.currentProduct = product;
    this.isNewProduct = false;
    this.showForm = true;
  }

  showAddProductForm(){
    this.currentProduct = {};
    this.isNewProduct = true;
    this.showForm = true;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.currentProduct.id]);
  }

  removeProduct(id: number){
    this._productService.removeProduct(id).then(resp => {
      console.log(resp);
    })
  }

  hideForm = () => {
    this.showForm = false;
  }

  updateProductList = (products) => {
    this.products = products;
    this.hideForm();
    this.term = '';
  }



}
