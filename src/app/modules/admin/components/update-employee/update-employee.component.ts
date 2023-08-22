import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/components/models/employee';
import { Role } from 'src/app/components/models/role.enum';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserAuthService } from 'src/app/services/user-auth.service';



@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})

export class UpdateEmployeeComponent implements OnInit {

  id!:number;

  employee:Employee = new Employee();

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router,private userAuthService :UserAuthService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next:(data)=> this.employee = data,
      error:(err) =>console.log(err)
    })
  }

  onSubmit(){
    this.employeeService.updateEmployeeById(this.id,this.employee).subscribe({
      next:(data)=>{
        
        this.goToEmployeeList();
        alert("updated successfully of : "+this.employee.name);
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  goToEmployeeList(){
    this.router.navigate(['admin/employees'])
  }

  public get isUser(): boolean{
    return this.userAuthService.getRoles() == Role.USER;
  }

}
