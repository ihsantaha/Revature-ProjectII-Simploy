import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CertificateObj } from '../certificate';
import { Project } from '../project';
import { Education } from '../education';
import { Experiecne } from '../experience';
import { User } from '../user';
import { Resume } from '../Resume';
import { ResumeOracle } from '../ResumeOracle';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submitresume',
  templateUrl: './submitresume.component.html',
  styleUrls: ['./submitresume.component.css']
})
export class SubmitresumeComponent implements OnInit {
  [x: string]: any;
  @ViewChild('summaryF') summaryForm: NgForm;
  @ViewChild('addSkillF') addSkillForm: NgForm;
  @ViewChild('eduF') educationForm: NgForm;
  @ViewChild('certF') certForm: NgForm;
  @ViewChild('expF') expForm: NgForm;
  @ViewChild('projectF') projectForm: NgForm;

  summary = '';
  selectedSkill = '';

  skills: string[] = ['Java', 'Angular', 'SQL', 'C++', 'Agile', 'AJAX'];
  yourskills: string = "";

  edutypes: string[] = ['Bachelors', 'Masters', 'Associates'];
  educations: Education[] = [];
  education: Education = new Education();

  certifs: CertificateObj[] = [];
  certif: CertificateObj = new CertificateObj();

  explist: Experiecne[] = [];
  exp: Experiecne = new Experiecne();

  projects: Project[] = [];
  project: Project = new Project();
  user:User;
  resume:ResumeOracle;
  description:string;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('user'));
    this.resume=JSON.parse(localStorage.getItem('resume'));
    console.log(this.resume);
    this.description=this.resume.description;
    if (this.resume.skills.length > 0) {
      for (var j = 0; j < this.resume.skills.length; j++) {
        this.yourskills += this.resume.skills[j].title + " "
      }
    }

  }

  updateSummary() {
    //this.summary = this.summaryForm.value.description;
    console.log(this.description);
    this.resume.description=this.description;
    console.log(this.description);
    console.log(this.user.id);
    console.log(this.resume.description);
    const req = this.http.post("http://localhost:8088/Resume/", 
    {
      "user": {
        "id": this.resume.user.id
        },
      "description":this.resume.description,
      "resId":this.resume.resId
  })
        .subscribe(
          res => {
            console.log(res);
             localStorage.removeItem("resume");
             localStorage.setItem('resume',JSON.stringify(res));
          },
          err => {
            console.log("Error occured");
          }
        );
        }



  addSkill() {
    if (!this.yourskills.includes(this.addSkillForm.value.newskill)) {
      this.yourskills += ' ' + this.addSkillForm.value.newskill;
      let skillid:number;
      if(this.addSkillForm.value.newskill=='Java')
      {
        skillid=1;
      }
      if(this.addSkillForm.value.newskill=='Angular')
      {
        skillid=2;
      }
      if(this.addSkillForm.value.newskill=='SQL')
      {
        skillid=3;
      }
      if(this.addSkillForm.value.newskill=='C++')
      {
        skillid=4;
      }
      if(this.addSkillForm.value.newskill=='Agile')
      {
        skillid=5;
      }
      if(this.addSkillForm.value.newskill=='AJAX')
      {
        skillid=6;
      }
      const req = this.http.post("http://localhost:8088/Resume/addskill", 
      {
        "skills" :[
          {
            "skillId":skillid,
            "title":this.addSkillForm.value.newskill
            
          }],
        "resId":this.resume.resId
    })
          .subscribe(
            res => {
              console.log(res);
               localStorage.removeItem("resume");
               localStorage.setItem('resume',JSON.stringify(res));
            },
            err => {
              console.log("Error occured");
            }
          );
    }
  }

 /////////////////////////////doesn't grab year correctly, this is where you left off 
 // need to add in all functionality below, preload in educations into an array and have them displayed 
 // the educations currently operates in an arrayt fashion just like above, use the functionality of the button to make it delete 
 //add in functionality to remove skills with a button as well 
 // enjoy the movie son. 
  updateEducations() {
    console.log(this.educationForm.form);
    let edu:Education = new Education();
    edu.school = this.educationForm.form.value.school;
    edu.gradyear = this.educationForm.form.value.gradyear;
    edu.edutype = this.educationForm.form.value.edutype;

    this.educations.push(edu);
    const req = this.http.post("http://localhost:8088/Education",     
    {
      "school":this.educationForm.form.value.school,
      "type": this.educationForm.form.value.edutype,
      "gradYear": parseInt(this.educationForm.form.value.gradyear,10),
      "resume": {
          "resId": this.resume.resId
      }
  })
        .subscribe(
          res => {
            console.log(res);
             localStorage.removeItem("Educations");
             localStorage.setItem('Educations',JSON.stringify(res));
          },
          err => {
            console.log("Error occured");
          }
        );



    console.log(this.educations);
  }

  deleteEducation(i) {
    this.educations.splice(i, 1);
  }


  updateCertificates() {
    let cerf:CertificateObj = new CertificateObj();
    cerf.title = this.certForm.value.title;
    cerf.year = this.certForm.value.year;

    this.certifs.push(cerf);
  }

  deleteCert(i) {
    this.certifs.splice(i, 1);
  }


  updateExpList() {
    let exp:Experiecne = new Experiecne();
    exp.title = this.expForm.form.value.title;
    exp.company = this.expForm.form.value.company;
    exp.startyear = this.expForm.form.value.startyear;
    exp.endyear = this.expForm.form.value.endyear;

    this.explist.push(exp);
  }

  deleteExperience(i) {
    this.explist.splice(i, 1);
  }


  updateProjects() {
    let proj:Project = new Project();
    proj.title = this.projectForm.form.value.title;
    proj.startdate = this.projectForm.form.value.startdate;
    proj.enddate = this.projectForm.form.value.enddate;
    proj.groupsize = this.projectForm.form.value.groupsize;
    proj.description = this.projectForm.form.value.description;

    this.projects.push(proj);
  }

  deleteProject(i) {
    this.projects.splice(i, 1);
  }

}
