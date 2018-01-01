import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';

@Injectable()
export class EmployersService {
  currentEmployers: BehaviorSubject<User[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getEmployers() {
    this.http.get('http://localhost:3000/users', {  
    })
      .subscribe(
      (data: any[]) => {
        if (data == null)
          this.currentEmployers.next(data);
        else
          this.currentEmployers.next(data);
      }
    );
  }

}
