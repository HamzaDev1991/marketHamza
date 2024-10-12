import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts()
  {
  return this.http.get(environment.baseUrl+'products')
  }

  getAllCategories()
  {
    return this.http.get(environment.baseUrl+'products/categories')

  }

  //'https://fakestoreapi.com/products/category/jewelery

  getProductsByCategory(categoryName:string)
  {
    return this.http.get(environment.baseUrl+'products/category/'+categoryName)

  }

  //products/1

  getProductsById(id:number)
  {
    return this.http.get(environment.baseUrl+'products/'+id)

  }
}
