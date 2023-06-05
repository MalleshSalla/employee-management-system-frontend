import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { CompanyComponent } from './components/company/company.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ViewCompanyEmployeeComponent } from './components/view-company-employee/view-company-employee.component';

const routes: Routes = [
  {
    path: '', component: UserDashboardComponent,
    children:[
      {path:'company',component:CompanyComponent},
      {path:'department',component:DepartmentComponent},
      {path:'employees',component:EmployeeComponent},
      {path:'view-employee/:id',component:ViewEmployeeComponent},
      {path:'view-company-employee/:id',component:ViewCompanyEmployeeComponent},
      {path:'',redirectTo:'/user/company',pathMatch:'full'},
      {path:'update-employee/:id',component:UpdateEmployeeComponent}
    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
