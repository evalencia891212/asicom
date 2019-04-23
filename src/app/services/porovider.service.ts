import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Provider} from './../model/provider';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoroviderService {

  private baseUrl = 'http://localhost:8080/v1/provider';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  
  providers: Provider[];


  constructor(private http: HttpClient ) { }

  getProviders(): Observable<Provider[]>{
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Provider[])
     );
  }

  getProvider(id: number): Observable<Provider>
  {
    return this.http.get<Provider>(`${this.baseUrl}/${id}`);
  }

  createProvider(provider: Provider): Observable<Provider>{
    return this.http.put<Provider>(this.baseUrl, provider, {headers: this.httpHeaders});
  }

  updateProvider(provider: Provider): Observable<Provider>{
    return this.http.put<Provider>(this.baseUrl,provider,{headers: this.httpHeaders});
  }

  deleteProvider(id: number): Observable<Provider> {
    return this.http.delete<Provider>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }

}
