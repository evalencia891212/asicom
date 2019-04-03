import { Product } from './../../../../model/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    console.log('Agregar unidad');
    this.router.navigate(['add-products']);
  }

  editProduct(product: Product) {

  }

  deleteProduct(product: Product) {

  }

}
