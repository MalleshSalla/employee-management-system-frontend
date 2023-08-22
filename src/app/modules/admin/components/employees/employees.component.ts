import { UserAuthService } from './../../../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/components/models/employee';
import { Role } from 'src/app/components/models/role.enum';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private route: Router,private userAuthService :UserAuthService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }

  updateEmployee(id: number) {
    this.route.navigate(['admin/update-employee', id])
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.getEmployees();
      alert("delted successfully " + id);
    }
    )
  }

  employeeDetails(id: number) {
    this.route.navigate(['admin/view-employee', id])
  }

  public get isAdmin():boolean {
    return this.userAuthService.getRoles() == Role.ADMIN;
  }

  public get isManager():boolean{
    return this.userAuthService.getRoles() == Role.MANAGER;
  }

  public get isAdminOrManager() : boolean {
    return this.isAdmin || this.isManager;
  }
  
}
