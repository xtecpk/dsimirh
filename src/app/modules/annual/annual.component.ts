import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { AddAnnualDialogComponent } from './add-annual-dialog/add-annual-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { title } from 'node:process';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-annual',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    DatePipe,
    CommonTableComponent,
    TranslateModule
  ],
  templateUrl: './annual.component.html',
  styleUrl: './annual.component.scss'
})
export class AnnualComponent {

  httpService= inject(HttpService)
  readonly dialog = inject(MatDialog)
  leaveData: any = [];
  leaveDataSource :any = []

  openDialog() {
    const dialogRef = this.dialog.open(AddAnnualDialogComponent );

    dialogRef.afterClosed().subscribe(res => {
      this.leaveData = res
      if (this.leaveData) this.addLeave(this.leaveData);
    });
  }
  addLeave(leave: any) {
    this.leaveDataSource = [...this.leaveDataSource, leave]
  }

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpGetReq('getallleaveplans').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((leave:any) => {
          const leaveObj = {
            title: leave.Title, 
            startDate: leave.LeaveDate, 
            endDate: leave.Valid , 
            total: leave.TotalDays,
            status: leave.Status, 
            creationDate: leave.CreatedAt
          }
          this.leaveData.push(leaveObj)
        })
        this.leaveDataSource = this.leaveData
      }
    })
  }
  /*leaveDataSource = [
    {title: 'Planning 2021', startDate: '01-01-2021', endDate: '10-01-2021', total: '12', status: 'Yes', creationDate: '08-06-2021'},
    {title: 'Planning 2021', startDate: '01-01-2021', endDate: '10-01-2021', total: '23', status: 'Yes', creationDate: '08-06-2021'},
    {title: 'Planning 2021', startDate: '01-01-2021', endDate: '10-01-2021', total: '20', status: 'Yes', creationDate: '08-06-2021'}
  ]*/

  leaveColumns: string[] = ['#', 'Title', 'Start Date', 'End Date', 'Total', 'Status', 'Creation Date', 'Actions']
  

}
