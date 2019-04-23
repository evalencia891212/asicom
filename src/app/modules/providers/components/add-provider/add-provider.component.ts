import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoroviderService } from 'src/app/services/porovider.service';
import { Provider } from './../../../../model/provider';


@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})


export class AddProviderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private service : PoroviderService) { }

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

  onSubmit() {
    this.service.createProvider(this.addForm.value)
    .subscribe(data => {
      this.service.getProviders().subscribe(data => (this.service.providers = data));
    });
  }

  onClear(){
    
  }

}
