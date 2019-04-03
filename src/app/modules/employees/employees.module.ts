import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import * as Material from "@angular/material";

@NgModule({
  declarations: [AddEmployeeComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
