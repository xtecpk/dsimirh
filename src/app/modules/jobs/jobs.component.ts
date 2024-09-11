import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AddJobsDialogComponent } from './add-jobs-dialog/add-jobs-dialog.component';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-jobs',
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
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  httpService= inject(HttpService)
  readonly dialog = inject(MatDialog)
  jobData: any = [];
  jobsDataSource: any = []

  openDialog() {
    const dialogRef = this.dialog.open(AddJobsDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.jobData = res
      if (this.jobData) this.addJob(this.jobData);
    });
  }

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpGetReq('getalljob').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((job:any) => {
          const jobObj = {
            department: job.DepartmentName,
            jobTitle : job.JobTitle ,
            jobCode: job.JobCode,
            noOfJobs:  job.Vacancies
          }
          this.jobData.push(jobObj)
        })
        this.jobsDataSource = this.jobData
      }
    })
  }

  /*jobsDataSource = [
    {department: 'Human Resources', jobTitle: 'HR Manager', jobCode: 'Manager', noOfJobs: '4'},
    {department: 'Human Resources', jobTitle: 'HR Manager', jobCode: 'Manager', noOfJobs: '4'},
    {department: 'Human Resources', jobTitle: 'HR Manager', jobCode: 'Manager', noOfJobs: '4'},
    {department: 'Human Resources', jobTitle: 'HR Manager', jobCode: 'Manager', noOfJobs: '4'},
  ]*/

  jobsColumns: string[] = ['#', 'Department',	'Job Title',	'Job Code',	'No Of Jobs', 'Actions']
  
  addJob(job: any) {
    this.jobsDataSource = [...this.jobsDataSource, job]
  }
}
