import { CustomerService } from './../../../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-costumer',
  templateUrl: './add-costumer.component.html',
  styleUrls: ['./add-costumer.component.css']
})
export class AddCostumerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private service: CustomerService,
              private toastr: ToastrService) { }

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
        //console.log('Cliente creado con éxito');
        //this.toastr.success('Inserted successfully', 'Cliente creado con éxito');
        this.toastr.info('Updated successfully', 'EMP. Register');
        
      });
     
    }

}
