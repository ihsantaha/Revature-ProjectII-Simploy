import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-viewresumes',
  templateUrl: './viewresumes.component.html',
  styleUrls: ['./viewresumes.component.css']
})
export class ViewresumesComponent implements OnInit 
{   
  ProjectData:any[];
  RealData:any[];
  viewResume:boolean=false;
  viewJob:boolean = false;
  constructor(private http:HttpClient) { }
  id:number;
  skillsarray:any[]=new Array();
  phone:string;
  email:string;
  first:string;
  last:string;
  skills:any[];
  role:number;
  projectDataelement:any[];
  count =0;
  ngOnInit() 
  {
    this.getRealData();
    this.getProjectData();
    this.getCertData();
  }
  certData:any[];
  getCertData()
  {
    this.http.get("http://localhost:8088/Certification")
    .subscribe(
      (data:any[])=>
      {
          this.certData=data;
          console.log(this.certData[0].resume.resId);
          console.log("yay");
      }
    ) 
  }
  certDataelement:any[];
  certDataArray:any[];
  findbyIdCert(id:number)
  {
    var i;
    this.certDataelement=[];
    var length;
    this.certDataArray=[];
  for(i=0;i<this.certData.length;i++)
  {
    if(id==this.certData[i].resume.resId)
    {
        this.certDataelement=this.certData[i];
        this.certDataArray.push(this.certDataelement);
        console.log(this.certDataArray[0]);
    }
  }
}
  getProjectData()
  {
    this.http.get("http://localhost:8088/Project")
    .subscribe(
      (data:any[])=>
      {
          this.ProjectData=data;
          console.log(this.ProjectData[0].resume.resId);
          console.log("yay");
      }
    ) 
  }
  ProjectDataArray:any[]=new Array();
  findbyIdProject(id:number)
  {
    var i;
    this.projectDataelement=[];
    var length;
    this.ProjectDataArray=[];
  for(i=0;i<this.ProjectData.length;i++)
  {
    if(id==this.ProjectData[i].resume.resId)
    {
        this.projectDataelement=this.ProjectData[i];
        this.ProjectDataArray.push(this.projectDataelement);
        console.log(this.ProjectDataArray[0]);
    }
  }
}
getRealData()
{
  this.http.get("http://localhost:8088/Resume")
  .subscribe(
    (data:any[])=>
    {
          this.RealData =data;
          console.log(this.RealData[0].skills[0].title);
          console.log(this.RealData[0].resId);
          console.log("yay");
    }
  )
}
getUserData(id:number,phone:string,email:string,first:string,last:string,skills:any[],user_id:number,role:number)
{
    if (role == 1) 
    {
      this.viewResume=true;
    }
    else 
    {
      this.viewJob=true;
    }
    this.id = id;
    this.first=first;
    this.last=last;
    this.email = email;
    this.phone = phone;
    this.skills=skills;
    var i=0;
    var j;
    this.skillsarray=[];
    this.findbyIdProject(id);
    this.findbyIdCert(id);
    for(i=0;i<this.RealData.length;i++)
    {
      console.log(this.RealData[i].resId+" "+user_id)
      if(this.RealData[i].resId==user_id)
      {
        j=0;
        while(j<this.skills.length)
        {
          console.log(this.RealData[i].skills[j])
          this.skillsarray.push(this.RealData[i].skills[j].title);
          j=j+1;
        }
      }
    }
  }
}
