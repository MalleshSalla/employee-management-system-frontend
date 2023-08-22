import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDepartmentEmployeeComponent } from './view-department-employee.component';

describe('ViewDepartmentEmployeeComponent', () => {
  let component: ViewDepartmentEmployeeComponent;
  let fixture: ComponentFixture<ViewDepartmentEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDepartmentEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDepartmentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
