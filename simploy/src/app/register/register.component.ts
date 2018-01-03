import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoginService } from '../login.service';
import { User } from '../user';
import { Resume } from '../Resume';

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

  constructor(private loginService: LoginService, 
              private router: Router,
              private httpClient: HttpClient) { }

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

      let json = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        pnumber: this.user.phoneNumber,
        password: this.user.password,
        role: this.role
      };

      console.log(json);
      this.httpClient.post('http://localhost:8088/User/', json).subscribe(
        (data: any) => {
          localStorage.setItem('user', JSON.stringify(data));
          this.user=data;
          let jsonRes={
            'description':'',
            'user':{
              'id':this.user.id
            }
          };
          this.httpClient.post('http://localhost:8088/Resumes',jsonRes).subscribe(
            (resdata: any) => {
              let res:Resume=JSON.parse(resdata);
              let jsonSkill = {
                'skills':[],
                'resId': res.resid
              }
              this.httpClient.post('http://localhost:8088/Resumes/addskill',jsonSkill).subscribe();
            }
          );
          this.router.navigate(['/profile']);
        }
      );

      if (this.validInput == false) {
        this.registerForm.form.markAsUntouched();
      }
    }


  }

}
