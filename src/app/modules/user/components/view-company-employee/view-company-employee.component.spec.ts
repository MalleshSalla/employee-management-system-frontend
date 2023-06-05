import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompanyEmployeeComponent } from './view-company-employee.component';

describe('ViewCompanyEmployeeComponent', () => {
  let component: ViewCompanyEmployeeComponent;
  let fixture: ComponentFixture<ViewCompanyEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompanyEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCompanyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
