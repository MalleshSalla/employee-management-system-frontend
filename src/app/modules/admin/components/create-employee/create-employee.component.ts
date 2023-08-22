import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/components/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(department_id: number, company_id: number) {

    this.employeeService.createEmployee(department_id, company_id, this.employee).subscribe({
      next: (data) => {
        console.log(data)
        this.gotoEmployeeList();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  gotoEmployeeList() {
    this.router.navigate(['/admin/employees']);
    alert(this.employee.name + " is created")
  }

  onSubmit() {
    console.log(this.employee);

    let depId = window.prompt('Enter department id:');
    let comId = window.prompt('Enter company id:');

    const department_id: number = Number(depId);
    const company_id: number = Number(comId);
    
    this.saveEmployee(department_id, company_id);

  }

}
