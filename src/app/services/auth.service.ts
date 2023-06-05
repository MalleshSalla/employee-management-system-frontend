import { UserAuthService } from './user-auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../components/models/login';
import { Register } from '../components/models/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  private REGISTER_API = 'http://localhost:8080/register';

  private LOGIN_API = 'http://localhost:8080/login';

  constructor(private http: HttpClient, private userAuthService: UserAuthService) { }

  register(register: Register): Observable<any> {
    return this.http.post(`${this.REGISTER_API}`, register)
  }

  login(login: Login): Observable<any> {
    return this.http.post(`${this.LOGIN_API}`, login, {
      headers: this.requestHeader,
    })
  }

  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null) {

      if (userRoles === allowedRoles[0]) {
        isMatch = true;
        console.log("//" + isMatch)
        return isMatch;
      } else {
        if (userRoles === "Admin") {
          isMatch = true;
          return isMatch;
        }
        return isMatch;
      }
      

    }
    return isMatch;
  }

}
