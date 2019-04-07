import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import * as Material from "@angular/material";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

@NgModule({
  declarations: [AddEmployeeComponent, ListEmployeesComponent],
  imports: [
    CommonModule,
    Material.MatGridListModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    Material.MatGridListModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeesModule { }
