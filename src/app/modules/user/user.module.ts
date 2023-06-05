import { EmployeeComponent } from './components/employee/employee.component';
import { CompanyComponent } from './components/company/company.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { DepartmentComponent } from './components/department/department.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ViewCompanyEmployeeComponent } from './components/view-company-employee/view-company-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthInterceptor } from 'src/app/guards/auth.interceptor';



@NgModule({
  declarations: [
    EmployeeComponent,
    CompanyComponent,
    DepartmentComponent,
    UserDashboardComponent,
    HeaderComponent,
    UpdateEmployeeComponent,
    ViewCompanyEmployeeComponent,
    ViewEmployeeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers: [
    AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },UserDashboardComponent
],
})
export class UserModule { }

