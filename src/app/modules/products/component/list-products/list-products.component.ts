import { Product } from './../../../../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
  }

  editProduct(product: Product) {

  }

  deleteProduct(product: Product) {

  }

}
