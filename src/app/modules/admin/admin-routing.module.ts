import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CompanyComponent } from './components/company/company.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ViewCompanyEmployeeComponent } from './components/view-company-employee/view-company-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children:[
      {path:'company',component:CompanyComponent},
      {path:'department',component:DepartmentComponent},
      {path:'employees',component:EmployeesComponent},
      {path:'view-employee/:id',component:ViewEmployeeComponent},
      {path:'view-company-employee/:id',component:ViewCompanyEmployeeComponent},
      {path:'',redirectTo:'/admin/company',pathMatch:'full'},
      {path:'update-employee/:id',component:UpdateEmployeeComponent}
  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

