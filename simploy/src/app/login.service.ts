import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Job } from './job';
import { JobTable } from './JobTable';

@Injectable()
export class LoginService {
  currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  tableHold:JobTable[]=[];
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    this.http.post('http://localhost:8088/User/login', {
      email: email,
      password: password
    })
      .subscribe(
      (data1: User) => {
        if (data1 == null)
          this.currentUser.next(data1);
        else{
          this.currentUser.next(data1);
          //added user to local storage - MW
          localStorage.setItem('user', JSON.stringify(data1));
          if(data1.role== 0)
          this.getTableDataJobSearcher();
        }
      }
      );
  }


  
  getTableDataJobSearcher()
  {
    this.http.get('http://localhost:8088/Job')
    .subscribe(
      (data:Job[])=>
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
            if(data[i].skills.length > 0){
              tableData.skills="";
            for (var j = 0; j < data[i].skills.length; j++){
              tableData.skills += data[i].skills[j].title + " "
            }}
            //console.log(tableData);
            this.tableHold[i]=tableData;
          
          }
          localStorage.setItem('JobsTable', JSON.stringify(this.tableHold));
          //console.log(this.tableHold);
      }
    )
  }


  register(user: User) {

    // Mock Data
    if (user.email == 'test@t')
      return user;
    else
      return null;
    
    // Preview Data
    // this.http.post('http://localhost:8086/User/register', {
    //   email: email
    // })
    //   .subscribe(
    //   (data: User) => {
    //     if (data == null)
    //       this.currentUser.next(data);
    //     else
    //       this.currentUser.next(data);
    //   }
    //   );
  }

}
