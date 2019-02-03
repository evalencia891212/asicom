import { Costumer } from './../../../../model/costumer';
import { CustomerService } from './../../../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-edit-costumer',
  templateUrl: './edit-costumer.component.html',
  styleUrls: ['./edit-costumer.component.css']
})
export class EditCostumerComponent implements OnInit {

  costumer: Costumer;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CustomerService) { }

  ngOnInit() {
    const customerId = localStorage.getItem('editCustomerId');

    if ( !customerId ) {
      alert('Acción invalida');
      this.router.navigate(['list-customer']);
      return;
     }

  this.editForm = this.formBuilder.group({
      costumerId: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      surname: ['', Validators.required],
      key: ['', Validators.required],
      businessName: ['', Validators.required]
  });

  this.service.getCustomer(+customerId)
  .subscribe(data => {
    this.editForm.setValue(data);
  });

 }

 onSubmit() {
  this.service.updateCustomer(this.editForm.value)
    .pipe(first())
    .subscribe( data => {
      this.router.navigate(['list-costumer']);
      console.log('');
    },
    error => {
      alert(error);
    });
}

}
