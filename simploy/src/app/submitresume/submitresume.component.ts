import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CertificateObj } from '../certificate';
import { Project } from '../project';
import { Education } from '../education';
import { Experiecne } from '../experience';

@Component({
  selector: 'app-submitresume',
  templateUrl: './submitresume.component.html',
  styleUrls: ['./submitresume.component.css']
})
export class SubmitresumeComponent implements OnInit {
  @ViewChild('summaryF') summaryForm: NgForm;
  @ViewChild('addSkillF') addSkillForm: NgForm;
  @ViewChild('eduF') educationForm: NgForm;
  @ViewChild('certF') certForm: NgForm;
  @ViewChild('expF') expForm: NgForm;
  @ViewChild('projectF') projectForm: NgForm;

  summary = '';
  selectedSkill = '';

  skills: string[] = ['Java', 'Angular', 'SQL', 'C++', 'Agile', 'AJAX'];
  yourskills: string = "Java Spring Agile";

  edutypes: string[] = ['Bachelors', 'Masters', 'Associates'];
  educations: Education[] = [];
  education: Education = new Education();

  certifs: CertificateObj[] = [];
  certif: CertificateObj = new CertificateObj();

  explist: Experiecne[] = [];
  exp: Experiecne = new Experiecne();

  projects: Project[] = [];
  project: Project = new Project();

  constructor() { }

  ngOnInit() {
  }

  updateSummary() {
    this.summary = this.summaryForm.value.description;
  }

  addSkill() {
    if (!this.yourskills.includes(this.addSkillForm.value.newskill)) {
      this.yourskills += ' ' + this.addSkillForm.value.newskill;
    }
  }


  updateEducations() {
    console.log(this.educationForm.form);
    let edu:Education = new Education();
    edu.school = this.educationForm.form.value.school;
    edu.gradyear = this.educationForm.form.value.gradyear;
    edu.edutype = this.educationForm.form.value.edutype;

    this.educations.push(edu);
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
