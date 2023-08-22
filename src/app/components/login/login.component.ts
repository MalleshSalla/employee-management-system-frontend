import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faLock = faLock;

  login: Login = new Login();

  constructor(private authService: AuthService, private router: Router, private userAuthService: UserAuthService) { }

  ngOnInit(): void {}

  onSubmit() {
    
    this.authService.login(this.login).subscribe({
      next: (response) => {
        this.userAuthService.setUser(response);
        const token = localStorage.getItem("token");

        if (token == "null") {
          alert("Wrong User Name Or Password");
          this.router.navigate(['/login']);
        } else {
            this.router.navigate(['/admin']);          
        }
      },
      error: (err) => {
        alert("User name/password wrong or something went wrong")
        console.log(err)
      }
    })
  }
}
