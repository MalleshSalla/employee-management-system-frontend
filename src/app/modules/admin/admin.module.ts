import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { CompanyComponent } from './components/company/company.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { ViewCompanyEmployeeComponent } from './components/view-company-employee/view-company-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { FormsModule } from '@angular/forms'; 
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/guards/auth.interceptor';
import { UserDashboardComponent } from '../user/components/user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    CompanyComponent,
    DepartmentComponent,
    EmployeesComponent,
    ViewEmployeeComponent,
    ViewCompanyEmployeeComponent,
    UpdateEmployeeComponent
   
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
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
