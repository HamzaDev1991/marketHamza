import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { ProductService } from 'src/app/services/product.service';
import { product, Rating } from 'src/app/viewModels/product';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
products:product[]=[]
categories:string[]=[]

constructor(private services:ProductService,private toastr: ToastrService,private spinner: NgxSpinnerService)
{

}
  ngOnInit(): void {
   this.getProducts();
   this.getCategories();
  }

getProducts()
{
  this.spinner.show();
  this.services.getAllProducts().subscribe((res:any)=>
    {
      this.products=res;
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 500);
 
    },err=>
      {
        this.toastr.error(err.error);
     
      })
}

getCategories()
{
  this.spinner.show();
  return this.services.getAllCategories().subscribe((res:any)=>
    {
     this.categories=res;
     setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
    })
    
}
FilterProduct(event:any)
{
  this.spinner.show();
 let categoryName = event.target.value;

 
  this.filterProductByCategoryName(categoryName);

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 500);

}

filterProductByCategoryName(categoryName:string)
{
  this.spinner.show();
  return this.services.getProductsByCategory(categoryName).subscribe((res:any)=>
    {
      if(categoryName!="all")
          this.products=res
            else
        this.getProducts();

        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 500);
    },err=>
      {
      this.toastr.error(err.error);
      }
    )

}
}