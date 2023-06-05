import { DepartmentService } from './../../../../services/department.service';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/components/models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departments: Department[]=[];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.departmentService.getDepartmentList().subscribe(data => {
      this.departments = data;
    })
  }

}
