import { Department } from './../components/models/department';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../components/models/employee';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseURL = 'http://localhost:8080/getAllDepartments';

  constructor(private httpClient: HttpClient) { }

  getDepartmentList(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.baseURL}`);
  }

  getEmployeesByDepartmentId(departmentId: number) {
    return this.httpClient.get<Employee[]>(`http://localhost:8080/getEmployeesByDepartment/${departmentId}`);
  }

}
