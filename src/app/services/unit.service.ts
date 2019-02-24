import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MesureUnit } from './../model/mesure-unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor( private http: HttpClient ) { }

  private baseUrl = 'http://localhost:8080/v1/unit';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getUnits(): Observable<MesureUnit[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as MesureUnit[])
    );
  }

  getUnit(unitId: number): Observable<MesureUnit> {
    return this.http.get<MesureUnit>(`${this.baseUrl}/${unitId}`);
  }

  createUnit(unit: MesureUnit): Observable<MesureUnit> {
    return this.http.put<MesureUnit>(this.baseUrl, unit, {headers: this.httpHeaders});
  }

  updateUnit(unit: MesureUnit): Observable<MesureUnit>  {
    return this.http.put<MesureUnit>(this.baseUrl, unit, {headers: this.httpHeaders});
  }

  deleteUnit(unitId: number): Observable<MesureUnit> {
    return this.http.delete<MesureUnit>(`${this.baseUrl}/${unitId}`, {headers: this.httpHeaders});
  }


}
