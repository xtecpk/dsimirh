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
  selector: 'app-requests-list',
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
  templateUrl: './requests-list.component.html',
  styleUrl: './requests-list.component.scss'
})
export class RequestsListComponent {

  httpService= inject(HttpService)
  requestsListData: any = [];
  requestsListSourceData: any = []
  
  
  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpGetReq('getjobrequest').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((requests:any) => {
          const requestsObj = {
            requestedBy: requests.RequestedBy,
            department : requests.DepartmentName ,
            service: requests.ServiceName,
            numberOfPosition:  requests.Vacancies,
            job: requests.JobTitle,
            status: requests.Status	
          }
          this.requestsListData.push(requestsObj)
        })
        this.requestsListSourceData = this.requestsListData
      }
    })
  }

  
  // requestsListSourceData = [
  //   {requestedBy: 'Alice Johnson', department: 'Human Resources', service: 'HR', numberOfPosition: '1', job: 'HR Manager', status: 'Open'},
  //   {requestedBy: 'Bob Smith', department: 'Finance', service: 'Accounts', numberOfPosition: '2', job: 'Accountant', status: 'Closed'},
  //   {requestedBy: 'Charlie Brown', department: 'IT', service: 'IT', numberOfPosition: '1', job: 'Software Engineer', status: 'Open'},
  // ]

  requestsListColumns: string[] = ['#', 'Requested By',	'Department', 'Service', 'Job',	'Number Of Position', 'Status',	'Actions']
  
}
