import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { catchError } from 'rxjs';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-jobs-by-department',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    CommonTableComponent,
    TranslateModule
  ],
  templateUrl: './jobs-by-department.component.html',
  styleUrl: './jobs-by-department.component.scss'
})
export class JobsByDepartmentComponent {

  httpService= inject(HttpService);
  jobsDeptData: any = [];
  jobsDeptSourceData: any = []
  // jobsDeptSourceData = [
  //   {department: 'Human Resources', position: 'Manager', totalPosts: '10', vacantPosts: '1'},
  //   {department: 'Finance', position: 'Accountant', totalPosts: '10', vacantPosts: '0'},
  //   {department: 'IT', position: 'Engineer', totalPosts: '10', vacantPosts: '2'},
  //   {department: 'Marketing', position: 'Specialist', totalPosts: '10', vacantPosts: '1'},
  // ]


  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpGetReq('getjobbydepartment').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((jobs:any) => {
          const jobsDeptObj = {
            department: jobs.DepartmentName,
            position : jobs.JobTitle ,
            totalPosts: jobs.Vacancies,
            // vacantPosts:  jobs.Vacancies,      Not Present
          }
          this.jobsDeptData.push(jobsDeptObj)
        })
        this.jobsDeptSourceData = this.jobsDeptData
      }
    })
  }
  jobsDeptColumns: string[] = ['#', 'Department',	'Position',	'Total Posts',	'Vacant Posts',	'Actions']
  
}
