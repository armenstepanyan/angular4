import {Component, OnInit} from "@angular/core";
import {Product} from "../product";
import {ProductService} from "../product.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-products-item',
    templateUrl: './product-item.component.html',
    styleUrls: []
})

export class ProductItemComponent implements OnInit {

    product: Product;
    isNewProduct: boolean = false;


    constructor(
        private _productService: ProductService,
        private location: Location,
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
             this._productService.getSingeProduct(+params['id']).then(product => this.product = product);

        });
    }

    goBack(){
        this.location.back();
    }

    saveProduct(product: Product){
        this._productService.saveData(product).then(resp => {
            if(resp.status === true){

                this.router.navigateByUrl('/products');
            }
            else{
                //display error
            }
        })
    }



}