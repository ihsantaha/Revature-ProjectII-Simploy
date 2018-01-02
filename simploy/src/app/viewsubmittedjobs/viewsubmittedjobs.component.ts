import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../user';
@Component({
  selector: 'app-viewsubmittedjobs',
  templateUrl: './viewsubmittedjobs.component.html',
  styleUrls: ['./viewsubmittedjobs.component.css']
})
export class ViewsubmittedjobsComponent implements OnInit {

  tableData:any[];
  viewResume:boolean=false;
  viewJob:boolean = false;

  id:number;
  email:any;
  firstname:any;
  lastname:any;
  phone:any;
  skills:any[];
  role:number;

  constructor(private http:HttpClient) { }

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
    // this.http.post('http://localhost:8088/Job/uidjobs', json)
    // .subscribe(
    //   (data: any[] ) =>
    //   {
    //       this.tableData = data;
    //   }
    //)
  }

  delete() {

  }

}
