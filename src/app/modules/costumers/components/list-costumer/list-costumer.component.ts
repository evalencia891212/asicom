import { CustomerService } from './../../../../services/customer.service';
import { Costumer } from './../../../../model/costumer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-costumer',
  templateUrl: './list-costumer.component.html',
  styleUrls: ['./list-costumer.component.css']
})
export class ListCostumerComponent implements OnInit {

  costumers: Costumer[];

  constructor(private router: Router,
              private service: CustomerService) { }

  ngOnInit() {
    this.service.getCustomers().subscribe(data => (this.costumers = data));
  }

  addCustomer() {
    this.router.navigate(['add-costumer']);
  }

  editCustomer(customer: Costumer ): void {
    localStorage.removeItem('editCustomerId');
    localStorage.setItem('editCustomerId', customer.costumerId.toString());
    this.router.navigate(['edit-costumer']);
  }

  deleteCustomer(customer: Costumer): void {
    this.service.deleteCustomer(customer.costumerId).subscribe(data => {
      this.costumers = this.costumers.filter(c => c !== customer);
    });
    console.log('Se ha eliminado el cliente.');
  }


}
