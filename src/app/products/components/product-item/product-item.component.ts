import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from 'src/app/viewModels/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() products!:product
  @Output() prod= new EventEmitter();
  addButton:boolean=false
  ammount:number=0;

  constructor()
  {

  }
 ngOnInit(): void {
  
 }
 Add() {
  this.prod.emit({ product: this.products, quantity: this.ammount });
  this.addButton=true
}

}
