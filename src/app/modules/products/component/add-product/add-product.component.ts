import { Component, OnInit,NgModule } from '@angular/core';
import { FormBuilder,FormsModule, FormGroup, Validators } from '@angular/forms';
import { MesureUnit } from 'src/app/model/mesure-unit';
import { Router } from '@angular/router';
import { UnitService } from 'src/app/services/unit.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  units: MesureUnit[];
  addForm: FormGroup;
  public unitSelect: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router ,
              private service: UnitService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      productId: [],
      priceListId: [],
      costListId: [],
      mesureUnitId: [],
      key: ['', Validators.required],
      name: ['', Validators.required],
      factureName: ['', Validators.required],
      barCode: ['', Validators.required],
      registerDate: [],
      active: [],
      providerId: [],
      contPrice: [],
      creditPrice: []
    });
    this.service.getUnits().subscribe(mango => (this.units = mango));
  }

  onSubmit() {
  }

}
