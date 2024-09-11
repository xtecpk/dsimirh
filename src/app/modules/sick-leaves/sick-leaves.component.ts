import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CalenderComponent } from '../../shared-component/calender/calender.component';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { AddSickLeaveComponent } from './add-sick-leave/add-sick-leave.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../shared-component/services/user.service';

@Component({
  selector: 'app-sick-leaves',
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
  templateUrl: './sick-leaves.component.html',
  styleUrl: './sick-leaves.component.scss'
})
export class SickLeavesComponent implements OnInit {
  readonly dialog = inject(MatDialog)
  sickLeaveData: any;
  userService = inject(UserService);
  selectedUser: string | undefined;

  ngOnInit() {
    this.userService.currentUser$.subscribe(user => {
      this.selectedUser = user;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddSickLeaveComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.sickLeaveData = res
      if (this.sickLeaveData) this.addLeave(this.sickLeaveData);
    });
  }
  addLeave(leave: any) {
    this.sickLeaveDataSource = [...this.sickLeaveDataSource, leave]
  }
  sickLeaveDataSource = [
    {employeeId: '1111', fullName: 'Hamza Tariq', service: 'IT Manager', departureDate: '12 Jan 2022', dateResumed: '15 Jan 2022'},
    {employeeId: '1111', fullName: 'Hamza Tariq', service: 'IT Manager', departureDate: '12 Jan 2022', dateResumed: '15 Jan 2022'},
    {employeeId: '1111', fullName: 'Hamza Tariq', service: 'IT Manager', departureDate: '12 Jan 2022', dateResumed: '15 Jan 2022'}
  ]

  sickLeaveColumns: string[] = ['#', 'Employee ID',	'Full Name',	'Service',	'Departure Date', 'Date Resumed',	'Actions']
  
}
