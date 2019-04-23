import { Component, OnInit,NgModule } from '@angular/core';
import { FormBuilder,FormsModule, FormGroup, Validators } from '@angular/forms';
import { MesureUnit } from 'src/app/model/mesure-unit';
import { Router } from '@angular/router';
import { UnitService } from 'src/app/services/unit.service';
import { PoroviderService } from 'src/app/services/porovider.service';
import { Provider } from 'src/app/model/provider';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  units: MesureUnit[];
  providers: Provider[];
  addForm: FormGroup;
  public unitSelect: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router ,
              private service: UnitService,
              private providerService: PoroviderService,
              private productService: ProductService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      productId: [],
      priceListId: [0],
      costListId: [0],
      mesureUnitId: [],
      key: ['', Validators.required],
      name: ['', Validators.required],
      factureName: ['', Validators.required],
      barCode: ['', Validators.required],
      registerDate: [],
      active: [1],
      providerId: [],
      contPrice: [],
      creditPrice: []
    });
    this.service.getUnits().subscribe(mango => (this.units = mango));
    this.providerService.getProviders().subscribe(res => (this.providers = res));
  }

  onSubmit() {

    debugger
    this.productService.createProduct(this.addForm.value);
  }

}
