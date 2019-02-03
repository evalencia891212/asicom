import { User } from './../model/user';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userUrl = 'localhost:8080/v1/user';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _http: HttpClient) { }

  getUser(userName: string): Observable<User[]> {
     return this._http
     .get('http://localhost:8080/v1/user/' + userName, {headers: this.httpHeaders}).pipe(
      map(data => data as User[])
      );
  }
}
