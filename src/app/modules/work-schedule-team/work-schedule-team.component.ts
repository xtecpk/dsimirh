import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CalenderComponent } from '../../shared-component/calender/calender.component';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { WorkSchedulePopupComponent } from './work-schedule-popup/work-schedule-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-work-schedule-team',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    CalenderComponent,
    CommonTableComponent,
    TranslateModule
  ],
  templateUrl: './work-schedule-team.component.html',
  styleUrl: './work-schedule-team.component.scss'
})
export class WorkScheduleTeamComponent {
  readonly dialog = inject(MatDialog)
  workScheduleData: any;

  openDialog() {
    const dialogRef = this.dialog.open(WorkSchedulePopupComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.workScheduleData = res
      if (this.workScheduleData) this.addWork(this.workScheduleData);
    });
  }
  addWork(work: any) {
    this.workScheduleSourceData = [...this.workScheduleSourceData, work]
  }
  workScheduleSourceData = [
    {employeeName: 'A', shift: 'Morning', starting: '08:00 AM', ending: '04:00 PM', noOfBeds: '20', service: 'Regular'},
    {employeeName: 'B', shift: 'Evening', starting: '04:00 PM', ending: '12:00 AM', noOfBeds: '20', service: 'Regular'},
    {employeeName: 'C', shift: 'Night', starting: '12:00 AM', ending: '08:00 AM', noOfBeds: '20', service: 'Regular'}
  ]

  workScheduleColumns: string[] = ['#', 'Employee Name',	'Shift',	'Starting',	'Ending', 'No Of Beds', 'Service',	'Actions']
}
