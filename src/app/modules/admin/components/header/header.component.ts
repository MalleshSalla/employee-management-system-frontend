import { UserAuthService } from './../../../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/components/models/role.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  constructor( private router: Router,private userAuthService:UserAuthService) { }

  roleName =  localStorage.getItem('roles');
  
  name =localStorage.getItem('name');
  
  roleAndName = this.roleName +" ("+ this.name+")";

  ngOnInit(): void {}

  logout():void {
    window.localStorage.clear();
    window.location.reload();
  
  }

   
  public get isUser():boolean {
    return this.userAuthService.getRoles() == Role.USER;
  }
  
  public get isAdmin():boolean {
    return this.userAuthService.getRoles() == Role.ADMIN;
  }

  public get isManager() : boolean {
    return this.userAuthService.getRoles() == Role.MANAGER;
  }
    public get isAdminOrManager() : boolean {
    return this.isAdmin || this.isManager;
  }
  
}
