import { CompanyService } from './../../../../services/company.service';
import { Router } from '@angular/router';
import { Company } from './../../../../components/models/company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies:Company[]=[];
  
  constructor(private companyService:CompanyService,private route:Router) { }

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




  // company:Company= new Company();;
  
  // constructor(private companyService:CompanyService,private router:Router) { }

  // ngOnInit(): void {  }
  

  // createCompany(){
  //   this.companyService.createCompany(this.company).subscribe({
  //     next: (data) => {
  //       console.log(data)
  //       alert("company created successfully")
  //       this.router.navigate(['/user/company']);
  //     },
  //     error: (err) => {
  //       console.log(err)
  //     }
  //   })
  // }

  // onSubmit(){
  //   this.createCompany()
  //   console.log(this.company)
   
  // }

}
