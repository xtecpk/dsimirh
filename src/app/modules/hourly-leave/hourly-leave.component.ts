import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { LeavesDialogComponent } from '../leaves-dialog/leaves-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LeaveStatusComponent } from '../../shared-component/leave-status/leave-status.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hourly-leave',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    CommonTableComponent,
    LeaveStatusComponent,
    TranslateModule
  ],
  templateUrl: './hourly-leave.component.html',
  styleUrl: './hourly-leave.component.scss'
})
export class HourlyLeaveComponent {
  leaveDataSource = [
    {name: 'John Doe', position: 'Software Engineer', department: 'IT', requestedTime: 'Day to Day', date: '2024-06-01', weeks: '2'},
    {name: 'John Doe', position: 'Software Engineer', department: 'IT', requestedTime: 'Day to Day', date: '2024-06-01', weeks: '2'},
    {name: 'John Doe', position: 'Software Engineer', department: 'IT', requestedTime: 'Day to Day', date: '2024-06-01', weeks: '2'},
  ]

  leaveColumns: string[] = ['#', 'Name', 'Position', 'Department', 'Requested Time', 'Date', 'Weeks', 'Status', 'Actions']

  readonly dialog = inject(MatDialog)
  leaveData: any;

  openDialog() {
    const dialogRef = this.dialog.open(LeavesDialogComponent, {
      data: {fieldsToShow: ['time', 'hour-to-hour']}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.leaveData = res
      if (this.leaveData) this.addLeave(this.leaveData);
    });
  }
  addLeave(leave: any) {
    this.leaveDataSource = [...this.leaveDataSource, leave]
  }

}
