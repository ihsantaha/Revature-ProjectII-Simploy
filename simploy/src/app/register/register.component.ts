import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerF') registerForm: NgForm;

  user: User = new User();

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phonenumber: number;
  password: string = '';
  role: number;

  confirmpass: string = '';
  roles: string[] = ['Employee', 'Employer'];
  
  validInput: boolean;
  validNumber: boolean;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    // Preview Data
    // this.loginService.currentUser
    // .subscribe(
    //   (user) => {
    //     if(user == null) {
    //       this.validInput = false;
    //     }
    //     else {
    //       this.validInput = true;
    //       this.router.navigate(['profile']);
    //     }
    //   }
    // );
    // this.validInput = true;
  }

  register() {

    if (this.registerForm.form.value.role == 'Employee')
      this.role = 0;
    else
      this.role = 1;

    let pnumber: string;

    if (this.phonenumber != undefined) 
      pnumber = this.phonenumber.toString();
    else
      pnumber = '';

    if (pnumber.length != 10) {
      this.validNumber = false;
    }
    else {
      pnumber = '(' + pnumber.substring(0,3) + ') ' + pnumber.substring(3,6) + '-' + pnumber.substring(6,10);
      console.log(pnumber);
      this.validNumber = true;

      this.user.firstName = this.firstname;
      this.user.lastName = this.lastname;
      this.user.email = this.email;
      this.user.phoneNumber = pnumber;
      this.user.password = this.password;

      // Mock Data
      if (this.loginService.register(this.user) != null) {
        this.validInput = true;
        console.log(this.validInput);
      }
      else {
        this.validInput = false;
        console.log(this.validInput);
      }

      if (this.validInput == false) {
        this.registerForm.form.markAsUntouched();
      }
    }


  }

}
