import { CustomerService } from './../../../../clientesREST/src/app/services/customer.service';
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

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCostumerComponent,
    EditCostumerComponent,
    ListCostumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
