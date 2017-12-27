import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class LoginService {

  currentUser: User;
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    this.http.post('http://localhost:8086/User/login', {
      email: email,
      password: password
    })
    .subscribe(
      (data: User) => {
        console.log(data);
        alert(data.firstName);
      }
    );
  }
}
