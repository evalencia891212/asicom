import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData:Employee

  private baseUrl = 'http://localhost:8080/v1/employee';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor() { }

  

}
