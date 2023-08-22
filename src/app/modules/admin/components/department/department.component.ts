import { DepartmentService } from './../../../../services/department.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/components/models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departments: Department[]=[];

  constructor(private departmentService: DepartmentService, private route : Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployeesByDepartmentName(id:number) {
    this.route.navigate(['admin/view-department-employee', id])
  }


  getEmployees() {
    this.departmentService.getDepartmentList().subscribe(data => {
      this.departments = data;
    })
  }

}
