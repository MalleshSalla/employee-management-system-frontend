import { Register } from './../models/register';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  register: Register = new Register()

  faLock = faLock;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.register(this.register).subscribe()
    this.router.navigate(['/login']);
    alert( " is user is registered")
  }

}
