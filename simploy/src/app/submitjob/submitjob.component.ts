import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitjob',
  templateUrl: './submitjob.component.html',
  styleUrls: ['./submitjob.component.css']
})
export class SubmitjobComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToViewJobs() {
    this.router.navigate(['./viewjobs']);
  }

  submitJob(e) {

  }
}
