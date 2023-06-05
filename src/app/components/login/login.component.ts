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
        this.userAuthService.setRoles(response.roleName);
        this.userAuthService.setToken(response.accessToken);
        
        if (response.accessToken == "No") {
          alert("Invalid Credentials");
          this.router.navigate(['/login']);
        } else {

          if (response.roleName == 'Admin') {
            alert("Admin login successfull")
            this.router.navigate(['/admin']);
          }

          else if (response.roleName == 'User') {

            alert("User login successfull")
            this.router.navigate(['/user']);
          }

        }
      },
      error: (err) => {
        console.log(err)
      }
    })

  }

}
