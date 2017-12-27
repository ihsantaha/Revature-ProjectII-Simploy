import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: '';
  password: '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.email.length > 0 && this.password.length) {
      this.loginService.login(this.email, this.password);
    }
  }

}
