import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userUrl = 'http://www.weaterapi.somee.com/Cities/getCitiesList';

  constructor(private _http: HttpClient) { }

  getUser() {
    return this._http
    .get(this.userUrl);
  }
}
