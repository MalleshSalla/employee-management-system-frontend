import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../components/models/company';
import { Employee } from '../components/models/employee';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  private compURL = 'http://localhost:8080/getAllCompanies';

  private getEmpByComId = 'http://localhost:8080/getEmployeesByCompanyId';

  private createCompanyURL = 'http://localhost:8080/saveCompany';

  constructor(private httpClient: HttpClient) { }

  getCompanyList(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.compURL}`);
  }

  getEmployeesByCompanyId(companyId: number) {
    return this.httpClient.get<Employee[]>(`${this.getEmpByComId}/${companyId}`);
  }

  createCompany(company:Company){
    return this.httpClient.post<Company>(`${this.createCompanyURL}`,company)
  }

}
