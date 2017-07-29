import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app.routing';
import { ProductService } from './products/product.service';
import { FormComponent } from './form/form.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { FilterPipe } from './filters/filter.pipe';
import { SearchFilterPipe } from './filters/search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavComponent,
    FormComponent,
    ProductItemComponent,
    FilterPipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
