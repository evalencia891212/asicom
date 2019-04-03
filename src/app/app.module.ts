
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { AddCostumerComponent } from './modules/costumers/components/add-costumer/add-costumer.component';
import { EditCostumerComponent } from './modules/costumers/components/edit-costumer/edit-costumer.component';
import { ListCostumerComponent } from './modules/costumers/components/list-costumer/list-costumer.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddUnitComponent } from './modules/mesure-unit/components/add-unit/add-unit.component';
import { EditUnitComponent } from './modules/mesure-unit/components/edit-unit/edit-unit.component';
import { ListUnitComponent } from './modules/mesure-unit/components/list-unit/list-unit.component';
import { ModulesComponent } from './modules/modules.component';
import { ListProductsComponent } from './modules/products/component/list-products/list-products.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { UnitService } from './services/unit.service';
import { CustomerService } from './services/customer.service';
import { AddProductComponent } from './modules/products/component/add-product/add-product.component';
import { EmployeesRoutingModule } from './modules/employees/components/employees-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCostumerComponent,
    EditCostumerComponent,
    ListCostumerComponent,
    AddUnitComponent,
    EditUnitComponent,
    ListUnitComponent,
    ModulesComponent,
    ListProductsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    EmployeesRoutingModule
  ],
  providers: [UserService, CustomerService, UnitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
