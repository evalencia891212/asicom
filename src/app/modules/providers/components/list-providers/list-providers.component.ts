import { Component, OnInit, ViewChild } from '@angular/core';
import { PoroviderService } from 'src/app/services/porovider.service';
import { Provider } from 'src/app/model/provider';
import {MatPaginator,MatPaginatorModule, MatTableDataSource} from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrls: ['./list-providers.component.css']
})
export class ListProvidersComponent implements OnInit {

  //providers: Provider[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['providerId', 'name', 'street', 'number'];
  //dataSource = new MatTableDataSource<Provider>(this.service.providers);
   dataSource;
  constructor(private service: PoroviderService) { }

  ngOnInit() {
    this.service.getProviders()
      .subscribe(data => {
        this.service.providers = data
        this.dataSource = new MatTableDataSource<Provider>(data);
        this.dataSource.paginator = this.paginator;
      });
      //this.service.getProviders().subscribe(data => (this.providers = data));
  }

}
