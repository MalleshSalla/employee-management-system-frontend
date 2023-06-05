import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserAuthService {

  constructor() { }

  public setRoles(roles: any) {
    sessionStorage.setItem('roles', roles);
  }

  public getRoles(): string|null {
    return sessionStorage.getItem('roles');
  
  }

  public setToken(jwtToken: string) {
      sessionStorage.setItem('jwtToken', jwtToken);
  }


  public getToken(): string|null {
    return sessionStorage.getItem('jwtToken');
  }


  public clear() {
    sessionStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
  

}
