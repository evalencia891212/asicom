import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from './../model/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  private baseUrl = 'http://localhost:8080/v1/product';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get(this.baseUrl)
      .pipe(
        map(data => data as Product[])
      );
  }

  getProduct(id: number) : Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Product) : Observable<Product>{
    debugger
    return this.http.put<Product>(this.baseUrl,
                                  product,
                                  {headers:this.httpHeaders});
  }

  updateProduct(product: Product): Observable<Product>{
    return this.http.put<Product>(this.baseUrl,product,{headers:this.httpHeaders});
  }

  deleteProduct(id: number){
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }

}
