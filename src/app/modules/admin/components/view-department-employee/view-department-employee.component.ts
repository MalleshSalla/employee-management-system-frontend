import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/components/models/employee';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-view-department-employee',
  templateUrl: './view-department-employee.component.html',
  styleUrls: ['./view-department-employee.component.scss']
})
export class ViewDepartmentEmployeeComponent implements OnInit {

  id!: number;
  employee!: Employee[];

  constructor(private departmentService: DepartmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.departmentService.getEmployeesByDepartmentId(this.id).subscribe((data) => {
      this.employee = data;
    })
  }


}
