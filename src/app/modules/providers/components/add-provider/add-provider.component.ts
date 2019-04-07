import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})


export class AddProviderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
            private router: Router) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      providerId: [],
      name: ['',Validators.required],
      street: ['',Validators.required],
      number: [],
      neighborhood: [''],
      telephone: ['', Validators.required]
    });
  }

}
