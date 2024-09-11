import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { MatDialog } from '@angular/material/dialog';
import { LeavesDialogComponent } from '../leaves-dialog/leaves-dialog.component';
import { LeaveStatusComponent } from '../../shared-component/leave-status/leave-status.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-maternity-leave',
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
  templateUrl: './maternity-leave.component.html',
  styleUrl: './maternity-leave.component.scss'
})
export class MaternityLeaveComponent {

  readonly dialog = inject(MatDialog)
  leaveData: any;

  openDialog() {
    const dialogRef = this.dialog.open(LeavesDialogComponent, {
      data: {fieldsToShow: ['maternity']}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.leaveData = res
      if (this.leaveData) this.addLeave(this.leaveData);
    });
  }
  addLeave(leave: any) {
    this.leaveDataSource = [...this.leaveDataSource, leave]
  }

  leaveDataSource = [
    {name: 'John Doe', position: 'Software Engineer', department: 'IT', requestedTime: 'Day to Day', date: '2024-06-01', weeks: '2'},
    {name: 'John Doe', position: 'Software Engineer', department: 'IT', requestedTime: 'Day to Day', date: '2024-06-01', weeks: '2'},
    {name: 'John Doe', position: 'Software Engineer', department: 'IT', requestedTime: 'Day to Day', date: '2024-06-01', weeks: '2'},
  ]

  leaveColumns: string[] = ['#', 'Name', 'Position', 'Department', 'Requested Time', 'Date', 'Weeks', 'Status', 'Actions']

}
