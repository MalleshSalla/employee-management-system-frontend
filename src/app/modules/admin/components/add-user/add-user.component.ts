import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/app/components/models/registerDto';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  registerDto: RegisterDto = new RegisterDto();

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  gotoUserList() {
    this.router.navigate(['/admin/users']);
    alert(this.registerDto.name + " is created successfully!")
  }

  onSubmit() {
    this.userAuthService.addUser( this.registerDto).subscribe({
      next: (data) => {
        console.log(data)
        this.gotoUserList();
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
}
