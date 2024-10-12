
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SelectComponent } from './components/select/select.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    SelectComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([])
 
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsModule { }
