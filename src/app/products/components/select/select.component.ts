import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/viewModels/product';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

 @Input() categories1!:string[]
 @Output() categoryName= new EventEmitter();
constructor(private services:ProductService,private toastr: ToastrService,private spinner: NgxSpinnerService){}
  ngOnInit(): void {

  }



FilterProduct(event:any)
{
this.categoryName.emit(event);

}


}
