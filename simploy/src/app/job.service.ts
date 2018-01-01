import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Job } from './job';

@Injectable()
export class JobService {
  currentJob: BehaviorSubject<Job> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getJobByUserId(userid: number) {
    this.http.get('http://localhost:3000/jobs', {  
    })
      .subscribe(
      (data: any[]) => {
        if (data == null)
          this.currentJob.next(data[userid-1]);
        else
          this.currentJob.next(data[userid-1]);
      }
      );
  }
 

}
