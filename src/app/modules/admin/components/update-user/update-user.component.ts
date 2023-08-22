import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/components/models/employee';
import { Role } from 'src/app/components/models/role.enum';
import { User } from 'src/app/components/models/user';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id!:number;
  
  user:User = new User();


  constructor(private route:ActivatedRoute,private router:Router,private userAuthService :UserAuthService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.userAuthService.getUserById(this.id).subscribe({
      next:(data)=> console.log(data),
      error:(err)=>console.log(err)
    })

    // this.employeeService.getEmployeeById(this.id).subscribe({
    //   next:(data)=> this.employee = data,
    //   error:(err) =>console.log(err)
    // })

  }

  onSubmit(){
    this.userAuthService.updateUserById(this.id,this.user).subscribe({
      next:(data)=>{
        
        this.goToUsersList();
        alert("updated successfully of : "+this.user.name);
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  goToUsersList(){
    this.router.navigate(['admin/users']);
  }

  public get isUser(): boolean{
    return this.userAuthService.getRoles() == Role.USER;
  }


  public get isDisabled(): boolean{
    return true;
  }
}
