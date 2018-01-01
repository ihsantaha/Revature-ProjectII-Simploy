import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class LoginService {
  currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    this.http.post('http://localhost:8086/User/login', {
      email: email,
      password: password
    })
      .subscribe(
      (data: User) => {
        if (data == null)
          this.currentUser.next(data);
        else
          this.currentUser.next(data);
      }
    );
  }

  register(user: User) {

    // Mock Data
    if (user.email == 'test@t')
      return user;
    else
      return null;
    
    // Preview Data
    // this.http.post('http://localhost:8086/User/register', {
    //   email: email
    // })
    //   .subscribe(
    //   (data: User) => {
    //     if (data == null)
    //       this.currentUser.next(data);
    //     else
    //       this.currentUser.next(data);
    //   }
    //   );
  }

}
