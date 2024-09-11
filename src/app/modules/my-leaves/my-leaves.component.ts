import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { LeavesPopupComponent } from './leaves-popup/leaves-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-leaves',
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
  templateUrl: './my-leaves.component.html',
  styleUrl: './my-leaves.component.scss'
})
export class MyLeavesComponent {
  readonly dialog = inject(MatDialog)
  leaveData: any;

  openDialog() {
    const dialogRef = this.dialog.open(LeavesPopupComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.leaveData = res
      if (this.leaveData) this.addLeave(this.leaveData);
    });
  }
  addLeave(subDivision: any) {
    this.leaveDataSource = [...this.leaveDataSource, subDivision]
  }
  leaveDataSource = [
    {leaveType: 'Hourly', startDate: '24 Dec 2023', endDate: '15 Feb 2024', startTime: '11:00 AM', endTime: '12:00 AM', duration: '1 month', status: 'Granted'},
    {leaveType: 'Annual', startDate: '24 Dec 2023', endDate: '15 Feb 2024', startTime: '11:00 AM', endTime: '12:00 AM', duration: '1 month', status: 'Rejected'},
    {leaveType: 'Day', startDate: '24 Dec 2023', endDate: '15 Feb 2024', startTime: '11:00 AM', endTime: '12:00 AM', duration: '1 month', status: 'Pending'}
  ]

  leaveColumns: string[] = ['#', 'Leave Type' , 'Start Date' , 'End Date' , 'Start Time' , 'End Time' , 'Duration' , 'Status']

}
