import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/components/models/employee';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-view-company-employee',
  templateUrl: './view-company-employee.component.html',
  styleUrls: ['./view-company-employee.component.scss']
})
export class ViewCompanyEmployeeComponent implements OnInit {
  id!:number;
  employee!:Employee[];

  constructor(private route:ActivatedRoute,private companyService:CompanyService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.companyService.getEmployeesByCompanyId(this.id).subscribe((data)=>{
      this.employee = data;
    })

  }


}
