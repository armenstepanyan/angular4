import { NgModule } from '@angular/core';

import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products',  component: ProductsComponent },
    { path: 'detail/:id', component: ProductItemComponent }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}