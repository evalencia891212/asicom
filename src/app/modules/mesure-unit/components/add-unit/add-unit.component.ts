import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private service: UnitService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      unitId: [],
      name: ['', Validators.required],
      pluralName: ['', Validators.required],
      prefix: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.createUnit( this.addForm.value )
    .subscribe(data => {
      this.router.navigate(['list-unit']);
      console.log('Unidad creada con éxito');
    });
  }

}
