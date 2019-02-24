import { CustomerService } from './../../../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-costumer',
  templateUrl: './add-costumer.component.html',
  styleUrls: ['./add-costumer.component.css']
})
export class AddCostumerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private service: CustomerService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      costumerId: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      surname: ['', Validators.required],
      key: ['', Validators.required],
      businessName: ['', Validators.required]
    });
  }

  onSubmit() {
  this.service.createCustomer( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-costumer']);
        console.log('Cliente creado con éxito');
      });
    }

}
