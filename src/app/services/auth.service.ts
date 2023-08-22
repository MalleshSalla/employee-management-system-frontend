import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../components/models/login';
import { Register } from '../components/models/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterDto } from '../components/models/registerDto';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  private REGISTER_API = 'http://localhost:8080/register';

  private LOGIN_API = 'http://localhost:8080/login';



  constructor(private http: HttpClient) { }

  register(register: Register): Observable<any> {
    return this.http.post(`${this.REGISTER_API}`, register,{
      headers: this.requestHeader,
    })
  }

  login(login: Login): Observable<any> {
    return this.http.post(`${this.LOGIN_API}`, login, {
      headers: this.requestHeader,
    })
  }


}
