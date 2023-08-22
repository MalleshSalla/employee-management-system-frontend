import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { RegisterDto } from '../components/models/registerDto';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/models/user';

@Injectable({
  providedIn: 'root'
})

export class UserAuthService {
 

  private token!: string | null;
  private loggedInUsername: any;

  private jwtHelper = new JwtHelperService();



  constructor(private http: HttpClient) { }

  private GET_USERS_API = 'http://localhost:8080/getAllUsers';

  private DELETE_USER_API = 'http://localhost:8080/deleteUserById';

  private UPDATE_USER_API = 'http://localhost:8080/updateUserById';

  private GET_USER_BY_ID_API = 'http://localhost:8080/getUserById';

  private ADD_USER_API = 'http://localhost:8080/addNewUser';
  
  getAllUsers():Observable<RegisterDto[]>{
    return this.http.get<RegisterDto[]>(`${this.GET_USERS_API}`);
  }

  deleteUserById(id:number) : Observable<Object>  {
    return this.http.delete(`${this.DELETE_USER_API}/${id}`);
  }

  updateUserById(id:number,user : User) : Observable<Object>{
    return this.http.put(`${this.UPDATE_USER_API}/${id}`,user) 
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.GET_USER_BY_ID_API}/${id}`);
  }

  addUser(registerDto : RegisterDto): Observable<Object> {
      return this.http.post<RegisterDto>(`${this.ADD_USER_API}`,registerDto);
  }


  public getRoles(): any {
    return localStorage.getItem("roles");
  }

  setUser(response: any) {
    localStorage.setItem("name", response.name);
    localStorage.setItem("userName", response.userName);
    localStorage.setItem("email", response.email);
    localStorage.setItem("roles", response.roles);
    localStorage.setItem("authorities", response.authorities);
    localStorage.setItem("token", response.accessToken);
    localStorage.setItem("tokenType", response.tokenType);
  }


  public loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  public getToken(): string | null {
    return localStorage.getItem("token");
  }

  public isUserLoggedIn(): boolean | any {
    this.loadToken();
    if (this.token != null && this.token !== '') {
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
          return true;
        }
      }
    } else {
      this.logOut();
      return false;
    }
  }
  logOut() {
    localStorage.clear();
  }

}
