import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../components/models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private getEmpURL = 'http://localhost:8080/getAllEmployees';

  private createEmpURL = 'http://localhost:8080/saveEmployee';

  private getEmpById = 'http://localhost:8080/getEmployeeById';

  private updateEmpById = 'http://localhost:8080/updateEmployeeById';

  private deleteEmpById = 'http://localhost:8080/deleteEmployeeById';

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.getEmpURL}`);
  }

  createEmployee(departmentId: number, companyId: number, employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.createEmpURL}/${departmentId}/${companyId}`, employee)
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.getEmpById}/${id}`);
  }

  updateEmployeeById(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.updateEmpById}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteEmpById}/${id}`);
  }
}
