import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResumeOracle } from '../ResumeOracle';
import { ResumeTable } from '../ResumeTable';
import { Project } from '../project';
@Component({
  selector: 'app-viewresumes',
  templateUrl: './viewresumes.component.html',
  styleUrls: ['./viewresumes.component.css']
})
export class ViewresumesComponent implements OnInit 
{   
  ProjectData:Project[];
  ProjectDataArray:Project[]=new Array();
  RealData:ResumeTable[];
  viewResume:boolean=false;
  viewJob:boolean = false;
  constructor(private http:HttpClient) { }
  id:number;
  skillsarray:any[]=new Array();
  phone:string;
  email:string;
  first:string;
  last:string;
  skills:string[];
  role:number;
  projectDataelement:any[];
  count =0;
  ngOnInit() 
  {

    this.getRealData();
    this.getProjectData();
    this.getCertData();
    this.getEduData();
    this.getExpData();
  }
  certData:any[];
  getCertData()
  {
    this.http.get("http://localhost:8088/Certification")
    .subscribe(
      (data:any[])=>
      {
          this.certData=data;
         // console.log(this.certData[0].resume.resId);
          //console.log("yay");
      }
    ) 
  }
  certDataelement:any[];
  certDataArray:any[];
  findbyIdCert(id:number)
  {
    this.certDataArray=[];
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
       // console.log(this.certDataArray[0]);
    }
  }
}
  getProjectData()
  {
    this.http.get("http://localhost:8088/Project")
    .subscribe(
      (data:Project[])=>
      {
          this.ProjectData=data;
          //console.log(this.ProjectData);
      }
    ) 
  }

  findbyIdProject(id:number)
  {
  this.ProjectDataArray=[];
  for(var i=0;i<this.ProjectData.length;i++)
  {
    if(id==this.ProjectData[i].resume.resId)
    {
        this.ProjectDataArray.push(this.ProjectData[i]);
    }
  }
}
getRealData()
{
  this.RealData=JSON.parse(localStorage.getItem('ResumeTable'));
 //this.RealData[0].resId
  //console.log(this.RealData);

}
eduData:any[];
getEduData()
  {
    this.http.get("http://localhost:8088/Education")
    .subscribe(
      (data:any[])=>
      {
          this.eduData=data;
      }
    ) 
  }
  eduDataelement:any[];
  eduDataArray:any[];
  findbyIdEdu(id:number)
  {
    this.eduDataArray=[];
    var i;
    this.eduDataelement=[];
    var length;
    this.eduDataArray=[];
  for(i=0;i<this.eduData.length;i++)
  {
    if(id==this.eduData[i].resume.resId)
    {
        this.eduDataelement=this.eduData[i];
        this.eduDataArray.push(this.eduDataelement);
    }
  }
}


expData:any[];
getExpData()
  {
    this.http.get("http://localhost:8088/Experience")
    .subscribe(
      (data:any[])=>
      {
          this.expData=data;
      }
    ) 
  }
  expDataelement:any[];
  expDataArray:any[];
  findbyIdExp(id:number)
  {
    this.expDataArray=[];
    var i;
    this.expDataelement=[];
    var length;
    this.expDataArray=[];
  for(i=0;i<this.expData.length;i++)
  {
    if(id==this.expData[i].resume.resId)
    {
        this.expDataelement=this.expData[i];
        this.expDataArray.push(this.expDataelement);

    }
  }
}
getUserData(id:number,phone:string,email:string,first:string,last:string,skills:string,user_id:number,role:number)
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
    if(skills){
      this.skills=skills.trim().split(" ");
      }
      else{
        this.skills=[];
      }
    var i=0;
    var j;
    this.skillsarray=[];
    this.findbyIdProject(id);
    this.findbyIdCert(id);
    this.findbyIdEdu(id);
    this.findbyIdExp(id);
    for(i=0;i<this.RealData.length;i++)
    {
      //console.log(this.RealData[i].resId+" "+user_id)
      if(this.RealData[i].resId==user_id)
      {
        for(let i = 0 ; i < this.skills.length; i++)
        {
          this.skillsarray.push(this.skills[i]);
        }
      }
    }
  }
}
