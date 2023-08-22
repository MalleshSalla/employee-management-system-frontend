import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { CompanyComponent } from './components/company/company.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ViewCompanyEmployeeComponent } from './components/view-company-employee/view-company-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/guards/auth.interceptor';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ViewDepartmentEmployeeComponent } from './components/view-department-employee/view-department-employee.component';
import { UsersComponent } from './components/users/users.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    CompanyComponent,
    DepartmentComponent,
    EmployeesComponent,
    ViewCompanyEmployeeComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
    ViewDepartmentEmployeeComponent,
    UsersComponent,
    UpdateUserComponent,
    AddUserComponent
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },AdminDashboardComponent
],
})

export class AdminModule { }
