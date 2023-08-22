import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CompanyComponent } from './components/company/company.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ViewCompanyEmployeeComponent } from './components/view-company-employee/view-company-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ViewDepartmentEmployeeComponent } from './components/view-department-employee/view-department-employee.component';
import { UsersComponent } from './components/users/users.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children:[
      {path:'company',component:CompanyComponent},
      {path:'department',component:DepartmentComponent},
      {path:'employees',component:EmployeesComponent},
      {path:'view-company-employee/:id',component:ViewCompanyEmployeeComponent},
      {path:'',redirectTo:'/admin/company',pathMatch:'full'},
      {path:'update-employee/:id',component:UpdateEmployeeComponent},
      {path:'create-employee',component:CreateEmployeeComponent},
      {path:"view-department-employee/:id" , component:ViewDepartmentEmployeeComponent},
      {path:"users",component:UsersComponent},
      {path:"update-user/:id" , component : UpdateUserComponent},
      {path:"add-user",component:AddUserComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

