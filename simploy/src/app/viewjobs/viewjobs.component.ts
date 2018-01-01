import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { JobService } from '../job.service';
import { Job } from '../job';
import { User } from '../user';
import { EmployersService } from '../employers.service';

@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.css']
})

export class ViewjobsComponent implements OnInit {

  user: User = new User();
  userFromServer: User = new User();
  viewJob: boolean = false;
  tableData: any[];
  employers: any[];
  job: Job;
  jobNum: number = 0;
  jobIds;

  constructor(
    private http: HttpClient,
    private jobService: JobService,
    private employersService: EmployersService) { }

  ngOnInit() {
    
    this.employersService.currentEmployers
      .subscribe(
      (employers) => {
        if (employers == null) {
        }
        else {
          this.employers = employers;
          this.jobIds = [this.employers.length];

          for (let i=0;i<this.employers.length;i++) {
            this.jobService.getJobByUserId(this.employers[i].id);
            this.jobNum++;
          }

        }
      }
    );

    this.employersService.getEmployers();
    
    this.jobService.currentJob
      .subscribe(
      (job) => {
        if (job == null) {
        }
        else {
          this.jobIds[this.jobNum] = job.jobid;
          console.log("Job Id: " + this.jobIds[this.jobNum]);
        }
      }
    );

  }

  getUserData(u) {
    this.jobService.getJobByUserId(u.id);
    this.viewJob = true;
    this.userFromServer = u;
  }
}
