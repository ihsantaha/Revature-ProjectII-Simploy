import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.css']
})
export class ViewjobsComponent implements OnInit 
{
  tableData:any[];
  viewResume:boolean=false;
  constructor(private http:HttpClient) { }
  Email:any;
  firstname:any;
  lastname:any;
  skill:any[];
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
          this.tableData =data;
          console.log(this.tableData[0].skills);
      }
    )
  }
  getUserData(email:any,firstname:any,lastname:any,skills:any)
  {
    this.viewResume=true;
    this.Email = email;
    this.firstname=firstname;
    this.lastname=lastname;
    this.skill=skills.split(" ");
  }
}
