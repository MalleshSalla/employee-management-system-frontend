import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dropdownOptions = [
    { label: 'Company', link: 'admin/company' },
    { label: 'Department', link: 'admin/department' },
    { label: 'Employees', link: 'admin/employees' }
  ];

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  navigateToLink(event: any): void {
    const selectedValue = event?.value;
    if (selectedValue) {
      this.router.navigate([selectedValue]);
    }
  }

  logout():void {
    window.sessionStorage.clear();
    window.location.reload();
  }
  
}
