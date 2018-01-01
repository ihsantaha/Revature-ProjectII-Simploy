import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CertificateObj } from '../certificate';

@Component({
  selector: 'app-submitresume',
  templateUrl: './submitresume.component.html',
  styleUrls: ['./submitresume.component.css']
})
export class SubmitresumeComponent implements OnInit {
  @ViewChild('summaryF') summaryForm: NgForm;
  @ViewChild('addSkillF') addSkillForm: NgForm;
  @ViewChild('certF') certForm: NgForm;

  summary = '';
  selectedSkill = '';

  certifs: CertificateObj[] = [];
  certif: CertificateObj = new CertificateObj();

  skills: string[] = ['Java', 'Angular', 'SQL', 'C++', 'Agile', 'AJAX'];
  yourskills: string = "Java Spring Agile";

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

  updateCertificates() {
    let cerf:CertificateObj = new CertificateObj();
    cerf.title = this.certForm.value.title;
    cerf.year = this.certForm.value.year;

    this.certifs.push(cerf);
    console.log(this.certifs);

  }

  deleteCert(i) {
    this.certifs.splice(i, 1);
  }

}
