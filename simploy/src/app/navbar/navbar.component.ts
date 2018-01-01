import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('user'));
  //isEmployer= this.user.role == 1;
  //isJobSeeker= this.user.role == 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.setItem('user', '');
  }

}
