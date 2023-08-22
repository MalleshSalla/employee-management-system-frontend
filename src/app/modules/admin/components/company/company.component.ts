import { CompanyService } from './../../../../services/company.service';
import { Router } from '@angular/router';
import { Company } from './../../../../components/models/company';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies:Company[]=[];
  
  constructor(private companyService:CompanyService,private route:Router,private authService : AuthService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getCompanyList().subscribe(data => {
      this.companies = data;
    })
  }

  getEmployeesByCompanyId(id:number){
    this.route.navigate(['admin/view-company-employee', id])
  }


}
