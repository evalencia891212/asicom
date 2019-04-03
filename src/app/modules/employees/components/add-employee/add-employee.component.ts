import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private service: EmployeeService) { }


  addForm: FormGroup; 
              

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      employeeId: [],
      firstName:new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      departamentId: new FormControl(0),
      userId: new FormControl(0)
    });
  }

}
