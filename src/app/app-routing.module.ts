import { ListUnitComponent } from './modules/mesure-unit/components/list-unit/list-unit.component';
import { EditCostumerComponent } from './modules/costumers/components/edit-costumer/edit-costumer.component';
import { ListCostumerComponent } from './modules/costumers/components/list-costumer/list-costumer.component';
import { AddCostumerComponent } from './modules/costumers/components/add-costumer/add-costumer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { ListProductsComponent } from './modules/products/component/list-products/list-products.component';
import { AddUnitComponent } from './modules/mesure-unit/components/add-unit/add-unit.component';
import { EditUnitComponent } from './modules/mesure-unit/components/edit-unit/edit-unit.component';
import { AddProductComponent } from './modules/products/component/add-product/add-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'list-costumer', component: ListCostumerComponent},
  { path: 'edit-costumer', component: EditCostumerComponent},
  { path: 'add-costumer', component: AddCostumerComponent},
  { path: 'list-unit', component: ListUnitComponent},
  { path: 'add-unit', component: AddUnitComponent},
  { path: 'edit-unit', component: EditUnitComponent},
  { path: 'list-products', component: ListProductsComponent},
  { path: 'add-products', component: AddProductComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
