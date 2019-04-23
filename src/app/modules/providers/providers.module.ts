import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as Material from "@angular/material";
import { ProviderComponent } from './components/provider/provider.component';
import { ListProvidersComponent } from './components/list-providers/list-providers.component';


@NgModule({
  declarations: [AddProviderComponent, ProviderComponent, ListProvidersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatPaginatorModule,
    Material.MatTableModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatTableModule
  ]
})
export class ProvidersModule { }
