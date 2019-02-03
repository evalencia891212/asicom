import { Costumer } from './../model/costumer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/v1/customer';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor( private http: HttpClient ) {
    console.log('Servicio Customer Funcionando');
  }

  getCustomers(): Observable<Costumer[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Costumer[])
    );
  }

  getCustomer(id: number): Observable<Costumer> {
    return this.http.get<Costumer>(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Costumer): Observable<Costumer> {
    return this.http.put<Costumer>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  updateCustomer(customer: Costumer): Observable<Costumer> {
    return this.http.put<Costumer>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  deleteCustomer(id: number): Observable<Costumer> {
    return this.http.delete<Costumer>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }

}
