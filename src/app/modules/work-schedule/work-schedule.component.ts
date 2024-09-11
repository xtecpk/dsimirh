import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CalenderComponent } from '../../shared-component/calender/calender.component';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { AddWorkScheduleDialogComponent } from './add-work-schedule-dialog/add-work-schedule-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-work-schedule',
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
  templateUrl: './work-schedule.component.html',
  styleUrl: './work-schedule.component.scss'
})
export class WorkScheduleComponent {
  readonly dialog = inject(MatDialog)
  workScheduleData: any;

  openDialog() {
    const dialogRef = this.dialog.open(AddWorkScheduleDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.workScheduleData = res
      if (this.workScheduleData) this.addWork(this.workScheduleData);
    });
  }
  addWork(work: any) {
    this.workScheduleSourceData = [...this.workScheduleSourceData, work]
  }
  workScheduleSourceData = [
    {teamCode: 'A', shift: 'Permanence', starting: '07:30 AM', ending: '04:30 PM', noOfBeds: '', service: 'Regular'},
    {teamCode: 'B', shift: 'Garde', starting: '05:00 PM', ending: '07:00 AM', noOfBeds: '', service: 'Regular'},
    {teamCode: 'C', shift: 'Repos', starting: '12:00 AM', ending: '11:59 PM', noOfBeds: '', service: 'Regular'}
  ]

  workScheduleColumns: string[] = ['#', 'Team Code',	'Shift',	'Starting',	'Ending', 'No Of Beds', 'Service',	'Actions']
  
}
