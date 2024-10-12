import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from '../products/products.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    FormsModule
 
    
  ],
  exports:
  [
    HeaderComponent
  ]
})
export class SharedModule { }
