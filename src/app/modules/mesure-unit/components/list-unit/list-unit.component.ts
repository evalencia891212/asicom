import { MesureUnit } from './../../../../model/mesure-unit';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitService } from '../../../../services/unit.service';

@Component({
  selector: 'app-list-unit',
  templateUrl: './list-unit.component.html',
  styleUrls: ['./list-unit.component.css']
})
export class ListUnitComponent implements OnInit {

  units: MesureUnit[];

  constructor(private router: Router ,
              private service: UnitService) { }

  ngOnInit() {
    this.service.getUnits().subscribe(mango => (this.units = mango));
  }

  addUnit() {
    console.log('Agregar unidad');
    this.router.navigate(['add-unit']);
  }

  editUnit(unit: MesureUnit): void {
    localStorage.removeItem('editUnitId');
    localStorage.setItem('editUnitId', unit.unitId.toString());
    this.router.navigate(['edit-unit']);
  }

  deleteUnit(unit: MesureUnit): void {
    this.service.deleteUnit(unit.unitId).subscribe(data => {
      this.units = this.units.filter(c => c !== unit);
    });
  }

}
