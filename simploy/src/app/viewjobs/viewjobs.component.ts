import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.css']
})
export class ViewjobsComponent implements OnInit 
{
  
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
    this.http.get("http://localhost:3000/users")
    .subscribe(
      (data:any[])=>
      {
          this.tableData = data;
      }
    )
  }

  getUserData(id:any,firstname:any,lastname:any,email:any,phone:any,skills:any)
  {
    this.id = id;
    
    
    this.role = 0;
    if (this.role == 1) {
      this.viewResume=true;
    }
    else {
      this.viewJob=true;
    }
    
    this.id = id;
    this.firstname=firstname;
    this.lastname=lastname;
    this.email = email;
    this.phone = phone;
    this.skills=skills.split(" ");
  }
}
