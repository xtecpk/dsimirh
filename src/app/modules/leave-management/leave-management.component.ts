import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-leave-management',
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
  templateUrl: './leave-management.component.html',
  styleUrl: './leave-management.component.scss'
})
export class LeaveManagementComponent {

  leaveDataSource = [
    {name: 'John Doe', position: 'Software Engineer', department: 'IT', requestedTime: 'Day to Day', date: '2024-06-01', weeks: '2'},
    {name: 'John Doe', position: 'Software Engineer', department: 'IT', requestedTime: 'Day to Day', date: '2024-06-01', weeks: '2'},
    {name: 'John Doe', position: 'Software Engineer', department: 'IT', requestedTime: 'Day to Day', date: '2024-06-01', weeks: '2'},
  ]

  leaveColumns: string[] = ['#', 'Name', 'Position', 'Department', 'Requested Time', 'Date', 'Weeks', 'Status', 'Actions']



}
