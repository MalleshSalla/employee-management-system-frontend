import { UserAuthService } from './../../../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/app/components/models/registerDto';
import { Role } from 'src/app/components/models/role.enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  registerDtos: RegisterDto[] = [];

  constructor(private userAuthService:UserAuthService,private route: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userAuthService.getAllUsers().subscribe(data =>{
      this.registerDtos = data;
    })
  }

  updateUsers(id: number) {
    this.route.navigate(['admin/update-user', id])
  }

  deleteUsers(id: number) {

    this.userAuthService.deleteUserById(id).subscribe({
      next: (data:any) => {
        console.log(data)
        alert("deleted succeefully !")
        this.getUsers();
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  addUser(){
    this.route.navigate(['admin/add-user']);
  }

  public get isUser():boolean {
    return this.userAuthService.getRoles() == Role.USER;
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
