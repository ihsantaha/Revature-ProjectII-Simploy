import { JobTable } from './../JobTable';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../user';
import { Job } from '../job';
@Component({
  selector: 'app-viewsubmittedjobs',
  templateUrl: './viewsubmittedjobs.component.html',
  styleUrls: ['./viewsubmittedjobs.component.css']
})
export class ViewsubmittedjobsComponent implements OnInit {

  viewResume:boolean=false;
  viewJob:boolean = false;

  id:number;
  email:any;
  firstname:any;
  lastname:any;
  phone:any;
  skills:any[];
  role:number;
  tableHold: JobTable[] = [];

  constructor(private httpClient:HttpClient) { }

  ngOnInit() 
  {
    this.getTableData();
  }

  getTableData()
  {
    let user: User = JSON.parse(localStorage.getItem('user'));
    let json = {
      id: user.id
    };
    this.httpClient.post('http://localhost:8088/Job/uidjobs', json)
    .subscribe(
      (data: Job[] ) =>
      {
        for (var i = 0; i < data.length; i++){
          let tableData:JobTable= new JobTable;
          tableData.company=data[i].company;
          tableData.jobId=data[i].jobId;
          tableData.description=data[i].description;
          tableData.postDate=data[i].postDate;
          tableData.title=data[i].title;
          tableData.user=data[i].user;
          tableData.location=data[i].location;
          if(data[i].skills.length > 0 ){
            tableData.skills = '';
          for (var j = 0; j < data[i].skills.length; j++){
            tableData.skills += data[i].skills[j].title + " "
          }}
          //console.log(tableData);
          this.tableHold[i] = tableData;
        }
      }
    )
  }

  delete(id) {
    // let json = {
    //   jobId : id
    // };
    // this.httpClient.post('localhost:8088/Job/delete', json ).subscribe(
    //   (data: any[]) => {
    //     console.log('job deleted');
    //   }
    // );
  }

}
