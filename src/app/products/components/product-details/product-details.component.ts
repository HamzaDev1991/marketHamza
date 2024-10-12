import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/viewModels/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit{
id:any
proddect:any
constructor(private services:ProductService,private rout:ActivatedRoute,private spinner: NgxSpinnerService)
{
  this.id= this.rout.snapshot.paramMap.get("id");
  

}
  ngOnInit(): void {
  this.getproductById();
  }

  getproductById()
  {
    this.spinner.show();
return this.services.getProductsById(this.id).subscribe((res:any)=>
  {
   this.proddect=res 
   setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 500);
  })

  }
}
