import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCostumerComponent } from './list-costumer.component';

describe('ListCostumerComponent', () => {
  let component: ListCostumerComponent;
  let fixture: ComponentFixture<ListCostumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCostumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
